import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, CheckCircle, Info, MessageSquare, Target, Zap, HelpCircle, ChevronRight } from 'lucide-react';

const MachineDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchMachineDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/machines/name/${id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMachineDetails();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">Loading Precision Data</p>
      </div>
    </div>
  );

  if (!data || !data.machine) {
    return (
      <div className="py-32 text-center bg-slate-50 min-h-screen">
        <div className="max-w-md mx-auto bg-white p-10 rounded-2xl shadow-lg border border-slate-200 text-center">
          <h2 className="text-4xl font-black text-slate-900 uppercase mb-4">404</h2>
          <p className="text-slate-500 mb-8 uppercase text-sm font-bold tracking-widest">Machine Not Found</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg font-bold uppercase text-xs hover:bg-red-700 transition">
            <ArrowLeft size={16} /> Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  const { machine, siblings } = data;

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-red-100 selection:text-red-900">
      
      {/* 1. HEADER SECTION */}
      <div className="bg-slate-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-red-500 transition">Home</Link>
            <span className="text-slate-700">/</span>
            <span className="text-slate-300">{machine.category}</span>
          </nav>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-l-4 border-red-600 pl-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-none">{machine.name}</h1>
              <p className="text-red-500 font-bold mt-2 text-lg uppercase tracking-tight">{machine.subTitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* 2. MAIN IMAGE & OVERVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7">
            <div className="relative group rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl">
              <img src={machine.image} alt={machine.name} className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700" />
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                 <Info size={18} className="text-red-600" />
                 <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest">Overview</h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-xl font-medium border-l-2 border-slate-100 pl-6 italic">
                {machine.description}
              </p>
              <div className="pt-6">
                <button className="w-full bg-red-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-red-700 transition shadow-xl shadow-red-100 flex items-center justify-center gap-3 active:scale-95 mb-4">
                  <MessageSquare size={18} /> Request Price Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. KEY FEATURES SECTION */}
        {machine.features && machine.features.length > 0 && (
          <div className="mb-24 py-16 px-8 bg-slate-50 rounded-[3rem] border border-slate-100">
            <h2 className="text-2xl font-black uppercase text-slate-900 mb-12 flex items-center gap-3">
              <Zap className="text-amber-500 fill-amber-500" size={24} /> Key Performance Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {machine.features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white text-red-600 rounded-full shadow-sm flex items-center justify-center border border-slate-100 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1 uppercase text-xs tracking-wide">
                      {typeof feature === 'string' ? 'Industrial Quality' : feature.title}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {typeof feature === 'string' ? feature : feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. TECHNICAL SPECIFICATIONS TABLE */}
        <div className="mb-24">
           <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl font-black uppercase text-slate-900">Technical Data</h2>
              <div className="h-px flex-1 bg-slate-100"></div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1">
              {machine.specifications && Object.entries(machine.specifications).map(([key, value], i) => (
                <div key={i} className="flex justify-between items-center py-5 border-b border-slate-50 group hover:bg-slate-50 px-4 transition rounded-lg">
                  <span className="text-slate-400 text-[10px] uppercase font-black tracking-widest">{key}</span>
                  <span className="text-slate-900 font-black text-sm">{value}</span>
                </div>
              ))}
           </div>
        </div>

        {/* 5. APPLICATIONS SECTION */}
        {machine.applications && machine.applications.length > 0 && (
          <div className="mb-24 bg-slate-900 text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 opacity-5"><Target size={300} /></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-black uppercase mb-10 border-b border-white/10 pb-4 inline-block">Best Suited For</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {machine.applications.map((app, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center gap-4 group hover:bg-red-600 transition duration-500">
                    <ChevronRight size={16} className="text-red-500 group-hover:text-white" />
                    <span className="font-bold uppercase text-[10px] tracking-widest">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 6. FAQ SECTION (BACK AGAIN!) */}
        {machine.faqs && machine.faqs.length > 0 && (
          <div className="mb-24 max-w-4xl mx-auto">
            <div className="text-center mb-12">
               <HelpCircle className="mx-auto text-red-600 mb-4" size={32} />
               <h2 className="text-3xl font-black uppercase text-slate-900">Service & Support FAQ</h2>
               <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">Everything you need to know</p>
            </div>
            <div className="grid gap-4">
              {machine.faqs.map((faq, i) => (
                <div key={i} className="group border border-slate-100 bg-slate-50/50 rounded-2xl p-6 hover:bg-white hover:border-red-100 hover:shadow-xl hover:shadow-red-500/5 transition duration-300">
                  <h4 className="text-slate-900 font-black uppercase text-sm mb-3 flex items-start gap-4">
                     <span className="w-6 h-6 bg-red-100 text-red-600 rounded flex items-center justify-center text-[10px] flex-shrink-0">Q</span> 
                     {faq.question}
                  </h4>
                  <p className="text-slate-500 text-sm font-medium pl-10 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. RELATED PRODUCTS */}
        {siblings && siblings.length > 0 && (
          <div className="pt-20 border-t border-slate-100">
            <h3 className="text-xl font-black uppercase text-slate-900 mb-10 tracking-tighter">Other machines in this category</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {siblings.map((item, index) => (
                 <Link key={index} to={`/machine/${item.name.toLowerCase().replace(/ /g, '-')}`} className="group block">
                   <div className="aspect-video overflow-hidden rounded-2xl bg-slate-100 border border-slate-100 mb-4 shadow-sm group-hover:shadow-md transition">
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                   </div>
                   <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest truncate">{item.name}</h4>
                   <span className="text-red-600 font-black text-[9px] uppercase mt-1 block">View Details →</span>
                 </Link>
               ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MachineDetails;



// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import { ArrowRight, Check, Minus, Plus, MessageSquare, Shield, Settings, Zap, HelpCircle } from 'lucide-react';

// const MachineDetails = () => {
//   const { id } = useParams();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const fetchMachineDetails = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5000/api/machines/name/${id}`);
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMachineDetails();
//   }, [id]);

//   if (loading) return <div className="h-screen flex items-center justify-center bg-white italic text-slate-400 animate-pulse">Initializing Precision View...</div>;

//   if (!data || !data.machine) return <div className="py-20 text-center font-bold">Machine Not Found.</div>;

//   const { machine, siblings } = data;

//   return (
//     <div className="bg-white text-slate-900 font-sans antialiased">
      
//       {/* --- 1. MINIMAL NAVIGATION --- */}
//       <nav className="px-6 py-4 border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
//             <Link to="/" className="hover:text-red-600">Catalog</Link>
//             <ArrowRight size={10} />
//             <span className="text-slate-900">{machine.name}</span>
//           </div>
//           <button className="bg-red-600 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-tighter hover:bg-slate-900 transition">
//             Inquire Now
//           </button>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto px-6 py-12">
        
//         {/* --- 2. HERO SECTION: TWO COLUMN STICKY --- */}
//         <div className="flex flex-col lg:flex-row gap-16 items-start mb-32">
          
//           {/* Left: Image (Sticky) */}
//           <div className="w-full lg:w-3/5 lg:sticky lg:top-24">
//             <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 group">
//               <img 
//                 src={machine.image} 
//                 alt={machine.name} 
//                 className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-1000"
//               />
//             </div>
//           </div>

//           {/* Right: Essential Info */}
//           <div className="w-full lg:w-2/5 space-y-10">
//             <div>
//               <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">{machine.category}</span>
//               <h1 className="text-5xl font-black text-slate-900 uppercase mt-2 mb-4 leading-[0.9]">{machine.name}</h1>
//               <p className="text-xl text-slate-500 font-medium tracking-tight">{machine.subTitle}</p>
//             </div>

//             <div className="py-6 border-y border-slate-100">
//               <h3 className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest">Description</h3>
//               <p className="text-slate-600 leading-relaxed font-light text-lg">
//                 {machine.description}
//               </p>
//             </div>

//             {/* CTA Buttons */}
//             <div className="grid grid-cols-1 gap-4">
//                <button className="bg-slate-900 text-white py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-red-600 transition-all flex items-center justify-center gap-3">
//                  <MessageSquare size={16} /> Get Commercial Quote
//                </button>
//                <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nagpur's Certified Machinery Partner</p>
//             </div>
//           </div>
//         </div>

//         {/* --- 3. KEY FEATURES (CLEAN GRID) --- */}
//         {machine.features && (
//           <section className="mb-32">
//             <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-300 mb-12 text-center">Core Engineering Features</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100 rounded-3xl overflow-hidden">
//               {machine.features.map((feature, i) => (
//                 <div key={i} className="bg-white p-10 hover:bg-slate-50 transition">
//                   <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
//                     <Zap size={20} className="fill-red-600" />
//                   </div>
//                   <h4 className="font-black text-sm uppercase mb-3 text-slate-900">
//                     {typeof feature === 'string' ? "Performance Optimization" : feature.title}
//                   </h4>
//                   <p className="text-slate-500 text-sm leading-relaxed font-light">
//                     {typeof feature === 'string' ? feature : feature.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* --- 4. TECHNICAL SPECIFICATIONS (MODERN LIST) --- */}
//         <section className="mb-32 grid grid-cols-1 lg:grid-cols-3 gap-16">
//           <div className="lg:col-span-1">
//             <h2 className="text-3xl font-black uppercase leading-tight text-slate-900 mb-4">Technical <br /><span className="text-red-600">Specifications</span></h2>
//             <p className="text-slate-400 text-sm font-medium">Precision engineering data for heavy-duty industrial requirements.</p>
//           </div>
//           <div className="lg:col-span-2 space-y-2">
//             {machine.specifications && Object.entries(machine.specifications).map(([key, value], i) => (
//               <div key={i} className="flex justify-between items-center py-5 border-b border-slate-50 group px-2">
//                 <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest group-hover:text-red-600 transition">{key}</span>
//                 <span className="text-slate-900 font-bold text-sm tracking-tight">{value}</span>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* --- 5. APPLICATIONS SECTION --- */}
//         {machine.applications && (
//           <section className="mb-32 bg-slate-50 p-16 rounded-[3rem]">
//             <h2 className="text-center text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-16">Industry Applications</h2>
//             <div className="flex flex-wrap justify-center gap-4">
//               {machine.applications.map((app, i) => (
//                 <div key={i} className="bg-white px-8 py-5 rounded-2xl border border-slate-200 font-black text-[10px] uppercase tracking-widest text-slate-700 shadow-sm hover:border-red-600 transition">
//                   {app}
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* --- 6. FAQ (ACCORDION STYLE) --- */}
//         {machine.faqs && (
//           <section className="mb-32 max-w-3xl mx-auto">
//             <h2 className="text-3xl font-black uppercase text-center mb-16">Service & Support</h2>
//             <div className="space-y-4">
//               {machine.faqs.map((faq, i) => (
//                 <div key={i} className="border border-slate-100 rounded-2xl p-8 hover:bg-slate-50 transition">
//                   <h4 className="text-slate-900 font-black uppercase text-xs mb-4 flex items-center gap-3">
//                      <span className="text-red-600 italic">Q.</span> {faq.question}
//                   </h4>
//                   <p className="text-slate-500 text-sm leading-relaxed font-light pl-6 border-l border-red-100">{faq.answer}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* --- 7. RELATED PRODUCTS --- */}
//         {siblings && (
//           <section className="border-t border-slate-100 pt-20">
//             <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-10">More from the series</h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
//                {siblings.map((item, index) => (
//                  <Link key={index} to={`/machine/${item.name.toLowerCase().replace(/ /g, '-')}`} className="group block space-y-4">
//                    <div className="aspect-[4/3] bg-slate-50 rounded-2xl overflow-hidden border border-slate-50 group-hover:border-red-100 transition">
//                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
//                    </div>
//                    <div>
//                      <h4 className="font-black text-[10px] text-slate-900 uppercase tracking-widest group-hover:text-red-600 transition">{item.name}</h4>
//                      <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">Explore Tech Specs →</p>
//                    </div>
//                  </Link>
//                ))}
//             </div>
//           </section>
//         )}

//       </main>
//     </div>
//   );
// };

// export default MachineDetails;