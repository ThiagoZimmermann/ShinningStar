function Menu(id) {
    switch (id) {
        case "logo":
            alert("Clicou no logo");
            window.location.href = "index.html";
            break;
        case "prod":
            alert("Clicou em Produtos");
            window.location.href = "Produtos/prod.html";
            break;
        case "seg":
            alert("Clicou em Segurança");
            window.location.href = "Seguranca/seg.html";
            break;
        case "about":
            alert("Clicou em Sobre nós");
            window.location.href = "Sobre nos/sobre.html";
            break;
        case "en":
            alert("Clicou em English");
            window.location.href = "English/english.html";
            break;
        case "login_bttn":
            alert("Clicou em Entrar");
            break;
        default:
            alert("Opção desconhecida");
    }
}