

const mongoose = require('mongoose');
const Machine = require('./models/Machine'); // Path tumchya model pramane check kara

const MONGO_URI = "mongodb+srv://apurvajibhakate007_db_user:YXS8g9XndPuuK8IP@cluster0.dpnwsey.mongodb.net/mechchem_db?appName=Cluster0";

// --- CATEGORY DESCRIPTIONS ---
const millingDesc = `A milling machine is a versatile and essential machine tool used for removing material from a workpiece using rotary cutters. At Mech Chem Engineering Services, we offer reliable milling machines designed for accuracy, durability, and high productivity, making them suitable for workshops, tool rooms, and industrial manufacturing units.`;
const cuttingDesc = `Mech Chem Engineering Services provides high-performance Cutting Machines designed for fast, accurate, and economical cutting of metal bars, pipes, and structural profiles. Our range includes high-speed Band Saws and reliable Power Hacksaws, ensuring clean cuts and minimal material wastage for fabrication shops and engineering industries.`;
const threadingDesc = `Our Threading Machines are engineered for high-speed, high-precision cold-forming of threads on bolts, nuts, studs, screws, shafts, and fasteners across automotive, construction, railway, aerospace, and general engineering industries. Using the proven cold thread rolling process, our machines produce threads that are significantly stronger, more fatigue-resistant, and dimensionally more accurate than conventionally cut threads — at production speeds several times faster than traditional threading methods. Whether you need a versatile Thread Rolling Machine for external threads on shafts and studs or a dedicated Bolt & Nut Thread Rolling Machine for continuous high-volume fastener production, our range offers reliable performance, long die life, and compatibility with Metric, UNC, UNF, BSW, and other international thread standards.`;
const weldingDesc = `Mech Chem Engineering Services is a trusted Welding Machine and Fabrication Equipment Supplier in Nagpur, offering a comprehensive range of high-performance industrial welding machines designed for superior weld quality, productivity, and reliability. Our range includes Arc Welding Machines (SMAW) for robust, versatile stick welding; MIG Welding Machines (GMAW) for fast, high-deposition production welding; and TIG Welding Machines (GTAW) for precision, clean, and aesthetically superior welding. Built with advanced inverter IGBT technology and comprehensive arc management features, our machines meet the demands of fabrication shops, automotive manufacturers, shipyards, and general engineering industries.`;
const workholdingDesc = `Our premium selection of Workholding Tools provides the ultimate foundation for turning, boring, and milling operations, ensuring maximum machining accuracy, part stability, and operator safety. Engineered for high performance on both CNC turning centers and manual lathes, our range features highly precise Self-Centering Lathe Chucks and heavy-duty 4-Jaw Independent Chucks. Built from premium-grade forged steel and hardened alloy components, these tools minimize setup times, eliminate part deflection, and deliver the tightest runout tolerances required for demanding engineering tasks.`;
const finishingCoatingDesc = `Our comprehensive selection of Finishing & Coating Machines provides advanced surface treatment and protection solutions, ensuring your components achieve a flawless aesthetic appeal, high wear resistance, and long-lasting corrosion protection. Designed to cater to everything from large industrial production lines to specialized workshops, our range features high-efficiency Electrostatic Powder Coating Systems and rugged, high-speed Bench Polishing Machines. Built to international engineering standards, these systems maximize coating transfer efficiency, minimize downtime, and deliver mirror-smooth finishes across diverse metallic and structural substrates.`;
const heavyDesc = `Our Heavy Machines are built to withstand the most demanding manufacturing applications, delivering uncompromised rigidity, exceptional structural dampening, and high-precision multi-axis machining capabilities for oversized industrial components. Featuring heavy-duty Vertical Boring Machines (VTLs) for large-diameter castings, flanges, and rings, and multi-axis Horizontal Boring Machines (HBMs) for complete face-milling, deep boring, and tapping operations in single setups, our lineup is engineered for maximum throughput. Built with advanced hydrostatic bearing technology, powerful gear-driven spindles, and closed-loop linear scale feedback, these machines provide the core infrastructure needed for power generation, heavy engineering, defense, oil & gas, and aerospace industries.`;

const drillingDesc = `Mech Chem Engineering Services is a trusted Drill Machine and Workshop Machinery Supplier in Nagpur, offering a wide range of high-performance industrial drilling machines designed for precision, durability, and reliable operation. Our machines are widely used in fabrication workshops, manufacturing plants, engineering industries, and maintenance departments.`;
const grindingDesc = `Mech Chem Engineering Services supplies a versatile range of grinding machines designed for precision and durability. From flat surface finishing to shaft grinding and cutting tool sharpening, our machines deliver tight tolerances and superior surface finish for toolrooms, production shops, and engineering industries.`;
// --- MILLING MACHINES DATA ---
const millingMachines = [
    {
        name: "Heavy Duty Milling Machine",
        category: "Milling Machines",
        categoryDescription: millingDesc,
        subTitle: "Robust Milling Equipment for Heavy Metal Cutting and Fabrication Work",
        shortDescription: "Built for large-scale machining and heavy metal cutting operations in demanding industrial environments.",
        description: "The Heavy Duty Milling Machine is built for large-scale machining and heavy metal cutting operations. It is designed to handle high workloads and demanding industrial environments. Mech Chem Engineering Services supplies robust heavy-duty milling machines suitable for engineering industries, steel fabrication units, and manufacturing plants requiring reliable machining equipment.",
        specifications: {
            "Table Size": "300 × 1400 mm",
            "Longitudinal Travel": "900 – 1000 mm",
            "Cross Travel": "300 – 350 mm",
            "Vertical Travel": "400 – 450 mm",
            "Spindle Speed Range": "30 – 1500 RPM",
            "Motor Power": "5 – 7.5 HP"
        },
        features: ["Heavy-duty machine construction", "High load capacity", "Stable machining performance", "Precision cutting capability", "Long operational life"],
        applications: ["Heavy engineering industries", "Manufacturing plants", "Steel fabrication units", "Automobile industries"],
        faqs: [
            { question: "What is a heavy duty milling machine used for?", answer: "It is used for large machining jobs and heavy metal cutting operations." },
            { question: "Is this machine suitable for continuous industrial use?", answer: "Yes, it is designed for long working hours and heavy workloads." }
        ],
        ctaText: "Searching for a powerful machining setup? Get in touch with our specialists to discuss capacity and delivery timelines.",
        image: "/images/machines/heavy-duty-milling-machine.png",
        altText: "heavy-duty-milling-machine",
        metaTitle: "Heavy Duty Milling Machine Dealer in Nagpur | Industrial Milling Equipment",
        metaDescription: "Trusted heavy duty milling machine supplier in Nagpur offering robust machines for heavy machining and industrial manufacturing."
    },
    {
        name: "Turret Milling Machine",
        category: "Milling Machines",
        categoryDescription: millingDesc,
        subTitle: "Flexible Milling System for Accurate Component Manufacturing",
        shortDescription: "A highly flexible machine designed for precision milling, drilling, and shaping operations.",
        description: "The Turret Milling Machine is a highly flexible machine designed for precision milling, drilling, and shaping operations. It is widely used in tool rooms and manufacturing units for producing complex components with high accuracy. Mech Chem Engineering Services supplies reliable turret milling machines.",
        specifications: {
            "Table Size": "250 × 1250 mm",
            "Longitudinal Travel": "700 – 800 mm",
            "Cross Travel": "300 – 350 mm",
            "Spindle Speed Range": "60 – 2000 RPM",
            "Motor Power": "3 – 5 HP"
        },
        features: ["Swiveling turret head", "High machining flexibility", "Precision spindle operation", "Smooth performance"],
        applications: ["Tool rooms", "Manufacturing industries", "Precision engineering units"],
        faqs: [
            { question: "What is the advantage of a turret milling machine?", answer: "It provides flexibility for precision machining and multi-directional operations." }
        ],
        ctaText: "Upgrade your workshop with a flexible milling solution. Contact us today for professional support.",
        image: "/images/machines/turret-milling-machine.png",
        altText: "turret-milling-machine",
        metaTitle: "Turret Milling Machine Dealer in Nagpur | Precision Milling Machine",
        metaDescription: "Dependable supplier of turret milling systems in Nagpur delivering accurate machining performance."
    },
    {
        name: "Universal Milling Machine",
        category: "Milling Machines",
        categoryDescription: millingDesc,
        subTitle: "Versatile Milling Equipment Supplier for Tool Rooms",
        shortDescription: "Versatile metalworking machine designed for performing milling operations in multiple directions.",
        description: "The Universal Milling Machine is a versatile metalworking machine designed for performing milling operations in multiple directions. It is widely used for precision machining, gear cutting, and slotting.",
        specifications: {
            "Table Size": "254 × 1270 mm",
            "Longitudinal Travel": "700 – 800 mm",
            "Spindle Speed Range": "40 – 1800 RPM",
            "Motor Power": "3 – 5 HP"
        },
        features: ["Multi-directional capability", "Rigid structure", "Reliable machining accuracy"],
        applications: ["Tool rooms", "Manufacturing industries", "Engineering workshops"],
        faqs: [
            { question: "What is a universal milling machine used for?", answer: "It is used for milling, drilling, slotting, and gear cutting operations." }
        ],
        ctaText: "Get in touch with us to explore how our universal milling machines can enhance your production efficiency.",
        image: "/images/machines/universal-milling-machine.png",
        altText: "industrial-milling-machine-nagpur"
    },
    {
        name: "Vertical Milling Machine",
        category: "Milling Machines",
        categoryDescription: millingDesc,
        subTitle: "Precision Milling and Vertical Machining Center Equipment",
        shortDescription: "Designed for precision milling, drilling, and slotting operations.",
        description: "The Vertical Milling Machine is designed for precision milling, drilling, and slotting operations in metalworking industries. It ensures consistent machining performance and long operational life.",
        specifications: {
            "Table Size": "230 × 1000 mm",
            "Longitudinal Travel": "600 – 700 mm",
            "Spindle Speed Range": "50 – 2000 RPM",
            "Motor Power": "3 – 5 HP"
        },
        features: ["Vertical spindle configuration", "High precision machining", "Stable machine structure"],
        applications: ["Engineering workshops", "Manufacturing industries", "Fabrication units"],
        faqs: [
            { question: "Is this machine suitable for industrial production work?", answer: "Yes, it is widely used in manufacturing and machining industries." }
        ],
        ctaText: "Need a precision milling system for accurate metal cutting? Reach out to us now.",
        image: "/images/machines/vertical-milling-machine.png",
        altText: "metal-cutting-milling-machine"
    }
];

