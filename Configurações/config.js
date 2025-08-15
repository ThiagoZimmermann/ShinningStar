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

// --- CLIENTE ---

function showUserFormCLIENTE() {
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
                        <button id="btn-avancar" class="btn-float right">Avançar</button>
                    </div>
                </div>
            `;

    // Transição ao clicar em avançar
    document.getElementById('btn-avancar').onclick = () => {
        const app = document.getElementById('app');
        app.style.transition = 'opacity 0.4s';
        app.style.opacity = 0;
        setTimeout(() => {
            showServiceInterestCLIENTE();
            app.style.opacity = 1;
        }, 400);
    };
}

function showServiceInterestCLIENTE() {
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
                <input type="text" class="service-search" id="service-search-input-cliente" placeholder="Pesquisar serviço...">
                <button class="service-advance-btn" id="btn-avancar-servico">Avançar</button>
            </div>
            <div class="service-columns" id="service-columns-cliente">
                <div class="service-col">
                    <div class="service-card"><div class="service-info"><div class="service-title">Programas sexuais</div><div class="service-desc">Atendimento íntimo conforme os limites e preferências definidas pelo prestador(a), podendo variar em tipo, duração e abordagem.</div></div></div>
                    <div class="service-card"><div class="service-info"><div class="service-title">Acompanhante de eventos</div><div class="service-desc">Presença em eventos sociais, festas ou encontros, oferecendo companhia, conversa e apoio social.</div></div></div>
                    <div class="service-card"><div class="service-info"><div class="service-title">Acompanhante de casa</div><div class="service-desc">Companhia em ambiente doméstico para interações sociais, emocionais ou de lazer.</div></div></div>
                </div>
                <div class="service-col">
                    <div class="service-card"><div class="service-info"><div class="service-title">Namorada(o) de aluguel (acompanhante momentânea/o)</div><div class="service-desc">Simulação de relacionamento romântico por um período específico, podendo incluir interações presenciais e virtuais.</div></div></div>
                    <div class="service-card"><div class="service-info"><div class="service-title">Companhia para solidão / tratamento emocional</div><div class="service-desc">Foco no apoio emocional, escuta ativa e interação para lidar com sentimentos de solidão, ansiedade ou carência afetiva.</div></div></div>
                    <div class="service-card"><div class="service-info"><div class="service-title">Validação de sentimentos (“mommy issues” e similares)</div><div class="service-desc">Interações personalizadas para suprir necessidades afetivas e de validação emocional, conforme o papel ou dinâmica acordada.</div></div></div>
                    <div class="service-card"><div class="service-info"><div class="service-title">Outros programas definidos pelo prestador(a)</div><div class="service-desc">Serviços criados livremente pelo profissional, com descrição própria, adaptados às demandas ou fetiches específicos do cliente.</div></div></div>
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

    // Pesquisa funcional
    const searchInput = document.getElementById('service-search-input-cliente');
    const columns = document.getElementById('service-columns-cliente');
    searchInput.addEventListener('input', function () {
        const val = this.value.trim().toLowerCase();
        columns.querySelectorAll('.service-card').forEach(card => {
            const title = card.querySelector('.service-title').textContent.toLowerCase();
            card.style.display = (!val || title.includes(val)) ? '' : 'none';
        });
    });

    document.getElementById('btn-avancar-servico').onclick = () => {
        fadeOutIn(showProviderPreferencesCLIENTE);
    };
}

function showProviderPreferencesCLIENTE() {
    document.getElementById('app').innerHTML = `
        <style>
            .pref-page {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-family: 'Agrandir', sans-serif;
                margin-top: 40px;
            }
            .pref-page h1 {
                margin-bottom: 18px;
            }
            .pref-warning {
                font-size: 1.1em;
                color: #a94444;
                margin-bottom: 32px;
                font-weight: bold;
            }
            .pref-content {
                display: flex;
                gap: 40px;
                align-items: flex-start;
                justify-content: center;
                width: 100%;
                margin-bottom: 24px;
            }
            .pref-video {
                width: 380px;
                height: 220px;
                border-radius: 16px;
                background: #ddd;
                box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            }
            .pref-actions {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 22px;
                margin-top: 18px;
            }
            .pref-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 14px 32px;
                font-size: 1.1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                transition: background 0.2s, transform 0.2s;
                opacity: 0.6;
                pointer-events: none;
            }
            .pref-btn.enabled {
                opacity: 1;
                pointer-events: auto;
            }
            .pref-btn:active {
                transform: scale(0.96);
                filter: brightness(0.93);
            }
            .surprise {
                margin-top: 18px;
                font-weight: bold;
                font-size: 1.1em;
                color: #ffd700;
                background: #803333;
                border-radius: 8px;
                padding: 8px 18px;
                text-align: center;
                width: fit-content;
                transition: background 0.2s, transform 0.2s;
            }
            .surprise:active {
                transform: scale(0.96);
                filter: brightness(0.93);
            }
            .popup-bg {
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                background: rgba(0,0,0,0.35);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                animation: fadeInBg 0.4s;
            }
            @keyframes fadeInBg {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .popup-content {
                background: #fff;
                border-radius: 18px;
                padding: 32px 38px;
                min-width: 420px;
                max-width: 95vw;
                max-height: 90vh;
                box-shadow: 0 4px 24px rgba(0,0,0,0.13);
                animation: popupIn 0.4s;
                overflow-y: auto;
            }
            @keyframes popupIn {
                from { transform: scale(0.85); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
            .service-search {
                width: 320px;
                max-width: 90vw;
                padding: 12px 18px;
                font-size: 1.1em;
                border-radius: 8px;
                border: 1px solid #ccc;
                font-family: 'Agrandir', sans-serif;
                margin-bottom: 22px;
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
                margin-bottom: 12px;
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
            .close-popup-btn {
                margin-top: 18px;
                background: #a94444;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 10px 24px;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                transition: background 0.2s, transform 0.2s;
            }
            .close-popup-btn:hover {
                background: #803333;
            }
            .slider-label {
                margin-bottom: 6px;
                font-weight: bold;
            }
            .slider-row {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 18px;
            }
            .slider-value {
                min-width: 40px;
                font-weight: bold;
            }
            .skin-row {
                margin-bottom: 18px;
            }
            .skin-label {
                font-weight: bold;
                margin-bottom: 6px;
                display: block;
            }
            .skin-grid {
                display: flex;
                gap: 6px;
                margin-bottom: 8px;
            }
            .skin-cell {
                width: 32px;
                height: 32px;
                border-radius: 6px;
                border: 2px solid transparent;
                cursor: pointer;
                transition: border 0.2s;
            }
            .skin-cell.selected {
                border: 2px solid #803333;
            }
            .keywords-label {
                font-weight: bold;
                margin-bottom: 6px;
                display: block;
            }
            .keywords-row {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 12px;
            }
            .keywords-input {
                padding: 8px 14px;
                border-radius: 8px;
                border: 1px solid #ccc;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                width: 180px;
            }
            .keywords-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 8px 18px;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                transition: background 0.2s, transform 0.2s;
            }
            .keywords-btn:hover {
                background: #a94444;
                transform: translateY(-6px);
            }
            .keywords-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-bottom: 10px;
            }
            .keywords-tag {
                background: #949494ff;
                color: #803333;
                border-radius: 18px;
                padding: 6px 14px;
                font-weight: bold;
                font-size: 1em;
                display: flex;
                align-items: center;
                gap: 4px;
            }
            .keywords-tag .remove-tag {
                background: none;
                border: none;
                color: #a94444;
                font-size: 1.1em;
                cursor: pointer;
                font-weight: bold;
                margin-left: 4px;
            }
            .fetiche-row {
                margin: 18px 0 18px 0;
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            .fetiche-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 8px 18px;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                margin-bottom: 6px;
                transition: background 0.2s, transform 0.2s;
            }
            .fetiche-btn.selected {
                background: #ffd700;
                color: #803333;
            }
            .profile-advance-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 14px 38px;
                font-size: 1.1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                margin-top: 18px;
                transition: background 0.2s, transform 0.2s;
            }
            .profile-advance-btn:hover {
                background: #a94444;
                transform: translateY(-8px);
            }
        </style>
        <div class="pref-page">
            <h1>Quais são seus serviços de interesse?</h1>
            <div class="service-search-row">
                <input type="text" class="service-search" id="service-search-input-cliente" placeholder="Pesquisar serviço...">
                <button class="service-advance-btn" id="btn-avancar-servico">Avançar</button>
            </div>
            <div class="service-columns" id="service-columns-cliente">
                <div class="service-col">
                    <div class="service-card"><div class="service-info"><div class="service-title">Programas sexuais</div><div class="service-desc">Atendimento íntimo conforme os limites e preferências definidas pelo prestador(a), podendo variar em tipo, duração e abordagem.</div></div></div>
                    <div class="service-card"><div class="service-info"><div class="service-title">Acompanhante de eventos</div><div class="service-desc">Presença em eventos sociais, festas ou encontros, oferecendo companhia, conversa e apoio social.</div></div></div>
                    <div class="service-card"><div class="service-info"><div class="service-title">Acompanhante de casa</div><div class="service-desc">Companhia em ambiente doméstico para interações sociais, emocionais ou de lazer.</div></div></div>
                </div>
                <div class="service-col">
                    <div class="service-card"><div class="service-info"><div class="service-title">Namorada(o) de aluguel (acompanhante momentânea/o)</div><div class="service-desc">Simulação de relacionamento romântico por um período específico, podendo incluir interações presenciais e virtuais.</div></div></div>
                    <div class="service-card"><div class="service-info"><div class="service-title">Companhia para solidão / tratamento emocional</div><div class="service-desc">Foco no apoio emocional, escuta ativa e interação para lidar com sentimentos de solidão, ansiedade ou carência afetiva.</div></div></div>
                    <div class="service-card"><div class="service-info"><div class="service-title">Validação de sentimentos (“mommy issues” e similares)</div><div class="service-desc">Interações personalizadas para suprir necessidades afetivas e de validação emocional, conforme o papel ou dinâmica acordada.</div></div></div>
                    <div class="service-card"><div class="service-info"><div class="service-title">Outros programas definidos pelo prestador(a)</div><div class="service-desc">Serviços criados livremente pelo profissional, com descrição própria, adaptados às demandas ou fetiches específicos do cliente.</div></div></div>
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

    // Pesquisa funcional
    const searchInput = document.getElementById('service-search-input-cliente');
    const columns = document.getElementById('service-columns-cliente');
    searchInput.addEventListener('input', function () {
        const val = this.value.trim().toLowerCase();
        columns.querySelectorAll('.service-card').forEach(card => {
            const title = card.querySelector('.service-title').textContent.toLowerCase();
            card.style.display = (!val || title.includes(val)) ? '' : 'none';
        });
    });

    document.getElementById('btn-avancar-servico').onclick = () => {
        fadeOutIn(showProviderPreferencesCLIENTE);
    };
}

