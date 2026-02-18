# 🌟 Sistema Solar - 

Um site completo e interativo com Sistema Solar, curiosidades de astronomia, chatbot inteligente e área de contato/tarot!

## ✨ Funcionalidades

- 🌌 **Sistema Solar Interativo**: 8 planetas animados com informações detalhadas
- 📚 **50+ Curiosidades de Astronomia**: Carrossel dinâmico deslizável
- 💬 **Chatbot Inteligente**: Kuromi com 160+ respostas contextualizadas
- 🔮 **Página de Contato/Fórum**: Envio automático para WhatsApp e Email
- 🎨 **Design Responsivo**: Funciona perfeitamente em mobile, tablet e desktop
- ⚡ **Animações Suaves**: Experiência visual moderna e envolvente

---

## 🔧 Como Personalizar para Outra Pessoa

### ⭐ MÉTODO FÁCIL - Use o arquivo `config.js`

O site foi **especialmente desenvolvido** para ser facilmente personalizável! Você **não precisa editar múltiplos arquivos**.

### Passos:

1. **Abra o arquivo `config.js`** na raiz da pasta
2. **Edite apenas os valores** que você quer mudar:

```javascript
const SITE_CONFIG = {
    nome: 'Maria',                    // ← Mude o nome
    nomeCompleto: 'Maria',
    imagemPerfil: 'https://...png',   // ← URL da imagem
    
    whatsapp: '19995701318',          // ← Número do WhatsApp
    whatsappFormatado: '(19) 99957-0138',
    email: 'ferrazcarlos676@gmail.com', // ← Email de contato
    
    horarioSegSex: '09h às 18h',      // ← Horários
    horarioSabado: '10h às 15h',
    
    descricaoWelcome: 'Te convida a explorar o Sistema Solar',
    descricaoTarot: 'Fale sobre Leituras de Tarot',
    
    metaTitle: 'Sistema Solar - Maria',
    metaDescription: 'Explore o universo...'
};
```

3. **Salve o arquivo**
4. **Recarregue a página** - Tudo está atualizado!

### Exemplo: Adaptar para "João"

```javascript
const SITE_CONFIG = {
    nome: 'João',
    nomeCompleto: 'João Silva',
    imagemPerfil: 'https://link-da-foto-de-joao.png',
    whatsapp: '11987654321',
    whatsappFormatado: '(11) 98765-4321',
    email: 'joao@email.com',
    horarioSegSex: '10h às 20h',
    horarioSabado: '14h às 18h',
    descricaoWelcome: 'Te convida a explorar o Universo',
    // ... e assim por diante
};
```

**Pronto!** Todo o site muda automaticamente:
- ✅ Welcome page
- ✅ Sistema Solar
- ✅ Página de Contato
- ✅ Links de WhatsApp/Email
- ✅ Título da página

---

## 🌐 URL Continua a Mesma

**A grande vantagem**: Você **não precisa mudar a URL** do site. O endereço permanece o mesmo porque a configuração é carregada **dinamicamente**.

Se o site estiver em: `https://seu-dominio.com`
Ele continuará em: `https://seu-dominio.com` (mesmo depois de personalizar!)

---

## 📁 Estrutura de Arquivos

```
PROJETO/
├── config.js                 # ⭐ ARQUIVO DE CONFIGURAÇÃO (edite aqui!)
├── welcome.html              # Página inicial
├── index.html               # Sistema Solar
├── contato.html             # Fórum de Contato
├── carousel.js              # Carrossel de Curiosidades
├── solar.js                 # Lógica do Sistema Solar
├── kuromi-chat.js           # Chatbot Inteligente
├── contato.js               # Lógica de Contato
├── welcome.css
├── solar.css
├── contato.css
└── README.md
```

---

## 🚀 Como Usar

### Local
1. Clone ou baixe o repositório
2. Abra em um servidor local (Live Server, Python http.server, etc.)
3. Para personalizar: **Edite apenas `config.js`**

### Online
Publicado via **Netlify** (sem necessidade de deploy):
- Drag & drop a pasta no Netlify
- Site fica online em minutos
- Mudanças em `config.js` são refletidas ao recarregar

---

## 💡 O Que Pode ser Personalizado?

| Elemento | Variável em config.js |
|----------|----------------------|
| Nome que aparece em todo site | `nome` |
| Imagem de perfil | `imagemPerfil` |
| Número de WhatsApp | `whatsapp` |
| Email de contato | `email` |
| Horário de atendimento | `horarioSegSex`, `horarioSabado` |
| Descrições/textos | `descricaoWelcome`, `descricaoTarot` |
| Título da aba do navegador | `metaTitle` |
| Descrição para SEO | `metaDescription` |

---

## 🎯 Casos de Uso

Este template é perfeito para:
- 🔮 Leitoras de tarot e astrologia
- ✨ Instrutoras de desenvolvimento pessoal
- 💫 Consultoras de bem-estar
- 🌙 Qualquer profissional que queira um site personalizado
- 👥 Múltiplas pessoas usando o mesmo template!

---

## 📞 Contato Setup

Quando alguém preenche o formulário de contato, a mensagem é enviada automaticamente para:
- **WhatsApp**: Abre o chat automaticamente
- **Email**: Abre o cliente de email com a mensagem pré-formatada
- **Backup Local**: Salva também no navegador (localStorage)

---

## 🛠️ Tecnologias

- HTML5 / CSS3 / JavaScript Vanilla
- Sem dependências externas
- Responsivo com media queries
- Animações CSS puras

---

## 📝 Licença

Livre para uso educativo, comercial e experimentação. Aproveite e customize como quiser!

---

**Criado com ❤️ para facilitar a vida de quem precisa de um site personalizado rápido e fácil!**