// --- DRILLING MACHINES DATA ---
const drillingMachines = [
    {
        name: "Vertical Milling Cum Drilling Machine",
        category: "Drilling Machines",
        categoryDescription: drillingDesc,
        subTitle: "Multi Purpose Drilling and Milling Equipment for Workshop Applications",
        shortDescription: "The Vertical Milling Cum Drilling Machine is a versatile industrial machine designed for both milling and drilling operations.",
        description: "The Vertical Milling Cum Drilling Machine is a versatile industrial machine designed for both milling and drilling operations in engineering workshops and production environments. Mech Chem Engineering Services supplies reliable combination machines suitable for tool rooms, fabrication shops, and maintenance departments requiring multi-purpose machining solutions. This machine helps improve productivity by performing multiple operations on a single platform, making it a cost-effective choice for industrial users.\n\nAs a trusted industrial machinery supplier in Nagpur, we provide durable drilling and milling machines that deliver consistent performance in daily workshop operations.",
        specifications: {
            "Drilling Capacity": "25 – 40 mm",
            "Milling Capacity": "80 – 100 mm",
            "Spindle Speed Range": "100 – 2000 RPM",
            "Table Size": "200 × 800 mm",
            "Motor Power": "2 – 3 HP",
            "Column Diameter": "100 – 120 mm"
        },
        features: ["Dual-function milling and drilling capability", "Compact and efficient machine design", "Precision spindle performance", "Rigid machine structure", "Smooth and stable operation", "Low maintenance requirement"],
        applications: ["Engineering workshops", "Tool rooms", "Fabrication units", "Maintenance departments", "Manufacturing industries"],
        faqs: [
            { question: "What is a milling cum drilling machine used for?", answer: "It is used for performing both drilling and milling operations on metal components." },
            { question: "Is this machine suitable for small and medium workshops?", answer: "Yes, it is widely used in workshops requiring multi-purpose machining equipment." },
            { question: "Do you provide installation support?", answer: "Yes, we provide machine delivery, installation, and service assistance." }
        ],
        ctaText: "Searching for a versatile milling and drilling solution? Contact us for professional support.",
        image: "/images/machines/Vertical Milling Cum Drilling Machine.png",
        altText: "vertical-milling-cum-drilling-machine",
        metaTitle: "Vertical Milling Cum Drilling Machine Supplier in Nagpur Maharashtra",
        metaDescription: "Buy vertical milling - drilling machine from a trusted supplier in Nagpur. Suitable for engineering workshops, fabrication units, and industrial machining applications."
    },
    {
        name: "Heavy Drilling Machine",
        category: "Drilling Machines",
        categoryDescription: drillingDesc,
        subTitle: "High Capacity Drilling Equipment for Industrial Production Work",
        shortDescription: "The Heavy Drilling Machine is engineered for high-capacity drilling operations in demanding industrial environments.",
        description: "The Heavy Drilling Machine is engineered for high-capacity drilling operations in demanding industrial environments. Built with a rigid structure and powerful motor, it ensures accurate drilling, long service life, and consistent performance. It is ideal for heavy fabrication, metalworking industries, and engineering workshops.",
        specifications: {
            "Machine Type": "Heavy Duty Drilling Machine",
            "Drilling Capacity": "Up to 50 mm",
            "Spindle Speed Range": "50 – 1200 RPM",
            "Spindle Travel": "200 – 250 mm",
            "Column Diameter": "180 – 250 mm",
            "Motor Power": "3 HP – 5 HP",
            "Voltage": "415V, 3 Phase",
            "Operation Type": "Manual / Semi-Automatic",
            "Machine Structure": "Heavy Duty Cast Iron",
            "Application": "Heavy Industrial Drilling"
        },
        features: ["Heavy-duty structure for demanding operations", "Powerful motor for high drilling capacity", "High accuracy drilling performance", "Strong and durable machine components", "Smooth and reliable operation", "Low maintenance requirements", "Long operational life", "Suitable for heavy industrial workloads"],
        applications: ["Heavy fabrication industries", "Engineering workshops", "Manufacturing plants", "Metal processing industries", "Machinery production units", "Steel fabrication units", "Industrial maintenance workshops"],
        faqs: [
            { question: "What is a heavy drilling machine used for?", answer: "It is used for drilling large and deep holes in heavy metal components." },
            { question: "Is this machine suitable for continuous industrial use?", answer: "Yes, it is designed for heavy-duty industrial operations." },
            { question: "What industries commonly use heavy drilling machines?", answer: "Fabrication, engineering, manufacturing, and heavy machinery industries." }
        ],
        ctaText: "Need high-capacity drilling? Contact Mech Chem Engineering Services today.",
        image: "/images/machines/Heavy Drilling Machine.png",
        altText: "industrial heavy duty drilling machine Supplier",
        metaTitle: "Heavy Duty Drilling Machine Supplier for Industrial Use",
        metaDescription: "Durable heavy drilling machine designed for high-precision and large-capacity drilling operations in workshops, fabrication units, and industrial applications."
    },
    {
        name: "Heavy Duty Radial Drilling Machine",
        category: "Drilling Machines",
        categoryDescription: drillingDesc,
        subTitle: "Industrial Drilling Equipment for Large and Heavy Workpieces",
        shortDescription: "The Heavy Duty Radial Drilling Machine is engineered for high-capacity drilling operations.",
        description: "The Heavy Duty Radial Drilling Machine is engineered for high-capacity drilling operations in demanding industrial environments. It is suitable for handling large metal components and performing precision drilling tasks in heavy engineering and fabrication industries. Mech Chem Engineering Services supplies robust radial drilling equipment designed for durability, strength, and reliable performance.\n\nAs an experienced industrial equipment dealer in Nagpur, we provide heavy-duty drilling machines that support continuous production and heavy workloads.",
        specifications: {
            "Drilling Capacity": "50 – 75 mm",
            "Arm Length": "1500 – 2000 mm",
            "Column Diameter": "180 – 220 mm",
            "Spindle Speed Range": "30 – 1200 RPM",
            "Motor Power": "5 – 7.5 HP",
            "Vertical Travel": "800 – 1000 mm"
        },
        features: ["High load carrying capacity", "Strong machine structure", "Precision drilling performance", "Smooth mechanical operation", "Heavy-duty components", "Extended service life"],
        applications: ["Heavy engineering industries", "Steel fabrication plants", "Manufacturing facilities", "Shipbuilding units", "Industrial workshops"],
        faqs: [
            { question: "What is the difference between standard and heavy duty radial drilling machines?", answer: "Heavy duty models are designed to handle larger components and higher drilling loads." },
            { question: "Is this machine suitable for continuous industrial production?", answer: "Yes, it is built for heavy-duty and long-duration operations." },
            { question: "Do you supply drilling machines to nearby industrial areas?", answer: "Yes, we supply machines across Nagpur, Maharashtra, and surrounding regions." }
        ],
        ctaText: "Discuss your large workpiece drilling requirements with us today.",
        image: "/images/machines/Heavy Duty Radial Drilling Machine.png",
        altText: "heavy-duty-radial-drilling-machine",
        metaTitle: "Heavy Duty Radial Drilling Machine Supplier in Nagpur Maharashtra",
        metaDescription: "Buy heavy duty radial drill machine from a trusted supplier in Nagpur. Ideal for heavy fabrication, engineering industries, and large-scale drilling operations."
    },
    {
        name: "Radial Drilling Machine",
        category: "Drilling Machines",
        categoryDescription: drillingDesc,
        subTitle: "Efficient Hole Making Solution for Fabrication and Engineering Industries",
        shortDescription: "The Radial Drilling Machine is widely used for drilling large and heavy components with precision and flexibility.",
        description: "The Radial Drilling Machine is widely used for drilling large and heavy components with precision and flexibility. It allows the drill head to move along the radial arm, making it suitable for handling oversized workpieces in engineering and fabrication environments. Mech Chem Engineering Services supplies dependable radial drilling machines for workshops, manufacturing units, and maintenance facilities requiring efficient hole-making operations.\n\nAs a reliable industrial machine supplier serving industries in Nagpur and Maharashtra, we provide robust drilling solutions designed for continuous industrial use and accurate performance.",
        specifications: {
            "Drilling Capacity": "40 – 50 mm",
            "Arm Length": "1000 – 1500 mm",
            "Column Diameter": "150 – 180 mm",
            "Spindle Speed Range": "40 – 1500 RPM",
            "Motor Power": "3 – 5 HP",
            "Vertical Travel": "600 – 800 mm"
        },
        features: ["Flexible radial arm movement", "Heavy-duty machine construction", "High drilling accuracy", "Smooth gear transmission", "Stable and vibration-free operation", "Long operational reliability"],
        applications: ["Heavy fabrication workshops", "Steel industries", "Manufacturing plants", "Automobile industries", "Engineering units"],
        faqs: [
            { question: "What industries use radial drill machines?", answer: "Radial drill machines are commonly used in fabrication, manufacturing, and heavy engineering industries." },
            { question: "Can this machine handle large components?", answer: "Yes, it is specifically designed to drill large and heavy workpieces." },
            { question: "Do you provide service and support after installation?", answer: "Yes, we offer complete machine supply, installation, and maintenance assistance." }
        ],
        ctaText: "Improve your fabrication efficiency. Get in touch for a Radial Drilling Machine quote.",
        image: "/images/machines/Radial Drilling Machine.png",
        altText: "radial-drilling-machine",
        metaTitle: "Radial Drilling Machine Supplier in Nagpur | Industrial Drill Machine",
        metaDescription: "Trusted radial drill machine supplier in Nagpur offering reliable drilling equipment for fabrication shops, engineering industries, and manufacturing units."
    },
    {
        name: "Geared Radial Drilling Machine",
        category: "Drilling Machines",
        categoryDescription: drillingDesc,
        subTitle: "High Precision Geared Radial Drilling Machine for Industrial Workshops",
        shortDescription: "The Geared Radial Drilling Machine provides accurate drilling with easy gear-based speed controls.",
        description: "Designed for industrial applications requiring multiple speed settings and high torque. The geared mechanism ensures smooth power transmission and long-term durability for fabrication and engineering workshops.",
        specifications: {
            "Drilling Capacity": "38 – 50 mm",
            "Spindle Travel": "220 mm",
            "Number of Speeds": "8 – 12 Speeds",
            "Motor Power": "3 HP",
            "Arm Length": "1000 – 1200 mm"
        },
        features: ["Precision gear drive system", "Easy speed change mechanism", "Rigid column and arm design", "Minimal noise and vibration", "Accurate spindle alignment"],
        applications: ["Engineering workshops", "Manufacturing plants", "Tool rooms", "Maintenance units"],
        faqs: [
            { question: "What is the benefit of a geared radial drill?", answer: "It provides constant torque and easier speed adjustments compared to belt-driven models." }
        ],
        ctaText: "Searching for high precision drilling? Contact us to know more about Geared Radial Drills.",
        image: "/images/machines/Geared Radial Drilling Machine.png",
        altText: "geared-radial-drilling-machine"
    },
    {
        name: "Universal Portable Radial Drilling Machine",
        category: "Drilling Machines",
        categoryDescription: "Mech Chem Engineering Services supplies a versatile range of radial drilling machines designed for precision and durability in various industrial applications.", // Hi drilling chi common category description
        subTitle: "Versatile and Precise Drilling Solution for Heavy Workpieces",
        shortDescription: "Designed for drilling at any angle and position on large or heavy workpieces that cannot be easily moved.",
        description: "The Universal Portable Radial Drilling Machine is specifically engineered for flexibility and precision. Its unique design allows it to be moved to the workpiece, making it ideal for large and heavy components. It features a universal head that can drill at any angle, providing unmatched versatility in fabrication and maintenance workshops.",
        specifications: {
            "Drilling Capacity": "25 – 40 mm",
            "Arm Length": "600 – 1000 mm",
            "Spindle Speed Range": "60 – 1200 RPM",
            "Motor Power": "1.5 – 3 HP",
            "Head Swivel": "360 Degrees",
            "Column Diameter": "120 – 150 mm"
        },
        features: [
            "Portable and compact design",
            "Universal head for multi-angle drilling",
            "Easy movement to large workpieces",
            "High drilling accuracy",
            "Robust construction for industrial use",
            "User-friendly controls"
        ],
        applications: [
            "Heavy engineering workshops",
            "Shipbuilding and repair",
            "Large machine assembly units",
            "Maintenance departments",
            "Fabrication of oversized structures"
        ],
        faqs: [
            {
                question: "What makes a radial drilling machine 'portable'?",
                answer: "It is designed with a lifting hook and compact base so it can be moved to the site of large workpieces rather than moving the workpiece to the machine."
            },
            {
                question: "Can it drill at an angle?",
                answer: "Yes, the universal head allows for drilling at almost any angle, including horizontal and vertical positions."
            },
            {
                question: "Is it suitable for heavy-duty work?",
                answer: "While portable, it is built with high-quality materials to handle significant drilling capacities in industrial environments."
            }
        ],
        image: "/images/machines/Universal Portable Radial Drilling Machine.jpeg",
        altText: "universal-portable-radial-drilling-machine-nagpur",
        metaTitle: "Universal Portable Radial Drilling Machine Supplier in Nagpur",
        metaDescription: "Reliable supplier of Universal Portable Radial Drilling Machines in Nagpur. Ideal for large workpiece drilling at any angle."
    }
];


// 1. Lathe Category Description (H1 wala content as it is)
const latheDesc = "A lathe machine is the backbone of any workshop. We supply heavy-duty all-geared lathe machines suitable for turning, threading, facing, and boring operations. Available in various swing diameters and centre distances. Ideal for auto workshops, fabrication units, and training institutes.";

