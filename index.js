const express  = require('express');
const finTech = require('./fintech')
const app = express();
 
require('dotenv').config();
const port = process.env.PORT;

app.get('/fintech', (req, res) => {
    // finTech.forEach(companies =>{
    //     res.write(companies.name + '\n')
    // })
    // res.end()
    res.send(finTech)
})

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
})