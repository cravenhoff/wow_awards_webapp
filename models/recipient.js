const mongoose = require('mongoose'); // require mongoose ODM package
const Schema = mongoose.Schema;

// Define 'recipient' collection schema
const recipientSchema = new Schema({
    year: {
        type: Number,
        required: [true, 'Award year cannot be blank']
    },
    award_category: {
        type: String,
        required: [true, 'Award category cannot be blank'],
        enum: [
            'Public Sector Award', 
            'Entrepreneurship Award', 
            'Private Sector Award', 
            'Community Responsibility Award',
            'Young Achiever Award',
            'Sports Award',
            'Not-For Profit Award',
            'Westpac Outstanding Woman Award'
        ]
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
const Recipient = mongoose.Model('Recipient', recipientSchema);

// Export recipient model
module.exports = Recipient;