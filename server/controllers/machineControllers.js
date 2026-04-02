// import Machine from "../models/Machine.js";

// export const createMachine = async (req, res) => {
//   try {
//     const machine = new Machine(req.body);
//     const saved = await machine.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

// export const getMachines = async (req, res) => {
//   const data = await Machine.find();
//   res.json(data);
// };

// export const getMachineById = async (req, res) => {
//   const data = await Machine.findById(req.params.id);
//   res.json(data);
// };
