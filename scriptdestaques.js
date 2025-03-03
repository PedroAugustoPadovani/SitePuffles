//         const imagesFolder = 'imagens/'; // Caminho da pasta onde estão as imagens
//         const images = [
//             imagesFolder + 'PuffleVerde.webp', imagesFolder + 'PuffleRoxo.webp', imagesFolder + 'PuffleRosa.webp', imagesFolder + 'PufflePreto.webp',
//             imagesFolder + 'PuffleAzul.webp', imagesFolder + 'Puffle_vermelho.webp', imagesFolder + 'Puffle_laranja.webp', imagesFolder + 'Puffle_colorido.webp'
//         ];
        
// let currentIndex = 0;
// const imagesPerPage = 4;

// function showImages() {
//     const container = document.getElementById('imageContainer');
//     container.innerHTML = '';
//     for (let i = currentIndex; i < currentIndex + imagesPerPage; i++) {
//         if (images[i]) {
//             const img = document.createElement('img');
//             img.src = images[i];
//             container.appendChild(img);
//         }
//     }
// }

// function prevSlide() {
//     if (currentIndex > 0) {
//         currentIndex -= imagesPerPage;
//         showImages();
//     }
// }

// function nextSlide() {
//     if (currentIndex + imagesPerPage < images.length) {
//         currentIndex += imagesPerPage;
//         showImages();
//     }
// }

// showImages();