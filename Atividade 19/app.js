const app = require('./app/config/server');

// Carregamento e inicialização das rotas
const rotaHome = require('./app/routes/home');
rotaHome(app);

const rotaAdicionarUsuario = require('./app/routes/adicionar_usuario');
rotaAdicionarUsuario(app);

const rotaCursos = require('./app/routes/cursos');
rotaCursos(app);

const rotaProfessores = require('./app/routes/professores');
rotaProfessores(app);

const rotaHistoria = require('./app/routes/historia');
rotaHistoria(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso em http://localhost:${PORT}`);
});