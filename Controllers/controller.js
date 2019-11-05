
const db                    =       require('../Models/mySqlDb');

let getPosts=async (req,res)=>{
    
    let sql='SELECT * FROM posts';
    //getPosts
    db.queryAsync(sql)
    .then(result=>res.send(result))
    .catch(err=>res.send(err.message));

}

let getPost=(req,res)=>{
  
   const id=req.params.id;
   let sql='select * from posts where id=?';

   db.queryAsync(sql,id)
   .then(result=>{
       res.send(result);
   })

}

let addPost=(req,res)=>{

   let singlePost={title,post}=req.body;
    
    let sql='INSERT  INTO posts SET ?';
    //insert into the database
    db.queryAsync(sql,singlePost)
    .then(result=>{
        res.status(200)
        .send(
            {
                status:200,
                post:req.body,
                message:'Post inserted successfully...'
            }
         ); 

    }).catch(err=>console.log(err))
}

let updatePost=(req,res)=>{
   
    let id=req.params.id;
    let {title,post}=req.body;
    let sql='update posts set title=? ,post=? where id=?';
    
    db.queryAsync(sql,[title,post,id])
    .then(result=>{
        
        res.status(200).send({status:200,post:{title,post},message:'Post updated successfully'});

    })
    .catch(err=>{
        console.log(err.message);
    })

}

let deletePost=(req,res)=>{

    let id=req.params.id;
    
    let sql='delete from posts where id=?';
    db.queryAsync(sql,id)
    .then(result=>{
        res.status(200).send({status:200,message:"Post deleted successfully"});
    })
    .catch(err=>res.send(err.message))

}

module.exports={
    getPosts,
    getPost,
    addPost,
    updatePost,
    deletePost
}