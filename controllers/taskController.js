const db = require('../models')

const Task = db.task

const addTask = async (req, res) => {
    let info = {
        task: req.body.task,
        pending: req.body.pending ? req.body.pending : true,
        listId: req.body.listId
    }
    const task = await Task.create(info)
    res.status(200).send(task)
}

const getAllTask = async (req, res) => {
    const task = await Task.findAll()
    res.status(200).send(task)
}

const getTask = async (req, res) => {
    const task = await Task.findOne({
        where: {
            id: req.params.tid
        }
    })
    res.status(200).send(task)
}

const updateTask = async (req, res) => {

    const task = await Task.update(req.body, { where: { id:  req.params.tid }})

    res.status(200).send(task)
}

module.exports = {
    addTask,
    getAllTask,
    updateTask,
    getTask
}