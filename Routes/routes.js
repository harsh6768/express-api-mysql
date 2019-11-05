const router                =       require('express').Router();
const controllers           =       require('../Controllers/controller');
const authController        =       require('../Controllers/authController');
const verifyToken           =       require('../Middleware/verifyToken');
const redisCache            =       require('../Middleware/redisCache');

router.route('/getPosts').get(redisCache,controllers.getPosts);
router.route('/getPost/:id').get(verifyToken,controllers.getPost);
router.route('/addPost').post(verifyToken,controllers.addPost);
router.route('/updatePost/:id').put(verifyToken,controllers.updatePost);
router.route('/deletePost/:id').delete(verifyToken,controllers.deletePost);

//User routes
router.route('/user/register').post(authController.registerUser);
router.route('/user/login').post(authController.loginUser);

module.exports=router;

