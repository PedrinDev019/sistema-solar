// ============================================
// CONFIGURAÇÃO DO SITE - EDITE AQUI!
// ============================================
// Altere os valores abaixo para personalizar o site para outra pessoa

const SITE_CONFIG = {
    // Informações Pessoais
    nome: 'Maria',
    nomeCompleto: 'Maria', // Usado em títulos e metadados
    
    // Imagem de Perfil (URL)
    imagemPerfil: 'https://s3.amazonaws.com/blog.dentrodahistoria.com.br/wp-content/uploads/2025/08/18180656/Kuromi.png',
    
    // Contato
    whatsapp: '19995701318',
    whatsappFormatado: '(19) 99957-0138', // Exibição no site
    email: 'ferrazcarlos676@gmail.com',
    
    // Horário de Atendimento
    horarioSegSex: '09h às 18h',
    horarioSabado: '10h às 15h',
    
    // Descrições (Textos do Site)
    descricaoWelcome: 'Te convida a explorar o Sistema Solar',
    descricaoTarot: 'Fale sobre Leituras de Tarot',
    
    // Mensagens
    mensagemTarot: 'Entre em Contato<br>com Maria',
    
    // Meta Tags (SEO)
    metaTitle: 'Sistema Solar - Maria',
    metaDescription: 'Explore o universo, curiosidades de astronomia e área de tarot com Maria'
};

// ============================================
// FUNÇÃO PARA PREENCHER O SITE
// ============================================
// Esta função é chamada automaticamente ao carregar a página

function aplicarConfiguracao() {
    // Preencher título da página
    document.title = SITE_CONFIG.metaTitle;
    
    // Atualizar nome em welcome.html
    const nomeElement = document.querySelector('.name');
    if (nomeElement) {
        nomeElement.textContent = SITE_CONFIG.nome;
    }
    
    // Atualizar subtitle em welcome.html
    const subtitleElement = document.querySelector('.subtitle');
    if (subtitleElement) {
        subtitleElement.textContent = SITE_CONFIG.descricaoWelcome;
    }
    
    // Atualizar tarot section title
    const tarotTitle = document.querySelector('.tarot-content h2');
    if (tarotTitle) {
        tarotTitle.innerHTML = SITE_CONFIG.mensagemTarot;
    }
    
    // Atualizar tarot subtitle
    const tarotSubtitle = document.querySelector('.tarot-subtitle');
    if (tarotSubtitle) {
        tarotSubtitle.textContent = SITE_CONFIG.descricaoTarot;
    }
    
    // Atualizar header em contato.html
    const contactHeader = document.querySelector('.contact-header h1');
    if (contactHeader) {
        contactHeader.textContent = `🔮 Fórum de Contato - ${SITE_CONFIG.nome}`;
    }
    
    // Atualizar footer em contato.html
    const contactFooter = document.querySelector('.contact-footer p:first-child');
    if (contactFooter) {
        const ano = new Date().getFullYear();
        contactFooter.textContent = `© ${ano} ${SITE_CONFIG.nomeCompleto} - Leituras de Tarot | Todos os direitos reservados`;
    }
    
    // Atualizar seção de motivação no index.html
    const motivationSecTitle = document.querySelector('.motivation-section h2');
    if (motivationSecTitle) {
        motivationSecTitle.textContent = `Para você, ${SITE_CONFIG.nome} ✨`;
    }
    
    // Atualizar email
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.href = `mailto:${SITE_CONFIG.email}`;
        link.textContent = 'Enviar Email';
    });
    
    // Atualizar email address
    const emailElements = document.querySelectorAll('[class*="email"]');
    emailElements.forEach(el => {
        if (el.classList.contains('contact-detail')) {
            el.textContent = SITE_CONFIG.email;
        }
    });
    
    // Atualizar WhatsApp
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me"]');
    whatsappLinks.forEach(link => {
        link.href = `https://wa.me/55${SITE_CONFIG.whatsapp}`;
        link.textContent = 'Chamar no WhatsApp';
    });
    
    // Atualizar número de WhatsApp exibido
    const whatsappDisplays = document.querySelectorAll('.contact-detail');
    whatsappDisplays.forEach(el => {
        if (el.textContent.includes('19')) { // Se contém número de telefone
            el.textContent = SITE_CONFIG.whatsappFormatado;
        }
    });
    
    // Atualizar horários
    const horarioElements = document.querySelectorAll('.contact-detail');
    horarioElements.forEach(el => {
        if (el.textContent.includes('Seg-Sex')) {
            el.innerHTML = `${SITE_CONFIG.horarioSegSex}<br>${SITE_CONFIG.horarioSabado}`;
        }
    });
    
    console.log('✅ Configuração aplicada para:', SITE_CONFIG.nome);
}

// Aplicar configuração quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', aplicarConfiguracao);
} else {
    aplicarConfiguracao();
}

// Exportar para uso em outros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}
