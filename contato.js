// Configurações de contato
const WHATSAPP_NUMBER = '19995701318';
const CONTACT_EMAIL = 'ferrazcarlos676@gmail.com';

// Formulário de Contato
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Pegar valores do formulário
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    
    // Validações básicas
    if (!name || !email || !subject || !message) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido!');
        return;
    }
    
    // Preparar dados
    const contactData = {
        name,
        email,
        phone,
        subject,
        message,
        timestamp: new Date().toLocaleString('pt-BR')
    };
    
    // Salvar no histórico local
    saveContactToLocalStorage(contactData);
    
    // Enviar via WhatsApp
    sendViaWhatsApp(contactData);
    
    // Preparar e sugerir envio via email
    sendViaEmail(contactData);
    
    // Mostrar mensagem de sucesso
    showSuccessMessage();
    
    // Limpar formulário
    contactForm.reset();
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Função para salvar no localStorage
function saveContactToLocalStorage(data) {
    let contacts = JSON.parse(localStorage.getItem('mariaTarotContacts')) || [];
    contacts.push(data);
    localStorage.setItem('mariaTarotContacts', JSON.stringify(contacts));
    console.log('✅ Contato salvo no histórico local');
}

// Função para enviar via WhatsApp
function sendViaWhatsApp(data) {
    const message = `
*Nova Solicitação de Contato* 🔮

👤 Nome: ${data.name}
📧 Email: ${data.email}
${data.phone ? '📱 Telefone: ' + data.phone : ''}
📌 Assunto: ${data.subject}
📝 Mensagem:
${data.message}

⏰ Data/Hora: ${data.timestamp}
    `.trim();
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/55${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Abrir WhatsApp em nova aba
    window.open(whatsappUrl, '_blank');
    
    console.log('✅ Mensagem enviada para WhatsApp');
}

// Função para enviar via Email
function sendViaEmail(data) {
    const emailBody = `
 Nova Solicitação de Contato

Nome: ${data.name}
Email: ${data.email}
Telefone: ${data.phone || 'Não informado'}
Assunto: ${data.subject}

Mensagem:
${data.message}

Data/Hora: ${data.timestamp}

---
Este é um contato automático do formulário de contato de Maria Eduarda Augusto.
    `.trim();
    
    const encodedBody = encodeURIComponent(emailBody);
    const emailSubject = encodeURIComponent(`Nova Solicitação: ${data.subject} - ${data.name}`);
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${emailSubject}&body=${encodedBody}`;
    
    // Abrir cliente de email padrão
    window.location.href = mailtoLink;
    
    console.log('✅ Email preparado para envio');
}

// Função para mostrar mensagem de sucesso
function showSuccessMessage() {
    const formSection = document.querySelector('.contact-form-section');
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.innerHTML = `
        <h3>✅ Mensagem Enviada com Sucesso!</h3>
        <p>Sua mensagem foi enviada para WhatsApp e está sendo preparada para email.</p>
        <p style="font-size: 13px; opacity: 0.9;">Maria Eduarda entrará em contato em breve!</p>
    `;
    
    formSection.insertBefore(successMsg, formSection.firstChild);
    
    // Remover mensagem após 6 segundos
    setTimeout(() => {
        successMsg.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => successMsg.remove(), 500);
    }, 6000);
}

// Adicionar fade out animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Log de carregamento
console.log('✅ Página de contato carregada!');
console.log('📱 WhatsApp: ' + WHATSAPP_NUMBER);
console.log('📧 Email: ' + CONTACT_EMAIL);
