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

1. update ubuntu
        
        sudo apt-get update
        
2. Install mysql server

       sudo apt-get install mysql-server
       
3. Run below command to run sql queries
     
       sudo mysql --user=root mysql
       
4. Update root password after selecting mysql database.
      
       update user set authentication_string=PASSWORD('new-password') where user='root';
      
