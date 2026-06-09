import TopHeader from './TopHeader'
import DropdownMenu from './DropdownMenu'
import { useState } from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [openCategory, setOpenCategory] = useState(null) // Mobile varti sub-menus handle karnyathi

  // URL Friendly Name banvnya sathi (e.g., "Milling Machine" -> "milling-machine")
  const formatId = name =>
    name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')

  const fabrication = [
    {
      category: 'Lathe Machines',
      subItems: [
        'Light Duty Lathe Machine',
        'Medium & Heavy Duty Lathe Machine',
        'Extra Heavy Duty Lathe Machine',
        'Tool Room & Precision Lathe Machine',
        'Capstan Lathe Machine',
        'All Geared / Geared Head Lathe Machine',
        'Belt Driven Lathe Machine',
        'CNC Lathe Machine',
        'High Speed Lathe Machine'
      ]
    },
    {
      category: 'Milling Machines',
      subItems: [
        'Universal Milling Machine',
        'Vertical Milling Machine',
        'Heavy Duty Milling Machine',
        'Turret Milling Machine'
      ]
    },
    {
      category: 'Drilling Machines',
      subItems: [
        'Vertical Milling Cum Drilling Machine',
        'Heavy Drilling Machine',
        'Radial Drilling Machine',
        'Heavy Duty Radial Drilling Machine',
        'Universal Portable Radial Drilling Machine',
        'Geared Radial Drilling Machine'
      ]
    },
    // {
    //   category: 'Sheet Metal Machines',
    //   isGrouped: true,
    //   groups: [
    //     {
    //       groupName: 'Shearing Machines',
    //       items: ['Hydraulic Shearing Machine', 'Hydraulic Sheet Shearing Machine', 'Metal Forming Shearing Machine']
    //     },
    //     {
    //       groupName: 'Press Brake Machines',
    //       items: ['Hydraulic Press Brake Machine']
    //     },
    //     {
    //       groupName: 'Power Press Machines',
    //       items: ['H Type Power Press Machine', 'C Type Power Press Machine', 'C Type Hydraulic Power Press Machine']
    //     }
    //   ]
    // },
    {
      category: 'Bandsaw Machines',
      subItems: [
        'Double Column Automatic Bandsaw Machine',
        'Double Column Semi-Automatic Bandsaw Machine'
      ]
    },
    {
      category: 'Workholding Tools',
      subItems: ['Self Centering Lathe Chuck', 'Four Jaw Independent Chuck']
    },
    {
      category: 'Grinding Machines',
      subItems: [
        'Manual Surface Grinding Machine',
        'Hydraulic Surface Grinding Machine',
        'Cylindrical Grinding Machine',
        'Tool & Cutter Grinding Machine'
      ]
    },
    // {
    //   category: 'Shaping & Slotting Machines',
    //   subItems: ['Gear Shaping Machine', 'Partition Slotting Machine', 'Heavy Duty Slotting Machine', 'Light Duty Slotting Machine']
    // },
    // {
    //   category: 'Cutting Machines',
    //   subItems: ['Band Saw Machine', 'Power Hacksaw Machine']
    // },
    
    
    {
      category: 'Finishing and Coating Machines',
      subItems: ['Powder Coating Machine']
    }
  ]

  const toggleCategory = index => {
    setOpenCategory(openCategory === index ? null : index)
  }

  return (
    <header className='w-full relative z-50'>
      <TopHeader />
      <nav className='bg-white border-b sticky top-0 shadow-md'>
        <div className='w-full px-8 md:px-3 flex justify-between items-center h-24 '>
          {/* LOGO */}
          <Link to='/' className='shrink-0 flex items-center group py-2'>
            <img
              src='/images/mechchem-logo.png'
              alt='Mech Chem Engineering Services'
              className='h-14 md:h-14 lg:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105'
            />
          </Link>

          {/* CENTER MENU (Desktop) */}
          <div className='hidden lg:flex gap-8 items-center'>
            <Link
              to='/'
              className='text-[#003366] hover:text-orange-500 font-black uppercase text-[13px] tracking-widest transition-colors'
            >
              Home
            </Link>

            {/* Passing formatId utility to DropdownMenu so it can create correct links */}
            <DropdownMenu
              title='Machines'
              items={fabrication}
              formatId={formatId}
            />

            <a
              href='https://inaxlaser.mechchemindia.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#003366] hover:text-orange-500 font-black uppercase text-[13px] tracking-widest transition-colors'
            >
              i-NAX
            </a>

            <Link
              to='/about'
              className='text-[#003366] hover:text-orange-500 font-black uppercase text-[13px] tracking-widest transition-colors'
            >
              About Us
            </Link>
            <Link
              to='/services'
              className='text-[#003366] hover:text-orange-500 font-black uppercase text-[13px] tracking-widest transition-colors'
            >
              services
            </Link>
          </div>

          {/* RIGHT BUTTONS */}
          <div className='flex items-center gap-4'>
            <Link to='/contact' className='hidden sm:block'>
              <button className='bg-orange-500 text-white px-8 py-3 rounded-sm font-black hover:bg-[#003366] transition-all uppercase text-[11px] tracking-[0.2em] shadow-lg'>
                Contact Us
              </button>
            </Link>

            <button
              className='lg:hidden p-2 text-[#003366]'
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {/* Mobile Sidebar */}
        {mobileMenu && (
          <div className='lg:hidden bg-white border-t absolute w-full left-0 shadow-2xl max-h-[75vh] overflow-y-auto z-[100] border-b-4 border-orange-500'>
            <div className='flex flex-col p-6 space-y-4'>
              {/* Home Link */}
              <Link
                to='/'
                onClick={() => setMobileMenu(false)}
                className='font-black border-b pb-3 uppercase text-sm text-[#003366] tracking-wider block'
              >
                Home
              </Link>

              {/* Main Machines Tab */}
              <div className='border-b pb-3 flex flex-col'>
                <div
                  className='flex justify-between items-center cursor-pointer py-1 select-none'
                  onClick={() => {
                    // Jar state simple string asel tar object madhe convert karun toggle karto
                    if (
                      typeof openCategory === 'object' &&
                      openCategory !== null
                    ) {
                      setOpenCategory(
                        openCategory.main ? null : { main: true, sub: null }
                      )
                    } else {
                      setOpenCategory({ main: true, sub: null })
                    }
                  }}
                >
                  <span
                    className={`text-sm font-black uppercase tracking-wider transition-colors duration-200 ${
                      openCategory &&
                      typeof openCategory === 'object' &&
                      openCategory.main
                        ? 'text-orange-500'
                        : 'text-[#003366]'
                    }`}
                  >
                    Machines
                  </span>
                  <div
                    className={`p-1.5 rounded-md transition-all duration-200 ${
                      openCategory &&
                      typeof openCategory === 'object' &&
                      openCategory.main
                        ? 'bg-orange-50 text-orange-500 rotate-180'
                        : 'text-slate-400 bg-slate-50'
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </div>

                {/* Level 1 Dropdown: Display Category Names Only */}
                {openCategory &&
                  typeof openCategory === 'object' &&
                  openCategory.main && (
                    <div className='mt-4 pl-2 flex flex-col space-y-2 animate-fadeIn'>
                      <p className='text-[10px] text-orange-500 uppercase tracking-widest font-black mb-1 underline'>
                        Machines Categories
                      </p>

                      {fabrication.map((item, index) => {
                        const isSubCategoryOpen =
                          openCategory.sub === item.category

                        return (
                          <div
                            key={index}
                            className='border-b border-slate-100/70 pb-2 last:border-none'
                          >
                            {/* Clickable Sub-Category Row */}
                            <div
                              className='flex justify-between items-center cursor-pointer py-1.5 select-none'
                              onClick={() => {
                                // Baki sub menus hide karun fkt current click kela category open matrix thevto
                                setOpenCategory({
                                  main: true,
                                  sub: isSubCategoryOpen ? null : item.category
                                })
                              }}
                            >
                              <span
                                className={`text-xs font-bold uppercase transition-colors ${
                                  isSubCategoryOpen
                                    ? 'text-orange-500'
                                    : 'text-[#003366]'
                                }`}
                              >
                                {item.category}
                              </span>
                              <div
                                className={`p-1 transition-transform duration-200 ${
                                  isSubCategoryOpen
                                    ? 'text-orange-500 rotate-180'
                                    : 'text-slate-400'
                                }`}
                              >
                                <ChevronDown size={14} />
                              </div>
                            </div>

                            {/* Level 2 Dropdown: Display actual Sub-Items under that Machine */}
                            {isSubCategoryOpen && (
                              <div className='mt-2 pl-3 py-2 flex flex-col space-y-2.5 border-l border-orange-400 bg-slate-50/50 rounded-r-md animate-fadeIn'>
                                {/* Direct Category View Link */}
                                <Link
                                  to={`/category/${formatId(item.category)}`}
                                  onClick={() => setMobileMenu(false)}
                                  className='text-[11px] font-black tracking-wider text-orange-500/80 hover:text-orange-600 uppercase block mb-1'
                                >
                                  View All {item.category} →
                                </Link>

                                {item.isGrouped
                                  ? item.groups.map((group, gIdx) => (
                                      <div key={gIdx} className='space-y-2'>
                                        <p className='text-[10px] font-black text-slate-400 uppercase tracking-wider'>
                                          {group.groupName}
                                        </p>
                                        {group.items.map((sub, sIdx) => (
                                          <Link
                                            key={sIdx}
                                            to={`/machine/${formatId(sub)}`}
                                            onClick={() => setMobileMenu(false)}
                                            className='block text-[12px] font-medium text-slate-600 hover:text-orange-500 uppercase transition-colors'
                                          >
                                            {sub}
                                          </Link>
                                        ))}
                                      </div>
                                    ))
                                  : item.subItems?.map((sub, sIdx) => (
                                      <Link
                                        key={sIdx}
                                        to={`/machine/${formatId(sub)}`}
                                        onClick={() => setMobileMenu(false)}
                                        className='block text-[12px] font-medium text-slate-600 hover:text-orange-500 uppercase transition-colors'
                                      >
                                        {sub}
                                      </Link>
                                    ))}
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
              </div>

              {/* i-NAX Link */}
              <a
                href='https://inaxlaser.mechchemindia.com/'
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => setMobileMenu(false)}
                className='font-black border-b pb-3 pt-1 uppercase text-sm text-[#003366] tracking-wider block'
              >
                i-NAX
              </a>

              {/* About Us Link */}
              <Link
                to='/about'
                onClick={() => setMobileMenu(false)}
                className='font-black border-b pb-3 uppercase text-sm text-[#003366] tracking-wider block'
              >
                About Us
              </Link>

              {/* Services Link */}
              <Link
                to='/services'
                onClick={() => setMobileMenu(false)}
                className='font-black border-b pb-3 uppercase text-sm text-[#003366] tracking-wider block'
              >
                Services
              </Link>

              {/* Contact Us Link */}
              <Link
                to='/contact'
                onClick={() => setMobileMenu(false)}
                className='font-black pb-2 uppercase text-sm text-orange-500 tracking-wider block pt-1'
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar

// {mobileMenu && (
//           <div className='lg:hidden bg-white border-t absolute w-full left-0 shadow-2xl max-h-[85vh] overflow-y-auto z-[100] border-b-4 border-orange-500'>
//             <div className='flex flex-col p-6 space-y-4'>
//               <Link to='/' onClick={() => setMobileMenu(false)} className='font-black border-b pb-2 uppercase text-sm text-[#003366]'>
//                 Home
//               </Link>

//               {/* Mobile Machines Accordion */}
//               <div className="flex flex-col">
//                 <p className='text-[10px] text-orange-500 uppercase tracking-widest font-black mb-4 underline'>
//                   Machines Categories
//                 </p>
//                 <div className='pl-2 flex flex-col space-y-2'>
//                   {fabrication.map((item, index) => (
//                     <div key={index} className="border-b border-gray-50 pb-2">
//                       <div className="flex justify-between items-center">
//                         {/* Category Link (Direct to Category Page) */}
//                         <Link
//                           to={`/category/${formatId(item.category)}`}
//                           onClick={() => setMobileMenu(false)}
//                           className="text-sm font-black text-[#003366] uppercase hover:text-orange-500"
//                         >
//                           {item.category}
//                         </Link>
//                         <button onClick={() => toggleCategory(index)} className="p-1">
//                           {openCategory === index ? <ChevronDown size={18}/> : <ChevronRight size={18}/>}
//                         </button>
//                       </div>

//                       {/* Sub-items list (Mobile Accordion) */}
//                       {openCategory === index && (
//                         <div className="pl-4 mt-3 flex flex-col space-y-3 border-l-2 border-orange-100">
//                           {item.isGrouped ? (
//                             item.groups.map((group, gIdx) => (
//                               <div key={gIdx} className="space-y-2">
//                                 <p className="text-[10px] font-bold text-gray-400 uppercase">{group.groupName}</p>
//                                 {group.items.map((sub, sIdx) => (
//                                   <Link
//                                     key={sIdx}
//                                     to={`/machine/${formatId(sub)}`}
//                                     onClick={() => setMobileMenu(false)}
//                                     className="block text-[12px] font-bold text-gray-600 hover:text-orange-500 uppercase"
//                                   >
//                                     {sub}
//                                   </Link>
//                                 ))}
//                               </div>
//                             ))
//                           ) : (
//                             item.subItems?.map((sub, sIdx) => (
//                               <Link
//                                 key={sIdx}
//                                 to={`/machine/${formatId(sub)}`}
//                                 onClick={() => setMobileMenu(false)}
//                                 className="block text-[12px] font-bold text-gray-600 hover:text-orange-500 uppercase"
//                               >
//                                 {sub}
//                               </Link>
//                             ))
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <Link to='/about' onClick={() => setMobileMenu(false)} className='font-black border-b border-t pt-4 pb-2 uppercase text-sm text-[#003366]'>
//                 About Us
//               </Link>
//               <Link to='/contact' onClick={() => setMobileMenu(false)} className='font-black pb-2 uppercase text-sm text-orange-500'>
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         )}
