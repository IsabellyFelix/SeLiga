// Função para rolar suavemente até a seção
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Função para mostrar e ocultar mais informações
function toggleContent(section) {
    const content = document.getElementById(section);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

// Exibe um alerta de boas-vindas ao usuário ao carregar a página
window.onload = function() {
    alert("Bem-vindo ao site sobre o uso da tecnologia na educação! Explore os benefícios e desafios!");
}
