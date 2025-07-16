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
            showServiceInterest();
            app.style.opacity = 1;
        }, 400);
    };
}

function showServiceInterest() {
    document.getElementById('app').innerHTML = `
        <style>
            .service-page {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 40px;
                font-family: 'Agrandir', sans-serif;
            }
            .service-page h1 {
                margin-bottom: 40px;
                font-family: 'Agrandir', sans-serif;
            }
            .service-search-row {
                display: flex;
                align-items: center;
                gap: 18px;
                margin-bottom: 30px;
                width: 100%;
                justify-content: center;
            }
            .service-search {
                width: 420px;
                max-width: 90vw;
                padding: 12px 18px;
                font-size: 1.1em;
                border-radius: 8px;
                border: 1px solid #ccc;
                font-family: 'Agrandir', sans-serif;
            }
            .service-advance-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 12px 28px;
                font-size: 1.1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                transition: background 0.2s, transform 0.2s;
            }
            .service-advance-btn:hover {
                background: #a94444;
                transform: translateY(-6px);
            }
            .service-columns {
                display: flex;
                gap: 30px;
                width: 100%;
                justify-content: center;
            }
            .service-col {
                display: flex;
                flex-direction: column;
                gap: 22px;
                min-width: 270px;
                max-width: 320px;
            }
            .service-card {
                display: flex;
                background: #f2f2f2;
                border-radius: 14px;
                padding: 16px;
                gap: 16px;
                align-items: flex-start;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                border: 2px solid transparent;
                transition: background 0.2s, border 0.2s;
            }
            .service-card.selected {
                background: #803333;
                border: 2px solid #a94444;
            }
            .service-card.selected .service-title,
            .service-card.selected .service-desc {
                color: #fff;
            }
            .service-img {
                width: 60px;
                height: 60px;
                border-radius: 12px;
                object-fit: cover;
                background: #ddd;
            }
            .service-info {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
            }
            .service-title {
                font-weight: bold;
                font-size: 1.1em;
                margin-bottom: 4px;
                font-family: 'Agrandir', sans-serif;
                color: #803333;
                transition: color 0.2s;
            }
            .service-desc {
                font-size: 0.98em;
                color: #555;
                font-family: 'Agrandir', sans-serif;
                transition: color 0.2s;
            }
        </style>
        <div class="service-page">
            <h1>Quais são seus serviços de interesse?</h1>
            <div class="service-search-row">
                <input type="text" class="service-search" placeholder="Pesquisar serviço...">
                <button class="service-advance-btn" id="btn-avancar-servico">Avançar</button>
            </div>
            <div class="service-columns">
                <div class="service-col">
                    <div class="service-card">
                        <img src="../../Images/mulher1.jpg" class="service-img" alt="Acompanhante">
                        <div class="service-info">
                            <div class="service-title">Acompanhante</div>
                            <div class="service-desc">Companhia para eventos, passeios ou viagens.</div>
                        </div>
                    </div>
                    <div class="service-card">
                        <img src="../../Images/mulher2.jpg" class="service-img" alt="Auxiliar">
                        <div class="service-info">
                            <div class="service-title">Auxiliar</div>
                            <div class="service-desc">Ajuda em tarefas do dia a dia, como compras ou organização.</div>
                        </div>
                    </div>
                    <div class="service-card">
                        <img src="../../Images/mulher3.jpg" class="service-img" alt="Babá">
                        <div class="service-info">
                            <div class="service-title">Babá</div>
                            <div class="service-desc">Cuidado e atenção para crianças em casa ou passeios.</div>
                        </div>
                    </div>
                </div>
                <div class="service-col">
                    <div class="service-card">
                        <img src="../../Images/mulher4.jpg" class="service-img" alt="Enfermeira">
                        <div class="service-info">
                            <div class="service-title">Enfermeira</div>
                            <div class="service-desc">Apoio em cuidados de saúde e acompanhamento médico.</div>
                        </div>
                    </div>
                    <div class="service-card">
                        <img src="../../Images/mulher5.jpg" class="service-img" alt="Motorista">
                        <div class="service-info">
                            <div class="service-title">Motorista</div>
                            <div class="service-desc">Transporte seguro para compromissos e viagens.</div>
                        </div>
                    </div>
                    <div class="service-card">
                        <img src="../../Images/mulher1.jpg" class="service-img" alt="Personal Organizer">
                        <div class="service-info">
                            <div class="service-title">Personal Organizer</div>
                            <div class="service-desc">Organização de ambientes e rotina pessoal.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Seleção dos cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function () {
            this.classList.toggle('selected');
        });
    });

    // Botão avançar (adicione sua lógica aqui)
    document.getElementById('btn-avancar-servico').onclick = () => {
        showAccountLevels();
    };
}


function showAccountLevels() {
    document.getElementById('app').innerHTML = `
        <style>
            .account-page {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 40px;
                font-family: 'Agrandir', sans-serif;
            }
            .account-page h1 {
                margin-bottom: 40px;
            }
            .levels-row {
                display: flex;
                gap: 32px;
                justify-content: center;
                width: 100%;
                margin-bottom: 40px;
                flex-wrap: wrap;
            }
            .level-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 300px;
                min-height: 520px;
                background: #f2f2f2;
                border-radius: 18px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.06);
                overflow: hidden;
                margin-bottom: 0;
                position: relative;
                justify-content: flex-start;
                padding-bottom: 40px;
            }
            .level-header {
                width: 100%;
                padding: 18px 0 12px 0;
                text-align: center;
                font-weight: bold;
                font-size: 1.25em;
                color: #fff;
                font-family: 'Agrandir', sans-serif;
            }
            .bronze { background: linear-gradient(90deg, #b08d57 60%, #c9a0636c 100%); }
            .prata  { background: linear-gradient(90deg, #bdbdbd 60%, #e0e0e05a 100%); }
            .ouro   { background: linear-gradient(90deg, #ffd700 60%, #ffe0667b 100%); color: #7a5b005b;}
            .normal { background: linear-gradient(90deg, #803333 60%, #a944446a 100%); }
            .level-benefits {
                padding: 18px 24px 10px 24px;
                text-align: left;
                font-size: 1em;
                color: #444;
                flex: 1;
            }
            .level-benefits ul {
                padding-left: 18px;
                margin: 0;
            }
            .level-benefits li {
                margin-bottom: 8px;
            }
            .level-btn {
                margin: 0 0 0 0;
                padding: 12px 28px;
                border: none;
                border-radius: 8px;
                font-size: 1.1em;
                font-family: 'Agrandir', sans-serif;
                color: #fff;
                cursor: pointer;
                transition: background 0.2s, transform 0.2s;
                width: 80%;
                align-self: center;
                position: absolute;
                bottom: 18px;
                left: 50%;
                transform: translateX(-50%);
            }
            .level-btn.bronze { background: #b08d57; }
            .level-btn.prata  { background: #bdbdbd; color: #444; }
            .level-btn.ouro   { background: #ffd700; color: #7a5c00; }
            .level-btn.normal { background: #803333; }
            .level-btn:hover  { filter: brightness(0.95); transform: translateX(-50%) translateY(-6px);}
            .ser-titulo {
                font-weight: bold;
                text-align: center;
                margin: 18px 0 18px 0;
                font-size: 1.1em;
                background: #f2f2f2;
                padding: 8px 0;
                border-radius: 8px;
            }
            .ser-titulo.bronze { color: #b08d57; }
            .ser-titulo.prata  { color: #bdbdbd; }
            .ser-titulo.ouro   { color: #ffd700; }
            .ser-titulo.normal { color: #803333; }
            .red-bold {
                color: #a94444;
                font-weight: bold;
            }
        </style>
        <div class="account-page">
            <h1>Níveis de conta</h1>
            <div class="levels-row">
                <div class="level-card">
                    <div class="level-header bronze">Usuário Bronze</div>
                    <div class="level-benefits">
                        <ul>
                            <li><span class="red-bold">Conta:</span> conta por IP e documento, preço por mês;</li>
                            <li><span class="red-bold">Chat expandido</span> até 4 pessoas por semana;</li>
                            <li><span class="red-bold">Pedidos limitados</span> de 4 por mês;</li>
                            <li>Possibilidade de <span class="red-bold">agenda automática</span> que marca os dias e horários dos encontros para facilitar a organização, juntamente de avisos como notificações para recordar sobre o evento.</li>
                            <li>Preferência particulares fenotípicas.</li>
                        </ul>
                    </div>
                    <div class="ser-titulo bronze">Ser usuário Bronze</div>
                    <button class="level-btn bronze">R$ 19,90</button>
                </div>
                <div class="level-card">
                    <div class="level-header prata">Usuário Prata</div>
                    <div class="level-benefits">
                        <ul>
                            <li><span class="red-bold">Conta:</span> por IP e documento, preço por mês;</li>
                            <li><span class="red-bold">Chat expandido</span> até 6 pessoas por semana;</li>
                            <li><span class="red-bold">Pedidos por mês limitados</span> de 5 por mês;</li>
                            <li>Possibilidade de <span class="red-bold">agenda automática</span> que marca os dias e horários dos encontros para facilitar a organização, juntamente de avisos como notificações para recordar sobre o evento;</li>
                            <li><span class="red-bold">Maior variedade</span> de opção de serviços na região, sendo mais fácil a busca pelo seu “par ideal”;</li>
                            <li>Ferramenta de <span class="red-bold">expansão de região</span> e possibilidades, por exemplo, se um usuário escolhe a região de SP, poderá mudar a região de atuação para que tenha as mesmas preferências em outra região, por exemplo fora do país, assim tendo um atendimento muito melhor e mais opções worldwide;</li>
                            <li>Preferências particulares fenotípicas.</li>
                        </ul>
                    </div>
                    <div class="ser-titulo prata">Ser usuário Prata</div>
                    <button class="level-btn prata">R$ 59,90</button>
                </div>
                <div class="level-card">
                    <div class="level-header ouro">Usuário Ouro</div>
                    <div class="level-benefits">
                        <ul>
                            <li><span class="red-bold">Conta:</span> por IP e documento, preço por mês;</li>
                            <li><span class="red-bold">Chat expandido ilimitado</span>;</li>
                            <li><span class="red-bold">Pedidos por mês ilimitado</span>;</li>
                            <li>Possibilidade de <span class="red-bold">agenda automática</span> que marca os dias e horários dos encontros para facilitar a organização, juntamente de avisos como notificações para recordar sobre o evento;</li>
                            <li><span class="red-bold">Maior variedade</span> de opção de serviços na região, sendo mais fácil a busca pelo seu “par ideal”;</li>
                            <li>Ferramenta de <span class="red-bold">expansão de região</span> e possibilidades, por exemplo, se um usuário escolhe a região de SP, poderá mudar a região de atuação para que tenha as mesmas preferências em outra região, por exemplo fora do país, assim tendo um atendimento muito melhor e mais opções worldwide;</li>
                            <li>Preferência particulares fenotípicas;</li>
                            <li><span class="red-bold">Escolha de serviços</span> por preço específico (por faixa de preço);</li>
                            <li><span class="red-bold">1 Mês grátis</span> ao pagar uma anuidade;</li>
                            <li><span class="red-bold">Fotos privadas ilimitadas.</span></li>
                        </ul>
                    </div>
                    <div class="ser-titulo ouro">Ser usuário Ouro</div>
                    <button class="level-btn ouro">R$ 79,90</button>
                </div>
                <div class="level-card">
                    <div class="level-header normal">Usuário Normal</div>
                    <div class="level-benefits">
                        <ul>
                            <li><span class="red-bold">Conta gratuita</span>, uma por IP e/ou RG (evitar gastos e contas bots);</li>
                            <li><span class="red-bold">Chat limitado</span> a 2 pessoas por semana (não limitar tempo para evitar saída do app);</li>
                            <li><span class="red-bold">Pedidos limitados</span> e 2 por mês (descobrir na hora).</li>
                        </ul>
                    </div>
                    <div class="ser-titulo normal">Ser usuário Normal</div>
                    <button class="level-btn normal">Grátis</button>
                </div>
            </div>
        </div>
    `;
}

// Inicializa a tela
showInitialScreen();