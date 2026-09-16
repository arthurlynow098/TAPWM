# Atividade 20 - Semana de Tecnologia

Aplicação web desenvolvida para a disciplina de **Tópicos Avançados de Programação Web para Dispositivos Móveis (TAPWM)** na **Fatec Sorocaba**.

Desenvolvido por: **Arthur Mendes**

---

## 🎯 Descrição do Projeto

Esta aplicação simula o portal informativo e de inscrições para a **Semana de Tecnologia** da Fatec Sorocaba. O projeto foi estruturado utilizando **Node.js**, **Express** e **EJS**, adotando padrões de modularização com divisão entre configurações de servidor, rotas e views.

---

## 📂 Estrutura de Diretórios

```text
Atividade20/
├── app/
│   ├── config/
│   │   └── server.js        # Configuração do Express e engine EJS
│   ├── routes/              # Controladores de rota
│   │   ├── contato.js
│   │   ├── home.js
│   │   ├── inscricao.js
│   │   ├── novidades.js
│   │   ├── programacao.js
│   │   └── sobre.js
│   └── views/               # Telas dinâmicas em EJS
│       ├── admin/
│       │   └── inscricao.ejs
│       ├── evento/
│       │   ├── contato.ejs
│       │   ├── programacao.ejs
│       │   └── sobre.ejs
│       └── home/
│           └── index.ejs
├── app.js                   # Arquivo principal / inicialização do servidor
├── package.json             # Metadados e dependências
├── README.txt               # Instruções em formato texto plano
└── README.md                # Documentação detalhada em Markdown
```

---

## 🚀 Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão LTS recomendada)

### Execução:
1. Abra o terminal na pasta da atividade:
   ```bash
   cd Atividade20
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm start
   ```

4. Acesse no navegador:
   ```text
   http://localhost:3000
   ```

---

## 🧭 Rotas da Aplicação

| Rota | Método | Descrição |
| :--- | :---: | :--- |
| `/` | `GET` | Página inicial da Semana de Tecnologia |
| `/sobre` | `GET` | Informações institucionais, datas e local do evento |
| `/programacao` | `GET` | Cronograma detalhado de palestras e oficinas |
| `/contato` | `GET` | Informações de contato e endereço |
| `/admin/inscricao` | `GET` | Formulário para inscrição de participantes |
| `/novidades` | `GET` | Exemplo prático de resposta direta com HTML via `res.send()` |

---

## 🛠️ Tecnologias
- **Node.js**
- **Express**
- **EJS**
- **Nodemon**
