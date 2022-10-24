import express from 'express';
import * as url from 'url';
import hbs from 'hbs';
import dotenv from "dotenv";
dotenv.config({path:'./.env'});

const app = express();
const port = process.env.PORT;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Servir contenido estatico
app.use(express.static('public'));

app.get('/',  (req, res) => {
  res.render('home',{
    nombre: 'Rodrigo Rojas',
    titulo: 'Curso de Node'
  });
});

app.get('/generic',  (req, res) => {
  res.render('generic',{
    nombre: 'Rodrigo Rojas',
    titulo: 'Curso de Node'
  });
});

app.get('/elements',  (req, res) => {
  res.render('elements',{
    nombre: 'Rodrigo Rojas',
    titulo: 'Curso de Node'
  });
});

app.get('*',  (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });