const express = require('express');
const app = express();
const port = 3000;

// Motor de vistas
app.set("view engine", "ejs");
// Directorio en donde estan las views
app.set("views", __dirname + "/views");
// Vinculamos nuestro directorio public (en donde estan los CSS y el JS de cada html)
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render("home");
})

app.get('/crear', (req, res) => {
    res.render("crear");
})

app.get('/eliminar', (req, res) => {
    res.render("eliminar");
})

app.get('/modificar', (req, res) => {
    res.render("modificar");
})

app.get('/ver_todo', (req, res) => {
    res.render("ver_todo");
})




app.listen(port, () =>{
    console.log("Conectando al servidor " + port);
})