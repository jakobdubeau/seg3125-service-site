"use client"

import { useState } from "react"
import { Stethoscope, Sparkles } from "lucide-react"
import { GiTooth } from "react-icons/gi"

const SERVICES = [
	{ id: "general", name: "General Dentistry", desc: "Checkups, cleanings and preventive care", icon: Stethoscope },
	{ id: "cosmetic", name: "Cosmetic Dentistry", desc: "Whitening, veneers and smile makeovers", icon: Sparkles },
	{ id: "ortho", name: "Orthodontics", desc: "Braces, aligners and retainers", icon: GiTooth },
]

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const CALENDAR_WEEKS = [
	[null, 1, 2, 3, 4, 5, 6],
	[7, 8, 9, 10, 11, 12, 13],
	[14, 15, 16, 17, 18, 19, 20],
	[21, 22, 23, 24, 25, 26, 27],
	[28, 29, 30, null, null, null, null],
]

const AVAILABLE = new Set([9, 10, 11, 12, 15, 16, 17, 18, 19, 22, 23, 24, 25, 26, 29, 30])
const TIME_SLOTS = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"]

export default function Book() {
	const [selectedService, setSelectedService] = useState("general")
	const [selectedDate, setSelectedDate] = useState(null)
	const [selectedTime, setSelectedTime] = useState(null)
	const [form, setForm] = useState({ name: "", email: "", phone: "" })
	const [confirmed, setConfirmed] = useState(false)

	function handleChange(e) {
		setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	function handleSubmit(e) {
		e.preventDefault()
		setConfirmed(true)
	}

	return (
		<div className="bg-white min-h-screen">
			<div className="bg-blue-950 text-white py-14 px-64">
				<h1 className="text-4xl font-bold mb-2">Book an Appointment</h1>
				<p className="text-blue-300">Select your service, choose a time, and confirm your details.</p>
			</div>

			<div className="px-64 py-16">
				{confirmed ? (
					<div className="bg-sky-50 border border-sky-200 rounded-xl p-10 text-center">
						<h2 className="text-2xl font-bold text-blue-950 mb-2">Appointment Confirmed</h2>
						<p className="text-gray-500">Thank you, {form.name}. A confirmation will be sent to {form.email}.</p>
						{selectedDate && selectedTime && (
							<p className="text-sky-500 font-medium mt-2">June {selectedDate}, 2026 at {selectedTime}</p>
						)}
					</div>
				) : (
					<form onSubmit={handleSubmit} className="flex flex-col gap-12">
						<div>
							<h2 className="text-lg font-semibold text-blue-950 mb-4">1. Select a Service</h2>
							<div className="grid grid-cols-3 gap-4">
								{SERVICES.map((s) => {
									const Icon = s.icon
									return (
										<button
											key={s.id}
											type="button"
											onClick={() => setSelectedService(s.id)}
											className={`p-5 border-2 rounded-xl text-left transition-colors ${
												selectedService === s.id
													? "border-sky-500 bg-sky-50"
													: "border-gray-200 hover:border-sky-300"
											}`}
										>
											<Icon className="w-6 h-6 text-sky-500 mb-3" />
											<p className="font-semibold text-blue-950 text-sm mb-1">{s.name}</p>
											<p className="text-gray-400 text-xs">{s.desc}</p>
										</button>
									)
								})}
							</div>
						</div>

						<div>
							<h2 className="text-lg font-semibold text-blue-950 mb-4">2. Choose a Date and Time</h2>
							<div className="flex gap-12">
								<div>
									<p className="text-sm font-medium text-gray-600 mb-3">June 2026</p>
									<table className="text-center text-sm">
										<thead>
											<tr>
												{WEEK_DAYS.map(d => (
													<th key={d} className="w-10 pb-2 text-gray-400 font-medium text-xs">{d}</th>
												))}
											</tr>
										</thead>
										<tbody>
											{CALENDAR_WEEKS.map((week, wi) => (
												<tr key={wi}>
													{week.map((day, di) => (
														<td key={di} className="p-0.5">
															{day && AVAILABLE.has(day) ? (
																<button
																	type="button"
																	onClick={() => setSelectedDate(day)}
																	className={`w-9 h-9 rounded-full text-sm font-medium transition-colors ${
																		selectedDate === day
																			? "bg-sky-500 text-white"
																			: "text-gray-700 hover:bg-sky-50"
																	}`}
																>
																	{day}
																</button>
															) : day ? (
																<span className="w-9 h-9 flex items-center justify-center text-gray-300 text-sm">{day}</span>
															) : null}
														</td>
													))}
												</tr>
											))}
										</tbody>
									</table>
								</div>

								<div>
									<p className="text-sm font-medium text-gray-600 mb-3">Available Times</p>
									<div className="flex flex-col gap-2">
										{TIME_SLOTS.map(t => (
											<button
												key={t}
												type="button"
												onClick={() => setSelectedTime(t)}
												className={`w-32 px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
													selectedTime === t
														? "bg-sky-500 text-white border-sky-500"
														: "border-gray-200 text-gray-700 hover:border-sky-300"
												}`}
											>
												{t}
											</button>
										))}
									</div>
								</div>
							</div>
						</div>

						<div>
							<h2 className="text-lg font-semibold text-blue-950 mb-4">3. Your Information</h2>
							<div className="grid grid-cols-3 gap-4 mb-6">
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
							</div>
							<button
								type="submit"
								className="bg-sky-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-400 transition-colors"
							>
								Confirm Appointment
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	)
}
