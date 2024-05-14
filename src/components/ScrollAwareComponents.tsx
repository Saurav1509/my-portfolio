"use client"

import { useEffect, useState } from "react";
import { Feedback } from "./Feedback";

export const ScrollAwareComponents = ({ children }: { children: React.ReactNode }) => {
    const [showInfiniteMovingCards, setShowInfiniteMovingCards] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setShowInfiniteMovingCards(true);
        } else {
            setShowInfiniteMovingCards(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className={`${showInfiniteMovingCards ? 'transition-opacity duration-500 ease-in opacity-100' : 'transition-opacity duration-500 ease-out opacity-0'}`}>
            <div className="opacity-100">{showInfiniteMovingCards && children}</div>
        </div>
    )
}