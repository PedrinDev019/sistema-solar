const planets = document.querySelectorAll('.planet');
const label = document.getElementById('planet-label');
const modal = document.getElementById('planet-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

// Informacoes dos planetas
const planetInfo = {
  'Mercurio': 'O planeta mais proximo do Sol. Tem uma superficie rochosa e eh conhecido por suas temperaturas extremas.',
  'Venus': 'O planeta mais quente do Sistema Solar com uma atmosfera extremamente densa.',
  'Terra': 'Nosso planeta! O unico conhecido que abriga vida com agua e oxigenio.',
  'Marte': 'O Planeta Vermelho. Tem a maior montanha do Sistema Solar (Olympus Mons).',
  'Jupiter': 'O maior planeta do Sistema Solar. Tem a Grande Mancha Vermelha e pelo menos 79 luas.',
  'Saturno': 'Famoso por seus aneis espetaculares feitos de gelo e rocha.',
  'Urano': 'Um gigante de gelo que gira de lado, com uma cor azul-esverdeada.',
  'Netuno': 'O planeta mais distante do Sol com uma cor azul profunda.'
};

planets.forEach(p => {
  const name = p.dataset.name || p.classList[1];
  
  p.addEventListener('mouseover', () => {
    label.textContent = name;
  });
  
  p.addEventListener('mouseout', () => {
    label.textContent = '';
  });
  
  p.addEventListener('click', () => {
    showPlanetInfo(name);
  });
});

function showPlanetInfo(name) {
  modalTitle.textContent = name;
  modalBody.innerHTML = '<p>' + (planetInfo[name] || 'Informacoes indisponiveis.') + '</p>';
  modal.classList.add('active');
}

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
