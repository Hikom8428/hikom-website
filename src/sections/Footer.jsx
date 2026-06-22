import React, { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Industries Served", href: "#" },
    { name: "Projects Showcase", href: "#" },
    { name: "Certifications", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const products = [
    { name: "Fire Rated Doors", href: "#" },
    { name: "Anti Radiation Doors", href: "#" },
    { name: "Medical OT Doors", href: "#" },
    { name: "Clean Room Doors", href: "#" },
    { name: "Sliding & Hinged Doors", href: "#" },
    { name: "Insulated Panels", href: "#" },
  ];

  return (
    <footer className="relative bg-[#050f1a] pt-20 pb-10 border-t border-white/[0.05] overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#00B4D8]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00B4D8]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Company Info (Takes up more space) */}
          <div className="lg:col-span-4">
            <div className="flex-shrink-0 flex items-center cursor-pointer mb-6">
              {logoError ? (
                <span className="text-white font-extrabold text-2xl tracking-tight">
                  HIKOM <span className="text-[#00B4D8]">Intl.</span>
                </span>
              ) : (
                <img
                  src="/logo/logo-name.png"
                  alt="HIKOM International"
                  onError={() => setLogoError(true)}
                  className="h-8 w-auto object-contain"
                />
              )}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-8 pr-4">
              Engineering the future of contamination-free modular solutions. We deliver uncompromising precision, hygiene, and durability for the world's most critical environments.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#00B4D8] hover:text-white hover:border-[#00B4D8] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#00B4D8] hover:text-white hover:border-[#00B4D8] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#00B4D8] hover:text-white hover:border-[#00B4D8] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-[#00B4D8] text-sm font-light transition-colors duration-300 flex items-center group">
                    <span className="w-0 h-[1px] bg-[#00B4D8] mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              Premium Solutions
            </h3>
            <ul className="space-y-4">
              {products.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-[#00B4D8] text-sm font-light transition-colors duration-300 flex items-center group">
                    <span className="w-0 h-[1px] bg-[#00B4D8] mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#00B4D8] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-gray-400 text-sm font-light leading-relaxed">
                  2F Ecotech-II, Udyog Vihar,<br />
                  Greater Noida, Uttar Pradesh,<br />
                  India - 201306
                </span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#00B4D8] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+919015055777" className="text-gray-400 hover:text-[#00B4D8] text-sm font-light transition-colors">
                  +91 90150 55777
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#00B4D8] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@hikom.com" className="text-gray-400 hover:text-[#00B4D8] text-sm font-light transition-colors">
                  info@hikom.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-light">
            &copy; {currentYear} HIKOM International LLP. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs font-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-xs font-light transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-xs font-light transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;