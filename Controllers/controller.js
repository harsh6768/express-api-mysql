
const db=require('../Models/db');

let getPosts=async (req,res)=>{
    
    let sql='SELECT * FROM posts';
    //getPosts
    await db.query(sql,(err,results)=>{
       
        if(err) throw err;
        res.send(results);
    })

}

let getPost=async (req,res)=>{
  
   const id=req.params.id;
   let sql='select * from posts where id=?';

   await db.query(sql,id,(err,result)=>{
       
      if(err) throw err;
      res.send(result);

   });
}

let addPost=async (req,res)=>{

    let {title,post}=req.body;
    
    let singlePost={title,post}=req.body;
    
    let sql='INSERT  INTO posts SET ?';
    //insert into the database
    await db.query(sql,singlePost,(err,result)=>{
          
       if(err) throw err;
       console.log(result);
       res.status(200).send({status:200,post:{title,post},message:'Post inserted successfully...'});
    });

}

let updatePost=async (req,res)=>{
   
    let id=req.params.id;
    let {title,post}=req.body;
    let sql='update posts set title=? ,post=? where id=?';
    
    await db.query(sql,[title,post,id],(err,result)=>{

        if(err) throw err;
        res.status(200).send({status:200,post:{title,post},message:'Post updated successfully'});
        
    });

}
let deletePost=async (req,res)=>{

    let id=req.params.id;
    
    let sql='delete from posts where id=?';
    await db.query(sql,id,(err,result)=>{

        if(err) throw err;
        res.status(200).send({status:200,message:"Post deleted successfully"});

    });

}

module.exports={
    getPosts,
    getPost,
    addPost,
    updatePost,
    deletePost
}