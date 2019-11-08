const redisClient                       =       require('../Models/redisDb');
const jwt                               =       require('jsonwebtoken');
const keys                              =       require('../Config/keys');

let redisCache=async(req,res,next)=>{

    //check if token provided or not
    const token=req.header('auth_token');
    if(!token) return res.status(401).send('Access Denied');

    try{

        //user id
        let id=undefined;
        jwt.verify(token,keys.jwt.SECRET_TOKEN,(err,decode)=>{
            if(err) throw err.message;
            console.log("Decoded Value",decode);
            id=decode.id;  
        })

        //getting the auth_token and then check for it's availability
        redisClient.sismember('multi_auth_token',`${id}-${token}`,(err,isMatchedToken)=>{
          
            // console.log('Value matched!!',isMatchedToken)
            if(isMatchedToken){
                req.user=true;
                next();
            }else{
                res.send({
                    message:'Access Token is invalid!'
                })
            }
        });
        
        // console.log('hello redis database');
        // redisClient.SSCAN('multi_auth_token',0,{match:`${id}*`},(err,authToken)=>{
        //     console.log(authToken);
        // })

    }catch(err){

        res.status(400).send('Invalid Token');
    }
}
module.exports=redisCache;

