import { ArrowLeft, Atom, Globe, Microscope } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Button } from '@/components/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card'

const subjectIcons = {
	Физика: Atom,
	Химия: Atom,
	География: Globe,
	Экология: Microscope
}

const subjects = {
	physics: {
		name: 'Физика',
		description:
			'Связь биологии и физики: биофизика и физические процессы в живых системах',
		gradient: 'from-orange-400 to-orange-500',
		connections: [
			{
				title: 'Биомеханика',
				description:
					'Как законы механики описывают движения мышц, суставов и даже полёты птиц.'
			},
			{
				title: 'Биоэнергетика',
				description:
					'Процессы передачи энергии в организме объясняются физикой термодинамики.'
			},
			{
				title: 'Нейрофизика',
				description:
					'Как электрические импульсы проходят по нейронам — физика в действии!'
			},
			{
				title: 'Радиобиология',
				description:
					'Почему радиация разрушает ДНК? Физика объясняет влияние излучения.'
			},
			{
				title: 'Оптика в биологии',
				description:
					'От зрения до современных микроскопов, оптика играет ключевую роль в изучении биологии.'
			},
			{
				title: 'Акустика и животные',
				description:
					'Физика звука помогает понять, как дельфины и летучие мыши используют эхолокацию.'
			}
		]
	},
	chemistry: {
		name: 'Химия',
		description:
			'Связь биологии и химии: биохимия и молекулярные основы жизни',
		gradient: 'from-pink-400 to-pink-500',
		connections: [
			{
				title: 'Метаболизм',
				description:
					'Все химические реакции в нашем организме, от дыхания до переваривания пищи, — это биохимия!'
			},
			{
				title: 'Молекулярная биология',
				description:
					'Как белки, ДНК и РНК взаимодействуют на химическом уровне для обеспечения жизни.'
			},
			{
				title: 'Ферментология',
				description:
					'Ферменты, химические катализаторы жизни, ускоряют реакции в триллионы раз.'
			},
			{
				title: 'Биоорганическая химия',
				description:
					'Изучение органических молекул, которые обеспечивают жизнь — от сахаров до липидов.'
			},
			{
				title: 'Химия клеточных мембран',
				description:
					'Как липиды и белки обеспечивают транспорт веществ в клетку и из неё.'
			},
			{
				title: 'Химия экологии',
				description:
					'Влияние химических веществ (например, токсинов) на экосистемы и живые организмы.'
			}
		]
	},
	geography: {
		name: 'География',
		description:
			'Связь биологии и географии: биогеография и влияние среды на живые организмы',
		gradient: 'from-green-400 to-green-500',
		connections: [
			{
				title: 'Биогеография',
				description:
					'Почему кенгуру живут в Австралии, а не в Африке? География помогает это понять.'
			},
			{
				title: 'Ареалогия',
				description:
					'Закономерности распространения видов на планете зависят от географических условий.'
			},
			{
				title: 'Климатическая адаптация',
				description:
					'Как арктические животные приспособились к экстремальному холоду.'
			},
			{
				title: 'Островная биогеография',
				description:
					'Почему на островах часто возникают уникальные виды, такие как галапагосские игуаны.'
			},
			{
				title: 'Биомы Земли',
				description:
					'От тропиков до тундры — география формирует условия для жизни.'
			},
			{
				title: 'География эпидемий',
				description:
					'Как климат и ландшафт влияют на распространение болезней, таких как малярия.'
			}
		]
	},
	ecology: {
		name: 'Экология',
		description:
			'Связь биологии и экологии: взаимодействие организмов с окружающей средой',
		gradient: 'from-blue-400 to-blue-500',
		connections: [
			{
				title: 'Популяционная экология',
				description:
					'Как численность популяции зависит от хищников, конкурентов и ресурсов.'
			},
			{
				title: 'Экосистемная экология',
				description:
					'Как растения, животные и микроорганизмы взаимодействуют в природных сообществах.'
			},
			{
				title: 'Эволюционная экология',
				description:
					'Почему жирафы развили длинную шею? Экология объясняет эволюционные изменения.'
			},
			{
				title: 'Поведенческая экология',
				description:
					'Как и почему животные ведут себя по-разному в зависимости от среды обитания.'
			},
			{
				title: 'Антропогенная экология',
				description:
					'Как действия человека влияют на биосферу, от вырубки лесов до изменения климата.'
			},
			{
				title: 'Экология устойчивости',
				description:
					'Что мы можем сделать, чтобы экосистемы Земли оставались здоровыми?'
			}
		]
	}
}

export default function SubjectPage({ params }: { params: { slug: string } }) {
	const subject = subjects[params.slug as keyof typeof subjects]

	if (!subject) {
		notFound()
	}

	const SubjectIcon = subjectIcons[subject.name as keyof typeof subjectIcons]

	return (
		<div
			className={`min-h-screen bg-gradient-to-br from-${subject.gradient}-100 via-${subject.gradient}-200 to-${subject.gradient}-300`}
		>
			<main className='container mx-auto p-6'>
				<Button asChild variant='outline' className='mb-8'>
					<Link href='/' className='flex items-center gap-2'>
						<ArrowLeft className='h-4 w-4' /> Назад к предметам
					</Link>
				</Button>
				{/* <h1
					className={`mb-8 bg-gradient-to-r text-center text-5xl font-extrabold from-${subject.color}-600 to-${subject.color}-800 flex items-center justify-center gap-4 bg-clip-text text-transparent`}
				> */}
				<h1
					className={`mb-8 bg-gradient-to-r bg-clip-text text-center text-5xl font-extrabold text-transparent ${subject.gradient}`}
				>
					Биология и {subject.name}
				</h1>
				<p className='mb-12 text-center text-xl text-gray-700'>
					{subject.description}
				</p>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
					{subject.connections.map(connection => (
						<Card
							key={connection.title}
							className={`overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
						>
							<CardHeader
								className={`bg-gradient-to-r text-white ${subject.gradient}`}
							>
								<CardTitle className='flex items-center gap-2'>
									{connection.title}
								</CardTitle>
							</CardHeader>
							<CardContent className='pt-4'>
								<p className='text-gray-600'>
									{connection.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</main>
		</div>
	)
}
