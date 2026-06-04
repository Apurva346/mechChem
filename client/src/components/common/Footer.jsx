// import React from 'react'
// import {
//   Facebook,
//   Youtube,
//   Instagram,
//   X,
//   Mail,
//   Phone,
//   MapPin,
//   ChevronRight,
//   Zap,
//   Target,
//   Settings,
//   ShieldCheck
// } from 'lucide-react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   const socialLinks = [
//     { Icon: Facebook, link: 'https://www.facebook.com/inaxlaser' },
//     // { Icon: X, link: 'https://x.com' },
//     { Icon: Youtube, link: 'https://www.youtube.com/@inaxlaser' },
//     {
//       Icon: Instagram,
//       link: 'https://www.instagram.com/mechchemengineeringservices'
//     }
//   ]

//   const ourMachines = [
//     'Lathe Machine',
//     'Milling Machine',
//     'Drilling Machine',
//     'Workholding Tools',
//     'Grinding Machines',
//     'Finishing & Coating Machines',
//     'Bandsaw Machines'
//   ]

//   return (
//     <footer className='bg-[#001a33] text-white pt-20 pb-10 mt-12 border-t-4 border-[#8b1d31]'>
//       <div className='max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
//         {/* 1. Contact Information & Company Info */}
//         <div className='space-y-8'>
//           {/* Logo & Description */}
//           <div className='flex flex-col'>
//             <Link to='/' className='inline-block mb-4'>
//               <img
//                 src='/images/Mech Chem Engineering Services Logo (2).png'
//                 alt='Mech Chem Engineering Services'
//                 className='h-16 md:h-20 w-auto object-contain bg-white p-1 rounded-sm shadow-md'
//               />
//             </Link>
//             <h2 className='text-lg font-bold leading-tight text-[#8b1d31] uppercase tracking-tighter mb-2'>
//               Mech Chem Engineering Services
//             </h2>
//             <p className='text-sm text-gray-400 font-medium leading-relaxed italic border-l-2 border-[#8b1d31] pl-3'>
//               "Delivering reliable industrial machinery solutions with
//               precision, performance, and trusted service."
//             </p>
//           </div>

//           {/* Addresses & Contact Details */}
//           <div className='space-y-4'>
//             {/* 1. Main Office Address */}
//             <div className='flex items-start gap-3 group'>
//               <MapPin size={22} className='text-[#8b1d31] shrink-0 mt-1' />
//               <p className='text-[13px] text-gray-300 leading-snug group-hover:text-white transition-colors'>
//                 Plot No.27, shop No. 1, Nathuji Pise Complex, SPT Market, Great
//                 Nag Road, Nagpur-440003, Maharashtra.
//               </p>
//             </div>

//             {/* 2. New i-NAX Experience Center Address */}
//             <div className='flex items-start gap-3 group border-t border-white/5 pt-3'>
//               <MapPin size={22} className='text-[#8b1d31] shrink-0 mt-1' />
//               <p className='text-[13px] text-gray-300 leading-snug group-hover:text-white transition-colors'>
//                 <span className='text-[#8b1d31] font-bold block mb-1 uppercase tracking-tight text-[11px] group-hover:text-red-400 transition-colors'>
//                   New i-NAX™ Experience Center coming soon at:
//                 </span>
//                 Plot No.11 NASA Ground, Nehru Nagar, Nagpur - 440015
//               </p>
//             </div>

//             {/* Phone Numbers */}
//             <div className='flex items-center gap-3 group border-t border-white/5 pt-3'>
//               <Phone size={18} className='text-[#8b1d31] shrink-0' />
//               <div className='text-[13px] text-gray-300 font-bold group-hover:text-white transition-colors space-y-1'>
//                 <p>
//                   <a href='tel:+919960846786' className='hover:underline'>
//                     +91-9960846786
//                   </a>
//                 </p>
//                 <p>
//                   <a href='tel:+919226450455' className='hover:underline'>
//                     +91-9226450455
//                   </a>
//                 </p>
//               </div>
//             </div>

