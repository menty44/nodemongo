const express = require('express');
const Model = require('../models/model');
const router = express.Router();

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age,
        sacks: req.body.sacks,
        goals: req.body.goals,
        touchdown: req.body.touchdown,
        rushing_yards: req.body.rushing_yards
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send({state: "deleted", message: `Document with ${data.name} has been deleted..`})
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get highest Touchdowns
router.get('/touchdowns', async (req, res) => {
    try {
        const data = await Model.find().sort({"touchdown": -1}).limit(1);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get highest Rushing Yards
router.get('/rushingyards', async (req, res) => {
    try {
        const data = await Model.find().sort({"rushing_yards": -1}).limit(1);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get highest Sacks
router.get('/sacks', async (req, res) => {
    try {
        const data = await Model.find().sort({"sacks": -1}).limit(1);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get highest Sacks
router.get('/rushingyards/least', async (req, res) => {
    try {
        const data = await Model.find().sort({"rushing_yards": 1}).limit(1);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;