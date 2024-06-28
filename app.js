const express = require('express');
const app = express();
const port = 3033;
const mongoose = require('mongoose');
const path = require('path');

/* TODO-LIST */
// Add bootstrap or tailwind and spruce up UI and layout of index page
// Add sorting category by year and by award category
// Figure out how to capture two award categorie for a single recipient
// Figure out and add error handling and middleware

// Require model
const Recipient = require('./models/recipient');

// Hard-code award categories for sorting
const categories = [
    'Public Sector', 
    'Entrepreneurship', 
    'Private and Corporate Sector', 
    'Community Responsibility',
    'Young Achiever',
    'Sports',
    'Not For Profit',
    'Overall Westpac Outstanding Women'
];

// Connect to MongoDB server running in background
mongoose.connect('mongodb://localhost:27017/wow-awards')
.then(() => {
    console.log('MONGODB CONNECTION SUCCESSFUL!')
})
.catch(err => {
    console.log('MONGODB CONNECTION ERROR');
    console.log(err);
});

// Set settings for static assets
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));

// Set application setting properties for EJS render file
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Handle GET 'recipients' route
app.get('/recipients', async(req, res, next) => {
    const recipients = await Recipient.find({});
    console.log('Recipients index route hit')
    res.render('recipients/index', {recipients, categories});
});

// Handle the GET route for 'recipients' show page
app.get('/recipients/:id', (req, res) => {
    const {id} = req.params;
    console.log(`Accessing recipient ID ${id}`);
    res.send(`Recipient ID: ${id} accessed.`);
});

// Welcome route (index)
app.get('/', (req, res) => {
    res.send('Welcome to the Papua New Guinea Westpac Outsanding Women Awards Portal, the home of incredible women doing incredible things.');
    console.log('Welcome route hit');
});

app.listen(port, () => {
    console.log(`Server running on ${port}.`);
});
