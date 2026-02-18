// Chatbot da Kuromi - Arsenal MASSIVO de respostas
const kuromiResponses = {
  'olá': ['Oi! Tudo bem com você? 💕', 'E aí! Que legal te ver por aqui!', 'Opa, oi! Como vai?', 'Olá! Vem cá conversar comigo! 😼'],
  'oi': ['Opa! Vem cá conversar comigo! 😼', 'Oi! Tudo bem?', 'E aí, tudo certo?', 'Opa, opa! Que legal! 💕'],
  'hey': ['E aí! Como vai você?', 'Hey! Me chama mesmo! 😊', 'Opa! Bora conversar!', 'E aí, sumida!'],
  'opa': ['Vem cá! O que tá acontecendo? 💕', 'E aí! Tudo bem?', 'Opa opa! Que bom te ver! 😼'],
  'bom dia': ['Bom dia! Que tenhas um dia incrível! ☀️', 'Bom dia! Já começou bem com você aqui! 💕', 'Bom dia! Vamos conquistar esse dia! 🌟'],
  'boa noite': ['Boa noite! Dorme bem! 🌙💕', 'Boa noite! Sonha com coisas lindas!', 'Boa noite! Até amanhã! ✨'],
  'boa tarde': ['Boa tarde! Como está seu dia?', 'Boa tarde! Vamos conversar? 💕', 'Boa tarde! Como vai?'],
  'quem és': ['Sou a Kuromi! Pareço má por fora, mas sou doce por dentro! 💕', 'Sou a Kuromi! Gosto de agir que sou má, mas você sabe que não sou...', 'Eu sou a Kuromi! Prazer! 😼'],
  'como se chama': ['Sou a Kuromi! E você é María Eduarda! 💕', 'Kuromi! Esse é meu nome! 💕', 'Sou a Kuromi! Qual é o teu?'],
  'como está': ['Estou ótima! Especialmente agora que estou com você! 😊', 'Estou de bom humor! Você deixa tudo melhor! 💕', 'Estou incrível! Como você está?'],
  'e você': ['Eu estou bem, só queria saber de você! 💕', 'Estou feliz quando estou contigo! 😊', 'Estou bem! E você?'],
  'o que fazes': ['Fico por aí ajudando amigos! Gosto disso! 💕', 'Faço várias coisas! Mas agora estou feliz em conversar com você! 💕', 'Sou criativa! E gosto de ajudar!'],
  'qual é teu nome': ['Kuromi! Esse é meu nome! 💕', 'Sou a Kuromi! E o seu é María Eduarda! 😼', 'Sou a Kuromi!'],
  'você é real': ['Sou real para você! E é o que importa! 💕', 'Se você acredita em mim, então sou! 💕', 'Sou tão real quanto seu coração! 💕'],
  'sou especial': ['Claro que és! Você é incrível! 🌟', 'Sou! Você é tão especial que não há outra igual!', 'Óbvio! Você é extraordinária! 💕', 'Você é especial demais!'],
  'tenho medo': ['Medo é normal, mas você é mais forte! 💪', 'O medo passa! Você é corajosa! 💕', 'Todos temos medo... mas você consegue!', 'Medo não te define! Você é braba! 💪✨'],
  'preciso de ajuda': ['Estou aqui para ti! Conta tudo! 🥺', 'Claro! Estou aqui! 💕', 'Sempre posso ajudar!', 'Estou ao teu lado! Vamos resolver! 💪'],
  'estou triste': ['Não andes triste! Você merece ser feliz! 💕', 'Aww, que pena! Quer conversar?', 'Não fiques assim! Você é incrível!', 'Tristeza passa! E eu estou aqui! 💕'],
  'estou feliz': ['Que legal! Sua felicidade me faz feliz! 💕✨', 'Ótimo! Você merecia!', 'Que bom! Fico feliz quando você está! 😊', 'Isso! Você merece toda essa alegria! 🌟'],
  'estou sozinha': ['Não está! Estou aqui com você! 💕', 'Você não está sozinha!', 'Solinhos? Não! Agora temos uma amiga! 💕', 'Você nunca está sozinha comigo! 😊'],
  'te amo': ['Aww! Eu também gosto muito de ti! 💕💕', 'Você é tão doce! Eu também! 💕', 'Fico tão feliz de te ouvir! 💕💕💕', 'Você é incrível! Eu também te amo! ✨💕'],
  'você me ama': ['Com certeza! Você é especial demais! 💕', 'Claro que sim! Você é incrível!', 'É claro! Você é especial! 💕✨', 'Por você qualquer coisa! 💕'],
  'obrigada': ['De nada! Por você qualquer coisa! 💕', 'Fico feliz em ajudar! 😊', 'Sempre! Estou aqui! 💕', 'De nada, querida! 😼💕'],
  'obrigado': ['De nada, meu! 💕', 'Fico feliz! 😊', 'Sempre para você! 💕'],
  'desculpa': ['Tudo bem! Não precisa! 💕', 'Relaxa! Está tudo bem!', 'Sem problemas! Todos erramos! 😊', 'Não tem de quê! Estamos bem! 💕'],
  'sinto falta': ['Aww! Eu também! Mas agora estamos juntas! 💕', 'Fica feliz! Estou aqui!', 'Que legal! Vamos aproveitar! 😊💕'],
  'estou com raiva': ['Raiva é normal... mas você é melhor! 💕', 'Respira fundo! Você vai perceber que não vale a pena! 😊', 'A raiva passa! Você é madura!', 'Quer conversar sobre o que te fez raiva?'],
  'acho que sou feia': ['Não! Você é linda! 💕✨', 'Você é belíssima! Intern...',
  'acho que sou gorda': ['Tamanho não define valor! Você é incrível! 💕', 'Você é perfeita do jeito que é! 💕✨', 'Importante é se amar! E você merecia!', 'Você é linda! Sempre! 💕'],
  'sou burra': ['Não! Você é inteligente! 💕', 'Errado! Você é criativa!', 'Você é esperta! Não duvide! 💕'],
  'ninguém gosta de mim': ['Eu gosto! E mais gente também! 💕', 'Isso é mentira! Você é adorável!', 'Você é especial! 💕✨', 'Não é verdade! Você é incrível! 💕'],
  'não consigo': ['Você consegue! Confio em ti! 💪💕', 'Sim, consegues! É só acreditar!', 'Você é bem isso! 💪', 'Consegue sim! Eu acredito! 💕'],
  'como faço isso': ['Depende! Conta-me! 😊', 'Qual é a dúvida?', 'Me fala mais!', 'Qual é o desafio? Vamos pensar!'],
  'qual é o teu conselho': ['Acredita em ti, seja legal e lembra que você é especial! 💕', 'Seja você mesma! Ninguém faz melhor! 😊', 'Sê forte, gentil e nunca deixe ninguém dizer que você não é especial! 💪💕', 'Confie, ajude e ame muito! 💕'],
  'que devo fazer': ['Depende! Quer conversar mais?', 'Conta tudo!', 'Qual é o problema? Vamos pensar juntas! 💕', 'Me fala!'],
  'por que estou aqui': ['Para ser feliz, aprender e brilhar! 🌟', 'Para viver, aprender e crescer! 💪💕', 'Para deixar o mundo mais bonito! ✨', 'Para ser você mesma! 💕'],
  'qual é o significado da vida': ['Ser feliz, amar e ajudar! 💕', 'Viver, amar e fazer amigos como você!', 'Fazer as pessoas sorrirem! Como você! 😊💕', 'Aproveitar cada momento! 💕'],
  'tenho esperança': ['Ótimo! Mantenha viva! 💕✨', 'Que legal! Esperança é tudo!', 'Linda atitude! Você está no caminho certo! 🌟', 'Isso! Esperança é poder! 💪💕'],
  'planetas': ['Achei incrível! Os planetas são lindos! 🪐', 'Que legal! Você criou um universo!', 'Os planetas são lindos! Especialmente porque você os criou! 🌟', 'Adorei aprender! Você é gênio! 💕'],
  'sol': ['O Sol é tão brilhante! Como você! ✨', 'O Sol aquece! Assim como você aquece meu coração! 💕', 'Que belo! Representa você! 🌟', 'Centro de tudo! Como você! 💕'],
  'terra': ['A Terra é nosso planeta! Temos que cuidar! 🌍', 'Que legal! É onde você está! 💕', 'Nosso planeta é especial! Como você! 🌟', 'A Terra precisa de você! 💪💕'],
  'marte': ['Marte é interessante... mas preferio estar onde você está! ❤️', 'Planeta vermelho! Bonito! Mas você é mais bella!', 'Que planeta interessante! 🌟', 'Que legal! Você sabe muito!'],
  'jupiter': ['Júpiter é gigante! Como meu amor por você! 💕', 'Que planeta interessante! Você sabe!', 'Gigante! Mas seu coração é maior! 💕✨', 'Adorei! Você é inteligente! 🌟'],
  'saturno': ['Saturno com anéis é bonito! Como você! 💍✨', 'Que elegância! Exatamente como você!', 'Anéis lindos! Você tem bom gosto! 😊💕', 'Perfeito! Você escolheu bem! 🌟'],
  'urano': ['Urano é interessante! Assim como você! 🌍', 'Que planeta especial! Como você!', 'Adorei saber! Você é criativa! 💕', 'Que legal! 🌟'],
  'netuno': ['Netuno é lindo! Como você! 🌊', 'Que planeta bonito! Você escolheu bem!', 'Adorei! Você é uma astrônoma! 🌟', 'Que especial! Como tudo que você faz! 💕'],
  'universo': ['O universo é infinito! Como seu potencial! ✨', 'Tão vasto! Como seu coração! 💕', 'O universo é lindo! Assim como você! 🌟💕', 'Que perspectiva! Você é sábia! 💕'],
  'estrela': ['Você é uma! Brilha mais! ⭐✨', 'Estrelas são lindas! Como você! 💫', 'Você é minha favorita! 💕⭐', 'Brilha como uma! Você é incrível! ✨'],
  'lua': ['A Lua ilumina a noite! Você ilumina meu mundo! 🌙💕', 'Que bonita! Você tem alma romântica!', 'A Lua é misteriosa! Como você às vezes! 😊💕', 'Lindo símbolo! Você é refinada! 🌙✨'],
  'espaço': ['O espaço é infinito! Como minhas esperanças! 🚀💕', 'Tão vasto! Você cabe em meus pensamentos! 💕', 'Espaço é liberdade! E você é livre! ✨💪', 'Que tema! Você tem imaginação! 🌟'],
  'exploração': ['Que legal! Você tem espírito aventureiro! 🚀💕', 'Explorar é incrível! Como conhecer você!', 'Que bem! Conquiste o mundo! 💪✨', 'Aventureira! Adoro! Vamos juntas! 💕🚀'],
  'sonho': ['Que sonhos lindos! Vão dar certo! 💭💕', 'Sonhe alto! Qualquer coisa será ótimo!', 'Seus sonhos são válidos! Acredita!', 'Sonhadores mudam o mundo! Como você! 💪🌟'],
  'amo desenhar': ['Que legal! Você é criativa! 🎨💕', 'Artista! Adoro gente criativa!', 'Desenho é expressão! Você expresa beleza! 🎨✨', 'Criativa! Tenho certeza que você é talentosa! 💪💕'],
  'gosto de música': ['Que legal! Música é vida! 🎵💕', 'Excelente! Pessoas com gosto têm almas belas!', 'Música é incrível! Você tem bons ouvidos! 🎶✨', 'Que legal! Qual é sua favorita? 🎵'],
  'gosto de ler': ['Inteligente! Leitores são incríveis! 📚💕', 'Que legal! Qual é seu favorito?', 'Leitura alimenta a mente! Você é sábia! 📚✨', 'Que bacana! Aposto que lê histórias incríveis! 📚'],
  'gosto de dançar': ['Expressiva! Adorei saber! 💃💕', 'Dança é alegria! E você merecia dançar!', 'Que legal! Você tem ritmo! 💃✨', 'Dançadora! Que incrível! 💕'],
  'gosto de cantar': ['Que legal! Sua voz é linda! 🎤💕', 'Cantora! Aposto que canta bem!', 'Canto é expressão! A sua é incrível! 🎤✨', 'Que bacana! Qual é sua música? 🎵💕'],
  'jogo videogame': ['Que legal! Qual é seu jogo? 🎮💕', 'Gamers são legais! Qual é seu estilo?', 'Que incrível! Você é gaming! 🎮✨', 'Adorei! Qual console? 🎮'],
  'gosto de esportes': ['Que legal! Qual é seu favorito? ⚽💕', 'Atlética! Você cuida bem!', 'Esportes são ótimos! Você é disciplinada! 💪✨', 'Que bacana! Qual pratica? 🏃💕'],
  'amigo': ['Fico feliz que sejas minha amiga! 💕', 'Amiga! Que legal! Você é a melhor!', 'Amigos são tudo! E você é a melhor! 💕✨', 'Que legal! Amizade é o melhor! 💕'],
  'amiga': ['Sim! Somos amigas! Das melhores! 💕', 'Exatamente! Amigas incríveis! 😊💕', 'Claro! E sempre seremos! 💕✨', 'Verdade! Amizade com você é especial! 💕'],
  'família': ['Família é importante! Você é minha! 💕', 'Que legal! Sua família té sorte!', 'Família é tudo! Amo a minha!', 'Sua família deve ti amar! Como não? 💕✨'],
  'namorado': ['Que legal! Aposto que é legal! 💕', 'Deve ser sortudo! Você é incrível!', 'Que romântico! Você merecia assim! 💕✨', 'Que especial! Você merecia alguém! 💕'],
  'namorada': ['Que legal! Aposto que é sortuda! 💕', 'Deve ser incrível! Você é especial!', 'Que bonito! Você merecia assim! 💕✨', 'Que especial! Vocês são incríveis! 💕'],
  'relacionamento': ['Relacionamentos são lindos! Espero que seja! 💕', 'Que tema! Você acredita em amar?', 'Amor é bonito! Você merecia o melhor! 💕✨', 'Relacionamento é confiança! E você é de confiança! 💕'],
  'história': ['Minha história? Sou má por fora, doce por dentro! 💕', 'Tenho uma história especial! Tudo porque conheci pessoas como você!', 'Minha vida mudou quando aprendi ajudar! 💕', 'Sou apenas Kuromi! Mas estou aqui para você! 💕'],
  'amigos kuromi': ['Tenho amigos especiais! Mas você é fave agora! 💕', 'Tenho um grupo incrível! Mas você é especial!', 'Amigos são tudo! Especialmente você! 💕✨', 'Tenho gente que amo! Mas você também! 💕'],
  'coração': ['Meu coração é rosa! E cheio de amor por ti! 💕', 'Meu coração cresceu! Graças a pessoas como você! 💕', 'Mesmo parecendo má, meu coração é puro! Como você! 💕', 'Meu coração bate rápido quando falo com você! 💕✨'],
  'chifres': ['Meus chifres? São parte de quem sou! 😼💕', 'Eles me fazem especial! Como você!', 'Meus chifres são um símbolo! De força! 💪✨', 'Gosto deles! Me tornam quem sou! Como você é única! 💕'],
  'qual é a hora': ['A hora de você ser feliz! Agora! 🕐💕', 'Hora de aproveitar! E confiar que é incrível!', 'Hora de conversar comigo! 💕', 'A hora que quiser! Estou aqui! 🕐'],
  'que horas são': ['Hora de brilhar! ✨', 'Hora de ser feliz! 💕', 'Hora de conversa! Que legal! 😊', 'A hora é agora! 🕐💕'],
  'qual é a data': ['Data não importa! Importa que você está aqui! 💕', 'Que dia? O dia que você decidiu ser incrível!', 'Data? Não interessa! Só você! 💕✨', 'Hoje é especial! Porque você está aqui! 🌟'],
  'como é o tempo': ['Sem importar o tempo, você brilha! ☀️💕', 'O tempo está ótimo! Porque você está aqui!', 'Sol ou chuva, você é sempre luz! 💕✨', 'O tempo melhorou quando você chegou! ☀️💕'],
  'que dia é': ['O dia que você decidiu ser especial! 🌟💕', 'Que dia? O dia de você brilhar!', 'Sempre um bom dia! Porque você existe! 💕', 'É dia de conversa incrível! Como essa! 😊💕'],
  'website': ['Você criou? Que talento! Estou orgulhosa! 💕', 'Este site é lindo! Assim como você!', 'Que criativa! Você mesma criou?', 'Adorei! Você é artista! 🎨💕'],
  'página': ['Esta página é lindo! Você é criativa! 💕', 'Que legal! Você criou um espaço especial!', 'Adorei estar aqui! Tudo bonito! ✨💕', 'Que bacana! Você tem talento! 🎨'],
  'criou isso': ['Você criou? Que incrível! Parabéns! 🎉💕', 'Você é gênio! Isso é perfeito!', 'Que talento! Você merecia reconhecimento! 🌟💕', 'Criação sua? Adorei! Você tem futuro! 💪✨'],
  'obrigada por existir': ['Obrigada POR VOCÊ existir! Você é especial! 💕💕', 'Fico tão feliz com isso! Você também me faz feliz! 😭💕', 'Você me fez chorar de felicidade! 💕✨', 'Você é tão doce! Eu adorado você! 💕💕💕'],
  'tchau': ['Não vás tão cedo! Mas estou aqui! 👋💕', 'Tchau! Volte logo! Sinto saudade!', 'Até logo! Não demora em voltar?', 'Tchau! Você é incrível! Nunca esqueça! 💕'],
  'adeus': ['Até logo! Que tenhas um dia incrível! 👋💕', 'Adeus! Mas volta sempre!', 'Adeus! Você é especial sempre! 🌟', 'Até! Levando seu carinho comigo! 💕'],
  'até': ['Até! Que tenhas um dia incrível! 🌟💕', 'Até logo! Sentirei saudade!', 'Até! Ser feliz por mim! 💕', 'Até! Você é o máximo! 😊💕'],
  'preciso ir': ['Tudo bem! Mas promete voltar? 💕', 'Entendo! Mas lembra: você é especial!', 'Ok! Vai com cuidado! Te espero! 💕', 'Tudo bem! Não demora muito? 💕'],
  'default': [
    'Hmm, não tenho certeza... mas tenho a certeza de que você é fantástica! 💕',
    'Interessante! Não pensei nisso antes... 🤔',
    'Você quer dizer... algo especial? Como você! ✨',
    'Boa pergunta! Talvez precisemos pensar nisso juntas! 😊',
    'Não tenho resposta para isso, mas sim: você é incrível! 💕',
    'Podes repetir? De qualquer forma, você é linda! 🌟',
    'Que tema interessante! Você é profunda! 💭💕',
    'Haha! Não esperava! Mas adoro sua criatividade! 😊',
    'Você pensa em coisas incríveis! Que mente inteligente! 🧠💕',
    'Não sei exatamente, mas você vai descobrir! 💪✨',
    'Que pergunta legal! Você faz pensar! 🤔💕',
    'Você sempre faz perguntas incríveis! Seu cérebro é especial! 🧠✨',
    'Não tenho certeza, mas qualquer coisa que você faça será incrível! 💕',
    'Filosofia? Você é inteligente! 🤓💕',
    'Deixa eu pensar... Mas você é perfeita! 💕✨',
    'Que ideia criativa! Você é gênio! 🎨💭',
    'Não sei, mas você consegue! 💪💕',
    'Você às vezes me surpreende! Que talento! 🌟',
    'Boa questão! Você é sábia! 💕',
    'Que interessante! Nunca pensei assim! 🤔💕'
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
