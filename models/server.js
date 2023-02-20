const express = require("express");
const cors = require('cors');
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';

    /*Middlewares (no es más que fnciones que van a añadirle otra funcionalidad a mi web server)es una función que siempre va a ejecutarse cuando nosotros levantemos  nuestro servidor*/
    this.middlewares();

    //Rutas de mi aplicación

    this.routes();
  }

  middlewares() {
   
    //Middleware CORS 
    this.app.use( cors() );

    //Middleware parseo y lectura del body
     this.app.use( express.json() );
   
    //Directotio Público
    this.app.use(express.static("public"));
  }

  routes() {
   
      this.app.use(this.usersPath, require('../routes/user'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto ", this.port);
    });
  }
}

module.exports = Server;