//             {/* Email */}
//             <div className='flex items-center gap-3 group'>
//               <Mail size={18} className='text-[#8b1d31] shrink-0' />
//               <span className='text-[13px] text-gray-300 font-bold break-all group-hover:text-white transition-colors'>
//                 <a
//                   href='mailto:mechchemindia@gmail.com'
//                   className='hover:underline'
//                 >
//                   mechchemindia@gmail.com
//                 </a>
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* 2. Our Machines (Dynamic List) */}
//         <div>
//           <h3 className='text-md font-black mb-8 border-b-2 border-[#8b1d31] w-fit pr-6 uppercase tracking-widest'>
//             Our Machines
//           </h3>
//           <ul className='space-y-3'>
//             {ourMachines.map(machine => (
//               <li
//                 key={machine}
//                 className='flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer group'
//               >
//                 <ChevronRight size={14} className='text-[#8b1d31]' />
//                 <span className='font-medium'>{machine}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* 3. i-NAX Brand Section (Special Highlight) */}
//         <div className='lg:col-span-2 bg-white/5 p-6 rounded-md border border-white/10 relative overflow-hidden'>
//           <div className='absolute -top-10 -right-10 w-32 h-32 bg-[#8b1d31]/10 rounded-full blur-3xl'></div>

//           <div className='flex items-center gap-3 mb-4'>
//             <h3 className='text-2xl font-black tracking-tighter text-white italic'>
//               i-NAX™ <span className='text-[#8b1d31]'>— CNC & Laser</span>
//             </h3>
//           </div>

//           <p className='text-sm text-gray-300 mb-6 leading-relaxed'>
//             i-NAX™ is our advanced brand offering modern CNC and laser cutting
//             machines designed for precision, speed, and reliable performance in
//             manufacturing industries.
//           </p>

//           <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
//             <div className='flex items-center gap-3 bg-[#001a33] p-3 rounded border border-white/5 hover:border-[#8b1d31] transition-all group'>
//               <Zap
//                 size={18}
//                 className='text-[#8b1d31] group-hover:scale-110 transition-transform'
//               />
//               <span className='text-[11px] font-black uppercase tracking-tight'>
//                 Fiber Laser Cutting
//               </span>
//             </div>
//             <div className='flex items-center gap-3 bg-[#001a33] p-3 rounded border border-white/5 hover:border-[#8b1d31] transition-all group'>
//               <Target
//                 size={18}
//                 className='text-[#8b1d31] group-hover:scale-110 transition-transform'
//               />
//               <span className='text-[11px] font-black uppercase tracking-tight'>
//                 Laser Welding Machines
//               </span>
//             </div>
//             <div className='flex items-center gap-3 bg-[#001a33] p-3 rounded border border-white/5 hover:border-[#8b1d31] transition-all group'>
//               <Settings
//                 size={18}
//                 className='text-[#8b1d31] group-hover:scale-110 transition-transform'
//               />
//               <span className='text-[11px] font-black uppercase tracking-tight'>
//                 CNC Press Brake
//               </span>
//             </div>
//             <div className='flex items-center gap-3 bg-[#001a33] p-3 rounded border border-white/5 hover:border-[#8b1d31] transition-all group'>
//               <ShieldCheck
//                 size={18}
//                 className='text-[#8b1d31] group-hover:scale-110 transition-transform'
//               />
//               <span className='text-[11px] font-black uppercase tracking-tight'>
//                 CNC Laser Pipe Cutting
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Social & Copyright Bar */}
//       <div className='max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-white/10'>
//         <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
//           <div className='flex gap-4'>
//             {socialLinks.map((social, index) => (
//               <a
//                 key={index}
//                 href={social.link}
//                 className='bg-white/5 hover:bg-[#8b1d31] p-3 rounded-full transition-all duration-300 group'
//               >
//                 <social.Icon size={18} className='group-hover:text-white' />
//               </a>
//             ))}
//           </div>

//           <div className='text-center md:text-right'>
//             <p className='text-[11px] text-gray-500 uppercase tracking-[0.2em] font-bold'>
//               &copy; {new Date().getFullYear()}{' '}
//               <span className='text-[#8b1d31]'>
//                 Mech Chem Engineering Services
//               </span>
//               . All Rights Reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer



