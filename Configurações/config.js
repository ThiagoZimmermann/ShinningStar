let userType = null; // "cliente" ou "prestador"
let userName = "";
let userPassword = "";

// Função para mostrar a tela inicial
function showInitialScreen() {
    document.getElementById('app').innerHTML = `
        <h1>Escolha seu serviço</h1>
        <button id="btn-cliente">Sou Cliente</button>
        <button id="btn-prestador">Sou Prestador</button>
    `;

    document.getElementById('btn-cliente').onclick = () => {
        userType = "cliente";
        showLoginScreen();
    };
    document.getElementById('btn-prestador').onclick = () => {
        userType = "prestador";
        showLoginScreen();
    };
}

// Função para mostrar a tela de login
function showLoginScreen() {
    document.getElementById('app').innerHTML = `
        <h2>Login (${userType})</h2>
        <input type="text" id="input-name" placeholder="Nome"><br>
        <input type="password" id="input-pass" placeholder="Senha"><br>
        <button id="btn-login">Entrar</button>
        <button id="btn-voltar">Voltar</button>
    `;

    document.getElementById('btn-login').onclick = () => {
        userName = document.getElementById('input-name').value;
        userPassword = document.getElementById('input-pass').value;
        showWelcomeScreen();
    };
    document.getElementById('btn-voltar').onclick = showInitialScreen;
}

// Função para mostrar tela de boas-vindas
function showWelcomeScreen() {
    document.getElementById('app').innerHTML = `
        <h2>Bem-vindo, ${userName}!</h2>
        <p>Tipo de usuário: ${userType}</p>
        <button id="btn-sair">Sair</button>
    `;
    document.getElementById('btn-sair').onclick = function() {
        window.location.href = '../Entrar/entrar.html';
    };
}

// Inicializa a tela
showInitialScreen();