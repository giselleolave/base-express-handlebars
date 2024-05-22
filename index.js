import express from "express";
import { engine } from 'express-handlebars';
const app = express();

//CONF HANDELBARS
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

//RENDERIZACIÓN DE LA PÁGINA
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`El servidor está inicializado en el puerto  ${PORT}`)
})