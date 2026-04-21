// const mongoose = require('mongoose');

// const MachineSchema = new mongoose.Schema({
//     // Machine Details
//     name: { type: String, required: true },
//     category: { type: String, required: true }, // e.g., "Milling Machines"
    
//     // NEW: Category Context (Common for all machines in this category)
//     categoryDescription: { type: String }, // User ne kontyahi machine var click kel tari he aadhi disel

//     // Machine Specifics
//     subTitle: { type: String }, 
//     shortDescription: { type: String }, // Machine cards var dakhvnya sathi (2-3 lines)
//     description: { type: String }, // Main long description
    
//     specifications: { type: Object },
//     features: [String],
//     applications: [String],
    
//     // FAQ Section
//     faqs: [
//         {
//             question: { type: String },
//             answer: { type: String }
//         }
//     ],
    
//     // Marketing & Media
//     ctaText: { type: String },
//     image: { type: String },
//     altText: { type: String },
    
//     // SEO Fields
//     metaTitle: { type: String },
//     metaDescription: { type: String }
// }, { timestamps: true });

// module.exports = mongoose.model('Machine', MachineSchema);


const mongoose = require('mongoose');

const MachineSchema = new mongoose.Schema({
    // dataType tharvel ki ha data kashacha aahe (product, logo, testimonial, hero_bg)
    dataType: { 
        type: String, 
        required: true, 
        default: 'product',
        enum: ['product', 'logo', 'testimonial', 'hero_bg'] 
    }, 

    // Machine Details (Products sathi)
    name: { type: String, required: true },
    category: { type: String }, 
    categoryDescription: { type: String },
    subTitle: { type: String }, 
    shortDescription: { type: String }, 
    description: { type: String }, 
    
    specifications: { type: Object },
    features: [String],
    applications: [String],
    
    faqs: [
        {
            question: { type: String },
            answer: { type: String }
        }
    ],
    
    // Media & SEO
    ctaText: { type: String },
    image: { type: String }, // Path: /images/logo/dmech.jpeg kiva /images/machines/machine.png
    altText: { type: String },
    metaTitle: { type: String },
    metaDescription: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Machine', MachineSchema);