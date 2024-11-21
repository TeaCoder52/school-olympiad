import { Atom, Globe, Microscope } from 'lucide-react'

export const subjects = [
	{
		name: 'Физика',
		description: 'Наука о материи, энергии и их взаимодействиях',
		slug: 'physics',
		icon: Atom,
		gradient: 'from-orange-400 to-orange-500'
	},
	{
		name: 'Химия',
		description: 'Наука о составе, строении и свойствах веществ',
		slug: 'chemistry',
		icon: Atom,
		gradient: 'from-pink-400 to-pink-500'
	},
	{
		name: 'География',
		description: 'Наука о земной поверхности, ее структуре и процессах',
		slug: 'geography',
		icon: Globe,
		gradient: 'from-green-400 to-green-500'
	},
	{
		name: 'Экология',
		description: 'Наука о взаимодействиях организмов со средой',
		slug: 'ecology',
		icon: Microscope,
		gradient: 'from-blue-400 to-blue-500'
	}
]
