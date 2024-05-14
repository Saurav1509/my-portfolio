import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'

type ImageCardProps = React.ComponentProps<typeof Card> & {
  imageLink: string;
  width: number;
  height: number;
  alt: string;
}

export default function ImageCard({ className, imageLink, width, height, alt, ...props }: ImageCardProps) {
  const imageStyle = {
    borderRadius: '8%',
  }
  let cardWidth = width + 20;
  return (
    <>
      <Card className={cn(`w-[${cardWidth}px] p-4 bg-secondary-foreground border-0`, className)} {...props}>
        <Image
          src={imageLink}
          width={width}
          height={height}
          alt={alt}
          style={imageStyle}
        />
      </Card>
    </>
  )
}
