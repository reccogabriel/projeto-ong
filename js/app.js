/* ============================================
   APP.JS - APLICAÇÃO PRINCIPAL
   Exercício Prático III - Interatividade e Funcionalidades
   ONG Esperança Solidária
   ============================================ */

// ============================================
// CONSTANTES E CONFIGURAÇÕES
// ============================================

const CONFIG = {
  AUTO_SAVE_INTERVAL: 3000, // 3 segundos
  TOAST_DURATION: 5000, // 5 segundos
  MIN_AGE: 14,
  MAX_AGE: 100
};

// ============================================
// SISTEMA DE TOASTS (NOTIFICAÇÕES)
// ============================================

class ToastManager {
  constructor() {
    this.container = this.createContainer();
  }

  createContainer() {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    return container;
  }

  show(type, title, message, duration = CONFIG.TOAST_DURATION) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ'
    };

    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || 'ℹ'}</span>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close" aria-label="Fechar">×</button>
    `;

    this.container.appendChild(toast);

    // Animar entrada
    setTimeout(() => toast.classList.add('active'), 10);

    // Botão de fechar
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => this.remove(toast));

    // Auto-remover
    if (duration > 0) {
      setTimeout(() => this.remove(toast), duration);
    }

    return toast;
  }

  remove(toast) {
    toast.classList.remove('active');
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }

  success(title, message) {
    return this.show('success', title, message);
  }

  error(title, message) {
    return this.show('error', title, message);
  }

  warning(title, message) {
    return this.show('warning', title, message);
  }

  info(title, message) {
    return this.show('info', title, message);
  }
}

// Instância global do Toast
const toast = new ToastManager();

// ============================================
// SISTEMA DE MODAIS
// ============================================

class ModalManager {
  show(title, content, buttons = []) {
    return new Promise((resolve) => {
      // Criar overlay
      const overlay = document.createElement('div');
      overlay.className = 'modal-overlay active';

      // Criar modal
      const modal = document.createElement('div');
      modal.className = 'modal';

      // Header
      const header = document.createElement('div');
      header.className = 'modal-header';
      header.innerHTML = `
        <h3>${title}</h3>
        <button class="modal-close" aria-label="Fechar">×</button>
      `;

      // Body
      const body = document.createElement('div');
      body.className = 'modal-body';
      body.innerHTML = typeof content === 'string' ? `<p>${content}</p>` : content;

      // Footer
      const footer = document.createElement('div');
      footer.className = 'modal-footer';

      // Criar botões
      if (buttons.length === 0) {
        buttons = [
          { text: 'Fechar', class: 'btn-secondary', value: false }
        ];
      }

      buttons.forEach(btn => {
        const button = document.createElement('button');
        button.className = `btn ${btn.class || 'btn-secondary'}`;
        button.textContent = btn.text;
        button.addEventListener('click', () => {
          const value = btn.value !== undefined ? btn.value : btn.text;
          this.close(overlay);
          // Resolver a Promise após iniciar o fechamento
          setTimeout(() => resolve(value), 0);
        });
        footer.appendChild(button);
      });

      // Montar modal
      modal.appendChild(header);
      modal.appendChild(body);
      modal.appendChild(footer);
      overlay.appendChild(modal);
      document.body.appendChild(overlay);

      // Botão X de fechar
      header.querySelector('.modal-close').addEventListener('click', () => {
        this.close(overlay);
        setTimeout(() => resolve(false), 0);
      });

      // Fechar ao clicar fora
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          this.close(overlay);
          setTimeout(() => resolve(false), 0);
        }
      });
    });
  }

  close(overlay) {
    overlay.classList.remove('active');
    setTimeout(() => {
      if (overlay && overlay.parentNode) {
        overlay.remove();
      }
    }, 300);
  }

  confirm(title, message) {
    return this.show(title, message, [
      { text: 'Cancelar', class: 'btn-secondary', value: false },
      { text: 'Confirmar', class: 'btn-primary', value: true }
    ]);
  }

  alert(title, message) {
    return this.show(title, message, [
      { text: 'OK', class: 'btn-primary', value: true }
    ]);
  }
}

// Instância global do Modal
const modal = new ModalManager();

// ============================================
// VALIDAÇÃO DE CPF
// ============================================

function validarCPF(cpf) {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/[^\d]/g, '');

  // Verifica se tem 11 dígitos
  if (cpf.length !== 11) return false;

  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  // Valida primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  // Valida segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) return false;

  return true;
}

// ============================================
// BUSCA DE CEP (VIACEP API)
// ============================================

async function buscarCEP(cep) {
  // Remove caracteres não numéricos
  cep = cep.replace(/\D/g, '');

  // Valida formato do CEP
  if (cep.length !== 8) {
    return { erro: true, mensagem: 'CEP deve ter 8 dígitos' };
  }

  try {
    toast.info('Buscando...', 'Procurando endereço do CEP...');
    
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await response.json();

    if (dados.erro) {
      toast.error('CEP não encontrado', 'Verifique se o CEP está correto');
      return { erro: true, mensagem: 'CEP não encontrado' };
    }

    toast.success('CEP encontrado!', 'Endereço preenchido automaticamente');
    return { erro: false, dados };

  } catch (error) {
    console.error('Erro ao buscar CEP:', error);
    toast.error('Erro', 'Não foi possível buscar o CEP. Verifique sua conexão.');
    return { erro: true, mensagem: 'Erro na busca' };
  }
}

// ============================================
// MÁSCARAS DE INPUT
// ============================================

function aplicarMascaraCPF(input) {
  input.addEventListener('input', (e) => {
    let valor = e.target.value.replace(/\D/g, '');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = valor;
  });
}

function aplicarMascaraCEP(input) {
  input.addEventListener('input', (e) => {
    let valor = e.target.value.replace(/\D/g, '');
    valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
    e.target.value = valor;
  });
}

function aplicarMascaraTelefone(input) {
  input.addEventListener('input', (e) => {
    let valor = e.target.value.replace(/\D/g, '');
    if (valor.length <= 10) {
      // Telefone fixo: (00) 0000-0000
      valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
      valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
    } else {
      // Celular: (00) 00000-0000
      valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
      valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
    }
    e.target.value = valor;
  });
}

// ============================================
// VALIDAÇÃO DE FORMULÁRIO EM TEMPO REAL
// ============================================

class FormValidator {
  constructor(formId) {
    this.form = document.getElementById(formId);
    if (!this.form) {
      console.warn(`Formulário #${formId} não encontrado`);
      return;
    }

    this.inicializar();
  }

  inicializar() {
    console.log('FormValidator inicializado');

    // Aplicar máscaras
    const cpfInput = this.form.querySelector('#cpf');
    const telefoneInput = this.form.querySelector('#telefone');
    const cepInput = this.form.querySelector('#cep');

    if (cpfInput) aplicarMascaraCPF(cpfInput);
    if (telefoneInput) aplicarMascaraTelefone(telefoneInput);
    if (cepInput) {
      aplicarMascaraCEP(cepInput);
      
      // Buscar CEP ao sair do campo
      cepInput.addEventListener('blur', async () => {
        const cep = cepInput.value.replace(/\D/g, '');
        if (cep.length === 8) {
          const resultado = await buscarCEP(cep);
          if (!resultado.erro) {
            this.preencherEndereco(resultado.dados);
          }
        }
      });
    }

    // Validação em tempo real
    const inputs = this.form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      // Validar ao sair do campo
      input.addEventListener('blur', () => this.validarCampo(input));

      // Validar enquanto digita (apenas para alguns campos)
      if (input.type !== 'checkbox' && input.type !== 'radio') {
        input.addEventListener('input', () => {
          if (input.value.length > 0) {
            this.validarCampo(input);
          }
        });
      }
    });

    // Interceptar submit
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));

    // Botão limpar
    const btnReset = this.form.querySelector('button[type="reset"]');
    if (btnReset) {
      btnReset.addEventListener('click', (e) => this.handleReset(e));
    }
  }

  preencherEndereco(dados) {
    // Preencher campos com os dados do CEP
    const mapeamento = {
      'logradouro': 'endereco',
      'bairro': 'bairro',
      'localidade': 'cidade',
      'uf': 'estado'
    };

    Object.keys(mapeamento).forEach(campo => {
      const inputId = mapeamento[campo];
      const input = this.form.querySelector(`#${inputId}`);
      if (input && dados[campo]) {
        input.value = dados[campo];
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
    });

    // Focar no campo número
    const numeroInput = this.form.querySelector('#numero');
    if (numeroInput) {
      numeroInput.focus();
    }
  }

  validarCampo(input) {
    const valor = input.value.trim();
    let valido = true;
    let mensagem = '';

    // Verificar se é obrigatório
    if (input.hasAttribute('required') && !valor) {
      valido = false;
      mensagem = 'Este campo é obrigatório';
    }

    // Validações específicas
    if (valido && valor) {
      switch (input.id) {
        case 'cpf':
          valido = validarCPF(valor);
          mensagem = valido ? '' : 'CPF inválido';
          break;

        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          valido = emailRegex.test(valor);
          mensagem = valido ? '' : 'E-mail inválido';
          break;

        case 'telefone':
          const apenasNumeros = valor.replace(/\D/g, '');
          valido = apenasNumeros.length >= 10;
          mensagem = valido ? '' : 'Telefone inválido';
          break;

        case 'cep':
          const cepNumeros = valor.replace(/\D/g, '');
          valido = cepNumeros.length === 8;
          mensagem = valido ? '' : 'CEP deve ter 8 dígitos';
          break;

        case 'data-nascimento':
          const resultado = this.validarIdade(valor);
          valido = resultado.valido;
          mensagem = resultado.mensagem;
          break;

        case 'nome-completo':
          const palavras = valor.split(' ').filter(p => p.length > 0);
          valido = palavras.length >= 2;
          mensagem = valido ? '' : 'Digite seu nome completo';
          break;
      }

      // Validação de minlength
      if (input.hasAttribute('minlength')) {
        const min = parseInt(input.getAttribute('minlength'));
        if (valor.length < min) {
          valido = false;
          mensagem = `Mínimo de ${min} caracteres`;
        }
      }
    }

    // Atualizar visual
    this.atualizarVisualCampo(input, valido, mensagem);

    return valido;
  }

  validarIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    if (idade < CONFIG.MIN_AGE) {
      return {
        valido: false,
        mensagem: `Você deve ter pelo menos ${CONFIG.MIN_AGE} anos`
      };
    }

    if (idade > CONFIG.MAX_AGE) {
      return {
        valido: false,
        mensagem: `Idade máxima: ${CONFIG.MAX_AGE} anos`
      };
    }

    return { valido: true, mensagem: '' };
  }

  atualizarVisualCampo(input, valido, mensagem) {
    const wrapper = input.closest('div');
    
    // Remover mensagens antigas
    const msgAntiga = wrapper.querySelector('.error-message, .success-message');
    if (msgAntiga) msgAntiga.remove();

    if (input.value.trim() === '') {
      // Campo vazio - remover classes
      input.classList.remove('is-valid', 'is-invalid');
      return;
    }

    if (valido) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
    } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');

      // Adicionar mensagem de erro
      if (mensagem) {
        const msgElement = document.createElement('small');
        msgElement.className = 'error-message';
        msgElement.style.display = 'block';
        msgElement.style.color = 'var(--error-color)';
        msgElement.textContent = mensagem;
        wrapper.appendChild(msgElement);
      }
    }
  }

  validarFormulario() {
    let valido = true;
    const inputs = this.form.querySelectorAll('input, select, textarea');
    const erros = [];

    inputs.forEach(input => {
      // Ignorar campos não obrigatórios vazios
      if (!input.hasAttribute('required') && input.value.trim() === '') {
        return;
      }

      if (!this.validarCampo(input)) {
        valido = false;
        const label = this.form.querySelector(`label[for="${input.id}"]`);
        const nomeCampo = label ? label.textContent.replace('*', '').trim() : input.name;
        erros.push(nomeCampo);
      }
    });

    // Validar checkbox de termos
    const termos = this.form.querySelector('#termos');
    if (termos && !termos.checked) {
      valido = false;
      erros.push('Termos e Condições');
      toast.error('Atenção', 'Você deve aceitar os termos e condições');
    }

    return { valido, erros };
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { valido, erros } = this.validarFormulario();

    if (!valido) {
      toast.error(
        'Formulário Inválido',
        `Por favor, corrija os seguintes campos: ${erros.join(', ')}`
      );

      // Scroll para o primeiro erro
      const primeiroErro = this.form.querySelector('.is-invalid, #termos');
      if (primeiroErro) {
        primeiroErro.scrollIntoView({ behavior: 'smooth', block: 'center' });
        primeiroErro.focus();
      }

      return;
    }

    // Confirmar envio
    const confirmar = await modal.confirm(
      'Confirmar Cadastro',
      'Tem certeza que deseja enviar seu cadastro? Verifique se todos os dados estão corretos.'
    );

    if (!confirmar) {
      toast.info('Cancelado', 'Cadastro não enviado. Revise seus dados.');
      return;
    }

    // Simular envio (em produção, seria um POST real)
    toast.info('Enviando...', 'Aguarde enquanto processamos seu cadastro.');

    // Salvar no localStorage como "cadastro enviado"
    const formData = this.getFormData();
    localStorage.setItem('cadastroEnviado', JSON.stringify({
      data: new Date().toISOString(),
      dados: formData
    }));

    // Simular delay de envio
    setTimeout(() => {
      // Limpar auto-save
      localStorage.removeItem('formAutoSave');

      toast.success(
        'Cadastro Enviado!',
        'Recebemos seu cadastro com sucesso. Em breve entraremos em contato!'
      );

      // Limpar formulário após 2 segundos
      setTimeout(() => {
        this.form.reset();
        this.limparValidacoes();
      }, 2000);
    }, 1500);
  }

  async handleReset(e) {
    e.preventDefault();

    try {
      const confirmar = await modal.confirm(
        'Limpar Formulário',
        'Tem certeza que deseja limpar todos os campos? Esta ação não pode ser desfeita.'
      );

      if (confirmar) {
        // Limpar formulário
        this.form.reset();
        
        // Limpar validações visuais
        this.limparValidacoes();
        
        // Remover dados do localStorage
        localStorage.removeItem('formAutoSave');
        
        // Mostrar toast de sucesso
        toast.success('Formulário Limpo', 'Todos os campos foram limpos com sucesso.');
      } else {
        // Usuário cancelou
        toast.info('Cancelado', 'O formulário não foi alterado.');
      }
    } catch (error) {
      console.error('Erro ao limpar formulário:', error);
      toast.error('Erro', 'Ocorreu um erro ao limpar o formulário.');
    }
  }

  limparValidacoes() {
    const inputs = this.form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.classList.remove('is-valid', 'is-invalid');
      const wrapper = input.closest('div');
      const msg = wrapper.querySelector('.error-message, .success-message');
      if (msg) msg.remove();
    });
  }

  getFormData() {
    const data = {};
    const inputs = this.form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
      if (input.type === 'checkbox') {
        data[input.name] = input.checked;
      } else if (input.type === 'radio') {
        if (input.checked) {
          data[input.name] = input.value;
        }
      } else {
        data[input.name] = input.value;
      }
    });

    return data;
  }

  setFormData(data) {
    Object.keys(data).forEach(name => {
      const input = this.form.querySelector(`[name="${name}"]`);
      if (!input) return;

      if (input.type === 'checkbox') {
        input.checked = data[name];
      } else if (input.type === 'radio') {
        const radio = this.form.querySelector(`[name="${name}"][value="${data[name]}"]`);
        if (radio) radio.checked = true;
      } else {
        input.value = data[name];
      }
    });
  }
}

