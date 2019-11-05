// const Bluebird          =       require('bluebird');
// const redis             =       Bluebird.promisifyAll(require('redis'));
const redis             =       require('redis');
const keys              =       require('../Config/keys');
//Creating redis client
const redisClient=redis.createClient(keys.REDIS_PORT.PORT)
module.exports=redisClient;