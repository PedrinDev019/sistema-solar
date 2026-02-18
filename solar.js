const planets = document.querySelectorAll('.planet');
const label = document.getElementById('planet-label');
const modal = document.getElementById('planet-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

// Informacoes dos planetas
const planetInfo = {
  'Mercúrio': 'O planeta mais próximo do Sol. Tem uma superfície rochosa e é conhecido por suas temperaturas extremas. Sua temperatura pode variar de -173°C a 427°C dependendo do lado exposto ao Sol.',
  'Vênus': 'O planeta mais quente do Sistema Solar com uma atmosfera extremamente densa. Um dia em Vênus dura mais que um ano! É o planeta mais brilhante visível no céu noturno.',
  'Terra': 'Nosso planeta! O único conhecido que abriga vida com água e oxigênio. Possui uma lua e é o terceiro planeta mais próximo do Sol.',
  'Marte': 'O Planeta Vermelho devido ao óxido de ferro. Tem a maior montanha do Sistema Solar (Olympus Mons) e foi explorado por vários rovers.',
  'Júpiter': 'O maior planeta do Sistema Solar, um gigante gasoso. Tem a Grande Mancha Vermelha (uma tempestade que dura séculos) e pelo menos 79 luas.',
  'Saturno': 'Famoso por seus anéis espetaculares feitos de gelo e rocha. É um gigante gasoso com mais de 80 luas e poderia flutuar na água!',
  'Urano': 'Um gigante de gelo que gira de lado, provavelmente devido a uma colisão antiga. Tem uma cor azul-esverdeada e emite mais calor que recebe do Sol.',
  'Netuno': 'O planeta mais distante do Sol. É um gigante de gelo com os ventos mais rápidos do Sistema Solar (2.100 km/h!). Tem uma cor azul profunda.'
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
  const info = planetInfo[name] || 'Informações indisponíveis para este planeta.';
  modalBody.innerHTML = '<p>' + info + '</p>';
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
