function Menu(id) {
    switch (id) {
        case "logo":
            alert("Clicou no logo");
            break;
        case "prod":
            alert("Clicou em Produtos");
            break;
        case "seg":
            alert("Clicou em Segurança");
            break;
        case "about":
            alert("Clicou em Sobre nós");
            break;
        case "en":
            alert("Clicou em English");
            break;
        case "login":
            alert("Clicou em Entrar");
            break;
        default:
            alert("Opção desconhecida");
    }
}