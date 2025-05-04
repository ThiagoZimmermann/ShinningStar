// Elementos principais
const feed = document.getElementById('feed');

// Dados dos posts
const posts = [
    { img: '../Images/mulher1.jpg', name: 'Isadora', message: 'Olá, sou a Isadora!' },
    { img: '../Images/mulher2.jpg', name: 'Camila', message: 'Oi, sou a Camila!' },
    { img: '../Images/mulher3.jpg', name: 'Luiza', message: 'Oi, sou a Luiza!' },
    { img: '../Images/cidade.jpg', name: 'Sofia', message: 'Oi, sou a Sofia!' },
    { img: '../Images/natureza.jpg', name: 'Clara', message: 'Oi, sou a Clara!' }
];

let currentPostIndex = 0;

// Função para exibir um post no feed
function showPost(index) {
    feed.innerHTML = ''; // Limpa o feed
    const post = document.createElement('div');
    post.className = 'post';

    // Define a imagem como background do post
    post.style.backgroundImage = `url(${posts[index].img})`;
    post.style.backgroundSize = 'cover'; // Ajusta a imagem para cobrir o post
    post.style.backgroundPosition = 'center'; // Centraliza a imagem

    // Adiciona texto do post
    const p = document.createElement('p');
    p.textContent = posts[index].message;

    // Adiciona botões de navegação
    const buttonPrev = document.createElement('div');
    buttonPrev.className = 'post-button';
    buttonPrev.innerHTML = '<img src="../Images/up.png" alt="Anterior">';
    buttonPrev.addEventListener('click', () => {
        currentPostIndex = (currentPostIndex - 1 + posts.length) % posts.length;
        showPost(currentPostIndex);
    });

    const buttonNext = document.createElement('div');
    buttonNext.className = 'post-button';
    buttonNext.innerHTML = '<img src="../Images/down.png" alt="Próximo">';
    buttonNext.addEventListener('click', () => {
        currentPostIndex = (currentPostIndex + 1) % posts.length;
        showPost(currentPostIndex);
    });

    // Monta o post
    post.appendChild(p);
    post.appendChild(buttonPrev);
    post.appendChild(buttonNext);

    feed.appendChild(post);
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