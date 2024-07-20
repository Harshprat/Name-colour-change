function changeColor() {
    const letter = document.getElementById('letter');
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    letter.style.color = randomColor;
}


