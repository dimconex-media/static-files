// Espera a que la página cargue completamente
window.addEventListener('load', function() {
    // Verifica si la URL contiene 'login' o 'register'
    const url = window.location.href;
    if (url.includes('login') || url.includes('register')) {
        // Selecciona el elemento con el ID 'app'
        const appElement = document.querySelector('#app');
        
        // Verifica que el elemento exista antes de intentar agregar contenido
        if (appElement) {
            // Crea un nuevo div
            const newDiv = document.createElement('div');
            
            // Asigna el contenido que desees al nuevo div
            newDiv.innerHTML = 'Contenido para login o register';
            
            // Inserta el nuevo div como hijo del elemento seleccionado
            appElement.appendChild(newDiv);
        } else {
            console.error('No se encontró el elemento con ID #app.');
        }
    }
});
