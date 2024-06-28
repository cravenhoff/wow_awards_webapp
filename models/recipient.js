const mongoose = require('mongoose'); // require mongoose ODM package

// Define 'recipient' collection schema
const recipientSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: [true, 'Award year cannot be blank']
    },
    award_category: {
        type: String,
        required: [true, 'Award category cannot be blank'],
        enum: [
            'Public Sector', 
            'Entrepreneur', 
            'Private and Corporate Sector', 
            'Community Responsibility',
            'Young Achiever',
            'Sports',
            'Not For Profit',
            'Overall Westpac Outstanding Women'
        ]
    },
    sponsor: {
        type: String
    },
    first_name: {
        type: String,
        required: [true, 'First name cannot be blank']
    },
    last_name: {
        type: String,
        required: [true, 'Last name cannot be blank']
    },
    profile_description: {
        type: String
    },
    profile_photo: {
        type: String
    }
});

// Compile schema into recipient model
const Recipient = mongoose.model('Recipient', recipientSchema);

// Export recipient model
module.exports = Recipient;