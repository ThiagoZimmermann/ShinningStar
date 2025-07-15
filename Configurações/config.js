let userType = null; // "cliente" ou "prestador"
let userName = "";

// Função de transição
function fadeOutIn(callback) {
    const app = document.getElementById('app');
    app.style.opacity = 1;
    app.style.transition = 'opacity 0.4s';
    app.style.opacity = 0;
    setTimeout(() => {
        callback();
        app.style.opacity = 0;
        setTimeout(() => {
            app.style.opacity = 1;
        }, 50);
    }, 400);
}

// Função para mostrar a tela inicial
function showInitialScreen() {
    document.getElementById('app').innerHTML = `
        <style>
            .login-btn {
                width: 220px;
                height: 90px;
                border-radius: 45px;
                background: #803333;
                color: #fff;
                font-size: 1.6em;
                border: none;
                cursor: pointer;
                font: normal 22pt Agrandir;
                transition: background 0.2s, transform 0.2s;
                margin: 0 0 0 0;
            }
            .login-btn:hover {
                background: #a94444;
                transform: translateY(-8px);
            }
            .login-row {
                width: 600px;
                margin: 0 auto;
                position: relative;
                height: 110px;
            }
            .login-btn.left {
                float: left;
            }
            .login-btn.right {
                float: right;
            }
            .login-divider {
                position: absolute;
                left: 50%;
                top: 0;
                transform: translateX(-50%);
                width: 3px;
                height: 110px;
                background: #803333;
            }
            .clearfix::after {
                content: "";
                display: table;
                clear: both;
            }
        </style>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 60vh;">
            <h1 style="margin-bottom: 120px;">Escolha seu serviço</h1>
            <div class="login-row clearfix">
                <button id="btn-cliente" class="login-btn left">Sou Cliente</button>
                <div class="login-divider"></div>
                <button id="btn-prestador" class="login-btn right">Prestador</button>
            </div>
        </div>
    `;

    document.getElementById('btn-cliente').onclick = () => {
        userType = "cliente";
        fadeOutIn(showUserForm);
    };
    document.getElementById('btn-prestador').onclick = () => {
        userType = "prestador";
        // Aqui pode adicionar outra função se quiser
    };
}


// Função para mostrar o formulário de usuário
function showUserForm() {
    document.getElementById('app').innerHTML = `
        <div class="user-form">
            <h1>Quem é você</h1>
            <label>Nome:</label>
            <input type="text" id="nome" placeholder="Digite seu nome">

            <label>Idade:</label>
            <input type="number" id="idade" placeholder="Digite sua idade">

            <button id="btn-outros">Outros</button>

            <div id="popup" class="popup hidden">
                <div class="popup-content">
                    <input type="text" placeholder="Pesquisar..." class="popup-search">
                    <div class="popup-body">
                        <div class="popup-column">
                            <label>Altura</label>
                            <input type="text">
                            <label>Cor do cabelo</label>
                            <input type="text">
                        </div>
                        <div class="popup-column">
                            <label>Cor dos olhos</label>
                            <input type="text">
                            <label>Hobby</label>
                            <input type="text">
                        </div>
                    </div>
                    <button id="close-popup">Fechar</button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('btn-outros').onclick = () => {
        document.getElementById('popup').classList.remove('hidden');
    };
    document.getElementById('close-popup').onclick = () => {
        document.getElementById('popup').classList.add('hidden');
    };
}


// Inicializa a tela
showInitialScreen();