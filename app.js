require("dotenv").config();

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(expressLayouts); //middleware


app.use(express.static(__dirname + "/public"));


app.use(express.urlencoded({ extended: false})); //toma los datos que vienen del formulario
//true = para forms largos
app.use(methodOverride('_method'));


app.use(require("./routes/index"));
app.use(require("./routes/productos"));
app.use(require("./routes/contacto"));

app.use((req, res, next) => {
  res.status(404).send("Not found");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`http://localhost:${port}`));