// 2. Lathe Machines Data Array
const latheMachines = [
    {
        name: "Light Duty Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "Ideal for small workshops, training institutes, and job shops",
        shortDescription: "Light duty lathe machines are ideal for small workshops, training institutes, and job shops that require basic turning, facing, and threading operations.",
        description: "Light duty lathe machines are ideal for small workshops, training institutes, and job shops that require basic turning, facing, and threading operations. Compact in size and easy to operate, these machines are perfect for light machining work on small metal components.",
        specifications: {
            "Swing Over Bed": "150mm – 250mm",
            "Distance Between Centres": "500mm – 1000mm",
            "Spindle Speed": "100 – 2000 RPM",
            "Motor Power": "0.5 HP – 1.5 HP",
            "Spindle Bore": "20mm – 30mm"
        },
        features: [
            "Smooth operation with low vibration",
            "Easy speed and feed control",
            "Suitable for small diameter workpieces",
            "Low maintenance and durable construction",
            "Ideal for beginners and training purposes"
        ],
        applications: ["Auto workshops", "ITI & polytechnic institutes", "small job shops", "electronics workshops"],
        faqs: [
            { question: "What is a light duty lathe machine used for?", answer: "A light duty lathe machine is used for basic turning, facing, threading, and drilling operations on small metal, wood, or plastic components." },
            { question: "What is the price of a lathe machine in Nagpur?", answer: "The price of a lathe machine in Nagpur typically ranges from ₹50,000 to ₹2,00,000 depending on the specs. Contact us for best price." },
            { question: "What materials can be machined on a light duty lathe?", answer: "Light duty lathes can machine mild steel, aluminium, brass, copper, plastic, and wood for small component production." },
            { question: "Is a light duty lathe machine suitable for beginners?", answer: "Yes, simple to operate and widely used in ITI institutes and training centres." }
        ],
        ctaText: "Get free quote from Mech Chem Engineering Services.",
        image: "\images\machines\Light duty lathe machine.png",
        altText: "light-duty-lathe-machine-nagpur",
        metaTitle: "Light Duty Lathe Machine Supplier in Nagpur | Mech Chem Engineering",
        metaDescription: "Buy Light Duty Lathe Machine in Nagpur at competitive prices. Ideal for small workshops, ITI institutes & job shops."
    },
    {
        name: "Medium & Heavy Duty Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "Widely used machines in workshops and production units",
        shortDescription: "Medium and heavy duty lathe machines handle a wide range of turning, boring, threading, and facing jobs on medium to large diameter components.",
        description: "Medium and heavy duty lathe machines are the most widely used machines in workshops and production units across Maharashtra. Built for continuous operation, these machines handle a wide range of turning, boring, threading, and facing jobs on medium to large diameter components.",
        specifications: {
            "Swing Over Bed": "250mm – 500mm",
            "Distance Between Centres": "1000mm – 3000mm",
            "Spindle Speed": "40 – 1800 RPM",
            "Motor Power": "2 HP – 10 HP",
            "Spindle Bore": "38mm – 80mm"
        },
        features: [
            "All-geared headstock for consistent power delivery",
            "Wide range of spindle speeds and feeds",
            "Hardened and ground bed for long life",
            "Suitable for both production and job shop use",
            "Available with taper turning and thread cutting attachments"
        ],
        applications: ["Fabrication units", "Auto component manufacturers", "General engineering workshops", "Pump and valve manufacturers"],
        faqs: [
            { question: "What is the difference between medium duty and heavy duty lathe machines?", answer: "Medium duty (250mm-350mm swing) for general jobs; Heavy duty (above 350mm) for larger, heavier components." },
            { question: "Can heavy duty lathe machines do threading operations?", answer: "Yes, they come with a threading gearbox that supports metric, inch, and module threads." }
        ],
        ctaText: "Call now for best price & quick delivery.",
        image: "\images\machines\medium & heavy duty lathe machine.png",
        altText: "heavy-duty-lathe-machine-nagpur",
        metaTitle: "Medium & Heavy Duty Lathe Machine Supplier Nagpur | Mech Chem Engineering",
        metaDescription: "Supplier of Medium & Heavy Duty Lathe Machines in Nagpur. Suitable for fabrication, auto components & general engineering."
    },
    {
        name: "Extra Heavy Duty Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "Designed for machining large, heavy workpieces",
        shortDescription: "Extra heavy duty lathe machines deliver high torque and stability for demanding industrial applications like shafts and rolls.",
        description: "Extra heavy duty lathe machines are designed for machining large, heavy workpieces such as rolls, shafts, flanges, and turbine components. Built with a robust cast iron bed and powerful drive system, these machines deliver high torque and stability for demanding industrial applications.",
        specifications: {
            "Swing Over Bed": "500mm – 2000mm",
            "Distance Between Centres": "3000mm – 10000mm",
            "Spindle Speed": "10 – 500 RPM",
            "Motor Power": "10 HP – 40 HP",
            "Spindle Bore": "80mm – 200mm"
        },
        features: [
            "Extra wide and rigid cast iron bed",
            "High torque gearbox for heavy cutting",
            "Heavy duty chuck and faceplate compatible",
            "Steady and follower rest included",
            "Suitable for large diameter and long length components"
        ],
        applications: ["Steel plants", "Paper mills", "Cement industry", "Heavy fabrication", "Power generation", "Shipbuilding"],
        faqs: [
            { question: "What is an extra heavy duty lathe machine?", answer: "A large industrial lathe designed to machine very heavy and large diameter workpieces such as shafts, rolls, and flanges." }
        ],
        ctaText: "Get best price from Mech Chem Engineering.",
        image: "\images\machines\Extra heavy duty lathe machine.png",
        altText: "extra-heavy-duty-lathe-machine-nagpur",
        metaTitle: "Extra Heavy Duty Lathe Machine Supplier in Nagpur | Mech Chem Engineering",
        metaDescription: "Buy Extra Heavy Duty Lathe Machines in Nagpur for steel, paper & power industries. High torque, large swing capacity."
    },
    {
        name: "Tool Room & Precision Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "Built for applications where accuracy and surface finish are critical",
        shortDescription: "Used in tool rooms and die shops, these machines deliver micron-level accuracy on every job.",
        description: "Tool room and precision lathe machines are built for applications where accuracy and surface finish are critical. Used in tool rooms, die shops, and precision component manufacturing, these machines deliver micron-level accuracy on every job.",
        specifications: {
            "Swing Over Bed": "200mm – 400mm",
            "Distance Between Centres": "500mm – 2000mm",
            "Spindle Speed": "25 – 2500 RPM",
            "Motor Power": "1 HP – 5 HP",
            "Spindle Runout": "Within 0.005mm"
        },
        features: [
            "High precision spindle with minimal runout",
            "Fine feed control for superior surface finish",
            "Hardened and precision ground bed and slideways",
            "Suitable for close tolerance work",
            "Low noise and vibration operation"
        ],
        applications: ["Tool rooms", "Die & mould shops", "Precision engineering", "Defence", "Aerospace", "Medical equipment"],
        faqs: [
            { question: "What is a tool room lathe machine?", answer: "A high precision lathe designed for close tolerance work in tool rooms and die shops." },
            { question: "What is the spindle runout accuracy?", answer: "Precision lathe machines typically have spindle runout within 0.005mm." }
        ],
        ctaText: "Get free quote today for micron-level accuracy.",
        image: "\images\machines\Tool Room & Precision Lathe Machine.jpeg",
        altText: "high-accuracy-lathe-machine-tool-room",
        metaTitle: "Tool Room & Precision Lathe Machine Supplier Nagpur | Mech Chem Engineering",
        metaDescription: "Buy Tool Room & Precision Lathe Machines in Nagpur for die, mould & aerospace applications."
    },
    {
        name: "High Speed Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "Fast material removal and high production output",
        shortDescription: "Ideal for machining aluminium, brass, and plastic at elevated speeds with excellent finish.",
        description: "High speed lathe machines are designed for fast material removal and high production output. Suitable for machining aluminium, brass, plastic, and other non-ferrous materials at elevated speeds with excellent surface finish.",
        specifications: {
            "Swing Over Bed": "150mm – 300mm",
            "Distance Between Centres": "500mm – 1500mm",
            "Spindle Speed": "100 – 3000 RPM",
            "Motor Power": "1 HP – 3 HP",
            "Spindle Bore": "25mm – 40mm"
        },
        features: [
            "High RPM spindle for fast machining",
            "Lightweight and compact design",
            "Ideal for non-ferrous and soft material machining",
            "Quick speed change mechanism",
            "Low vibration at high speeds"
        ],
        applications: ["Aluminium component manufacturers", "Plastic machining", "Electrical workshops", "Jewellery and small parts"],
        faqs: [
            { question: "What is a high speed lathe machine used for?", answer: "Fast machining of non-ferrous materials like aluminium and brass requiring high spindle speeds." }
        ],
        ctaText: "Contact us for price & availability of High Speed Lathes.",
        image: "/images/machines/high-speed-lathe.png",
        altText: "high-rpm-lathe-machine-nagpur",
        metaTitle: "High Speed Lathe Machine Supplier in Nagpur | Mech Chem Engineering Services",
        metaDescription: "Buy High Speed Lathe Machines in Nagpur for aluminium, brass & non-ferrous machining."
    },
    {
        name: "Roll Turning Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "Specially designed for heavy industrial rolls",
        shortDescription: "Rigid structure and high torque drive for machining rolls in steel, paper, and textile industries.",
        description: "Roll turning lathe machines are specially designed for machining heavy industrial rolls used in steel, paper, rubber, and textile industries. Built with an extremely rigid structure and high torque drive, these machines handle large diameter and long length rolls with precision.",
        specifications: {
            "Swing Over Bed": "800mm – 2500mm",
            "Distance Between Centres": "3000mm – 12000mm",
            "Spindle Speed": "5 – 200 RPM",
            "Motor Power": "20 HP – 75 HP",
            "Roll Diameter Capacity": "Up to 2000mm"
        },
        features: [
            "Extra heavy duty cast iron construction",
            "High torque drive system for roll turning",
            "Large swing capacity for oversized rolls",
            "Steady rest for long workpiece support",
            "Custom bed lengths available on request"
        ],
        applications: ["Steel rolling mills", "Paper mills", "Rubber roller manufacturers", "Printing industries", "Textile machinery"],
        faqs: [
            { question: "What is a roll turning lathe machine?", answer: "A specially designed heavy duty lathe for machining large rolls used in steel and paper mills." }
        ],
        ctaText: "Get best price from Mech Chem Engineering Nagpur for Roll Turning Lathes.",
        image: "/images/machines/Roll turning lathe machine.jpeg",
        altText: "heavy-duty-roll-lathe-machine-nagpur",
        metaTitle: "Roll Turning Lathe Machine Supplier in Nagpur | Mech Chem Engineering",
        metaDescription: "Heavy Duty Roll Turning Lathe Machines for steel, paper & rubber industries. Large swing capacity."
    },
    {
        name: "Facing & Gap Bed Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "Removable gap section for large diameter workpieces",
        shortDescription: "Allows machining of large diameter discs, flanges, and faceplates that won't fit on standard lathes.",
        description: "Facing and gap bed lathe machines feature a removable gap section near the headstock, allowing machining of large diameter discs, flanges, and faceplates that would not fit on a standard lathe. Ideal for facing operations on large workpieces.",
        specifications: {
            "Swing Over Bed": "400mm – 1200mm",
            "Swing In Gap": "Up to 1800mm",
            "Distance Between Centres": "1000mm – 4000mm",
            "Motor Power": "5 HP – 20 HP",
            "Gap Width": "250mm – 500mm"
        },
        features: [
            "Removable gap bed section for large diameter work",
            "Suitable for disc, pulley, and flange machining",
            "Heavy duty construction for stability",
            "Wide range of speeds and feeds",
            "Compatible with large faceplates and chucks"
        ],
        applications: ["Pump manufacturers", "Valve industry", "Flange and disc manufacturers", "Heavy engineering workshops"],
        faqs: [
            { question: "What is a gap bed lathe machine?", answer: "It has a removable section called the gap, allowing machining of large diameter workpieces like discs and flanges." }
        ],
        ctaText: "Get free quote for large diameter disc and flange machining.",
        image: "\images\machines\Facing & Gap Bed Lathe Machine.jpeg",
        altText: "gap-bed-lathe-machine-nagpur",
        metaTitle: "Facing & Gap Bed Lathe Machine Supplier Nagpur | Mech Chem Engineering",
        metaDescription: "Buy Facing & Gap Bed Lathe Machines in Nagpur for large diameter disc, flange & pulley machining."
    },
    {
        name: "Capstan & Turret Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "High-volume repetitive production of components",
        shortDescription: "Multi-tool turret allows sequential operations without changing tools, reducing cycle time.",
        description: "Capstan and turret lathe machines are designed for high-volume repetitive production of small to medium components. With a multi-tool turret head, multiple operations can be performed in sequence without changing tools, drastically reducing cycle time.",
        specifications: {
            "Swing Over Bed": "150mm – 350mm",
            "Distance Between Centres": "500mm – 1500mm",
            "Spindle Speed": "50 – 2000 RPM",
            "Motor Power": "1 HP – 5 HP",
            "Number of Turret Stations": "6 – 8"
        },
        features: [
            "Multi-station turret for sequential operations",
            "High production output with reduced setup time",
            "Suitable for repetitive batch production",
            "Quick tool indexing mechanism",
            "Available in capstan (light) and turret (heavy) variants"
        ],
        applications: ["Auto component manufacturers", "Fastener industry", "Brass parts production", "Electrical fittings", "Hydraulic components"],
        faqs: [
            { question: "What is the difference between a capstan and a turret lathe?", answer: "Capstan has a lighter turret on a slide; Turret lathe has a heavier saddle-mounted turret for larger components." }
        ],
        ctaText: "Best price for batch production lathes from Mech Chem Engineering Services.",
        image: "\images\machines\Facing & Gap Bed Lathe Machine.jpeg",
        altText: "capstan-lathe-machine-nagpur",
        metaTitle: "Capstan & Turret Lathe Machine Supplier Nagpur | Mech Chem Engineering",
        metaDescription: "Buy Capstan & Turret Lathe Machines in Nagpur for high volume batch production."
    },
    {
        name: "CNC Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "High precision, repeatability, and speed for modern production",
        shortDescription: "Computer-controlled operations eliminate human error, ideal for complex profiles and large batches.",
        description: "CNC lathe machines deliver high precision, repeatability, and speed for modern production environments. Controlled by a computer program, these machines eliminate human error and are ideal for complex profiles, threading, grooving, and turning operations with consistent accuracy across large production runs.",
        specifications: {
            "Swing Over Bed": "200mm – 500mm",
            "Max Turning Diameter": "150mm – 400mm",
            "Max Turning Length": "300mm – 1000mm",
            "Spindle Speed": "50 – 4000 RPM",
            "Motor Power": "5 HP – 20 HP",
            "CNC Controller": "Fanuc / Siemens / Syntec"
        },
        features: [
            "CNC controller for automatic operation",
            "High precision ball screw and linear guides",
            "Automatic tool turret with multiple stations",
            "Suitable for complex turning profiles",
            "Consistent accuracy across large batch production"
        ],
        applications: ["Auto component manufacturers", "Aerospace", "Defence", "Medical devices", "Precision engineering"],
        faqs: [
            { question: "What is a CNC lathe machine?", answer: "A computer-controlled machine that executes programmed operations like turning and boring with high precision." }
        ],
        ctaText: "Get free quote for CNC Lathes with Fanuc & Siemens controllers.",
        image: "\images\machines\Cnc lathe machine.jpeg",
        altText: "cnc-lathe-machine-nagpur",
        metaTitle: "CNC Lathe Machine Supplier in Nagpur | Mech Chem Engineering Services",
        metaDescription: "Buy CNC Lathe Machines in Nagpur. High precision, automatic turret, fast production."
    },
    {
        name: "All Geared / Geared Head Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "Reliability, low maintenance, and versatility",
        shortDescription: "Fully enclosed gearbox ensures consistent torque across all speeds, ideal for Indian workshops.",
        description: "All geared lathe machines use a fully enclosed gearbox for power transmission, delivering consistent torque across all speed ranges. These are the most commonly used lathe machines in Indian workshops due to their reliability, low maintenance, and versatility.",
        specifications: {
            "Swing Over Bed": "250mm – 630mm",
            "Distance Between Centres": "750mm – 4000mm",
            "Spindle Speed": "28 – 1400 RPM",
            "Motor Power": "2 HP – 15 HP",
            "Number of Speeds": "8 – 18"
        },
        features: [
            "Fully enclosed all-geared headstock",
            "Consistent power at all speeds",
            "Wide speed and feed range",
            "Suitable for turning, threading, boring, and facing",
            "Low maintenance gearbox"
        ],
        applications: ["General engineering workshops", "Fabrication units", "Auto workshops", "Pump manufacturers", "Training institutes"],
        faqs: [
            { question: "What is the advantage of all geared lathe over belt driven lathe?", answer: "Consistent torque, less maintenance, and better for heavy cutting without slippage." }
        ],
        ctaText: "Get best price & quick delivery for All Geared Lathes in Nagpur.",
        image: "\images\machines\All Geared Head Lathe Machine.jpeg",
        altText: "all-geared-lathe-machine-workshop",
        metaTitle: "All Geared Lathe Machine Supplier in Nagpur | Mech Chem Engineering",
        metaDescription: "Buy All Geared & Geared Head Lathe Machines in Nagpur. Wide speed range, low maintenance."
    },
    {
        name: "Belt Driven Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "Economical, simple to maintain, and quiet operation",
        shortDescription: "Uses a belt and pulley system, suitable for light to medium duty turning in small workshops.",
        description: "Belt driven lathe machines use a belt and pulley system for power transmission from the motor to the spindle. These are economical, simple to maintain, and suitable for light to medium duty turning operations in small workshops and training institutes.",
        specifications: {
            "Swing Over Bed": "150mm – 300mm",
            "Distance Between Centres": "500mm – 1500mm",
            "Spindle Speed": "50 – 1500 RPM",
            "Motor Power": "0.5 HP – 3 HP",
            "Drive Type": "Flat belt / V-belt"
        },
        features: [
            "Simple belt and pulley drive mechanism",
            "Economical and easy to maintain",
            "Smooth and quiet operation",
            "Suitable for light to medium duty work",
            "Ideal for small workshops and institutes"
        ],
        applications: ["ITI institutes", "Small job shops", "Training centres", "Light engineering workshops"],
        faqs: [
            { question: "What are the advantages of a belt driven lathe?", answer: "Affordable, quieter, and the belt acts as a safety slip mechanism against overloads." }
        ],
        ctaText: "Contact Mech Chem Engineering for free quote on economical lathes.",
        image: "\images\machines\Belt driven lathe machine.jpeg",
        altText: "belt-driven-lathe-machine-nagpur",
        metaTitle: "Belt Driven Lathe Machine Supplier in Nagpur | Mech Chem Engineering",
        metaDescription: "Buy Belt Driven Lathe Machines in Nagpur at lowest price. Ideal for ITI institutes & small workshops."
    }
];

