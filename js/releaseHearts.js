async function releaseHeart() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = "💖";
        document.body.appendChild(heart);

        const size = Math.random() * 20 + 20;
        heart.style.fontSize =  size + 'px';

        const x = Math.random() *window.innerWidth;
        const y = window.innerHeight - 100;
        heart.style.left = x + 'px';
        heart.style.top =  y + 'px';

        const rotate = Math.random() * 360;
        heart.style.transform =  `rotate(${rotate}deg)`;

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}