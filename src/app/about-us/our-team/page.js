const team = [
	{ name: "Dr. Michael Chen", title: "Lead Dentist", bio: "Dr. Chen has over 15 years of experience in general and cosmetic dentistry. He is passionate about patient education and preventive care.", initials: "MC" },
	{ name: "Dr. Sarah Kim", title: "Orthodontist", bio: "Dr. Kim specializes in orthodontic treatment for children and adults, with a focus on clear aligner therapy and early intervention.", initials: "SK" },
	{ name: "Dr. James Wheeler", title: "Cosmetic Dentist", bio: "Dr. Wheeler brings artistic precision to every cosmetic procedure, from veneers and bonding to full smile makeovers.", initials: "JW" },
	{ name: "Hannah Tremblay", title: "Dental Hygienist", bio: "Hannah has been with Smile Dental for over 8 years. She is known for her gentle technique and thorough patient care.", initials: "HT" },
	{ name: "Daniel Roy", title: "Dental Hygienist", bio: "Daniel specializes in periodontal health and patient education, helping patients build lasting oral hygiene habits.", initials: "DR" },
	{ name: "Natalie Lambert", title: "Office Manager", bio: "Natalie ensures every visit runs smoothly. She handles scheduling, insurance coordination, and patient inquiries with care.", initials: "NL" },
]

export default function OurTeam() {
	return (
		<div className="bg-white min-h-screen">
			<div className="bg-blue-950 text-white py-14 px-64">
				<p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
				<h1 className="text-4xl font-bold mb-2">Our Team</h1>
				<p className="text-blue-300 max-w-xl">Meet the dedicated professionals behind Smile Dental. We are committed to providing the highest standard of care.</p>
			</div>

			<div className="px-64 py-16">
				<div className="grid grid-cols-3 gap-8">
					{team.map(member => (
						<div key={member.name} className="border border-gray-100 rounded-xl overflow-hidden">
							<div className="bg-blue-950 h-48 flex items-center justify-center">
								<div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
									{member.initials}
								</div>
							</div>
							<div className="p-6">
								<p className="font-bold text-blue-950 mb-0.5">{member.name}</p>
								<p className="text-sky-500 text-sm font-medium mb-3">{member.title}</p>
								<p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
