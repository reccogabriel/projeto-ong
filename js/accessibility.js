/* ============================================
   ACCESSIBILITY.JS - Controles de Acessibilidade
   WCAG 2.1 Nível AA
   ============================================ */

class AccessibilityManager {
  constructor() {
    this.initToolbar();
    this.initKeyboardNavigation();
    this.initARIA();
    this.loadPreferences();
    this.initFocusManagement();
    
    console.log('✅ AccessibilityManager inicializado');
  }

  // ==========================================
  // TOOLBAR DE ACESSIBILIDADE
  // ==========================================
  
  initToolbar() {
    const toolbar = document.createElement('div');
    toolbar.className = 'accessibility-toolbar';
    toolbar.setAttribute('role', 'toolbar');
    toolbar.setAttribute('aria-label', 'Controles de acessibilidade');
    
    toolbar.innerHTML = `
      <button 
        id="toggle-dark-mode" 
        aria-label="Alternar modo escuro"
        aria-pressed="false"
        data-tooltip="Modo Escuro"
        title="Modo Escuro (Alt+D)">
        🌙
      </button>
      
      <button 
        id="toggle-high-contrast" 
        aria-label="Alternar alto contraste"
        aria-pressed="false"
        data-tooltip="Alto Contraste"
        title="Alto Contraste (Alt+C)">
        ◐
      </button>
      
      <button 
        id="increase-font" 
        aria-label="Aumentar tamanho da fonte"
        data-tooltip="Aumentar Fonte"
        title="Aumentar Fonte (Alt++)">
        A+
      </button>
      
      <button 
        id="decrease-font" 
        aria-label="Diminuir tamanho da fonte"
        data-tooltip="Diminuir Fonte"
        title="Diminuir Fonte (Alt+-)">
        A-
      </button>
      
      <button 
        id="reset-font" 
        aria-label="Resetar tamanho da fonte"
        data-tooltip="Fonte Padrão"
        title="Fonte Padrão (Alt+0)">
        A
      </button>
      
      <button 
        id="toggle-links-underline" 
        aria-label="Sublinhar todos os links"
        aria-pressed="false"
        data-tooltip="Sublinhar Links"
        title="Sublinhar Links (Alt+U)">
        🔗
      </button>
      
      <button 
        id="focus-first-heading" 
        aria-label="Ir para o conteúdo principal"
        data-tooltip="Ir para Conteúdo"
        title="Ir para Conteúdo (Alt+1)">
        ⬇
      </button>
    `;
    
    document.body.appendChild(toolbar);
    this.bindToolbarEvents();
  }

  bindToolbarEvents() {
    // Modo Escuro
    document.getElementById('toggle-dark-mode').addEventListener('click', () => {
      this.toggleDarkMode();
    });

    // Alto Contraste
    document.getElementById('toggle-high-contrast').addEventListener('click', () => {
      this.toggleHighContrast();
    });

    // Aumentar Fonte
    document.getElementById('increase-font').addEventListener('click', () => {
      this.changeFontSize('increase');
    });

    // Diminuir Fonte
    document.getElementById('decrease-font').addEventListener('click', () => {
      this.changeFontSize('decrease');
    });

    // Resetar Fonte
    document.getElementById('reset-font').addEventListener('click', () => {
      this.changeFontSize('reset');
    });

    // Sublinhar Links
    document.getElementById('toggle-links-underline').addEventListener('click', () => {
      this.toggleLinksUnderline();
    });

    // Ir para conteúdo
    document.getElementById('focus-first-heading').addEventListener('click', () => {
      this.focusMainContent();
    });
  }

  // ==========================================
  // MODO ESCURO
  // ==========================================
  
  toggleDarkMode() {
    const body = document.body;
    const button = document.getElementById('toggle-dark-mode');
    const isActive = body.classList.toggle('dark-mode');
    
    button.setAttribute('aria-pressed', isActive);
    button.classList.toggle('active', isActive);
    
    // Remover alto contraste se ativo
    if (isActive && body.classList.contains('high-contrast')) {
      this.toggleHighContrast();
    }
    
    localStorage.setItem('darkMode', isActive);
    this.announceToScreenReader(isActive ? 'Modo escuro ativado' : 'Modo claro ativado');
  }

  // ==========================================
  // ALTO CONTRASTE
  // ==========================================
  
  toggleHighContrast() {
    const body = document.body;
    const button = document.getElementById('toggle-high-contrast');
    const isActive = body.classList.toggle('high-contrast');
    
    button.setAttribute('aria-pressed', isActive);
    button.classList.toggle('active', isActive);
    
    // Remover modo escuro se ativo
    if (isActive && body.classList.contains('dark-mode')) {
      this.toggleDarkMode();
    }
    
    localStorage.setItem('highContrast', isActive);
    this.announceToScreenReader(isActive ? 'Alto contraste ativado' : 'Alto contraste desativado');
  }

  // ==========================================
  // TAMANHO DA FONTE
  // ==========================================
  
