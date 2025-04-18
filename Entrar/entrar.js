document.addEventListener('DOMContentLoaded', function() {
    const feed = document.getElementById('feed');
    let currentPostIndex = 0;
    const posts = [];
    const backgrounds = [
        '../Images/mulher1.jpg',
        '../Images/mulher2.jpg',
        '../Images/mulher3.jpg',
        '../Images/cidade.jpg',
        '../Images/natureza.jpg'
    ]; // Array com os caminhos das imagens de fundo

    function loadMoreContent() {
        for (let i = 0; i < 10; i++) {
            const post = document.createElement('div');
            post.className = 'post';

            // Define o background-image dinamicamente
            const backgroundIndex = (posts.length % backgrounds.length); // Alterna entre as imagens
            post.style.backgroundImage = `url('${backgrounds[backgroundIndex]}')`;

            // Cria um elemento de imagem
            const img = document.createElement('img');
            img.src = '../Images/perfil.png'; // Caminho para a imagem
            img.alt = `Post ${posts.length + 1}`;
            img.className = 'post-img'; // Adiciona uma classe para estilização

            // Cria um parágrafo para o texto do post
            const p = document.createElement('p');
            switch (posts.length) {
                case 0:
                    p.textContent = 'Olá, sou a Isadora!';
                    break;
                case 1:
                    p.textContent = 'Oi, sou a Camila!';
                    break;
                case 2:
                    p.textContent = 'Oi, sou a Luiza!';
                    break;
                case 3:
                    p.textContent = 'Oi, sou a Sofia!';
                    break;
                case 4:
                    p.textContent = 'Oi, sou a Clara!';
                    break;
                default:
                    p.textContent = `Post ${posts.length + 1}`;
                    break;
            }

            // Cria o botão para ir para o próximo post
            const buttonNext = document.createElement('div');
            buttonNext.className = 'post-button';
            const buttonNextImg = document.createElement('img');
            buttonNextImg.src = '../Images/down.png'; // Caminho para a imagem do botão
            buttonNextImg.alt = 'Próximo';
            buttonNext.appendChild(buttonNextImg);

            // Adiciona evento de clique para ir para o próximo post
            buttonNext.addEventListener('click', function() {
                currentPostIndex = (currentPostIndex + 1) % posts.length;
                showPost(currentPostIndex);
            });

            // Cria o botão para ir para o post anterior
            const buttonPrev = document.createElement('div');
            buttonPrev.className = 'post-button';
            const buttonPrevImg = document.createElement('img');
            buttonPrevImg.src = '../Images/up.png'; // Caminho para a imagem do botão
            buttonPrevImg.alt = 'Anterior';
            buttonPrev.appendChild(buttonPrevImg);

            // Adiciona evento de clique para ir para o post anterior
            buttonPrev.addEventListener('click', function() {
                currentPostIndex = (currentPostIndex - 1 + posts.length) % posts.length;
                showPost(currentPostIndex);
            });

            // Adiciona os elementos ao post
            post.appendChild(img);
            post.appendChild(p);
            post.appendChild(buttonPrev);
            post.appendChild(buttonNext);

            // Adiciona o post ao array de posts
            posts.push(post);
        }
    }

    function showPost(index) {
        // Limpa o feed
        feed.innerHTML = '';
        // Adiciona o post atual ao feed
        if (posts[index]) {
            feed.appendChild(posts[index]);
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowDown') {
            currentPostIndex = (currentPostIndex + 1) % posts.length;
            showPost(currentPostIndex);
        } else if (event.key === 'ArrowUp') {
            currentPostIndex = (currentPostIndex - 1 + posts.length) % posts.length;
            showPost(currentPostIndex);
        }
    });

    loadMoreContent(); // Load initial content
    showPost(currentPostIndex); // Show the first post
});

document.addEventListener('DOMContentLoaded', function () {
    const feed = document.getElementById('feed');
    const overlay = document.getElementById('overlay');
    const overlayTop = document.getElementById('overlay-top');
    const overlayBottom = document.getElementById('overlay-bottom');
    const circleButton = document.getElementById('circle-button');
    let currentPostIndex = 0;
    const posts = [];
    const backgrounds = [
        '../Images/mulher1.jpg',
        '../Images/mulher2.jpg',
        '../Images/mulher3.jpg',
        '../Images/cidade.jpg',
        '../Images/natureza.jpg'
    ];

    function loadMoreContent() {
        for (let i = 0; i < 10; i++) {
            const post = document.createElement('div');
            post.className = 'post';

            const backgroundIndex = posts.length % backgrounds.length;
            post.style.backgroundImage = `url('${backgrounds[backgroundIndex]}')`;

            const img = document.createElement('img');
            img.src = '../Images/perfil.png';
            img.alt = `Post ${posts.length + 1}`;
            img.className = 'post-img';

            const p = document.createElement('p');
            p.textContent = `Post ${posts.length + 1}`;

            post.appendChild(img);
            post.appendChild(p);
            posts.push({ img: img.src, name: `Pessoa ${posts.length + 1}`, message: `Mensagem do post ${posts.length + 1}` });
        }
    }

    function populateOverlay() {
        overlayTop.innerHTML = '';
        overlayBottom.innerHTML = '';

        posts.forEach((post, index) => {
            // Adiciona imagens circulares na parte superior
            const circleImg = document.createElement('img');
            circleImg.src = post.img;
            circleImg.alt = post.name;
            circleImg.addEventListener('click', () => {
                currentPostIndex = index;
                showPost(currentPostIndex);
            });
            overlayTop.appendChild(circleImg);

            // Adiciona retângulos com informações na parte inferior
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
            overlayBottom.appendChild(postInfo);
        });
    }

    circleButton.addEventListener('click', () => {
        overlay.classList.remove('hidden');
        populateOverlay();
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.add('hidden');
        }
    });

    loadMoreContent();
});