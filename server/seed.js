// const mongoose = require('mongoose');
// const Machine = require('./models/Machine'); // Path check kara tumchya model pramane

// // MongoDB Connection String (Tumchi swatahchi string ithe taka)
// const MONGO_URI = "mongodb+srv://apurvajibhakate007_db_user:YXS8g9XndPuuK8IP@cluster0.dpnwsey.mongodb.net/mechchem_db?appName=Cluster0"; 

// const commonCategoryDesc = `A milling machine is a versatile and essential machine tool used for removing material from a workpiece using rotary cutters. At Mech Chem Engineering Services, we offer reliable milling machines designed for accuracy, durability, and high productivity, making them suitable for workshops, tool rooms, and industrial manufacturing units. Our milling machines are ideal for producing complex shapes, slots, gears, and flat surfaces across a wide range of metals and engineering materials.`;

// const millingMachines = [
//   {
//     name: "Heavy Duty Milling Machine",
//     category: "Milling Machines",
//     categoryDescription: commonCategoryDesc,
//     subTitle: "Robust Milling Equipment for Heavy Metal Cutting and Fabrication Work",
//     shortDescription: "Built for large-scale machining and heavy metal cutting operations in demanding industrial environments.",
//     description: "The Heavy Duty Milling Machine is built for large-scale machining and heavy metal cutting operations. It is designed to handle high workloads and demanding industrial environments. Mech Chem Engineering Services supplies robust heavy-duty milling machines suitable for engineering industries, steel fabrication units, and manufacturing plants requiring reliable machining equipment.\n\nAs a trusted industrial machinery dealer in Nagpur, we provide durable milling machines capable of delivering consistent performance under heavy operating conditions.",
//     specifications: {
//       "Table Size": "300 × 1400 mm",
//       "Longitudinal Travel": "900 – 1000 mm",
//       "Cross Travel": "300 – 350 mm",
//       "Vertical Travel": "400 – 450 mm",
//       "Spindle Speed Range": "30 – 1500 RPM",
//       "Motor Power": "5 – 7.5 HP"
//     },
//     features: ["Heavy-duty machine construction", "High load capacity", "Stable machining performance", "Precision cutting capability", "Long operational life", "Low vibration operation"],
//     applications: ["Heavy engineering industries", "Manufacturing plants", "Steel fabrication units", "Automobile industries", "Industrial workshops"],
//     faqs: [
//       { question: "What is a heavy duty milling machine used for?", answer: "It is used for large machining jobs and heavy metal cutting operations." },
//       { question: "Is this machine suitable for continuous industrial use?", answer: "Yes, it is designed for long working hours and heavy workloads." },
//       { question: "Do you supply heavy machinery to industrial sectors?", answer: "Yes, we supply industrial machinery to manufacturing and engineering industries." }
//     ],
//     ctaText: "Searching for a powerful machining setup capable of handling large and demanding jobs? Get in touch with our specialists to discuss capacity, delivery timelines, and the best equipment for your industry.",
//     image: "/images/machines/heavy-duty-milling-machine.png", // Tumchi image path taka
//     altText: "heavy-duty-milling-machine",
//     metaTitle: "Heavy Duty Milling Machine Dealer in Nagpur | Industrial Milling Equipment",
//     metaDescription: "Trusted heavy duty milling machine supplier in Nagpur offering robust machines for heavy machining, fabrication, and industrial manufacturing applications."
//   },
//   {
//     name: "Turret Milling Machine",
//     category: "Milling Machines",
//     categoryDescription: commonCategoryDesc,
//     subTitle: "Flexible Milling System for Accurate Component Manufacturing",
//     shortDescription: "A highly flexible machine designed for precision milling, drilling, and shaping operations.",
//     description: "The Turret Milling Machine is a highly flexible machine designed for precision milling, drilling, and shaping operations. It is widely used in tool rooms and manufacturing units for producing complex components with high accuracy. Mech Chem Engineering Services supplies reliable turret milling machines suitable for precision engineering, maintenance work, and industrial machining applications.\n\nAs a recognized engineering machinery supplier in Maharashtra, we provide durable and efficient turret milling machines that support consistent production and accurate machining performance.",
//     specifications: {
//       "Table Size": "250 × 1250 mm",
//       "Longitudinal Travel": "700 – 800 mm",
//       "Cross Travel": "300 – 350 mm",
//       "Vertical Travel": "400 – 450 mm",
//       "Spindle Speed Range": "60 – 2000 RPM",
//       "Motor Power": "3 – 5 HP"
//     },
//     features: ["Swiveling turret head", "High machining flexibility", "Precision spindle operation", "Smooth and stable performance", "Easy tool positioning", "Long service life"],
//     applications: ["Tool rooms", "Manufacturing industries", "Precision engineering units", "Maintenance workshops", "Fabrication industries"],
//     faqs: [
//       { question: "What is the advantage of a turret milling machine?", answer: "It provides flexibility for precision machining and multi-directional operations." },
//       { question: "Is this machine suitable for tool room applications?", answer: "Yes, it is widely used in tool rooms and precision engineering industries." },
//       { question: "Do you provide service support after purchase?", answer: "Yes, we provide installation, maintenance, and technical support." }
//     ],
//     ctaText: "Upgrade your workshop with a flexible milling solution designed for efficiency and consistent performance. Contact us today to explore suitable options and receive professional support.",
//     image: "/images/machines/turret-milling-machine.png",
//     altText: "turret-milling-machine",
//     metaTitle: "Turret Milling Machine Dealer in Nagpur | Precision Milling Machine",
//     metaDescription: "Dependable supplier of turret milling systems in Nagpur delivering accurate machining performance for workshops, production units, and engineering industries."
//   },
//   {
//     name: "Universal Milling Machine",
//     category: "Milling Machines",
//     categoryDescription: commonCategoryDesc,
//     subTitle: "Versatile Milling Equipment Supplier for Tool Rooms and Engineering Workshop",
//     shortDescription: "Versatile metalworking machine designed for performing milling operations in multiple directions.",
//     description: "The Universal Milling Machine is a versatile metalworking machine designed for performing milling operations in multiple directions. It is widely used for precision machining, gear cutting, slotting, and complex component manufacturing. Mech Chem Engineering Services supplies dependable universal milling machines suitable for engineering workshops, tool rooms, and production units requiring flexible machining solutions.\n\nAs a trusted industrial equipment supplier in Nagpur, we provide robust milling machines known for accuracy, durability, and smooth performance in daily industrial operations.",
//     specifications: {
//       "Table Size": "254 × 1270 mm",
//       "Longitudinal Travel": "700 – 800 mm",
//       "Cross Travel": "250 – 300 mm",
//       "Vertical Travel": "350 – 400 mm",
//       "Spindle Speed Range": "40 – 1800 RPM",
//       "Motor Power": "3 – 5 HP"
//     },
//     features: ["Multi-directional milling capability", "Rigid machine structure", "Precision spindle performance", "Smooth feed mechanism", "Easy operation and maintenance", "Reliable machining accuracy"],
//     applications: ["Tool rooms", "Manufacturing industries", "Fabrication workshops", "Automobile component machining", "Engineering industries"],
//     faqs: [
//       { question: "What is a universal milling machine used for?", answer: "It is used for milling, drilling, slotting, and gear cutting operations in industrial machining." },
//       { question: "Do you supply milling machines to industries in Maharashtra?", answer: "Yes, we supply milling machines to workshops and manufacturing units across Nagpur and nearby industrial areas." }
//     ],
//     ctaText: "Get in touch with us to explore how our universal milling machines can enhance your production efficiency.",
//     image: "/images/machines/universal-milling-machine.png",
//     altText: "industrial-milling-machine-nagpur",
//     metaTitle: "Universal Milling Machine Supplier in Nagpur | Industrial Milling Machine",
//     metaDescription: "Reliable universal milling machine supplier in Nagpur providing precision machining solutions for engineering workshops, fabrication units, and manufacturing industries."
//   },
//   {
//     name: "Vertical Milling Machine",
//     category: "Milling Machines",
//     categoryDescription: commonCategoryDesc,
//     subTitle: "Precision Milling and Vertical Machining Center Equipment",
//     shortDescription: "Designed for precision milling, drilling, and slotting operations in metalworking industries.",
//     description: "The Vertical Milling Machine is designed for precision milling, drilling, and slotting operations in metalworking industries. It is commonly used for machining flat surfaces, grooves, and complex components with high accuracy. Mech Chem Engineering Services offers reliable vertical milling machines suitable for production units, fabrication shops, and maintenance departments.\n\nAs an experienced machine tools supplier in Maharashtra, we provide efficient milling machines that ensure consistent machining performance and long operational life.",
//     specifications: {
//       "Table Size": "230 × 1000 mm",
//       "Longitudinal Travel": "600 – 700 mm",
//       "Cross Travel": "250 – 300 mm",
//       "Vertical Travel": "350 – 400 mm",
//       "Spindle Speed Range": "50 – 2000 RPM",
//       "Motor Power": "3 – 5 HP"
//     },
//     features: ["Vertical spindle configuration", "High precision machining", "Stable machine structure", "Smooth cutting operation", "Easy maintenance", "Long service life"],
//     applications: ["Engineering workshops", "Tool rooms", "Maintenance departments", "Manufacturing industries", "Fabrication units"],
//     faqs: [
//       { question: "What operations can be performed on a vertical milling machine?", answer: "It can perform milling, drilling, slotting, and shaping operations." },
//       { question: "Is this machine suitable for industrial production work?", answer: "Yes, it is widely used in manufacturing and machining industries." },
//       { question: "Do you provide installation support?", answer: "Yes, we provide complete machine supply, installation, and service assistance." }
//     ],
//     ctaText: "Need a precision milling system for accurate metal cutting and component manufacturing? Reach out to us now.",
//     image: "/images/machines/vertical-milling-machine.png",
//     altText: "metal-cutting-milling-machine",
//     metaTitle: "Vertical Milling Machine Supplier in Nagpur | Workshop Milling Machine",
//     metaDescription: "Buy reliable large vertical milling machine from a trusted supplier in Maharashtra. Suitable for precision machining, fabrication, and industrial production applications."
//   }
// ];

