
import mongoose from "mongoose"



const Connection=async(username,password)=>{

    const URL =`mongodb://${username}:${password}@ac-g94mcyd-shard-00-00.obfnvjm.mongodb.net:27017,ac-g94mcyd-shard-00-01.obfnvjm.mongodb.net:27017,ac-g94mcyd-shard-00-02.obfnvjm.mongodb.net:27017/?ssl=true&replicaSet=atlas-w9ne8y-shard-0&authSource=admin&retryWrites=true&w=majority`;

try{

await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
console.log('database connected succesfully');

}catch(error)
{
    console.log('error while connecting with database',error)
}

}

export default Connection;