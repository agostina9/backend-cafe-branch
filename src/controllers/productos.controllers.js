import { validationResult } from "express-validator";
import Producto from "../models/producto";

export const listarProductos = async (req, res) => {
  try {
    //buscar los productos en la BD
    const listaProductos = await Producto.find();
    //responder al usuario que todo salio bien
    res.status(200).json(listaProductos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar buscar un producto",
    });
  }
};

export const crearProducto = async (req, res) => {
  try {
//manejar los errores de express-validator
const errores =validationResult(req)
//errores.isEmpty()retorna true cuando no hay errores y false si hay
if(!errores.isEmpty()){
  return res.status(400).json({
    errores: errores.array( )
  })
}

    //extraer del body los datos
    console.log(req.body);
    //agregar la validacion correspondiente
    const productoNuevo = new Producto(req.body);
    //guardar ese producto en la BD
    await productoNuevo.save();
    //responder al usuario que todo salio bien
    res.status(201).json({
      mensaje: "El producto fue correctamente creado",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar agregar un producto",
    });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    //obtener el parametro
    console.log(req.params.id);
    //pedirle a la BD el documento que coincide con el id del parametro
    const productoBuscado = await Producto.findById(req.params.id);
    //responder con el producto encontrado
    res.status(200).json(productoBuscado);
  }  catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error, no se pudo encontrar el producto buscado",
    });
  }
};

export const editarProducto = async (req, res)=>{
  try{
    //buscar el producto por el id, luego modificar los datos con el body
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    //responderal fronted
     res.status(200).json({
      mensaje:'El producto fue editado correctamente'
     })
  }catch(error){
    console.log(error)
    res.status(400).json( {
      mensaje:'El producto solicitado no pudo ser editado'
    })
  }
}
export const borrarProducto = async (req, res)=>{
  try{
    //buscar producto por el id y borrarlo
    await Producto.findByIdAndDelete(req.params.id)
    //responder al fronted si pude eliminar el producto
    res.status(200).json({
      mensaje:'El producto fue correctamente eliminado'
    })
  }catch(error){
    console.log(error)
    res.status(400).json( {
      mensaje:'El producto solicitado no pudo ser eliminado'
    })
  }
}