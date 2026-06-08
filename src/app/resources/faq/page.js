"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
	{
		category: "Appointments",
		items: [
			{ q: "How do I book an appointment?", a: "You can book an appointment online through our booking page, call us at (613) 111-1111, or send us a message through the contact form. We typically respond within one business day." },
			{ q: "What should I bring to my first visit?", a: "Please bring a valid photo ID, your insurance card if applicable, and a list of any medications you are currently taking. Arriving 10 minutes early gives us time to complete your intake forms." },
			{ q: "How far in advance should I book?", a: "For routine checkups and cleanings, we recommend booking 2 to 4 weeks in advance. For urgent concerns, call us directly and we will do our best to fit you in as soon as possible." },
			{ q: "What is your cancellation policy?", a: "We ask that you give us at least 24 hours notice if you need to cancel or reschedule. This allows us to offer the time slot to another patient." },
		],
	},
	{
		category: "Insurance and Payment",
		items: [
			{ q: "Do you accept dental insurance?", a: "Yes, we work with most major dental insurance providers. Please call our office with your insurance details and we will verify your coverage before your appointment." },
			{ q: "What payment methods do you accept?", a: "We accept cash, debit, Visa, and Mastercard. We also offer payment plans for larger treatment costs. Ask our front desk team for details." },
			{ q: "Can you bill my insurance directly?", a: "In most cases, yes. We offer direct billing to your insurance provider so you only pay any remaining balance at the time of your visit." },
		],
	},
	{
		category: "Treatments",
		items: [
			{ q: "How often should I get a cleaning?", a: "For most patients, we recommend a professional cleaning every six months. Some patients with gum disease or a history of cavities may benefit from more frequent visits." },
			{ q: "Is teeth whitening safe?", a: "Yes, professional teeth whitening performed in our office is safe and effective. We use clinically approved products and monitor the process throughout to protect your enamel and gums." },
			{ q: "How long does orthodontic treatment take?", a: "Treatment length varies depending on the complexity of your case. Clear aligner treatment typically ranges from 6 to 18 months. Traditional braces may take 18 months to 3 years." },
			{ q: "Do you treat children?", a: "Yes, we welcome patients of all ages. We recommend bringing children in for their first visit around age two or three, or when their first tooth appears." },
		],
	},
	{
		category: "General",
		items: [
			{ q: "What are your office hours?", a: "We are open Monday through Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 2:00 PM. We are closed on Sundays and statutory holidays." },
			{ q: "Where are you located?", a: "Our clinic is located in Ottawa. Full address and directions are available on our contact page." },
			{ q: "Do you offer emergency dental care?", a: "Yes. If you are experiencing a dental emergency such as a broken tooth, severe pain, or swelling, call us immediately. We reserve time each day for urgent cases." },
		],
	},
]

function FAQItem({ q, a }) {
	const [open, setOpen] = useState(false)
	return (
		<div className="border border-gray-100 rounded-xl overflow-hidden">
			<button
				onClick={() => setOpen(!open)}
				className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
			>
				<span className="font-medium text-blue-950 pr-4">{q}</span>
				<ChevronDown className={`w-4 h-4 text-sky-500 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
			</button>
			{open && (
				<div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
					{a}
				</div>
			)}
		</div>
	)
}

export default function FAQ() {
	return (
		<div className="bg-white min-h-screen">
			<div className="bg-blue-950 text-white py-14 px-64">
				<p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Resources</p>
				<h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
				<p className="text-blue-300 max-w-xl">Find answers to our most commonly asked questions. If you do not see what you are looking for, feel free to contact us directly.</p>
			</div>

			<div className="px-64 py-16">
				<div className="flex flex-col gap-12">
					{faqs.map(section => (
						<div key={section.category}>
							<h2 className="text-lg font-bold text-blue-950 mb-4">{section.category}</h2>
							<div className="flex flex-col gap-3">
								{section.items.map(item => (
									<FAQItem key={item.q} q={item.q} a={item.a} />
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
