import { ReactNode } from "react";

interface TitleProps {
    children?: ReactNode;
}

export default function Title({children}: TitleProps) {
    return (
        <h1 className="text-4xl my-8 text-center">{children}</h1>
    )
}