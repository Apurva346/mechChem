


// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';

// const MachineDetails = () => {
//   const { id } = useParams();
//   const [machine, setMachine] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const fetchMachineDetails = async () => {
//       try {
//         setLoading(true);
//         // Backend API call
//         const response = await axios.get(`http://localhost:5000/api/machines/name/${id}`);
//         setMachine(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMachineDetails();
//   }, [id]);

//   if (loading) return <div className="py-32 text-center font-bold uppercase tracking-widest text-gray-400 animate-pulse">Loading Machine Details...</div>;

//   if (!machine) {
//     return (
//       <div className="py-32 text-center">
//         <h2 className="text-3xl font-bold text-red-700 uppercase">Machine Not Found</h2>
//         <Link to="/" className="mt-6 inline-block bg-gray-900 text-white px-8 py-3 rounded font-bold uppercase text-sm">Back to Home</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
//       <div className="flex flex-col lg:flex-row lg:items-start gap-12">
        
//         {/* LEFT: Image Section */}
//         <div className="w-full lg:w-[45%] lg:sticky lg:top-24">
//           <div className="relative rounded-2xl overflow-hidden shadow-2xl border-b-[10px] border-red-700 aspect-[4/5] bg-gray-100">
//             <img 
//               src={machine.image} 
//               alt={machine.altText || machine.name} 
//               className="w-full h-full object-cover" 
//             />
//             <div className="absolute top-4 left-4 bg-red-700 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
//               Industrial Grade
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: Content Section */}
//         <div className="w-full lg:w-[55%] flex flex-col">
//           {/* Breadcrumb */}
//           <nav className="flex mb-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//             <Link to="/" className="hover:text-red-700">Home</Link>
//             <span className="mx-2">/</span>
//             <span className="text-red-700">{machine.category}</span>
//           </nav>

//           {/* H1: Machine Name */}
//           <h1 className="text-4xl lg:text-5xl font-black text-gray-900 uppercase leading-tight">
//             {machine.name}
//           </h1>

//           {/* H2: Subtitle/Robust Equipment Line */}
//           {machine.subTitle && (
//             <h2 className="text-xl lg:text-2xl font-bold text-red-700 mt-2 leading-snug">
//               {machine.subTitle}
//             </h2>
//           )}

//           <div className="w-16 h-1.5 bg-gray-900 my-8"></div>
          
//           <div className="space-y-12">
//             {/* H3: Product Description */}
//             <section>
//               <h3 className="text-sm font-black uppercase mb-4 tracking-wider text-gray-400 border-b pb-2">Product Description</h3>
//               <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line font-medium">
//                 {machine.description}
//               </p>
//             </section>
            
//             {/* H2: Specifications Table */}
//             <section>
//               <h2 className="text-2xl font-black uppercase mb-6 tracking-tight text-gray-900">Specifications</h2>
//               <div className="grid grid-cols-1 gap-3">
//                 {machine.specifications && Object.entries(machine.specifications).map(([key, value], index) => (
//                   <div key={index} className="flex justify-between items-center bg-gray-50 p-4 rounded border-l-4 border-red-700 shadow-sm">
//                     <span className="text-gray-500 text-[12px] uppercase font-bold">{key}</span>
//                     <span className="text-gray-900 font-black text-[14px]">{value}</span>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* H2: Key Features */}
//             <section>
//               <h2 className="text-2xl font-black uppercase mb-6 tracking-tight text-gray-900">Key Features</h2>
//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {machine.features?.map((feature, i) => (
//                   <li key={i} className="text-gray-800 font-bold text-sm flex items-start gap-3 bg-white p-3 border border-gray-100 rounded shadow-sm">
//                     <span className="w-2 h-2 bg-red-700 rounded-full mt-1.5 shrink-0"></span> {feature}
//                   </li>
//                 ))}
//               </ul>
//             </section>

//             {/* H2: Applications */}
//             <section>
//               <h2 className="text-2xl font-black uppercase mb-6 tracking-tight text-gray-900 text-right border-r-8 border-gray-900 pr-4">Applications</h2>
//               <div className="flex flex-wrap justify-end gap-2">
//                 {machine.applications?.map((app, i) => (
//                   <span key={i} className="bg-gray-900 text-white px-4 py-2 text-[11px] font-bold uppercase tracking-wide rounded">
//                     {app}
//                   </span>
//                 ))}
//               </div>
//             </section>

//             {/* H2: FAQ Section */}
//             {machine.faqs && machine.faqs.length > 0 && (
//               <section className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
//                 <h2 className="text-2xl font-black uppercase mb-8 text-gray-900">FAQ</h2>
//                 <div className="space-y-8">
//                   {machine.faqs.map((faq, i) => (
//                     <div key={i} className="border-b border-gray-200 last:border-0 pb-6">
//                       <h3 className="text-[15px] font-black text-red-700 uppercase mb-2">Q{i+1}: {faq.question}</h3>
//                       <p className="text-gray-600 font-medium">{faq.answer}</p>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* CTA / Closing Text */}
//             {machine.ctaText && (
//               <section className="py-8 border-y-2 border-gray-100 italic text-gray-500 text-center font-medium px-4">
//                 "{machine.ctaText}"
//               </section>
//             )}
//           </div>