// --- GRINDING MACHINES DATA ---
const grindingMachines = [
    {
        name: "Manual Surface Grinding Machine",
        category: "Grinding Machines",
        categoryDescription: grindingDesc,
        subTitle: "Precision Flat Surface Finishing Equipment",
        shortDescription: "The Manual Surface Grinding Machine is a precision machine tool designed to produce flat, smooth, and accurate surfaces on metal workpieces using a rotating abrasive grinding wheel.",
        description: "The Manual Surface Grinding Machine is a precision machine tool designed to produce flat, smooth, and accurate surfaces on metal workpieces using a rotating abrasive grinding wheel. The operator manually controls the table traverse and cross-feed movements using handwheels, giving complete tactile control over the grinding process. Ideal for tool rooms, die shops, maintenance workshops, and small-batch production environments where precision surface finishing of hardened steel, cast iron, aluminum, and non-ferrous components is required. The machine delivers excellent surface finish (Ra values) and tight flatness tolerances on molds, dies, gauges, fixtures, and machine parts.",
        specifications: {
            "Table Size (L × W)": "450×150 mm to 1000×300 mm",
            "Max. Grinding Length": "500 mm to 1,000 mm",
            "Max. Grinding Width": "150 mm to 320 mm",
            "Max. Grinding Height": "350 mm to 500 mm",
            "Longitudinal Travel": "500 mm to 1,050 mm",
            "Cross Travel": "200 mm to 350 mm",
            "Vertical Feed": "0.005 mm (per graduation)",
            "Spindle Speed": "2,800 RPM to 3,500 RPM",
            "Grinding Wheel Size": "200×20×31.75 mm to 350×40×127 mm",
            "Spindle Motor Power": "0.75 kW to 3 kW",
            "Magnetic Chuck Size": "Matching table size",
            "Machine Weight": "600 kg to 1,800 kg"
        },
        features: [
            "Precision-ground cast iron table with manual longitudinal and cross-feed handwheel control",
            "Electromagnetic permanent magnetic chuck for secure, burr-free workpiece clamping",
            "Spindle with pre-loaded angular contact bearings for vibration-free wheel rotation",
            "Fine vertical downfeed with graduated dial (0.005 mm resolution)",
            "Horizontal and vertical dovetail guideways with hand-scraped precision surfaces",
            "Wheel guard with coolant nozzle for controlled coolant application",
            "Wheel dressing unit (diamond dresser) mounted on the table for in-situ wheel truing",
            "Coolant tank and pump system with chip settling tray",
            "Table locking mechanism for fixed-position surface plunge grinding",
            "V-way and flat-way combination guideways for accurate movement"
        ],
        applications: ["Tool rooms", "Die shops", "Maintenance workshops", "Small-batch production", "Engineering industries"],
        faqs: [
            { question: "What materials can be ground on a manual surface grinding machine?", answer: "Hardened steel, mild steel, cast iron, tool steel, stainless steel, aluminum, brass, and non-ferrous alloys can be ground." },
            { question: "What is the purpose of the magnetic chuck?", answer: "The electromagnetic or permanent magnetic chuck generates a strong magnetic field that holds ferrous workpieces firmly on the table without mechanical clamping." },
            { question: "What is the difference between manual and hydraulic surface grinding machines?", answer: "In a manual machine, the table traverse and cross-feed are controlled by hand; in a hydraulic machine, the table reciprocates automatically via a hydraulic cylinder." }
        ],
        ctaText: "Need high-precision manual surface grinding? Contact us for technical details.",
        image: "/images/machines/Manual Surface Grinding Machine.png",
        altText: "Manual Surface Grinding Machine – precision surface grinder with manual table traverse and magnetic chuck",
        metaTitle: "Manual Surface Grinding Machine | Precision Flat Surface Finishing Equipment",
        metaDescription: "High-precision Manual Surface Grinding Machine for flat surface finishing of metal components. Explore key features and technical specifications."
    },
    {
        name: "Hydraulic Surface Grinding Machine",
        category: "Grinding Machines",
        categoryDescription: grindingDesc,
        subTitle: "Automatic Table Surface Grinder",
        shortDescription: "The Hydraulic Surface Grinding Machine uses a hydraulic drive system to automatically reciprocate the grinding table longitudinally.",
        description: "The Hydraulic Surface Grinding Machine is an advanced precision machine tool that uses a hydraulic drive system to automatically reciprocate the grinding table longitudinally at adjustable speeds, while cross-feed and vertical downfeed are applied incrementally after each pass. The hydraulic table traverse ensures smooth, consistent cutting speed across the full workpiece length, reducing operator fatigue and improving surface finish uniformity. Widely used in production grinding of molds, dies, machine components, gauges, and precision flat surfaces.",
        specifications: {
            "Table Size (L × W)": "550×200 mm to 3000×600 mm",
            "Max. Longitudinal Travel": "600 mm to 3,200 mm",
            "Max. Cross Travel": "250 mm to 650 mm",
            "Max. Workpiece Height": "350 mm to 600 mm",
            "Table Speed (Hydraulic)": "2 m/min to 25 m/min",
            "Auto Cross-Feed Range": "0.1 mm to 5 mm per stroke",
            "Vertical Feed": "0.005 mm (per graduation)",
            "Spindle Speed": "2,800 RPM to 3,500 RPM",
            "Grinding Wheel Size": "250×25×76.2 mm to 450×50×203 mm",
            "Spindle Motor Power": "1.5 kW to 11 kW",
            "Hydraulic Motor Power": "0.75 kW to 3 kW",
            "Machine Weight": "1,200 kg to 8,000 kg"
        },
        features: [
            "Hydraulic auto-reciprocating table with infinitely variable speed control",
            "Automatic cross-feed at table reversal with adjustable increment",
            "Fine vertical downfeed with micrometer dial (0.005 mm per graduation)",
            "Precision-hardened and ground V-flat guideway system",
            "Electromagnetic chuck with demagnetiser for quick loading",
            "Motorised or hand cross-feed with selectable direction",
            "Coolant system with magnetic separator and paper filter",
            "Spindle with precision angular contact bearings",
            "Table stroke adjustable by trip dogs for precise positioning"
        ],
        applications: ["Automotive industry", "Aerospace components", "Toolrooms", "Large-scale production units", "Die and Mold manufacturing"],
        faqs: [
            { question: "What is the advantage of hydraulic table drive over manual traverse?", answer: "Hydraulic drive provides infinitely variable and consistent table speed, eliminating speed variation of manual operation and reducing operator fatigue." },
            { question: "What is automatic cross-feed?", answer: "Automatic cross-feed advances the table laterally by a set increment at each reversal, ensuring consistent step-over for each grinding pass." }
        ],
        ctaText: "Optimise your production. Get in touch for a Hydraulic Surface Grinding Machine quote.",
        image: "/images/machines/Hydraulic Surface Grinding Machine.png",
        altText: "Hydraulic Surface Grinding Machine – automatic hydraulic table reciprocating surface grinder",
        metaTitle: "Hydraulic Surface Grinding Machine | Automatic Table Surface Grinder",
        metaDescription: "High-performance Hydraulic Surface Grinding Machine with automatic table reciprocation for consistent flat surface finishing."
    },
    {
        name: "Cylindrical Grinding Machine",
        category: "Grinding Machines",
        categoryDescription: grindingDesc,
        subTitle: "OD & ID Precision Cylindrical Grinder",
        shortDescription: "The Cylindrical Grinding Machine is designed to grind the external (OD) and internal (ID) cylindrical surfaces of workpieces like shafts and spindles.",
        description: "The Cylindrical Grinding Machine is a precision machine tool designed to grind the external (OD) and internal (ID) cylindrical surfaces of workpieces such as shafts, spindles, pins, bores, sleeves, and rollers to tight dimensional tolerances and excellent surface finish. Available in plain (external OD) and universal (OD and ID) configurations, cylindrical grinders are indispensable in the production of precision shafts, hydraulic cylinders, automotive components, and industrial spindles.",
        specifications: {
            "Max. Grinding Diameter (OD)": "50 mm to 500 mm",
            "Max. Grinding Length": "500 mm to 3,000 mm",
            "Centre Height": "125 mm to 250 mm",
            "Workpiece Rotation Speed": "40 RPM to 500 RPM (variable)",
            "Grinding Wheel Size (OD)": "350×40×127 mm to 600×63×305 mm",
            "Table Traverse Speed": "0.05 m/min to 6 m/min (hydraulic)",
            "Wheelhead Infeed": "0.001 mm to 0.005 mm",
            "Taper Grinding Angle": "±10° (table swivel)",
            "Wheelhead Motor Power": "3 kW to 15 kW",
            "Machine Weight": "2,000 kg to 12,000 kg"
        },
        features: [
            "Universal or plain cylindrical configuration for OD and/or ID grinding",
            "Precision headstock with variable-speed workpiece rotation",
            "Hydraulic or manual longitudinal table traverse",
            "Swiveling workhead and table for taper grinding up to ±10 degrees",
            "Internal grinding (IG) spindle attachment for universal models",
            "High-pressure coolant system for effective chip flushing",
            "Automatic spark-out cycle for improved dimensional accuracy"
        ],
        applications: ["Precision shafts manufacturing", "Hydraulic cylinders", "Automotive components", "Bearing journals", "Industrial spindles"],
        faqs: [
            { question: "What is the difference between plain and universal cylindrical grinding machines?", answer: "A plain cylindrical grinder is solely for external (OD) grinding. A universal model can perform both OD and ID grinding using an internal grinding spindle attachment." },
            { question: "Can taper surfaces be ground?", answer: "Yes, the workpiece table or wheelhead can be swiveled to grind tapered shafts, Morse taper bores, and conical surfaces." }
        ],
        ctaText: "Looking for precision shaft grinding? Contact us for a quote today.",
        image: "/images/machines/Cylindrical Grinding Machine.png",
        altText: "Cylindrical Grinding Machine – precision OD cylindrical grinder for shafts",
        metaTitle: "Cylindrical Grinding Machine | OD & ID Precision Cylindrical Grinder",
        metaDescription: "Precision Cylindrical Grinding Machine for external and internal grinding of shafts, spindles, and bores."
    },
    {
        name: "Tool & Cutter Grinding Machine",
        category: "Grinding Machines",
        categoryDescription: grindingDesc,
        subTitle: "Precision Cutting Tool Sharpening Equipment",
        shortDescription: "The Tool & Cutter Grinding Machine is designed to sharpen, re-grind, and manufacture a wide range of cutting tools.",
        description: "The Tool & Cutter Grinding Machine is a highly versatile precision grinding machine designed to sharpen, re-grind, and manufacture a wide range of cutting tools including end mills, face mills, drills, reamers, taps, lathe tools, and form tools. The machine uses various grinding wheel profiles and a universal worktable with swivel and tilt capabilities to accurately grind cutting edges, relief angles, and flute geometries on HSS and carbide tools.",
        specifications: {
            "Table Longitudinal Travel (X)": "300 mm to 600 mm",
            "Table Cross Travel (Y)": "150 mm to 300 mm",
            "Vertical Travel (Z)": "300 mm to 500 mm",
            "Table Swivel Range": "360°",
            "Wheelhead Swivel": "360°",
            "Workhead Tilt": "±45°",
            "Spindle Speed (Horizontal)": "2,800 RPM to 5,000 RPM",
            "Spindle Speed (Vertical)": "3,600 RPM to 8,000 RPM",
            "Collet Range": "3 mm to 32 mm",
            "Machine Weight": "350 kg to 900 kg"
        },
        features: [
            "Universal worktable with X, Y, Z axis movement and swivel/tilt",
            "Motorised vertical and horizontal grinding spindles",
            "Collet chuck system for accurate tool centring",
            "Universal work head with 360-degree rotation",
            "Diamond and CBN wheel compatibility for carbide and HSS tools",
            "Precision dovetail slides for smooth movement"
        ],
        applications: ["Tool rooms", "Cutting tool manufacturing", "Maintenance workshops", "Precision engineering"],
        faqs: [
            { question: "What cutting tools can be ground on this machine?", answer: "End mills, drills, reamers, taps, lathe turning tools, and gear cutters can all be sharpened and re-ground." },
            { question: "Can carbide tools be ground?", answer: "Yes, diamond grinding wheels are used for carbide tools. Wet grinding with coolant is recommended to prevent thermal cracking." }
        ],
        ctaText: "Ensure maximum tool life. Contact us for a Tool & Cutter Grinding Machine quote.",
        image: "/images/machines/Tool Cutter Grinding Machine.png",
        altText: "Tool & Cutter Grinding Machine – universal tool and cutter grinder for sharpening",
        metaTitle: "Tool & Cutter Grinding Machine | Precision Cutting Tool Sharpening Equipment",
        metaDescription: "Versatile Tool & Cutter Grinding Machine for sharpening and re-grinding end mills, drills, reamers, and milling cutters."
    },
    {
        name: "Pedestal Grinding Machine",
        category: "Grinding Machines",
        categoryDescription: grindingDesc,
        subTitle: "Double-End Bench & Floor Grinder for Workshop Use",
        shortDescription: "Robust floor-mounted grinding machine designed for general-purpose deburring and tool sharpening.",
        description: "The Pedestal Grinding Machine (also known as a floor grinder) is a robust, floor-mounted machine fitted with two abrasive grinding wheels on either end of a common motor shaft. It is designed for general-purpose deburring, rough grinding, tool sharpening, descaling, and weld spatter removal. The heavy cast iron pedestal base provides stability during heavy grinding operations.",
        specifications: {
            "Wheel Diameter": "150 mm to 400 mm",
            "Wheel Width": "20 mm to 50 mm",
            "Spindle Speed": "1,400 RPM to 3,000 RPM",
            "Motor Power": "0.37 kW to 3 kW",
            "Wheel Grit (Coarse)": "24 to 36 grit",
            "Wheel Grit (Fine)": "60 to 80 grit",
            "Tool Rest Gap (max.)": "3 mm (safety standard)",
            "Overall Height": "900 mm to 1,200 mm",
            "Machine Weight": "40 kg to 150 kg"
        },
        features: [
            "Double-end spindle with two abrasive wheels (coarse + fine)",
            "Heavy cast iron pedestal base for floor mounting stability",
            "Adjustable tool rests and transparent eye shields for spark protection",
            "Sealed ball bearings for low-noise, long-life operation",
            "Cast iron wheel guards with spark deflectors",
            "ON/OFF switch with thermal overload protection"
        ],
        applications: ["Fabrication shops", "Foundries", "Maintenance departments", "General workshops"],
        faqs: [
            { question: "What is the maximum gap allowed between the tool rest and the grinding wheel?", answer: "Safety standards require the tool rest gap to be no more than 3 mm from the grinding wheel face to prevent accidents." },
            { question: "How should a new grinding wheel be inspected before mounting?", answer: "New wheels should be visually inspected for cracks and then ring-tested by tapping gently with a non-metallic object." }
        ],
        ctaText: "Essential for every workshop. Contact Mech Chem Engineering Services today.",
        image: "/images/machines/Pedestal Grinding Machine.png",
        altText: "Pedestal Grinding Machine – double-end floor-mounted bench grinder for workshop",
        metaTitle: "Pedestal Grinding Machine | Double-End Bench & Floor Grinder",
        metaDescription: "Heavy-duty Pedestal Grinding Machine for deburring, tool sharpening, and rough grinding."
    }
];

