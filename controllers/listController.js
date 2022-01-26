const db = require('../models')

const List = db.list

const addList = async (req, res) => {
    let info = {
        listDetails: req.body.listDetails,
        userId: req.body.userId
    }
    const list = await List.create(info)
    res.status(200).send(list)
}

const getAllList = async (req, res) => {
    const list = await List.findAll()
    res.status(200).send(list)
}

const getList = async (req, res) => {
    const list = await List.findOne({
        where: {
            id: req.params.lid
        }
    })
    res.status(200).send(list)
}

const updateList = async (req, res) => {

    const list = await List.update(req.body, { where: { id:  req.params.lid }})

    res.status(200).send(list)
}

module.exports = {
    addList,
    getAllList,
    getList,
    updateList
}