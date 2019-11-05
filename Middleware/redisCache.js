const redisClient=require('../Models/redisDb');

let redisCache=async(req,res,next)=>{

    //check if token provided or not
    const token=req.header('auth_token');
    if(!token) return res.status(401).send('Access Denied');

    const id=req.header('id');
    console.log(id);
    try{
       
        let verified=null;
        redisClient.HVALS('auth_token',(err,tokens)=>{
            // console.log(tokens);
            verified=tokens.filter(authToken=>authToken==token);
            //check verification of the tokens
            req.user=verified;
        });

        next();

    }catch(err){

        res.status(400).send('Invalid Token');
    }
}
module.exports=redisCache;