
import { DeatilsCard } from "@/components/DetailsCard";
import { BackgroundBeams } from "@/components/ui/background-beams";

import ImageCard from "@/components/ImageCard";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { iconsList } from "@/lib/iconList";
import { ScrollAwareComponents } from "@/components/ScrollAwareComponents";
import { Feedback } from "@/components/Feedback";

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
      <ScrollAwareComponents>
        <div className="flex justify-center pt-16">
          <InfiniteMovingCards
            items={iconsList}
            direction="right"
            speed="normal"
          />
        </div>
        <div className="flex justify-center pt-16">
          <Feedback />
        </div>
      </ScrollAwareComponents>
      <BackgroundBeams />
    </div>
  );
}
