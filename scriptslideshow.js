document.addEventListener("DOMContentLoaded", function (event) {
    var slides = document.getElementsByClassName("slide"); // Seleciona todos os elementos com a classe "slide" e os armazena em uma variável

    var currentSlide = 0; // Variável que armazena o índice do slide atual

    function showSlide() {
        // Esconde todos os slides
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active"); // Remove a classe "active" de todos os slides
        }

        // Exibe o slide atual
        slides[currentSlide].classList.add("active"); // Adiciona a classe "active" ao slide atual

        // Atualiza o índice do slide atual
        currentSlide++; // Incrementa o índice do slide atual
        if (currentSlide >= slides.length) {
            currentSlide = 0; // Volta ao primeiro slide se atingir o limite
        }

        // Chama a função showSlide() novamente após 3 segundos
        setTimeout(showSlide, 3000); // Define um intervalo de 3 segundos para a próxima chamada da função
    }

    // Inicia o slideshow
    showSlide();
});