// const seedDB = async () => {
//   try {
//     await mongoose.connect(MONGO_URI);
//     await Machine.deleteMany({ category: "Milling Machines" }); // Compulsory: Junya duplicate entries kadhun taknyasathi
//     await Machine.insertMany(millingMachines);
//     console.log("Milling Machines Seeded Successfully!");
//     process.exit();
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// seedDB();



const mongoose = require('mongoose');
const Machine = require('./models/Machine'); // Path tumchya model pramane check kara

const MONGO_URI = "mongodb+srv://apurvajibhakate007_db_user:YXS8g9XndPuuK8IP@cluster0.dpnwsey.mongodb.net/mechchem_db?appName=Cluster0"; 

// --- CATEGORY DESCRIPTIONS ---
const millingDesc = `A milling machine is a versatile and essential machine tool used for removing material from a workpiece using rotary cutters. At Mech Chem Engineering Services, we offer reliable milling machines designed for accuracy, durability, and high productivity, making them suitable for workshops, tool rooms, and industrial manufacturing units.`;

const drillingDesc = `Mech Chem Engineering Services is a trusted Drill Machine and Workshop Machinery Supplier in Nagpur, offering a wide range of high-performance industrial drilling machines designed for precision, durability, and reliable operation. Our machines are widely used in fabrication workshops, manufacturing plants, engineering industries, and maintenance departments.`;

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
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("🚀 Connected to MongoDB Cluster...");

    // 1. DELETE ALL OLD DATA (Safety First)
    await Machine.deleteMany({}); 
    console.log("🧹 Old records cleared from Database.");

    // 2. COMBINE ALL CATEGORIES
    const allMachines = [...millingMachines, ...drillingMachines];

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