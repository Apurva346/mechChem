import React from 'react';
import { 
  Settings, 
   
  ShieldCheck, 
  Box, 
  RefreshCw, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  ArrowRight,
  ToolCase
} from 'lucide-react';

const Services = () => {
  const serviceData = [
    {
      id: "01",
      title: "Installation & Commissioning",
      icon: <Settings className="w-10 h-10" />,
      color: "from-blue-600 to-blue-800",
      description: "Our expert engineers handle end-to-end installation and commissioning of new industrial machines at your facility across Vidarbha — ensuring your machine is correctly installed, precisely aligned, safely connected, and fully tested before production begins. We follow manufacturer guidelines and industry best practices to ensure your machine is production-ready from day one.",
      points: [
        "Site preparation assessment and foundation layout planning",
        "Machine unloading, positioning, and precision levelling and alignment",
        "Electrical, hydraulic, and pneumatic connection and safety checks",
        "Trial runs, test cuts, and performance verification against specifications",
        "Operator training on safe machine operation and basic maintenance",
        "Handover documentation and commissioning report",
        "Post-commissioning follow-up support for the initial production period"
      ]
    },
    {
      id: "02",
      title: "Repair & Maintenance",
      icon: <ToolCase className="w-10 h-10" />,
      color: "from-orange-500 to-red-600",
      description: "Machine breakdowns cost production time and money. Our rapid-response repair and maintenance team is available across Vidarbha to diagnose and resolve mechanical, electrical, hydraulic, and pneumatic faults on all types of industrial machines — minimising downtime and restoring your machine to full working condition as quickly as possible.",
      points: [
        "Emergency breakdown repair with fast response time across Vidarbha",
        "Mechanical fault diagnosis and repair — gearboxes, spindles, bearings, guideways",
        "Electrical fault diagnosis and repair — motors, panels, PLC, drives, sensors",
        "Hydraulic and pneumatic system inspection, repair, and pressure testing",
        "Preventive maintenance (PM) services as per manufacturer's recommended schedule",
        "Machine alignment, levelling, and geometry checking after major repairs",
        "Worn component replacement with genuine or OEM-equivalent spare parts",
        "Detailed service report with root cause analysis and recommendations"
      ]
    },
    {
      id: "03",
      title: "AMC – Annual Maintenance Contract",
      icon: <ShieldCheck className="w-10 h-10" />,
      color: "from-green-600 to-teal-700",
      description: "Our Annual Maintenance Contract (AMC) gives your business the peace of mind of planned, professional machine maintenance throughout the year at a fixed, predictable cost. Designed for manufacturing units, fabrication shops, and production facilities across Vidarbha, our AMC plans are customised to your machine inventory and production requirements — covering scheduled preventive maintenance visits, priority breakdown support, and discounts on spare parts.",
      points: [
        "Customised AMC plans for single machines or complete machine shop inventory",
        "Scheduled preventive maintenance visits at agreed intervals (monthly/quarterly/half-yearly) as Per Discussion",
        "Priority breakdown response for AMC customers over standard service calls",
        "Comprehensive machine inspection checklist at every scheduled visit",
        "Lubrication, cleaning, adjustment, and calibration as per PM schedule",
        "Discounted spare parts pricing for AMC customers",
        "Dedicated service engineer assigned to your account for continuity",
        "Annual machine health report with performance trend analysis and recommendations"
      ]
    },
    {
      id: "04",
      title: "Spare Parts Supply",
      icon: <Box className="w-10 h-10" />,
      color: "from-purple-600 to-indigo-700",
      description: "Getting the right spare part quickly is critical to minimising machine downtime. We supply genuine, OEM-equivalent, and locally manufactured spare parts for a wide range of industrial machines across Vidarbha — covering mechanical, electrical, hydraulic, and pneumatic components. Our extensive supplier network ensures fast sourcing and delivery of both standard and hard-to-find machine parts.",
      points: [
        "Genuine and OEM-equivalent spare parts for all major machine types",
        "Mechanical parts — bearings, gears, shafts, spindles, ball screws, guide rails",
        "Electrical components — motors, contactors, relays, PLCs, drives, encoders, sensors",
        "Hydraulic parts — pumps, valves, cylinders, seals, hoses, fittings, filters",
        "Pneumatic parts — cylinders, valves, fittings, regulators, lubricators",
        "Cutting tools, toolholders, chucks, and workholding accessories",
        "Fast sourcing of imported and hard-to-find machine parts",
        "Delivery across Vidarbha — Nagpur, Amravati, Akola, Wardha, and surrounding areas"
      ]
    },
    {
      id: "05",
      title: "Machine Retrofitting & Upgradation",
      icon: <RefreshCw className="w-10 h-10" />,
      color: "from-gray-700 to-gray-900",
      description: "Instead of replacing an ageing machine, retrofitting and upgradation can restore its performance, add modern capabilities, and significantly extend its productive life at a fraction of the cost of a new machine. Our Vidarbha-based retrofitting team upgrades old mechanical and hydraulic machines with modern CNC controls, digital readouts, variable frequency drives, and improved guideways — giving your existing machine a new life with enhanced accuracy and productivity.",
      points: [
        "CNC retrofit — replacing old manual or NC controls with modern CNC systems (Fanuc, Siemens, Mitsubishi)",
        "DRO (Digital Readout) installation on manual lathes, mills, and grinding machines",
        "VFD (Variable Frequency Drive) installation for spindle and feed drive modernisation",
        "Hydraulic system upgradation — replacing old valve blocks with proportional or servo hydraulics",
        "Guideway reconditioning — scraping, grinding, or linear guide rail replacement",
        "Spindle rebuilding and bearing replacement for improved accuracy and speed",
        "Electrical panel rewiring and safety system upgradation to current standards",
        "Performance validation and accuracy certification after retrofitting"
      ]
    }
  ];

  const features = [
    { title: "Experienced Service Team", desc: "Skilled and certified engineers with hands-on experience across all types of industrial machines" },
    { title: "Fast Response Across Vidarbha", desc: "Rapid on-site response for breakdown calls across Nagpur, Amravati, Akola, Wardha, and more" },
    { title: "All Machine Types Covered", desc: "We service sheet metal machines, power presses, lathes, milling, drilling, and welding equipment" },
    { title: "Genuine Spare Parts", desc: "Access to genuine, OEM-equivalent, and locally sourced spare parts for minimum downtime" },
    { title: "Flexible AMC Plans", desc: "Customised Annual Maintenance Contracts tailored to your budget and production schedule" },
    { title: "Local Vidarbha Presence", desc: "Based in Vidarbha with deep understanding of the region's industrial needs" }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section with SEO Headings */}
      <section className="relative w-screen bg-slate-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Machine Services in <span className="text-blue-500">Vidarbha</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light">
            Your Trusted Industrial Machine Service Partner Across Vidarbha
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction Section */}
        <div className="grid md:grid-cols-3 gap-12 items-center mb-24">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold text-slate-800 leading-tight">
              Comprehensive Support for Your <span className="text-blue-600">Production Units</span>
            </h2>
            <div className="h-2 w-20 bg-blue-600 mt-4 rounded-full"></div>
          </div>
          <div className="md:col-span-2">
            <p className="text-slate-600 text-lg leading-relaxed">
              Mech Chem Engineering Services are a leading provider of comprehensive industrial machine services across Vidarbha, 
              serving fabrication shops, manufacturing industries, engineering workshops, and production units throughout 
              Nagpur, Amravati, Akola, Wardha, Yavatmal, Chandrapur, Gondia, Bhandara, Washim, and Buldhana. 
              With a team of experienced and certified service engineers, we deliver fast, reliable, and cost-effective 
              machine services that minimise downtime, extend machine life, and keep your production running at peak efficiency. 
              From initial machine installation and commissioning to ongoing preventive maintenance, emergency breakdown support, 
              AMC contracts, genuine spare parts supply, and machine modernisation, we are your single-point service partner 
              for all industrial machines in the Vidarbha region.
            </p>
          </div>
        </div>

        {/* Our Machine Services - ATTRACTIVE CARDS */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Machine Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We Mech Chem Engineering Services offer a complete range of industrial machine services to keep your machines running efficiently, accurately, and safely.
            </p>
          </div>
          
          <div className="space-y-20">
            {serviceData.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}
              >
                {/* Image/Icon Block */}
                <div className="w-full md:w-1/2 relative group">
                  <div className={`absolute -inset-4 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500`}></div>
                  <div className="relative bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden">
                    <div className={`bg-gradient-to-br ${service.color} p-12 text-white flex justify-center items-center`}>
                      <div className="p-6 bg-white/20 rounded-full backdrop-blur-sm animate-pulse">
                         {service.icon}
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                         <span className="text-5xl font-black text-slate-100">{service.id}</span>
                         <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>

                {/* Points Block */}
                <div className="w-full md:w-1/2">
                   <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                     <h4 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                       <ArrowRight className="w-5 h-5 text-blue-600" />
                       Service Highlights & Deliverables
                     </h4>
                     <ul className="space-y-4">
                        {service.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 group">
                            <div className="mt-1 bg-white p-1 rounded-md shadow-sm border border-slate-200 group-hover:border-blue-400 transition-colors">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            </div>
                            <span className="text-slate-700 text-md group-hover:text-slate-900 transition-colors">{point}</span>
                          </li>
                        ))}
                     </ul>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us - Enhanced Grid */}
        <div className="mb-24 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
          <h2 className="text-4xl font-bold mb-16 text-center relative z-10">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex justify-center items-center mb-6 group-hover:scale-110 transition-transform">
                   <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Areas Served - Minimalist Grid */}
        <div className="mb-24 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Areas We Serve in Vidarbha</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {areas.map((area, index) => (
              <div key={index} className="px-6 py-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-500 hover:shadow-md transition-all cursor-default">
                 <div className="flex items-center gap-2">
                   <MapPin className="w-4 h-4 text-blue-600" />
                   <span className="font-bold text-slate-800">{area.name}</span>
                 </div>
                 <p className="text-[10px] text-slate-500 mt-1">{area.info}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic CTA Section */}
        <div className="relative rounded-[2rem] overflow-hidden bg-blue-600 text-white shadow-2xl shadow-blue-200">
          <div className="flex flex-col lg:flex-row">
            <div className="p-10 lg:p-16 lg:w-2/3">
              <h2 className="text-4xl font-bold mb-6">Get Expert Machine Services in Vidarbha</h2>
              <p className="text-blue-100 text-lg mb-8">
                Don't let machine downtime affect your production. Our team is ready to assist you wherever you are in Vidarbha.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/10 rounded-full"><Phone className="w-6 h-6" /></div>
                  <span className="text-sm font-medium">Breakdown Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/10 rounded-full"><Mail className="w-6 h-6" /></div>
                  <span className="text-sm font-medium">AMC Request</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/10 rounded-full"><Calendar className="w-6 h-6" /></div>
                  <span className="text-sm font-medium">Site Inspection</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-700 p-10 lg:w-1/3 flex flex-col justify-center gap-4">
              <button className="w-full bg-white text-blue-700 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-lg">
                Request a Service Call
              </button>
              <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-950 transition-all shadow-lg">
                Get AMC Quote
              </button>
              <button className="w-full border-2 border-white/50 text-white py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const areas = [
  { name: "Nagpur", info: "Regional headquarters" },
  { name: "Amravati", info: "Full machine repair & AMC" },
  { name: "Akola", info: "Breakdown support & parts" },
  { name: "Wardha", info: "Repair & commissioning" },
  { name: "Yavatmal", info: "AMC & emergency support" },
  { name: "Chandrapur", info: "Installation & repair" },
  { name: "Gondia", info: "Preventive maintenance" },
  { name: "Bhandara", info: "Spare parts & on-site support" },
  { name: "Washim", info: "AMC & scheduled maintenance" },
  { name: "Buldhana", info: "Installation & parts supply" }
];

export default Services;