// ============================================
// AUTO-SAVE NO LOCALSTORAGE
// ============================================

class AutoSave {
  constructor(formId, interval = CONFIG.AUTO_SAVE_INTERVAL) {
    this.form = document.getElementById(formId);
    if (!this.form) {
      console.warn(`Formulário #${formId} não encontrado para AutoSave`);
      return;
    }

    this.interval = interval;
    this.storageKey = 'formAutoSave';
    this.inicializar();
  }

  inicializar() {
    console.log('AutoSave inicializado');
    
    // Carregar dados salvos
    this.carregar();

    // Auto-save ao digitar
    let timeoutId;
    this.form.addEventListener('input', () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => this.salvar(), 1000);
    });

    // Salvar a cada intervalo
    setInterval(() => this.salvar(), this.interval);
  }

  salvar() {
    const data = {};
    const inputs = this.form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
      // Não salvar senha ou dados sensíveis
      if (input.type === 'password') return;

      if (input.type === 'checkbox') {
        data[input.name] = input.checked;
      } else if (input.type === 'radio') {
        if (input.checked) {
          data[input.name] = input.value;
        }
      } else {
        data[input.name] = input.value;
      }
    });

    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  carregar() {
    const saved = localStorage.getItem(this.storageKey);
    if (!saved) return;

    try {
      const data = JSON.parse(saved);
      let camposPreenchidos = 0;

      Object.keys(data).forEach(name => {
        const input = this.form.querySelector(`[name="${name}"]`);
        if (!input) return;

        if (data[name] && data[name] !== '') {
          camposPreenchidos++;

          if (input.type === 'checkbox') {
            input.checked = data[name];
          } else if (input.type === 'radio') {
            const radio = this.form.querySelector(`[name="${name}"][value="${data[name]}"]`);
            if (radio) radio.checked = true;
          } else {
            input.value = data[name];
          }
        }
      });

      if (camposPreenchidos > 0) {
        toast.info(
          'Dados Recuperados',
          `Encontramos ${camposPreenchidos} campos salvos anteriormente.`
        );
      }
    } catch (e) {
      console.error('Erro ao carregar auto-save:', e);
    }
  }
}

