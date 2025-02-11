const floatingBlock = document.getElementById("floatingBlock");

// Definindo posição do bloco atrás de outros elementos
floatingBlock.style.position = "absolute";
floatingBlock.style.zIndex = "-1"; // 🔥 Garante que fique atrás de outros elementos

function animateBlock() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  function getRandomPosition() {
    return {
      left: Math.random() * (vw - 100) + "px",
      top: Math.random() * (vh - 100) + "px"
    };
  }

  function getRandomSize() {
    const size = Math.random() * (10 - 3) + 3; // Tamanho entre 3vw e 10vw
    return { width: `${size}vw`, height: `${size}vh` };
  }

  function runAnimation() {
    const startPos = getRandomPosition();
    const endPos = getRandomPosition();
    const size = getRandomSize();

    // Animação
    const keyframes = [
      { ...size, opacity: 0, backgroundColor: '#CBC530', left: startPos.left, top: startPos.top },
      { opacity: 1, backgroundColor: '#E02B0B' }, 
      { opacity: 0.5, backgroundColor: '#B7ECE7' },
      { opacity: 1, backgroundColor: '#4CDA80', left: endPos.left, top: endPos.top },
      { opacity: 0, backgroundColor: '#E4465F', left: endPos.left, top: endPos.top } 
    ];

    const animation = floatingBlock.animate(keyframes, {
      duration: 4000,
      iterations: 1,
      easing: "ease-in-out",
      fill: "forwards"
    });

    animation.onfinish = () => {
      setTimeout(() => {
        runAnimation(); // Reinicia a animação após sumir
      }, 500); // Pequena pausa antes do próximo ciclo
    };
  }

  runAnimation();
}

// Inicia a animação
animateBlock();

// Redimensiona a animação ao mudar o tamanho da tela
window.addEventListener('resize', () => {
  floatingBlock.getAnimations().forEach(animation => animation.cancel());
  animateBlock();
});
