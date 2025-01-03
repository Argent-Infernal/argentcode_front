import { Portfolio } from "./PortfolioPage";
import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Портфолио',
}

export default function PortfolioPage () {
    return <Portfolio/>
}