// --- CUTTING MACHINES DATA ---
const cuttingMachines = [
    {
        name: "Band Saw Machine",
        category: "Cutting Machines",
        categoryDescription: cuttingDesc,
        subTitle: "High-Efficiency Precision Metal Cutting Solution",
        shortDescription: "The Band Saw Machine is a high-efficiency, precision metal cutting machine that uses a continuous loop of toothed blade for clean and economical material cutting.",
        description: "The Band Saw Machine is a high-efficiency, precision metal cutting machine that uses a continuous loop of toothed blade (band saw blade) running over two or more wheels to cut through solid bars, hollow sections, pipes, tubes, structural profiles, billets, and non-ferrous materials. Available in horizontal (gravity or hydraulic feed) and vertical configurations, band saw machines deliver straight, angular, and miter cuts with minimal material wastage due to the thin kerf of the blade. The controlled cutting action produces low heat, burr-free cuts, and smooth cut surfaces, making band saws the preferred choice in fabrication shops, steel service centres, and automotive component manufacturers.",
        specifications: {
            "Cutting Capacity (Round)": "175 mm to 1000 mm",
            "Cutting Capacity (Square)": "150 mm to 900 mm",
            "Blade Size": "27 × 0.9 × 3000 mm to 67 × 1.6 × 8500 mm",
            "Blade Speed": "20 to 100 m/min (Variable/Stepped)",
            "Main Motor Power": "1.5 kW to 11 kW",
            "Hydraulic Motor Power": "0.37 kW to 2.2 kW",
            "Coolant Motor Power": "0.09 kW to 0.12 kW",
            "Blade Tension": "Manual or Hydraulic",
            "Machine Weight": "350 kg to 8,000 kg"
        },
        features: [
            "Horizontal gravity-feed or hydraulic feed bow for controlled cutting pressure",
            "Variable blade speed control (VFD) to match material type and hardness",
            "Hardened tungsten carbide blade guides for precise blade alignment",
            "Heavy-duty cast iron saw frame and vice for vibration-free cutting",
            "Adjustable blade tensioning system to prevent blade breakage",
            "Automatic shut-off at the end of the cut for operator safety",
            "Integrated coolant system with pump and chip tray for blade cooling",
            "Swiveling saw frame or vice for angular cutting up to 45° or 60°",
            "Hydraulic vice clamping for secure workpiece holding (optional)"
        ],
        applications: ["Fabrication shops", "Steel service centres", "Automotive industry", "General engineering", "Aerospace manufacturing"],
        faqs: [
            { question: "What are the advantages of a band saw over a power hacksaw?", answer: "Band saws offer faster cutting speeds, thinner kerf (less material wastage), continuous cutting action, and the ability to cut larger sections with better accuracy." },
            { question: "Why is coolant necessary during band sawing?", answer: "Coolant reduces friction and heat at the blade-material interface, extending blade life, improving surface finish, and flushing away chips." },
            { question: "Can a band saw cut at an angle?", answer: "Yes, many horizontal band saws feature a swiveling saw bow or swiveling vice to perform precise angular cuts (typically 0° to 45°)." }
        ],
        ctaText: "Need high-speed precision cutting? Contact us for Band Saw Machine details.",
        image: "/images/machines/Band Saw Machine.png",
        altText: "Band Saw Machine – industrial horizontal band saw machine for cutting metal bars and pipes",
        metaTitle: "Band Saw Machine | Industrial Metal Cutting Band Saw for Bars & Profiles",
        metaDescription: "Heavy-duty Band Saw Machine for precise straight and angular cutting of solid bars, pipes, and structural profiles. Explore features and technical specs."
    },
    {
        name: "Power Hacksaw Machine",
        category: "Cutting Machines",
        categoryDescription: cuttingDesc,
        subTitle: "Simple and Reliable Reciprocating Metal Cutting Equipment",
        shortDescription: "The Power Hacksaw Machine is a robust and economical metal cutting tool that uses a reciprocating blade to cut through various metal sections.",
        description: "The Power Hacksaw Machine is a robust, simple, and economical metal cutting tool that uses a straight, rigid high-speed steel (HSS) blade with a reciprocating (back-and-forth) motion to cut through metal bars, rods, pipes, and structural sections. Known for its durability and ease of maintenance, the power hacksaw is a staple in maintenance workshops, small fabrication units, and general engineering shops. It features a mechanical or hydraulic lift on the return stroke to protect the blade teeth and ensure efficient cutting on the forward stroke.",
        specifications: {
            "Cutting Capacity (Round)": "150 mm to 450 mm",
            "Cutting Capacity (Square)": "125 mm to 400 mm",
            "Blade Size (Length)": "12\" (300 mm) to 24\" (600 mm)",
            "No. of Strokes per Min": "60 to 100 SPM (Variable/Fixed)",
            "Stroke Length": "100 mm to 150 mm",
            "Main Motor Power": "0.75 kW to 3.7 kW",
            "Vice Opening": "150 mm to 450 mm",
            "Coolant Pump": "Self-priming centrifugal type",
            "Machine Weight": "150 kg to 1,200 kg"
        },
        features: [
            "Rigid cast iron base and saw frame for stability and long-term accuracy",
            "Hydraulic or mechanical lift on the return stroke to prevent blade wear",
            "Adjustable hydraulic feed control to regulate cutting pressure",
            "Quick-clamping vice with swiveling jaw for 45° angular cutting",
            "Automatic limit switch to stop the machine after the cut is completed",
            "Built-in coolant system to prevent blade overheating",
            "V-belt drive with protective guard for safety and smooth power transfer",
            "Easy blade tensioning and replacement mechanism"
        ],
        applications: ["Maintenance workshops", "Small fabrication units", "General engineering shops", "Technical institutes", "Construction sites"],
        faqs: [
            { question: "What is the difference between a power hacksaw and a band saw?", answer: "A power hacksaw uses a reciprocating blade that cuts on the forward stroke only, making it simpler and more economical but slower than a band saw which cuts continuously." },
            { question: "Why does the blade lift on the return stroke?", answer: "The blade lifts to prevent the tooth tips from dragging across the cut surface, which avoids premature blade wear and heat buildup." },
            { question: "What maintenance does a power hacksaw machine require?", answer: "Regular maintenance includes lubricating the drive mechanism, checking blade tension, cleaning the coolant system, and verifying the limit switch operation." }
        ],
        ctaText: "Reliable cutting for your workshop. Contact us for Power Hacksaw pricing.",
        image: "/images/machines/Power Hacksaw Machine.png",
        altText: "Power Hacksaw Machine – reciprocating metal cutting machine for bars and rods",
        metaTitle: "Power Hacksaw Machine | Robust Reciprocating Metal Cutting Equipment",
        metaDescription: "Durable and economical Power Hacksaw Machine for metal cutting in workshops and fabrication units. Check technical specifications and features."
    }
];

// --- THREADING MACHINES DATA ---
const threadingMachines = [
    {
        name: "Thread Rolling Machine",
        category: "Threading Machines",
        categoryDescription: threadingDesc,
        subTitle: "Cold Thread Rolling for Precision External Threads",
        shortDescription: "The Thread Rolling Machine is a high-precision, high-speed cold-forming machine used to produce external threads on bolts, studs, screws, shafts, and fasteners.",
        description: "The Thread Rolling Machine is a high-precision, high-speed cold-forming machine used to produce external threads on bolts, studs, screws, shafts, and fasteners by plastically deforming the workpiece material between hardened thread rolling dies — without cutting or removing any material. Unlike thread cutting, thread rolling displaces and compresses the material grain structure, resulting in threads with superior tensile strength, fatigue resistance, and surface finish compared to cut threads. Available in flat die and cylindrical die (2-die or 3-die) configurations, thread rolling machines are widely used in fastener manufacturing, automotive component production, aerospace hardware manufacturing, and precision engineering industries for high-volume, consistent thread production at significantly higher speeds than conventional thread cutting methods.",
        specifications: {
            "Thread Diameter Range": "M3 to M52 (model-dependent)",
            "Thread Pitch Range": "0.5 mm to 5 mm",
            "Rolling Speed": "20 m/min to 150 m/min",
            "Die Size (Flat Die)": "Up to 300×60×25 mm (L×H×W)",
            "Die Material": "High-speed steel (HSS) or carbide-tipped",
            "Production Rate": "60 to 600 pieces per minute (model-dependent)",
            "Feed System": "Automatic hopper feed / Manual feed",
            "Rolling Mode": "In-feed / Through-feed / Tangential feed",
            "Motor Power": "1.5 kW to 15 kW",
            "Die Pressure Adjustment": "Hydraulic / Mechanical screw adjustment",
            "Thread Standards": "Metric, UNC, UNF, BSW, BSF, ACME",
            "Machine Weight": "300 kg to 3,000 kg"
        },
        features: [
            "Flat die or cylindrical (2-die / 3-die) rolling configuration for different thread forms and production volumes",
            "Hardened and precision-ground thread rolling dies for long die life and consistent thread accuracy",
            "Variable speed drive (VFD) for adjustable rolling speed to suit different materials and thread pitches",
            "Automatic feed hopper and escapement system for high-speed continuous blank feeding",
            "Hydraulic or mechanical die pressure adjustment for consistent thread form across the full production run",
            "In-feed and through-feed rolling modes for different workpiece lengths and thread configurations",
            "Precision die alignment system for accurate pitch and thread form control",
            "Thread form compatibility: Metric (M), UNC, UNF, BSW, BSF, ACME, and special thread profiles",
            "Hardened guide rails and end stop for consistent blank positioning before rolling",
            "Automatic blank ejection after thread rolling for uninterrupted production flow",
            "Digital stroke counter and production batch counter for output monitoring",
            "Safety guards with emergency stop for operator protection during high-speed operation"
        ],
        applications: [
            "Fastener manufacturing",
            "Automotive component production",
            "Aerospace hardware manufacturing",
            "Precision engineering industries"
        ],
        faqs: [
            { 
                question: "What is the difference between thread rolling and thread cutting?", 
                answer: "Thread cutting removes material to form the thread profile using a tap, die, or lathe tool, which severs the grain flow of the metal. Thread rolling cold-forms the thread by displacing material between hardened dies, preserving and compressing the grain structure. Rolled threads are 20–30% stronger in tensile strength and significantly more fatigue-resistant than cut threads of the same size." 
            },
            { 
                question: "What materials can be thread rolled?", 
                answer: "Thread rolling is suitable for ductile materials with elongation greater than 12%, including mild steel, alloy steel, stainless steel, aluminum, brass, copper, and titanium. Hardened or brittle materials are not suitable for thread rolling as they lack the ductility needed for cold forming." 
            },
            { 
                question: "What thread forms can be produced?", 
                answer: "Thread rolling machines can produce Metric (M), Unified (UNC/UNF), British Standard Whitworth (BSW), British Standard Fine (BSF), ACME, Trapezoidal, worm threads, knurls, and special custom thread profiles by changing the rolling dies." 
            },
            { 
                question: "What is the difference between flat die and cylindrical die thread rolling?", 
                answer: "Flat die machines use two flat reciprocating dies — one stationary and one moving — and are ideal for high-speed production of short fasteners. Cylindrical die machines use two or three rotating cylindrical dies and are better suited for longer workpieces, precision threads, and through-feed rolling of shafts and studs." 
            },
            { 
                question: "How long do thread rolling dies last?", 
                answer: "Die life depends on material, thread size, and rolling speed. Typically, HSS flat dies produce 500,000 to 2,000,000 pieces before requiring regrinding. Carbide dies offer significantly longer life for abrasive materials and high-volume production runs." 
            }
        ],
        ctaText: "High-speed Thread Rolling Machine for cold-forming precise, strong external threads. Explore features, technical specs, and FAQs.",
        image: "/images/machines/Thread Rolling Machine.png",
        altText: "Thread Rolling Machine – flat die or cylindrical die thread rolling machine for cold-forming external threads on bolts and studs",
        metaTitle: "Thread Rolling Machine | Cold Thread Rolling for Precision External Threads",
        metaDescription: "High-speed Thread Rolling Machine for cold-forming precise, strong external threads on bolts, studs, shafts, and fasteners. Explore features, technical specs, and FAQs."
    },
    {
        name: "Bolt & Nut Thread Rolling Machine",
        category: "Threading Machines",
        categoryDescription: threadingDesc,
        subTitle: "Fastener Thread Rolling Equipment",
        shortDescription: "Dedicated Bolt & Nut Thread Rolling Machine for high-volume production of precision threads on bolts, nuts, and fasteners.",
        description: "The Bolt & Nut Thread Rolling Machine is a dedicated, high-speed cold-forming machine specifically designed for the mass production of threads on bolts, nuts, screws, and other fasteners in the fastener manufacturing industry. Engineered for continuous, high-volume production, the machine uses precision-hardened flat or cylindrical thread rolling dies to cold-form accurate external threads on bolt blanks and internal threads on nut blanks at production rates far exceeding conventional thread cutting methods. The cold-rolling process enhances the mechanical strength of the fastener threads through grain flow compaction, producing bolts and nuts with superior fatigue resistance, smooth thread finish, and consistent pitch accuracy — making them ideal for automotive, construction, heavy engineering, railway, and infrastructure applications where fastener reliability and load capacity are critical.",
        specifications: {
            "Bolt Thread Diameter Range": "M4 to M64 (model-dependent)",
            "Nut Thread Diameter Range": "M4 to M48 (model-dependent)",
            "Thread Pitch Range": "0.7 mm to 6 mm",
            "Production Rate (Bolts)": "60 to 500 pieces per minute",
            "Production Rate (Nuts)": "40 to 300 pieces per minute",
            "Die Type": "Flat die / Cylindrical die (2-die or 3-die)",
            "Die Material": "HSS / Carbide-tipped",
            "Rolling Mode": "Through-feed / In-feed",
            "Feed System": "Vibratory bowl feeder / Hopper auto-feed",
            "Motor Power": "2.2 kW to 22 kW",
            "Thread Standards Supported": "Metric, UNC, UNF, BSW, BSF, DIN, ISO",
            "Machine Weight": "500 kg to 5,000 kg"
        },
        features: [
            "Dedicated bolt and nut thread rolling configuration optimised for fastener production",
            "High-speed automatic blank feeding system with vibratory bowl feeder or hopper feed",
            "Precision flat die or cylindrical die thread rolling for consistent thread form and pitch accuracy",
            "Adjustable die gap and pressure setting for different bolt diameters and thread pitches",
            "Through-feed rolling mode for continuous high-speed production of bolts and studs",
            "In-feed rolling mode for precise thread length control on shoulder bolts and special fasteners",
            "Hardened guide channel and end stop for accurate blank alignment before rolling entry",
            "Die pressure monitoring system for real-time quality control during production",
            "Automatic ejection chute with finished part collection bin for uninterrupted production",
            "Quick die change system for fast changeover between different thread sizes and pitches",
            "Variable speed control (VFD) for optimising rolling speed for each fastener material",
            "Production counter with batch preset for automated production run management"
        ],
        applications: [
            "Automotive applications",
            "Construction industry",
            "Heavy engineering",
            "Railway and infrastructure applications"
        ],
        faqs: [
            { 
                question: "What is the production advantage of a bolt and nut thread rolling machine over thread cutting?", 
                answer: "Thread rolling machines produce threads at 5 to 10 times the speed of thread cutting operations. A single thread rolling machine can produce 100 to 500 bolts per minute with consistent thread accuracy, whereas thread cutting with taps or dies is limited to 10 to 60 pieces per minute and involves higher tooling costs and more frequent tool replacement." 
            },
            { 
                question: "Does thread rolling improve the strength of bolts and nuts?", 
                answer: "Yes. The cold-forming process in thread rolling compacts and realigns the grain structure of the metal along the thread profile, increasing the tensile strength and fatigue resistance of the thread by 20 to 30% compared to cut threads. This is particularly important for high-strength bolts used in structural, automotive, and aerospace applications." 
            },
            { 
                question: "What fastener sizes can be produced?", 
                answer: "Bolt and nut thread rolling machines cover a wide range from small M4 fasteners to large M64 bolts and M48 nuts, depending on the machine model and die size. Custom dies can be made for special thread profiles, coarse pitch, and fine pitch threads as per DIN, ISO, ASTM, and BS standards." 
            },
            { 
                question: "How quickly can dies be changed for different thread sizes?", 
                answer: "Modern bolt and nut thread rolling machines feature quick-change die systems that allow die replacement and realignment in 15 to 30 minutes. Pre-set die holders and reference marks speed up the changeover process, minimising downtime between production runs of different fastener sizes." 
            },
            { 
                question: "What quality standards can rolled bolt and nut threads meet?", 
                answer: "Rolled threads on bolts and nuts can meet international standards including ISO 724 (Metric threads), DIN 13, ASME B1.1 (UNC/UNF), and BS 3643. Thread quality parameters including pitch accuracy, thread form, major and minor diameters, and surface finish are controlled by die precision and machine setup, and verified using thread gauges (go / no-go gauges) during production." 
            }
        ],
        ctaText: "Dedicated Bolt & Nut Thread Rolling Machine for high-volume production of precision threads. View features, technical specs, and FAQs.",
        image: "/images/machines/Bolt Nut Thread Rolling Machine.png",
        altText: "Bolt and Nut Thread Rolling Machine – automatic fastener thread rolling machine for high-volume bolt and nut thread production",
        metaTitle: "Bolt & Nut Thread Rolling Machine | Fastener Thread Rolling Equipment",
        metaDescription: "Dedicated Bolt & Nut Thread Rolling Machine for high-volume production of precision threads on bolts, nuts, and fasteners. View features, technical specs, and FAQs."
    }
];

