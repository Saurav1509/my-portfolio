import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function RatingSlider({ className, onValueChange, ...props }: SliderProps) {
    return (
        <Slider
            defaultValue={[3]}
            max={5}
            step={1}
            className={cn("w-[220px]", className)}
            onValueChange={onValueChange}
            {...props}
        />
    )
}
