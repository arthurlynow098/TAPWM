module.exports = (app) => {
    app.get('/novidades', (req, res) => {
        // Exemplo de resposta direta via res.send (HTML sem template ejs)
        const html = `
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <title>Novidades - Semana de Tecnologia</title>
                <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; line-height: 1.6; color: #2d3748; }
                    h1 { color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
                    .card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; margin: 20px 0; }
                    a { color: #2563eb; text-decoration: none; font-weight: 500; }
                    a:hover { text-decoration: underline; }
                </style>
            </head>
            <body>
                <h1>Últimas Novidades</h1>
                <div class="card">
                    <p>Fique por dentro! Novas confirmações de palestras, minicursos e workshops da Semana de Tecnologia serão anunciadas em breve.</p>
                </div>
                <p><a href="/">&larr; Retornar à página inicial</a></p>
            </body>
            </html>
        `;
        res.send(html);
    });
};