import React from 'react'
import {
  Facebook,
  Youtube,
  Instagram,
  X,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Zap,
  Target,
  Settings,
  ShieldCheck
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const socialLinks = [
    { Icon: Facebook, link: 'https://www.facebook.com/inaxlaser' },
    // { Icon: X, link: 'https://x.com' },
    { Icon: Youtube, link: 'https://www.youtube.com/@inaxlaser' },
    {
      Icon: Instagram,
      link: 'https://www.instagram.com/mechchemengineeringservices'
    }
  ]

  const ourMachines = [
    'Lathe Machine',
    'Milling Machine',
    'Drilling Machine',
    'Workholding Tools',
    'Grinding Machines',
    'Finishing & Coating Machines',
    'Bandsaw Machines'
  ]

  return (
    <footer className='bg-gradient-to-b from-[#001529] to-[#000a14] text-white pt-20 pb-10 mt-16 border-t-4 border-[#8b1d31] relative overflow-hidden'>
      {/* Decorative Top Glow */}
      <div className='absolute top-0 left-1/4 w-96 h-20 bg-[#8b1d31]/10 rounded-full blur-3xl pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10'>
        
        {/* 1. Contact Information & Company Info */}
        <div className='flex flex-col justify-between h-full space-y-6'>
          <div className='space-y-4'>
            <Link to='/' className='inline-block transform hover:scale-105 transition-transform duration-300'>
              <img
                src='/images/Mech Chem Engineering Services Logo (2).png'
                alt='Mech Chem Engineering Services'
                className='h-16 md:h-20 w-auto object-contain bg-white p-1.5 rounded shadow-xl'
              />
            </Link>
            <h2 className='text-md font-black leading-tight text-[#8b1d31] uppercase tracking-wider'>
              Mech Chem Engineering Services
            </h2>
            <p className='text-xs text-gray-400 font-medium leading-relaxed italic border-l-2 border-[#8b1d31] pl-3'>
              "Delivering reliable industrial machinery solutions with precision, performance, and trusted service."
            </p>
          </div>

          <div className='space-y-3 pt-2'>
            {/* Main Office Address */}
            <div className='flex items-start gap-3 group'>
              <MapPin size={18} className='text-[#8b1d31] shrink-0 mt-0.5 group-hover:scale-110 transition-transform' />
              <p className='text-[12px] text-gray-400 leading-snug group-hover:text-white transition-colors duration-200'>
                Plot No.27, shop No. 1, Nathuji Pise Complex, SPT Market, Great Nag Road, Nagpur-440003, Maharashtra.
              </p>
            </div>

            {/* New i-NAX Experience Center Address */}
            <div className='flex items-start gap-3 group border-t border-white/5 pt-3'>
              <MapPin size={18} className='text-[#8b1d31] shrink-0 mt-0.5 group-hover:scale-110 transition-transform' />
              <div className='text-[12px] text-gray-400 leading-snug'>
                <span className='text-[#8b1d31] font-black block mb-1 tracking-tight text-[10px] group-hover:text-red-400 transition-colors'>
                  New i-NAX™ Experience Center coming soon at:
                </span>
                <p className='group-hover:text-white transition-colors duration-200'>
                  Plot No.11 NASA Ground, Nehru Nagar, Nagpur - 440015
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className='flex items-center gap-3 group border-t border-white/5 pt-3'>
              <Phone size={16} className='text-[#8b1d31] shrink-0' />
              <div className='text-[12px] text-gray-400 font-bold group-hover:text-white transition-colors duration-200 space-y-0.5'>
                <p>
                  <a href='tel:+919960846786' className='hover:text-[#8b1d31] hover:underline transition-colors'>
                    +91-9960846786
                  </a>
                </p>
                <p>
                  <a href='tel:+919226450455' className='hover:text-[#8b1d31] hover:underline transition-colors'>
                    +91-9226450455
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className='flex items-center gap-3 group'>
              <Mail size={16} className='text-[#8b1d31] shrink-0' />
              <span className='text-[12px] text-gray-400 font-bold break-all group-hover:text-white transition-colors duration-200'>
                <a href='mailto:mechchemindia@gmail.com' className='hover:text-[#8b1d31] hover:underline transition-colors'>
                  mechchemindia@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* 2. Our Machines (Dynamic List) */}
        <div className='lg:pl-6'>
          <h3 className='text-sm font-black mb-6 border-b-2 border-[#8b1d31] w-fit pr-6 uppercase tracking-widest text-white/90'>
            Our Machines
          </h3>
          <ul className='space-y-2.5'>
            {ourMachines.map(machine => (
              <li
                key={machine}
                className='flex items-center gap-2 text-[13px] text-gray-400 hover:text-white hover:translate-x-1.5 border-l border-transparent hover:border-[#8b1d31] hover:pl-2 transition-all duration-300 cursor-pointer group'
              >
                <ChevronRight size={12} className='text-[#8b1d31] opacity-60 group-hover:opacity-100 transition-opacity' />
                <span className='font-medium'>{machine}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. i-NAX Brand Section (Special Highlight Card) */}
        <div className='lg:col-span-2 bg-white/[0.02] p-6 rounded-xl border border-white/5 relative overflow-hidden flex flex-col justify-between shadow-2xl backdrop-blur-sm group/card hover:border-white/10 transition-colors duration-300'>
          {/* Subtle Glow inside the card */}
          <div className='absolute -top-12 -right-12 w-40 h-40 bg-[#8b1d31]/5 rounded-full blur-3xl group-hover/card:bg-[#8b1d31]/10 transition-colors duration-500'></div>

          <div>
            <div className='flex items-center gap-3 mb-3'>
              <h3 className='text-xl font-black tracking-tight text-white italic '>
                i-NAX™ <span className='text-[#8b1d31] font-normal not-italic text-base tracking-normal bg-[#8b1d31]/10 px-2 py-0.5 rounded ml-1'>— CNC & Laser</span>
              </h3>
            </div>

            <p className='text-[13px] text-gray-400 mb-6 leading-relaxed'>
              i-NAX™ is our advanced brand offering modern CNC and laser cutting
              machines designed for precision, speed, and reliable performance in
              manufacturing industries.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10'>
            <div className='flex items-center gap-3 bg-[#001122] p-3 rounded-lg border border-white/5 hover:border-[#8b1d31]/50 hover:bg-[#001529] transition-all duration-300 group'>
              <Zap size={16} className='text-[#8b1d31] group-hover:scale-110 group-hover:text-red-400 transition-all' />
              <span className='text-[10px] font-extrabold uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors'>
                Fiber Laser Cutting Machine
              </span>
            </div>
            <div className='flex items-center gap-3 bg-[#001122] p-3 rounded-lg border border-white/5 hover:border-[#8b1d31]/50 hover:bg-[#001529] transition-all duration-300 group'>
              <Target size={16} className='text-[#8b1d31] group-hover:scale-110 group-hover:text-red-400 transition-all' />
              <span className='text-[10px] font-extrabold uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors'>
                Laser Welding Machine
              </span>
            </div>
            <div className='flex items-center gap-3 bg-[#001122] p-3 rounded-lg border border-white/5 hover:border-[#8b1d31]/50 hover:bg-[#001529] transition-all duration-300 group'>
              <Settings size={16} className='text-[#8b1d31] group-hover:scale-110 group-hover:text-red-400 transition-all' />
              <span className='text-[10px] font-extrabold uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors'>
                CNC Press Brake Machine
              </span>
            </div>
            <div className='flex items-center gap-3 bg-[#001122] p-3 rounded-lg border border-white/5 hover:border-[#8b1d31]/50 hover:bg-[#001529] transition-all duration-300 group'>
              <ShieldCheck size={16} className='text-[#8b1d31] group-hover:scale-110 group-hover:text-red-400 transition-all' />
              <span className='text-[10px] font-extrabold uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors'>
                CNC Laser Pipe Cutting Machine
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Social & Copyright Bar */}
      <div className='max-w-7xl mx-auto px-6 md:px-8 mt-16 pt-8 border-t border-white/5 relative z-10'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='flex gap-3'>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className='bg-white/[0.03] hover:bg-[#8b1d31] p-3 rounded-xl border border-white/5 hover:border-transparent transition-all duration-300 transform hover:-translate-y-1 group'
              >
                <social.Icon size={16} className='text-gray-400 group-hover:text-white group-hover:scale-110 transition-all' />
              </a>
            ))}
          </div>

          <div className='text-center md:text-right'>
            <p className='text-[10px] text-gray-500 uppercase tracking-[0.25em] font-bold leading-relaxed'>
              &copy; {new Date().getFullYear()}{' '}
              <span className='text-[#8b1d31] tracking-normal font-black'>
                Mech Chem Engineering Services
              </span>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer