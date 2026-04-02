
// import { Link } from 'react-router-dom';
// import { ChevronDown, ChevronRight } from 'lucide-react';
// import { useState, useEffect } from 'react';


// const DropdownMenu = ({ title, items }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(0);
//   const [activeGroup, setActiveGroup] = useState(null); 
//   const safeItems = items || [];

//   useEffect(() => {
//     setActiveGroup(null);
//   }, [activeCategory]);

//   return (
//     <div 
//       className="relative" 
//       onMouseEnter={() => setIsOpen(true)} 
//       onMouseLeave={() => { 
//         setIsOpen(false); 
//         setActiveCategory(0); 
//         setActiveGroup(null); 
//       }}
//     >
//       <button className={`flex items-center gap-1 py-6 px-4 text-[13px] font-bold uppercase tracking-wider transition-all ${isOpen ? 'text-orange-600' : 'text-[#003366]'}`}>
//         {title} <ChevronDown size={14} className={isOpen ? 'rotate-180' : ''} />
//       </button>

//       <div className={`absolute left-0 top-full flex z-[999] w-auto h-fit min-h-0 ${isOpen ? 'flex' : 'hidden'}`}>
        
//         {/* LEVEL 1: Main Categories - (Uppercase thevla aahe for Professional Look) */}
//         <div className="w-[240px] bg-[#f4f4f4] border-r border-gray-200 flex flex-col h-fit shrink-0 relative">
//           {safeItems.map((section, idx) => (
//             <div 
//               key={idx}
//               onMouseEnter={() => setActiveCategory(idx)}
//               className={`relative flex items-center justify-between px-4 py-3 cursor-pointer text-[11px] font-black  border-b border-gray-200 last:border-0 transition-colors ${
//                 activeCategory === idx ? 'bg-[#0056b3] text-white' : 'text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               <span>{section.category}</span>
//               <ChevronRight size={14} strokeWidth={3} className={activeCategory === idx ? 'text-white' : 'text-black'} />

//               {/* LEVEL 2 & 3: Right Side Content */}
//               {activeCategory === idx && (
//                 <div className="absolute left-[239px] top-0 flex h-fit z-[1000]">
                  
//                   {section.isGrouped ? (
//                     <>
//                       {/* LEVEL 2: Sub-Groups (Normal Case) */}
//                       <div className="w-[200px] bg-white border-r border-gray-100 flex flex-col shadow-md">
//                         {section.groups.map((group, gIdx) => (
//                           <div 
//                             key={gIdx}
//                             onMouseEnter={(e) => { e.stopPropagation(); setActiveGroup(gIdx); }}
//                             className={`relative flex items-center justify-between px-4 py-3 cursor-pointer text-[11px] font-bold border-b border-gray-100 last:border-0 transition-all ${
//                               activeGroup === gIdx ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-gray-100'
//                             }`}
//                           >
//                             {/* Ithe 'uppercase' kadhun takla aahe */}
//                             <span>{group.groupName}</span>
//                             <ChevronRight size={12} strokeWidth={3} className={activeGroup === gIdx ? 'text-white' : 'text-black'} />

//                             {/* LEVEL 3: Group Items */}
//                             {activeGroup === gIdx && (
//                               <div className="absolute left-[199px] top-0 bg-white min-w-[260px] flex flex-col shadow-xl border-l border-gray-100 h-fit">
//                                 {group.items.map((item, iIdx) => (
//                                   <Link 
//                                     key={iIdx}
//                                     to={`/machine/${item.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
//                                     onClick={() => setIsOpen(false)}
//                                     className="text-[12px] font-bold px-6 py-3 border-b border-gray-50 last:border-0 hover:text-[#0056b3] hover:bg-blue-50 bg-white text-gray-700 whitespace-nowrap"
//                                   >
//                                     {item}
//                                   </Link>
//                                 ))}
//                               </div>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </>
//                   ) : (
//                     /* Simple Items (Normal Case) */
//                     <div className="bg-white min-w-[300px] flex flex-col shadow-xl border-l border-gray-100 h-fit">
//                       {section.subItems?.map((subItem, subIdx) => (
//                         <Link 
//                           key={subIdx}
//                           to={`/machine/${subItem.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
//                           onClick={() => setIsOpen(false)}
//                           className={`text-[12px] font-bold px-6 py-3 border-b border-gray-50 last:border-0 whitespace-nowrap ${
//                             subIdx % 2 === 0 ? 'bg-white' : 'bg-[#f9f9f9]'
//                           } hover:bg-blue-50 hover:text-[#0056b3] text-gray-700`}
//                         >
//                           {subItem}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DropdownMenu;


