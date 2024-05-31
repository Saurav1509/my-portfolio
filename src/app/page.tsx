"use client"
import { DeatilsCard } from "@/components/DetailsCard";
import { BackgroundBeams } from "@/components/ui/background-beams";

import ImageCard from "@/components/ImageCard";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { iconsList } from "@/lib/iconList";
import { projects } from "@/lib/projectsList"
import { ScrollAwareComponents } from "@/components/ScrollAwareComponents";
import { Feedback } from "@/components/Feedback";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { HeadingGenerate } from "@/components/HeadingGenerate";
import ScrollToTop from "react-scroll-to-top";
import ScrollTop from "@/components/ScrollTop";

export default function Home() {
  return (
    <div className="bg-foreground min-h-screen">
      <div className="grid grid-cols-2 items-center pt-20">
        <div className=" justify-end flex mr-16 ">
          <DeatilsCard />
        </div>
        <div className="flex justify-start ml-16 ">
          <ImageCard imageLink="/PXL_20231231_070720594~2.png" width={250} height={150} alt="Picture of the Author" />
        </div>
      </div>
      <ScrollAwareComponents scroll={5}>
        <div className="flex justify-center pt-16 pb-4">
          <HeadingGenerate words="Learning... Processing... Developing... Shipping to Prod" />
        </div>
        <div className="flex justify-center">
          <InfiniteMovingCards
            items={iconsList}
            direction="right"
            speed="slow"
          />
        </div>
      </ScrollAwareComponents>

      <ScrollAwareComponents scroll={95}>
        <div className="flex justify-center pt-24">
          <HeadingGenerate words="The Awesome Projects showcase" />
        </div>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </ScrollAwareComponents>
      <ScrollTop />
      <BackgroundBeams />
    </div>
  );
}
