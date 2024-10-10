// Espera a que la página cargue completamente
window.addEventListener('load', function() {
    // Selecciona el elemento con el ID y las clases especificadas
    const targetElement = document.querySelector('#app.bg-custom-bg.flex.bg-cover.bg-center');
    
    // Verifica que el elemento exista antes de intentar agregar contenido
    if (targetElement) {
        // Crea un nuevo div
        const newDiv = document.createElement('div');
        
        // Asigna el contenido que desees al nuevo div
        newDiv.innerHTML = 'logo';
        
        // Inserta el nuevo div como hijo del elemento seleccionado
        targetElement.appendChild(newDiv);
    } else {
        console.error('No se encontró el elemento especificado.');
    }
});
