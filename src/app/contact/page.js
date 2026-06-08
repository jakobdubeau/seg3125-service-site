"use client"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {
	const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
	const [submitted, setSubmitted] = useState(false)

	function handleChange(e) {
		setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	function handleSubmit(e) {
		e.preventDefault()
		setSubmitted(true)
	}

	return (
		<div className="bg-white min-h-screen">
			<div className="bg-blue-950 text-white py-14 px-64">
				<h1 className="text-4xl font-bold mb-2">Contact Us</h1>
				<p className="text-blue-300">We would love to hear from you. Send us a message and we will get back to you shortly.</p>
			</div>

			<div className="px-64 py-16 grid grid-cols-3 gap-16">
				<div className="col-span-2">
					{submitted ? (
						<div className="bg-green-50 border border-green-200 rounded-xl p-8">
							<p className="text-green-600 font-semibold text-lg">Your message was sent! We will be in touch soon.</p>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="flex flex-col gap-5">
							<div className="grid grid-cols-2 gap-5">
								<div className="flex flex-col gap-1.5">
									<label className="text-sm font-medium text-gray-700">Full Name</label>
									<input
										name="name"
										value={form.name}
										onChange={handleChange}
										required
										placeholder="Your name"
										className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-sky-500"
									/>
								</div>
								<div className="flex flex-col gap-1.5">
									<label className="text-sm font-medium text-gray-700">Email Address</label>
									<input
										name="email"
										type="email"
										value={form.email}
										onChange={handleChange}
										required
										placeholder="Your email"
										className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-sky-500"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-1.5">
								<label className="text-sm font-medium text-gray-700">Phone Number</label>
								<input
									name="phone"
									type="tel"
									value={form.phone}
									onChange={handleChange}
									placeholder="Your phone number"
									className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-sky-500"
								/>
							</div>
							<div className="flex flex-col gap-1.5">
								<label className="text-sm font-medium text-gray-700">Message</label>
								<textarea
									name="message"
									value={form.message}
									onChange={handleChange}
									required
									rows={5}
									placeholder="How can we help you?"
									className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-sky-500 resize-none"
								/>
							</div>
							<div>
								<button
									type="submit"
									className="bg-sky-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-400 transition-colors"
								>
									Send Message
								</button>
							</div>
						</form>
					)}
				</div>

				<div className="flex flex-col gap-6">
					<div className="flex items-start gap-4">
						<div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center shrink-0">
							<Phone className="w-5 h-5 text-sky-500" />
						</div>
						<div>
							<p className="text-sm font-semibold text-blue-950 mb-0.5">Phone</p>
							<p className="text-gray-500 text-sm">(613) 111-1111</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center shrink-0">
							<Mail className="w-5 h-5 text-sky-500" />
						</div>
						<div>
							<p className="text-sm font-semibold text-blue-950 mb-0.5">Email</p>
							<p className="text-gray-500 text-sm">contact@smiledental.ca</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center shrink-0">
							<MapPin className="w-5 h-5 text-sky-500" />
						</div>
						<div>
							<p className="text-sm font-semibold text-blue-950 mb-0.5">Address</p>
							<p className="text-gray-500 text-sm">123 Main Street<br />Ottawa, ON K1A 0A1</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
