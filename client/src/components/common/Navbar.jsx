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
    "Multi-Spindle Router Machine Display", "Modern I-NAX CNC Lathe Machine", "Logo", 
    "Laser Machine (2)", "I-NAX VMC with tinted windows", "I-NAX Vertical machining center", 
    "I-NAX Radial drilling machine close-up", "I-NAX Milling machine in detail", 
    "I-NAX Laser marking workstation design", "I-NAX Industrial press brake machine", 
    "I-NAX CNC Router with controller", "I-NAX CNC Router precision machinery", 
    "I-NAX CNC Router machine setup", "I-NAX CNC Milling machine showcase",
    "I-KRAFT CNC Router system", "I-KRAFT 5-axis CNC Ruuter & control",
    "I-KRAFT 3D statue maker machine", "Closed body laser"  
].map(name => ({ name, link: `/machine/${formatId(name)}` }));

//   const fabrication = [
//     "Hacksaw Machines", "Bandsaw Machines", "Cutting/Shearing Machines", 
//     "Plate Rolling Machines", "Pipe / Profile Machines", "Press Machines", 
//     "Bus Bar Machines", "Hydraulic Iron Worker Machines", "Laser Machines", 
//     "Bending / Press Brake Machines"
//   ].map(name => ({ name, link: `/machine/${formatId(name)}` }));

//   const resharpening = [
//     "Electric Tapping Machines", "Universal Cutter Grinders", "Drill Bit Re-Sharpener", 
//     "End Mill Re-Sharpener", "Screw Top Re-sharpener", "Complex Re-Sharpener", 
//     "Chamfer", "Lathe Tool Grinder", "Universal Drill Grinder", "Saw Blade Sharpner"
//   ].map(name => ({ name, link: `/machine/${formatId(name)}` }));

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
            {/* <DropdownMenu title="Metal Fabrication" items={fabrication} /> */}
            {/* <DropdownMenu title="Re-Sharpening" items={resharpening} /> */}
            
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