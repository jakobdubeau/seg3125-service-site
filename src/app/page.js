import Image from "next/image"
import Link from "next/link"
import { Stethoscope, Sparkles } from "lucide-react"
import { GiTooth } from "react-icons/gi"

export default function Home() {
	return (
		<div>
			<section className="bg-blue-950 text-white relative overflow-hidden">
				<div className="relative flex flex-col-reverse lg:flex-row items-end gap-2">
					<div className="w-full lg:w-[50%] shrink-0 relative h-64 sm:h-80 lg:h-[575px]">
						<Image
							src="/dentist2.png"
							alt="Smile Dental"
							fill
							className="object-contain object-center"
						/>
					</div>
					<div className="flex-1 flex flex-col gap-6 py-12 lg:py-32 lg:pr-20">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-snug">
							Quality Dental<br />Care for Everyone
						</h1>
						<p className="text-white/80 text-base lg:text-xl leading-relaxed pr-4">
							We offer high-quality dental care for your whole family in a comfortable, welcoming environment. From general checkups to cosmetic treatments, we have you covered.
						</p>
						<div className="pt-2">
							<Link
								href="/about-us/why-choose-us"
								className="inline-block bg-sky-500 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-sky-400 transition-colors"
							>
								Why Choose Us
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-gray-50 py-20">
				<div className="px-6 sm:px-12 lg:px-32 xl:px-64">
					<h2 className="text-4xl font-bold text-blue-950 mb-2 text-center">Our Services</h2>
					<p className="text-gray-500 mb-10 text-center">Comprehensive dental care tailored to your needs.</p>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
						<div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
							<div className="w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center mb-5">
								<Stethoscope className="w-6 h-6 text-sky-500" />
							</div>
							<h3 className="text-lg font-semibold text-blue-950 mb-2">General Dentistry</h3>
							<p className="text-gray-500 text-sm leading-relaxed">Routine checkups, cleanings, fillings, and preventive care for the whole family.</p>
							<Link href="/services/general-dentistry" className="inline-block mt-5 text-sm font-medium text-sky-500 hover:text-sky-600 transition-colors">
								Learn more
							</Link>
						</div>
						<div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
							<div className="w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center mb-5">
								<Sparkles className="w-6 h-6 text-sky-500" />
							</div>
							<h3 className="text-lg font-semibold text-blue-950 mb-2">Cosmetic Dentistry</h3>
							<p className="text-gray-500 text-sm leading-relaxed">Teeth whitening, veneers, bonding, and complete smile makeovers.</p>
							<Link href="/services/cosmetic-dentistry" className="inline-block mt-5 text-sm font-medium text-sky-500 hover:text-sky-600 transition-colors">
								Learn more
							</Link>
						</div>
						<div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
							<div className="w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center mb-5">
								<GiTooth className="w-6 h-6 text-sky-500" />
							</div>
							<h3 className="text-lg font-semibold text-blue-950 mb-2">Orthodontics</h3>
							<p className="text-gray-500 text-sm leading-relaxed">Braces, clear aligners, and retainers for a straighter, healthier bite.</p>
							<Link href="/services/orthodontics" className="inline-block mt-5 text-sm font-medium text-sky-500 hover:text-sky-600 transition-colors">
								Learn more
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-blue-950 text-white py-20">
				<div className="px-6 sm:px-12 lg:px-32 xl:px-64">
					<h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 leading-normal">What People Are Saying<br />About Our Dental Clinic</h2>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
						<div className="bg-white/10 rounded-xl p-6">
							<p className="text-blue-100 text-sm leading-relaxed mb-5">"Thank you Dr. Alex and the team for making me feel very comfortable on my first visit. You were all very professional and helpful."</p>
							<p className="text-white font-semibold text-sm">Laura Bianchi</p>
						</div>
						<div className="bg-white/10 rounded-xl p-6">
							<p className="text-blue-100 text-sm leading-relaxed mb-5">"Excellent dentist. Everything is explained thoroughly. I had chipped teeth repaired and they look phenomenal. I am extremely pleased."</p>
							<p className="text-white font-semibold text-sm">Marcus Reid</p>
						</div>
						<div className="bg-white/10 rounded-xl p-6">
							<p className="text-blue-100 text-sm leading-relaxed mb-5">"I was nervous about my first visit but the staff made me feel at ease right away. The care was thorough and gentle. I would not go anywhere else."</p>
							<p className="text-white font-semibold text-sm">Sarah Mitchell</p>
						</div>
					</div>
					<div className="text-center">
						<Link href="/about-us/testimonials" className="inline-block border border-white/30 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors">
							View All
						</Link>
					</div>
				</div>
			</section>

			<section className="bg-white py-16 border-t border-gray-100">
				<div className="px-6 sm:px-12 lg:px-32 xl:px-64 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
					<div>
						<h2 className="text-2xl lg:text-3xl font-bold text-blue-950 mb-2">Ready to book your appointment?</h2>
						<p className="text-gray-500">Our team is here to help. Book online or give us a call.</p>
					</div>
					<Link
						href="/book"
						className="shrink-0 bg-sky-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-sky-400 transition-colors"
					>
						Book an Appointment
					</Link>
				</div>
			</section>
		</div>
	)
}
