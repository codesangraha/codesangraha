import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Team from "./pages/Team.jsx";
import Quote from "./pages/Quote.jsx";
import Thanks from "./pages/Thanks.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-ink text-base md:text-[17px] lg:text-[18px] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <ScrollToTop /> {/* ✅ Scrolls at top */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/team" element={<Team />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
