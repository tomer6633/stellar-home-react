import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import ServiceCard from "../components/ServiceCard";
import ReviewSection from "../components/ReviewSection";
import { motion } from "framer-motion";
import { business } from "../data/BusinessData";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />

      {/* Services */}
      <section id="services" className="py-20 px-8 md:px-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: business.colorPrimary }}>
            What We Offer
          </p>
          <h2 className="oswald text-4xl font-bold text-gray-900 mb-3">
            Professional Cleaning Services
          </h2>
          <p className="text-gray-500 mb-12 max-w-lg">
            Thorough, reliable, and done right — from routine visits to full deep cleans and move-out services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {business.services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-8 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.img
            src={business.aboutImage}
            alt="Professional cleaning service"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-96 object-cover rounded-2xl shadow-md"
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: business.colorPrimary }}>
              About Stellar Home
            </p>
            <h2 className="oswald text-4xl font-bold text-gray-900 mb-4">
              Your Home Deserves a Stellar Clean.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Stellar Home is a London, ON cleaning service known for thoroughness and reliability — handling everything from standard weekly cleans to post-renovation deep cleans and full move-out services.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              With a 4.9-star rating and 50+ reviews, their team shows up on time, gets every corner, and leaves your space genuinely spotless.
            </p>
            <ul className="space-y-3 mb-8">
              {business.checkList.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-800 text-sm">
                  <span className="font-bold mt-0.5" style={{ color: business.colorPrimary }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3 rounded-xl text-white font-bold transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{ backgroundColor: business.colorPrimary }}
            >
              Get a Free Estimate
            </button>
          </motion.div>
        </div>
      </section>

      <ReviewSection />

      {/* Contact */}
      <section id="contact" className="py-20 px-8 md:px-20" style={{ background: business.colorDark }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: business.colorPrimary }}>
            Get In Touch
          </p>
          <h2 className="oswald text-4xl font-bold text-white mb-3">
            Ready for a Free Estimate?
          </h2>
          <p className="text-slate-400 mb-12 max-w-lg">
            Tell us about your home and we'll get back to you with a fair quote — no obligation.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: "📞", label: "Phone", value: business.phone, href: `tel:${business.phoneRaw}` },
                { icon: "📍", label: "Location", value: business.address, href: undefined },
                { icon: "🕐", label: "Hours", value: business.hours, href: undefined },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: "rgba(255,255,255,0.08)" }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="font-semibold hover:opacity-80" style={{ color: business.colorPrimary }}>{item.value}</a>
                    ) : (
                      <p className="text-slate-200 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-slate-400">First Name</label>
                  <input type="text" placeholder="Jane" className="border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none" style={{ background: "rgba(255,255,255,0.07)" }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-slate-400">Last Name</label>
                  <input type="text" placeholder="Smith" className="border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none" style={{ background: "rgba(255,255,255,0.07)" }} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-400">Phone</label>
                <input type="tel" placeholder="(519) 000-0000" className="border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none" style={{ background: "rgba(255,255,255,0.07)" }} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-400">Service</label>
                <select className="border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none" style={{ background: business.colorDark }}>
                  {business.services.map((s) => (<option key={s.id}>{s.title}</option>))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-400">Message</label>
                <textarea rows={4} placeholder="Tell us about your home..." className="border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none resize-none" style={{ background: "rgba(255,255,255,0.07)" }} />
              </div>
              <button type="submit" className="w-full py-3.5 rounded-xl text-white font-bold text-base transition-all hover:-translate-y-0.5 hover:shadow-lg" style={{ backgroundColor: business.colorPrimary }}>
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
