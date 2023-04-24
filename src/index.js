import express from "express";
import cors from "cors";
import morgan from "morgan";
import path  from "path";
//crear una instalcia de express
const app = express();

//crear una variable
app.set("port", process.env.PORT || 4001);
//usar el puerto
app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto" + app.get("port"));
});

//middlewares: funciones que se ejecutan antes de las rutas
//morgan da info extra en la terminal
app.use(morgan('dev'));
//permitir peticiones remotas
app.use(cors());
//middlewares para interpretar los datos json
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//cargar un archivo estatico
app.use(express.static(path.join(__dirname, '../public')))


//rutas: nombre de dominio + ----
//http://localhost:4001/prueba
app.get("/prueba", (req, res) => {
  res.send("Esto es una prueba de la peticion get");
});