function showProviderPreferencesCLIENTE() {
    document.getElementById('app').innerHTML = `
        <style>
            .pref-page {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-family: 'Agrandir', sans-serif;
                margin-top: 40px;
            }
            .pref-page h1 {
                margin-bottom: 18px;
            }
            .pref-warning {
                font-size: 1.1em;
                color: #a94444;
                margin-bottom: 32px;
                font-weight: bold;
            }
            .pref-content {
                display: flex;
                gap: 40px;
                align-items: flex-start;
                justify-content: center;
                width: 100%;
                margin-bottom: 24px;
            }
            .pref-video {
                width: 380px;
                height: 220px;
                border-radius: 16px;
                background: #ddd;
                box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            }
            .pref-actions {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 22px;
                margin-top: 18px;
            }
            .pref-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 14px 32px;
                font-size: 1.1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                transition: background 0.2s, transform 0.2s;
                opacity: 0.6;
                pointer-events: none;
            }
            .pref-btn.enabled {
                opacity: 1;
                pointer-events: auto;
            }
            .pref-btn:active {
                transform: scale(0.96);
                filter: brightness(0.93);
            }
            .surprise {
                margin-top: 18px;
                font-weight: bold;
                font-size: 1.1em;
                color: #ffd700;
                background: #803333;
                border-radius: 8px;
                padding: 8px 18px;
                text-align: center;
                width: fit-content;
                transition: background 0.2s, transform 0.2s;
            }
            .surprise:active {
                transform: scale(0.96);
                filter: brightness(0.93);
            }
            .popup-bg {
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                background: rgba(0,0,0,0.35);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                animation: fadeInBg 0.4s;
            }
            @keyframes fadeInBg {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .popup-content {
                background: #fff;
                border-radius: 18px;
                padding: 32px 38px;
                min-width: 420px;
                max-width: 95vw;
                max-height: 90vh;
                box-shadow: 0 4px 24px rgba(0,0,0,0.13);
                animation: popupIn 0.4s;
                overflow-y: auto;
            }
            @keyframes popupIn {
                from { transform: scale(0.85); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
            .service-search {
                width: 320px;
                max-width: 90vw;
                padding: 12px 18px;
                font-size: 1.1em;
                border-radius: 8px;
                border: 1px solid #ccc;
                font-family: 'Agrandir', sans-serif;
                margin-bottom: 22px;
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
                margin-bottom: 12px;
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
            .close-popup-btn {
                margin-top: 18px;
                background: #a94444;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 10px 24px;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                transition: background 0.2s, transform 0.2s;
            }
            .close-popup-btn:hover {
                background: #803333;
            }
            .slider-label {
                margin-bottom: 6px;
                font-weight: bold;
            }
            .slider-row {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 18px;
            }
            .slider-value {
                min-width: 40px;
                font-weight: bold;
            }
            .skin-row {
                margin-bottom: 18px;
            }
            .skin-label {
                font-weight: bold;
                margin-bottom: 6px;
                display: block;
            }
            .skin-grid {
                display: flex;
                gap: 6px;
                margin-bottom: 8px;
            }
            .skin-cell {
                width: 32px;
                height: 32px;
                border-radius: 6px;
                border: 2px solid transparent;
                cursor: pointer;
                transition: border 0.2s;
            }
            .skin-cell.selected {
                border: 2px solid #803333;
            }
            .keywords-label {
                font-weight: bold;
                margin-bottom: 6px;
                display: block;
            }
            .keywords-row {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 12px;
            }
            .keywords-input {
                padding: 8px 14px;
                border-radius: 8px;
                border: 1px solid #ccc;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                width: 180px;
            }
            .keywords-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 8px 18px;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                transition: background 0.2s, transform 0.2s;
            }
            .keywords-btn:hover {
                background: #a94444;
                transform: translateY(-6px);
            }
            .keywords-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-bottom: 10px;
            }
            .keywords-tag {
                background: #949494ff;
                color: #803333;
                border-radius: 18px;
                padding: 6px 14px;
                font-weight: bold;
                font-size: 1em;
                display: flex;
                align-items: center;
                gap: 4px;
            }
            .keywords-tag .remove-tag {
                background: none;
                border: none;
                color: #a94444;
                font-size: 1.1em;
                cursor: pointer;
                font-weight: bold;
                margin-left: 4px;
            }
            .fetiche-row {
                margin: 18px 0 18px 0;
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            .fetiche-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 8px 18px;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                margin-bottom: 6px;
                transition: background 0.2s, transform 0.2s;
            }
            .fetiche-btn.selected {
                background: #ffd700;
                color: #803333;
            }
            .profile-advance-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 14px 38px;
                font-size: 1.1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                margin-top: 18px;
                transition: background 0.2s, transform 0.2s;
            }
            .profile-advance-btn:hover {
                background: #a94444;
                transform: translateY(-8px);
            }
        </style>
        <div class="pref-page">
            <h1>Preferências de prestadores</h1>
            <div class="pref-warning">Atenção, assista ao seguinte vídeo para prosseguir.</div>
            <div class="pref-content">
                <video id="video-tutorial" class="pref-video" src="../../Images/video.mp4" controls autoplay muted></video>
                <div class="pref-actions">
                    <button id="btn-escolher" class="pref-btn">Caracterização de Serviços.</button>
                    <div id="btn-surpreenda" class="surprise" style="opacity:0.6; cursor: pointer; pointer-events:none;">Me surpreenda!</div>
                </div>
            </div>
        </div>
    `;

    // Habilita botões só após assistir todo o vídeo
    const video = document.getElementById('video-tutorial');
    const btnEscolher = document.getElementById('btn-escolher');
    const btnSurpreenda = document.getElementById('btn-surpreenda');
    video.onended = () => {
        btnEscolher.classList.add('enabled');
        btnEscolher.style.pointerEvents = 'auto';
        btnEscolher.style.opacity = '1';
        btnSurpreenda.style.pointerEvents = 'auto';
        btnSurpreenda.style.opacity = '1';
    };

    btnEscolher.onclick = () => {
        btnEscolher.classList.add('active');
        setTimeout(() => {
            showPreferencesPopupCLIENTE();
        }, 180);
    };

    btnSurpreenda.onclick = () => {
        btnSurpreenda.classList.add('active');
        setTimeout(() => {
            fadeOutIn(showProfilePageCLIENTE);
        }, 180);
    };
}

