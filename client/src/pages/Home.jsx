// import React from 'react';

// const Home = () => {
//   return (
//     <div className="w-full">
//       {/* 1. HERO SECTION */}
//       <section className="relative bg-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
//           <div className="flex flex-col lg:flex-row items-center gap-12">

//             {/* LEFT: Content */}
//             <div className="flex-1 text-center lg:text-left z-10">
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight uppercase">
//                 Leading <span className="text-red-700">Manufacturer</span> <br />
//                 of Industrial Machines
//               </h1>
//               <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
//                 High-performance engineering solutions for Machining, Metal Fabrication, and Re-Sharpening. Delivering precision and durability to global industries.
//               </p>

//               <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <button className="px-8 py-4 bg-red-700 text-white font-bold rounded shadow-lg hover:bg-gray-800 transition-all duration-300 uppercase text-sm tracking-wider">
//                   Explore Machines
//                 </button>
//                 <button className="px-8 py-4 border-2 border-gray-800 text-gray-800 font-bold rounded hover:bg-gray-800 hover:text-white transition-all duration-300 uppercase text-sm tracking-wider">
//                   Inquiry Now
//                 </button>
//               </div>

//               {/* Trust Badges */}
//               <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-400">
//                 <div className="flex flex-col">
//                   <span className="text-2xl font-bold text-gray-800">25+</span>
//                   <span className="text-[10px] uppercase tracking-widest">Years Exp.</span>
//                 </div>
//                 <div className="w-px h-10 bg-gray-200"></div>
//                 <div className="flex flex-col">
//                   <span className="text-2xl font-bold text-gray-800">ISO</span>
//                   <span className="text-[10px] uppercase tracking-widest">Certified</span>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT: Fixed Image Size */}
//             <div className="flex-1 relative w-full flex justify-center lg:justify-end">
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl border-b-10 border-red-700 w-full max-w550">
//                 <img
//                   src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800"
//                   alt="Industrial Machine"
//                   className="w-full h-350 lg:h-480 object-cover hover:scale-105 transition-transform duration-700"
//                 />
//                 <div className="absolute bottom-0 left-0 bg-gray-900/80 text-white p-4 text-[10px] font-mono tracking-widest uppercase">
//                   Precision Engineering | MechChem India
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* 2. EXPERTISE / CATEGORIES SECTION */}
//       <section className="bg-gray-50 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">
//               Our <span className="text-red-700">Expertise</span>
//             </h2>
//             <div className="w-20 h-1 bg-red-700 mx-auto mt-4"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Card 1 */}
//             <div className="bg-white p-10 shadow-sm border-b-4 border-transparent hover:border-red-700 transition-all group">
//               <div className="w-12 h-12 bg-red-50 text-red-700 flex items-center justify-center rounded mb-6 font-bold group-hover:bg-red-700 group-hover:text-white transition-colors">01</div>
//               <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Machining</h3>
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 Specialized in high-precision Drilling, Grinding, Shaping, and Milling machines for diverse industrial applications.
//               </p>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-white p-10 shadow-sm border-b-4 border-transparent hover:border-red-700 transition-all group">
//               <div className="w-12 h-12 bg-red-50 text-red-700 flex items-center justify-center rounded mb-6 font-bold group-hover:bg-red-700 group-hover:text-white transition-colors">02</div>
//               <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Metal Fabrication</h3>
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 Advanced solutions for cutting, shearing, rolling, and bending, ensuring efficient metal shaping operations.
//               </p>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-white p-10 shadow-sm border-b-4 border-transparent hover:border-red-700 transition-all group">
//               <div className="w-12 h-12 bg-red-50 text-red-700 flex items-center justify-center rounded mb-6 font-bold group-hover:bg-red-700 group-hover:text-white transition-colors">03</div>
//               <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Re-Sharpening</h3>
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 Extending tool life with our precision re-sharpening machines for drill bits, end mills, and cutters.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. CTA SECTION */}
//       <section className="bg-gray-900 py-16">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
//             Need a Custom Machine Solution?
//           </h2>
//           <p className="text-gray-400 mt-4 mb-8 max-w-xl mx-auto">
//             Contact our engineering team today to discuss your specific requirements and get a detailed quote.
//           </p>
//           <button className="px-10 py-4 bg-white text-gray-900 font-black rounded hover:bg-red-700 hover:text-white transition-all uppercase text-sm">
//             Get In Touch
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';

