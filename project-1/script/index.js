document.getElementById('loginForm').onsubmit = function(e) {
    const input = document.getElementById('name-input');
    if (input.value.trim() === '') {
        e.preventDefault();
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 300);
    }
};

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = ['💖', '💝', '💕', '💗', '💓'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.innerHTML = '🎈';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 8000);
}

setInterval(createHeart, 300);
setInterval(createBalloon, 2000);

const button = document.getElementById('submit-btn');
const input = document.getElementById('name-input');

function showMessage(text) {
    const message = document.createElement('div');
    message.className = 'message-bubble';
    message.textContent = text;
    document.querySelector('.container').appendChild(message);
    
    setTimeout(() => {
        message.style.opacity = '1';
        message.style.transform = 'translateY(0)';
    }, 100);

    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => message.remove(), 300);
    }, 2000);
}

button.addEventListener('click', () => {
    if (input.value.trim() === '') {
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 300);
        showMessage('Please enter your name, sweetheart ❤️');
    } else {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => button.style.transform = 'scale(1)', 100);
        
        for(let i = 0; i < 30; i++) {
            setTimeout(createHeart, i * 100);
        }
    }
});

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        button.click();
    }
});

input.addEventListener('focus', () => {
    showMessage('Type your name with love ❤️');
});