import { ChevronDown, Smile } from "lucide-react"
import Link from "next/link"

const navItems = [
	{ name: "Home", href: "/" },
	{
		name: "Services",
		href: "/services",
		dropdown: [
			{ name: "General Dentistry", href: "/services/general-dentistry" },
			{ name: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
			{ name: "Orthodontics", href: "/services/orthodontics" },
		],
	},
	{
		name: "About Us",
		href: "/about-us",
		dropdown: [
			{ name: "Why Choose Us", href: "/about-us/why-choose-us" },
			{ name: "Our Team", href: "/about-us/our-team" },
			{ name: "Testimonials", href: "/about-us/testimonials" },
		],
	},
	{
		name: "Resources",
		href: "/resources",
		dropdown: [
			{ name: "FAQ", href: "/resources/faq" },
		],
	},
	{ name: "Contact", href: "/contact" },
]

export default function Navbar() {
	return (
		<nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
			<div className="px-48 py-6 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2">
					<Smile className="w-8 h-8 text-sky-500" />
					<span className="text-2xl font-bold text-blue-900">Smile Dental</span>
				</Link>

				<div className="flex items-center gap-5">
					{navItems.map((item) => (
						<div key={item.name} className="relative">
							<Link
								href={item.href}
								className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-blue-900 transition-colors"
							>
								{item.name}
								{item.dropdown && <ChevronDown className="w-4 h-4" />}
							</Link>
						</div>
					))}
				</div>
			</div>
		</nav>
	)
}
