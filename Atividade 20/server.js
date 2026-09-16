const express = require('express');
const app = express();

// Definição da view engine EJS e diretório das views
app.set('view engine', 'ejs');
app.set('views', './app/views');

module.exports = app;
