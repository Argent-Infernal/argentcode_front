interface HorizontalLineProps {
    className?: string
    isHorizontal: boolean
}

export default function HorizontalLine({className, isHorizontal}: HorizontalLineProps) {
    return (
        <hr className={`bg-primary ${isHorizontal ? 'h-[3px]' : 'w-[3px] h-svh'} rounded ${className}`}/>
    )
}