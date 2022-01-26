const db = require('../models')

const Company = db.company
const User = db.user
const List = db.list
const Task = db.task

const addCompany = async (req, res) => {
    let info = {
        companyName: req.body.companyName
    }
    const company = await Company.create(info)
    res.status(200).send(company)
}

const getAllCompany = async (req, res) => {
    const company = await Company.findAll({
        include: [{
            model: User,
            as: 'user',
        }]
    })
    res.status(200).send(company)
}

const getCompany = async (req, res) => {
    const company = await Company.findOne({
        where: {
            id: req.params.cid
        }
    })
    res.status(200).send(company)
}

const updateCompany = async (req, res) => {

    const company = await Company.update(req.body, { where: { id:  req.params.cid }})

    res.status(200).send(company)
}


module.exports = {
    addCompany,
    getAllCompany,
    getCompany,
    updateCompany
}