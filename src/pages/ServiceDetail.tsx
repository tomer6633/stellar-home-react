import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { business } from "../data/BusinessData";

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = business.services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="oswald text-3xl font-bold text-gray-800">Service Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2.5 rounded-xl text-white font-semibold"
          style={{ backgroundColor: business.colorPrimary }}
        >
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen pb-24">
      {/* Hero Image */}
      <div className="relative h-72 md:h-96 overflow-hidden" style={{ background: business.colorDark }}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-20 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => navigate("/")}
              className="text-blue-300 text-sm font-semibold mb-4 hover:text-white transition-colors flex items-center gap-1"
            >
              ← Back
            </button>
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
              style={{ background: "#dbeafe", color: business.colorPrimary }}
            >
              {business.name}
            </span>
            <h1 className="oswald text-4xl md:text-5xl font-bold text-white">
              {service.title}
            </h1>
            <p className="text-blue-200 text-lg mt-2">{service.tagline}</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 md:px-20 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="oswald text-2xl font-bold text-gray-900 mb-3">
                About This Service
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="oswald text-xl font-bold text-gray-900 mb-4">
                What's Included
              </h3>
              <ul className="space-y-3">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="font-bold text-base mt-0.5" style={{ color: business.colorPrimary }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-50 rounded-2xl p-6 h-fit sticky top-24 shadow-sm"
          >
            <div
              className="text-2xl font-bold oswald mb-1"
              style={{ color: business.colorPrimary }}
            >
              {service.price}
            </div>
            <p className="text-gray-500 text-sm mb-6">
              No obligation. We'll get back to you same day.
            </p>
            <a
              href={`tel:${business.phoneRaw}`}
              className="block w-full text-center py-3.5 rounded-xl text-white font-bold transition-all hover:-translate-y-0.5 hover:shadow-md mb-3"
              style={{ backgroundColor: business.colorPrimary }}
            >
              📞 Call for a Quote
            </a>
            <button
              onClick={() => navigate("/#contact")}
              className="block w-full text-center py-3 rounded-xl font-semibold text-sm border-2 transition-all hover:-translate-y-0.5"
              style={{ borderColor: business.colorPrimary, color: business.colorPrimary }}
            >
              Send a Message
            </button>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Contact</div>
              <a href={`tel:${business.phoneRaw}`} className="text-sm font-semibold" style={{ color: business.colorPrimary }}>
                {business.phone}
              </a>
              <div className="text-xs text-gray-400 mt-1">{business.hours}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