function showPreferencesPopupCLIENTE() {
    const popup = document.createElement('div');
    popup.className = 'popup-bg';
    popup.innerHTML = `
        <style>
            .popup-content {
                background: #fff;
                border-radius: 18px;
                padding: 32px 38px;
                min-width: 420px;
                max-width: 95vw;
                max-height: 90vh;
                box-shadow: 0 4px 24px rgba(0,0,0,0.13);
                animation: popupIn 0.4s;
                overflow-y: auto;
            }
            @keyframes popupIn {
                from { transform: scale(0.85); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
            .popup-title {
                font-size: 1.3em;
                font-weight: bold;
                margin-bottom: 18px;
            }
            .slider-label {
                margin-bottom: 6px;
                font-weight: bold;
            }
            .slider-row {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 18px;
            }
            .slider-value {
                min-width: 40px;
                font-weight: bold;
            }
            .skin-row {
                margin-bottom: 18px;
            }
            .skin-label {
                font-weight: bold;
                margin-bottom: 6px;
                display: block;
            }
            .skin-grid {
                display: flex;
                gap: 6px;
                margin-bottom: 8px;
            }
            .skin-cell {
                width: 32px;
                height: 32px;
                border-radius: 6px;
                border: 2px solid transparent;
                cursor: pointer;
                transition: border 0.2s;
            }
            .skin-cell.selected {
                border: 2px solid #803333;
            }
            .keywords-label {
                font-weight: bold;
                margin-bottom: 6px;
                display: block;
            }
            .keywords-row {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 12px;
            }
            .keywords-input {
                padding: 8px 14px;
                border-radius: 8px;
                border: 1px solid #ccc;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                width: 180px;
            }
            .keywords-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 8px 18px;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                transition: background 0.2s, transform 0.2s;
            }
            .keywords-btn:hover {
                background: #a94444;
                transform: translateY(-6px);
            }
            .keywords-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-bottom: 10px;
            }
            .keywords-tag {
                background: #949494ff;
                color: #803333;
                border-radius: 18px;
                padding: 6px 14px;
                font-weight: bold;
                font-size: 1em;
                display: flex;
                align-items: center;
                gap: 4px;
            }
            .keywords-tag .remove-tag {
                background: none;
                border: none;
                color: #a94444;
                font-size: 1.1em;
                cursor: pointer;
                font-weight: bold;
                margin-left: 4px;
            }
            .fetiche-row {
                margin: 18px 0 18px 0;
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            .fetiche-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 8px 18px;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                margin-bottom: 6px;
                transition: background 0.2s, transform 0.2s;
            }
            .fetiche-btn.selected {
                background: #ffd700;
                color: #803333;
            }
            .profile-advance-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 14px 38px;
                font-size: 1.1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                margin-top: 18px;
                transition: background 0.2s, transform 0.2s;
            }
            .profile-advance-btn:hover {
                background: #a94444;
                transform: translateY(-8px);
            }
        </style>
        <div class="popup-content">
            <div class="slider-label">Altura (m):</div>
            <div class="slider-row">
                <input type="range" min="1" max="2" step="0.01" id="altura-slider" value="1.70" style="width:180px;">
                <span class="slider-value" id="altura-value">1.70</span>
            </div>
            <div class="skin-row">
                <span class="skin-label">Cor da pele:</span>
                <div class="skin-grid" id="skin-grid"></div>
            </div>
            <div>
                <span class="keywords-label">Características específicas</span>
                <div class="keywords-row">
                    <input type="text" id="keywords-input" class="keywords-input" placeholder="Adicionar característica">
                    <button id="keywords-btn" class="keywords-btn">+</button>
                </div>
                <div id="keywords-tags" class="keywords-tags"></div>
            </div>
            <button class="profile-advance-btn" id="profile-advance-btn">Avançar</button>
        </div>
    `;
    document.body.appendChild(popup);

    // Slider de altura
    const slider = popup.querySelector('#altura-slider');
    const sliderValue = popup.querySelector('#altura-value');
    sliderValue.textContent = slider.value;
    slider.oninput = () => {
        sliderValue.textContent = slider.value;
    };

    // Grid de cor de pele (gradiente de negro para branco)
    const skinGrid = popup.querySelector('#skin-grid');
    const skinColors = [
        "#2d1b0e", "#4b2e1a", "#6d4b2a", "#a67c52", "#c8a165", "#e5c28a", "#f5e2c0", "#fff6e5"
    ];
    let selectedSkin = null;
    skinColors.forEach((color, idx) => {
        const cell = document.createElement('div');
        cell.className = 'skin-cell';
        cell.style.background = color;
        cell.onclick = () => {
            skinGrid.querySelectorAll('.skin-cell').forEach(c => c.classList.remove('selected'));
            cell.classList.add('selected');
            selectedSkin = color;
        };
        skinGrid.appendChild(cell);
    });

    // Palavras-chave
    const keywordsTags = popup.querySelector('#keywords-tags');
    const keywordsBtn = popup.querySelector('#keywords-btn');
    const keywordsInput = popup.querySelector('#keywords-input');
    let keywords = [];
    keywordsBtn.onclick = () => {
        const value = keywordsInput.value.trim();
        if (value && !keywords.includes(value)) {
            keywords.push(value);
            renderKeywords();
            keywordsInput.value = '';
        }
    };
    function renderKeywords() {
        keywordsTags.innerHTML = '';
        keywords.forEach(tag => {
            const tagDiv = document.createElement('div');
            tagDiv.className = 'keywords-tag';
            tagDiv.innerHTML = `${tag} <button class="remove-tag" title="Remover">&times;</button>`;
            tagDiv.querySelector('.remove-tag').onclick = () => {
                keywords = keywords.filter(t => t !== tag);
                renderKeywords();
            };
            keywordsTags.appendChild(tagDiv);
        });
    }

    // Avançar para perfil prestador
    popup.querySelector('#profile-advance-btn').onclick = () => {
        popup.classList.add('fadeOut');
        setTimeout(() => {
            document.body.removeChild(popup);
            fadeOutIn(showProfilePageCLIENTE);
        }, 350);
    };
}

