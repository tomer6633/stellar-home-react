import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactBar from "./components/ContactBar";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import "./index.css";

function Footer() {
  return (
    <footer className="text-center py-5 text-sm px-4" style={{ background: "#0D1A17", color: "rgba(255,255,255,0.3)" }}>
      © 2025 <span style={{ color: "#2E9E7A", fontWeight: 600 }}>Stellar Home</span> — London, ON · 70 Fiddlers Green Rd ·{" "}
      <a href="tel:5196979492" style={{ color: "#2E9E7A" }}>(519) 697-9492</a>
    </footer>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
          </Routes>
        </div>
        <Footer />
        <ContactBar />
      </div>
    </HashRouter>
  );
}
