



const express = require('express');
const router = express.Router();
const Machine = require('../models/Machine'); 

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

// 2. Get All Machines (GET)
router.get('/all', async (req, res) => {
    try {
        const machines = await Machine.find(); 
        res.status(200).json(machines);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 3. Get Single Machine Details + Siblings (Modified)
// URL: http://localhost:5000/api/machines/name/:machineName
router.get('/name/:machineName', async (req, res) => {
    try {
        const nameToSearch = req.params.machineName.replace(/-/g, ' ');
        
        // Aadhi main machine shodha
        const machine = await Machine.findOne({ 
            name: { $regex: new RegExp(`^${nameToSearch}$`, 'i') } 
        });

        if (!machine) {
            return res.status(404).json({ message: "Machine sapdle nahi" });
        }

        // AATA MAIN LOGIC: Techya category madhlya BAKI sarya machines shodha
        // Fakt current machine la sodun (negle-cting current machine from sibling list)
        const siblings = await Machine.find({ 
            category: machine.category,
            _id: { $ne: machine._id } // Swatahला list madhun kadun taka
        }).select('name image shortDescription'); // Fakt garjecha data dakhva

        // Response madhe donhi data pathva
        res.json({
            machine: machine,
            siblings: siblings
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4. Update/Edit Machine (PUT) - Client sathi garjecha
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

// 5. Delete Machine (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        await Machine.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Machine deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// 6. Get Machines by Category (Navin Route - CategoryPage sathi)
// URL: http://localhost:5000/api/machines/category/:catId
router.get('/category/:catId', async (req, res) => {
    try {
        const categorySlug = req.params.catId; // e.g., "milling-machines"
        const categoryName = categorySlug.replace(/-/g, ' '); // "milling machines"
        
        // Database madhe shodha (Case-insensitive)
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

module.exports = router;