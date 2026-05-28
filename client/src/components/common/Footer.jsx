// import React from 'react'
// import {
//   Facebook,
//   Youtube,
//   Instagram,
//   X,
//   Mail,
//   Phone,
//   MapPin
// } from 'lucide-react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   const socialLinks = [
//     { Icon: Facebook, link: 'https://facebook.com' },
//     { Icon: X, link: 'https://x.com' },
//     { Icon: Youtube, link: 'https://youtube.com' },
//     { Icon: Instagram, link: 'https://instagram.com' }
//   ]

//   return (
//     <footer className='bg-[#001a33] text-white py-16 mt-12 border-t-4 border-orange-500'>
//       <div className='w-full px-8 md:px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
//         {/* 1. Company Info & Contact (Shifted Follow Us & Contact here) */}
//         <div className='space-y-10 lg:col-span-1'>
//           <div>
//             {/* <div className="flex items-center gap-2 mb-6">
//                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-black italic text-[#001a33] text-xl">M</div>
//                <h1 className="text-xl font-black tracking-tighter uppercase">MECH <span className="text-orange-500">CHEM</span></h1>
//             </div> */}
//             <div className='flex flex-col mb-6'>
//               <Link to='/' className='inline-block mb-2'>
//                 <img
//                   src='/images/Mech Chem Engineering Services Logo (2).png'
//                   alt='Mech Chem Engineering Services'
//                   /* फुटरमध्ये लोगोची उंची डेस्कटॉपवर h-20 आणि मोबाईलवर h-16 ठेवली आहे */
//                   className='h-16 md:h-20 w-auto object-contain bg-white p-1 rounded-sm'
//                 />
//               </Link>
//               <p className='text-[10px] tracking-[0.2em] text-gray-400 font-bold uppercase mt-1'>
//                 Engineering Solutions Since 2012
//               </p>
//             </div>
//             <p className='text-[14px] text-gray-400 leading-relaxed font-medium'>
//               Reliable Industrial Machinery Sales & Services Since 2012. We
//               Provide quality machines, professional installation, and
//               dependable after-sales support for manufacturing industries.
//             </p>
//           </div>

//           {/* Follow Us Section */}
//           <div>
//             <h4 className='text-[12px] font-black uppercase tracking-widest mb-4 text-orange-500'>
//               Follow Us
//             </h4>
//             <div className='flex gap-3'>
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.link}
//                   className='bg-white/10 hover:bg-orange-500 p-2.5 rounded-full transition-all duration-300 group'
//                 >
//                   <social.Icon
//                     size={18}
//                     className='group-hover:text-[#001a33]'
//                   />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Contact Us Section - Now under Follow Us */}
//           <div className='pt-2'>
//             <h3 className='text-md font-black mb-6 border-b-2 border-orange-500 w-fit pr-4 uppercase tracking-wider italic'>
//               Contact Us
//             </h3>
//             <div className='space-y-5 text-[14px] text-gray-400 font-bold'>
//               <div className='flex items-start gap-3'>
//                 <MapPin size={20} className='text-orange-500 shrink-0 mt-1' />
//                 <span className='leading-snug'>
//                   Plot No.11 NASA Ground, Nehru Nagar, Nagpur - 440015
//                 </span>
//               </div>
//               <div className='flex items-center gap-3'>
//                 <Phone size={18} className='text-orange-500 shrink-0' />
//                 <span>+91-9960846786 / 9226450455</span>
//               </div>
//               <div className='flex items-center gap-3'>
//                 <Mail size={18} className='text-orange-500 shrink-0' />
//                 <span className='break-all'>mechchemindia@gmail.com</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* 2. Quick Links */}
//         <div className='lg:pl-10'>
//           <h3 className='text-md font-black mb-8 border-b-2 border-orange-500 w-fit pr-4 uppercase tracking-wider italic'>
//             Quick Links
//           </h3>
//           <ul className='space-y-4 text-[14px] text-gray-400 font-bold'>
//             <li>
//               <a
//                 href='/'
//                 className='hover:text-orange-500 transition-colors uppercase'
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href='/about'
//                 className='hover:text-orange-500 transition-colors uppercase'
//               >
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a
//                 href='/about'
//                 className='hover:text-orange-500 transition-colors uppercase leading-tight inline-block'
//               >
//                 Our Industrial Machinery Range
//               </a>
//             </li>
//             <li>
//               <a
//                 href='/i-nax'
//                 className='hover:text-orange-500 transition-colors uppercase'
//               >
//                 i-NAX Brand
//               </a>
//             </li>
//             <li>
//               <a
//                 href='/about'
//                 className='hover:text-orange-500 transition-colors uppercase'
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href='/contact'
//                 className='hover:text-orange-500 transition-colors uppercase'
//               >
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* 3. Our Products */}
//         <div>
//           <h3 className='text-md font-black mb-8 border-b-2 border-orange-500 w-fit pr-4 uppercase tracking-wider italic'>
//             Our Products
//           </h3>
//           <ul className='space-y-3 text-[14px] text-gray-400 font-bold'>
//             <li className='hover:text-orange-500 transition-colors cursor-default'>
//               Drilling Machines
//             </li>
//             <li className='hover:text-orange-500 transition-colors cursor-default'>
//               Lathe Machines
//             </li>
//             <li className='hover:text-orange-500 transition-colors cursor-default'>
//               Milling Machines
//             </li>
//             <li className='hover:text-orange-500 transition-colors cursor-default'>
//               Power Press Machines
//             </li>
//             <li className='hover:text-orange-500 transition-colors cursor-default'>
//               Shearing Machines
//             </li>
//             <li className='hover:text-orange-500 transition-colors cursor-default'>
//               Shaping Machines
//             </li>
//             <li className='hover:text-orange-500 transition-colors cursor-default'>
//               Press Brake Machines
//             </li>
//             <li className='hover:text-orange-500 transition-colors cursor-default'>
//               Slotting Machines
//             </li>
//             <li className='hover:text-orange-500 transition-colors cursor-default'>
//               Lathe Machine Chucks
//             </li>
//           </ul>
//         </div>

