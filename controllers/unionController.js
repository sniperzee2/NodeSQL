const db = require('../models')

const Union = db.union

const addUnion = async (req, res) => {
    let info = {
        userId: req.body.userId,
        listId: req.body.listId
    }
    const union = await Union.create(info)
    res.status(200).send(union)
}

const getAllUnion = async (req, res) => {
    const union = await Union.findAll()
    res.status(200).send(union)
}

module.exports = {
    addUnion,
    getAllUnion
}