document.addEventListener('DOMContentLoaded', function() {
    const feed = document.getElementById('feed');
    let currentPostIndex = 0;
    const posts = [
        { img: '../Images/mulher1.jpg', name: 'Isadora', message: 'Olá, sou a Isadora!' },
        { img: '../Images/mulher2.jpg', name: 'Camila', message: 'Oi, sou a Camila!' },
        { img: '../Images/mulher3.jpg', name: 'Luiza', message: 'Oi, sou a Luiza!' },
        { img: '../Images/cidade.jpg', name: 'Sofia', message: 'Oi, sou a Sofia!' },
        { img: '../Images/natureza.jpg', name: 'Clara', message: 'Oi, sou a Clara!' }
    ]; // Array de posts com imagens, nomes e mensagens
    const overlay = document.getElementById('overlay');
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
        const overlayTop = document.getElementById('overlay-top');
        const overlay = document.getElementById('overlay');
        const overlayBottom = document.getElementById('overlay-bottom');
    
        // Limpa o conteúdo existente
        overlayTop.innerHTML = '';
        overlayBottom.innerHTML = '';
    
        // Adiciona imagens circulares na parte superior
        posts.forEach((post, index) => {
            const circleImg = document.createElement('img');
            circleImg.src = post.img; // Certifique-se de que `post.img` contém o caminho correto
            circleImg.alt = post.name;
            circleImg.className = 'circle-img';
            circleImg.addEventListener('click', () => {
                console.log(`Clicou na imagem do post ${index + 1}`);
            });
            overlayTop.appendChild(circleImg);
        });
    
        // Adiciona retângulos com informações na parte inferior
        posts.forEach((post) => {
            const postInfo = document.createElement('div');
            postInfo.className = 'post-info';
    
            const profileImg = document.createElement('img');
            profileImg.src = post.img; // Certifique-se de que `post.img` contém o caminho correto
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
        overlay.classList.remove('hidden'); // Mostra o overlay
        populateOverlay(); // Preenche o conteúdo do overlay
    });
    
    overlay.addEventListener('click', (e) => {
        // Verifica se o clique foi fora do conteúdo do overlay
        if (e.target === overlay) {
            overlay.classList.add('hidden'); // Esconde o overlay
        }
    });

    loadMoreContent();
});