import { Router } from "express";
import {
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers";

const router = Router();

router
  .route("/productos") //<------ .route lo que hace es crear una ruta
  .get(listarProductos) //<--------- con un punto voy agregando las nuevas peticiones
  .post(crearProducto);

router.route("/productos/:id").get(obtenerProducto).put(editarProducto);
// .delete()

export default router;

//       app.get('/productos2', (req, res)=>{
//        res.send('Aqui devolvemos un producto')
//       })
