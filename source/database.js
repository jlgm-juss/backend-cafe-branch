import mongoose from "mongoose";

// localhost: 127.0.0.1

const url = "mongodb://127.0.0.1:27017/cafe-branch"; //<---- nombre de las bases de datos (cafe-branch) sin ñ sin acentos sin espacios.

mongoose.connect(url); //<--- de esta manera le pido a mongoose que se conecte a la base de datos

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("BD conectada")
}); //<--- con once lo que quiero decir es... una vez producida la conexion entonces...