  changeFontSize(action) {
    const body = document.body;
    const sizes = ['small', 'normal', 'large', 'xlarge'];
    let currentSize = 'normal';
    
    // Detectar tamanho atual
    sizes.forEach(size => {
      if (body.classList.contains(`font-size-${size}`)) {
        currentSize = size;
      }
    });
    
    let newIndex = sizes.indexOf(currentSize);
    
    if (action === 'increase' && newIndex < sizes.length - 1) {
      newIndex++;
    } else if (action === 'decrease' && newIndex > 0) {
      newIndex--;
    } else if (action === 'reset') {
      newIndex = 1; // normal
    }
    
    // Remover todas as classes de tamanho
    sizes.forEach(size => body.classList.remove(`font-size-${size}`));
    
    // Adicionar nova classe
    body.classList.add(`font-size-${sizes[newIndex]}`);
    
    localStorage.setItem('fontSize', sizes[newIndex]);
    this.announceToScreenReader(`Tamanho da fonte: ${sizes[newIndex]}`);
  }

  // ==========================================
  // SUBLINHAR LINKS
  // ==========================================
  
  toggleLinksUnderline() {
    const body = document.body;
    const button = document.getElementById('toggle-links-underline');
    const isActive = body.classList.toggle('underline-links');
    
    button.setAttribute('aria-pressed', isActive);
    button.classList.toggle('active', isActive);
    
    if (isActive) {
      const style = document.createElement('style');
      style.id = 'underline-links-style';
      style.textContent = 'a { text-decoration: underline !important; }';
      document.head.appendChild(style);
    } else {
      const style = document.getElementById('underline-links-style');
      if (style) style.remove();
    }
    
    localStorage.setItem('underlineLinks', isActive);
    this.announceToScreenReader(isActive ? 'Links sublinhados' : 'Links sem sublinhado');
  }

  // ==========================================
  // FOCO NO CONTEÚDO PRINCIPAL
  // ==========================================
  
  focusMainContent() {
    const main = document.getElementById('main-content') || document.querySelector('main');
    if (main) {
      main.setAttribute('tabindex', '-1');
      main.focus();
      this.announceToScreenReader('Navegado para o conteúdo principal');
    }
  }

  // ==========================================
  // NAVEGAÇÃO POR TECLADO
  // ==========================================
  
