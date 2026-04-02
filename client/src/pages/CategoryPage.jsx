import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ChevronRight, Settings } from 'lucide-react';

const CategoryPage = () => {
  const { id } = useParams(); // id = 'milling-machines'
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setLoading(true);
        // Backend API call: Category pramane data aan-nya sathi
        const response = await axios.get(`http://localhost:5000/api/machines/category/${id}`);
        setMachines(response.data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryData();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return <div className="h-screen flex justify-center items-center font-bold text-[#003366]">Loading Machines...</div>;

  // URL Friendly Name convert karnya sathi helper
  const formatId = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <div className="bg-[#f8f9fa] border-b py-16 px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[12px] uppercase font-bold text-gray-400 mb-4">
            <Link to="/" className="hover:text-orange-500">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#003366]">Machines</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-black text-[#003366] uppercase mb-6 leading-tight">
            {machines.length > 0 ? machines[0].category : id.replace(/-/g, ' ')}
          </h1>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl border-l-4 border-orange-500 pl-6 italic">
            {machines.length > 0 ? machines[0].categoryDescription : "Explore our range of high-performance industrial machines."}
          </p>
        </div>
      </div>

      {/* 2. Machines Grid Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {machines.map((machine) => (
            <div key={machine._id} className="group bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 rounded-sm overflow-hidden flex flex-col">
              {/* Image Placeholder or Actual Image */}
              <div className="h-64 bg-gray-100 overflow-hidden relative">
                 <img 
                    src={machine.image || '/images/placeholder.jpg'} 
                    alt={machine.altText} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 <div className="absolute top-4 right-4 bg-orange-500 text-white p-2">
                    <Settings size={20} className="animate-spin-slow" />
                 </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-[#003366] uppercase mb-3 group-hover:text-orange-500 transition-colors">
                  {machine.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {machine.shortDescription}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center">
                   <Link 
                     to={`/machine/${formatId(machine.name)}`} 
                     className="text-[11px] font-black uppercase tracking-widest text-[#003366] hover:text-orange-500 flex items-center gap-2"
                   >
                     View Specifications <ChevronRight size={14} />
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;