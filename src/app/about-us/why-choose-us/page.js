import Link from "next/link"
import Image from "next/image"
import { Award, Heart, Clock, Users, ShieldCheck, Smile } from "lucide-react"

const reasons = [
	{ icon: Award, title: "Experienced Team", desc: "Our dentists bring over 15 years of combined experience across general, cosmetic, and orthodontic dentistry." },
	{ icon: Heart, title: "Patient-First Approach", desc: "We take the time to listen, answer your questions, and make sure you feel comfortable at every visit." },
	{ icon: Clock, title: "Flexible Hours", desc: "We offer early morning and evening appointments to work around your schedule." },
	{ icon: Users, title: "Family Friendly", desc: "From young children to seniors, we provide attentive care for every member of your family." },
	{ icon: ShieldCheck, title: "Modern Equipment", desc: "We use the latest dental technology including digital x-rays, intraoral cameras, and laser dentistry." },
	{ icon: Smile, title: "Comfortable Environment", desc: "Our clinic is designed to be calm and welcoming, helping even anxious patients feel at ease." },
]

export default function WhyChooseUs() {
	return (
		<div className="bg-white min-h-screen">
			<div className="bg-blue-950 text-white py-14 px-64">
				<p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
				<h1 className="text-4xl font-bold mb-2">Why Choose Us</h1>
				<p className="text-blue-300 max-w-xl">Discover what makes Smile Dental the right choice for your family's dental care.</p>
			</div>

			<div className="px-64 py-16">
				<div className="grid grid-cols-2 gap-16 items-center mb-20">
					<div className="relative w-full h-80 rounded-2xl overflow-hidden">
						<Image src="/dentalclinic.png" alt="Smile Dental clinic" fill className="object-cover object-center" />
					</div>
					<div>
						<h2 className="text-2xl font-bold text-blue-950 mb-4">Care You Can Count On</h2>
						<p className="text-gray-500 leading-relaxed mb-4">At Smile Dental, we believe that great dental care goes beyond treating teeth. It is about building lasting relationships with our patients and their families, earning trust one visit at a time.</p>
						<p className="text-gray-500 leading-relaxed mb-8">From the moment you walk through our doors, you will be greeted by a team that genuinely cares about your well-being and your smile.</p>
						<Link href="/book" className="inline-block bg-sky-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-sky-400 transition-colors">
							Book an Appointment
						</Link>
					</div>
				</div>

				<h2 className="text-2xl font-bold text-blue-950 mb-8 text-center">What Sets Us Apart</h2>
				<div className="grid grid-cols-3 gap-6">
					{reasons.map(r => {
						const Icon = r.icon
						return (
							<div key={r.title} className="p-6 border border-gray-100 rounded-xl">
								<div className="w-11 h-11 bg-sky-50 rounded-lg flex items-center justify-center mb-4">
									<Icon className="w-5 h-5 text-sky-500" />
								</div>
								<p className="font-semibold text-blue-950 mb-2">{r.title}</p>
								<p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
