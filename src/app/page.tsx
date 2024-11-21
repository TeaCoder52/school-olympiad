import Link from 'next/link'

import { Button } from '@/components/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/card'

import { subjects } from './subjects.data'

export default function HomePage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100'>
			<main className='container mx-auto px-4 py-16'>
				<h1 className='mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-center text-5xl font-extrabold text-transparent'>
					Гармония наук: Биология и её связи
				</h1>
				<p className='mx-auto mb-12 max-w-5xl text-center text-xl text-gray-700'>
					Погрузитесь в мир, где биология переплетается с физикой,
					химией, географией и экологией. Узнайте, как совместная
					работа наук раскрывает тайны жизни на Земле.
				</p>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2'>
					{subjects.map(subject => (
						<Card
							key={subject.slug}
							className='overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
						>
							<CardHeader
								className={`bg-gradient-to-r ${subject.gradient} text-white`}
							>
								<CardTitle className='flex items-center gap-2'>
									{<subject.icon className='h-6 w-6' />}
									{subject.name}
								</CardTitle>
							</CardHeader>
							<CardContent className='pt-4'>
								<CardDescription>
									{subject.description}
								</CardDescription>
								<Button
									asChild
									className={`mt-4 w-full bg-gradient-to-b ${subject.gradient} text-white`}
								>
									<Link href={`/subject/${subject.slug}`}>
										Изучить связи
									</Link>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</main>
		</div>
	)
}
