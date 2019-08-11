const express=require('express');
const app=express();

const controllers=require('../Controllers/controller');

const router=express.Router();


router.route('/getPosts').get(controllers.getPosts);
router.route('/getPost/:id').get(controllers.getPost);
router.route('/addPost').post(controllers.addPost);
router.route('/updatePost/:id').put(controllers.updatePost);
router.route('/deletePost/:id').delete(controllers.deletePost);

module.exports=router;

