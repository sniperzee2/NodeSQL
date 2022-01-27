const router = require('express').Router();
const companyController = require('../controllers/companyController')
const userController = require('../controllers/userController')
const taskController = require('../controllers/taskController')
const listController = require('../controllers/listController')
const resultsController = require('../controllers/resultController')
const unionController = require('../controllers/unionController')

router.post('/addCompany', companyController.addCompany)
router.post('/getAllCompany', companyController.getAllCompany)
router.get('/getCompany/:cid', companyController.getCompany)
router.put('/updateCompany/:cid', companyController.updateCompany)

router.post('/addUser', userController.addUser)
router.get('/getAllUsers', userController.getAllUser)
router.get('/getUser/:uid', userController.getUser)
router.put('/updateUser/:uid', userController.updateUser)

router.post('/addList', listController.addList)
router.get('/getAllLists', listController.getAllList)
router.get('/getList/:lid', listController.getList)
router.put('/updateList/:lid', listController.updateList)

router.post('/addTask', taskController.addTask)
router.get('/getAllTasks', taskController.getAllTask)
router.get('/getTask/:tid', taskController.getTask)
router.put('/updateTask/:tid', taskController.updateTask)

router.post('/addUnion', unionController.addUnion)
router.get('/getAllUnion', unionController.getAllUnion)

router.post('/results/:cid', resultsController.results)

module.exports = router
