import { BellRing, Check } from "lucide-react"
import Link from 'next/link'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const myDetails = [
  {
    title: "Who am I ?",
    description: "I am Saurav. A Web dev, Cloud Architect, Web3 Enthusiast, Gamer for life",
  },
  {
    title: "Who do I do?",
    description: "I code Frontends, Backends, Games, Web3. I Game. I get good day by day at all of these",
  },
  {
    title: "Am i available for hire?",
    description: "I have 3 Years of Experience in IT industry. Architecting and deploying a lot on the Cloud and automating a lot of it. Also, Yes i am looking for good opportinities",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function DeatilsCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px] bg-secondary-foreground border-0 z-10", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-secondary">Saurav Sayana</CardTitle>
        <CardDescription className="text-primary">AWS Devops Engineer at Sify Technologies</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">

        <div>
          {myDetails.map((detail, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none text-primary">
                  {detail.title}
                </p>
                <p className="text-sm text-secondary">
                  {detail.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href="https://storage.googleapis.com/devops-saurav-portfolio/Saurav_Sayana_Resume.pdf" className="z-10 flex justify-center" target="_blank">
          <Button className="w-full z-10">
            Download Full Resume
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
