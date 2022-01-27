const db = require('../models')

const Task = db.task

const addTask = async (req, res) => {
    let info = {
        task: req.body.task,
        pending: req.body.pending ? req.body.pending : true,
        listId: req.body.listId
    }
    try{
        const task = await Task.create(info)
        res.status(200).send(task)
    }catch(err){
        res.status(500).send(err)
    }
}

const getAllTask = async (req, res) => {
    try{
        const task = await Task.findAll()
        res.status(200).send(task)
    }catch(err){
        res.status(500).send(err)
    }
}

const getTask = async (req, res) => {
    try{
        const task = await Task.findOne({
            where: {
                id: req.params.tid
            }
        })
        res.status(200).send(task)
    }catch(err){
        res.status(500).send(err)
    }
}

const updateTask = async (req, res) => {

    try{
        const task = await Task.update(req.body, { where: { id:  req.params.tid }})
    
        res.status(200).send(task)
    }catch(err){
        res.status(500).send(err)
    }

}

module.exports = {
    addTask,
    getAllTask,
    updateTask,
    getTask
}