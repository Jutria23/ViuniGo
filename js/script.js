
// Scroll Infinito

let page = 1; // Número de página inicial
const perPage = 2; // Número de imágenes por página

// Función para cargar imágenes desde el archivo JSON local
function loadImages( ) {
    $.ajax({
        url: '/js/imagenes.json',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            const startIndex = (page - 1) * perPage;
            const endIndex = startIndex + perPage;
            const images = data.slice(startIndex, endIndex);
            displayImages(images); // Función para mostrar imágenes en la página
            page++; // Incrementa el número de página para la próxima carga
        },
        error: function (error) {
            console.error('Error al cargar imágenes:', error);
        }
    });
}

// Función para mostrar imágenes en la página
function displayImages(images) {
    const galeria = $('#galeria');
    
    images.forEach(image => {
        const imgElement = `<img src="${image.url}" alt="${image.alt}">`;
        galeria.append(imgElement);
    });
}

// Función para verificar si el usuario ha llegado al final de la página
$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
        loadImages(); // Carga más imágenes cuando el usuario llega al final
    }
});

// Carga las primeras imágenes al cargar la página
loadImages();
