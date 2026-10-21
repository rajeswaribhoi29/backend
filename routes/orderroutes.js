const {Router}=require('express');
const auth=require('../middlewares/auth')
const {createorder,myorders}=require('../controllers/ordercontroller')
let router=Router();
router.use(auth)
router.post('/',createorder)
router.get('/',myorders)
module.exports=router
