import mongoose from "mongoose";

const url = "mongodb://localhost:27017/cafe-branch"; //<---- nombre de las bases de datos (cafe-branch) sin ñ sin acentos sin espacios.

// mongoose.connect(url); //<--- de esta manera le pido a mongoose que se conecte a la base de datos

// const connection = mongoose.connection;

// connection.once("open", () => {
//   console.log("BD conectada")
// }); //<--- con once lo que quiero decir es... una vez producida la conexion entonces...

const connectDB = async ()=>{
    console.log('prueba')
    try{
        await mongoose.connect(url);
        console.log('BD conectada')
    }catch(error){
        console.log(error)
    }
}
connectDB();