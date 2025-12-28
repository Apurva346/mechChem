// import TopHeader from './TopHeader';
// import DropdownMenu from './DropdownMenu';
// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [mobileMenu, setMobileMenu] = useState(false);

//   // तुमचा सर्व डेटा
//   const machining = ["Drilling Machines", "Grinding Machines", "Shaping Machines", "Slotting Machines", "Threading Machines", "Milling Machines", "Lathe Machines"];
//   const fabrication = ["Hacksaw Machines", "Bandsaw Machines", "Cutting/Shearing Machines", "Plate Rolling Machines", "Pipe / Profile Machines", "Press Machines", "Bus Bar Machines", "Hydraulic Iron Worker Machines", "Laser Machines", "Bending / Press Brake Machines"];
//   const resharpening = ["Electric Tapping Machines", "Universal Cutter Grinders", "Drill Bit Re-Sharpener", "End Mill Re-Sharpener", "Screw Top Re-sharpener", "Complex Re-Sharpener", "Chamfer", "Lathe Tool Grinder", "Universal Drill Grinder", "Saw Blade Sharpner"];

//   return (
//     <header className="w-full">
//       <TopHeader />
//       <nav className="bg-white border-b sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
//           {/* LOGO */}
//           <div className="shrink-0">
//             <h1 className="text-2xl font-black text-gray-800">MECH<span className="text-red-700">CHEM</span></h1>
//             <p className="text-[9px] tracking-widest text-gray-500 uppercase">Engineering Solutions</p>
//           </div>

//           {/* CENTER MENU (Desktop) */}
//           <div className="hidden lg:flex gap-6 items-center">
//             <a href="/" className="hover:text-red-700 font-medium uppercase text-[13px]">Home</a>
//             <DropdownMenu title="Machining" items={machining} />
//             <DropdownMenu title="Metal Fabrication" items={fabrication} />
//             <DropdownMenu title="Re-Sharpening" items={resharpening} />
//             <Link to='/about' className="hover:text-red-700 font-medium uppercase text-[13px]">About Us</Link>
//             <a href="/shop" className="hover:text-red-700 font-medium uppercase text-[13px]">Shop</a>
//           </div>

//           {/* RIGHT: CONTACT BUTTON */}
          

//           <Link to="/contact">
//             <button className="bg-gray-800 text-white px-6 py-2.5 rounded font-bold hover:bg-red-700 transition-colors uppercase text-sm">
//                 Contact Us
//             </button>
//           </Link>

//           {/* Mobile Menu Icon */}
//           <button className="lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
//             {mobileMenu ? <X /> : <Menu />}
//           </button>
//         </div>

//         {/* Mobile Sidebar (Simple) */}
//         {mobileMenu && (
//           <div className="lg:hidden bg-white border-t p-4 h-screen overflow-y-auto">
//              {/* इथे मोबाईलसाठी साध्या लिंक्स द्या */}
//              <p className="p-2 font-bold border-b">Home</p>
//              <p className="p-2 font-bold border-b">Products</p>
//              <p className="p-2 font-bold border-b">Contact Us</p>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };
// export default Navbar;


import TopHeader from './TopHeader';
import DropdownMenu from './DropdownMenu';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  // मशीनच्या नावाचे ID मध्ये रूपांतर करण्यासाठी फंक्शन (उदा: "Drilling Machines" -> "drilling-machines")
  const formatId = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  // तुमचा डेटा (आता आपण याला Objects मध्ये रूपांतरित करू जेणेकरून 'Link' सोपी होईल)
  const machining = [
    "Drilling Machines", "Grinding Machines", "Shaping Machines", 
    "Slotting Machines", "Threading Machines", "Milling Machines", "Lathe Machines"
  ].map(name => ({ name, link: `/machine/${formatId(name)}` }));

  const fabrication = [
    "Hacksaw Machines", "Bandsaw Machines", "Cutting/Shearing Machines", 
    "Plate Rolling Machines", "Pipe / Profile Machines", "Press Machines", 
    "Bus Bar Machines", "Hydraulic Iron Worker Machines", "Laser Machines", 
    "Bending / Press Brake Machines"
  ].map(name => ({ name, link: `/machine/${formatId(name)}` }));

  const resharpening = [
    "Electric Tapping Machines", "Universal Cutter Grinders", "Drill Bit Re-Sharpener", 
    "End Mill Re-Sharpener", "Screw Top Re-sharpener", "Complex Re-Sharpener", 
    "Chamfer", "Lathe Tool Grinder", "Universal Drill Grinder", "Saw Blade Sharpner"
  ].map(name => ({ name, link: `/machine/${formatId(name)}` }));

  return (
    <header className="w-full relative z-50">
      <TopHeader />
      <nav className="bg-white border-b sticky top-0 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
          
          {/* LOGO */}
          <Link to="/" className="shrink-0 group">
            <h1 className="text-2xl font-black text-gray-800">MECH<span className="text-red-700">CHEM</span></h1>
            <p className="text-[9px] tracking-widest text-gray-500 uppercase group-hover:text-red-700 transition-colors">Engineering Solutions</p>
          </Link>

          {/* CENTER MENU (Desktop) */}
          <div className="hidden lg:flex gap-6 items-center">
            <Link to="/" className="hover:text-red-700 font-bold uppercase text-[12px] tracking-wider transition-colors">Home</Link>
            
            {/* DropdownMenu ला आता आपण objects पाठवतोय */}
            <DropdownMenu title="Machining" items={machining} />
            <DropdownMenu title="Metal Fabrication" items={fabrication} />
            <DropdownMenu title="Re-Sharpening" items={resharpening} />
            
            <Link to='/about' className="hover:text-red-700 font-bold uppercase text-[12px] tracking-wider transition-colors">About Us</Link>
          </div>

          {/* RIGHT: CONTACT BUTTON & MOBILE TOGGLE */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden sm:block">
              <button className="bg-gray-800 text-white px-6 py-2.5 rounded font-bold hover:bg-red-700 transition-all uppercase text-xs tracking-widest shadow-md">
                Contact Us
              </button>
            </Link>

            <button className="lg:hidden p-2 text-gray-800" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {mobileMenu && (
          <div className="lg:hidden bg-white border-t absolute w-full left-0 shadow-xl max-h-[80vh] overflow-y-auto">
             <div className="flex flex-col p-4 space-y-4">
                <Link to="/" onClick={() => setMobileMenu(false)} className="font-bold border-b pb-2 uppercase text-sm">Home</Link>
                <Link to="/about" onClick={() => setMobileMenu(false)} className="font-bold border-b pb-2 uppercase text-sm">About Us</Link>
                <Link to="/contact" onClick={() => setMobileMenu(false)} className="font-bold border-b pb-2 uppercase text-sm text-red-700">Contact Us</Link>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold pt-4">Products Categories</p>
                <div className="pl-2 space-y-2 text-sm text-gray-600 font-medium italic">
                  <p>Machining</p>
                  <p>Fabrication</p>
                  <p>Re-Sharpening</p>
                </div>
             </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;