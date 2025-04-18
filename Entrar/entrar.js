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
            p.textContent = `Post ${posts.length + 1}`;

            // Cria o primeiro botão
            const button1 = document.createElement('div');
            button1.className = 'post-button';
            const button1Img = document.createElement('img');
            button1Img.src = '../Images/up.png'; // Caminho para a imagem do botão
            button1Img.alt = 'Botão 1';
            button1Img.className = 'up'; // Adiciona uma classe para estilização
            button1.appendChild(button1Img);

            // Cria o segundo botão
            const button2 = document.createElement('div');
            button2.className = 'post-button';
            const button2Img = document.createElement('img');
            button2Img.src = '../Images/up.png'; // Caminho para a imagem do botão
            button2Img.alt = 'Botão 2';
            button2.appendChild(button2Img);

            // Adiciona os elementos ao post
            post.appendChild(img);
            post.appendChild(p);
            post.appendChild(button1);
            post.appendChild(button2);

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