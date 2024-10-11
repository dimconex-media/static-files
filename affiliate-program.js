window.addEventListener('load', function() {
    const url = window.location.href;
    if (url.includes('login') || url.includes('register') || url.includes('password/request')) {
        const appElement = document.querySelector('#app');
        
        if (appElement) {
            appElement.classList.add('auth-page');
            
            const newDiv = document.createElement('div');
            newDiv.id = 'topbar';
            
            newDiv.innerHTML = '<img src="https://dimconex-media.github.io/static-files/logo_affiliate_program.png"/><div style="display:flex; align-items:center; gap: 24px;"><a href="//cathopic.com/affiliate-program" target="_blank">Program benefits</a><a href="//cathopic.com" target="_blank">cathopic.com ↗</a></div>';
            
            appElement.appendChild(newDiv);
        } else {
            console.error('No se encontró el elemento con ID #app.');
        }
    }
});
