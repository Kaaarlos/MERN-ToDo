const express = require('express');
const router =  express.Router();

const Task = require('../models/tasks');

router.get('/',async (req,res) =>{
    
    const tasks = await Task.find();
    console.log(tasks);
    res.json('recivided')

});

router.get('/:id',async (req,res) =>{
    const task = Task.findById(req.params.id);
    res.json(task);
});

router.post('/',async (req,res) =>{
    const {title,description}  =req.body;
    const task = new Task({title,description});
    await task.save();
    res.json({status: 'task saved'})
});

router.put('/:id',async (req,res) =>{
    const {title,description} =req.body;
    const newTask = {title,description};
    await Task.findByIdAndUpdate(req.params.id,newTask);
    res.json({status: 'tarea actualizada'});
});

router.delete('/:id',async (req,res) =>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'tarea eliminada'});
});

module.exports = router;