// // src/components/common/Footer.jsx
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-10 mt-12">
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Company Info */}
//         <div>
//           <h3 className="text-xl font-bold text-red-700">MECHCHEM</h3>
//           <p className="text-sm text-gray-400 mt-2">
//             Providing high-quality industrial machinery and engineering solutions for over 25 years.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
//           <ul className="space-y-2 text-sm text-gray-400">
//             <li><a href="/" className="hover:text-white">Home</a></li>
//             <li><a href="/products" className="hover:text-white">Machines</a></li>
//             <li><a href="/about" className="hover:text-white">About Us</a></li>
//             <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
//           <p className="text-sm text-gray-400">
//             123 Industrial Area, City, State 12345<br/>
//             Phone: +91-9825009216<br/>
//             Email: inquiry@mechchemindia.com
//           </p>
//         </div>
//       </div>
//       <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
//         &copy; {new Date().getFullYear()} MechChem India. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// src/components/common/Footer.jsx
import React from 'react';
import { Facebook, Youtube, Instagram, X, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { Icon: Facebook, link: "https://facebook.com" },
    { Icon: X, link: "https://x.com" },
    { Icon: Youtube, link: "https://youtube.com" },
    { Icon: Instagram, link: "https://instagram.com" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Company Info & Social Icons */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-black text-red-600 tracking-tighter">MECHCHEM <span className="text-white">INDIA</span></h3>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Providing high-quality industrial machinery and engineering solutions for over 25 years. We specialize in precision tools and heavy-duty manufacturing equipment.
            </p>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-300">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-gray-800 hover:bg-red-700 p-2.5 rounded-full transition-all duration-300 group"
                >
                  <social.Icon size={18} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:pl-10">
          <h3 className="text-lg font-bold mb-6 border-b-2 border-red-700 w-fit pr-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="/" className="hover:text-red-500 transition-colors flex items-center gap-2"><span>›</span> Home</a></li>
            <li><a href="/products" className="hover:text-red-500 transition-colors flex items-center gap-2"><span>›</span> Machines</a></li>
            <li><a href="/about" className="hover:text-red-500 transition-colors flex items-center gap-2"><span>›</span> About Us</a></li>
            <li><a href="/contact" className="hover:text-red-500 transition-colors flex items-center gap-2"><span>›</span> Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-b-2 border-red-700 w-fit pr-4">Contact Info</h3>
          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-red-600 shrink-0" />
              <span>123 Industrial Area, Phase-II,<br/>Nagpur, Maharashtra 440001</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-red-600 shrink-0" />
              <span>+91-9825009216</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-red-600 shrink-0" />
              <span>inquiry@mechchemindia.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} <span className="text-gray-300">MechChem India</span>. All rights reserved. | Designed by [Your Name]</p>
      </div>
    </footer>
  );
};

export default Footer;