// ============================================
// MENU MOBILE
// ============================================

function inicializarMenuMobile() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('header nav > ul');
  const menuOverlay = document.querySelector('.menu-overlay');

  if (!menuToggle || !menu || !menuOverlay) return;

  // Abrir/fechar menu
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
  });

  // Fechar ao clicar no overlay
  menuOverlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    menu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Fechar ao clicar em um link
  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      menu.classList.remove('active');
      menuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Fechar ao pressionar ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      menuToggle.classList.remove('active');
      menu.classList.remove('active');
      menuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ============================================
// FUNÇÃO PARA INICIALIZAR PÁGINA DE CADASTRO
// ============================================

function inicializarPaginaCadastro() {
  console.log('Inicializando página de cadastro...');
  
  const form = document.getElementById('formulario-cadastro');
  if (!form) {
    console.warn('Formulário de cadastro não encontrado');
    return;
  }

  // Criar instâncias do validator e autosave
  window.currentFormValidator = new FormValidator('formulario-cadastro');
  window.currentAutoSave = new AutoSave('formulario-cadastro');

  // Toast de boas-vindas
  setTimeout(() => {
    toast.info(
      'Bem-vindo!',
      'Preencha o formulário. Seus dados serão salvos automaticamente.'
    );
  }, 500);
}

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM carregado - Inicializando app.js');
  
  // Inicializar menu mobile
  inicializarMenuMobile();

  // Se estiver na página de cadastro (não-SPA)
  if (document.getElementById('formulario-cadastro')) {
    inicializarPaginaCadastro();
  }
});

// ============================================
// EXPORTAR PARA USO GLOBAL
// ============================================

window.toast = toast;
window.modal = modal;
window.validarCPF = validarCPF;
window.buscarCEP = buscarCEP;
window.FormValidator = FormValidator;
window.AutoSave = AutoSave;
window.inicializarPaginaCadastro = inicializarPaginaCadastro;
window.inicializarMenuMobile = inicializarMenuMobile;
