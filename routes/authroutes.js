const {Router}=require('express');
const {register,login,me}=require('../controllers/authcontroller')
const auth=require('../middlewares/auth')
let router=Router();
router.post('/register',register)
router.post('/login',login)
router.get('/me',auth,me)
module.exports=router
