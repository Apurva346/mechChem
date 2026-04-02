import TopHeader from './TopHeader'
import DropdownMenu from './DropdownMenu'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const formatId = name =>
    name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')

  const fabrication = [
    {
      category: 'Lathe Machines',
      subItems: [
        'Medium Duty Lathe Machine',
        'Heavy Duty Lathe Machine',
        'Geared Lathe Machine',
        'All Geared Precision Lathe Machine',
        'Light Duty Lathe Machine',
        'All Geared Lathe Machine',
        'Mini Lathe Machine',
        'Roll Turning Lathe Machine'
      ]
    },
    {
      category: 'Milling Machines',
      subItems: [
        'Universal Milling Machine',
        'Vertical Milling Machine',
        'Heavy Duty Milling Machine',
        'Turret Milling Machine'
      ]
    },
    {
      category: 'Drilling Machines',
      subItems: [
        'Vertical Milling Cum Drilling Machine',
        'Heavy Drilling Machine',
        'Radial Drilling Machine',
        'Heavy Duty Radial Drilling Machine',
        'Universal Portable Radial Drilling Machine',
        'Geared Radial Drilling Machine'
      ]
    },
    {
      category: 'Sheet Metal Machines',
      // Ithe groups add kele aahet
      isGrouped: true,
      groups: [
        {
          groupName: 'Shearing Machines',
          items: [
            'Hydraulic Shearing Machine',
            'Hydraulic Sheet Shearing Machine',
            'Metal Forming Shearing Machine'
          ]
        },
        {
          groupName: 'Press Brake Machines',
          items: ['Hydraulic Press Brake Machine']
        },
        {
          groupName: 'Power Press Machines',
          items: [
            'H Type Power Press Machine',
            'C Type Power Press Machine',
            'C Type Hydraulic Power Press Machine'
          ]
        }
      ]
    },
    {
      category: 'Workholding Tools',
      subItems: [
        'Zither True Chuck',
        'Four Jaw Independent Chuck',
        'Three & Four Jaw Chuck'
      ]
    },
    {
      category: 'Grinding Machines',
      subItems: [
        'Surface Grinder Machine',
        'Manual Surface Grinder',
        'Hydraulic Surface Grinder Machine'
      ]
    },
    {
      category: 'Shaping & Slotting Machines',
      subItems: [
        'Gear Shaping Machine',
        'Partition Slotting Machine',
        'Heavy Duty Slotting Machine',
        'Light Duty Slotting Machine'
      ]
    },
    {
      category: 'Cutting Machines',
      subItems: ['Band Saw Machine']
    },
    {
      category: 'Threading Machines',
      subItems: ['Thread Rolling Machine', 'Bolt Thread Rolling Machine']
    },
    {
      category: 'Finishing Machines',
      subItems: ['Powder Coating Machine']
    },
    {
      category: 'Heavy Machines',
      subItems: ['Vertical Boring Machine']
    }
  ]

  return (
    <header className='w-full relative z-50'>
      <TopHeader />
      <nav className='bg-white border-b sticky top-0 shadow-md'>
        <div className='w-full px-8 md:px-3 flex justify-between items-center h-24'>
          <Link to='/' className='shrink-0 flex items-center group py-2'>
            <img
              src='/images/Mech Chem Engineering Services Logo (2).png'
              alt='Mech Chem Engineering Services'
              /* Desktop वर h-20 आणि Mobile वर h-14 ठेवल्याने तो सुटसुटीत दिसेल */
              className='h-14 md:h-14 lg:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105'
            />
          </Link>

          {/* CENTER MENU (Desktop) */}
          <div className='hidden lg:flex gap-8 items-center'>
            <Link
              to='/'
              className='text-[#003366] hover:text-orange-500 font-black uppercase text-[13px] tracking-widest transition-colors'
            >
              Home
            </Link>

            <DropdownMenu title='Machines' items={fabrication} />

            <a
              href='https://inax.mechchemindia.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#003366] hover:text-orange-500 font-black uppercase text-[13px] tracking-widest transition-colors inline-block'
            >
              i-NAX
            </a>

            <Link
              to='/about'
              className='text-[#003366] hover:text-orange-500 font-black uppercase text-[13px] tracking-widest transition-colors'
            >
              About Us
            </Link>
          </div>

          {/* RIGHT: CONTACT BUTTON & MOBILE TOGGLE */}
          <div className='flex items-center gap-4'>
            <Link to='/contact' className='hidden sm:block'>
              <button className='bg-orange-500 text-white px-8 py-3 rounded-sm font-black hover:bg-[#003366] transition-all uppercase text-[11px] tracking-[0.2em] shadow-lg'>
                Contact Us
              </button>
            </Link>

            <button
              className='lg:hidden p-2 text-[#003366]'
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {mobileMenu && (
          <div className='lg:hidden bg-white border-t absolute w-full left-0 shadow-2xl max-h-[85vh] overflow-y-auto z-[100]'>
            <div className='flex flex-col p-6 space-y-5'>
              <Link
                to='/'
                onClick={() => setMobileMenu(false)}
                className='font-black border-b pb-2 uppercase text-sm text-[#003366]'
              >
                Home
              </Link>

              <div>
                <p className='text-[10px] text-orange-500 uppercase tracking-widest font-black mb-4 underline'>
                  Machines
                </p>
                <div className='pl-4 flex flex-col space-y-4 border-l-2 border-gray-100'>
                  {fabrication.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      onClick={() => setMobileMenu(false)}
                      className='text-sm text-gray-600 font-bold hover:text-orange-500 transition-colors uppercase'
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to='/i-nax'
                onClick={() => setMobileMenu(false)}
                className='font-black border-b border-t pt-4 pb-2 uppercase text-sm text-[#003366]'
              >
                i-NAX
              </Link>
              <Link
                to='/about'
                onClick={() => setMobileMenu(false)}
                className='font-black border-b pb-2 uppercase text-sm text-[#003366]'
              >
                About Us
              </Link>
              <Link
                to='/contact'
                onClick={() => setMobileMenu(false)}
                className='font-black pb-2 uppercase text-sm text-orange-500 italic'
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
