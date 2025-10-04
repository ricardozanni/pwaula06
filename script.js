function toggleSenha(idCampo) {
    const campo = document.getElementById(idCampo);
    campo.type = campo.type === "password" ? "text" : "password";
}

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
    
    let erroNome = document.getElementById("erroNome");
    let erroEmail = document.getElementById("erroEmail");
    let erroSenha = document.getElementById("erroSenha");
    let mensagemSucesso = document.getElementById("mensagemSucesso");

    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroSenha.textContent = "";
    mensagemSucesso.textContent = "";

    let valido = true;

    if (nome === "") {
        erroNome.textContent = "Nome é obrigatório!";
        valido = false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        erroEmail.textContent = "E-mail inválido!";
        valido = false;
    }

    if (senha.length < 6) {
        erroSenha.textContent = "A senha deve ter no mínimo 6 caracteres!";
        valido = false;
    }

    if (valido) {
        let usuario = { nome, email, senha };
        localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario));

        mensagemSucesso.textContent = "Cadastro realizado com sucesso!";
        this.reset();
        setTimeout(() => {
        window.location.href = "login.html"; // Redirecionamento fictício
    }, 2000);
    }

});
