import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { business } from "../data/BusinessData";

interface Service {
  id: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  price: string;
  included: string[];
}

interface Props {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: Props) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onClick={() => navigate(`/service/${service.id}`)}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group"
    >
      <div className="overflow-hidden h-48">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="oswald text-lg font-semibold text-gray-900 mb-1">
          {service.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-3">
          {service.tagline}
        </p>
        <span
          className="text-sm font-semibold inline-flex items-center gap-1"
          style={{ color: business.colorPrimary }}
        >
          Learn more →
        </span>
      </div>
    </motion.div>
  );
}
