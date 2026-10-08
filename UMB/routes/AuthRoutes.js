const express = require('express');
const router = express.Router();
const {register,login,deleteUser}=require('../controllers/AuthController');
const {upload}=require('../config/multer-config.js');
const User=require('../models/UserModel');
const { updateUser } = require('../controllers/UserController.js');

router.get('/login',(req,res)=>{
    res.json({message:"Login Route"});
});

router.post('/login',login);

router.post('/register',upload.single('profilepic'),register);


router.get('/getAllUsers',async (req,res)=>{
    const users=await User.find();
    console.log(users);
    res.json(users);
})
// router.post('/getUser',async (req,res)=>{
//     const {username}=req.body;
//     const user=await User.findOne({username});
//     console.log(user);
//     res.json(user);
// });



router.put('/editUser/:id',updateUser);

router.delete('/deleteUser/:id',deleteUser);



module.exports = router;