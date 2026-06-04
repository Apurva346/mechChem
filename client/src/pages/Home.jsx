import { Link, Links } from 'react-router-dom'
import {
  ShieldCheck,
  Settings,
  Users,
  ThumbsUp,
  Layers,
  CircleDollarSign,
  Headphones,
  Map,
  Gauge,
  Target,
  Activity,
  BadgeIndianRupee,
  Factory,
  Cpu,
  Wrench,
  Car
} from 'lucide-react'
// import {
//   ShieldCheck,
//   Users,
//   Settings,
//   BadgeIndianRupee,
//   Truck,
//   Headset,
//   Factory,
//   Wrench,
//   Car,
//   Cpu,
//   Zap,
//   Target,
//   Box,
//   Scissors,
//   ChevronRight
// } from 'lucide-react'
import React, { useState, useEffect } from 'react' // useState ani useEffect add kara
import axios from 'axios'

const Home = () => {
  const [machines, setMachines] = useState([])

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_BASE)

      .then(res => setMachines(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='font-sans w-full'>
      {/* --- 1. Hero Section --- */}

      <section className='relative overflow-hidden min-h-[580px] lg:min-h-[380px] flex flex-col justify-between w-full'>
        {/* --- Background Image & Gradient Overlay --- */}
        <div className='absolute inset-0 z-0'>
          <img
            src='/images/background/Home Page Update/Images/Industrial Machine Sales & Services.png'
            alt='Industrial Machines'
            className='block w-screen h-full opacity-100'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-[#060b13] via-[#060b13]/90 to-transparent'></div>
        </div>

        {/* --- Diagonal Accent Graphics (Right Side Visuals) --- */}
        <div className='absolute right-0 top-0 h-full w-1/2 hidden lg:flex items-center justify-center z-10 pointer-events-none'>
          <div className='relative w-full h-full opacity-60'>
            {/* Yellow accent divider line */}
            {/* <div className='absolute right-1/3 top-0 bottom-0 w-[4px] bg-[#eeb44b] transform rotate-[25deg]'></div> */}
            {/* Rotating box simulation from image */}
            <div className='absolute right-0 top-4 w-48 h-48 bg-[#eeb44b] transform rotate-45 rounded-xl opacity-20'></div>
          </div>
        </div>

        {/* --- Main Content Layout Grid --- */}
        <div className='relative z-20 w-full max-w-7xl mx-auto px-4 lg:px-2 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-grow'>
          {/* LEFT COLUMN: Main Typography & Icons (Takes 7 columns on Desktop) */}
          <div className='lg:col-span-7 flex flex-col justify-center'>
            {/* Subtitle Line */}
            <div className='flex items-center gap-3 mb-3'>
              <div className='w-8 h-[2px] bg-white opacity-60'></div>
              <span className='text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-slate-300'>
                Trusted Supplier Of
              </span>
              <div className='w-8 h-[2px] bg-white opacity-60'></div>
            </div>

            {/* Main Big Heading */}
            <h1 className='text-4xl sm:text-6xl font-extrabold tracking-tight leading-none mb-4'>
              <span className='text-white block uppercase'>Industrial</span>
              <span className='text-[#eeb44b] block uppercase mt-1'>
                Machines
              </span>
            </h1>

            {/* Location & Experience Line */}
            <p className='text-sm sm:text-lg font-bold text-slate-200 tracking-wide uppercase mb-4'>
              In Nagpur - Serving Maharashtra{' '}
              <span className='text-[#eeb44b]'>Since 2012</span>
            </p>

            {/* Machine Links / Categories Ribbon */}
            <p className='text-xs sm:text-sm text-slate-400 font-medium tracking-wider uppercase border-b border-slate-800/80 pb-6 mb-6 max-w-xl'>
              Lathe <span className='text-slate-600 mx-1.5'>|</span> Milling
              <span className='text-slate-600 mx-1.5'>|</span> Drilling
              <span className='text-slate-600 mx-1.5'>|</span> Power Press
              <span className='text-slate-600 mx-1.5'>|</span> Workshop Machines
            </p>

            {/* 4 Feature Columns row (Directly from Image) */}
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 max-w-xl'>
              <div className='flex flex-col items-start gap-1.5'>
                <ShieldCheck className='text-[#eeb44b]' size={22} />
                <span className='text-[11px] font-bold uppercase tracking-wider text-white leading-tight'>
                  Trusted Since 2012
                </span>
              </div>
              <div className='flex flex-col items-start gap-1.5'>
                <Settings className='text-[#eeb44b]' size={22} />
                <span className='text-[11px] font-bold uppercase tracking-wider text-white leading-tight'>
                  Quality Machines
                </span>
              </div>
              <div className='flex flex-col items-start gap-1.5'>
                <Users className='text-[#eeb44b]' size={22} />
                <span className='text-[11px] font-bold uppercase tracking-wider text-white leading-tight'>
                  Expert Support
                </span>
              </div>
              <div className='flex flex-col items-start gap-1.5'>
                <ThumbsUp className='text-[#eeb44b]' size={22} />
                <span className='text-[11px] font-bold uppercase tracking-wider text-white leading-tight'>
                  Reliable Service
                </span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className='flex flex-wrap gap-4 mt-2'>
              <Link to='/contact'>
                <button className='bg-[#8b1d31] text-white px-8 py-3 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-red-800 shadow-xl transition-all active:scale-98'>
                  Get Quote
                </button>
              </Link>

              <Link to='/allmachine'>
                <button className='bg-[#eeb44b] text-slate-950 px-8 py-3 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-yellow-500 shadow-xl transition-all active:scale-98'>
                  View Products
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Performance / Precision Float Cards (Takes 5 columns on Desktop) */}
        </div>

        {/* --- BOTTOM TRUST BAR (White Strip From Image) --- */}
        <div className='w-full bg-white border-t border-slate-200 py-5 px-6 lg:px-12 z-20'>
          <div className='max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x lg:divide-slate-200/80'>
            {/* Feature 1 */}
            <div className='flex items-center gap-3.5 pl-0 lg:pl-4'>
              <div className='text-slate-800 p-2.5 bg-slate-100 rounded-lg shrink-0'>
                <Layers size={24} />
              </div>
              <div className='flex flex-col'>
                <span className='text-xs sm:text-sm font-extrabold text-slate-950 uppercase tracking-wider leading-tight'>
                  Wide Range
                </span>
                <span className='text-[10px] sm:text-xs font-semibold text-slate-500 uppercase mt-0.5'>
                  Of Machines
                </span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className='flex items-center gap-3.5 pl-0 lg:pl-8'>
              <div className='text-slate-800 p-2.5 bg-slate-100 rounded-lg shrink-0'>
                <CircleDollarSign size={24} />
              </div>
              <div className='flex flex-col'>
                <span className='text-xs sm:text-sm font-extrabold text-slate-950 uppercase tracking-wider leading-tight'>
                  Competitive
                </span>
                <span className='text-[10px] sm:text-xs font-semibold text-slate-500 uppercase mt-0.5'>
                  Prices
                </span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className='flex items-center gap-3.5 pl-0 lg:pl-8'>
              <div className='text-slate-800 p-2.5 bg-slate-100 rounded-lg shrink-0'>
                <Headphones size={24} />
              </div>
              <div className='flex flex-col'>
                <span className='text-xs sm:text-sm font-extrabold text-slate-950 uppercase tracking-wider leading-tight'>
                  After Sales
                </span>
                <span className='text-[10px] sm:text-xs font-semibold text-slate-500 uppercase mt-0.5'>
                  Support
                </span>
              </div>
            </div>

            {/* Feature 4 */}
            <div className='flex items-center gap-3.5 pl-0 lg:pl-8'>
              <div className='text-slate-800 p-2.5 bg-slate-100 rounded-lg shrink-0'>
                <Map size={24} />
              </div>
              <div className='flex flex-col'>
                <span className='text-xs sm:text-sm font-extrabold text-slate-950 uppercase tracking-wider leading-tight'>
                  Serving Across
                </span>
                <span className='text-[10px] sm:text-xs font-semibold text-slate-500 uppercase mt-0.5'>
                  Maharashtra
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* --- 2. Our Industrial Machines Section --- */}
      <section className='py-20 px-6 bg-slate-50'>
        <div className='max-w-7xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-12 uppercase tracking-tight text-slate-800'>
            Our Industrial Machines
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {machines
              .filter(m => m.category === 'Industrial Machines')
              .map(machine => (
                <div
                  key={machine._id}
                  className='bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition group'
                >
                  <div className='overflow-hidden rounded-lg mb-4 h-44 flex items-center justify-center bg-slate-50'>
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className='max-h-full object-contain group-hover:scale-105 transition-transform'
                    />
                  </div>
                  <h4 className='font-bold text-lg mb-2 text-slate-800'>
                    {machine.name}
                  </h4>
                  <p className='text-sm text-slate-500 mb-4 line-clamp-2'>
                    {machine.shortDescription ||
                      'High precision and durable machine for industrial manufacturing tasks.'}
                  </p>

                  {/* ✅ दुरुस्त केलेला कोड: machines ऐवजी machine? वापरलं आणि category चा slug बनवला */}
                  <Link
                    to={`/category/${
                      machine?.name
                        ? machine.name.toLowerCase().trim().replace(/ /g, '-')
                        : ''
                    }${
                      machine?.name?.toLowerCase().endsWith('machine')
                        ? 's'
                        : ''
                    }`}
                  >
                    <button className='w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-900 transition font-semibold'>
                      View Details
                    </button>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* --- 3. i-NAX Promo & Product Cards --- */}

      <div className='mx-[20px] my-6 rounded-sm overflow-hidden border border-slate-800'>
        {/* i-NAX Banner */}
        <section className='relative bg-[#0a0f1a] min-h-[480px] lg:min-h-[520px] flex items-center py-12'>
          {/* Background Image Setup */}
          <div className='absolute inset-0 z-0 flex justify-end'>
            <img
              src='/images/background/Home Page Update/Images/i-NAX CNC Laser Machines.png'
              alt='i-NAX CNC Laser Machines'
              className='h-full object-contain'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/85 to-transparent'></div>
          </div>

          {/* Content Container */}
          <div className='relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-between h-full'>
            {/* Top Content: Boxed for text clarity */}
            <div className='max-w-[95%] lg:max-w-[65%]'>
              {/* --- Badge: NEWLY LAUNCHED --- */}
              <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-md mb-6'>
                <span className='w-2 h-2 rounded-full bg-amber-500 animate-pulse'></span>
                <span className='text-xs font-bold uppercase tracking-wider text-slate-200'>
                  Newly Launched · 2025
                </span>
              </div>

              {/* --- Heading --- */}
              <h2 className='text-white text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight mb-4 drop-shadow-md'>
                Introducing <span className='text-amber-500'>i-NAX</span> –
                Next-Gen CNC & Laser Cutting
              </h2>

              {/* --- Description --- */}
              <p className='text-slate-300 text-sm lg:text-base leading-relaxed mb-6 opacity-95 max-w-xl'>
                Our newest brand, i-NAX, brings advanced CNC machining and laser
                cutting technology to modern Indian manufacturing. Engineered
                for precision, speed, and efficiency.
              </p>

              {/* --- Feature Tags --- */}
              <div className='flex flex-wrap gap-2 mb-8'>
                {[
                  'CNC Machines',
                  'Laser Cutting',
                  'High Precision',
                  'Modern Manufacturing'
                ].map((tag, i) => (
                  <span
                    key={i}
                    className='text-xs font-medium text-slate-300 bg-white/5 border border-slate-700/60 px-3 py-1.5 rounded-full backdrop-blur-sm'
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* --- Main CTA Button --- */}
              <div className='mb-8'>
                <a
                  href='https://inaxlaser.mechchemindia.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 bg-[#8b1d31] hover:bg-red-800 text-white px-8 py-3.5 rounded-md font-bold text-sm lg:text-base tracking-wide transition-all shadow-xl hover:shadow-red-900/30 active:scale-98'
                >
                  Explore i-NAX →
                </a>
              </div>
            </div>

            {/* --- Bottom Links Section: Brought OUTSIDE the 65% width limit to take 100% width --- */}
            <div className='w-full border-t border-slate-800/80 pt-4 mt-4'>
              <div className='flex flex-row flex-wrap lg:flex-nowrap items-center justify-start gap-4 lg:gap-6 overflow-x-auto lg:overflow-visible no-scrollbar'>
                <a
                  href='https://inaxlaser.mechchemindia.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-300 hover:text-amber-500 font-semibold text-xs lg:text-sm tracking-wide transition-colors duration-200 whitespace-nowrap'
                >
                  Fiber Laser Cutting Machine
                </a>
                <span className='text-slate-700 hidden lg:inline'>|</span>

                <a
                  href='https://inaxlaser.mechchemindia.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-300 hover:text-amber-500 font-semibold text-xs lg:text-sm tracking-wide transition-colors duration-200 whitespace-nowrap'
                >
                  CNC Press Brake Machine
                </a>
                <span className='text-slate-700 hidden lg:inline'>|</span>

                <a
                  href='https://inaxlaser.mechchemindia.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-300 hover:text-amber-500 font-semibold text-xs lg:text-sm tracking-wide transition-colors duration-200 whitespace-nowrap'
                >
                  CNC Laser Pipe Cutting Machine
                </a>
                <span className='text-slate-700 hidden lg:inline'>|</span>

                <a
                  href='https://inaxlaser.mechchemindia.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-300 hover:text-amber-500 font-semibold text-xs lg:text-sm tracking-wide transition-colors duration-200 whitespace-nowrap'
                >
                  Laser Welding Machine
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* --- 4. Why Choose Us (Services) --- */}
      <section className='bg-slate-50 py-16 px-6'>
        <div className='max-w-7xl mx-auto mb-20 text-center'>
          <h2 className='text-[#8b1d31] text-3xl lg:text-4xl font-bold mb-12'>
            Why Choose Mech Chem Engineering Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <FeatureCard
              icon={<ShieldCheck className='w-10 h-10 text-[#8b1d31]' />}
              title='Trusted Supplier'
              desc='Reliable machines and dependable service support.'
            />
            <FeatureCard
              icon={<Users className='w-10 h-10 text-[#8b1d31]' />}
              title='Experienced Team'
              desc='Skilled professionals ensuring accurate installation.'
            />
            <FeatureCard
              icon={<Settings className='w-10 h-10 text-[#8b1d31]' />}
              title='Performance Tested'
              desc='Durable machines built for long-term industrial use.'
            />
            <FeatureCard
              icon={<BadgeIndianRupee className='w-10 h-10 text-[#8b1d31]' />}
              title='Competitive Pricing'
              desc='Quality industrial machines at cost-effective prices.'
            />
          </div>
        </div>

        {/* --- 5. Industries We Serve (Banner with Blur) --- */}
        <div className='relative mb-20 overflow-hidden rounded-md py-16 max-w-7xl mx-auto'>
          <div className='absolute inset-0 z-0'>
            <img
              src='/images/background/Home Page Update/Images/Industrial Machinery Sales & Services.png'
              alt='Industries'
              className='w-full h-full object-cover blur-sm scale-110'
            />
            <div className='absolute inset-0 bg-slate-950/75'></div>
          </div>
          <div className='relative z-10 px-8'>
            <h2 className='text-white bg-[#8b1d31] py-3 px-8 w-fit text-2xl font-bold mb-10 rounded-r-full shadow-lg'>
              Industries We Serve
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <IndustryCard
                icon={<Factory />}
                title='Fabrication'
                desc='Metal cutting and structural work machines.'
              />
              <IndustryCard
                icon={<Cpu />}
                title='Manufacturing'
                desc='Solutions for production units and plants.'
              />
              <IndustryCard
                icon={<Wrench />}
                title='Workshops'
                desc='Precision machining for daily operations.'
              />
              <IndustryCard
                icon={<Car />}
                title='Automotive'
                desc='High-performance machine solutions.'
              />
            </div>
          </div>
        </div>

        {/* --- 6. Services Grid --- */}
        <div className='max-w-7xl mx-auto text-center'>
          <h2 className='text-[#1e293b] text-3xl font-bold mb-12 border-b-2 border-[#8b1d31] w-fit mx-auto pb-2'>
            Our Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 bg-white shadow-sm'>
            <ServiceItem
              title='Machine Installation'
              desc='Professional engineering installation.'
            />
            <ServiceItem
              title='Machine Repair'
              desc='Quick response repair services.'
            />
            <ServiceItem
              title='Spare Parts'
              desc='Genuine parts for all machines.'
            />
            <ServiceItem
              title='Fast Delivery'
              desc='Timely delivery for all services.'
            />
            <ServiceItem
              title='AMC Support'
              desc='Annual maintenance contract support.'
            />
            <div className='p-8 bg-slate-50 flex items-center justify-center italic text-slate-400'>
              Mech Chem Support
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// --- Helper Components ---
const FeatureCard = ({ icon, title, desc }) => (
  <div className='bg-white p-8 rounded-sm shadow-sm border-b-4 border-[#8b1d31] hover:shadow-md transition flex flex-col items-center text-center'>
    <div className='mb-4'>{icon}</div>
    <h3 className='font-bold text-slate-800 mb-2'>{title}</h3>
    <p className='text-sm text-slate-500'>{desc}</p>
  </div>
)

const IndustryCard = ({ icon, title, desc }) => (
  <div className='bg-white p-6 rounded-sm border border-slate-200 hover:bg-slate-900 hover:text-white transition group'>
    <div className='text-[#8b1d31] group-hover:text-white mb-4'>{icon}</div>
    <h3 className='font-bold mb-2'>{title}</h3>
    <p className='text-sm opacity-80'>{desc}</p>
  </div>
)

const ServiceItem = ({ title, desc }) => (
  <div className='p-8 border border-slate-100 hover:bg-slate-50 transition text-left'>
    <h3 className='font-bold text-[#1e293b] mb-1'>{title}</h3>
    <p className='text-sm text-slate-500'>{desc}</p>
  </div>
)

export default Home
