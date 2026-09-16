const express = require('express');
const app = express();

// Configuração do mecanismo de visualização EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');

module.exports = app;