const express = require('express');
const router = express.Router();
 
const user_controller = require('./user.controller');
 
router.get('/read', user_controller.read);
router.post('/create', user_controller.create);
router.put('/update', user_controller.update);
router.delete('/delete/:id', user_controller.delete);
 
router.get('/read/:id', user_controller.readOne)

router.get('/test', user_controller.test);

module.exports = router;
