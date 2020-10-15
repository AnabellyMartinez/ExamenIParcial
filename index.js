// Importar express
const express = require("express");
// Importar handlebars como template engine
const exphbs = require("express-handlebars");
// Importar body parser que nos permite acceder al cuerpo de la petición HTTP
const bodyParser = require("body-parser");
// Importar la función de cálculo de método francés



const { ejercicio1 } = require("./ejerciciospractica");


const { ejercicio2 } = require("./ejerciciospractica");
// Crear un servidor express
const app = express();



// Indicar a express utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");

// Habilitar body parse para leer los datos del cuerpo de peticiones POST
app.use(bodyParser.urlencoded({ extended: true }));

// Crear una ruta para /
// Información sobre los verbos HTTP
// https://developer.mozilla.org/es/docs/Web/HTTP/Methods


app.get("/", (req, res, next) => {
  res.render("menu");
});
app.get("/ejercicio1", (req, res, next) => {
  res.render("ejercicio1");
});

app.post("/ejercicio1", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { numero } = req.body;

  const array= ejercicio1(numero);

  res.render("visualizarejercicio1", {array});
});




app.get("/ejercicio2", (req, res, next) => {
  res.render("ejercicio2");
});

app.post("/ejercicio2", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { num } = req.body;

  const numero= ejercicio2(num);

  res.render("visualizarejercicio2", {numero});
});




// Inicializar el servidor en un puerto en específico
app.listen(5000, () => {
  console.log("Servidor ejecutándose en el puerto 5000");
});
