import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const services = [
	{ name: "Routine Checkups", desc: "Comprehensive oral exams to catch issues early and keep your mouth healthy." },
	{ name: "Professional Cleanings", desc: "Removal of plaque and tartar buildup that regular brushing cannot address." },
	{ name: "Dental Fillings", desc: "Tooth-colored composite fillings to restore cavities discreetly and durably." },
	{ name: "Digital X-Rays", desc: "Low-radiation digital imaging for accurate diagnosis with minimal exposure." },
	{ name: "Dental Sealants", desc: "Protective coatings applied to back teeth to prevent decay in children and adults." },
	{ name: "Tooth Extractions", desc: "Safe and comfortable removal of damaged or problematic teeth when necessary." },
]

export default function GeneralDentistry() {
	return (
		<div className="bg-white min-h-screen">
			<div className="bg-blue-950 text-white py-14 px-64">
				<p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Services</p>
				<h1 className="text-4xl font-bold mb-2">General Dentistry</h1>
				<p className="text-blue-300 max-w-xl">Routine checkups, cleanings, fillings, and preventive care to keep your smile healthy all year long.</p>
			</div>

			<div className="px-64 py-16">
				<div className="grid grid-cols-2 gap-16 items-start mb-16">
					<div>
						<h2 className="text-2xl font-bold text-blue-950 mb-4">Preventive Care for the Whole Family</h2>
						<p className="text-gray-500 leading-relaxed mb-4">General dentistry forms the foundation of a healthy smile. Regular visits allow our team to monitor your oral health, detect problems early, and provide the care needed to prevent more serious issues down the road.</p>
						<p className="text-gray-500 leading-relaxed mb-8">We recommend visiting us every six months for a cleaning and exam. Our friendly team makes every visit comfortable for patients of all ages.</p>
						<Link href="/book" className="inline-block bg-sky-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-sky-400 transition-colors">
							Book an Appointment
						</Link>
					</div>
					<div className="relative w-full h-72 rounded-2xl overflow-hidden">
						<Image src="/dentist.jpg" alt="General dentistry" fill className="object-cover object-center" />
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
