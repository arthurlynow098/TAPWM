module.exports = (app) => {
    app.get('/informacao/cursos', (req, res) => {
        res.render('informacao/cursos');
    });
};