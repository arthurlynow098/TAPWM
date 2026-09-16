const app = require('./app/config/server');

// Definição e registro dos módulos de rotas
const rotaHome = require('./app/routes/home');
const rotaSobre = require('./app/routes/sobre');
const rotaProgramacao = require('./app/routes/programacao');
const rotaContato = require('./app/routes/contato');
const rotaInscricao = require('./app/routes/inscricao');
const rotaNovidades = require('./app/routes/novidades');

rotaHome(app);
rotaSobre(app);
rotaProgramacao(app);
rotaContato(app);
rotaInscricao(app);
rotaNovidades(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`[Semana de Tecnologia] Servidor ativo em http://localhost:${PORT}`);
});
