// import { Link } from 'react-router-dom';
// import { ChevronDown, ArrowRight } from 'lucide-react';
// import { useState } from 'react';

// const DropdownMenu = ({ title, items }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const safeItems = items || [];

//   return (
//     <div 
//       className="static lg:relative"
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       {/* Trigger Button */}
//       <button 
//         type="button"
//         className={`
//           flex items-center gap-1 py-8 px-2 uppercase text-[13px] font-black tracking-widest transition-all duration-300 outline-none cursor-pointer
//           ${isOpen ? 'text-orange-500' : 'text-[#003366] hover:text-orange-500'}
//         `}
//       >
//         {title} 
//         <ChevronDown 
//           size={14} 
//           className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-orange-500' : ''}`} 
//         />
//       </button>

//       {/* Mega Menu Container */}
//       <div className={`
//         fixed left-0 right-0 top-[130px] w-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] 
//         z-[999] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
//         border-t border-gray-100
//         ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'}
//       `}>
//         {/* Decorative Top Accent Line */}
//         <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-[#003366] to-orange-500"></div>

//         <div className="max-h-[80vh] overflow-y-auto custom-scrollbar">
//           <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
              
//               {safeItems.map((section, idx) => (
//                 <div key={idx} className="group/section space-y-5">
//                   {/* Category Header */}
//                   <div className="flex items-center gap-2 mb-4">
//                     <div className="w-1 h-6 bg-orange-500"></div>
//                     <h4 className="text-[#003366] font-black text-[13px] uppercase tracking-[0.15em]">
//                       {section.category}
//                     </h4>
//                   </div>
                  
//                   {/* Links List */}
//                   <ul className="space-y-3">
//                     {section.subItems && section.subItems.map((subItem, subIdx) => (
//                       <li key={subIdx}>
//                         <Link 
//                           to={`/machine/${subItem.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
//                           onClick={() => setIsOpen(false)}
//                           className="group/link flex items-center justify-between text-gray-500 hover:text-[#003366] transition-all duration-300"
//                         >
//                           <span className="text-[12px] font-bold tracking-tight group-hover/link:translate-x-2 transition-transform duration-300">
//                             {subItem}
//                           </span>
//                           <ArrowRight 
//                             size={12} 
//                             className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-orange-500" 
//                           />
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}

//               {/* Optional Right Side Feature Card */}
//               <div className="hidden lg:block bg-gray-50 p-6 rounded-xl border border-gray-100">
//                  <h5 className="text-[#003366] font-black text-xs uppercase mb-3 italic">Expert Assistance</h5>
//                  <p className="text-gray-500 text-[11px] leading-relaxed mb-4">
//                     Can't find the right machine? Let our engineers guide you to the perfect industrial solution.
//                  </p>
//                  <Link to="/contact" className="text-orange-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
//                     Talk to Expert <ArrowRight size={12} />
//                  </Link>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DropdownMenu;

import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Box } from 'lucide-react';
import { useState } from 'react';

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const safeItems = items || [];

  return (
    <div 
      className="static lg:relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* 1. Down Arrow Icon Added Here */}
      <button 
        className={`flex items-center gap-2 py-6 px-4 text-[13px] font-black uppercase tracking-[0.2em] transition-all duration-300 outline-none cursor-pointer ${
          isOpen ? 'text-orange-500' : 'text-[#003366]'
        }`}
      >
        {title} 
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-orange-500' : ''}`} 
        />
      </button>

      {/* Mega Menu Container */}
      <div className={`
        fixed left-1/2 -translate-x-1/2 top-[120px] w-[95%] max-w-[1200px] bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] 
        z-[999] transition-all duration-500 rounded-[20px] border border-gray-100 overflow-hidden
        ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'}
      `}>
        
        <div className="flex flex-col lg:flex-row min-h-[400px]">
          
          {/* Left Sidebar */}
          <div className="w-full lg:w-[300px] bg-[#001a33] p-10 flex flex-col justify-between">
            <div>
              <Box className="text-orange-500 mb-6" size={28} />
              <h2 className="text-white text-2xl font-bold leading-tight mb-4 uppercase tracking-tighter">
                Industrial <br /><span className="text-orange-500">Solutions.</span>
              </h2>
              <p className="text-gray-400 text-[12px] leading-relaxed">
                Precision engineering meets modern industrial automation.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10">
              <span className="text-white/20 text-[9px] uppercase tracking-[3px]">Elite Series 2026</span>
            </div>
          </div>

          {/* Right Content Area - SPACE FIXED HERE */}
          <div className="flex-1 p-10 bg-white overflow-y-auto max-h-[75vh] custom-scrollbar">
            {/* grid-cols-3 use karne se gap kam ho jayega aur machines pass aa jayengi */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              
              {safeItems.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  {/* Category Title */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] font-bold text-orange-500 border border-orange-200 px-1.5 py-0.5 rounded">0{idx + 1}</span>
                    <h4 className="text-[#003366] font-black text-[12px] uppercase tracking-wider">{section.category}</h4>
                  </div>
                  
                  {/* Sub-items List */}
                  <ul className="space-y-3">
                    {section.subItems && section.subItems.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <Link 
                          to={`/machine/${subItem.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                          onClick={() => setIsOpen(false)}
                          className="group flex items-center justify-between text-gray-500 hover:text-orange-600 transition-all"
                        >
                          <span className="text-[12px] font-bold leading-tight group-hover:translate-x-1 transition-transform">
                            {subItem}
                          </span>
                          <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-500 shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;