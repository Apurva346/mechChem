import { Mail, Facebook, Youtube, Instagram, X, Phone } from 'lucide-react';

const TopHeader = () => {
  return (
    <div className="bg-slate-900 text-white py-2 hidden md:block border-b border-white/10">
      <div className="w-full px-8 flex justify-between items-center">
        
        {/* Left Section: Mobile Numbers (Replacing Search Bar) */}
        <div className="flex items-center gap-4 text-xs font-semibold tracking-wide text-white/80">
          <div className="flex items-center gap-1.5 group">
            <Phone size={13} className="text-orange-500" />
            <a href="tel:+919960846786" className="hover:text-orange-500 hover:underline transition-colors">
              +91-9960846786
            </a>
          </div>
          
          
        </div>

        {/* Right Section: Social Icons & Email */}
        <div className="flex items-center gap-6">
          
          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            {[
              { Icon: Facebook, link: "https://www.facebook.com/MechChemEngineeringServices" },
              { Icon: X, link: "https://x.com/inaxlaser" },
              { Icon: Youtube, link: "https://m.youtube.com/@inaxlaser" },
              { Icon: Instagram, link: "https://www.instagram.com/inaxlaser" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.link} 
                target="_blank" 
                rel="noreferrer" 
                className="text-white/70 hover:text-orange-500 transition-all duration-300"
              >
                <social.Icon size={16} strokeWidth={2} />
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-white/20"></div>

          {/* Email Link */}
          <a href="mailto:mechchemindia@gmail.com" className="flex items-center gap-2 group">
            <Mail size={14} className="text-orange-500" />
            <span className="text-sm font-medium tracking-wide text-white/80 group-hover:text-white transition-colors">
              mechchemindia@gmail.com
            </span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default TopHeader;
