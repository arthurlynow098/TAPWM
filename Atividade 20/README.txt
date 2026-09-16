================================================================================
ATIVIDADE 20 - SEMANA DE TECNOLOGIA (FATEC SOROCABA)
Disciplina: Tópicos Avançados de Programação Web para Dispositivos Móveis
Desenvolvido por: Arthur Mendes
================================================================================

1. SOBRE O PROJETO
------------------
Aplicação web modular desenvolvida em Node.js com framework Express e mecanismo
de visualização EJS. O sistema simula o portal informativo e de inscrições para
a Semana de Tecnologia, estruturado no padrão MVC (rotas e views separadas).


2. INSTRUÇÕES DE EXECUÇÃO
-------------------------
Certifique-se de possuir o Node.js instalado na máquina.

Passo 1: Abra o terminal no diretório da Atividade 20:
         cd Atividade20

Passo 2: Faça a instalação das dependências do projeto:
         npm install

Passo 3: Inicie o servidor local com recarregamento automático (nodemon):
         npm start

Passo 4: Abra seu navegador de preferência no endereço:
         http://localhost:3000


3. MAPA DE ROTAS
----------------
* GET /                -> Página principal com apresentação e menu do evento
* GET /sobre           -> Informações sobre a Semana de Tecnologia, datas e local
* GET /programacao     -> Cronograma diário das palestras e workshops
* GET /contato         -> Canais de atendimento e localização da instituição
* GET /admin/inscricao -> Formulário de inscrição dos participantes
* GET /novidades       -> Exemplo de envio de resposta direta em HTML (res.send)


4. TECNOLOGIAS E BIBLIOTECAS
----------------------------
- Node.js (Ambiente de execução JavaScript)
- Express 5 (Roteamento e servidor HTTP)
- EJS (Embedded JavaScript Templating)
- Nodemon (Utilitário de desenvolvimento)
================================================================================
