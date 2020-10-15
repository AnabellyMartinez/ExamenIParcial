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


const { ejercicio3} = require("./ejerciciospractica");
// Crear un servidor express
const app = express();


const { ejercicio4} = require("./ejerciciospractica");
// Crear un servidor express
const app = express();

const { ejercicio5} = require("./ejerciciospractica");
// Crear un servidor express
const app = express();

const { ejercicio6} = require("./ejerciciospractica");
// Crear un servidor express
const app = express();

const { ejercicio7} = require("./ejerciciospractica");
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



app.get("/ejercicio3", (req, res, next) => {
  res.render("ejercicio3");
});

app.post("/ejercicio3", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { num } = req.body;

  const numero= ejercicio3(num);

  res.render("visualizarejercicio3", {numero});
});




app.get("/ejercicio4", (req, res, next) => {
  res.render("ejercicio4");
});

app.post("/ejercicio4", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { num } = req.body;

  const numero= ejercicio4(num);

  res.render("visualizarejercicio4", {numero});
});

app.get("/ejercicio5", (req, res, next) => {
  res.render("ejercicio3");
});

app.post("/ejercicio5", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { num } = req.body;

  const numero= ejercicio5(num);

  res.render("visualizarejercicio5", {numero});
});

app.post("/ejercicio6", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { num } = req.body;

  const numero= ejercicio6(num);

  res.render("visualizarejercicio6", {numero});
});

app.post("/ejercicio7", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { num } = req.body;

  const numero= ejercicio7(num);

  res.render("visualizarejercicio7", {numero});
});








// Inicializar el servidor en un puerto en específico
app.listen(5000, () => {
  console.log("Servidor ejecutándose en el puerto 5000");
});
