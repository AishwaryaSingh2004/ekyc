// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 3019

// Initialize Express app
const app = express();

app.listen(port,()=>{
    console.log("Server started")
})
const PORT = 2019;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connection successful'))
    .catch(err => console.error('MongoDB connection failed:', err));

// Define Mongoose schema and model
const studentSchema = new mongoose.Schema({
    Username: { type: String, required: true },
    Password: { type: String, required: true },
});

const Student = mongoose.model('Student', studentSchema);

// Serve static files (HTML and CSS)
app.use(express.static(path.join(__dirname)));

// Serve the form page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'next.html'));
});

// Handle form submissions
app.post('/submit', async (req, res) => {
    try {
        const { registerNumber, name, email, branch } = req.body;

        const newStudent = new Student({
            registerNumber,
            name,
            email,
            branch
        });

        await newStudent.save();
        res.send('Form submission successful');
    } catch (err) {
        res.status(500).send('Error saving data');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
