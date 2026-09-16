# Atividade 19 - Portal Fatec Sorocaba

Aplicação web desenvolvida para a disciplina de **Tópicos Avançados de Programação Web para Dispositivos Móveis (TAPWM)** na **Fatec Sorocaba**.

O objetivo desta atividade é compreender e implementar a arquitetura de uma aplicação Node.js estruturada e modularizada, utilizando o framework **Express** e o motor de renderização de templates **EJS**.

---

## 📂 Estrutura do Projeto

```text
Atividade19/
└── Exercicios/
    ├── app/
    │   ├── config/
    │   │   └── server.js            # Inicialização e configuração do Express e EJS
    │   ├── routes/                  # Definição e separação das rotas da aplicação
    │   │   ├── adicionar_usuario.js
    │   │   ├── cursos.js
    │   │   ├── historia.js
    │   │   ├── home.js
    │   │   └── professores.js
    │   └── views/                   # Templates EJS renderizados no navegador
    │       ├── admin/
    │       ├── home/
    │       └── informacao/
    ├── app.js                       # Ponto de entrada (carrega configurações e rotas)
    ├── modulo1.js                   # Módulo auxiliar demonstrativo de export/import
    └── package.json                 # Dependências e scripts do projeto
```

---

## 🚀 Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado na máquina.

### Passos:
1. Abra o terminal e navegue até a pasta `Atividade19/Exercicios`:
   ```bash
   cd Atividade19/Exercicios
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```

4. Acesse no navegador:
   ```text
   http://localhost:3000
   ```

---

## 🌐 Rotas Disponíveis

| Rota | Descrição |
| :--- | :--- |
| `/` | Página inicial do portal institucional |
| `/informacao/historia` | Histórico e fundação da Fatec Sorocaba |
| `/informacao/cursos` | Lista dos cursos de graduação tecnológica |
| `/informacao/professores` | Informações sobre o corpo docente e departamentos |
| `/admin/adicionar_usuario` | Painel de cadastro para novos usuários |

---

## 🛠️ Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript no servidor
- **Express**: Framework web minimalista e flexível
- **EJS (Embedded JavaScript)**: Motor de templates HTML dinâmicos
- **Nodemon**: Reinicialização automática em ambiente de desenvolvimento
