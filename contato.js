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
    
    // Simular envio (você pode integrar com um backend real)
    console.log('Formulário enviado:', {
        name,
        email,
        phone,
        subject,
        message,
        timestamp: new Date().toLocaleString('pt-BR')
    });
    
    // Mostrar mensagem de sucesso
    showSuccessMessage();
    
    // Limpar formulário
    contactForm.reset();
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Função para mostrar mensagem de sucesso
function showSuccessMessage() {
    const formSection = document.querySelector('.contact-form-section');
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.innerHTML = `
        <h3>✅ Mensagem Enviada com Sucesso!</h3>
        <p>Obrigada pelo contato! Maria Eduarda entrará em contato em breve.</p>
    `;
    
    formSection.insertBefore(successMsg, formSection.firstChild);
    
    // Remover mensagem após 5 segundos
    setTimeout(() => {
        successMsg.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => successMsg.remove(), 500);
    }, 5000);
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
console.log('✅ Página de contato carregada! Pronto para receber mensagens.');
