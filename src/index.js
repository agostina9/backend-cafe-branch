import express from "express";

//crear una instalcia de express
const app = express();

//crear una variable
app.set("port", process.env.PORT || 4001);
//usar el puerto
app.listen( app.get('port'),()=>{
    console.log('Estoy en el puerto'+ app.get('port'))
} )

console.log("hola mundooo");
