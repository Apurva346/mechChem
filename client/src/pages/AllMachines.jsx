import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllMachines = () => {
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getGroupedCatalog = async () => {
      try {
        setLoading(true);
        // Navin backend endpoint run kela
        const response = await axios.get('http://localhost:5000/api/machines/catalog-grouped');
        setCatalog(response.data);
      } catch (error) {
        console.error("Error fetching catalog grid:", error);
      } finally {
        setLoading(false);
      }
    };
    getGroupedCatalog();
  }, []);

  // URL Friendly slug logic (Exact same format as MachineDetails)
  const formatSlug = (name) => {
    return name ? name.toLowerCase().trim().replace(/ /g, '-') : '';
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        {/* Exact same red spinner matching MachineDetails */}
        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">Loading Catalog Grid</p>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-red-100 selection:text-red-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Main Header Block (Matching MachineDetails branding styles) */}
        <div className="text-center max-w-3xl mx-auto mb-16 border-b border-slate-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Our Industrial <span className="text-red-600">Machine Catalog</span>
          </h1>
          <p className="mt-3 text-slate-400 text-xs font-bold uppercase tracking-widest">
            High-Performance Precision Machinery solutions
          </p>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Dynamic Catalog Section Loop */}
        {catalog.map((cat, idx) => {
          // Empty categories skip handling
          if (!cat.categoryName) return null;

          return (
            <div key={idx} className="mb-16 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              
              {/* Category Header Row (Red left vertical indicator exact match) */}
              <div className="border-l-4 border-red-600 pl-6 mb-8">
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                  {cat.categoryName}
                </h2>
                <p className="text-slate-400 text-[10px] uppercase font-bold mt-0.5 tracking-wider">
                  Total Models: {cat.machinesList?.length || 0} Available
                </p>
              </div>

              {/* CHOTYA CARDS CHA GRID LAYOUT (Exact layout framework match with MachineDetails Related Products) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {cat.machinesList?.map((item, index) => (
                  <Link 
                    key={index} 
                    to={`/machine/${formatSlug(item.name)}`} 
                    className="group block"
                  >
                    {/* Exact Aspect-Video Image Frame Architecture */}
                    <div className="aspect-video overflow-hidden rounded-2xl bg-slate-100 border border-slate-100 mb-4 shadow-sm group-hover:shadow-md transition">
                      <img 
                        src={item.image || '/images/placeholder.png'} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        onError={(e) => { e.target.src = '/images/placeholder.png' }} // Safe image layout failure handling
                      />
                    </div>

                    {/* Meta Typography Area */}
                    <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest truncate">
                      {item.name}
                    </h4>
                    {item.subTitle && (
                      <span className="text-slate-400 text-[9px] uppercase font-bold block truncate mt-0.5">
                        {item.subTitle}
                      </span>
                    )}
                    <span className="text-red-600 font-black text-[9px] uppercase mt-1 block tracking-wider group-hover:text-red-700 transition-colors">
                      View Details →
                    </span>
                  </Link>
                ))}
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default AllMachines;