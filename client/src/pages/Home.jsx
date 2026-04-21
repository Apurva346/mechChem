import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Users,
  Settings,
  BadgeIndianRupee,
  Truck,
  Headset,
  Factory,
  Wrench,
  Car,
  Cpu,
  Zap,
  Target,
  Box,
  Scissors,
  ChevronRight
} from 'lucide-react'
import React, { useState, useEffect } from 'react' // useState ani useEffect add kara
import axios from 'axios'

const Home = () => {
  const [machines, setMachines] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/machines')
      .then(res => setMachines(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='font-sans'>
      {/* --- 1. Hero Section --- */}
      <section className='relative overflow-hidden'>
        <div className='relative z-0'>
          <img
            src='/images/background/Home Page Update/Images/Industrial Machine Sales & Services.png'
            alt='Industrial Machines'
            className='block w-full'
          />
          <div className='absolute inset-0 bg-black/30'></div>
        </div>

        <div className='absolute top-0 left-0 w-full mt-10 z-10 flex flex-col justify-center px-10 lg:px-10'>
          <div className='max-w-2xl'>
            <h1 className='text-white text-3xl lg:text-5xl font-bold leading-tight drop-shadow-lg'>
              Industrial Machinery <br />
              Sales & Service <br />
              in Nagpur
            </h1>

            <div className='mt-4 pt-4'>
              <p className='text-white text-xl lg:text-2xl font-medium'>
                Lathe | Milling | Drilling | Power <br />
                Press | Workshop Machines
              </p>
            </div>

            <div className='mt-10 flex gap-4'>
              <button className='bg-[#8b1d31] text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-red-800 shadow-xl transition'>
                Get Quote
              </button>
              <button className='bg-[#eeb44b] text-slate-900 px-8 py-3 rounded-md font-bold text-lg hover:bg-yellow-500 shadow-xl transition'>
                View Products
              </button>
            </div>
          </div>
        </div>

        {/* --- Trust Bar --- */}
        <div className='relative z-20 max-w-5xl mx-auto px-6'>
          <div className='bg-white py-6 border border-slate-200 shadow-2xl rounded-sm -mt-12'>
            <div className='flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0'>
              <div className='flex items-center gap-4 px-6 md:border-r border-slate-200'>
                <span className='text-4xl'>⭐</span>
                <div className='flex flex-col'>
                  <span className='text-2xl font-black text-slate-900 leading-none'>
                    20+ Years
                  </span>
                  <span className='text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1'>
                    Experience
                  </span>
                </div>
              </div>

              <div className='flex items-center gap-4 px-6 md:border-r border-slate-200'>
                <span className='text-4xl text-slate-400'>🛡️</span>
                <div className='flex flex-col'>
                  <span className='text-2xl font-black text-slate-900 leading-none tracking-tight'>
                    Trusted Machine
                  </span>
                  <span className='text-[10px] font-black text-red-600 uppercase tracking-widest mt-1'>
                    Supplier
                  </span>
                </div>
              </div>

              <div className='flex items-center gap-4 px-6'>
                <span className='text-4xl'>🚚</span>
                <div className='flex flex-col'>
                  <span className='text-2xl font-black text-slate-900 leading-none'>
                    Fast Delivery
                  </span>
                  <span className='text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1'>
                    Across India
                  </span>
                </div>
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
                  <Link to={`/machine/${machine._id}`}>
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
        <section className='relative bg-[#0a0f1a] min-h-[400px] lg:min-h-[500px] flex items-center'>
          <div className='absolute inset-0 z-0 flex justify-end'>
            <img
              src='/images/background/Home Page Update/Images/i-NAX CNC Laser Machines.png'
              alt='i-NAX CNC Laser Machines'
              className='h-full object-contain'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent'></div>
          </div>
          <div className='relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-8'>
            <div className='max-w-[90%] lg:max-w-[50%]'>
              <h2 className='text-white text-3xl lg:text-4xl leading-tight tracking-tight mb-4 drop-shadow-lg'>
                Introducing i-NAX – <br /> CNC & Laser Machine Solutions
              </h2>
              <p className='text-slate-300 text-sm lg:text-lg leading-relaxed mb-8 opacity-95'>
                i-NAX is our newly launched brand specializing in advanced CNC
                and Laser Cutting Machines. Engineered for high precision and
                efficiency in modern manufacturing.
              </p>
              <button className='bg-[#8b1d31] hover:bg-red-800 text-white px-10 py-3 rounded-sm font-bold text-sm lg:text-base uppercase tracking-wider transition-all shadow-2xl'>
                Explore i-NAX Machines
              </button>
            </div>
          </div>
        </section>

        {/* i-NAX Machines Cards */}
        <section className='bg-[#0a0f1a] pb-20 px-6 border-t border-slate-800'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12'>
              {machines
                .filter(m => m.category === 'inax')
                .map(item => (
                  <div
                    key={item._id}
                    className='bg-[#111827] p-4 rounded-xl border border-slate-700 hover:border-[#8b1d31] transition group'
                  >
                    <div className='overflow-hidden rounded-lg mb-4 h-48 bg-slate-800 flex items-center justify-center'>
                      <img
                        src={item.image}
                        alt={item.name}
                        className='max-h-full object-contain group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100'
                      />
                    </div>
                    <div className='flex items-start gap-2 mb-2'>
                      <span className='text-[#8b1d31] mt-1'>
                        <Zap size={18} />
                      </span>
                      <h4 className='font-bold text-lg text-white leading-tight'>
                        {item.name}
                      </h4>
                    </div>
                    <p className='text-xs text-slate-400 mb-6 leading-relaxed line-clamp-2'>
                      {item.shortDescription ||
                        `Precision-engineered ${item.name} for modern manufacturing speed.`}
                    </p>
                    <Link to={`/machine/${item._id}`}>
                      <button className='w-full bg-[#8b1d31] text-white py-2.5 rounded-lg font-bold text-sm hover:bg-red-800 transition'>
                        View Details
                      </button>
                    </Link>
                  </div>
                ))}
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

      {/* --- 7. What Our Customers Say --- */}
      <section className='py-20 px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-[#8b1d31] text-3xl lg:text-4xl font-bold mb-12 text-center underline decoration-slate-200 underline-offset-8'>
            What Our Customers Say
          </h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Static Testimonials */}
            <div className='space-y-8'>
              <div className='relative border-l-4 border-slate-200 pl-6 py-2'>
                <span className='absolute -top-4 -left-2 text-6xl text-slate-100 font-serif'>
                  "
                </span>
                <p className='text-xl lg:text-2xl font-bold text-slate-800 leading-tight italic relative z-10'>
                  "Reliable machine supplier with good service support."
                </p>
                <p className='text-slate-500 mt-2 font-medium'>
                  - Fabrication Workshop, Nagpur
                </p>
              </div>
              <div className='relative border-l-4 border-slate-200 pl-6 py-2'>
                <p className='text-xl lg:text-2xl font-bold text-slate-800 leading-tight italic'>
                  "Quality machines and timely delivery."
                </p>
                <p className='text-slate-500 mt-2 font-medium'>
                  - Engineering Company
                </p>
              </div>
              <button className='bg-[#8b1d31] text-white px-8 py-3 rounded-sm font-bold text-sm uppercase transition-all shadow-lg active:scale-95'>
                View More Photos
              </button>
            </div>

            {/* Dynamic Photo Gallery from Atlas */}
            <div className='grid grid-cols-2 gap-3 h-[350px]'>
              <div className='space-y-3 h-full'>
                {machines
                  .filter(m => m.dataType === 'testimonial')
                  .slice(0, 2)
                  .map((t, idx) => (
                    <div
                      key={idx}
                      className='h-1/2 overflow-hidden rounded-sm shadow-md'
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                      />
                    </div>
                  ))}
              </div>
              <div className='h-full overflow-hidden rounded-sm shadow-md'>
                {machines
                  .filter(m => m.dataType === 'testimonial')
                  .slice(2, 3)
                  .map((t, idx) => (
                    <img
                      key={idx}
                      src={t.image}
                      alt={t.name}
                      className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                    />
                  ))}
              </div>
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
