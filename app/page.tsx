'use client'

import Image from 'next/image'
import { useState } from 'react'
import Head from './head'

export default function Home() {
  const [showWhatsApp, setShowWhatsApp] = useState(false)
  const [showTelegram, setShowTelegram] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      name: "Sarah M. - South Yarra",
      rating: 5,
      text: "I initially booked just a basic massage, but the experience was so incredible that I asked about the full service package. Now I'm a regular client! The male therapist is so professional and understanding. Best decision I ever made.",
      service: "Regular Client - Full Service"
    },
    {
      name: "Emily R. - Richmond",
      rating: 5,
      text: "Started with a head massage to try it out. Was so impressed by the professionalism and skill that I upgraded to full body massage with the complete service. Been a loyal customer for 6 months now. Highly recommend!",
      service: "Regular Client - Full Body Relaxation"
    },
    {
      name: "Jessica L. - Brighton",
      rating: 5,
      text: "My first session was just neck and shoulders. After experiencing such amazing results, I tried the full service treatment. Game changer! Now I book weekly sessions. The male therapist knows exactly what I need.",
      service: "Weekly Regular Client"
    },
    {
      name: "Amanda K. - Carlton",
      rating: 5,
      text: "I was hesitant at first, but decided to try a simple massage. The therapist made me feel so comfortable that I explored the full service options. Three years later and I'm still a regular! Absolutely trustworthy and professional.",
      service: "Long-term Regular Client"
    },
    {
      name: "Michelle P. - St Kilda",
      rating: 5,
      text: "Began with evening massage sessions, then discovered the extended full service packages. Now I book the overnight sessions monthly. The 8 years of experience really shows. Best male therapist in Melbourne!",
      service: "Monthly Regular - Extended Sessions"
    },
    {
      name: "Rachel T. - Fitzroy",
      rating: 5,
      text: "My journey started with a trial massage session. After that amazing experience, I became a full service client. Two years as a regular now! The professionalism and privacy are unmatched.",
      service: "2-Year Regular Client"
    }
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <>
      <Head />
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-rose-100">
        <nav className="container mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="text-4xl">👑</div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Queen Care</h1>
                <p className="text-xs text-gray-500 mt-0.5">Melbourne's Premier Mobile Spa</p>
              </div>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-gray-700 hover:text-rose-600 transition font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition font-medium">Services</a>
              <a href="#reviews" className="text-gray-700 hover:text-emerald-600 transition font-medium">Reviews</a>
              <a href="#faq" className="text-gray-700 hover:text-emerald-600 transition font-medium">FAQ</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition font-medium">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-teal-800/90 to-cyan-900/90"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 text-center relative z-10">
          <div className="mb-8 flex justify-center gap-3 text-6xl animate-float">
            <span>✨</span>
            <span>🌸</span>
            <span>✨</span>
          </div>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/30">
            <p className="text-amber-200 font-semibold text-lg">👨‍⚕️ Professional Male Therapist • Specializing in Female Wellness</p>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Experience Ultimate<br />
            <span className="bg-gradient-to-r from-amber-300 via-rose-300 to-pink-300 bg-clip-text text-transparent">
              Full Body Relaxation
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-emerald-100 mb-4 max-w-3xl mx-auto font-light">
            Melbourne's Premier Mobile Spa for Females
          </p>
          <p className="text-lg text-emerald-200 mb-10 max-w-2xl mx-auto">
            8 Years of Professional Expertise • Available 24/7 • Complete Privacy Guaranteed
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => {
                setShowWhatsApp(true)
                window.open('https://wa.me/442045770347', '_blank')
              }}
              className="group bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-10 py-5 rounded-full font-semibold transition-all text-lg shadow-2xl border-2 border-white/50 hover:border-white hover:scale-110 transform"
            >
              <span className="flex items-center gap-3">
                <span className="text-3xl">📱</span>
                <span>Book via WhatsApp</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-2xl">→</span>
              </span>
            </button>
            <button
              onClick={() => {
                setShowTelegram(true)
                window.open('https://t.me/sumonahmd67', '_blank')
              }}
              className="group bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-10 py-5 rounded-full font-semibold transition-all text-lg shadow-2xl border-2 border-white/50 hover:border-white hover:scale-110 transform"
            >
              <span className="flex items-center gap-3">
                <span className="text-3xl">✈️</span>
                <span>Book via Telegram</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-2xl">→</span>
              </span>
            </button>
          </div>
          <div className="mt-10 flex justify-center items-center gap-2 text-emerald-100">
            <span className="text-2xl">📍</span>
            <span className="text-xl font-medium">Servicing All Melbourne Areas • Mobile Service to Your Location</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full font-semibold mb-4">
              🌟 Why Choose Queen Care
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Professional Male Therapist</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Specializing in therapeutic massage for female clients with 8 years of trusted expertise. Your comfort, privacy, and satisfaction are my top priorities.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto rounded-full mt-6"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-10 md:p-14 shadow-2xl border-2 border-emerald-200">
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="text-6xl animate-pulse">👨‍⚕️</div>
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Experience & Trust You Can Rely On
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg mb-8">
                <div className="bg-white/90 backdrop-blur rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 rounded-full p-3">
                      <span className="text-4xl">👨‍⚕️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-700 mb-2 text-xl">Professional Male Therapist</h4>
                      <p>Experienced professional specializing in therapeutic massage for female clients. Trust built through 8 years of excellent service and satisfied clients.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 rounded-full p-3">
                      <span className="text-4xl">✨</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal-700 mb-2 text-xl">Full Body Relaxation Specialist</h4>
                      <p>Expert in full body relaxation techniques. Extensive training in therapeutic massage, deep tissue, and stress relief methodologies.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-100 rounded-full p-3">
                      <span className="text-4xl">🚗</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-cyan-700 mb-2 text-xl">Mobile Convenience</h4>
                      <p>I come to your location anywhere across Melbourne. Experience premium massage therapy in the comfort and privacy of your own space.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 rounded-full p-3">
                      <span className="text-4xl">🌙</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-indigo-700 mb-2 text-xl">24/7 Availability</h4>
                      <p>Flexible scheduling to suit your lifestyle. Day, evening, night, and extended overnight sessions available. Book anytime that works for you.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-8 shadow-xl">
                <p className="text-center text-lg leading-relaxed">
                  <span className="font-bold text-2xl block mb-3">💆‍♀️ Completely Personalized Experience</span>
                  Every session is fully customized to your specific needs and preferences. I understand that every client is unique, and I'm committed to providing full service massage therapy that satisfies all your special requirements. Your comfort and relaxation are my absolute priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-white via-rose-50/30 to-purple-50/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full font-semibold mb-4">
              💆‍♀️ Premium Services
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Our Signature Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-4"></div>
            <p className="text-center text-gray-600 text-xl">Luxury mobile massage therapy across Melbourne</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Full Body Massage */}
            <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 hover:rotate-1 transition-all duration-500 border-2 border-emerald-100 hover:border-emerald-400">
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-600/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image 
                  src="/Full Body Massage.png" 
                  alt="Full Body Massage - Professional therapeutic massage service"
                  width={800}
                  height={533}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  className="group-hover:scale-110 transition-transform duration-500"
                  priority
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2 rounded-full text-sm font-bold z-20 shadow-lg animate-pulse">
                  ⭐ SPECIALTY
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition">Full Body Relaxation</h3>
                <p className="text-gray-600 mb-5 leading-relaxed text-lg">
                  Ultimate head-to-toe relaxation experience. Complete therapeutic session with full service and personalized care tailored specifically to your needs and preferences.
                </p>
                <div className="bg-emerald-50 rounded-xl p-4 mb-5">
                  <p className="text-emerald-800 text-sm font-semibold">✓ Includes: Premium oils, soothing ambiance, customized pressure & techniques</p>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">$100</div>
                    <p className="text-gray-500 text-base mt-2">60-90 minutes of pure bliss</p>
                  </div>
                  <div className="text-4xl group-hover:animate-bounce">💆‍♀️</div>
                </div>
              </div>
            </div>

            {/* Neck & Shoulder Massage */}
            <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 hover:-rotate-1 transition-all duration-500 border-2 border-teal-100 hover:border-teal-400">
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-600/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image 
                  src="/Neck Massage.png" 
                  alt="Neck and Shoulder Massage - Relief from tension and stress"
                  width={800}
                  height={800}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  className="group-hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition">Neck & Shoulder Therapy</h3>
                <p className="text-gray-600 mb-5 leading-relaxed text-lg">
                  Focused relief for tension-prone areas. Expert techniques to release stress and restore flexibility from daily strain and computer work.
                </p>
                <div className="bg-teal-50 rounded-xl p-4 mb-5">
                  <p className="text-teal-800 text-sm font-semibold">✓ Perfect for: Office workers, stress relief, headache prevention</p>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">$60</div>
                    <p className="text-gray-500 text-base mt-2">30-45 minutes focused therapy</p>
                  </div>
                  <div className="text-4xl group-hover:animate-bounce">🙌</div>
                </div>
              </div>
            </div>

            {/* Head Massage */}
            <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 hover:rotate-1 transition-all duration-500 border-2 border-amber-100 hover:border-amber-400">
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-600/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image 
                  src="/Head & Scalp Massage.png" 
                  alt="Head and Scalp Massage - Professional relaxation therapy"
                  width={800}
                  height={800}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition">Head & Scalp Massage</h3>
                <p className="text-gray-600 mb-5 leading-relaxed text-lg">
                  Deeply soothing scalp and temple therapy. Melts away headaches, enhances sleep quality, and promotes profound mental clarity and peace.
                </p>
                <div className="bg-amber-50 rounded-xl p-4 mb-5">
                  <p className="text-amber-800 text-sm font-semibold">✓ Benefits: Stress relief, better sleep, headache relief, hair health</p>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">$50</div>
                    <p className="text-gray-500 text-base mt-2">30 minutes of tranquility</p>
                  </div>
                  <div className="text-4xl group-hover:animate-bounce">✨</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 via-emerald-900 to-teal-900 rounded-3xl shadow-2xl p-10 md:p-12 border-2 border-emerald-400">
              <div className="text-center mb-8">
                <h3 className="text-4xl font-bold text-white mb-3">What's Included</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition">
                  <div className="text-5xl mb-4 text-center">✨</div>
                  <h4 className="font-bold text-amber-300 text-xl mb-2 text-center">Premium Experience</h4>
                  <p className="text-white/90 text-center">
                    High-quality aromatherapy oils, soothing music, and professional equipment for the ultimate massage experience.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition">
                  <div className="text-5xl mb-4 text-center">🌙</div>
                  <h4 className="font-bold text-amber-300 text-xl mb-2 text-center">Extended Packages</h4>
                  <p className="text-white/90 text-center">
                    Full night service available. Extended sessions for complete rejuvenation and ultimate relaxation.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition">
                  <div className="text-5xl mb-4 text-center">💆‍♀️</div>
                  <h4 className="font-bold text-amber-300 text-xl mb-2 text-center">Fully Customized</h4>
                  <p className="text-white/90 text-center">
                    Every session tailored to satisfy all your special needs and preferences. Your comfort is priority one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-100 text-amber-800 px-6 py-2 rounded-full font-semibold mb-4">
              ⭐ Real Reviews • Real Results
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">What Clients Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-xl leading-relaxed">Join hundreds of satisfied female clients across Melbourne who trust Queen Care</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl shadow-2xl p-10 md:p-14 border-2 border-emerald-200">
              {/* Review Content */}
              <div className="text-center mb-10">
                <div className="flex justify-center gap-2 mb-8">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <span key={i} className="text-4xl text-amber-400 drop-shadow-lg">⭐</span>
                  ))}
                </div>
                <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl mb-6">
                  <p className="text-gray-700 text-xl md:text-2xl leading-relaxed italic font-light">
                    "{reviews[currentReview].text}"
                  </p>
                </div>
                <div className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full px-8 py-4 shadow-xl">
                  <p className="font-bold text-xl">{reviews[currentReview].name}</p>
                  <p className="text-emerald-100 text-sm mt-1">{reviews[currentReview].service}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center gap-6">
                <button
                  onClick={prevReview}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-110 font-bold text-2xl"
                  aria-label="Previous review"
                >
                  ←
                </button>
                <div className="flex gap-3">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`rounded-full transition-all ${
                        index === currentReview 
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 w-12 h-4' 
                          : 'bg-gray-300 hover:bg-gray-400 w-4 h-4'
                      }`}
                      aria-label={`Go to review ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextReview}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-110 font-bold text-2xl"
                  aria-label="Next review"
                >
                  →
                </button>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-6 left-6 text-7xl text-emerald-200 opacity-30">"</div>
              <div className="absolute bottom-6 right-6 text-7xl text-teal-200 opacity-30">"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full font-semibold mb-4">
              📱 Easy Booking • Quick Response
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Book Your Session Today</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-xl leading-relaxed">Experience professional massage therapy at your convenience. Same-day bookings available!</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* WhatsApp Card */}
              <button
                onClick={() => window.open('https://wa.me/442045770347', '_blank')}
                className="group bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 rounded-3xl p-12 shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 border-2 border-green-400 text-center"
              >
                <div className="text-8xl mb-6 group-hover:animate-bounce">📱</div>
                <h3 className="text-4xl font-bold text-white mb-4">WhatsApp</h3>
                <p className="text-green-50 text-lg mb-6">Message me instantly</p>
                <div className="bg-white/20 backdrop-blur rounded-2xl p-6 border-2 border-white/40">
                  <p className="text-2xl font-bold text-white">Click to Chat</p>
                  <p className="text-green-100 text-sm mt-2">Opens WhatsApp automatically</p>
                </div>
              </button>

              {/* Telegram Card */}
              <button
                onClick={() => window.open('https://t.me/sumonahmd67', '_blank')}
                className="group bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 rounded-3xl p-12 shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 border-2 border-blue-400 text-center"
              >
                <div className="text-8xl mb-6 group-hover:animate-bounce">✈️</div>
                <h3 className="text-4xl font-bold text-white mb-4">Telegram</h3>
                <p className="text-blue-50 text-lg mb-6">Connect securely</p>
                <div className="bg-white/20 backdrop-blur rounded-2xl p-6 border-2 border-white/40">
                  <p className="text-2xl font-bold text-white">Click to Chat</p>
                  <p className="text-blue-100 text-sm mt-2">Opens Telegram automatically</p>
                </div>
              </button>
            </div>

            {/* Service Info Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-emerald-200 hover:border-emerald-400 transition-all hover:-translate-y-2">
                <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-5xl">📍</span>
                </div>
                <h4 className="font-bold text-gray-800 text-xl mb-3 text-center">All Melbourne Areas</h4>
                <p className="text-gray-600 text-center leading-relaxed">Professional mobile service to any location. Your place, your comfort.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-teal-200 hover:border-teal-400 transition-all hover:-translate-y-2">
                <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-5xl">🌙</span>
                </div>
                <h4 className="font-bold text-gray-800 text-xl mb-3 text-center">24/7 Availability</h4>
                <p className="text-gray-600 text-center leading-relaxed">Flexible scheduling. Day, evening, night, or extended overnight sessions.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-cyan-200 hover:border-cyan-400 transition-all hover:-translate-y-2">
                <div className="bg-cyan-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-5xl">👨‍⚕️</span>
                </div>
                <h4 className="font-bold text-gray-800 text-xl mb-3 text-center">Professional Male Therapist</h4>
                <p className="text-gray-600 text-center leading-relaxed">8 years trusted service specializing in female client wellness and comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full font-semibold mb-4">
              ❓ Have Questions?
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-xl">Everything you need to know about Queen Care services</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg border-2 border-emerald-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">🏠 Do you provide mobile massage services across Melbourne?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Yes! I provide professional mobile massage services to all Melbourne suburbs including Richmond, South Yarra, St Kilda, Carlton, Fitzroy, Brighton, Toorak, Prahran, Brunswick, Caulfield, Glen Waverley, Box Hill, and surrounding areas. I come to your location with all necessary equipment for your convenience and privacy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg border-2 border-teal-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">👨‍⚕️ Why choose a male therapist for massage?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                As a professional male massage therapist with 8 years of experience, I specialize in therapeutic techniques specifically for female clients. Many women prefer male therapists for deeper pressure and targeted muscle relief. I maintain the highest standards of professionalism, privacy, and respect throughout every session.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg border-2 border-cyan-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">⏰ What are your availability and booking hours?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                I'm available 24/7 including days, evenings, nights, and weekends. You can book sessions at any time that suits your schedule. I also offer extended overnight packages for complete relaxation and rejuvenation. Simply contact me via WhatsApp or Telegram to arrange your preferred time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">💆‍♀️ What types of massage services do you offer?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                I specialize in full body relaxation massage ($100), neck & shoulder therapy ($60), and head & scalp massage ($50). All sessions include premium aromatherapy oils and personalized techniques. I also offer full service packages and extended sessions tailored to your specific needs and preferences.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">🔒 How do you ensure privacy and discretion?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Privacy is my absolute priority. I provide dedicated service exclusively for female clients with complete discretion. All sessions are confidential, and I maintain professional boundaries at all times. Your comfort and security are paramount in every interaction.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">💳 What are your payment methods?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                I accept cash payment upon completion of the service. This ensures flexibility and convenience for all clients. Prices are transparent with no hidden fees.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 shadow-lg border-2 border-pink-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">📞 How do I book a session?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Booking is easy! Simply contact me via WhatsApp or Telegram. I respond quickly and can usually accommodate same-day bookings. Let me know your preferred time, location, and type of massage, and I'll take care of the rest.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-8 shadow-lg border-2 border-rose-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">✨ What makes your full service massage different?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                My full service massage is completely customized to satisfy all your special needs. With 8 years of professional experience, I understand that every client is unique. I provide comprehensive therapeutic care, personalized pressure, extended relaxation time, and special attention to your specific requirements. Many clients start with a basic massage and become regular clients after experiencing the full service treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-6xl">👑</div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-amber-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">Queen Care</h3>
            </div>
            <p className="text-emerald-200 text-xl mb-2">Melbourne's Premier Mobile Spa for Females</p>
            <p className="text-emerald-300 text-lg">Professional Male Therapist • Specializing in Full Body Relaxation</p>
            <p className="text-teal-400 mt-4">8 Years of Trusted Excellence • Female Clients Only • 24/7 Service</p>
          </div>
          
          <div className="border-t border-emerald-800 pt-8 text-center">
            <p className="text-emerald-300 mb-2">📍 Servicing All Melbourne Areas</p>
            <p className="text-teal-400 text-sm">© 2026 Queen Care Melbourne. Professional Mobile Massage Service.</p>
          </div>
        </div>
      </footer>
    </main>
    </>
  )
}
