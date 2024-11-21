import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Гармония наук: Биология и её связи',
	description:
		'Погрузитесь в мир, где биология переплетается с физикой, химией, географией и экологией. Узнайте, как совместная работа наук раскрывает тайны жизни на Земле.',
	robots: {
		follow: false,
		index: false
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
