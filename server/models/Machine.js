
// const mongoose = require('mongoose');

// const MachineSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     category: { type: String, required: true },
//     subTitle: { type: String }, 
//     description: { type: String },
//     specifications: { type: Object },
//     features: [String],
//     applications: [String],
//     // FAQ field asne khup garjeche aahe
//     faqs: [
//         {
//             question: { type: String },
//             answer: { type: String }
//         }
//     ],
//     ctaText: { type: String },
//     image: { type: String },
//     altText: { type: String },
//     metaTitle: { type: String },
//     metaDescription: { type: String }
// }, { timestamps: true });

// module.exports = mongoose.model('Machine', MachineSchema);


const mongoose = require('mongoose');

const MachineSchema = new mongoose.Schema({
    // Machine Details
    name: { type: String, required: true },
    category: { type: String, required: true }, // e.g., "Milling Machines"
    
    // NEW: Category Context (Common for all machines in this category)
    categoryDescription: { type: String }, // User ne kontyahi machine var click kel tari he aadhi disel

    // Machine Specifics
    subTitle: { type: String }, 
    shortDescription: { type: String }, // Machine cards var dakhvnya sathi (2-3 lines)
    description: { type: String }, // Main long description
    
    specifications: { type: Object },
    features: [String],
    applications: [String],
    
    // FAQ Section
    faqs: [
        {
            question: { type: String },
            answer: { type: String }
        }
    ],
    
    // Marketing & Media
    ctaText: { type: String },
    image: { type: String },
    altText: { type: String },
    
    // SEO Fields
    metaTitle: { type: String },
    metaDescription: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Machine', MachineSchema);