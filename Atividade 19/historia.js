module.exports = (app) => {
    app.get('/informacao/historia', (req, res) => {
        res.render('informacao/historia');
    });
};