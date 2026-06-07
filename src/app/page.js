import Image from "next/image"
import Link from "next/link"

export default function Home() {
	return (
		<div>
			<section className="bg-blue-950 text-white relative overflow-hidden">
				<div className="relative px-64 py-0 flex items-end gap-2">
					<div className="w-[50%] shrink-0 relative" style={{height: "575px"}}>
						<Image
							src="/dentist2.png"
							alt="Smile Dental"
							fill
							className="object-contain object-center"
						/>
					</div>
					<div className="flex-1 flex flex-col gap-6 py-32 pr-20">
						<h1 className="text-6xl font-bold leading-snug">
							Quality Dental<br />Care for Everyone
						</h1>
						<p className="text-white/80 text-xl leading-relaxed">
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
