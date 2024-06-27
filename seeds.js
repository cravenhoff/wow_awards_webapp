const mongoose = require('mongoose'); // require mongoose ODM package
const Recipient = require('./models/recipient'); // require 'recipient' model

// Connect to MongoDB server running in background
mongoose.connect('mongodb://localhost:27017/wow-awards')
.then(() => {
    console.log('MONGODB CONNECTION SUCCESSFUL!')
})
.catch(err => {
    console.log('MONGODB CONNECTION ERROR');
    console.log(err);
});

const seedRecipients = [
    {
        year: 2014,
        award_category: 'Private and Corporate Sector',
        sponsor: 'PricewaterhouseCoopers',
        first_name: 'Lesieli',
        last_name: 'Taviri',
        profile_description: 'Lesieli Moala Taviri is a businesswoman and chief executive from Papua New Guinea. In 2014 she was the winner of the Westpac Outstanding Women Award in Papua New Guinea.[1] She is currently Executive General Manager Banking & PNG Country Head for PNG-based Kina Bank.',
        profile_photo: 'img/recipients/lesieli-taviri.jpg'
    },
    {
        year: 2018,
        award_category: 'Not For Profit',
        sponsor: 'Steamships',
        first_name: 'Priscilla',
        last_name: 'Kevin',
        profile_description: 'Priscilla Kevin has been a volunteer with the PNG Digital ICT Cluster for three years and founded the PNG Women in STEM (science, technology, engineering and maths) Association two years ago. She also runs her own business IN4NET and is passionate about finding funding, partnerships, or spaces with organisations, government and universities, for individuals or clusters to realise their dreams in furthering their education or to bring innovations to life.',
        profile_photo: 'img/recipients/priscilla-kevin.jpg'
    },
    {
        year: 2018,
        award_category: 'Overall Westpac Outstanding Women',
        sponsor: '',
        first_name: 'Ruth Jewels',
        last_name: 'Kissam',
        profile_description: 'Ruth Kissam is a community organizer and a human rights activist who has focused on Sorcery Accusation Related Violence (SRV) in Papua New Guinea. She was awarded the Westpac Outstanding Woman (WOW) Award in Papua New Guinea in 2018.',
        profile_photo: 'img/recipients/ruth-kissam.jpg'
    },
    {
        year: 2015,
        award_category: 'Public Sector',
        sponsor: 'Pacific Assurance Group',
        first_name: 'Dr. Evelyn',
        last_name: 'Lavu',
        profile_description: "Evelyn Lavu (died August 2021) was the most senior pathologist in Papua New Guinea (PNG) and a recognised leader in the fight against HIV, malaria and drug-resistant tuberculosis. She was Director of the Central Public Health Laboratory in Papua New Guinea for over a decade and, in June 2021, became PNG's first and only female Professor of Medicine.",
        profile_photo: 'img/recipients/dr-evelyn-lavu.png'
    }
];

// Recipient.insertMany(seedRecipients).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err);
// });