import type { Metadata } from "next"
import "./globals.scss"

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/700.css'
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/seo.constants"
import { Providers } from "./providers"

export const metadata: Metadata = {
	title: {
        absolute: SITE_NAME,
        template: `%s | ${SITE_NAME}`
    },
	description: SITE_DESCRIPTION
}


export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body>
				<div id='root' className="dark">
					<Providers>
						{children}
					</Providers>
				</div>
			</body>
		</html>
	)
}