//           {/* Action Buttons */}
//           <div className="mt-12 flex flex-col sm:flex-row gap-4">
//             <button className="flex-1 px-8 py-5 bg-red-700 text-white font-black rounded-xl shadow-xl hover:bg-gray-800 transition-all uppercase text-xs tracking-widest active:scale-95">
//               Inquire Now
//             </button>
//             <button className="flex-1 px-8 py-5 border-2 border-gray-900 text-gray-900 font-black rounded-xl hover:bg-gray-900 hover:text-white transition-all uppercase text-xs tracking-widest active:scale-95">
//               Download Catalog
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MachineDetails;



import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const MachineDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null); // 'data' madhe machine ani siblings donhi asatil
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchMachineDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/machines/name/${id}`);
        setData(response.data); // Backend response: { machine, siblings }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMachineDetails();
  }, [id]);

  if (loading) return <div className="py-32 text-center font-bold text-gray-400 animate-pulse uppercase tracking-widest">Loading...</div>;

  if (!data || !data.machine) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold text-red-700 uppercase">Machine Not Found</h2>
        <Link to="/" className="mt-6 inline-block bg-gray-900 text-white px-8 py-3 rounded font-bold uppercase text-sm">Back to Home</Link>
      </div>
    );
  }

  const { machine, siblings } = data;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      {/* 1. TOP SECTION: Category Context */}
      <div className="mb-16 bg-gray-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-700 opacity-10 rounded-full -mr-20 -mt-20"></div>
        <nav className="flex mb-4 text-[10px] font-bold text-red-500 uppercase tracking-widest">
          <Link to="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span>{machine.category}</span>
        </nav>
        <h2 className="text-4xl font-black uppercase mb-4">{machine.category}</h2>
        <p className="text-gray-400 max-w-3xl leading-relaxed text-lg italic">
          {machine.categoryDescription || `Explore our high-performance range of ${machine.category} engineered for precision and durability.`}
        </p>
      </div>

      {/* 2. MIDDLE SECTION: Explore Sub-items (Siblings) */}
      {siblings && siblings.length > 0 && (
        <div className="mb-20">
          <h3 className="text-sm font-black uppercase mb-8 tracking-widest text-gray-400 border-l-4 border-red-700 pl-4">Explore More in {machine.category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siblings.map((item, index) => (
              <div key={index} className="group bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden rounded-xl mb-4 bg-gray-50">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 truncate uppercase text-sm">{item.name}</h4>
                <p className="text-gray-500 text-[11px] mb-4 line-clamp-2">{item.shortDescription}</p>
                <Link 
                  to={`/machine/${item.name.toLowerCase().replace(/ /g, '-')}`} 
                  className="block text-center py-2 bg-gray-50 text-gray-900 text-[10px] font-black uppercase rounded-lg group-hover:bg-red-700 group-hover:text-white transition-colors"
                >
                  Explore Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. BOTTOM SECTION: Particular Machine Details */}
      <hr className="mb-20 border-gray-100" />
      
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-24 h-fit">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-b-[12px] border-red-700">
            <img src={machine.image} alt={machine.name} className="w-full h-auto object-cover" />
            <div className="absolute top-6 left-6 bg-red-700 text-white px-6 py-2 text-xs font-black uppercase tracking-tighter">
              Currently Viewing
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-black text-gray-900 uppercase leading-none mb-4">{machine.name}</h1>
          <h2 className="text-xl font-bold text-red-700 mb-8">{machine.subTitle}</h2>
          
          <div className="space-y-12">
            <section>
              <h3 className="text-xs font-black uppercase text-gray-400 mb-4 tracking-widest">Overview</h3>
              <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">{machine.description}</p>
            </section>

            <section>
              <h3 className="text-xs font-black uppercase text-gray-400 mb-6 tracking-widest">Specifications</h3>
              <div className="grid gap-2">
                {machine.specifications && Object.entries(machine.specifications).map(([key, value], i) => (
                  <div key={i} className="flex justify-between bg-gray-50 p-4 rounded-xl border-r-4 border-gray-200">
                    <span className="text-gray-500 text-[11px] uppercase font-bold">{key}</span>
                    <span className="text-gray-900 font-black text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            {machine.faqs && machine.faqs.length > 0 && (
              <section className="bg-red-50 p-8 rounded-3xl border border-red-100">
                <h3 className="text-xl font-black uppercase mb-8 text-gray-900">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {machine.faqs.map((faq, i) => (
                    <div key={i} className="border-b border-red-200 last:border-0 pb-4">
                      <h4 className="text-red-700 font-black uppercase text-sm mb-2">Q: {faq.question}</h4>
                      <p className="text-gray-600 text-sm font-medium">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="mt-12 flex gap-4">
            <button className="flex-1 bg-red-700 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-900 transition-all shadow-lg active:scale-95">Inquiry Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineDetails;