const db = require('../models')

const Union = db.union

const addUnion = async (req, res) => {
    let info = {
        userId: req.body.userId,
        listId: req.body.listId
    }
    try{
        const union = await Union.create(info)
        res.status(200).send(union)
    }catch(err){
        res.status(500).send(err)
    }
}

const getAllUnion = async (req, res) => {
    try{
        const union = await Union.findAll()
        res.status(200).send(union)
    }catch(err){
        res.status(500).send(err)
    }
}

module.exports = {
    addUnion,
    getAllUnion
}