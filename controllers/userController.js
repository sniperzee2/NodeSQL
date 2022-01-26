const db = require('../models')

const User = db.user

const addUser = async (req, res) => {
    let info = {
        name: req.body.name,
        email: req.body.email,
        companyId: req.body.companyId
    }
    const user = await User.create(info)
    res.status(200).send(user)
}

const getAllUser = async (req, res) => {
    const user = await User.findAll()
    res.status(200).send(user)
}

const getUser = async (req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.uid
        }
    })
    res.status(200).send(user)
}

const updateUser = async (req, res) => {

    const user = await User.update(req.body, { where: { id:  req.params.uid }})

    res.status(200).send(user)
}

module.exports = {
    addUser,
    getAllUser,
    getUser,
    updateUser
}