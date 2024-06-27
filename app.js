const express = require('express');
const app = express();
const port = 3033;
const mongoose = require('mongoose');

// Require model
const Recipient = require('./models/recipient');

// Hard-code award categories for sorting
const categories = [
    'Public Sector Award', 
    'Entrepreneurship Award', 
    'Private Sector Award', 
    'Community Responsibility Award',
    'Young Achiever Award',
    'Sports Award',
    'Not-For Profit Award',
    'Westpac Outstanding Woman Award'
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


// Welcome route (index)
app.get('/', (req, res) => {
    res.send('Welcome to the Papua New Guinea Westpac Outsanding Women Awards Portal, the home of incredible women doing incredible things.');
    console.log('Welcome route hit');
});

app.listen(port, () => {
    console.log(`Server running on ${port}.`);
});
