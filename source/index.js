import express from "express";
import morgan from "morgan";     //<--------- morgan se usa siempre con parametros
import cors from "cors";         //<--------- cors no usa parámetros
import path  from "path"
import productosRouter from "./routes/productos.routes";
import './database'

//crear una instancia de express
const app = express();

//crear una variable
app.set("port", process.env.PORT || 4000);
//usar el puerto
app.listen(app.get('port'),()=>{
    console.log('Estoy en el puerto '+ app.get('port'));
})

//middlewares: funciones que se ejecutan antes de las rutas
//da información extra en la terminal
app.use(morgan('dev'));
//permitir peticiones remotas 
app.use(cors());
//middlewares para interpetrar objetos JSON de peticiones
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//cargar un archivo estático
app.use(express.static(path.join(__dirname, '../public')));    //<--- .join sirve para concatenar archivos <--- dirname me dice la dirección donde estoy posicionado //<--- .static sirve para cargar archivos estáticos



//rutas nombre de dominio + ----
// http://localhost:4000/
app.use('/apicafe',productosRouter)
