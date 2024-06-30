const express = require('express');
const app = express();
const port = 3033;
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');

/* TODO-LIST */
// Add bootstrap or tailwind and spruce up UI and layout of index page
// Add sorting category by year and by award category
// Figure out how to capture two award categorie for a single recipient
// Figure out and add error handling and middleware
// Add partials to separate out the header and footer markup
// Update BETTY HIGGINS 'award category sponsor' field

// Require model
const Recipient = require('./models/recipient');

// Hard-code award categories for sorting
const categories = [
    'Public Sector', 
    'Entrepreneur', 
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
app.use(methodOverride('_method'));

// Set application setting properties for EJS render file
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Handle GET 'recipients' route
app.get('/recipients', async(req, res, next) => {
    const recipients = await Recipient.find({});
    console.log('Recipients index route hit')
    res.render('recipients/index', {recipients, categories});
});

// Handle route for 'new' recipients
app.get('/recipients/new', (req, res) => {
    console.log('New recipient route hit');
    res.render('recipients/new');
});

app.post('/recipients', (req, res) => {
    const newRecipient = new Recipient(req.body);
    newRecipient.save();
    res.redirect(`/recipients/${newRecipient.id}`);
});

// Handle the PUT route for 'recipients'
app.get('/recipients/:id/edit', async (req, res) => {
    const {id} = req.params;
    const recipient = await Recipient.findById(id);
    console.log(recipient);
    res.render('recipients/edit');
});

// Handle the GET route for 'recipients' show page
app.get('/recipients/:id', async (req, res) => {
    const {id} = req.params;
    const recipient = await Recipient.findById(id);
    console.log(`Accessing ${recipient}`);
    res.render('recipients/show', {recipient});
});

// Welcome route (index)
app.get('/', (req, res) => {
    res.send('Welcome to the Papua New Guinea Westpac Outsanding Women Awards Portal, the home of incredible women doing incredible things.');
    console.log('Welcome route hit');
});

app.listen(port, () => {
    console.log(`Server running on ${port}.`);
});
