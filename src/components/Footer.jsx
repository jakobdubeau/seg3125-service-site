import { Phone, Mail } from "lucide-react"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
	return (
		<footer className="bg-blue-950 text-white">
			<div className="px-64 py-16 grid grid-cols-4 gap-12 pr-18">
				<div className="col-span-1 flex flex-col gap-5 pr-20">
					<span className="text-xl font-bold">Smile Dental</span>
					<p className="text-blue-300 text-sm leading-relaxed">
						High-quality dental care for your whole family in a comfortable, welcoming environment.
					</p>
					<div className="flex items-center gap-3">
						<a href="#" aria-label="Facebook" className="text-blue-300 hover:text-white transition-colors">
							<FaFacebook size={18} />
						</a>
						<a href="#" aria-label="Instagram" className="text-blue-300 hover:text-white transition-colors">
							<FaInstagram size={18} />
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300">Services</h3>
					<ul className="flex flex-col gap-2 text-sm text-blue-200">
						<li><Link href="/services/general-dentistry" className="hover:text-white transition-colors">General Dentistry</Link></li>
						<li><Link href="/services/cosmetic-dentistry" className="hover:text-white transition-colors">Cosmetic Dentistry</Link></li>
						<li><Link href="/services/orthodontics" className="hover:text-white transition-colors">Orthodontics</Link></li>
					</ul>
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300">Quick Links</h3>
					<ul className="flex flex-col gap-2 text-sm text-blue-200">
						<li><Link href="/about-us/why-choose-us" className="hover:text-white transition-colors">Why Choose Us</Link></li>
						<li><Link href="/about-us/our-team" className="hover:text-white transition-colors">Our Team</Link></li>
						<li><Link href="/resources/faq" className="hover:text-white transition-colors">FAQ</Link></li>
						<li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
					</ul>
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300">Contact Us</h3>
					<div className="flex flex-col gap-3 text-sm text-blue-200">
						<div className="flex items-center gap-2">
							<Phone className="w-4 h-4 shrink-0" />
							<span>(613) 111-1111</span>
						</div>
						<div className="flex items-center gap-2">
							<Mail className="w-4 h-4 shrink-0" />
							<span>contact@smiledental.ca</span>
						</div>
					</div>
					<Link
						href="/book"
						className="mt-2 self-start bg-sky-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-sky-400 transition-colors"
					>
						Book an Appointment
					</Link>
				</div>
			</div>

			<div className="border-t border-blue-900 py-5 text-center text-blue-400 text-xs">
				&copy; 2026 Smile Dental. All rights reserved.
			</div>
		</footer>
	)
}
