module.exports = (app) => {
    app.get('/admin/inscricao', (req, res) => {
        res.render('admin/inscricao');
    });
};
