import Image from "next/image"
import Link from "next/link"

export default function Home() {
	return (
		<div>
			<section className="bg-blue-900 text-white">
				<div className="px-72 py-40 flex items-center gap-20">
					<div className="w-[480px] h-[340px] shrink-0 relative overflow-hidden rounded-2xl ring-4 ring-white/10 shadow-2xl">
						<Image
							src="/dentist.jpg"
							alt="Smile Dental"
							fill
							className="object-cover"
						/>
					</div>
					<div className="flex-1 flex flex-col gap-6">
						<h1 className="text-6xl font-bold leading-snug">
							Quality Dental<br />Care for Everyone
						</h1>
						<p className="text-blue-200 text-xl leading-relaxed">
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
		</div>
	)
}
