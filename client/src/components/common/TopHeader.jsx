import { Search, Phone, Mail } from 'lucide-react';

const TopHeader = () => {
  return (
    <div className="bg-red-700 text-white text-xs py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Left: Search Bar */}
        <div className="flex items-center bg-white/20 rounded px-2 py-1">
          <input type="text" placeholder="Search Machines..." className="bg-transparent outline-none placeholder:text-white/70 w-40" />
          <Search size={14} />
        </div>
        {/* Right: Contact info */}
        <div className="flex gap-6">
          <div className="flex items-center gap-2"><Phone size={14} /> +91-9825009216</div>
          <div className="flex items-center gap-2"><Mail size={14} /> inquiry@mechchemindia.com</div>
        </div>
      </div>
    </div>
  );
};
export default TopHeader;