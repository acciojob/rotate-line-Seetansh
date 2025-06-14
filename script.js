document.addEventListener('DOMContentLoaded', () => {
    const line = document.getElementById('line');
    let angle = 0;
    
    line.style.transform = 'translate(-50%, -50%) rotate(0deg)';
    
    const rotationInterval = setInterval(() => {
        angle += 2;
        line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        
        if (angle >= 360) {
            angle = 0;
        }
    }, 20);
    
    window.addEventListener('beforeunload', () => {
        clearInterval(rotationInterval);
    });
});
