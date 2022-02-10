const router = require('express').Router();
const {urlController,urlShow} = require('../controllers/urlController')
const auth = require('../middleware/auth')

router.post("/createurl",auth,urlController.createurl)
router.get("/geturl",auth,urlShow.geturl)

module.exports = router;