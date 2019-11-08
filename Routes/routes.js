const router                            =       require('express').Router();
const controllers                       =       require('../Controllers/controller');
const authController                    =       require('../Controllers/authController');
const verifyToken                       =       require('../Middleware/verifyToken');
const redisSingleSignOn                 =       require('../Middleware/redisSingleSignOn');
const redisMultiSessionSignOn           =       require('../Middleware/redisMultiSession');

router.route('/getPosts').get(redisMultiSessionSignOn,controllers.getPosts);
router.route('/getPost/:id').get(redisSingleSignOn,controllers.getPost);
router.route('/addPost').post(redisSingleSignOn,controllers.addPost);
router.route('/updatePost/:id').put(redisSingleSignOn,controllers.updatePost);
router.route('/deletePost/:id').delete(redisSingleSignOn,controllers.deletePost);

//User routes
router.route('/user/register').post(authController.registerUser);
router.route('/user/login').post(authController.loginUser);

module.exports=router;

