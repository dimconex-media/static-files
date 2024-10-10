window.addEventListener('load', function() {
    const url = window.location.href;
    if (url.includes('login') || url.includes('register')) {
        const appElement = document.querySelector('#app');
        
        if (appElement) {
            const newDiv = document.createElement('div');
            newDiv.id = 'topbar';
            
            newDiv.innerHTML = '<img src="https://dimconex-media.github.io/static-files/logo_affiliate_program.png"/><a href="//cathopic.com" target="_blank">cathopic.com ↗</a>';
            
            appElement.appendChild(newDiv);
        } else {
            console.error('No se encontró el elemento con ID #app.');
        }
    }
});