// const Home = () => {
//   return (
//     <div className="w-full">
//       {/* 1. HERO SECTION */}
//       <section className="relative bg-white overflow-hidden border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//           <div className="flex flex-col lg:flex-row items-center gap-16">

//             {/* LEFT: Content */}
//             <div className="flex-1 text-center lg:text-left z-10">
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight uppercase">
//                 Leading <span className="text-red-700">Manufacturer</span> <br />
//                 of Industrial Machines
//               </h1>
//               <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
//                 High-performance engineering solutions for Machining, Metal Fabrication, and Re-Sharpening. Delivering precision and durability to global industries.
//               </p>

//               <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <button className="px-8 py-4 bg-red-700 text-white font-bold rounded shadow-lg hover:bg-gray-800 transition-all duration-300 uppercase text-sm tracking-wider">
//                   Explore Machines
//                 </button>
//                 <button className="px-8 py-4 border-2 border-gray-800 text-gray-800 font-bold rounded hover:bg-gray-800 hover:text-white transition-all duration-300 uppercase text-sm tracking-wider">
//                   Inquiry Now
//                 </button>
//               </div>

//               {/* Trust Badges */}
//               <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-400">
//                 <div className="flex flex-col">
//                   <span className="text-2xl font-bold text-gray-800">25+</span>
//                   <span className="text-[10px] uppercase tracking-widest font-bold">Years Exp.</span>
//                 </div>
//                 <div className="w-px h-10 bg-gray-200"></div>
//                 <div className="flex flex-col">
//                   <span className="text-2xl font-bold text-gray-800">ISO</span>
//                   <span className="text-[10px] uppercase tracking-widest font-bold">Certified</span>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT: Optimized Image Container (Image size is fixed here) */}
//             <div className="flex-1 relative w-full flex justify-center lg:justify-end">
//               {/* max-w-lg वापरल्यामुळे इमेज ५१२px पेक्षा मोठी होणार नाही */}
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl border-b-8 border-red-700 w-full max-w-md lg:max-w-lg">
//                 <img
//                   src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800"
//                   alt="Industrial Machine"

//                   className="w-full h-80 lg:h-450 object-cover hover:scale-105 transition-transform duration-700"
//                 />
//                 <div className="absolute bottom-0 left-0 w-full bg-gray-900/80 text-white p-3 text-[10px] font-mono tracking-widest uppercase">
//                   Model: MECH-X100 | Precision Engineering
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       <section className="bg-gray-900 py-16">
//          <div className="max-w-7xl mx-auto px-4 text-center">
//            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
//              Need a Custom Machine Solution?
//            </h2>
//            <p className="text-gray-400 mt-4 mb-8 max-w-xl mx-auto">
//              Contact our engineering team today to discuss your specific requirements and get a detailed quote.
//            </p>
//            <button className="px-10 py-4 bg-white text-gray-900 font-black rounded hover:bg-red-700 hover:text-white transition-all uppercase text-sm">
//              Get In Touch
//            </button>
//          </div>
//        </section>

//       {/* 2. EXPERTISE SECTION (Cards) */}
//       <section className="bg-gray-50 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-black text-gray-900 uppercase">
//               Our <span className="text-red-700">Expertise</span>
//             </h2>
//             <div className="w-20 h-1.5 bg-red-700 mx-auto mt-4"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Card 1 */}
//             <div className="bg-white p-10 shadow-sm border-b-4 border-transparent hover:border-red-700 transition-all group">
//               <div className="w-12 h-12 bg-red-50 text-red-700 flex items-center justify-center rounded mb-6 font-bold group-hover:bg-red-700 group-hover:text-white transition-colors">01</div>
//               <h3 className="text-xl font-bold mb-4 uppercase">Machining</h3>
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 Precision Lathe, Milling, and Drilling machines designed for heavy-duty industrial performance.
//               </p>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-white p-10 shadow-sm border-b-4 border-transparent hover:border-red-700 transition-all group">
//               <div className="w-12 h-12 bg-red-50 text-red-700 flex items-center justify-center rounded mb-6 font-bold group-hover:bg-red-700 group-hover:text-white transition-colors">02</div>
//               <h3 className="text-xl font-bold mb-4 uppercase">Fabrication</h3>
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 Advanced Cutting, Bending, and Shearing solutions for seamless metal shaping.
//               </p>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-white p-10 shadow-sm border-b-4 border-transparent hover:border-red-700 transition-all group">
//               <div className="w-12 h-12 bg-red-50 text-red-700 flex items-center justify-center rounded mb-6 font-bold group-hover:bg-red-700 group-hover:text-white transition-colors">03</div>
//               <h3 className="text-xl font-bold mb-4 uppercase">Re-Sharpening</h3>
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 Maximize tool efficiency with our specialized drill bit and tool re-sharpening equipment.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import React from 'react'

