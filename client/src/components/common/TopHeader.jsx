// import { Search, Mail, Facebook, Youtube, Instagram, X } from 'lucide-react';

// const TopHeader = () => {
//   return (
//     <div className="bg-red-700 text-white py-2.5 hidden md:block">
//       <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
//         {/* Left: Search Bar */}
//         <div className="flex items-center bg-white/20 rounded px-3 py-1.5">
//           <input 
//             type="text" 
//             placeholder="Search Machines..." 
//             className="bg-transparent outline-none placeholder:text-white/70 w-44 text-sm" 
//           />
//           <Search size={18} className="cursor-pointer hover:text-gray-300" />
//         </div>

//         {/* Right: Social Media & Email */}
//         <div className="flex items-center gap-8">
//           {/* Social Links */}
//           <div className="flex items-center gap-5 border-r border-white/30 pr-8">
//             <a href="https://facebook.com/yourclient" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-all hover:scale-110">
//               <Facebook size={18} />
//             </a>
//             {/* New X (Twitter) Icon */}
//             <a href="https://x.com/yourclient" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-all hover:scale-110">
//               <X size={18} />
//             </a>
//             <a href="https://instagram.com/yourclient" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-all hover:scale-110">
//               <Instagram size={18} />
//             </a>
//             <a href="https://youtube.com/yourclient" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-all hover:scale-110">
//               <Youtube size={18} />
//             </a>
//           </div>

//           {/* Email Link */}
//           <a href="mailto:inquiry@mechchemindia.com" className="flex items-center gap-2.5 hover:text-gray-300 transition-colors text-sm font-medium">
//             <Mail size={18} /> inquiry@mechchemindia.com
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopHeader;

import { Search, Mail, Facebook, Youtube, Instagram, X } from 'lucide-react';

const TopHeader = () => {
  return (
    <div className="bg-[#b91c1c] text-white py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* Left: Search Bar */}
        <div className="flex items-center bg-white/10 rounded-full px-4 py-1 border border-white/20">
          <input 
            type="text" 
            placeholder="Search Machines..." 
            className="bg-transparent outline-none placeholder:text-white/60 w-48 text-sm" 
          />
          <Search size={16} className="text-white/80 cursor-pointer" />
        </div>

        {/* Right Section: Social Icons & Email */}
        <div className="flex items-center gap-6">
          
          {/* Social Icons with Circular Background */}
          <div className="flex items-center gap-3">
            {[
              { Icon: Facebook, link: "https://facebook.com" },
              { Icon: X, link: "https://x.com" },
              { Icon: Youtube, link: "https://youtube.com" },
              { Icon: Instagram, link: "https://instagram.com" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.link} 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all duration-300"
              >
                <social.Icon size={16} strokeWidth={2.5} />
              </a>
            ))}
          </div>

          {/* Vertical Divider */}
          <div className="h-6 w-px bg-white/20"></div>

          {/* Email Section with Icon */}
          <a 
            href="mailto:inquiry@mechchemindia.com" 
            className="flex items-center gap-3 group"
          >
            <div className="bg-white/20 group-hover:bg-white/40 p-2 rounded-full transition-all">
              <Mail size={16} strokeWidth={2.5} />
            </div>
            <span className="text-sm font-medium tracking-wide">
              inquiry@mechchemindia.com
            </span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default TopHeader;