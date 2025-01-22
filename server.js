const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 3001; // Port number for the server

// Initialize Express app
const app = express();
app.use(express.static(path.join(__dirname))); // Serve static files
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/student');
const db = mongoose.connection;
db.once('open', () => {
    console.log('Mongodb connection successful');
})

// Define Mongoose Schema
const userSchema = new mongoose.Schema({
    bank: { type: String, required: true },
    givenName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    emailID: { type: String, required: true, unique: true },
    loginID: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

// Create Mongoose Model
const Users = mongoose.model('Users', userSchema);

// Serve HTML file on root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'userreg.html'));
});

app.get('/submission', (req ,res) => {
    res.sendFile(path.join(__dirname, 'submission.html'));
});

// Handle form submissions
app.post('/post', async (req, res) => {
        // Destructure the form data from request body
        const { bank, givenName, dateOfBirth, emailID, loginID, password } = req.body;

        // Create a new user instance
        const user = new Users({
            bank,
            givenName,
            dateOfBirth,
            emailID,
            loginID,
            password,
        });
        try{
        // Save the user to the database
        await user.save();
        console.log('User saved:', user);

        res.send('Form Submission Successful');
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send('Error occurred during form submission');
    }
});

// Start the server
app.listen(port, () => {
    console.log("Server started");
});
