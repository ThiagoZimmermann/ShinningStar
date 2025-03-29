document.addEventListener('DOMContentLoaded', function() {
    const feed = document.getElementById('feed');
    let currentPostIndex = 0;
    const posts = [];

    function loadMoreContent() {
        for (let i = 1; i < 10; i++) {
            const post = document.createElement('div');
            post.className = 'post';

            // Cria um elemento de imagem
            const img = document.createElement('img');

            // Cria um parágrafo para o texto do post
            const p = document.createElement('p');
            p.textContent = `Post ${posts.length + 1}`;

            // Adiciona a imagem e o parágrafo ao post
            post.appendChild(img);
            post.appendChild(p);

            post.style.backgroundImage = `url('../Images/mulher${i}.jpg')`; // Define a imagem de fundo do post

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