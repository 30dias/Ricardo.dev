const words = ["Developer", "Analyst", "Designer", "Data Engineer", "Web Scraper"];
const colors = ["#90D482", "#7AC6C2", "#D38812", "#AE8AE7", "#E4465F"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100; // Velocidade da digitação
const delayBetweenWords = 1500; // Tempo antes de apagar
const textElement = document.getElementById("text");

function typeEffect() {
    const currentWord = words[wordIndex];
    const currentColor = colors[wordIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    textElement.textContent = currentWord.substring(0, charIndex);
    textElement.style.color = currentColor;

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();