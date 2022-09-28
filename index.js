const express  = require('express');
let finTech = require('./fintech')
const bodyParser = require('body-parser')

const app = express();
 
require('dotenv').config();
const port = process.env.PORT;

//Read (GET)
app.get('/', (req, res) => {
    // finTech.forEach(companies =>{
    //     res.write(companies.name + '\n')
    // })
    // res.end()
    res.send(finTech)
})

//Find (GET)
app.get('/:id', (req, res) =>{
    const id = req.params.id
    const foundFintech = finTech.find((fintechDetails) => fintechDetails.id == id )
    res.send(foundFintech)
})

//Create (POST)
app.use(bodyParser.json())
app.post('/', (req, res) => {
    const fintechDetails = req.body
    finTech.push(fintechDetails)
    res.send(`The fintech company with the name ${fintechDetails.name} has been added to the list !`)
})

//Update (PATCH) 
app.patch('/:id', (req, res) =>{
    const finTechID = req.params.id
    const { id, name, location } = req.body
    const updateDetails = finTech.find((finTech) => finTech.id == finTechID)
    
    if(id){
        updateDetails.id = id
    }
    if(name){
        updateDetails.name = name
    }
    if(location){
        updateDetails.location = location
    }

    res.send(`The detail(s) of the fintech with id ${finTechID} has been updated !`)
})

//Delete (DELETE)
app.delete('/:id', (req, res) =>{
    const id = req.params.id
    finTech = finTech.filter((finTech) => finTech.id != id )
    res.send(`The fintech company with the ID ${id} has been deleted from the database`)
})
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
})