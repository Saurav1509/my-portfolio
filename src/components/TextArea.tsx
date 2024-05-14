import { Textarea } from "@/components/ui/textarea"
import { ChangeEventHandler } from "react"

export function TextArea({ onChange }: { onChange: ChangeEventHandler<HTMLTextAreaElement> }) {
    return <Textarea onChange={onChange} placeholder="Type your message here." />
}
