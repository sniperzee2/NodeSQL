const db = require('../models')

const User = db.user

const addUser = async (req, res) => {
    let info = {
        name: req.body.name,
        email: req.body.email,
        companyId: req.body.companyId
    }
    try{
        const user = await User.create(info)
        res.status(200).send(user)
    }catch(err){
        res.status(500).send(err)
    }
}

const getAllUser = async (req, res) => {
    try{
        const user = await User.findAll()
        res.status(200).send(user)
    }catch(err){
        res.status(500).send(err)
    }
}

const getUser = async (req, res) => {
    try{
        const user = await User.findOne({
            include: [{
                model: db.list,
                as: 'list'
            }],
            where: {
                id: req.params.uid
            }
        })
        res.status(200).send(user)
    }catch(err){
        res.status(500).send(err)
    }
    
}

const updateUser = async (req, res) => {

    try{
        const user = await User.update(req.body, { where: { id:  req.params.uid }})

    res.status(200).send(user)
    }catch(err){
        res.status(500).send(err)
    }
}

module.exports = {
    addUser,
    getAllUser,
    getUser,
    updateUser
}