import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {ReactElement} from "react";

interface ContactLinkProps {
    icon: ReactElement,
    text: string,
    link: string,
}

export default function ContactLink({icon,text, link}: ContactLinkProps) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <a href={link}>
                    <div className='text-primary text-2xl'>
                        {icon}
                    </div>
                </a>
            </TooltipTrigger>
            <TooltipContent>
                <p>{text}</p>
            </TooltipContent>
        </Tooltip>
    )
}