function showProfilePageCLIENTE() {
    document.getElementById('app').innerHTML = `
        <style>
            .profile-page {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-family: 'Agrandir', sans-serif;
                margin-top: 40px;
                min-height: 90vh;
                background: #faf9f7;
            }
            .profile-card {
                background: #fff;
                border-radius: 18px;
                box-shadow: 0 4px 24px rgba(0,0,0,0.10);
                padding: 38px 44px 32px 44px;
                max-width: 540px;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 32px;
                border: 1.5px solid #e5e2e0;
            }
            .profile-page h1 {
                margin-bottom: 32px;
                font-size: 2em;
                letter-spacing: 1px;
            }
            .profile-photo-upload {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 24px;
            }
            .profile-photo-preview {
                width: 120px;
                height: 120px;
                border-radius: 50%;
                background: #eee;
                object-fit: cover;
                margin-bottom: 12px;
                border: 2px solid #803333;
                box-shadow: 0 2px 8px rgba(128,51,51,0.08);
            }
            .profile-fields-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 18px 16px;
                width: 100%;
                margin-bottom: 18px;
            }
            .profile-fields-grid label {
                font-weight: bold;
                margin-bottom: 4px;
                color: #803333;
                font-size: 1em;
            }
            .profile-fields-grid input {
                padding: 10px 16px;
                border-radius: 8px;
                border: 1px solid #ccc;
                font-size: 1.1em;
                font-family: 'Agrandir', sans-serif;
                width: 100%;
                margin-bottom: 0;
            }
            .profile-desc-row {
                width: 100%;
                margin-bottom: 22px;
            }
            .profile-desc-label {
                font-weight: bold;
                color: #803333;
                margin-bottom: 6px;
                display: block;
            }
            .profile-desc {
                width: 100%;
                min-height: 60px;
                border-radius: 8px;
                border: 1px solid #ccc;
                font-size: 1.05em;
                font-family: 'Agrandir', sans-serif;
                padding: 10px 16px;
                resize: vertical;
            }
            .add-tag-row {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 18px;
                width: 100%;
            }
            .add-tag-input {
                padding: 8px 14px;
                border-radius: 8px;
                border: 1px solid #ccc;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                width: 70%;
            }
            .add-tag-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 8px 18px;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                transition: background 0.2s, transform 0.2s;
            }
            .add-tag-btn:hover {
                background: #a94444;
                transform: translateY(-6px);
            }
            .profile-tags-row {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-bottom: 18px;
                width: 100%;
            }
            .profile-tag {
                background: #949494ff;
                color: #803333;
                border-radius: 18px;
                padding: 8px 18px;
                font-weight: bold;
                font-size: 1em;
                display: flex;
                align-items: center;
                gap: 6px;
                margin-bottom: 4px;
            }
            .profile-tag .remove-tag {
                background: none;
                border: none;
                color: #a94444;
                font-size: 1.1em;
                cursor: pointer;
                font-weight: bold;
                margin-left: 4px;
            }
            .profile-doc-section {
                width: 100%;
                margin-bottom: 18px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
            .profile-doc-label {
                font-weight: bold;
                margin-bottom: 6px;
                color: #803333;
            }
            .profile-doc-upload {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 100%;
            }
            .profile-doc-preview {
                width: 120px;
                height: 80px;
                border-radius: 8px;
                background: #eee;
                object-fit: cover;
                margin-bottom: 8px;
                border: 2px solid #803333;
                display: none;
            }
            .profile-advance-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 14px 38px;
                font-size: 1.1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                margin-top: 18px;
                transition: background 0.2s, transform 0.2s;
                width: 100%;
                max-width: 240px;
                align-self: center;
            }
            .profile-advance-btn:hover {
                background: #a94444;
                transform: translateY(-8px);
            }
        </style>
        <div class="profile-page">
            <h1>Perfil</h1>
            <div class="profile-card">
                <div class="profile-photo-upload">
                    <img id="profile-photo-preview" class="profile-photo-preview" src="" alt="Foto de perfil" style="display:none;">
                    <input type="file" id="profile-photo-input" accept="image/*">
                </div>
                <div class="profile-fields-grid">
                    <div>
                        <label for="profile-nome">Nome:</label>
                        <input type="text" id="profile-nome" placeholder="Nome">
                    </div>
                    <div>
                        <label for="profile-sobrenome">Sobrenome:</label>
                        <input type="text" id="profile-sobrenome" placeholder="Sobrenome">
                    </div>
                    <div>
                        <label for="profile-altura">Altura:</label>
                        <input type="text" id="profile-altura" placeholder="Ex: 1.70m">
                    </div>
                    <div>
                        <label for="profile-cabelo">Cor do cabelo:</label>
                        <input type="text" id="profile-cabelo" placeholder="Ex: Castanho">
                    </div>
                    <div>
                        <label for="profile-olhos">Cor dos olhos:</label>
                        <input type="text" id="profile-olhos" placeholder="Ex: Verde">
                    </div>
                    <div>
                        <label for="profile-hobby">Hobby:</label>
                        <input type="text" id="profile-hobby" placeholder="Ex: Leitura">
                    </div>
                </div>
                <div class="profile-desc-row">
                    <label class="profile-desc-label" for="profile-desc">Descrição:</label>
                    <textarea id="profile-desc" class="profile-desc" placeholder="Descrição"></textarea>
                </div>
                <div class="add-tag-row">
                    <input type="text" id="add-tag-input" class="add-tag-input" placeholder="Características Específicas">
                    <button id="add-tag-btn" class="add-tag-btn">+</button>
                </div>
                <div id="profile-tags-row" class="profile-tags-row"></div>
                <div class="profile-doc-section">
                    <span class="profile-doc-label">Documento que comprove maioridade</span>
                    <div class="profile-doc-upload">
                        <img id="profile-doc-preview" class="profile-doc-preview" src="" alt="RG">
                        <input type="file" id="profile-doc-input" accept="image/*,application/pdf">
                    </div>
                </div>
                <button class="profile-advance-btn" id="profile-advance-btn">Avançar</button>
            </div>
        </div>
    `;

    // Foto preview
    const photoInput = document.getElementById('profile-photo-input');
    const photoPreview = document.getElementById('profile-photo-preview');
    photoInput.onchange = function () {
        if (this.files && this.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                photoPreview.src = e.target.result;
                photoPreview.style.display = 'block';
            };
            reader.readAsDataURL(this.files[0]);
        }
    };

    // Documento preview
    const docInput = document.getElementById('profile-doc-input');
    const docPreview = document.getElementById('profile-doc-preview');
    docInput.onchange = function () {
        if (this.files && this.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                if (docInput.files[0].type.startsWith('image/')) {
                    docPreview.src = e.target.result;
                    docPreview.style.display = 'block';
                } else {
                    docPreview.style.display = 'none';
                }
            };
            reader.readAsDataURL(this.files[0]);
        }
    };

    // Tags
    const tagsRow = document.getElementById('profile-tags-row');
    const addTagBtn = document.getElementById('add-tag-btn');
    const addTagInput = document.getElementById('add-tag-input');
    let tags = [];
    addTagBtn.onclick = () => {
        const value = addTagInput.value.trim();
        if (value && !tags.includes(value)) {
            tags.push(value);
            renderTags();
            addTagInput.value = '';
        }
    };
    function renderTags() {
        tagsRow.innerHTML = '';
        tags.forEach(tag => {
            const tagDiv = document.createElement('div');
            tagDiv.className = 'profile-tag';
            tagDiv.innerHTML = `${tag} <button class="remove-tag" title="Remover">&times;</button>`;
            tagDiv.querySelector('.remove-tag').onclick = () => {
                tags = tags.filter(t => t !== tag);
                renderTags();
            };
            tagsRow.appendChild(tagDiv);
        });
    };

    // Avançar agora vai para tela de post
    document.getElementById('profile-advance-btn').onclick = () => {
        fadeOutIn(showAccountLevelsCLIENTE);
    };
}

