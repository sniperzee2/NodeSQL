const db = require('../models')

const Company = db.company
const User = db.user
const List = db.list
const Task = db.task

const addCompany = async (req, res) => {
    let info = {
        companyName: req.body.companyName
    }
    try{
        const company = await Company.create(info)
        res.status(200).send(company)
    }catch(err){
        res.status(500).send(err)
    }
}

const getAllCompany = async (req, res) => {
    try{
        const company = await Company.findAll({
            include: [{
                model: User,
                as: 'user',
            }]
        })
        res.status(200).send(company)
    }catch(err){
        res.status(500).send(err)
    }
    
}

const getCompany = async (req, res) => {
    try{
        const company = await Company.findOne({
            where: {
                id: req.params.cid
            }
        })
        res.status(200).send(company)
    }catch(err){
        res.status(500).send(err)
    }
}

const updateCompany = async (req, res) => {

    try{
        const company = await Company.update(req.body, { where: { id:  req.params.cid }})
    
        res.status(200).send(company)
    }catch(err){
        res.status(500).send(err)
    }
}


module.exports = {
    addCompany,
    getAllCompany,
    getCompany,
    updateCompany
}