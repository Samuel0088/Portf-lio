document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animated");  

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.style.animationDelay = `${index * 1}s`;  
          observer.unobserve(entry.target); 
        }
      });
    },
    { threshold: 1} 
  );

  animatedElements.forEach((element) => observer.observe(element)); 
});



const linguagens = document.querySelectorAll('.linguagem');
const tooltip = document.getElementById('tooltip-container');
const tooltipText = document.getElementById('tooltip-text');

// Adiciona o evento de hover para cada imagem
linguagens.forEach(l => {
    l.addEventListener('mouseenter', () => {
        const texto = l.getAttribute('data-text');
        tooltipText.textContent = texto; // Altera o conteúdo do tooltip
        tooltip.style.visibility = 'visible'; // Torna o tooltip visível
        tooltip.style.opacity = '1'; // Torna o tooltip visível
    });

    l.addEventListener('mouseleave', () => {
        tooltip.style.visibility = 'hidden'; // Esconde o tooltip quando o mouse sai
        tooltip.style.opacity = '0'; // Torna o tooltip invisível
    });
});

