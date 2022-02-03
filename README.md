# express-api-mysql

## :heart: Star :heart: the repo to support the project or :smile:[Follow Me](https://github.com/harsh6768).Thanks!

1. Clone the repository

       git clone https://github.com/harsh6768/express-api-mysql.git

2. Install all the dependency

       npm install


### :::::::Deploy Node.js Project to AMAZON EC2::::::

1. Create EC2 Instance in AWS

2. Run these command on your terminal where pem file exist

       chmod 400 ec2-1.pem  //here ec2-1.pem is file name. you can give any name to file

3. Run below command to connect with ec2 instance 

       ssh -i ec2-1.pem ubuntu@ec2-18-191-201-10.us-east-2.compute.amazonaws.co
  
---->ec2-1.pem                                                        // pem file

---->ubuntu                                                           //by default username

---->ec2-18-191-201-10.us-east-2.compute.amazonaws.co                 //DNS Public domain name

Or just click the connect button to get all the necessary information to connect with the EC2 in your system

<img src="https://github.com/harsh6768/express-api-mysql/blob/master/Images/Screenshot%20from%202019-11-02%2020-47-32.png"/>

You will something like this ...follow these commands to connect with ec2. 

<img src="https://github.com/harsh6768/express-api-mysql/blob/master/Images/Screenshot%20from%202019-11-03%2014-11-07.png"/>

### :::::::Install MySQL in AMAZON EC2::::::

1. Install apt in EC2 ubuntu 

   https://low-orbit.net/how-to-install-yum-on-ubuntu

2. update ubuntu
        
        sudo apt-get update
        
3. Install mysql server

       sudo apt-get install mysql-server
       
4. Run below command to run sql queries
     
       sudo mysql --user=root mysql
      
5. Show list of databases 
       
       show databases;
       
6. Use database : 
   
       use database_name;
       
7. Show list of tables
   
       show tables;
       
8. Update root password after selecting mysql database.
      
       update user set authentication_string='new-password' where user='root';
       
9. Flush privileges
      
       flush privileges;
       exit
10. Restart mysql 
       
       sudo service mysql restart
       
11. Now you can use mysql using root password

       sudo mysql -u root -p
       
### Install MYSQL using yum command if apt-get command not found.

follow below docs. 

https://dev.mysql.com/doc/mysql-repo-excerpt/5.6/en/linux-installation-yum-repo.html
       

## Now Clone any node.js project in ec2 instance and install all the dependency but before that you need to install node and npm in your ec2 instance

## In db.js file you should provide the valid details in mysql.createConnection() method

       const Bluebird=require('bluebird');
       const mysql=require('mysql');

       const connection= mysql.createConnection({
           host : 'localhost',
           user : 'root',           //by default user name
           password :'',            //put password that you have created while installing the mysql in ec2
           database : 'node'       // provide database name ,created in ec2
        });

       connection.connect((err)=>{
           if(err) throw err;
           console.log('MySQL Connected ...');
       });

       global.db=Bluebird.promisifyAll(connection);
       module.exports=db;
                     
                     
## Now set custom port in ec2 instance in which your express server is running after selecting security group from the left navigation view.

<img src="https://github.com/harsh6768/express-api-mysql/blob/master/Images/Screenshot%20from%202019-11-02%2020-38-22.png"/>

You can see we have Custom TCP rule in port 3002. You can set any port in which you are running your express server.


### Now run your project . If you have installed mysql successfully then server will run successfully.

### If you get error 
Client does not support authentication protocol requested by server; consider upgrading MySQL client

### Then you need to change the root plugin in mysql 
#### Run below command

     ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'new_password';

### You are good to go . Run your server. 

####  http://18.191.201.10:3002/getPosts will return all the post in the database

here 18.191.201.10 is the IPv4 Public IP of EC2


### Install NODEJS if there is no APT-GET COMMAND found OR the easy way to install the nodejs and  DOCKER INTO THE EC2


#### 1. Install Docker 

   https://gist.github.com/npearce/6f3c7826c7499587f00957fee62f8ee9
   

### Install Nodejs using ap 

  
   sudo apt install nodejs



#### 2. Install Nodejs using NVM

  https://github.com/nvm-sh/nvm

     nvm install --lts               //install using nodejs

  


      
      
