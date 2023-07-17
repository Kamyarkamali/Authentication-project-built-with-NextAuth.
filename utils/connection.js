import mongoose from "mongoose"

async function connectDB(){
    if(mongoose.connections[0].readyState) return
    mongoose.set("strictQuery",false)
    await mongoose.connect("mongodb://kamyar021:kamyar021@ac-iaqjqfs-shard-00-00.a6qcuuv.mongodb.net:27017,ac-iaqjqfs-shard-00-01.a6qcuuv.mongodb.net:27017,ac-iaqjqfs-shard-00-02.a6qcuuv.mongodb.net:27017/?ssl=true&replicaSet=atlas-zp2x9q-shard-0&authSource=admin&retryWrites=true&w=majority")
    console.log("connection db");
}

export default connectDB