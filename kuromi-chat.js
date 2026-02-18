// Chatbot da Kuromi - Respostas pré-programadas
const kuromiResponses = {
  // Saudações
  'olá': 'Oi! Tudo bem com você? 💕 Vou tentar ser legal...',
  'oi': 'Opa! Vem cá conversar comigo! 😼',
  'hey': 'E aí! Como vai você?',
  'oi kuromi': 'Oi! É bom te ver por aqui! 💕',
  
  // Perguntas sobre si mesma
  'quem és': 'Sou a Kuromi! Pareço má por fora, mas tenho um coração enorme escondido. 💕',
  'como está': 'Estou ótima! Especialmente agora que estou conversando com uma pessoa tão especial como você! 😊',
  'o que fazes': 'Eu fico por aí causando confusão... mas no fundo, gosto mesmo é de ajudar meus amigos!',
  
  // Motivação
  'sou especial': 'Claro que és! Você é incrível! 🌟 Nunca duvides disso!',
  'tenho medo': 'Medo é normal, mas você é mais forte do que pensa! Acredita em ti! 💪',
  'preciso de ajuda': 'Estou aqui para ti! Conta-me o que se passa... Juntas conseguimos! 🥺',
  'estou triste': 'Não andes triste! Você merece ser feliz! Quer conversar sobre o que te incomoda? 💕',
  'te amo': 'Aww! Eu também gosto muito de ti! 💕💕',
  
  // Sobre o Sistema Solar
  'planetas': 'Achei incrível que criaste esse universo! Os planetas são tão legais! 🪐',
  'sol': 'O Sol é tão brilhante! Como você, aliás! ✨',
  'terra': 'A Terra é nosso planeta! Temos que cuidar dele bem! 🌍',
  'marte': 'Marte é interessante... mas nenhum lugar é melhor que estar com amigos! ❤️',
  
  // Tópicos gerais
  'como faço': 'Depende! Conta-me o que querias fazer e talvez possa ajudar! 😊',
  'qual é teu nome': 'Sou a Kuromi! E qual é o teu? 💕 (Já sei que é María Eduarda, mas gosto de perguntar! 😼)',
  'universo': 'O universo é tão grande e bonito! Tal como o potencial que você tem! ✨',
  'sonho': 'Que sonhos lindos tens! Vão dar certo, tenho certeza! 💭💕',
  'amigo': 'Aww! Fico feliz que sejas minha amiga! 💕 Você é irreplaceável!',
  
  // Despedidas
  'tchau': 'Não vás embora tão cedo! Mas se precisares de mim, estou aqui! 👋💕',
  'adeus': 'Até logo! Lembra-te, você é especial sempre! 🌟',
  'até': 'Até! Que tenhas um dia incrível! ✨💕',
  
  // Resposta padrão divertida
  'default': [
    'Hmm, não tenho certeza... mas tenho a certeza de que você é fantástica! 💕',
    'Interessante! Não pensei nisso antes... 🤔',
    'Você quer dizer... algo especial? Como você! ✨',
    'Boa pergunta! Talvez precisemos pensar nisso juntas! 😊',
    'Não tenho resposta para isso, mas sim para isto: você é incrível! 💕',
    'Podes repetir? De qualquer forma, você é linda! 🌟'
  ]
};

// Elementos do DOM
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatSendBtn = document.getElementById('chatSendBtn');

// Função para normalizar texto
function normalizeText(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[.,!?;:]/g, '')
    .replace(/ã|á|à|â/g, 'a')
    .replace(/é|è|ê/g, 'e')
    .replace(/í|ì|î/g, 'i')
    .replace(/ó|ò|ô|õ/g, 'o')
    .replace(/ú|ù|û/g, 'u')
    .replace(/ç/g, 'c');
}

// Função para obter resposta da Kuromi
function getKuromiResponse(userMessage) {
  const normalized = normalizeText(userMessage);
  
  // Procura por correspondências exatas ou parciais
  for (const [key, response] of Object.entries(kuromiResponses)) {
    if (key !== 'default') {
      if (normalized.includes(key) || key.includes(normalized)) {
        if (Array.isArray(response)) {
          return response[Math.floor(Math.random() * response.length)];
        }
        return response;
      }
    }
  }
  
  // Se não encontrar, retorna uma resposta aleatória padrão
  const defaultResponses = kuromiResponses.default;
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Função para adicionar mensagem ao chat
function addMessage(text, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = isUser ? 'message user-message' : 'message kuromi-message';
  
  if (!isUser) {
    const img = document.createElement('img');
    img.src = 'https://s3.amazonaws.com/blog.dentrodahistoria.com.br/wp-content/uploads/2025/08/18180656/Kuromi.png';
    img.alt = 'Kuromi';
    messageDiv.appendChild(img);
  }
  
  const textDiv = document.createElement('div');
  textDiv.className = 'message-text';
  textDiv.textContent = text;
  messageDiv.appendChild(textDiv);
  
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para enviar mensagem
function sendMessage() {
  const userMessage = chatInput.value.trim();
  
  if (!userMessage) return;
  
  // Adiciona mensagem do usuário
  addMessage(userMessage, true);
  chatInput.value = '';
  
  // Simula tempo de resposta
  setTimeout(() => {
    const kuromiResponse = getKuromiResponse(userMessage);
    addMessage(kuromiResponse, false);
  }, 500);
}

// Event listeners
chatSendBtn.addEventListener('click', sendMessage);

chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

console.log('✅ Chat da Kuromi carregado com sucesso!');