//         {/* 4. Serving Industries */}
//         <div>
//           <h3 className='text-md font-black mb-8 border-b-2 border-orange-500 w-fit pr-4 uppercase tracking-wider italic'>
//             Serving Industries
//           </h3>
//           <ul className='space-y-4 text-[14px] text-gray-400 font-bold uppercase tracking-tight'>
//             <li className='flex items-center gap-2 italic border-l-2 border-orange-500 pl-3'>
//               Automobile
//             </li>
//             <li className='flex items-center gap-2 italic border-l-2 border-orange-500 pl-3'>
//               Fabrication
//             </li>
//             <li className='flex items-center gap-2 italic border-l-2 border-orange-500 pl-3'>
//               Manufacturing
//             </li>
//             <li className='flex items-center gap-2 italic border-l-2 border-orange-500 pl-3'>
//               Engineering Workshops
//             </li>
//             <li className='flex items-center gap-2 italic border-l-2 border-orange-500 pl-3'>
//               MSMEs
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Copyright Bar */}
//       <div className='border-t border-white/10 mt-16 pt-8 text-center text-[12px] text-gray-500 uppercase tracking-[0.3em] font-black'>
//         <p>
//           &copy; {new Date().getFullYear()}{' '}
//           <span className='text-orange-500 font-bold'>
//             Mech Chem Engineering Services
//           </span>
//           . All Rights Reserved.
//         </p>
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
    { Icon: Instagram, link: 'https://www.instagram.com/mechchemengineeringservices' }
  ]

  const ourMachines = [
    'Lathe Machine', 'Milling Machine', 'Drilling Machine',
    'Workholding Tools', 'Grinding Machines',
    'Cutting Machines', 'Finishing & Coating Machines', 'Bandsaw Machines'
  ]

  return (
    <footer className='bg-[#001a33] text-white pt-20 pb-10 mt-12 border-t-4 border-[#8b1d31]'>
      <div className='max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        
        {/* 1. Contact Information & Company Info */}
        <div className='space-y-8'>
          <div className='flex flex-col'>
            <Link to='/' className='inline-block mb-4'>
              <img
                src='/images/Mech Chem Engineering Services Logo (2).png'
                alt='Mech Chem Engineering Services'
                className='h-16 md:h-20 w-auto object-contain bg-white p-1 rounded-sm shadow-md'
              />
            </Link>
            <h2 className='text-lg font-bold leading-tight text-[#8b1d31] uppercase tracking-tighter mb-2'>
              Mech Chem Engineering Services
            </h2>
            <p className='text-sm text-gray-400 font-medium leading-relaxed italic border-l-2 border-[#8b1d31] pl-3'>
              "Delivering reliable industrial machinery solutions with precision, performance, and trusted service."
            </p>
          </div>

          <div className='space-y-4'>
            <div className='flex items-start gap-3 group'>
              <MapPin size={22} className='text-[#8b1d31] shrink-0 mt-1' />
              <p className='text-[13px] text-gray-300 leading-snug group-hover:text-white transition-colors'>
                Plot No.27, shop No. 1, Nathuji Pise Complex, SPT Market, Great Nag Road, Nagpur-440003, Maharashtra.
              </p>
            </div>
            <div className='flex items-center gap-3 group'>
              <Phone size={18} className='text-[#8b1d31] shrink-0' />
              <div className='text-[13px] text-gray-300 font-bold group-hover:text-white transition-colors'>
                <p>+91-9960846786</p>
                <p>+91-9226450455</p>
              </div>
            </div>
            <div className='flex items-center gap-3 group'>
              <Mail size={18} className='text-[#8b1d31] shrink-0' />
              <span className='text-[13px] text-gray-300 font-bold break-all group-hover:text-white transition-colors'>
                mechchemindia@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* 2. Our Machines (Dynamic List) */}
        <div>
          <h3 className='text-md font-black mb-8 border-b-2 border-[#8b1d31] w-fit pr-6 uppercase tracking-widest'>
            Our Machines
          </h3>
          <ul className='space-y-3'>
            {ourMachines.map((machine) => (
              <li key={machine} className='flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer group'>
                <ChevronRight size={14} className='text-[#8b1d31]' />
                <span className='font-medium'>{machine}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. i-NAX Brand Section (Special Highlight) */}
        <div className='lg:col-span-2 bg-white/5 p-6 rounded-md border border-white/10 relative overflow-hidden'>
          <div className='absolute -top-10 -right-10 w-32 h-32 bg-[#8b1d31]/10 rounded-full blur-3xl'></div>
          
          <div className='flex items-center gap-3 mb-4'>
             <h3 className='text-2xl font-black tracking-tighter text-white italic'>
                i-NAX™ <span className='text-[#8b1d31]'>— CNC & Laser</span>
             </h3>
          </div>
          
          <p className='text-sm text-gray-300 mb-6 leading-relaxed'>
            i-NAX™ is our advanced brand offering modern CNC and laser cutting machines 
            designed for precision, speed, and reliable performance in manufacturing industries.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='flex items-center gap-3 bg-[#001a33] p-3 rounded border border-white/5 hover:border-[#8b1d31] transition-all group'>
              <Zap size={18} className='text-[#8b1d31] group-hover:scale-110 transition-transform' />
              <span className='text-[11px] font-black uppercase tracking-tight'>Fiber Laser Cutting</span>
            </div>
            <div className='flex items-center gap-3 bg-[#001a33] p-3 rounded border border-white/5 hover:border-[#8b1d31] transition-all group'>
              <Target size={18} className='text-[#8b1d31] group-hover:scale-110 transition-transform' />
              <span className='text-[11px] font-black uppercase tracking-tight'>Laser Welding Machines</span>
            </div>
            <div className='flex items-center gap-3 bg-[#001a33] p-3 rounded border border-white/5 hover:border-[#8b1d31] transition-all group'>
              <Settings size={18} className='text-[#8b1d31] group-hover:scale-110 transition-transform' />
              <span className='text-[11px] font-black uppercase tracking-tight'>CNC Press Brake</span>
            </div>
            <div className='flex items-center gap-3 bg-[#001a33] p-3 rounded border border-white/5 hover:border-[#8b1d31] transition-all group'>
              <ShieldCheck size={18} className='text-[#8b1d31] group-hover:scale-110 transition-transform' />
              <span className='text-[11px] font-black uppercase tracking-tight'>CNC Laser Pipe Cutting</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social & Copyright Bar */}
      <div className='max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-white/10'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          
          <div className='flex gap-4'>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className='bg-white/5 hover:bg-[#8b1d31] p-3 rounded-full transition-all duration-300 group'
              >
                <social.Icon size={18} className='group-hover:text-white' />
              </a>
            ))}
          </div>

          <div className='text-center md:text-right'>
            <p className='text-[11px] text-gray-500 uppercase tracking-[0.2em] font-bold'>
              &copy; {new Date().getFullYear()}{' '}
              <span className='text-[#8b1d31]'>Mech Chem Engineering Services</span>. 
              All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer