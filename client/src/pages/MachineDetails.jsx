import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { machinesData } from '../data/machinesData';

const MachineDetails = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const machine = machinesData.find((m) => m.id === id);

  if (!machine) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold text-red-700 uppercase">Machine Not Found</h2>
        <Link to="/" className="mt-6 inline-block bg-gray-900 text-white px-8 py-3 rounded font-bold uppercase text-sm">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
      {/* मुख्य कंटेनर: items-start वापरल्यामुळे इमेज विनाकारण ओढली जाणार नाही */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-12">
        
        {/* LEFT: Image Section (रुंदी ४५% केली आहे) */}
        <div className="w-full lg:w-[45%] sticky top-24">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-b-10 border-red-700 aspect-4/5 bg-gray-100">
            <img 
              src={machine.image} 
              alt={machine.name} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-4 left-4 bg-red-700 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
              Industrial Grade
            </div>
          </div>
        </div>

        {/* RIGHT: Content Section (रुंदी ५५% केली आहे) */}
        <div className="w-full lg:w-[55%] flex flex-col">
          <nav className="flex mb-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <Link to="/" className="hover:text-red-700">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-red-700">Product Details</span>
          </nav>

          <h1 className="text-4xl lg:text-5xl font-black text-gray-900 uppercase leading-tight">
            {machine.name}
          </h1>
          
          <div className="flex items-center gap-4 mt-3">
            <p className="text-3xl font-black text-red-700">{machine.price}</p>
            <span className="text-gray-400 text-[11px] font-bold border-l pl-4 border-gray-300 uppercase tracking-tighter">
              Quality Assured
            </span>
          </div>

          <div className="w-16 h-1.5 bg-gray-900 my-6"></div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-black uppercase mb-2 tracking-wider text-gray-400">Description</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {machine.description}
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-black uppercase mb-4 tracking-wider text-gray-400">Technical Specs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {machine.specs.map((spec, index) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-50 p-4 rounded border-l-4 border-red-700 shadow-sm">
                    <span className="text-gray-800 font-bold text-[13px] uppercase">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 px-8 py-5 bg-red-700 text-white font-black rounded shadow-lg hover:bg-gray-800 transition-all uppercase text-xs tracking-widest">
              Inquire Now
            </button>
            <button className="flex-1 px-8 py-5 border-2 border-gray-900 text-gray-900 font-black rounded hover:bg-gray-900 hover:text-white transition-all uppercase text-xs tracking-widest">
              Download PDF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MachineDetails;