import {ReactNode} from "react";
import {
    SiMui,
    SiNestjs,
    SiNextdotjs,
    SiPostgresql, SiPrisma,
    SiReact,
    SiRedux,
    SiSass,
    SiTailwindcss,
    SiTypescript,
    SiMysql
} from "react-icons/si";
import { FaLaravel, FaPhp } from "react-icons/fa";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

const techIcons: { [key: string]: () => ReactNode } = {
    react: () => <SiReact/>,
    nextjs: () => <SiNextdotjs />,
    tailwindcss: () => <SiTailwindcss />,
    scss: () => <SiSass />,
    reduxjs: () => <SiRedux />,
    nestjs: () => <SiNestjs />,
    postgresql: () => <SiPostgresql />,
    typescript: () => <SiTypescript />,
    prisma: () => <SiPrisma />,
    materialui: ()=> <SiMui/>,
    laravel: ()=> <FaLaravel/>,
    php: () => <FaPhp/>,
    mysql: () => <SiMysql/>

};

interface StackIconProps {
    tech: string;
}

export default function StackIcon({ tech }: StackIconProps) {
    const IconComponent = techIcons[tech.toLowerCase().trim()] || (() => <span>{tech}</span>);

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <span className='text-primary text-2xl'>
                    <IconComponent/>
                </span>
            </TooltipTrigger>
            <TooltipContent>
                <p>{tech}</p>
            </TooltipContent>
        </Tooltip>
    )
}