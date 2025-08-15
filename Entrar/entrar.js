// Elementos principais
const feed = document.getElementById('feed');

// Dados dos posts
const posts = [
    { img: '../Images/mulher1.jpg', name: 'Isadora', message: 'Olá, sou a Isadora!' },
    { img: '../Images/mulher2.jpg', name: 'Camila', message: 'Oi, sou a Camila!' },
    { img: '../Images/mulher3.jpg', name: 'Luiza', message: 'Oi, sou a Luiza!' },
]

let currentPostIndex = 0;

// Função para exibir um post no feed
function showPost(index) {
    feed.innerHTML = ''; // Limpa o feed
    const post = document.createElement('div');
    post.className = 'post';
    post.style.opacity = '0'; // Inicialmente invisível

    // Define a imagem como background do post
    post.style.backgroundImage = `url(${posts[index].img})`;
    post.style.backgroundSize = 'cover';
    post.style.backgroundPosition = 'center'; // Centraliza a imagem

    // Adiciona texto do post
    const p = document.createElement('p');
    p.textContent = posts[index].message;

    // Adiciona botões de navegação
    const buttonPrev = document.createElement('div');
    buttonPrev.className = 'post-button';
    buttonPrev.innerHTML = '<img src="../Images/up.png" alt="Anterior">';
    buttonPrev.addEventListener('click', () => {
        animateFeed('up');
        currentPostIndex = (currentPostIndex - 1 + posts.length) % posts.length;
        setTimeout(() => showPost(currentPostIndex), 350);
    });

    const buttonNext = document.createElement('div');
    buttonNext.className = 'post-button';
    buttonNext.innerHTML = '<img src="../Images/down.png" alt="Próximo">';
    buttonNext.addEventListener('click', () => {
        animateFeed('down');
        currentPostIndex = (currentPostIndex + 1) % posts.length;
        setTimeout(() => showPost(currentPostIndex), 350);
    });

    // Monta o post
    post.appendChild(p);
    post.appendChild(buttonPrev);
    post.appendChild(buttonNext);

    feed.appendChild(post);

    // Fade in do post
    setTimeout(() => {
        post.style.transition = 'opacity 0.7s';
        post.style.opacity = '1';
    }, 10);
}

// Animação de aura e imagem
function animateFeed(direction) {
    const postDiv = feed.querySelector('.post');
    if (!postDiv) return;

    // Remove aura anterior se existir
    const oldAura = document.getElementById('feed-aura');
    if (oldAura) oldAura.remove();

    // Cria aura animada
    const aura = document.createElement('div');
    aura.id = 'feed-aura';
    aura.style.position = 'absolute';
    aura.style.pointerEvents = 'none';
    aura.style.top = feed.offsetTop + 'px';
    aura.style.left = feed.offsetLeft + 'px';
    aura.style.width = feed.offsetWidth + 'px';
    aura.style.height = feed.offsetHeight + 'px';
    aura.style.borderRadius = '16px';
    aura.style.zIndex = 10;
    aura.style.boxShadow = direction === 'up'
        ? '0 0 80px 40px #3ecf3e60, 0 0 160px 80px #3ecf3e30'
        : '0 0 80px 40px #d32f2f60, 0 0 160px 80px #d32f2f30';
    aura.style.transition = 'all 0.7s cubic-bezier(.68,-0.55,.27,1.55), opacity 0.7s';
    aura.style.opacity = '1';

    // Adiciona aura ao feed (usando parentNode para overlay)
    feed.parentNode.style.position = 'relative';
    feed.parentNode.appendChild(aura);

    // Anima imagem para cima ou baixo e fade out/in
    postDiv.style.transition = 'transform 0.7s cubic-bezier(.68,-0.55,.27,1.55), opacity 0.7s';
    postDiv.style.transform = direction === 'up' ? 'translateY(-120px)' : 'translateY(120px)';
    postDiv.style.opacity = '0';

    aura.animate([
        { transform: 'translateX(0px)', opacity: 1 },
        { transform: direction === 'up' ? 'translateY(-60px)' : 'translateY(60px)', opacity: 0.7 },
        { transform: 'translateX(0px)', opacity: 0 }
    ], {
        duration: 700,
        easing: 'cubic-bezier(.68,-0.55,.27,1.55)'
    });

    setTimeout(() => {
        postDiv.style.transform = '';
        postDiv.style.opacity = '0';
        if (aura.parentNode) aura.parentNode.removeChild(aura);

        // Fade in feed
        setTimeout(() => {
            postDiv.style.transition = 'opacity 0.7s';
            postDiv.style.opacity = '1';
        }, 100);
    }, 700);
}

