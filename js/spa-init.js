/* ============================================
   SPA-INIT.JS - Inicialização do SPA
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  
  // Criar instância do router
  const router = new Router();
  
  // Adicionar rotas
  router
    .addRoute('/', Templates.home)
    .addRoute('/index.html', Templates.home)  
    .addRoute('/projetos', Templates.projetos)
    .addRoute('/cadastro', Templates.cadastro)
    .addRoute('/404', Templates.notFound);
  
  // Inicializar o router
  router.init();
  
  // Inicializar menu mobile
  inicializarMenuMobile();
  
  // Tornar router global
  window.router = router;
  
  console.log('✅ SPA inicializado com sucesso!');
});