  initKeyboardNavigation() {
    // Atalhos de teclado
    document.addEventListener('keydown', (e) => {
      // Alt + D = Dark Mode
      if (e.altKey && e.key === 'd') {
        e.preventDefault();
        this.toggleDarkMode();
      }
      
      // Alt + C = High Contrast
      if (e.altKey && e.key === 'c') {
        e.preventDefault();
        this.toggleHighContrast();
      }
      
      // Alt + + = Increase Font
      if (e.altKey && e.key === '+') {
        e.preventDefault();
        this.changeFontSize('increase');
      }
      
      // Alt + - = Decrease Font
      if (e.altKey && e.key === '-') {
        e.preventDefault();
        this.changeFontSize('decrease');
      }
      
      // Alt + 0 = Reset Font
      if (e.altKey && e.key === '0') {
        e.preventDefault();
        this.changeFontSize('reset');
      }
      
      // Alt + U = Underline Links
      if (e.altKey && e.key === 'u') {
        e.preventDefault();
        this.toggleLinksUnderline();
      }
      
      // Alt + 1 = Focus Main Content
      if (e.altKey && e.key === '1') {
        e.preventDefault();
        this.focusMainContent();
      }
      
      // Escape = Fechar modais/menus
      if (e.key === 'Escape') {
        this.closeAllModals();
        this.closeMenu();
      }
    });

    // Navegação por Tab - destacar elementos
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    // Remover destaque ao usar mouse
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  // ==========================================
  // ARIA E LEITORES DE TELA
  // ==========================================
  
  initARIA() {
    // Adicionar roles faltantes
    this.addMissingRoles();
    
    // Adicionar labels faltantes
    this.addMissingLabels();
    
    // Configurar live regions
    this.setupLiveRegions();
    
    // Melhorar navegação
    this.improveNavigation();
  }

  addMissingRoles() {
    // Adicionar role="navigation" em navs sem role
    document.querySelectorAll('nav:not([role])').forEach(nav => {
      nav.setAttribute('role', 'navigation');
    });

    // Adicionar role="main" no main se não tiver
    const main = document.querySelector('main:not([role])');
    if (main) {
      main.setAttribute('role', 'main');
    }

    // Adicionar role="contentinfo" no footer
    const footer = document.querySelector('footer:not([role])');
    if (footer) {
      footer.setAttribute('role', 'contentinfo');
    }

    // Adicionar role="banner" no header
    const header = document.querySelector('header:not([role])');
    if (header) {
      header.setAttribute('role', 'banner');
    }
  }

  addMissingLabels() {
    // Adicionar aria-label em campos sem label visível
    document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])').forEach(input => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (!label && input.placeholder) {
        input.setAttribute('aria-label', input.placeholder);
      }
    });

    // Adicionar aria-label em botões com apenas ícones
    document.querySelectorAll('button:not([aria-label])').forEach(button => {
      if (button.textContent.trim().length === 0 || /^[^\w\s]$/.test(button.textContent.trim())) {
        const title = button.getAttribute('title');
        if (title) {
          button.setAttribute('aria-label', title);
        }
      }
    });
  }

  setupLiveRegions() {
    // Criar região de anúncios para leitores de tela
    const announcer = document.createElement('div');
    announcer.id = 'a11y-announcer';
    announcer.className = 'sr-only';
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    document.body.appendChild(announcer);

    // Configurar toasts como live regions
    const observeToasts = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.classList && node.classList.contains('toast')) {
            node.setAttribute('role', 'alert');
            node.setAttribute('aria-live', 'assertive');
          }
        });
      });
    });

    observeToasts.observe(document.body, { childList: true });
  }

  improveNavigation() {
    // Adicionar skip links se não existirem
    if (!document.querySelector('.skip-links')) {
      const skipLinks = document.createElement('div');
      skipLinks.className = 'skip-links';
      skipLinks.innerHTML = `
        <a href="#main-content">Pular para o conteúdo principal</a>
        <a href="#navigation">Pular para a navegação</a>
        <a href="#footer">Pular para o rodapé</a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
    }

    // Adicionar IDs se não existirem
    const main = document.querySelector('main');
    if (main && !main.id) main.id = 'main-content';

    const nav = document.querySelector('nav');
    if (nav && !nav.id) nav.id = 'navigation';

    const footer = document.querySelector('footer');
    if (footer && !footer.id) footer.id = 'footer';
  }

  // ==========================================
  // GERENCIAMENTO DE FOCO
  // ==========================================
  
  initFocusManagement() {
    // Trap focus em modais
    document.addEventListener('keydown', (e) => {
      const modal = document.querySelector('.modal-overlay.active');
      if (modal && e.key === 'Tab') {
        this.trapFocus(e, modal);
      }
    });

    // Restaurar foco ao fechar modal
    this.setupModalFocusManagement();
  }

  trapFocus(event, container) {
    const focusableElements = container.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  setupModalFocusManagement() {
    let lastFocusedElement = null;

    // Salvar último elemento focado antes de abrir modal
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-modal-trigger]')) {
        lastFocusedElement = e.target;
      }
    });

    // Restaurar foco ao fechar modal
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.removedNodes.forEach((node) => {
          if (node.classList && node.classList.contains('modal-overlay')) {
            if (lastFocusedElement) {
              lastFocusedElement.focus();
              lastFocusedElement = null;
            }
          }
        });
      });
    });

    observer.observe(document.body, { childList: true });
  }

  // ==========================================
  // ANÚNCIOS PARA LEITORES DE TELA
  // ==========================================
  
  announceToScreenReader(message, priority = 'polite') {
    const announcer = document.getElementById('a11y-announcer');
    if (announcer) {
      announcer.setAttribute('aria-live', priority);
      announcer.textContent = message;
      
      // Limpar após 5 segundos
      setTimeout(() => {
        announcer.textContent = '';
      }, 5000);
    }
  }

  // ==========================================
  // CARREGAR PREFERÊNCIAS
  // ==========================================
  
  loadPreferences() {
    // Modo escuro
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      const button = document.getElementById('toggle-dark-mode');
      if (button) {
        button.setAttribute('aria-pressed', 'true');
        button.classList.add('active');
      }
    }

    // Alto contraste
    if (localStorage.getItem('highContrast') === 'true') {
      document.body.classList.add('high-contrast');
      const button = document.getElementById('toggle-high-contrast');
      if (button) {
        button.setAttribute('aria-pressed', 'true');
        button.classList.add('active');
      }
    }

    // Tamanho da fonte
    const fontSize = localStorage.getItem('fontSize');
    if (fontSize && fontSize !== 'normal') {
      document.body.classList.add(`font-size-${fontSize}`);
    }

    // Links sublinhados
    if (localStorage.getItem('underlineLinks') === 'true') {
      this.toggleLinksUnderline();
    }
  }

  // ==========================================
  // UTILITÁRIOS
  // ==========================================
  
  closeAllModals() {
    document.querySelectorAll('.modal-overlay.active').forEach(modal => {
      modal.classList.remove('active');
    });
  }

  closeMenu() {
    const menu = document.querySelector('header nav > ul.active');
    const menuToggle = document.querySelector('.menu-toggle.active');
    const overlay = document.querySelector('.menu-overlay.active');
    
    if (menu) menu.classList.remove('active');
    if (menuToggle) menuToggle.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  }
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

// Inicializar quando DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.accessibilityManager = new AccessibilityManager();
  });
} else {
  window.accessibilityManager = new AccessibilityManager();
}

// Exportar para uso global
window.AccessibilityManager = AccessibilityManager;

console.log('♿ Módulo de Acessibilidade carregado');
