
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { Feedback } from "./Feedback"

export default function Navbar() {
  return <div className="flex justify-around items-center pt-4 pb-4 z-10 bg-secondary-foreground">
    <div className="flex justify-center items-center z-10">
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="font-bold flex text-2xl ml-4 text-primary">
        Saurav
        <div className="text-secondary pl-2"> Web Portfolio</div>
      </div>
    </div>
    <div className="flex">
      <Feedback />
    </div>
  </div>
}