function showAccountLevelsCLIENTE() {
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
                    <div class="level-header bronze">Bronze</div>
                    <div class="level-benefits">
                        <ul>
                            <li>Conta: conta por IP e documento, preço por mês;</li>
                            <li>Chat expandido até 4 pessoas por semana;</li>
                            <li>Pedidos limitados de 4 por mês;</li>
                            <li>Possibilidade de agenda automática que marca os dias e horários dos encontros para facilitar a organização, juntamente de avisos como notificações para recordar sobre o evento.</li>
                            <li>Preferência particulares fenotípicas.</li>
                        </ul>
                    </div>
                    <div class="ser-titulo bronze">Ser Bronze</div>
                    <button class="level-btn bronze" onclick='window.location.href = "../Entrar/entrar.html"'>R$ 19,90</button>
                </div>
                <div class="level-card">
                    <div class="level-header prata">Silver</div>
                    <div class="level-benefits">
                        <ul>
                            <li>Conta: por IP e documento, preço por mês;</li>
                            <li>Chat expandido até 6 pessoas por semana;</li>
                            <li>Pedidos por mês limitados de 5 por mês;</li>
                            <li>Possibilidade de agenda automática que marca os dias e horários dos encontros para facilitar a organização, juntamente de avisos como notificações para recordar sobre o evento;</li>
                            <li>Maior variedade de opção de serviços na região, sendo mais fácil a busca pelo seu “par ideal”;</li>
                            <li>Ferramenta de expansão de região e possibilidades, por exemplo, se um usuário escolhe a região de SP, poderá mudar a região de atuação para que tenha as mesmas preferências em outra região, por exemplo fora do país, assim tendo um atendimento muito melhor e mais opções worldwide;</li>
                            <li>Preferências particulares fenotípicas.</li>
                        </ul>
                    </div>
                    <div class="ser-titulo prata">Ser Silver</div>
                    <button class="level-btn prata" onclick='window.location.href = "../Entrar/entrar.html"'>R$ 59,90</button>
                </div>
                <div class="level-card">
                    <div class="level-header ouro">Gold</div>
                    <div class="level-benefits">
                        <ul>
                            <li>Conta: por IP e documento, preço por mês;</li>
                            <li>Chat expandido ilimitado;</li>
                            <li>Pedidos por mês ilimitado;</li>
                            <li>Possibilidade de agenda automática que marca os dias e horários dos encontros para facilitar a organização, juntamente de avisos como notificações para recordar sobre o evento;</li>
                            <li>Maior variedade de opção de serviços na região, sendo mais fácil a busca pelo seu “par ideal”;</li>
                            <li>Ferramenta de expansão de região e possibilidades, por exemplo, se um usuário escolhe a região de SP, poderá mudar a região de atuação para que tenha as mesmas preferências em outra região, por exemplo fora do país, assim tendo um atendimento muito melhor e mais opções worldwide;</li>
                            <li>Preferência particulares fenotípicas;</li>
                            <li>Escolha de serviços por preço específico (por faixa de preço);</li>
                            <li>1 Mês grátis ao pagar uma anuidade;</li>
                            <li>Fotos privadas ilimitadas.</li>
                        </ul>
                    </div>
                    <div class="ser-titulo ouro">Ser Gold</div>
                    <button class="level-btn ouro" onclick='window.location.href = "../Entrar/entrar.html"'>R$ 79,90</button>
                </div>
            </div>
        </div>
    `;
}

// --- PRESTADOR ---

function showUserFormPRESTADOR() {
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
                        <button id="btn-avancar" class="btn-float right">Avançar</button>
                    </div>
                </div>
            `;

    // Transição ao clicar em avançar
    document.getElementById('btn-avancar').onclick = () => {
        const app = document.getElementById('app');
        app.style.transition = 'opacity 0.4s';
        app.style.opacity = 0;
        setTimeout(() => {
            showServiceInterestPRESTADOR();
            app.style.opacity = 1;
        }, 400);
    };
}

function showServiceInterestPRESTADOR() {
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
            <h1>Quais são os serviços que você deseja disponibilizar?</h1>
            <div class="service-search-row">
                <input type="text" class="service-search" id="service-search-input-prestador" placeholder="Pesquisar serviço...">
                <button class="service-advance-btn" id="btn-avancar-servico-prestador">Avançar</button>
            </div>
            <div class="service-columns" id="service-columns-prestador">
                <div class="service-col">
                    <div class="service-card"><div class="service-info"><div class="service-title">Programas sexuais</div><div class="service-desc">Atendimento íntimo conforme os limites e preferências definidas pelo prestador(a), podendo variar em tipo, duração e abordagem.</div></div></div>
                    <div class="service-card"><div class="service-info"><div class="service-title">Acompanhante de eventos</div><div class="service-desc">Presença em eventos sociais, festas ou encontros, oferecendo companhia, conversa e apoio social.</div></div></div>
                    <div class="service-card"><div class="service-info"><div class="service-title">Acompanhante de casa</div><div class="service-desc">Companhia em ambiente doméstico para interações sociais, emocionais ou de lazer.</div></div></div>
                </div>
                <div class="service-col">
                    <div class="service-card"><div class="service-info"><div class="service-title">Namorada(o) de aluguel (acompanhante momentânea/o)</div><div class="service-desc">Simulação de relacionamento romântico por um período específico, podendo incluir interações presenciais e virtuais.</div></div></div>
                    <div class="service-card"><div class="service-info"><div class="service-title">Companhia para solidão / tratamento emocional</div><div class="service-desc">Foco no apoio emocional, escuta ativa e interação para lidar com sentimentos de solidão, ansiedade ou carência afetiva.</div></div></div>
                    <div class="service-card"><div class="service-info"><div class="service-title">Validação de sentimentos (“mommy issues” e similares)</div><div class="service-desc">Interações personalizadas para suprir necessidades afetivas e de validação emocional, conforme o papel ou dinâmica acordada.</div></div></div>
                    <div class="service-card"><div class="service-info"><div class="service-title">Outros programas definidos pelo prestador(a)</div><div class="service-desc">Serviços criados livremente pelo profissional, com descrição própria, adaptados às demandas ou fetiches específicos do cliente.</div></div></div>
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

    // Pesquisa funcional
    const searchInput = document.getElementById('service-search-input-prestador');
    const columns = document.getElementById('service-columns-prestador');
    searchInput.addEventListener('input', function () {
        const val = this.value.trim().toLowerCase();
        columns.querySelectorAll('.service-card').forEach(card => {
            const title = card.querySelector('.service-title').textContent.toLowerCase();
            card.style.display = (!val || title.includes(val)) ? '' : 'none';
        });
    });

    document.getElementById('btn-avancar-servico-prestador').onclick = () => {
        fadeOutIn(showProviderPreferencesPRESTADOR);
    };
}

