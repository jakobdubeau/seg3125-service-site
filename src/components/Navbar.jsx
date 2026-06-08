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
		<nav className="bg-white border-b border-gray-100 top-0 z-50">
			<div className="px-48 py-6 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2">
					<Smile className="w-8 h-8 text-sky-500" />
					<span className="text-2xl font-bold text-blue-900">Smile Dental</span>
				</Link>

				<div className="flex items-center gap-5">
					{navItems.map((item) => (
						<div key={item.name} className="relative group">
							{item.dropdown ? (
								<span className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-blue-900 transition-colors py-2 cursor-default select-none">
									{item.name}
									<ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
								</span>
							) : (
								<Link
									href={item.href}
									className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-blue-900 transition-colors py-2"
								>
									{item.name}
								</Link>
							)}

							{item.dropdown && (
								<div className="absolute top-full left-0 pt-1 hidden group-hover:block w-52">
									<div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
										{item.dropdown.map((child) => (
											<Link
												key={child.name}
												href={child.href}
												className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
											>
												{child.name}
											</Link>
										))}
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</nav>
	)
}