// --- WELDING MACHINES DATA ---
const weldingMachines = [
    {
        name: "Arc Welding Machine",
        category: "Welding Machines",
        categoryDescription: weldingDesc,
        subTitle: "Industrial SMAW Stick Welder for Heavy Fabrication",
        shortDescription: "The Arc Welding Machine (SMAW) is one of the most widely used and versatile welding machines in industrial and construction applications.",
        description: "The Arc Welding Machine (also known as a Stick Welder or SMAW – Shielded Metal Arc Welding machine) is one of the most widely used and versatile welding machines in industrial and construction applications. It generates an electric arc between a consumable coated electrode (stick) and the base metal workpiece, producing intense heat that melts both the electrode and the base metal to form a strong fusion weld joint. The electrode coating melts simultaneously to produce a shielding gas and slag layer that protect the molten weld pool from atmospheric contamination. Available in transformer-based, rectifier-based (DC), and inverter-based models, arc welding machines are used across structural steel fabrication, shipbuilding, pipeline welding, construction, maintenance, repair, and heavy engineering industries for welding mild steel, stainless steel, cast iron, and low-alloy steels in all positions.",
        specifications: {
            "Welding Current Range": "20 A to 400 A / 500 A (model-dependent)",
            "Rated Duty Cycle": "60% to 100% at maximum current",
            "Input Power / Voltage": "220V (Single Phase) / 415V (Three Phase), 50/60 Hz",
            "Open Circuit Voltage (OCV)": "60V to 90V",
            "Compatible Electrode Diameter": "1.6 mm to 5.0 mm / 6.0 mm",
            "Insulation Class": "Class F / Class H",
            "Protection Class": "IP21S / IP23",
            "Cooling Type": "Forced Air Cooling (Fan)",
            "Technology Type": "Inverter IGBT / Core Transformer",
            "Machine Weight": "5 kg (portable inverter) to 120 kg (heavy rectifier)"
        },
        features: [
            "Advanced IGBT inverter technology for superior arc stability and energy efficiency",
            "Built-in Hot Start function for easy arc ignition with cold electrodes",
            "Adjustable Arc Force control to prevent electrode sticking in the weld pool",
            "Anti-Stick technology that reduces welding current if the electrode shorts out",
            "Digital display for accurate and real-time preset welding current adjustment",
            "Thermal overload protection with auto-shutoff and LED warning indicator",
            "VRD (Voltage Reduction Device) for enhanced operator safety in damp environments",
            "Lightweight, compact, and portable design with a heavy-duty carrying handle",
            "Wide input voltage tolerance for stable operation with field generators"
        ],
        applications: [
            "Structural steel fabrication",
            "Shipbuilding and marine engineering",
            "Pipeline laying and cross-country welding",
            "On-site construction and infrastructure projects",
            "Maintenance, plant repair, and automotive workshops"
        ],
        faqs: [
            { 
                question: "What is the function of the coating (flux) on an arc welding electrode?", 
                answer: "The flux coating melts during welding to generate a protective shielding gas envelope around the arc and forms a slag layer over the hot weld bead. This protects the molten metal from oxygen and nitrogen contamination, stabilises the arc, adds alloying elements, and controls weld bead cooling." 
            },
            { 
                question: "What is duty cycle and why is it important?", 
                answer: "Duty cycle is the percentage of a 10-minute period that a welding machine can safely operate at a specific current without overheating. For example, a 60% duty cycle at 300A means the machine can weld continuously for 6 minutes but must rest for 4 minutes with the fan running." 
            },
            { 
                question: "What is the difference between AC and DC arc welding?", 
                answer: "AC (Alternating Current) welding changes direction 50/60 times a second and is ideal for preventing arc blow in magnetic metals. DC (Direct Current) welding flows in one direction, providing a smoother arc, easier starting, less spatter, and better control. DC straight polarity (DCEN) offers faster deposition, while DC reverse polarity (DCEP) provides deeper penetration." 
            }
        ],
        ctaText: "Robust Arc Welding Machine for stick welding of mild steel, stainless steel, and cast iron. Explore key features, technical specifications, and FAQs for industrial welding applications.",
        image: "/images/machines/Arc Welding Machine.png",
        altText: "Arc Welding Machine – industrial SMAW stick arc welding machine for heavy steel fabrication and structural welding",
        metaTitle: "Arc Welding Machine | Industrial SMAW Stick Welder for Heavy Fabrication",
        metaDescription: "Robust Arc Welding Machine for stick welding of mild steel, stainless steel, and cast iron. Explore key features, technical specifications, and FAQs for industrial welding applications."
    },
    {
        name: "MIG Welding Machine",
        category: "Welding Machines",
        categoryDescription: weldingDesc,
        subTitle: "High-Speed GMAW Wire Welder for Production Fabrication",
        shortDescription: "The MIG Welding Machine is a semi-automatic gas metal arc welding process that offers high deposition rates and exceptional speed.",
        description: "The MIG Welding Machine (Gas Metal Arc Welding – GMAW or Flux-Cored Arc Welding – FCAW) is a semi-automatic welding process widely preferred for its exceptional speed, high deposition rates, and ease of operation in production environments. It utilizes a continuous solid wire electrode fed automatically through a welding gun, combined with an external shielding gas (such as Carbon Dioxide, Argon, or gas mixes) to protect the weld pool from atmospheric gases. MIG machines can also use flux-cored wire (FCAW) for gasless outdoor operations. They are the go-to solution for high-volume fabrication of structural steel, automotive assemblies, sheet metal products, and heavy machinery parts.",
        specifications: {
            "Welding Current Range": "30 A to 400 A / 600 A (model-dependent)",
            "Rated Duty Cycle": "60% to 100% at maximum current",
            "Wire Feed Speed Range": "1.5 to 20 meters per minute",
            "Compatible Wire Diameters": "0.8 mm, 1.0 mm, 1.2 mm, 1.6 mm",
            "Wire Spool Capacity": "5 kg / 15 kg standard spools",
            "Input Power / Voltage": "3-Phase 415V ±15%, 50/60 Hz",
            "Wire Feeder Type": "Integrated or Remote 4-Roll Drive Feeder",
            "Shielding Gas Compatibility": "CO2, Argon, Argon-CO2 Mix, Helium",
            "Insulation / Protection Class": "Class H / IP23S",
            "Machine Weight": "25 kg (compact inverter) to 95 kg (remote feeder type)"
        },
        features: [
            "Advanced synergic control system that automatically matches wire feed speed to welding voltage",
            "Heavy-duty 4-roll geared wire drive system for smooth, slip-free wire feeding over long torches",
            "Dual process capability: supports both solid wire (GMAW) and flux-cored wire (FCAW)",
            "Adjustable electronic inductance to control arc crispness, penetration profile, and spatter levels",
            "Burnback control to prevent the wire from freezing in the weld pool or melting back into the contact tip",
            "2T / 4T trigger latching options for comfortable long-distance production welding",
            "Gas pre-flow and post-flow timing adjustments to ensure full weld start and stop shielding",
            "Spool gun compatibility for trouble-free feeding of soft aluminium wires",
            "Digital meters display voltage and current settings for weld procedure verification"
        ],
        applications: [
            "High-volume manufacturing and assembly lines",
            "Automotive manufacturing and chassis fabrication",
            "Sheet metal processing and enclosure fabrication",
            "Structural steel frames and metal furniture creation",
            "Heavy earthmoving equipment manufacturing"
        ],
        faqs: [
            { 
                question: "What shielding gas should be used for MIG welding?", 
                answer: "100% CO2 is the most economical choice for mild steel, giving deep penetration but more spatter. An Argon-CO2 mix (typically 80/20 or 75/25) is preferred for mild steel to achieve a smoother, low-spatter spray arc. Pure Argon is mandatory for welding aluminium, and an Argon-Helium-CO2 tri-mix is used for stainless steel." 
            },
            { 
                question: "What is the difference between solid wire and flux-cored wire?", 
                answer: "Solid MIG wire requires an external shielding gas cylinder and works best indoors on clean metal. Flux-cored wire (FCAW) contains flux inside the core that creates its own shielding when melted. It does not require an external gas tank, handles rusty or dirty metals better, and can be used outdoors in windy conditions." 
            },
            { 
                question: "What causes wire birds-nesting and how can it be avoided?", 
                answer: "Birds-nesting occurs when the welding wire tangles up at the drive rolls. It is caused by improper drive roll tension, using the wrong drive roll groove (V-groove for steel vs. U-groove for aluminium), a clogged torch liner, or a worn-out contact tip. Regular maintenance and setting correct tension prevent this." 
            }
        ],
        ctaText: "High-productivity MIG welding solutions for production shops. Contact us for technical details and quotes.",
        image: "/images/machines/MIG Welding Machine.png",
        altText: "MIG Welding Machine – semi-automatic gas metal arc welding machine with external wire feeder",
        metaTitle: "MIG Welding Machine | High-Speed GMAW Wire Welder for Production",
        metaDescription: "High-productivity MIG Welding Machine for gas metal arc welding (GMAW). Features automatic wire feeding, high deposition rates, and synergic controls."
    },
    {
        name: "TIG Welding Machine",
        category: "Welding Machines",
        categoryDescription: weldingDesc,
        subTitle: "Precision GTAW Welder for High-Quality Stainless & Aluminium Fabrication",
        shortDescription: "The TIG Welding Machine delivers unparalleled precision, control, and cleanliness for high-specification metal joints.",
        description: "The TIG Welding Machine (Tungsten Inert Gas or GTAW – Gas Tungsten Arc Welding machine) is premium welding equipment designed to deliver unparalleled precision, control, and cleanliness for high-specification metal joints. It uses a non-consumable tungsten electrode to produce the welding arc, while a separate filler rod is manually added to the weld pool if necessary, shielded by pure Argon gas. Available in DC models for steel and stainless steel, or AC/DC models for aluminium, TIG welding produces no slag, zero spatter, and extremely neat, visually appealing weld beads. It is essential for industries where weld integrity, aesthetic finish, and thin-gauge capabilities are paramount, such as aerospace, food and dairy processing, petrochemical piping, and custom fabrication.",
        specifications: {
            "Welding Current Range": "5 A to 315 A / 400 A (precise low-current control)",
            "Arc Ignition Mode": "HF (High Frequency) / Lift TIG",
            "Current Output Capability": "DC only or AC/DC selectable models",
            "Pulse Frequency Range": "0.5 Hz to 200 Hz / 500 Hz (adjustable pulse parameters)",
            "AC Balance / Frequency": "15% to 85% / 20 Hz to 250 Hz (for aluminium models)",
            "Rated Duty Cycle": "60% to 100% at rated output",
            "Gas Pre/Post Flow Time": "Pre-flow: 0-5s, Post-flow: 1-20s",
            "Upslope / Downslope Time": "0 to 10 seconds (crater fill control)",
            "Input Power Specification": "220V Single-Phase / 415V Three-Phase, 50/60 Hz",
            "Machine Cooling System": "Air Cooled or Integrated Water Cooling Unit"
        },
        features: [
            "High-Frequency (HF) contactless arc starting to eliminate tungsten contamination in the weld",
            "Full TIG pulse parameter tuning (peak current, base current, pulse width, and frequency) for heat-input control on thin metals",
            "Adjustable AC frequency and AC balance controls on AC/DC models to modify oxide cleaning action and penetration width on aluminium",
            "Precision digital micro-processor control panel with pre-set program storage capabilities",
            "Foot control pedal compatibility for real-time amperage adjustment during intricate welding tasks",
            "Comprehensive 2T / 4T trigger options with spot welding timer configurations",
            "Adjustable upslope, downslope, and post-flow gas timings to prevent pinholes and crater cracking at weld terminations",
            "Multi-process flexibility: functions as a high-performance stick welder (MMA) with adjustable hot start"
        ],
        applications: [
            "Aerospace, aircraft piping, and component fabrication",
            "Food processing equipment, dairy tanks, and pharma vessels",
            "Chemical plant pipelines and high-pressure heat exchangers",
            "Custom automotive exhausts, manifolds, and intercooler piping",
            "Precision sheet metal shops and specialized alloy fabrication"
        ],
        faqs: [
            { 
                question: "Why is an AC/DC TIG welder required for welding aluminium?", 
                answer: "Aluminium is covered by a tough, high-melting-point oxide layer. The AC (Alternating Current) cycle alternates between electrode positive (which breaks up and cleans the aluminium oxide layer) and electrode negative (which provides deep base metal penetration). DC TIG cannot provide this cleaning action and will fail to weld aluminium." 
            },
            { 
                question: "What is pulse TIG welding and when is it used?", 
                answer: "Pulse TIG welding alternates between a high peak current (for penetration) and a low base current (for cooling) at an adjustable frequency. This reduces total heat input and warping, making it perfect for welding thin sheet metals, heat-sensitive alloys, and out-of-position pipe joints." 
            },
            { 
                question: "What tungsten electrode types are used in TIG welding?", 
                answer: "Pure tungsten (green) is used for AC aluminium welding. Thoriated tungsten (red) offers excellent stability for DC welding of steel and stainless steel. Ceriated (grey) and lanthanated (gold) are popular thorium-free alternatives suitable for both AC and DC processes." 
            }
        ],
        ctaText: "Precision TIG welding equipment for high-specification metal joints. Inquire today for details.",
        image: "/images/machines/TIG Welding Machine.png",
        altText: "TIG Welding Machine – precision gas tungsten arc welding machine with HF torch and foot control option",
        metaTitle: "TIG Welding Machine | Precision GTAW Welder for Stainless & Aluminium",
        metaDescription: "High-precision AC/DC TIG Welding Machine for immaculate welding of stainless steel, aluminium, and exotic alloys. Zero spatter, complete pulse controls."
    }
];