function showProviderPreferencesPRESTADOR() {
    document.getElementById('app').innerHTML = `
        <style>
            .pref-page {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-family: 'Agrandir', sans-serif;
                margin-top: 40px;
            }
            .pref-page h1 {
                margin-bottom: 18px;
            }
            .pref-warning {
                font-size: 1.1em;
                color: #a94444;
                margin-bottom: 32px;
                font-weight: bold;
            }
            .pref-content {
                display: flex;
                gap: 40px;
                align-items: flex-start;
                justify-content: center;
                width: 100%;
                margin-bottom: 24px;
            }
            .pref-video {
                width: 380px;
                height: 220px;
                border-radius: 16px;
                background: #ddd;
                box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            }
            .pref-actions {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 22px;
                margin-top: 18px;
            }
            .pref-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 14px 32px;
                font-size: 1.1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                transition: background 0.2s, transform 0.2s;
                opacity: 0.6;
                pointer-events: none;
            }
            .pref-btn.enabled {
                opacity: 1;
                pointer-events: auto;
            }
            .pref-btn:active {
                transform: scale(0.96);
                filter: brightness(0.93);
            }
            .surprise {
                margin-top: 18px;
                font-weight: bold;
                font-size: 1.1em;
                color: #ffd700;
                background: #803333;
                border-radius: 8px;
                padding: 8px 18px;
                text-align: center;
                width: fit-content;
                transition: background 0.2s, transform 0.2s;
            }
            .surprise:active {
                transform: scale(0.96);
                filter: brightness(0.93);
            }
            .popup-bg {
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                background: rgba(0,0,0,0.35);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                animation: fadeInBg 0.4s;
            }
            @keyframes fadeInBg {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .popup-content {
                background: #fff;
                border-radius: 18px;
                padding: 32px 38px;
                min-width: 420px;
                max-width: 95vw;
                max-height: 90vh;
                box-shadow: 0 4px 24px rgba(0,0,0,0.13);
                animation: popupIn 0.4s;
                overflow-y: auto;
            }
            @keyframes popupIn {
                from { transform: scale(0.85); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
            .service-search {
                width: 320px;
                max-width: 90vw;
                padding: 12px 18px;
                font-size: 1.1em;
                border-radius: 8px;
                border: 1px solid #ccc;
                font-family: 'Agrandir', sans-serif;
                margin-bottom: 22px;
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
                margin-bottom: 12px;
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
            .close-popup-btn {
                margin-top: 18px;
                background: #a94444;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 10px 24px;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                transition: background 0.2s, transform 0.2s;
            }
            .close-popup-btn:hover {
                background: #803333;
            }
            .slider-label {
                margin-bottom: 6px;
                font-weight: bold;
            }
            .slider-row {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 18px;
            }
            .slider-value {
                min-width: 40px;
                font-weight: bold;
            }
            .skin-row {
                margin-bottom: 18px;
            }
            .skin-label {
                font-weight: bold;
                margin-bottom: 6px;
                display: block;
            }
            .skin-grid {
                display: flex;
                gap: 6px;
                margin-bottom: 8px;
            }
            .skin-cell {
                width: 32px;
                height: 32px;
                border-radius: 6px;
                border: 2px solid transparent;
                cursor: pointer;
                transition: border 0.2s;
            }
            .skin-cell.selected {
                border: 2px solid #803333;
            }
            .keywords-label {
                font-weight: bold;
                margin-bottom: 6px;
                display: block;
            }
            .keywords-row {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 12px;
            }
            .keywords-input {
                padding: 8px 14px;
                border-radius: 8px;
                border: 1px solid #ccc;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                width: 180px;
            }
            .keywords-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 8px 18px;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                transition: background 0.2s, transform 0.2s;
            }
            .keywords-btn:hover {
                background: #a94444;
                transform: translateY(-6px);
            }
            .keywords-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-bottom: 10px;
            }
            .keywords-tag {
                background: #949494ff;
                color: #803333;
                border-radius: 18px;
                padding: 6px 14px;
                font-weight: bold;
                font-size: 1em;
                display: flex;
                align-items: center;
                gap: 4px;
            }
            .keywords-tag .remove-tag {
                background: none;
                border: none;
                color: #a94444;
                font-size: 1.1em;
                cursor: pointer;
                font-weight: bold;
                margin-left: 4px;
            }
            .fetiche-row {
                margin: 18px 0 18px 0;
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            .fetiche-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 8px 18px;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                margin-bottom: 6px;
                transition: background 0.2s, transform 0.2s;
            }
            .fetiche-btn.selected {
                background: #ffd700;
                color: #803333;
            }
            .profile-advance-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 14px 38px;
                font-size: 1.1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                margin-top: 18px;
                transition: background 0.2s, transform 0.2s;
            }
            .profile-advance-btn:hover {
                background: #a94444;
                transform: translateY(-8px);
            }
        </style>
        <div class="pref-page">
            <h1>Características pessoais e do serviço</h1>
            <div class="pref-warning">Atenção, assista ao seguinte vídeo para prosseguir.</div>
            <div class="pref-content">
                <video id="video-tutorial" class="pref-video" src="../../Images/video.mp4" controls autoplay muted></video>
                <div class="pref-actions">
                    <button id="btn-escolher" class="pref-btn">Caracterização de Serviços.</button>
                    <div id="btn-surpreenda" class="surprise" style="opacity:0.6; cursor: pointer; pointer-events:none;">Me surpreenda!</div>
                </div>
            </div>
        </div>
    `;

    // Habilita botões só após assistir todo o vídeo
    const video = document.getElementById('video-tutorial');
    const btnEscolher = document.getElementById('btn-escolher');
    const btnSurpreenda = document.getElementById('btn-surpreenda');
    video.onended = () => {
        btnEscolher.classList.add('enabled');
        btnEscolher.style.pointerEvents = 'auto';
        btnEscolher.style.opacity = '1';
        btnSurpreenda.style.pointerEvents = 'auto';
        btnSurpreenda.style.opacity = '1';
    };

    btnEscolher.onclick = () => {
        btnEscolher.classList.add('active');
        setTimeout(() => {
            showPreferencesPopupPRESTADOR();
        }, 180);
    };

    btnSurpreenda.onclick = () => {
        btnSurpreenda.classList.add('active');
        setTimeout(() => {
            fadeOutIn(showProfilePagePRESTADOR);
        }, 180);
    };
}

function showPreferencesPopupPRESTADOR() {
    const popup = document.createElement('div');
    popup.className = 'popup-bg';
    popup.innerHTML = `
        <style>
            .popup-content {
                background: #fff;
                border-radius: 18px;
                padding: 32px 38px;
                min-width: 420px;
                max-width: 95vw;
                max-height: 90vh;
                box-shadow: 0 4px 24px rgba(0,0,0,0.13);
                animation: popupIn 0.4s;
                overflow-y: auto;
            }
            @keyframes popupIn {
                from { transform: scale(0.85); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
            .popup-title {
                font-size: 1.3em;
                font-weight: bold;
                margin-bottom: 18px;
            }
            .slider-label {
                margin-bottom: 6px;
                font-weight: bold;
            }
            .slider-row {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 18px;
            }
            .slider-value {
                min-width: 40px;
                font-weight: bold;
            }
            .skin-row {
                margin-bottom: 18px;
            }
            .skin-label {
                font-weight: bold;
                margin-bottom: 6px;
                display: block;
            }
            .skin-grid {
                display: flex;
                gap: 6px;
                margin-bottom: 8px;
            }
            .skin-cell {
                width: 32px;
                height: 32px;
                border-radius: 6px;
                border: 2px solid transparent;
                cursor: pointer;
                transition: border 0.2s;
            }
            .skin-cell.selected {
                border: 2px solid #803333;
            }
            .keywords-label {
                font-weight: bold;
                margin-bottom: 6px;
                display: block;
            }
            .keywords-row {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 12px;
            }
            .keywords-input {
                padding: 8px 14px;
                border-radius: 8px;
                border: 1px solid #ccc;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                width: 180px;
            }
            .keywords-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 8px 18px;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                transition: background 0.2s, transform 0.2s;
            }
            .keywords-btn:hover {
                background: #a94444;
                transform: translateY(-6px);
            }
            .keywords-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-bottom: 10px;
            }
            .keywords-tag {
                background: #949494ff;
                color: #803333;
                border-radius: 18px;
                padding: 6px 14px;
                font-weight: bold;
                font-size: 1em;
                display: flex;
                align-items: center;
                gap: 4px;
            }
            .keywords-tag .remove-tag {
                background: none;
                border: none;
                color: #a94444;
                font-size: 1.1em;
                cursor: pointer;
                font-weight: bold;
                margin-left: 4px;
            }
            .fetiche-row {
                margin: 18px 0 18px 0;
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            .fetiche-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 8px 18px;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                margin-bottom: 6px;
                transition: background 0.2s, transform 0.2s;
            }
            .fetiche-btn.selected {
                background: #ffd700;
                color: #803333;
            }
            .profile-advance-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 14px 38px;
                font-size: 1.1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                margin-top: 18px;
                transition: background 0.2s, transform 0.2s;
            }
            .profile-advance-btn:hover {
                background: #a94444;
                transform: translateY(-8px);
            }
        </style>
        <div class="popup-content">
            <div class="slider-label">Altura (m):</div>
            <div class="slider-row">
                <input type="range" min="1" max="2" step="0.01" id="altura-slider" value="1.70" style="width:180px;">
                <span class="slider-value" id="altura-value">1.70</span>
            </div>
            <div class="skin-row">
                <span class="skin-label">Cor da pele:</span>
                <div class="skin-grid" id="skin-grid"></div>
            </div>
            <div>
                <span class="keywords-label">Características específicas</span>
                <div class="keywords-row">
                    <input type="text" id="keywords-input" class="keywords-input" placeholder="Adicionar característica">
                    <button id="keywords-btn" class="keywords-btn">+</button>
                </div>
                <div id="keywords-tags" class="keywords-tags"></div>
            </div>
            <button class="profile-advance-btn" id="profile-advance-btn">Avançar</button>
        </div>
    `;
    document.body.appendChild(popup);

    // Slider de altura
    const slider = popup.querySelector('#altura-slider');
    const sliderValue = popup.querySelector('#altura-value');
    sliderValue.textContent = slider.value;
    slider.oninput = () => {
        sliderValue.textContent = slider.value;
    };

    // Grid de cor de pele (gradiente de negro para branco)
    const skinGrid = popup.querySelector('#skin-grid');
    const skinColors = [
        "#2d1b0e", "#4b2e1a", "#6d4b2a", "#a67c52", "#c8a165", "#e5c28a", "#f5e2c0", "#fff6e5"
    ];
    let selectedSkin = null;
    skinColors.forEach((color, idx) => {
        const cell = document.createElement('div');
        cell.className = 'skin-cell';
        cell.style.background = color;
        cell.onclick = () => {
            skinGrid.querySelectorAll('.skin-cell').forEach(c => c.classList.remove('selected'));
            cell.classList.add('selected');
            selectedSkin = color;
        };
        skinGrid.appendChild(cell);
    });

    // Palavras-chave
    const keywordsTags = popup.querySelector('#keywords-tags');
    const keywordsBtn = popup.querySelector('#keywords-btn');
    const keywordsInput = popup.querySelector('#keywords-input');
    let keywords = [];
    keywordsBtn.onclick = () => {
        const value = keywordsInput.value.trim();
        if (value && !keywords.includes(value)) {
            keywords.push(value);
            renderKeywords();
            keywordsInput.value = '';
        }
    };
    function renderKeywords() {
        keywordsTags.innerHTML = '';
        keywords.forEach(tag => {
            const tagDiv = document.createElement('div');
            tagDiv.className = 'keywords-tag';
            tagDiv.innerHTML = `${tag} <button class="remove-tag" title="Remover">&times;</button>`;
            tagDiv.querySelector('.remove-tag').onclick = () => {
                keywords = keywords.filter(t => t !== tag);
                renderKeywords();
            };
            keywordsTags.appendChild(tagDiv);
        });
    }

    // Avançar para perfil prestador
    popup.querySelector('#profile-advance-btn').onclick = () => {
        popup.classList.add('fadeOut');
        setTimeout(() => {
            document.body.removeChild(popup);
            fadeOutIn(showProfilePagePRESTADOR);
        }, 350);
    };
}

