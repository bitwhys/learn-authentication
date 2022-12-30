var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { heading: 'Finish what you started today before you forget to do it.' })
})

module.exports = router
