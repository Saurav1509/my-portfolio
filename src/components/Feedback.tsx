"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextArea } from "./TextArea"
import { RatingSlider } from "./RatingSlider"
import { useState } from "react"
import { feedback } from "@/actions/feedback/route"
import { LoadingButton } from "./LoadingButton"

export function Feedback() {

    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [rating, setRating] = useState(0);
    const [showLoader, setShowLoader] = useState(false)

    const onSubmit = async () => {
        setShowLoader(true)
        console.log("submit clicked")
        console.log(showLoader)
        const res = await feedback(email, content, rating)
        console.log(res)
        if (res == true) {
            setShowLoader(false)
        }

    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="z-20" variant="outline">Feedback</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Feedback</DialogTitle>
                    <DialogDescription>
                        Please provide your honest feedback. Would like to hear and work on the betterment of this site.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Email
                        </Label>
                        <Input
                            id="email"
                            defaultValue="example@email.com"
                            className="col-span-3"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="feedback-comment" className="text-right">
                            Comment
                        </Label>
                        <div>
                            <TextArea
                                onChange={(e) => {
                                    setContent(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="rating" className="text-right">
                            Rating
                        </Label>
                        <div>
                            <RatingSlider
                                onValueChange={(newValue: number[]) => {
                                    setRating(newValue[0])
                                }}
                            />
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <LoadingButton onSubmit={onSubmit} text="Submit" loading={showLoader} disabled={showLoader} />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