function showProfilePagePRESTADOR() {
    document.getElementById('app').innerHTML = `
        <style>
            .profile-page {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-family: 'Agrandir', sans-serif;
                margin-top: 40px;
                min-height: 90vh;
                background: #faf9f7;
            }
            .profile-card {
                background: #fff;
                border-radius: 18px;
                box-shadow: 0 4px 24px rgba(0,0,0,0.10);
                padding: 38px 44px 32px 44px;
                max-width: 540px;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 32px;
                border: 1.5px solid #e5e2e0;
            }
            .profile-page h1 {
                margin-bottom: 32px;
                font-size: 2em;
                letter-spacing: 1px;
            }
            .profile-photo-upload {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 24px;
            }
            .profile-photo-preview {
                width: 120px;
                height: 120px;
                border-radius: 50%;
                background: #eee;
                object-fit: cover;
                margin-bottom: 12px;
                border: 2px solid #803333;
                box-shadow: 0 2px 8px rgba(128,51,51,0.08);
            }
            .profile-fields-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 18px 16px;
                width: 100%;
                margin-bottom: 18px;
            }
            .profile-fields-grid label {
                font-weight: bold;
                margin-bottom: 4px;
                color: #803333;
                font-size: 1em;
            }
            .profile-fields-grid input {
                padding: 10px 16px;
                border-radius: 8px;
                border: 1px solid #ccc;
                font-size: 1.1em;
                font-family: 'Agrandir', sans-serif;
                width: 100%;
                margin-bottom: 0;
            }
            .profile-desc-row {
                width: 100%;
                margin-bottom: 22px;
            }
            .profile-desc-label {
                font-weight: bold;
                color: #803333;
                margin-bottom: 6px;
                display: block;
            }
            .profile-desc {
                width: 100%;
                min-height: 60px;
                border-radius: 8px;
                border: 1px solid #ccc;
                font-size: 1.05em;
                font-family: 'Agrandir', sans-serif;
                padding: 10px 16px;
                resize: vertical;
            }
            .add-tag-row {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 18px;
                width: 100%;
            }
            .add-tag-input {
                padding: 8px 14px;
                border-radius: 8px;
                border: 1px solid #ccc;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                width: 70%;
            }
            .add-tag-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 8px 18px;
                font-size: 1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                transition: background 0.2s, transform 0.2s;
            }
            .add-tag-btn:hover {
                background: #a94444;
                transform: translateY(-6px);
            }
            .profile-tags-row {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-bottom: 18px;
                width: 100%;
            }
            .profile-tag {
                background: #949494ff;
                color: #803333;
                border-radius: 18px;
                padding: 8px 18px;
                font-weight: bold;
                font-size: 1em;
                display: flex;
                align-items: center;
                gap: 6px;
                margin-bottom: 4px;
            }
            .profile-tag .remove-tag {
                background: none;
                border: none;
                color: #a94444;
                font-size: 1.1em;
                cursor: pointer;
                font-weight: bold;
                margin-left: 4px;
            }
            .profile-doc-section {
                width: 100%;
                margin-bottom: 18px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
            .profile-doc-label {
                font-weight: bold;
                margin-bottom: 6px;
                color: #803333;
            }
            .profile-doc-upload {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 100%;
            }
            .profile-doc-preview {
                width: 120px;
                height: 80px;
                border-radius: 8px;
                background: #eee;
                object-fit: cover;
                margin-bottom: 8px;
                border: 2px solid #803333;
                display: none;
            }
            .profile-advance-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 14px 38px;
                font-size: 1.1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                margin-top: 18px;
                transition: background 0.2s, transform 0.2s;
                width: 100%;
                max-width: 240px;
                align-self: center;
            }
            .profile-advance-btn:hover {
                background: #a94444;
                transform: translateY(-8px);
            }
        </style>
        <div class="profile-page">
            <h1>Perfil</h1>
            <div class="profile-card">
                <div class="profile-photo-upload">
                    <img id="profile-photo-preview" class="profile-photo-preview" src="" alt="Foto de perfil" style="display:none;">
                    <input type="file" id="profile-photo-input" accept="image/*">
                </div>
                <div class="profile-fields-grid">
                    <div>
                        <label for="profile-nome">Nome:</label>
                        <input type="text" id="profile-nome" placeholder="Nome">
                    </div>
                    <div>
                        <label for="profile-sobrenome">Sobrenome:</label>
                        <input type="text" id="profile-sobrenome" placeholder="Sobrenome">
                    </div>
                    <div>
                        <label for="profile-altura">Altura:</label>
                        <input type="text" id="profile-altura" placeholder="Ex: 1.70m">
                    </div>
                    <div>
                        <label for="profile-cabelo">Cor do cabelo:</label>
                        <input type="text" id="profile-cabelo" placeholder="Ex: Castanho">
                    </div>
                    <div>
                        <label for="profile-olhos">Cor dos olhos:</label>
                        <input type="text" id="profile-olhos" placeholder="Ex: Verde">
                    </div>
                    <div>
                        <label for="profile-hobby">Hobby:</label>
                        <input type="text" id="profile-hobby" placeholder="Ex: Leitura">
                    </div>
                </div>
                <div class="profile-desc-row">
                    <label class="profile-desc-label" for="profile-desc">Descrição:</label>
                    <textarea id="profile-desc" class="profile-desc" placeholder="Descrição"></textarea>
                </div>
                <div class="add-tag-row">
                    <input type="text" id="add-tag-input" class="add-tag-input" placeholder="Características Específicas">
                    <button id="add-tag-btn" class="add-tag-btn">+</button>
                </div>
                <div id="profile-tags-row" class="profile-tags-row"></div>
                <div class="profile-doc-section">
                    <span class="profile-doc-label">RG</span>
                    <div class="profile-doc-upload">
                        <img id="profile-doc-preview" class="profile-doc-preview" src="" alt="RG">
                        <input type="file" id="profile-doc-input" accept="image/*,application/pdf">
                    </div>
                </div>
                <button class="profile-advance-btn" id="profile-advance-btn">Avançar</button>
            </div>
        </div>
    `;

    // Foto preview
    const photoInput = document.getElementById('profile-photo-input');
    const photoPreview = document.getElementById('profile-photo-preview');
    photoInput.onchange = function () {
        if (this.files && this.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                photoPreview.src = e.target.result;
                photoPreview.style.display = 'block';
            };
            reader.readAsDataURL(this.files[0]);
        }
    };

    // Documento preview
    const docInput = document.getElementById('profile-doc-input');
    const docPreview = document.getElementById('profile-doc-preview');
    docInput.onchange = function () {
        if (this.files && this.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                if (docInput.files[0].type.startsWith('image/')) {
                    docPreview.src = e.target.result;
                    docPreview.style.display = 'block';
                } else {
                    docPreview.style.display = 'none';
                }
            };
            reader.readAsDataURL(this.files[0]);
        }
    };

    // Tags
    const tagsRow = document.getElementById('profile-tags-row');
    const addTagBtn = document.getElementById('add-tag-btn');
    const addTagInput = document.getElementById('add-tag-input');
    let tags = [];
    addTagBtn.onclick = () => {
        const value = addTagInput.value.trim();
        if (value && !tags.includes(value)) {
            tags.push(value);
            renderTags();
            addTagInput.value = '';
        }
    };
    function renderTags() {
        tagsRow.innerHTML = '';
        tags.forEach(tag => {
            const tagDiv = document.createElement('div');
            tagDiv.className = 'profile-tag';
            tagDiv.innerHTML = `${tag} <button class="remove-tag" title="Remover">&times;</button>`;
            tagDiv.querySelector('.remove-tag').onclick = () => {
                tags = tags.filter(t => t !== tag);
                renderTags();
            };
            tagsRow.appendChild(tagDiv);
        });
    };

    // Avançar agora vai para tela de post
    document.getElementById('profile-advance-btn').onclick = () => {
        fadeOutIn(showFirstPostPRESTADOR);
    };
}

