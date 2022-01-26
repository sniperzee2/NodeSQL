const db = require('../models')

const Company = db.company
const User = db.user
const List = db.list
const Task = db.task

const results = async (req, res) => {
    const company = await Company.findOne({
        include: [{
            model: User,
            as: 'user',
            include: [{
                model: List,
                as: 'list',
                include: [{
                    model: Task,
                    as: 'task',
                    where: {
                        pending: true
                    }
                }],
            }],
            where: {id: req.body.uid}
        }],
        where: {id: req.params.cid}
    })
    if(company){
        res.status(200).send(company)
    }else{
        res.status(404).json({
            message: 'No user'
        })
    }
}

module.exports = {
    results
}