const Home = () => {
  return (
    <div className='w-full'>
      {/* 1. HERO SECTION - मजकूर आणि फोटोची उंची मॅच केली आहे */}
      <section className='relative bg-white overflow-hidden border-b border-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20'>
          {/* items-stretch मुळे दोन्ही कॉलम्सची हाईट सारखी राहते */}
          <div className='flex flex-col lg:flex-row lg:items-stretch gap-12'>
            {/* LEFT: Content */}
            <div className='flex-1 flex flex-col justify-center text-center lg:text-left py-4'>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight uppercase'>
                Leading <span className='text-red-700'>Manufacturer</span>{' '}
                <br />
                of Industrial Machines
              </h1>
              <p className='mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed'>
                High-performance engineering solutions for Machining, Metal
                Fabrication, and Re-Sharpening. Delivering precision and
                durability to global industries.
              </p>

              <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                <button className='px-8 py-4 bg-red-700 text-white font-bold rounded shadow-lg hover:bg-gray-800 transition-all duration-300 uppercase text-sm tracking-wider'>
                  Explore Machines
                </button>
                <button className='px-8 py-4 border-2 border-gray-800 text-gray-800 font-bold rounded hover:bg-gray-800 hover:text-white transition-all duration-300 uppercase text-sm tracking-wider'>
                  Inquiry Now
                </button>
              </div>

              {/* Trust Badges */}
              <div className='mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-400'>
                <div className='flex flex-col'>
                  <span className='text-2xl font-bold text-gray-800'>25+</span>
                  <span className='text-[10px] uppercase tracking-widest font-bold'>
                    Years Exp.
                  </span>
                </div>
                <div className='w-px h-10 bg-gray-200'></div>
                <div className='flex flex-col'>
                  <span className='text-2xl font-bold text-gray-800'>ISO</span>
                  <span className='text-[10px] uppercase tracking-widest font-bold'>
                    Certified
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT: Image Container - आता फक्त मजकुराच्या उंचीइतकीच दिसेल */}
            <div className='flex-1 relative hidden lg:block'>
              <div className='absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-b-8 border-red-700'>
                <img
                  src='https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800'
                  alt='Industrial Machine'
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
                />
                <div className='absolute bottom-0 left-0 w-full bg-gray-900/80 text-white p-3 text-[10px] font-mono tracking-widest uppercase text-center'>
                  Model: MECH-X100 | Precision Engineering
                </div>
              </div>
            </div>

            {/* मोबाईलसाठी इमेज (Normal size) */}
            <div className='lg:hidden w-full h-64 relative rounded-xl overflow-hidden shadow-lg border-b-4 border-red-700'>
              <img
                src='https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800'
                alt='Industrial Machine'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED MACHINES SECTION */}
      <section className='max-w-7xl mx-auto px-4 py-20'>
        <div className='flex justify-between items-end mb-12 border-l-8 border-red-700 pl-6'>
          <div>
            <h2 className='text-3xl font-black text-gray-900 uppercase'>
              Featured <span className='text-red-700'>Machines</span>
            </h2>
            <p className='text-gray-500 mt-2'>
              Precision-engineered for high productivity
            </p>
          </div>
          <button className='hidden md:block text-red-700 font-bold border-b-2 border-red-700 hover:text-gray-800 hover:border-gray-800 transition-all'>
            VIEW ALL MACHINES
          </button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {/* Machine Card 1 */}
          <div className='group bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden'>
            <div className='relative h-64 overflow-hidden bg-gray-200'>
              <img
                src='https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600'
                alt='Lathe Machine'
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
              />
              <div className='absolute top-4 right-4 bg-red-700 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase'>
                New Arrival
              </div>
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-black text-gray-900 uppercase tracking-tight'>
                Heavy Duty Lathe Machine
              </h3>
              <p className='text-sm text-gray-500 mt-2 line-clamp-2 italic'>
                Suitable for high-precision turning operations in heavy
                industries.
              </p>

              <div className='mt-6 flex items-center justify-between'>
                <div>
                  <span className='text-xs text-gray-400 block uppercase'>
                    Starting from
                  </span>
                  <span className='text-2xl font-black text-red-700'>
                    ₹4,50,000
                  </span>
                </div>
                <button className='bg-gray-900 text-white p-3 rounded hover:bg-red-700 transition-colors'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Machine Card 2 */}
          <div className='group bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden'>
            <div className='relative h-64 overflow-hidden bg-gray-200'>
              <img
                src='https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=600'
                alt='Drilling Machine'
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
              />
              <div className='absolute top-4 right-4 bg-gray-800 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase'>
                Best Seller
              </div>
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-black text-gray-900 uppercase tracking-tight'>
                Precision Radial Drill
              </h3>
              <p className='text-sm text-gray-500 mt-2 line-clamp-2 italic'>
                Engineered for smooth drilling in solid metal blocks with 100%
                accuracy.
              </p>

              <div className='mt-6 flex items-center justify-between'>
                <div>
                  <span className='text-xs text-gray-400 block uppercase'>
                    Starting from
                  </span>
                  <span className='text-2xl font-black text-red-700'>
                    ₹2,80,000
                  </span>
                </div>
                <button className='bg-gray-900 text-white p-3 rounded hover:bg-red-700 transition-colors'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Machine Card 3 */}
          <div className='group bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden'>
            <div className='relative h-64 overflow-hidden bg-gray-200'>
              <img
                src='https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600'
                alt='Milling Machine'
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-black text-gray-900 uppercase tracking-tight'>
                Vertical Milling Machine
              </h3>
              <p className='text-sm text-gray-500 mt-2 line-clamp-2 italic'>
                Compact and powerful milling solution for tool rooms and
                workshops.
              </p>

              <div className='mt-6 flex items-center justify-between'>
                <div>
                  <span className='text-xs text-gray-400 block uppercase'>
                    Starting from
                  </span>
                  <span className='text-2xl font-black text-red-700'>
                    ₹6,20,000
                  </span>
                </div>
                <button className='bg-gray-900 text-white p-3 rounded hover:bg-red-700 transition-colors'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CTA SECTION (Dark Banner) */}
      <section className='bg-gray-900 py-16'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold text-white uppercase tracking-wider'>
            Need a Custom Machine Solution?
          </h2>
          <p className='text-gray-400 mt-4 mb-8 max-w-xl mx-auto'>
            Contact our engineering team today to discuss your specific
            requirements and get a detailed quote.
          </p>
          <button className='px-10 py-4 bg-white text-gray-900 font-black rounded hover:bg-red-700 hover:text-white transition-all uppercase text-sm'>
            Get In Touch
          </button>
        </div>
      </section>

      {/* 3. EXPERTISE SECTION (Cards) */}
      <section className='bg-gray-50 py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-black text-gray-900 uppercase'>
              Our <span className='text-red-700'>Expertise</span>
            </h2>
            <div className='w-20 h-1.5 bg-red-700 mx-auto mt-4'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white p-10 shadow-sm border-b-4 border-transparent hover:border-red-700 transition-all group'>
              <div className='w-12 h-12 bg-red-50 text-red-700 flex items-center justify-center rounded mb-6 font-bold group-hover:bg-red-700 group-hover:text-white transition-colors'>
                01
              </div>
              <h3 className='text-xl font-bold mb-4 uppercase'>Machining</h3>
              <p className='text-gray-500 text-sm leading-relaxed'>
                Precision Lathe, Milling, and Drilling machines designed for
                heavy-duty industrial performance.
              </p>
            </div>

            <div className='bg-white p-10 shadow-sm border-b-4 border-transparent hover:border-red-700 transition-all group'>
              <div className='w-12 h-12 bg-red-50 text-red-700 flex items-center justify-center rounded mb-6 font-bold group-hover:bg-red-700 group-hover:text-white transition-colors'>
                02
              </div>
              <h3 className='text-xl font-bold mb-4 uppercase'>Fabrication</h3>
              <p className='text-gray-500 text-sm leading-relaxed'>
                Advanced Cutting, Bending, and Shearing solutions for seamless
                metal shaping.
              </p>
            </div>

            <div className='bg-white p-10 shadow-sm border-b-4 border-transparent hover:border-red-700 transition-all group'>
              <div className='w-12 h-12 bg-red-50 text-red-700 flex items-center justify-center rounded mb-6 font-bold group-hover:bg-red-700 group-hover:text-white transition-colors'>
                03
              </div>
              <h3 className='text-xl font-bold mb-4 uppercase'>
                Re-Sharpening
              </h3>
              <p className='text-gray-500 text-sm leading-relaxed'>
                Maximize tool efficiency with our specialized drill bit and tool
                re-sharpening equipment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
