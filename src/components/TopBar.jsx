import { Mail, Phone } from "lucide-react"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import Link from "next/link"

export default function TopBar() {
	return (
		<div className="bg-blue-900 text-white text-sm">
			<div className="px-48 py-2.5 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<a href="#" aria-label="Facebook" className="hover:text-sky-300 transition-colors">
						<FaFacebook className="w-4 h-4" />
					</a>
					<a href="#" aria-label="Instagram" className="hover:text-sky-300 transition-colors">
						<FaInstagram className="w-4 h-4" />
					</a>
				</div>
				<div className="flex items-center gap-2 text-blue-200">
					<Mail className="w-4 h-4" />
					<span>contact@smiledental.ca</span>
				</div>
				<div className="flex items-center gap-2 text-blue-200">
					<Phone className="w-4 h-4" />
					<span>(613) 111-1111</span>
				</div>
				<Link
					href="/book"
					className="bg-sky-500 text-white px-5 py-1.5 rounded-full text-sm font-semibold hover:bg-sky-400 transition-colors"
				>
					Book an Appointment
				</Link>
			</div>
		</div>
	)
}
