import React from 'react';

// 1. Data paths simple ani direct public static folder mapping nusar kele
const customerGallery = [
  { name: "Customer Work 1", dataType: "testimonial", image: "/home/mechindustrialmachine/cus-one.png" },
  { name: "Customer Work 2", dataType: "testimonial", image: "/home/mechindustrialmachine/cus-two.png" },
  { name: "Customer Work 3", dataType: "testimonial", image: "/home/mechindustrialmachine/Lathe Machine.png" }
];

const Examople = () => {
  return (
    <section className='py-20 px-6 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-[#8b1d31] text-3xl lg:text-4xl font-bold mb-12 text-center underline decoration-slate-200 underline-offset-8'>
          What Our Customers Say
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Static Testimonials */}
          <div className='space-y-8'>
            <div className='relative border-l-4 border-slate-200 pl-6 py-2'>
              <span className='absolute -top-4 -left-2 text-6xl text-slate-100 font-serif'>
                "
              </span>
              <p className='text-xl lg:text-2xl font-bold text-slate-800 leading-tight italic relative z-10'>
                "Reliable machine supplier with good service support."
              </p>
              <p className='text-slate-500 mt-2 font-medium'>
                - Fabrication Workshop, Nagpur
              </p>
            </div>
            <div className='relative border-l-4 border-slate-200 pl-6 py-2'>
              <p className='text-xl lg:text-2xl font-bold text-slate-800 leading-tight italic'>
                "Quality machines and timely delivery."
              </p>
              <p className='text-slate-500 mt-2 font-medium'>
                - Engineering Company
              </p>
            </div>
            <button className='bg-[#8b1d31] text-white px-8 py-3 rounded-sm font-bold text-sm uppercase transition-all shadow-lg active:scale-95'>
              View More Photos
            </button>
          </div>

          {/* Dynamic Photo Gallery (Ata ithe data test karnyathi variable name 'customerGallery' map kela aahe) */}
          <div className='grid grid-cols-2 gap-3 h-[350px]'>
            {/* Column 1: Displaying first 2 images */}
            <div className='space-y-3 h-full'>
              {customerGallery && customerGallery
                .filter(m => m.dataType === 'testimonial')
                .slice(0, 2)
                .map((t, idx) => (
                  <div
                    key={idx}
                    className='h-1/2 overflow-hidden rounded-sm shadow-md'
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                      onError={(e) => {
                        // Jar images cha local path nahi bhetla tar broken link evaji color block disel
                        e.target.src = "https://placehold.co/600x400?text=Check+Image+Path";
                      }}
                    />
                  </div>
                ))}
            </div>

            {/* Column 2: Displaying the 3rd image */}
            <div className='h-full overflow-hidden rounded-sm shadow-md'>
              {customerGallery && customerGallery
                .filter(m => m.dataType === 'testimonial')
                .slice(2, 3)
                .map((t, idx) => (
                  <img
                    key={idx}
                    src={t.image}
                    alt={t.name}
                    className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                    onError={(e) => {
                      e.target.src = "https://placehold.co/600x400?text=Check+Image+Path";
                    }}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examople;