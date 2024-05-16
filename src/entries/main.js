// Import the necessary modules.
require('dotenv').config();
const Schools = require('../models/Schools');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
const { error } = require('console');

const app = express();
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
const port = 80; 

async function main_function() {
    try {
    
        await Promise.all([
            Schools.load_records()
        ]);
        console.log('Schools data loaded successfully:', Schools);
    } catch (err) {
        console.error('Failed to load Schools data:', err);
    }
}

main_function();
// main_function().then(() => {

//     app.listen(port, () => {
//         console.log(`Server running on port ${port}`);
//     });
// }).catch(error => {
//     console.error('Error starting the application:', error);
// });