// --- WORKHOLDING TOOLS DATA ---
const workholdingTools = [
    {
        name: "Self-Centering Lathe Chuck",
        category: "Workholding Tools",
        categoryDescription: workholdingDesc,
        subTitle: "Precision Workholding for Symmetrical & Round Components",
        shortDescription: "The Self-Centering Lathe Chuck is a fundamental workholding accessory engineered for efficiency and precision in turning operations.",
        description: "The Self-Centering Lathe Chuck is a fundamental workholding accessory engineered for efficiency and precision in turning operations. Powered by a scroll plate mechanism, all jaws advance or retract simultaneously when the key is turned, automatically centering the workpiece without manual adjustment. This dramatically reduces setup time compared to independent jaw chucks, making it the preferred choice for high-volume production environments. The chuck body is manufactured from high-grade alloy steel, hardened and precision-ground to ensure runout accuracy within tight tolerances. It is available in 3-jaw and 6-jaw configurations for a variety of workpiece geometries.",
        specifications: {
            "Chuck Diameter Range": "100 mm to 630 mm",
            "Clamping Range (External)": "2 mm – 250 mm (model-dependent)",
            "Clamping Range (Internal)": "30 mm – 600 mm (model-dependent)",
            "Runout Accuracy (TIR)": "≤ 0.03 mm",
            "Max Spindle Speed": "Up to 4,500 RPM (for CNC models)",
            "Body Material": "Forged Steel / High-Tensile Cast Iron",
            "Jaw Material": "Hardened Alloy Steel (Case Hardened)",
            "Mounting Standard": "ISO 702-1 (ASA) / DIN 55026 / Plain Back",
            "Through-Bore Diameter": "20 mm to 160 mm",
            "Weight (typical 200 mm)": "Approx. 14 kg"
        },
        features: [
            "Scroll plate mechanism for simultaneous jaw movement",
            "High-accuracy self-centering within ±0.05 mm TIR (Total Indicator Reading)",
            "Reversible jaws for both internal and external clamping",
            "Hardened and ground alloy steel body for long service life",
            "Available in 100 mm to 630 mm diameter options",
            "Dynamic balancing for high-speed CNC lathe applications",
            "Grease nipples for regular lubrication and smooth operation",
            "Secure direct mounting or back-plate mounting to lathe spindles"
        ],
        applications: [
            "High-volume production environments",
            "Symmetrical and round component turning",
            "CNC and manual lathe applications"
        ],
        faqs: [
            { 
                question: "What is the difference between a 3-jaw and a 4-jaw chuck?", 
                answer: "A 3-jaw chuck is self-centering and moves all jaws together, making it ideal for round or hexagonal stock. A 4-jaw independent chuck allows each jaw to move separately, which is necessary for irregular shapes and off-center turning." 
            },
            { 
                question: "Can I use a self-centering chuck on a CNC lathe?", 
                answer: "Yes. CNC lathes typically use hydraulic or pneumatic self-centering chucks for automated, high-speed operation, whereas manual lathes use manual scroll chucks." 
            },
            { 
                question: "What are soft jaws and when are they used?", 
                answer: "Soft jaws are un-hardened steel or aluminum jaws that can be machined to match a specific workpiece diameter. They provide maximum surface contact and prevent marking on pre-machined surfaces." 
            },
            { 
                question: "How often should a lathe chuck be lubricated?", 
                answer: "For production environments, the chuck should be greased daily through the grease nipples using high-pressure chuck grease to maintain gripping force and prevent wear." 
            }
        ],
        ctaText: "Buy premium Self-Centering Lathe Chucks for fast, accurate workholding. Ideal for round and hexagonal workpieces on CNC & manual lathes.",
        image: "/images/machines/Self Centering Lathe Chuck.png",
        altText: "Self-Centering 3-Jaw Lathe Chuck for CNC and Manual Turning Operations",
        metaTitle: "Self-Centering Lathe Chuck | Automatic Jaw Chuck for CNC & Manual Lathes",
        metaDescription: "Buy premium Self-Centering Lathe Chucks for fast, accurate workholding. Ideal for round and hexagonal workpieces on CNC & manual lathes. Available in 3-jaw and scroll chuck configurations."
    },
    {
        name: "4-Jaw Independent Chuck",
        category: "Workholding Tools",
        categoryDescription: workholdingDesc,
        subTitle: "Heavy-Duty Adjustability for Asymmetrical & Large Components",
        shortDescription: "The 4-Jaw Independent Chuck provides ultimate flexibility and maximum gripping force for irregular, rectangular, or asymmetrical workpieces.",
        description: "The 4-Jaw Independent Chuck provides ultimate flexibility and maximum gripping force for irregular, rectangular, or asymmetrical workpieces. Each jaw is adjusted independently via a dedicated operating screw, allowing the machinist to align workpieces with absolute precision or set up eccentric turning operations. The heavy-duty design features rigid jaw guides and a robust cast iron or steel body, engineered to withstand high cutting forces during heavy roughing cuts on large-diameter forgings and castings.",
        specifications: {
            "Chuck Size Range": "160 mm to 1250 mm",
            "Jaw Adjustment Style": "Independent manual screw per jaw",
            "Concentricity Capability": "≤ 0.01 mm (with dial indicator)",
            "Jaw Travel per Revolution": "3 mm – 6 mm",
            "Body Material": "GG25 Cast Iron / Ductile Iron",
            "Jaw Serration": "1.5 mm × 60°",
            "Max Clamping Force (per jaw)": "Up to 60 kN",
            "Mounting": "Plain Back / DIN 55026 / ASA",
            "Weight (typical 315 mm)": "Approx. 28 kg"
        },
        features: [
            "Independently adjustable jaws for clamping irregular or rectangular parts",
            "Four-jaw design offers superior gripping power compared to scroll chucks",
            "Ideal for precise dialing-in of workpieces using an indicator",
            "Solid cast iron or high-tensile steel body options available",
            "Reversible solid jaws or master jaws with top jaws configuration",
            "Deep jaw serrations for aggressive gripping on rough castings",
            "T-slots integrated into larger chuck sizes for additional faceplate clamping",
            "Hardened operating screws with high wear resistance"
        ],
        applications: [
            "Castings and forgings machining",
            "Square billets and rectangular plates holding",
            "Off-center boring and eccentric turning jobs",
            "Complex workpieces requiring high concentricity"
        ],
        faqs: [
            { 
                question: "How do I center a workpiece in a 4-jaw independent chuck?", 
                answer: "Mount a dial test indicator on the tool post, place the tip on the workpiece OD, and rotate the spindle by hand. Adjust opposite jaw pairs alternately while watching the indicator until runout is within tolerance." 
            },
            { 
                question: "What workpieces are best suited for a 4-jaw independent chuck?", 
                answer: "Castings, forgings, square billets, rectangular plates, off-center boring jobs, and any workpiece where concentricity must be maintained to an existing machined feature." 
            },
            { 
                question: "Is a 4-jaw independent chuck slower to set up?", 
                answer: "Yes, setup takes longer than a self-centering chuck. However, it provides superior accuracy and versatility that cannot be matched by scroll-type chucks for complex workpieces." 
            },
            { 
                question: "Can I use soft jaws in a 4-jaw independent chuck?", 
                answer: "Yes. Un-hardened (soft) jaws can be mounted and bored to a custom profile for gentle clamping of finished surfaces or delicate parts." 
            },
            { 
                question: "What sizes are available?", 
                answer: "Independent 4-jaw chucks are available from 160 mm (for bench lathes) up to 1250 mm or larger for heavy-duty industrial vertical boring mills." 
            }
        ],
        ctaText: "Shop industrial-grade 4-Jaw Independent Chucks. Achieve unmatched centering precision and heavy-duty clamping for irregular workpieces.",
        image: "/images/machines/4 Jaw Independent Chuck.png",
        altText: "4-Jaw Independent Lathe Chuck with Individually Adjustable Jaws for Custom Turning Setup",
        metaTitle: "4-Jaw Independent Chuck | Manual Adjusting Lathe Chuck for Irregular Components",
        metaDescription: "Shop industrial-grade 4-Jaw Independent Chucks. Achieve unmatched centering precision and heavy-duty clamping for irregular workpieces. Perfect for castings and eccentric turning."
    }
];

// --- FINISHING & COATING MACHINES DATA ---
const finishingCoatingMachines = [
    {
        name: "Powder Coating Machine",
        category: "Finishing & Coating Machines",
        categoryDescription: finishingCoatingDesc,
        subTitle: "Electrostatic Powder Coating System for Durable Surface Finishing",
        shortDescription: "The Powder Coating Machine is a complete surface finishing system that delivers superior coating quality compared to conventional liquid paint.",
        description: "The Powder Coating Machine is a complete surface finishing system that delivers superior coating quality compared to conventional liquid paint. The process involves applying electrostatically charged powder particles to a grounded metallic workpiece using a spray gun, ensuring uniform adhesion even on complex geometries. The coated part is then conveyed into a curing oven where the powder melts and cross-links into a smooth, continuous film. The result is a finish that is far more resistant to chipping, corrosion, UV degradation, and chemical exposure than wet paint. The system is also environmentally friendly — overspray can be recovered and reused, and the process emits negligible VOCs (volatile organic compounds).",
        specifications: {
            "Voltage Input": "220V/380V, 50/60 Hz",
            "Output Voltage (Gun)": "0 – 100 kV (Negative)",
            "Output Current (Gun)": "0 – 150 μA",
            "Max. Powder Injection": "Up to 600 g/min",
            "Air Consumption": "12–15 m³/h",
            "Powder Hopper Capacity": "25 kg / 50 kg (Stainless Steel)",
            "Curing Oven Temp. Range": "150°C – 250°C",
            "Oven Heating Source": "Electric / LPG / Natural Gas / Diesel",
            "Control Panel Type": "Digital PLC with touch screen",
            "Gun Weight": "Approx. 480 grams"
        },
        features: [
            "Electrostatic spray gun with adjustable voltage (0–100 kV)",
            "Powder recovery and reclaim system (up to 98% efficiency)",
            "Batch and continuous conveyor configurations available",
            "Digital PLC control panel for precise recipe management",
            "Uniform coating thickness across flat and recessed surfaces",
            "High-grade stainless steel fluidizing powder hopper",
            "Rapid color-change design for multi-color operations",
            "Energy-efficient curing oven with high-density insulation",
            "Built-in safety features including over-current and ground faults protection",
            "Eco-friendly process with zero VOC emissions"
        ],
        applications: [
            "Automotive parts and wheel rims",
            "Appliance panels and metal furniture",
            "Architectural aluminum extrusions",
            "Industrial machinery frames and enclosures"
        ],
        faqs: [
            { 
                question: "What are the primary benefits of powder coating over liquid paint?", 
                answer: "Powder coating provides a thicker, more durable finish that resists chipping, scratching, and fading. It is also more cost-effective because overspray can be reclaimed, and it is eco-friendly as it contains no solvents or VOCs." 
            },
            { 
                question: "What is the typical curing temperature and time for powder coating?", 
                answer: "Most powders require a curing oven temperature between 180°C and 200°C (350°F to 400°F) for 10 to 20 minutes, depending on the metal thickness and powder specifications." 
            },
            { 
                question: "Can non-metallic materials be powder coated?", 
                answer: "Powder coating requires the substrate to be electrically conductive to attract the charged powder. However, specialized powders and processes exist for coating MDF (medium-density fiberboard) and certain plastics." 
            },
            { 
                question: "How efficient is the powder recovery system?", 
                answer: "Modern powder coating booths with multi-cyclone or cartridge filter recovery systems can achieve up to 95% to 98% material utilization by collecting and reusing overspray." 
            },
            { 
                question: "What surface preparation is needed before powder coating?", 
                answer: "The metal must be thoroughly cleaned of oil, grease, rust, and scale via degreasing, shot blasting, or chemical phosphating to ensure proper coating adhesion." 
            }
        ],
        ctaText: "Get high-efficiency Powder Coating Machines for a superior finish. Available in batch and automatic conveyor models for industrial metal coating.",
        image: "/images/machines/Powder Coating Machine.png",
        altText: "Industrial Powder Coating Machine with Electrostatic Spray Gun and Curing Oven",
        metaTitle: "Powder Coating Machine | Electrostatic Spray & Curing System Manufacturer",
        metaDescription: "Industrial powder coating machines for metal surface finishing. Electrostatic spray guns, conveyor ovens, and batch curing systems. Achieve uniform, corrosion-resistant, and eco-friendly coatings."
    },
    {
        name: "Bench Polishing Machine",
        category: "Finishing & Coating Machines",
        categoryDescription: finishingCoatingDesc,
        subTitle: "High-Speed Bench & Floor Buffing Equipment",
        shortDescription: "The Bench Polishing Machine is a compact, high-speed workshop tool designed for polishing, buffing, and finishing metal components.",
        description: "The Bench Polishing Machine (also referred to as a bench buffer or polishing lathe) is a compact, high-speed workshop tool designed for polishing, buffing, and finishing metal, plastic, and composite components to achieve a bright, mirror-like finish. Featuring an extended dual-ended spindle shaft, it allows ample clearance for maneuvering large or irregularly shaped workpieces against the polishing wheels. The machine accommodates various buffing mops, stitched cotton wheels, sisal wheels, and wire brushes, which are used in combination with polishing compounds to remove scratches, burrs, scale, and surface imperfections. It is an indispensable tool in fabrication shops, jewelry manufacturing, automotive restoration, and general toolrooms.",
        specifications: {
            "Wheel Diameter Range": "150 mm to 300 mm",
            "Spindle Thread / Bore": "M16 / 19 mm / 25.4 mm",
            "Spindle Speed (Fixed)": "1,440 RPM or 2,880 RPM",
            "Spindle Speed (Variable)": "900 RPM – 3,600 RPM (VFD controlled)",
            "Motor Power Rating": "0.37 kW to 3.7 kW (0.5 HP to 5 HP)",
            "Electrical Supply": "220V Single Phase / 415V Three Phase",
            "Spindle Shaft Extension": "150 mm to 250 mm on each side",
            "Base Mounting Style": "Bench mount / Floor pedestal mount",
            "Working Envelope Size": "600 × 250 × 300 mm (varies by model)",
            "Noise Level": "< 70 dB(A)"
        },
        features: [
            "Extended dual-ended spindle design for maximum workpiece clearance",
            "Heavy-duty cast iron housing to dampen vibrations and ensure stability",
            "Compatible with cotton buffing mops, sisal wheels, and wire brushes",
            "Variable speed control via VFD for precise matching to material types",
            "Dust extraction hood compatibility for a clean working environment",
            "Permanently lubricated, sealed ball bearings for maintenance-free life",
            "Threaded shaft with heavy locking flanges for secure wheel mounting",
            "Available in both compact bench-top and rugged pedestal configurations",
            "Thermal overload protection to safeguard the motor from overheating",
            "Adjustable safety eye shields and wheel guards (optional selection)"
        ],
        applications: [
            "Metal fabrication and hardware polishing",
            "Automotive trim and component restoration",
            "Jewelry and precision instrument buffing",
            "Toolrooms and maintenance workshops"
        ],
        faqs: [
            { 
                question: "What is a bench polishing machine used for?", 
                answer: "It is used for deburring sharp edges, surface polishing, removing rust and scale, sharpening cutting tools, and light stock removal on small metal, plastic, or wooden workpieces." 
            },
            { 
                question: "Can I use a buffing mop on a bench polishing machine?", 
                answer: "Yes. Most bench polishing machines can accept buffing mops and polishing wheels in addition to grinding wheels, provided the wheel diameter and arbor bore are compatible." 
            },
            { 
                question: "What is the difference between a bench grinder and a bench polishing machine?", 
                answer: "A bench grinder primarily uses bonded abrasive wheels for cutting and stock removal. A bench polishing machine may use abrasive wheels, buffing mops, wire brushes, or flap wheels and is focused on finishing and surface enhancement." 
            },
            { 
                question: "Is single-phase power sufficient for a bench polishing machine?", 
                answer: "For smaller models (up to 0.5 kW / 150 mm wheel), single-phase 220V power is adequate. Larger, industrial models require three-phase 415V supply for continuous operation." 
            },
            { 
                question: "How do I safely change wheels on a bench polishing machine?", 
                answer: "Always disconnect the power before wheel changing. Use the correct spanner to remove the flange, inspect the new wheel for cracks (ring test), and ensure the flanges are properly tightened without overtorquing. Run the machine unloaded for 60 seconds after fitting a new wheel." 
            }
        ],
        ctaText: "Invest in rugged Bench Polishing Machines for professional surface finishing. Perfect for deburring, buffing, and mirror polishing metals.",
        image: "/images/machines/Bench Polishing Machine.png",
        altText: "Heavy-Duty Bench Polishing Machine with Extended Shafts for Workshop Buffing",
        metaTitle: "Bench Polishing Machine | High-Speed Buffing Lathe & Workshop Buffer",
        metaDescription: "Invest in rugged Bench Polishing Machines for professional surface finishing. Perfect for deburring, buffing, and mirror polishing metals. Available with extended spindles and variable speeds."
    }
];

