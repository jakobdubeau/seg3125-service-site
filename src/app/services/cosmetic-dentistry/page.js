import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const services = [
	{ name: "Teeth Whitening", desc: "Professional in-office whitening that delivers results in a single visit." },
	{ name: "Porcelain Veneers", desc: "Thin custom shells bonded to the front of teeth to improve shape, size, and color." },
	{ name: "Dental Bonding", desc: "Tooth-colored resin applied to repair chips, cracks, or gaps quickly and affordably." },
	{ name: "Smile Makeovers", desc: "A personalized combination of treatments to completely transform your smile." },
	{ name: "Tooth Contouring", desc: "Minor reshaping of enamel to correct uneven or slightly misshapen teeth." },
	{ name: "Gum Contouring", desc: "Reshaping the gumline to create a more balanced and proportionate smile." },
]

export default function CosmeticDentistry() {
	return (
		<div className="bg-white min-h-screen">
			<div className="bg-blue-950 text-white py-14 px-64">
				<p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Services</p>
				<h1 className="text-4xl font-bold mb-2">Cosmetic Dentistry</h1>
				<p className="text-blue-300 max-w-xl">Teeth whitening, veneers, bonding, and complete smile makeovers to help you look and feel your best.</p>
			</div>

			<div className="px-64 py-16">
				<div className="grid grid-cols-2 gap-16 items-start mb-16">
					<div>
						<h2 className="text-2xl font-bold text-blue-950 mb-4">A Smile You Can Be Proud Of</h2>
						<p className="text-gray-500 leading-relaxed mb-4">Cosmetic dentistry goes beyond oral health. Whether you want to brighten your smile, fix a chip, or completely reinvent your look, our team has the expertise to help you feel confident every time you smile.</p>
						<p className="text-gray-500 leading-relaxed mb-8">We take a personalized approach to every cosmetic treatment, ensuring results that look natural and feel comfortable. Book a consultation to discuss your goals.</p>
						<Link href="/book" className="inline-block bg-sky-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-sky-400 transition-colors">
							Book a Consultation
						</Link>
					</div>
					<div className="relative w-full h-72 rounded-2xl overflow-hidden">
						<Image src="/whitening.jpg" alt="Cosmetic dentistry" fill className="object-cover object-center" />
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
