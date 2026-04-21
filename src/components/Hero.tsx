import { motion } from "framer-motion";
import { business } from "../data/BusinessData";

export default function Hero() {
  

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ background: business.colorDark }}
    >
      {/* Parallax BG */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[8000ms] hover:scale-100"
        style={{
          backgroundImage: `url('${business.heroImage}')`,
          opacity: 0.22,
        }}
      />

      <div className="relative z-10 px-8 md:px-20 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
            style={{ background: "#dbeafe", color: business.colorPrimary }}
          >
            London's Drywall Specialists
          </span>

          <h1 className="oswald text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
            Flawless Walls.{" "}
            <em className="not-italic" style={{ color: "#60a5fa" }}>
              Perfect Finish.
            </em>{" "}
            Every Time.
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
            {business.subtagline}
          </p>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3.5 rounded-xl font-bold text-white text-base transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: business.colorPrimary }}
            >
              Get a Free Quote
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3.5 rounded-xl font-semibold text-white text-base border-2 border-white/30 hover:border-white transition-all hover:-translate-y-1"
            >
              Our Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