// --- HEAVY MACHINES DATA ---
const heavyMachines = [
    {
        name: "Vertical Boring Machine",
        category: "Heavy Machines",
        categoryDescription: heavyDesc,
        subTitle: "Heavy-Duty Vertical Turning and Boring for Large Diameter Workpieces",
        shortDescription: "The Vertical Boring Machine — also known as a Vertical Turret Lathe (VTL) — is an indispensable machine for industries processing large, heavy, and short components.",
        description: "The Vertical Boring Machine — also known as a Vertical Turret Lathe (VTL) — is an indispensable machine for industries processing large, heavy, and short components such as flanges, rings, gearboxes, pump casings, turbine housings, and railway wheels. In this machine, the workpiece is mounted horizontally on a large rotating worktable (faceplate), and the cutting tools are presented from above via ram and turret heads. This vertical orientation makes it far easier to load, clamp, and balance heavy workpieces compared to a horizontal lathe. VTLs are available in single-column (for smaller diameters) and double-column (for diameters exceeding 1,600 mm) configurations, with CNC control systems enabling fully automated machining cycles.",
        specifications: {
            "Table Diameter Range": "800 mm to 5000 mm",
            "Max Turning Diameter": "1000 mm to 5500 mm",
            "Max Workpiece Height": "800 mm to 3000 mm",
            "Max Workpiece Weight": "2,000 kg to 80,000 kg",
            "Table Speed Range": "1 to 400 RPM (infinitely variable)",
            "Main Motor Power": "22 kW to 100 kW",
            "Number of Tool Heads": "1 Vertical Ram Head + 1 Side Head (optional)",
            "Turret Positions": "4-station / 5-station manual or automatic changer",
            "Rapid Traverse Speed": "4,000 to 12,000 mm/min",
            "CNC Controller Options": "Fanuc / Siemens / Mitsubishi / Fagor"
        },
        features: [
            "Large horizontal worktable (faceplate) for heavy workpiece mounting",
            "Single-column and double-column configurations",
            "CNC and manual control options",
            "High-rigidity cast iron structure (Meehanite cast iron)",
            "Hydrostatic table bearing system for minimal friction and maximum load capacity",
            "Hardened and precision-ground box guideways with Turcite-B lining",
            "Dual-range or multi-range heavy gearbox for high torque at low RPM",
            "Automatic lubrication system with pressure monitoring",
            "Fully enclosed splash guard for CNC models",
            "ChIP conveyor and coolant system with high-pressure delivery"
        ],
        applications: [
            "Flanges, rings, and gearboxes manufacturing",
            "Pump casings and turbine housings processing",
            "Railway wheels turning and boring",
            "Large castings and heavy components machining"
        ],
        faqs: [
            { 
                question: "What is the main advantage of a Vertical Boring Machine over a standard Horizontal Lathe?", 
                answer: "The primary advantage is the horizontal orientation of the worktable. On a VTL, a heavy workpiece rests flat on the table, making alignment, clamping, and balancing much simpler and safer. In a horizontal lathe, heavy parts hang off the spindle, creating immense bending stress and risk of distortion or imbalance." 
            },
            { 
                question: "What is the difference between single-column and double-column vertical boring machines?", 
                answer: "Single-column VTLs have one main column supporting the tool head cross-rail, typically used for worktable diameters up to 1,600 mm. Double-column machines have two massive vertical columns linked by a top bridge, providing ultimate rigidity for large-diameter tables (2,000 mm to 5,000 mm or more) and allowing the machining of massive, multi-tonne castings." 
            },
            { 
                question: "What is a hydrostatic table bearing system?", 
                answer: "It is a system where the rotating worktable floats on a high-pressure film of oil, preventing metal-to-metal contact. This eliminates wear, provides extremely low friction, dampens vibrations, and allows the machine to carry heavy parts up to 50–80 tonnes with sub-micron rotation accuracy." 
            },
            { 
                question: "Can thread cutting and taper turning be done on a CNC VTL?", 
                answer: "Yes, CNC systems allow precise coordination between the table rotation and the vertical/horizontal movement of the tool ram. This enables full interpolation for cutting internal and external tapers, profiles, arcs, and single or multi-start threads." 
            },
            { 
                question: "What maintenance does a Vertical Boring Machine require?", 
                answer: "Key maintenance tasks include checking hydrostatic oil pressure and temperature daily, cleaning and lubricating guideways, verifying the automatic lube system oil level, clearing chips from the telescoPIC covers, checking gearbox oil levels, and performing annual laser calibration to maintain geometric accuracy." 
            }
        ],
        ctaText: "Source high-performance Vertical Boring Machines (VTL) for your workshop. Single & double column CNC solutions available.",
        image: "/images/machines/Vertical Boring Machine.png",
        altText: "Vertical Boring Machine VTL for Large Diameter Turning and Boring of Heavy Workpieces",
        metaTitle: "Vertical Boring Machine | VTL Vertical Turret Lathe Manufacturer & Supplier",
        metaDescription: "Heavy-duty Vertical Boring Machines (VTL) for large diameter turning and boring. Single and double column configurations. Ideal for flanges, rings, housings, and large castings. CNC and manual versions available."
    },
    {
        name: "Horizontal Boring Machine",
        category: "Heavy Machines",
        categoryDescription: heavyDesc,
        subTitle: "Precision Multi-Axis Boring and Milling for Oversized Components",
        shortDescription: "The Horizontal Boring Machine (HBM) is a highly versatile, heavy-duty machine tool designed to machine large, long, and bulky components.",
        description: "The Horizontal Boring Machine (HBM) is a highly versatile, heavy-duty machine tool designed to machine large, long, and bulky components that cannot be easily rotated. Unlike a lathe or a VTL, the workpiece remains stationary on a multi-axis worktable or floor plate, while the cutting tool rotates on a horizontal spindle. HBMs excel at performing multiple operations — including deep hole boring, drilling, face milling, pocketing, tapping, and reaming — in a single setup. This dramatically increases efficiency and accuracy by eliminating stack-up errors from moving heavy components between multiple machines. They are available in table-type, planer-type, and floor-type configurations.",
        specifications: {
            "Spindle Diameter Range": "80 mm to 260 mm",
            "Spindle Taper": "ISO 50 / BT 50 / HSK-A100",
            "X-Axis Travel (Table/Column)": "1,500 mm to 10,000 mm+",
            "Y-Axis Travel (Vertical Headstock)": "1,000 mm to 4,000 mm",
            "Z-Axis Travel (Column/Spindle)": "1,000 mm to 3,000 mm",
            "W-Axis Travel (Spindle Extension)": "500 mm to 1,200 mm",
            "Table Size / Loading Capacity": "1000×1000 mm to 3000×3000 mm / 5 to 30 tonnes",
            "Spindle Speed Range": "10 to 3,500 RPM (gear-driven high torque)",
            "Main Spindle Motor Power": "15 kW to 60 kW",
            "CNC Axes Control": "3-axis to 5-axis full simultaneous control"
        },
        features: [
            "Rotating horizontal spindle with independent axial extension (W-axis)",
            "Built-in rotary table (B-axis) with 0.001-degree indexing resolution",
            "Heavy box-column structure with dual counter-balanced headstock",
            "Hardened steel linear guideways or heavy box guideways with hydrostatic dampening",
            "High-torque gear-driven spindle system with automated high/low gear switching",
            "Thermal compensation system for the spindle and headstock structure",
            "Automated Tool Changer (ATC) with up to 40–120 tool capacity",
            "High-pressure through-spindle coolant (CTS) system (up to 70 bar)",
            "Heidenhain linear scales for closed-loop high precision feedback",
            "Optional right-angle and universal milling heads for 5-sided machining"
        ],
        applications: [
            "Power generation components machining",
            "Heavy engineering, oil & gas equipment fabrication",
            "Defense and shipbuilding structural components",
            "Large gearbox production and press die manufacturing"
        ],
        faqs: [
            { 
                question: "What operations can be performed on a Horizontal Boring Machine?", 
                answer: "Boring, drilling, reaming, tapping, face milling, end milling, contouring, pocket milling, and angular operations (with right-angle head). It is a multi-process machine capable of replacing multiple machine setups." 
            },
            { 
                question: "What is the difference between a table-type and a floor-type boring machine?", 
                answer: "A table-type HBM has a worktable that moves in X and Y axes, suitable for components weighing up to approximately 30 tonnes. A floor-type HBM has no table — the workpiece is bolted to the shop floor, and the column travels on floor rails, allowing machining of extremely large workpieces (>100 tonnes)." 
            },
            { 
                question: "How is accuracy maintained in a Horizontal Boring Machine?", 
                answer: "Through precision ground and scraped guideways, linear encoder feedback systems, spindle air bearings or roller bearings with pre-loading, thermal compensation algorithms, and in-process probing." 
            },
            { 
                question: "What is the typical spindle diameter range for Horizontal Boring Machines?", 
                answer: "Spindle diameters range from 80 mm for lighter machines to 260 mm for heavy-duty floor-type machines. Larger spindle diameters provide greater rigidity and power transmission for heavy milling cuts." 
            },
            { 
                question: "Which industries use Horizontal Boring Machines?", 
                answer: "Power generation, heavy engineering, oil & gas, defense, shipbuilding, railway, steel plants, press and die manufacturing, large gearbox production, and aerospace structural component machining." 
            }
        ],
        ctaText: "Optimize oversized part manufacturing. Contact us for table and floor type Horizontal Boring Machine quotes.",
        image: "/images/machines/Horizontal Boring Machine.png",
        altText: "CNC Horizontal Boring Machine HBM for Heavy-Duty Milling and Deep Hole Boring",
        metaTitle: "Horizontal Boring Machine | CNC HBM Milling & Boring Equipment Supplier",
        metaDescription: "Precision Horizontal Boring Machines (HBM) for heavy-duty, multi-axis machining of large components. Explore table-type and floor-type HBM solutions with advanced CNC controls."
    }
];





// --- 1. INDUSTRIAL MACHINES (Total 8 as per screenshot) ---
const industrialMachines = [
    { name: "Lathe Machine", dataType: "product", category: "Industrial Machines", image: "/home/mechindustrialmachine/Lathe Machine.png", shortDescription: "Precision lathe machines for industrial fabrication." },
    { name: "Milling Machine", dataType: "product", category: "Industrial Machines", image: "/home/mechindustrialmachine/Milling Machine Supplier in Nagpur.png", shortDescription: "Versatile milling solutions for workshops." },
    { name: "Drilling Machine", dataType: "product", category: "Industrial Machines", image: "/home/mechindustrialmachine/Drilling Machine Supplier In Nagpur.png", shortDescription: "High-performance industrial drilling machines." },
    { name: "Power Press Machine", dataType: "product", category: "Industrial Machines", image: "/home/mechindustrialmachine/Power Press Machine.png", shortDescription: "Robust power press for metal forming." },
    { name: "Hacksaw Machine", dataType: "product", category: "Industrial Machines", image: "/home/mechindustrialmachine/Hacksaw Machine.png", shortDescription: "Heavy-duty hacksaw for metal cutting." },
    { name: "Surface Grinder", dataType: "product", category: "Industrial Machines", image: "/home/mechindustrialmachine/Surface Grinder Machine.png", shortDescription: "Precision surface grinding machines." },
    { name: "Radial Drilling Machine", dataType: "product", category: "Industrial Machines", image: "/home/mechindustrialmachine/Radial Drilling Machine Supplier in Nagpur.png", shortDescription: "Efficient radial drilling for large workpieces." },
    { name: "Slotting Machine", dataType: "product", category: "Industrial Machines", image: "/home/mechindustrialmachine/Slotting Machine Supplier in Nagpur.png", shortDescription: "Industrial slotting machines for accuracy." }
];

// --- 2. i-NAX MACHINES (Total 4 - Placeholder path dila aahe) ---
const inaxSectionData = [
    { name: "Fiber Laser Cutting", dataType: "product", category: "inax", image: "/home/mechindustrialmachine/Lathe Machine.png", shortDescription: "Open & Closed Body laser cutting solution." },
    { name: "CNC Press Brake", dataType: "product", category: "inax", image: "/home/mechindustrialmachine/Lathe Machine.png", shortDescription: "Precision bending technology." },
    { name: "CNC Plasma Cutting", dataType: "product", category: "inax", image: "/home/mechindustrialmachine/Lathe Machine.png", shortDescription: "Industrial plasma cutting." },
    { name: "Laser Welding", dataType: "product", category: "inax", image: "/home/mechindustrialmachine/Lathe Machine.png", shortDescription: "Advanced laser welding machine." }
];

// --- 3. CUSTOMER TESTIMONIALS (Total 3) ---
const customerGallery = [
    { name: "Customer Work 1", dataType: "testimonial", image: "/home/mechindustrialmachine/Lathe Machine.png" },
    { name: "Customer Work 2", dataType: "testimonial", image: "/home/mechindustrialmachine/Lathe Machine.png" },
    { name: "Customer Work 3", dataType: "testimonial", image: "/home/mechindustrialmachine/Lathe Machine.png" }
];

const seedDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("🚀 Connected to MongoDB Cluster...");

        // 1. DELETE ALL OLD DATA (Safety First)
        await Machine.deleteMany({});
        console.log("🧹 Old records cleared from Database.");

        // 2. COMBINE ALL CATEGORIES
        const allMachines = [...finishingCoatingMachines, ...workholdingTools, ...weldingMachines, ...threadingMachines, ...millingMachines, ...drillingMachines, ...industrialMachines, ...inaxSectionData, ...customerGallery, ...latheMachines, ...grindingMachines, ...cuttingMachines];

        // 3. INSERT NEW DATA
        await Machine.insertMany(allMachines);
        console.log(`✅ Success: ${allMachines.length} Machines (Milling & Drilling) Seeded Successfully!`);

        process.exit();
    } catch (err) {
        console.error("❌ Seeding Error:", err);
        process.exit(1);
    }
};

seedDB();