function showFirstPostPRESTADOR() {
    document.getElementById('app').innerHTML = `
        <style>
            .first-post-page {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-family: 'Agrandir', sans-serif;
                min-height: 90vh;
                background: #f9f6f2;
                padding-top: 40px;
            }
            .first-post-card {
                background: #fff;
                border-radius: 18px;
                box-shadow: 0 4px 24px rgba(0,0,0,0.10);
                padding: 38px 44px 32px 44px;
                max-width: 480px;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 32px;
                border: 1.5px solid #e5e2e0;
            }
            .first-post-title {
                font-size: 1.6em;
                color: #803333;
                margin-bottom: 24px;
                font-weight: bold;
            }
            .first-post-photo-upload {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 18px;
            }
            .first-post-photo-preview {
                width: 180px;
                height: 180px;
                border-radius: 16px;
                background: #eee;
                object-fit: cover;
                margin-bottom: 12px;
                border: 2px solid #803333;
                box-shadow: 0 2px 8px rgba(128,51,51,0.08);
                display: none;
            }
            .first-post-desc-label {
                font-weight: bold;
                color: #803333;
                margin-bottom: 6px;
                display: block;
            }
            .first-post-desc {
                width: 100%;
                min-height: 60px;
                border-radius: 8px;
                border: 1px solid #ccc;
                font-size: 1.05em;
                font-family: 'Agrandir', sans-serif;
                padding: 10px 16px;
                resize: vertical;
                margin-bottom: 18px;
            }
            .first-post-btn {
                background: #803333;
                color: #fff;
                border: none;
                border-radius: 8px;
                padding: 14px 38px;
                font-size: 1.1em;
                font-family: 'Agrandir', sans-serif;
                cursor: pointer;
                margin-top: 18px;
                transition: background 0.2s, transform 0.2s;
                width: 100%;
                max-width: 240px;
                align-self: center;
            }
            .first-post-btn:hover {
                background: #a94444;
                transform: translateY(-8px);
            }
        </style>
        <div class="first-post-page">
            <div class="first-post-card">
                <div class="first-post-title">Faça seu primeiro post</div>
                <div class="first-post-photo-upload">
                    <img id="first-post-photo-preview" class="first-post-photo-preview" src="" alt="Foto do post">
                    <input type="file" id="first-post-photo-input" accept="image/*">
                </div>
                <label class="first-post-desc-label" for="first-post-desc">Descrição do post:</label>
                <textarea id="first-post-desc" class="first-post-desc" placeholder="Descreva seu serviço, diferencial, etc."></textarea>
                <button class="first-post-btn" id="first-post-btn">Avançar</button>
            </div>
        </div>
    `;
    // Foto preview
    const photoInput = document.getElementById('first-post-photo-input');
    const photoPreview = document.getElementById('first-post-photo-preview');
    photoInput.onchange = function () {
        if (this.files && this.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                photoPreview.src = e.target.result;
                photoPreview.style.display = 'block';
            };
            reader.readAsDataURL(this.files[0]);
        }
    };
    // Avançar agora vai para tela de post
    document.getElementById('first-post-btn').onclick = () => {
        fadeOutIn(showAccountLevelsPRESTADOR);
    };
}

function showAccountLevelsPRESTADOR() {
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
                    <div class="level-header bronze">Bronze</div>
                    <div class="level-benefits">
                        <ul>
                            <li>Conta: conta por IP e documento, preço por mês;</li>
                            <li>Chat expandido até 4 pessoas por semana;</li>
                            <li>Pedidos limitados de 4 por mês;</li>
                            <li>Possibilidade de agenda automática que marca os dias e horários dos encontros para facilitar a organização, juntamente de avisos como notificações para recordar sobre o evento.</li>
                            <li>Preferência particulares fenotípicas.</li>
                        </ul>
                    </div>
                    <div class="ser-titulo bronze">Ser Bronze</div>
                    <button class="level-btn bronze" onclick='window.location.href = "../Menu Prestador/homeprestador.html"'>R$ 19,90</button>
                </div>
                <div class="level-card">
                    <div class="level-header prata">Silver</div>
                    <div class="level-benefits">
                        <ul>
                            <li>Conta: por IP e documento, preço por mês;</li>
                            <li>Chat expandido até 6 pessoas por semana;</li>
                            <li>Pedidos por mês limitados de 5 por mês;</li>
                            <li>Possibilidade de agenda automática que marca os dias e horários dos encontros para facilitar a organização, juntamente de avisos como notificações para recordar sobre o evento;</li>
                            <li>Maior variedade de opção de serviços na região, sendo mais fácil a busca pelo seu “par ideal”;</li>
                            <li>Ferramenta de expansão de região e possibilidades, por exemplo, se um usuário escolhe a região de SP, poderá mudar a região de atuação para que tenha as mesmas preferências em outra região, por exemplo fora do país, assim tendo um atendimento muito melhor e mais opções worldwide;</li>
                            <li>Preferências particulares fenotípicas.</li>
                        </ul>
                    </div>
                    <div class="ser-titulo prata">Ser Silver</div>
                    <button class="level-btn prata" onclick='window.location.href = "../Menu Prestador/homeprestador.html"'>R$ 59,90</button>
                </div>
                <div class="level-card">
                    <div class="level-header ouro">Gold</div>
                    <div class="level-benefits">
                        <ul>
                            <li>Conta: por IP e documento, preço por mês;</li>
                            <li>Chat expandido ilimitado;</li>
                            <li>Pedidos por mês ilimitado;</li>
                            <li>Possibilidade de agenda automática que marca os dias e horários dos encontros para facilitar a organização, juntamente de avisos como notificações para recordar sobre o evento;</li>
                            <li>Maior variedade de opção de serviços na região, sendo mais fácil a busca pelo seu “par ideal”;</li>
                            <li>Ferramenta de expansão de região e possibilidades, por exemplo, se um usuário escolhe a região de SP, poderá mudar a região de atuação para que tenha as mesmas preferências em outra região, por exemplo fora do país, assim tendo um atendimento muito melhor e mais opções worldwide;</li>
                            <li>Preferência particulares fenotípicas;</li>
                            <li>Escolha de serviços por preço específico (por faixa de preço);</li>
                            <li>1 Mês grátis ao pagar uma anuidade;</li>
                            <li>Fotos privadas ilimitadas.</li>
                        </ul>
                    </div>
                    <div class="ser-titulo ouro">Ser Gold</div>
                    <button class="level-btn ouro" onclick='window.location.href = "../Menu Prestador/homeprestador.html"'>R$ 79,90</button>
                </div>
            </div>
        </div>
    `;
}

// --- TELA INICIAL ---

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
        fadeOutIn(showUserFormCLIENTE);
    };
    document.getElementById('btn-prestador').onclick = () => {
        userType = "prestador";
        fadeOutIn(showUserFormPRESTADOR);
    };
}

// Inicializa a tela
showInitialScreen();