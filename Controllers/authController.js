const db                     =       require('../Models/mySqlDb');
const bcrypt                 =       require('bcrypt');
const jwt                    =       require('jsonwebtoken');
const keys                   =       require('../Config/keys');
const redisClient            =       require('../Models/redisDb');

let registerUser=async(req,res)=>{

    const {
        username,
        email,
        phone,
        password
    }=req.body;
   
    //to encrypt the password
    let hash=await bcrypt.hash(password,10);

    let sql='select * from users';
    const users=await db.queryAsync(sql);

    //check if user already exist
    let userArr=users.filter(user=>user.phone===phone)

    if(userArr.length<1){
     
        let sql='insert into users set ?';

        let user={
            username,
            email,
            phone,
            password:hash
        }
        //insert the data 
        db.queryAsync(sql,user)
        .then(user=>{
            res.send({
                status:200,
                body:user,
                message:'User registered successfully!!!'
            })
        })
        .catch(err=>{
            res.send({
                status:500,
                body:err.message,
                message:'Internal server error'
            })
        })

    }else{

        res.send({
            status:400,
            message:'User already exist with this phone number'
        })

    }

}

let loginUser=async(req,res)=>{

<<<<<<< Updated upstream
=======
    // console.log(os.networkInterfaces());
    // console.log(req.ipInfo);

>>>>>>> Stashed changes
    const{
        email,
        password
    }=req.body;
     
    let sql='select * from users';
    let users=await db.queryAsync(sql);

    //if user exist with phone number
    let user=users.filter(user=>user.email==email);
    if(user){

        console.log(user[0].password);
        //check for password
        const isLogin=await bcrypt.compare(password,user[0].password);  //   return true/false
        if(isLogin){
            
            //creating jwt token
            const token=jwt.sign({id:user[0].id},keys.jwt.SECRET_TOKEN);
            /**
             * *****************************************************
             * ****************Single Sign On***********************
             * *****************************************************
             * *****************************************************
             */
            /**
             * For Sigle Sign-On Authentication --->Like Whatsapp Mobile Functionality 
             * We are using the redis client to check whether user already logged in or not
             * We will be using redis hashes to store the auth_token
             */

           //check if user already login in another device using redis 
            // let auth_token=await redisClient.hget('auth_token',user[0].id);

            //We don't need to check whether token is present or not
            //setting the token in the set

            // await redisClient.hmset('auth_token',user[0].id,token);


            /**
             * ******************************************************
             * *****************Multi Session Login******************
             * ******************************************************
             * ******************************************************
             * 
             */
            /**
             * @param we use redis set for multi session login 
             * @operation --> add id-token in set
             */
            
            redisClient.sadd('multi_auth_token',`${user[0].id}-${token}`);

            res.header('auth_token',token).send({
                status:200,
                body:{
                    token
                },
                message:'Login Successfully!!!'
            })

        }else{

            res.send({
                status:400,
                message:'Please enter valid password'
            })
        }

    }else{
        res.send({
            status:400,
            message:'Please enter valid phone number'
        })
    }
}

let logout=async(req,res)=>{
    
}

module.exports={
    registerUser,
    loginUser
}