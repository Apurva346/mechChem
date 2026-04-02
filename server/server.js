// // // const express = require('express');
// // // const connectDB = require('./config/db'); // db.js la import kara
// // // require('dotenv').config();

// // // const app = express();

// // // // Database connect karnyacha function call kara
// // // connectDB(); 

// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// // require('dotenv').config();
// // const express = require('express');
// // const cors = require('cors');
// // const connectDB = require('./config/db');


// // const app = express();

// // // Database Connection
// // connectDB();

// // // Middleware
// // app.use(cors()); // He Netlify deployment sathi garjeche aahe
// // app.use(express.json()); // JSON data vachnyasathi

// // app.get('/', (req, res) => {
// //   res.send("API is running...");
// // });

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// 1. Routes import kara (तुमच्या फाईलचा पाथ बरोबर असल्याची खात्री करा)
const machineRoutes = require('./routes/machineRoutes');

const app = express();

// Database Connection
connectDB();

// Middleware
app.use(cors()); 
app.use(express.json()); 

// 2. API Routes register kara
// आता तुमची URL 'http://localhost:5000/api/machines/add' काम करेल
app.use('/api/machines', machineRoutes);

app.get('/', (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));