import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeGroup, setActiveGroup] = useState(null); 
  const safeItems = items || [];

  // URL Friendly Name banvnya sathi helper function
  const formatId = (name) =>
    name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

  useEffect(() => {
    setActiveGroup(null);
  }, [activeCategory]);

  return (
    <div 
      className="relative" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => { 
        setIsOpen(false); 
        setActiveCategory(0); 
        setActiveGroup(null); 
      }}
    >
      <button className={`flex items-center gap-1 py-6 px-4 text-[13px] font-bold uppercase tracking-wider transition-all ${isOpen ? 'text-orange-600' : 'text-[#003366]'}`}>
        {title} <ChevronDown size={14} className={isOpen ? 'rotate-180' : ''} />
      </button>

      <div className={`absolute left-0 top-full flex z-[999] w-auto h-fit min-h-0 ${isOpen ? 'flex' : 'hidden'}`}>
        
        {/* LEVEL 1: Main Categories */}
        <div className="w-[240px] bg-[#f4f4f4] border-r border-gray-200 flex flex-col h-fit shrink-0 relative shadow-xl">
          {safeItems.map((section, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => setActiveCategory(idx)}
              className={`relative flex items-center justify-between px-4 py-3 cursor-pointer text-[11px] font-black border-b border-gray-200 last:border-0 transition-colors ${
                activeCategory === idx ? 'bg-[#0056b3] text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              {/* Category Link: Yaavar click kelyavar Category Page open hoil */}
              <Link 
                to={`/category/${formatId(section.category)}`}
                className="flex-grow py-1"
                onClick={() => setIsOpen(false)}
              >
                <span>{section.category}</span>
              </Link>
              <ChevronRight size={14} strokeWidth={3} className={activeCategory === idx ? 'text-white' : 'text-black'} />

              {/* LEVEL 2 & 3: Right Side Content */}
              {activeCategory === idx && (
                <div className="absolute left-[239px] top-0 flex h-fit z-[1000] shadow-2xl">
                  
                  {section.isGrouped ? (
                    <>
                      {/* LEVEL 2: Sub-Groups */}
                      <div className="w-[200px] bg-white border-r border-gray-100 flex flex-col shadow-md">
                        {section.groups.map((group, gIdx) => (
                          <div 
                            key={gIdx}
                            onMouseEnter={(e) => { e.stopPropagation(); setActiveGroup(gIdx); }}
                            className={`relative flex items-center justify-between px-4 py-3 cursor-pointer text-[11px] font-bold border-b border-gray-100 last:border-0 transition-all ${
                              activeGroup === gIdx ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            <span>{group.groupName}</span>
                            <ChevronRight size={12} strokeWidth={3} className={activeGroup === gIdx ? 'text-white' : 'text-black'} />

                            {/* LEVEL 3: Group Items (Individual Machines) */}
                            {activeGroup === gIdx && (
                              <div className="absolute left-[199px] top-0 bg-white min-w-[260px] flex flex-col shadow-xl border-l border-gray-100 h-fit">
                                {group.items.map((item, iIdx) => (
                                  <Link 
                                    key={iIdx}
                                    to={`/machine/${formatId(item)}`}
                                    onClick={() => setIsOpen(false)}
                                    className="text-[12px] font-bold px-6 py-3 border-b border-gray-50 last:border-0 hover:text-[#0056b3] hover:bg-blue-50 bg-white text-gray-700 whitespace-nowrap"
                                  >
                                    {item}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    /* LEVEL 2: Simple Items (Individual Machines) */
                    <div className="bg-white min-w-[300px] flex flex-col shadow-xl border-l border-gray-100 h-fit">
                      {section.subItems?.map((subItem, subIdx) => (
                        <Link 
                          key={subIdx}
                          to={`/machine/${formatId(subItem)}`}
                          onClick={() => setIsOpen(false)}
                          className={`text-[12px] font-bold px-6 py-3 border-b border-gray-50 last:border-0 whitespace-nowrap ${
                            subIdx % 2 === 0 ? 'bg-white' : 'bg-[#f9f9f9]'
                          } hover:bg-blue-50 hover:text-[#0056b3] text-gray-700`}
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;