// Função para criar o popup dinamicamente
function createPopup() {
    // Cria o contêiner do popup
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.className = 'hidden';

    // Cria o conteúdo do popup
    const popupContent = document.createElement('div');
    popupContent.id = 'popup-content';

    // Cria o botão de fechar
    const closePopup = document.createElement('button');
    closePopup.id = 'close-popup';
    closePopup.textContent = 'X';
    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden'); // Fecha o popup
    });

    // Cria a divisão superior com imagens circulares
 const popupTop = document.createElement('div');
popupTop.id = 'popup-top';
posts.forEach((post) => {
    const circleImg = document.createElement('img');
    circleImg.src = post.img;
    circleImg.alt = post.name;
    circleImg.className = 'circle-img';
    circleImg.addEventListener('click', () => {
        // Limpa o conteúdo do popupContent
        popupContent.innerHTML = '';
        popupContent.style.backgroundImage = `url(${post.img})`;
        popupContent.style.backgroundSize = 'cover';
        popupContent.style.backgroundPosition = 'center';
        popupContent.style.display = 'flex';
        popupContent.style.flexDirection = 'column';
        popupContent.style.alignItems = 'center';
        popupContent.style.justifyContent = 'center';
        popupContent.style.minHeight = '350px';

        // Botão de fechar
        const closePopup = document.createElement('button');
        closePopup.id = 'close-popup';
        closePopup.textContent = 'X';
        closePopup.addEventListener('click', () => {
            popup.classList.add('hidden');
        });

        // Nome embaixo
    const name = document.createElement('div');
    name.textContent = post.name;
    name.style.font = 'bold 22px Agrandir, Arial, sans-serif';
    name.style.color = '#885e5eff';
    name.style.marginTop = '500px';
    
    name.style.marginLeft = '-300px';

        popupContent.appendChild(closePopup);
        popupContent.appendChild(name);
    });
    popupTop.appendChild(circleImg);
});

    // Cria a divisão inferior com retângulos de informações
    const popupBottom = document.createElement('div');
popupBottom.id = 'popup-bottom';
posts.forEach((post) => {
    const postInfo = document.createElement('div');
    postInfo.className = 'post-info';

    const profileImg = document.createElement('img');
    profileImg.src = post.img;
    profileImg.alt = post.name;

    const details = document.createElement('div');
    details.className = 'details';

    const name = document.createElement('p');
    name.textContent = post.name;

    const message = document.createElement('p');
    message.textContent = post.message;

    details.appendChild(name);
    details.appendChild(message);
    postInfo.appendChild(profileImg);
    postInfo.appendChild(details);
    popupBottom.appendChild(postInfo);

    // Evento de clique para ir ao chat e salvar o nome
    postInfo.addEventListener('click', () => {
        localStorage.setItem('chatUser', post.name);
        window.location.href = 'Chat/chat.html';
    });
});

    // Monta o popup
    popupContent.appendChild(closePopup);
    popupContent.appendChild(popupTop);
    popupContent.appendChild(popupBottom);
    popup.appendChild(popupContent);

    // Adiciona o popup ao body
    document.body.appendChild(popup);

    return popup;
}

// Inicializa o feed com o primeiro post
showPost(currentPostIndex);

// Configura o botão circular para abrir o popup
const circleButton = document.getElementById('circle-button');
const popup = createPopup(); // Cria o popup dinamicamente

circleButton.addEventListener('click', () => {
    popup.classList.remove('hidden'); // Abre o popup
});

