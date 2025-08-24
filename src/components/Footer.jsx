// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "../data/site.js";
import Logo from "/assets/cs.jpg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-[#0b111a]">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img src={Logo} alt="" className="h-10 w-10 rounded-lg object-cover ring-1 ring-white/10" />
            <div>
              <h3 className="font-semibold text-lg">{COMPANY?.name || "Code Sangraha"}</h3>
              <p className="muted text-sm">
                {COMPANY?.tagline || "Building reliable software from Nepal"}
              </p>
            </div>
          </div>
          <p className="muted mt-4 text-sm leading-relaxed">
            We design and develop software solutions that help businesses scale and innovate.
          </p>
        </div>

        {/* Links */}
        <nav className="grid grid-cols-2 gap-6 md:gap-10 text-sm">
          <ul className="space-y-2">
            <li className="font-semibold">Company</li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <ul className="space-y-2">
            <li className="font-semibold">Resources</li>
            <li><Link to="/quote">Get a Quote</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/case-studies">Case Studies</Link></li>
          </ul>
        </nav>

        {/* Contact */}
        <div className="text-sm">
          <div className="font-semibold mb-3">Contact</div>
          <ul className="space-y-2">
            <li><a href="mailto:codesangraha@gmail.com">codesangraha@gmail.com</a></li>
            <li><a href="tel:+9779811094277">+977-9811094277</a></li>
            <li className="muted">Dharan, Nepal</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between gap-2 muted">
          <span>© {year} {COMPANY?.name || "Code Sangraha"}. All rights reserved.</span>
          <span>Made in Nepal 🇳🇵</span>
        </div>
      </div>
    </footer>
  );
}
