const express = require('express');
const router = express.Router();
const Machine = require('../models/Machine'); 


// ==============================
// ✅ NEW ROUTE (MOST IMPORTANT)
// ==============================
// 👉 यामुळे http://localhost:5000/api/machines चालेल
router.get('/', async (req, res) => {
    try {
        const machines = await Machine.find();
        res.status(200).json(machines);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// 1. Add Machine (POST)
router.post('/add', async (req, res) => {
    try {
        const newMachine = new Machine(req.body);
        const savedMachine = await newMachine.save();
        res.status(201).json(savedMachine);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


// 2. Get All Machines (GET) (optional - तू ठेवू शकतोस)
router.get('/all', async (req, res) => {
    try {
        const machines = await Machine.find(); 
        res.status(200).json(machines);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// 3. Get Single Machine + Siblings
router.get('/name/:machineName', async (req, res) => {
    try {
        const nameToSearch = req.params.machineName.replace(/-/g, ' ');
        
        const machine = await Machine.findOne({ 
            name: { $regex: new RegExp(`^${nameToSearch}$`, 'i') } 
        });

        if (!machine) {
            return res.status(404).json({ message: "Machine sapdle nahi" });
        }

        const siblings = await Machine.find({ 
            category: machine.category,
            _id: { $ne: machine._id }
        }).select('name image shortDescription');

        res.json({
            machine: machine,
            siblings: siblings
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// 4. Update Machine
router.put('/:id', async (req, res) => {
    try {
        const updatedMachine = await Machine.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body }, 
            { new: true }
        );
        res.status(200).json(updatedMachine);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


// 5. Delete Machine
router.delete('/:id', async (req, res) => {
    try {
        await Machine.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Machine deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// 6. Get Machines by Category
router.get('/category/:catId', async (req, res) => {
    try {
        const categorySlug = req.params.catId;
        const categoryName = categorySlug.replace(/-/g, ' ');
        
        const machines = await Machine.find({ 
            category: { $regex: new RegExp(`^${categoryName}$`, 'i') } 
        });

        if (machines.length === 0) {
            return res.status(404).json({ message: "Ya category madhe machines sapdle nahit" });
        }

        res.status(200).json(machines);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// =============================================================
// 🔥 7. NEW ROUTE FOR ALL MACHINES GRID (CATALOG GROUPED) 🔥
// =============================================================
// 👉 यामुळे http://localhost:5000/api/machines/catalog-grouped चालेल
router.get('/catalog-grouped', async (req, res) => {
    try {
        // MongoDB Aggregation run karun flat array la category wise group kela
        const groupedCatalog = await Machine.aggregate([
            // Testimonials ani empty categories filter kelya
            {
                $match: {
                    dataType: { $ne: "testimonial" },
                    category: { $exists: true, $ne: null, $ne: "" }
                }
            },
            // Category field var grouping logic
            {
                $group: {
                    _id: "$category", 
                    categoryName: { $first: "$category" },
                    machinesList: {
                        $push: {
                            name: "$name",
                            subTitle: "$subTitle", 
                            image: "$image"       
                        }
                    }
                }
            },
            // Alphabetical order sathi sorting dila
            { $sort: { categoryName: 1 } }
        ]);

        res.status(200).json(groupedCatalog);
    } catch (err) {
        console.error("Aggregation custom route failure:", err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;