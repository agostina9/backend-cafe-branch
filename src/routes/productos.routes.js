import { Router } from "express";
import { crearProducto, listarProductos, obtenerProducto } from "../controllers/productos.controllers";

const router = Router();

router
  .route("/productos")
  .get(listarProductos)
  .post(crearProducto);

  router.route('/productos/:id')
  .get(obtenerProducto)

  export default router

// app.get("/productos", (req, res) => {
//     res.send("aqui tengo q retornar un arreglo de productos");
//   });
//   app.post("/productos", (req, res) => {
//     res.send("Esto es una  prueba de la peticion get");
//   });
//   app.get("/productos2", (req, res) => {
//     res.send("retornar un objeto");
//   });
