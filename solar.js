// script para mostrar nome de planeta em rótulo flutuante
const planets = document.querySelectorAll('.planet');
const label = document.getElementById('planet-label');

planets.forEach(p => {
  const name = p.dataset.name || p.classList[1];
  p.addEventListener('mouseover', () => {
    label.textContent = name;
  });
  p.addEventListener('mouseout', () => {
    label.textContent = '';
  });
  p.addEventListener('click', () => {
    alert('Você clicou em ' + name);
  });
});

