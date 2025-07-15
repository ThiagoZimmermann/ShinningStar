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
        <style>
    .user-form .btn-float {
        width: 120px;
        height: 45px;
        border-radius: 22px;
        background: #803333;
        color: #fff;
        font-size: 1.1em;
        border: none;
        cursor: pointer;
        font: normal 16pt Agrandir;
        transition: background 0.2s, transform 0.2s;
        float: left;
        margin-right: 15px;
    }
    .user-form .btn-float.right {
        float: right;
        margin-right: 0;
        margin-left: 15px;
    }
    .user-form .btn-float:hover {
        background: #a94444;
        transform: translateY(-8px);
    }
            .clearfix::after {
                content: "";
                display: table;
                clear: both;
            }
            .popup {
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.4s;
            }
            .popup.show {
                opacity: 1;
                pointer-events: auto;
            }
        </style>
        <div class="user-form" style="overflow: hidden;">
            <h1>Quem é você</h1>
            <div style="display: flex; align-items: center; gap: 10px;">
                <label for="nome" style="min-width:60px; text-align:right;">Nome:</label>
                <input type="text" id="nome" placeholder="Digite seu nome">
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <label for="idade" style="min-width:60px; text-align:right;">Idade:</label>
                <input type="number" id="idade" placeholder="Digite sua idade">
            </div>
            <div class="clearfix" style="width: 270px; margin: 20px auto 0 auto; overflow: hidden;">
                <button id="btn-outros" class="btn-float">Outros</button>
                <button id="btn-avancar" class="btn-float right">Avançar</button>
            </div>
            <div id="popup" class="popup">
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

    // Popup transição
    const popup = document.getElementById('popup');
    document.getElementById('btn-outros').onclick = () => {
        popup.classList.add('show');
    };
    document.getElementById('close-popup').onclick = () => {
        popup.classList.remove('show');
    };

    // Transição ao clicar em avançar
    document.getElementById('btn-avancar').onclick = () => {
        const app = document.getElementById('app');
        app.style.transition = 'opacity 0.4s';
        app.style.opacity = 0;
        setTimeout(() => {
            app.innerHTML = '<h1 style="margin-top:100px;">Próxima etapa...</h1>';
            app.style.opacity = 1;
        }, 400);
    };
}


// Inicializa a tela
showInitialScreen();