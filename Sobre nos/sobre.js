function Menu(id) {
    switch (id) {
        case "logo":
            window.location.href = "/index.html";
            break;
        case "prod":
            window.location.href = "/Produtos/prod.html";
            break;
        case "seg":
            window.location.href = "/Seguranca/seg.html";
            break;
        case "about":
            window.location.href = "/Sobre nos/sobre.html";
            break;
        case "en":
            window.location.href = "/English/english.html";
            break;
        case "login_bttn":
            window.location.href = "Entrar/entrar.html";
            break;
        default:
            alert("Opção desconhecida");
    }
}