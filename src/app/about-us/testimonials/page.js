const testimonials = [
	{ name: "Laura Bianchi", since: "Patient since 2019", quote: "I have been coming to Smile Dental for years and every visit is genuinely pleasant. The staff are kind, the office is clean, and Dr. Chen always takes time to explain everything clearly." },
	{ name: "Marcus Reid", since: "Patient since 2021", quote: "I was nervous about getting braces as an adult, but Dr. Kim made the whole process stress-free. The clear aligner treatment worked better than I expected, and the results speak for themselves." },
	{ name: "Sarah Mitchell", since: "Patient since 2020", quote: "My whole family comes here now. The kids actually look forward to their appointments, which says a lot. The hygienists are patient and thorough, and we have never had a bad experience." },
	{ name: "David Nguyen", since: "Patient since 2022", quote: "I needed a lot of work done and was dreading the whole thing. The team here made it manageable. They worked with my insurance, kept me informed at every step, and the results are great." },
	{ name: "Rachel Kowalski", since: "Patient since 2018", quote: "I had veneers done by Dr. Wheeler and I cannot say enough good things. He was meticulous, answered every question I had, and the final result looked completely natural." },
	{ name: "Thomas Leblanc", since: "Patient since 2023", quote: "Switched from my old dentist after a recommendation from a friend and I am glad I did. Booking is easy, wait times are short, and the quality of care is noticeably higher." },
	{ name: "Priya Sharma", since: "Patient since 2020", quote: "The teeth whitening treatment here is excellent. I tried an at-home kit first with no luck, but the in-office treatment gave me real results in a single visit. Highly recommend." },
	{ name: "James Fortin", since: "Patient since 2021", quote: "Had an emergency appointment on short notice and they fit me in the same day. That kind of responsiveness is hard to find. The care I received was thorough and the pain was gone by evening." },
	{ name: "Claire Rousseau", since: "Patient since 2019", quote: "Natalie at the front desk is wonderful. She always remembers us, helps sort out insurance questions, and makes sure everything runs smoothly. The whole team here genuinely cares." },
]

export default function Testimonials() {
	return (
		<div className="bg-white min-h-screen">
			<div className="bg-blue-950 text-white py-14 px-64">
				<p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
				<h1 className="text-4xl font-bold mb-2">Patient Testimonials</h1>
				<p className="text-blue-300 max-w-xl">Hear from the patients who trust us with their smiles. We are proud of the care we provide and the relationships we build.</p>
			</div>

			<div className="px-64 py-16">
				<div className="grid grid-cols-3 gap-6">
					{testimonials.map(t => (
						<div key={t.name} className="border border-gray-100 rounded-xl p-6 flex flex-col gap-4">
							<p className="text-gray-600 text-sm leading-relaxed">"{t.quote}"</p>
							<div className="mt-auto pt-4 border-t border-gray-100">
								<p className="font-semibold text-blue-950">{t.name}</p>
								<p className="text-sky-500 text-xs mt-0.5">{t.since}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
