import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const services = [
	{ name: "Traditional Braces", desc: "Time-tested metal braces that effectively correct a wide range of alignment issues." },
	{ name: "Clear Aligners", desc: "Removable, nearly invisible trays that gradually shift teeth into alignment." },
	{ name: "Ceramic Braces", desc: "Tooth-colored brackets that blend with your smile for a more discreet look." },
	{ name: "Retainers", desc: "Custom retainers to maintain your results after orthodontic treatment is complete." },
	{ name: "Children's Orthodontics", desc: "Early intervention treatment to guide jaw development and prevent future issues." },
	{ name: "Adult Orthodontics", desc: "Effective alignment options tailored to the needs and preferences of adult patients." },
]

export default function Orthodontics() {
	return (
		<div className="bg-white min-h-screen">
			<div className="bg-blue-950 text-white py-14 px-64">
				<p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Services</p>
				<h1 className="text-4xl font-bold mb-2">Orthodontics</h1>
				<p className="text-blue-300 max-w-xl">Braces, clear aligners, and retainers to straighten your teeth and improve your bite comfortably.</p>
			</div>

			<div className="px-64 py-16">
				<div className="grid grid-cols-2 gap-16 items-start mb-16">
					<div>
						<h2 className="text-2xl font-bold text-blue-950 mb-4">Straighter Teeth at Any Age</h2>
						<p className="text-gray-500 leading-relaxed mb-4">Orthodontic treatment goes beyond straight teeth. A properly aligned bite improves chewing, reduces wear on your teeth, and makes oral hygiene easier. Our orthodontic team works with children, teens, and adults.</p>
						<p className="text-gray-500 leading-relaxed mb-8">We offer a range of treatment options from traditional braces to modern clear aligners, so you can choose what fits your lifestyle and goals best.</p>
						<Link href="/book" className="inline-block bg-sky-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-sky-400 transition-colors">
							Book a Consultation
						</Link>
					</div>
					<div className="relative w-full h-72 rounded-2xl overflow-hidden">
						<Image src="/braces.jpg" alt="Orthodontics" fill className="object-cover object-center" />
					</div>
				</div>

				<h2 className="text-2xl font-bold text-blue-950 mb-8">What We Offer</h2>
				<div className="grid grid-cols-2 gap-6">
					{services.map(s => (
						<div key={s.name} className="flex gap-4 p-6 border border-gray-100 rounded-xl">
							<CheckCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
							<div>
								<p className="font-semibold text-blue-950 mb-1">{s.name}</p>
								<p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
