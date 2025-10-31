/* ============================================
   ROUTER.JS - Sistema de Navegação SPA
   ============================================ */

class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    this.contentContainer = null;
  }

  /**
   * Adicionar uma rota
   * @param {string} path - Caminho da rota (ex: '/', '/projetos')
   * @param {Function} handler - Função que renderiza o conteúdo
   */
  addRoute(path, handler) {
    this.routes[path] = handler;
    return this;
  }

  /**
   * Navegar para uma rota
   * @param {string} path - Caminho para navegar
   */
  async navigate(path) {
    // Atualizar URL sem recarregar
    window.history.pushState({}, '', path);
    
    // Carregar o conteúdo
    await this.loadRoute(path);
  }

  /**
   * Carregar conteúdo da rota
   */
  async loadRoute(path) {
    // NORMALIZAR PATH: /index.html -> /
    if (path === '/index.html' || path === '') {
      path = '/';
    }
    
    // Verificar se container existe
    if (!this.contentContainer) {
      console.error('Container não inicializado!');
      return;
    }

    // Encontrar handler da rota
    const route = this.routes[path] || this.routes['/404'];
    
    if (!route) {
      console.error(`Rota não encontrada: ${path}`);
      return;
    }

    // Executar handler e obter conteúdo
    try {
      const content = await route();
      
      // Renderizar conteúdo
      this.contentContainer.innerHTML = content;
      
      // Atualizar rota atual
      this.currentRoute = path;
      
      // ✅ EXECUTAR CALLBACK PÓS-RENDER
      await this.afterRender(path);
      
      // Scroll para o topo
      window.scrollTo(0, 0);
      
    } catch (error) {
      console.error('Erro ao carregar rota:', error);
      this.contentContainer.innerHTML = '<h1>Erro ao carregar página</h1>';
    }
  }

  /**
   * Callback executado após renderizar
   */
  async afterRender(path) {
    console.log(`📍 Página carregada: ${path}`);
    
    // Atualizar classe "active" no menu
    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      
      // Normalizar comparação
      if (href === path || (path === '/' && (href === '/index.html' || href === '/'))) {
        link.classList.add('active');
      }
    });

    // ✅ INICIALIZAR COMPONENTES DA PÁGINA DE CADASTRO
    if (path === '/cadastro') {
      console.log('Inicializando página de cadastro...');
      
      // Aguardar um pouco para garantir que o DOM está pronto
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Verificar se o formulário existe
      const form = document.getElementById('formulario-cadastro');
      
      if (form) {
        console.log('Formulário encontrado, inicializando validações...');
        
        // Limpar instâncias antigas se existirem
        if (window.currentFormValidator) {
          window.currentFormValidator = null;
        }
        if (window.currentAutoSave) {
          window.currentAutoSave = null;
        }
        
        // Criar novas instâncias
        try {
          // Verificar se as classes estão disponíveis
          if (typeof window.FormValidator === 'function') {
            window.currentFormValidator = new window.FormValidator('formulario-cadastro');
            console.log('FormValidator inicializado');
          } else {
            console.error('FormValidator não encontrado');
          }
          
          if (typeof window.AutoSave === 'function') {
            window.currentAutoSave = new window.AutoSave('formulario-cadastro');
            console.log('AutoSave inicializado');
          } else {
            console.error('AutoSave não encontrado');
          }
          
          // Toast de boas-vindas
          if (window.toast) {
            setTimeout(() => {
              window.toast.info(
                'Bem-vindo!',
                'Preencha o formulário. Seus dados serão salvos automaticamente.'
              );
            }, 500);
          }
          
        } catch (error) {
          console.error('Erro ao inicializar componentes:', error);
        }
      } else {
        console.warn('Formulário de cadastro não encontrado no DOM');
      }
    }
  }

  /**
   * Inicializar o router
   */
  init() {
    console.log('🚀 Inicializando Router...');
    
    // ✅ PEGAR CONTAINER AGORA QUE O DOM ESTÁ PRONTO
    this.contentContainer = document.getElementById('app-content');
    
    if (!this.contentContainer) {
      console.error('❌ Elemento #app-content não encontrado no HTML!');
      console.error('Verifique se o index.html tem: <main id="app-content"></main>');
      return;
    }

    console.log('✅ Container encontrado:', this.contentContainer);

    // Interceptar cliques em links
    document.addEventListener('click', (e) => {
      // Verificar se é um link interno
      if (e.target.matches('a[href^="/"]') || e.target.closest('a[href^="/"]')) {
        const link = e.target.matches('a') ? e.target : e.target.closest('a');
        const href = link.getAttribute('href');
        
        // Não interceptar links com target="_blank" ou download
        if (link.hasAttribute('target') || link.hasAttribute('download')) {
          return;
        }
        
        e.preventDefault();
        this.navigate(href);
      }
    });

    // Navegação do browser (botão voltar/avançar)
    window.addEventListener('popstate', () => {
      this.loadRoute(window.location.pathname);
    });

    // Carregar rota inicial
    const initialPath = window.location.pathname;
    console.log('🔍 Rota inicial:', initialPath);
    this.loadRoute(initialPath);
  }
}

// Exportar para uso global
window.Router = Router;
