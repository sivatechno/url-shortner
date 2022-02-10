const router = require('express').Router();
const userController = require('../controllers/userController')
const auth = require('../middleware/auth')

router.post("/create",userController.create)
router.post("/login",userController.signin)

module.exports = router;