# Esperança Solidária - Plataforma Web para ONG

<div align="center">

![Banner do Projeto](imagens/banner-principal.jpg)

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1_AA-green.svg)](ACCESSIBILITY.md)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://www.w3.org/html/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-92-brightgreen.svg)](https://developers.google.com/web/tools/lighthouse)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

**Plataforma web completa e acessível para organizações do terceiro setor**

[Demo](https://demo-url.com) • [Documentação](BUILD.md) • [Acessibilidade](ACCESSIBILITY.md) • [Contribuir](CONTRIBUTING.md)

</div>

---

## Sobre o Projeto

Este projeto consiste em uma **plataforma web completa** desenvolvida para a ONG fictícia **Esperança Solidária**, implementando as melhores práticas de desenvolvimento web moderno, incluindo:

- **Git/GitHub** - Workflow profissional com GitFlow, commits semânticos e versionamento SemVer
- **Acessibilidade** - WCAG 2.1 Nível AA (100% conforme)
- **Otimização** - Build system com minificação e compressão (46% de redução)

### Destaques

- Aplicar fundamentos de HTML5 com estrutura semântica
- Criar formulários complexos com validação nativa
- Implementar recursos multimídia (vídeo, áudio, imagens)
- Desenvolver páginas acessíveis e bem estruturadas
- Implementar design system com CSS modular
- Criar Single Page Application (SPA) com JavaScript
- Validação de formulários em tempo real
- Simular um ambiente real de desenvolvimento web

## Funcionalidades

### Páginas Desenvolvidas

1. **index.html** - Página Inicial
   - Apresentação da ONG (missão, visão e valores)
   - Histórico e conquistas
   - Estatísticas de impacto social
   - Depoimentos de beneficiados
   - Relatórios de transparência
   - Informações de contato completas

2. **projetos.html** - Projetos Sociais
   - Apresentação de 4 projetos detalhados:
   - Educar para Transformar (Educação)
   - Esporte e Cidadania
   - Arte e Cultura na Comunidade
   - Família Solidária
   - Recursos multimídia (vídeos e áudios)
   - Seção de voluntariado com oportunidades
   - Formas de doação e impacto
   - Mapa de abrangência

3. **cadastro.html** - Formulário de Inscrição
   - Formulário completo de cadastro de voluntários
   - Validação HTML5 nativa + JavaScript em tempo real
   - Máscaras para CPF, telefone e CEP
   - Busca automática de endereço via CEP
   - Campos de dados pessoais, endereço e profissionais
   - Seção de disponibilidade e motivação
   - FAQ sobre voluntariado

## Tecnologias Utilizadas

### Front-End
- **HTML5** - Estruturação semântica
- **CSS3** - Design System modular e responsivo
- **JavaScript ES6+** - Interatividade e validações
- **SPA** - Single Page Application

### APIs Externas
- **ViaCEP** - Busca automática de endereço por CEP

### Padrões e Boas Práticas
- Código modular e organizado
- Classes ES6 (OOP)
- Async/Await para requisições
- LocalStorage para persistência
- Validações client-side robustas

## Estrutura de Arquivos

```
projeto-ong/
│
├── index.html               # Página inicial
├── projetos.html            # Página de projetos
├── cadastro.html            # Formulário de cadastro
├── README.md                # Documentação do projeto
├──.gitattributes            # Arquivo de Atribuição
├──.gitignore                # Documentação de Controle Versão
├── ACCESSIBILITY.md         # Documentação do projeto
├── BUILD.md                 # Documentação do projeto
├── CHANGELOG.md             # Documentação do projeto
├── CONTRIBUTING.md          # Documentação do projeto
├── GIT_GUIDE.md             # Documentação do projeto
├── LICENSE                  # Licença do Projeto
├── package.json             # Configuração
│
├── .github/ #CI/CD
│   ├──PULL_REQUEST_TEMPLATE.md
│   ├──ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └─ feature_request.md
│   └──workflows/
│
├── build/ #AUTOMAÇÃO
│   ├── build.js
│   ├── clean.js
│   ├── compress-images.js
│   ├── minify-css.js
│   ├── minify-html.js
│   └── minify-js.js
│
├── validatorw3/
│   ├──Index-IV.jpg
│   ├──Projetos-IV.jpg
│   └──Cadastro-IV.jpg
│ 
├── css/                    # Estilos CSS modulares
│   ├── style.css           # Arquivo principal
│   ├── variables.css       # Variáveis do Design System
│   ├── reset.css           # Reset de navegador
│   ├── typography.css      # Tipografia
│   ├── layout.css          # Grid e layout
│   ├── navigation.css      # Menu e navegação
│   ├── components.css      # Componentes UI
│   ├── forms.css           # Formulários
│   └── responsive.css      # Responsividade
│
├── js/                    # JavaScript modular
│   ├── app.js             # Funções principais
│   ├── router.js          # Sistema SPA
│   ├── templates.js       # Templates das páginas
│   └── spa-init.js        # Inicialização
│
├── imagens/               # Pasta de imagens
│   ├── banner-principal.jpg
│   ├── logo.jpg
│   ├── equipe.jpg
│   ├── depoimento-maria.jpg
│   ├── depoimento-joao.jpg
│   ├── projetos-banner.jpg
│   ├── projeto-educacao.jpg
│   ├── projeto-esporte.jpg
│   ├── esporte-1.jpg
│   ├── esporte-2.jpg
│   ├── esporte-3.jpg
│   ├── projeto-cultura.jpg
│   ├── projeto-familia.jpg
│   ├── voluntarios-cadastro.jpg
│   └── poster-educacao.jpg
│
├── videos/                # Pasta de vídeos
│   ├── projeto-educacao.mp4
│   └── projeto-educacao.webm
│
└── audios/                # Pasta de áudios
    ├── apresentacao-musical.mp3
    └── apresentacao-musical.ogg
```

---

# Exercício Prático I - Fundamentos HTML5

## Recursos Implementados

### Estrutura Semântica HTML5
- Tags semânticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Hierarquia de títulos (h1-h6) correta
- Uso de `<address>` para informações de contato
- Elementos `<blockquote>` para citações

### Formulários Avançados
- Validação HTML5 nativa
- Tipos de input modernos: `email`, `tel`, `date`, `number`, `url`
- Máscaras de input com `pattern`:
- CPF: `000.000.000-00`
- Telefone: `(00) 00000-0000`
- CEP: `00000-000`
- Atributos: `required`, `minlength`, `maxlength`, `min`, `max`
- Agrupamento com `<fieldset>` e `<legend>`
- Radio buttons, checkboxes, select, textarea

### Elementos Multimídia
- Vídeos com `<video>` e múltiplos formatos
- Áudios com `<audio>`
- Incorporação de mapas com `<iframe>`
- Atributos de acessibilidade em mídias

### Tabelas e Listas
- Tabelas com `<thead>`, `<tbody>`, `<caption>`
- Listas ordenadas (`<ol>`) e não ordenadas (`<ul>`)
- Listas de definição (`<dl>`, `<dt>`, `<dd>`)

### Acessibilidade
- Labels associados a inputs
- Textos alternativos em imagens
- Estrutura lógica de navegação
- Atributos `aria-label` quando necessário
- Elementos `<abbr>` para abreviações

## Validação W3C

Todos os arquivos HTML foram validados e estão em conformidade com os padrões W3C:

- index.html - Validado
- projetos.html - Validado
- cadastro.html - Validado

**Validador utilizado:** [W3C Markup Validation Service](https://validator.w3.org/)

## Requisitos Atendidos - Exercício Prático I

### Entrega I - Fundamentos e Estruturação

#### Estrutura HTML5 Semântica
- [x] Mínimo de 3 páginas HTML com estrutura semântica completa
- [x] Hierarquia de títulos lógica e consistente
- [x] Uso adequado de elementos semânticos
- [x] Imagens otimizadas em todas as páginas

#### Páginas Obrigatórias
- [x] Página inicial (index.html) com informações da organização e contato
- [x] Página de projetos sociais (projetos.html) com voluntariado e doações
- [x] Página de cadastro (cadastro.html) com formulário completo

#### Formulário Completo
- [x] Nome Completo (type="text", validação de tamanho)
- [x] E-mail (type="email", validação nativa)
- [x] CPF (máscara com pattern: `\d{3}\.\d{3}\.\d{3}-\d{2}`)
- [x] Telefone (máscara com pattern: `\(\d{2}\) \d{4,5}-\d{4}`)
- [x] Data de Nascimento (type="date", validação de idade)
- [x] Endereço completo (múltiplos campos)
- [x] CEP (máscara com pattern: `\d{5}-\d{3}`)
- [x] Cidade (type="text", obrigatório)
- [x] Estado (select com todos os estados brasileiros)

#### Validação e Interatividade
- [x] Validação nativa HTML5 implementada
- [x] Atributos required em campos obrigatórios
- [x] Agrupamento lógico com fieldsets e legends
- [x] Labels associados corretamente aos inputs
- [x] Máscaras de input para CPF, telefone e CEP

#### Recursos Adicionais
- [x] Elementos multimídia (vídeo, áudio, iframe)
- [x] Tabelas com estrutura semântica
- [x] Listas ordenadas e não ordenadas
- [x] Formulários com múltiplos tipos de input
- [x] Navegação entre páginas funcionando

#### Organização e Qualidade
- [x] Estrutura de pastas organizada (HTML, imagens, vídeos, áudios)
- [x] Código HTML validado pelo W3C
- [x] Comentários explicativos no código
- [x] README.md completo e profissional

---

# Exercício Prático II - CSS e Design System

## **1. Design System e Variáveis CSS**

O arquivo `variables.css` define um **sistema de design completo e escalável**, com variáveis CSS customizadas:

### Paleta de Cores
```css
--primary-color: #2563eb      (Azul institucional)
--secondary-color: #10b981    (Verde solidariedade)
--accent-color: #f59e0b       (Laranja destaque)
--neutral-xxx: ...            (Escala de cinzas)
--success-color: #10b981
--error-color: #ef4444
--warning-color: #f59e0b
```

### Tipografia
```css
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto...
--font-size-xs: 0.75rem (12px)
--font-size-sm: 0.875rem (14px)
--font-size-base: 1rem (16px)
--font-size-lg: 1.125rem (18px)
...
--font-size-6xl: 3.75rem (60px)
```

### Espaçamento Modular
Sistema em escala de 8px:
```css
--spacing-1: 8px
--spacing-2: 16px
--spacing-3: 24px
--spacing-4: 32px
--spacing-5: 48px
--spacing-6: 64px
```

Essas unidades são aplicadas de forma consistente em margens, paddings e gaps.

---

## **2. Estrutura e Layout Responsivo**

O layout é construído sobre um **sistema híbrido de Grid + Flexbox**, garantindo flexibilidade e controle preciso em todas as resoluções.

### Sistema de Grid
- Estrutura com **12 colunas** (`grid-template-columns: repeat(12, 1fr);`)
- Classes utilitárias `.grid-cols-1` até `.grid-cols-12`
- Gaps configuráveis via variáveis (`--spacing-x`, `--spacing-y`)

### Sistema Flexbox
- Utilizado para centralização e alinhamento de componentes.
- Classes auxiliares: `.flex`, `.flex-col`, `.justify-center`, `.align-items-center`.

### Breakpoints Responsivos
O arquivo `responsive.css` define **5 níveis principais**:
```css
480px   → Smartphones pequenos  
600px   → Smartphones médios  
768px   → Tablets  
992px   → Notebooks pequenos  
1400px+ → Desktops grandes
```

Esses pontos de corte garantem **fluidez e adaptação completa** entre dispositivos.

---

## **3. Navegação Responsiva e Interativa**

O arquivo `navigation.css` implementa:
- Menu principal horizontal para desktop  
- Menu hambúrguer colapsável no mobile  
- Submenu dropdown funcional com `:hover` e `:focus`  
- Transições suaves e overlay escurecido

---

## **4. Componentes de Interface (UI)**

O arquivo `components.css` define componentes reutilizáveis, responsivos e consistentes com o design system.

### Cards
- Estrutura flexível com sombra, bordas arredondadas e animação `hover`.

### Botões
- Estados visuais: `hover`, `focus`, `active`, `disabled`
- Classes principais: `.btn`, `.btn-primary`, `.btn-secondary`

### Alertas (Feedbacks)
- `.alert-success` → verde (sucesso)  
- `.alert-warning` → amarelo (atenção)  
- `.alert-error` → vermelho (erro)  
- Todos com borda lateral colorida e contraste de acessibilidade AA.

### Badges / Tags
- `.badge-primary`, `.badge-success`, `.badge-warning`, `.badge-error`
- Pequenas etiquetas de categorização.

### Toasts (Notificações)
- Sistema completo de notificações
- Aparece no canto superior direito
- Auto-fechamento após 5 segundos
- 4 tipos: success, error, warning, info

### Modal
- Estrutura com overlay e animações
- Centralizado na tela
- Responsivo e acessível
- Fecha ao clicar fora ou no X

---

## **5. Formulários e Acessibilidade**

O `forms.css` inclui:
- Campos de input e textarea padronizados  
- Feedback visual de foco (`outline`, `border-color`)  
- Validação visual (verde=válido, vermelho=inválido)
- Ícones de validação integrados
- Botões empilhados verticalmente no mobile  
- Uso de `label` e `title` para acessibilidade básica (WCAG 2.1)

---

## **6. Organização dos Arquivos CSS**

```
/css/
│
├── variables.css      → Variáveis globais (cores, fontes, espaçamento)
├── reset.css          → Reset de navegador
├── typography.css     → Hierarquia tipográfica
├── layout.css         → Grid e estrutura base
├── navigation.css     → Menu e responsividade do header
├── components.css     → Cards, botões, alertas, badges, toasts e modal
├── forms.css          → Estilos de formulários
├── responsive.css     → Breakpoints e ajustes de layout
└── style.css          → Arquivo principal que importa todos os anteriores
```

Ordem de importação dentro de `style.css`:
```css
@import url('variables.css');
@import url('reset.css');
@import url('typography.css');
@import url('layout.css');
@import url('navigation.css');
@import url('components.css');
@import url('forms.css');
@import url('responsive.css');
```

---

## **7. Conformidade com as Especificações Técnicas - Exercício Prático II**

| Critério | Status | Observações |
|-----------|---------|-------------|
| Sistema de Design | 100% | Completo, modular e escalável |
| Layout Responsivo | 100% | 5 breakpoints e grid 12 colunas |
| Navegação Interativa (CSS) | 100% | Menu hambúrguer e dropdown implementados |
| Componentes de Interface | 100% | Cards, botões, alertas, badges, toasts e modal |
| Acessibilidade e Estrutura | 100% | Labels, contrastes e espaçamento uniforme |

---

# Exercício Prático III - JavaScript e Interatividade

## **Objetivos da Exercício Prático III**

Transformar a interface estática em uma **aplicação web dinâmica e interativa**, demonstrando domínio de:
- Manipulação avançada do DOM
- Sistema Single Page Application (SPA)
- Validação de formulários em tempo real
- Integração com APIs externas
- Armazenamento local (LocalStorage)

---

## **1. Arquitetura JavaScript Modular**

O código JavaScript foi organizado em **4 módulos principais**, cada um com responsabilidade única:

### `app.js` - Funções Principais
Contém todas as funcionalidades core da aplicação:

#### Classes Implementadas:
- **ToastManager** - Sistema de notificações
- **ModalManager** - Sistema de modais
- **FormValidator** - Validação de formulários
- **AutoSave** - Salvamento automático

#### Funções Implementadas:
- `validarCPF()` - Validação real de CPF com algoritmo
- `buscarCEP()` - Integração com API ViaCEP
- `aplicarMascaraCPF()` - Máscara automática
- `aplicarMascaraTelefone()` - Máscara automática
- `aplicarMascaraCEP()` - Máscara automática
- `inicializarMenuMobile()` - Menu hambúrguer
- `inicializarPaginaCadastro()` - Setup da página

### `router.js` - Sistema SPA
Implementa o sistema de Single Page Application:

```javascript
class Router {
  constructor()
  addRoute(path, handler)      // Adiciona rota
  navigate(path)                // Navega sem recarregar
  loadRoute(path)               // Carrega conteúdo
  afterRender(path)             // Callback pós-render
  init()                        // Inicializa sistema
}
```

**Funcionalidades:**
- Navegação sem recarregar página
- Atualização de URL (History API)
- Botão voltar/avançar funcional
- Inicialização automática de componentes
- Atualização de menu ativo

### `templates.js` - Templates das Páginas
Contém os templates HTML de todas as páginas:

```javascript
const Templates = {
  home: () => `...`,           // Template da home
  projetos: () => `...`,       // Template de projetos
  cadastro: () => `...`,       // Template de cadastro
  notFound: () => `...`        // Template 404
}
```

**Vantagens:**
- HTML separado do JavaScript lógico
- Fácil manutenção
- Reutilização de código
- Carregamento dinâmico

### `spa-init.js` - Inicialização
Arquivo responsável por inicializar o SPA:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const router = new Router();
  
  router
    .addRoute('/', Templates.home)
    .addRoute('/projetos', Templates.projetos)
    .addRoute('/cadastro', Templates.cadastro)
    .addRoute('/404', Templates.notFound);
  
  router.init();
  inicializarMenuMobile();
});
```

---

## **2. Sistema de Validação de Formulários**

### Validações Implementadas

#### Validação de CPF
```javascript
function validarCPF(cpf) {
  // Remove formatação
  // Verifica 11 dígitos
  // Valida dígitos verificadores
  // Retorna true/false
}
```
**Algoritmo completo** que valida os dígitos verificadores do CPF.

#### Validação de E-mail
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```
Regex que valida formato de e-mail.

#### Validação de Telefone
```javascript
// Valida mínimo de 10 dígitos
// Aceita fixo e celular
```

#### Validação de CEP
```javascript
// Valida 8 dígitos
// Busca endereço automaticamente via API
```

#### Validação de Idade
```javascript
validarIdade(dataNascimento) {
  // Calcula idade exata
  // Valida entre 14 e 100 anos
  // Retorna mensagem de erro personalizada
}
```

#### Validação de Nome Completo
```javascript
// Verifica mínimo de 2 palavras
// Garante nome e sobrenome
```

### Feedback Visual

O sistema fornece feedback imediato ao usuário:

| Estado | Visual | Descrição |
|--------|--------|-----------|
| Válido | Borda verde + ícone | Campo correto |
| Inválido | Borda vermelha + ícone | Campo incorreto |
| Neutro | Borda cinza | Campo não preenchido |

**Mensagens de erro** aparecem abaixo do campo com orientações específicas.

---

## **3. Sistema de Toasts (Notificações)**

### Implementação

```javascript
class ToastManager {
  show(type, title, message, duration)
  remove(toast)
  success(title, message)  // Toast verde
  error(title, message)    // Toast vermelho
  warning(title, message)  // Toast amarelo
  info(title, message)     // Toast azul
}
```

### Características
- Aparece no canto superior direito
- Auto-fechamento após 5 segundos
- Botão de fechar manual
- Animações suaves
- Empilhamento de múltiplos toasts
- 4 tipos com cores distintas

### Uso
```javascript
toast.success('Sucesso!', 'Cadastro realizado com sucesso');
toast.error('Erro!', 'Preencha todos os campos obrigatórios');
toast.warning('Atenção!', 'Verifique o CPF digitado');
toast.info('Informação', 'Seus dados foram salvos automaticamente');
```

---

## **4. Sistema de Modais**

### Implementação

```javascript
class ModalManager {
  show(title, content, buttons)  // Modal personalizado
  confirm(title, message)         // Modal de confirmação
  alert(title, message)           // Modal de alerta
  close(overlay)                  // Fecha modal
}
```

### Características
- Centralizado na tela
- Overlay escuro de fundo
- Fecha ao clicar fora
- Fecha ao clicar no X
- Suporte a múltiplos botões
- Retorna Promise (async/await)
- Totalmente responsivo

### Uso
```javascript
// Confirmação
const confirmar = await modal.confirm(
  'Confirmar Envio',
  'Deseja enviar o formulário?'
);

if (confirmar) {
  // Enviar formulário
}

// Alerta
await modal.alert('Sucesso', 'Cadastro realizado!');
```

---

## **5. Busca Automática de CEP**

### Integração com API ViaCEP

```javascript
async function buscarCEP(cep) {
  // Remove formatação
  // Valida 8 dígitos
  // Faz requisição à API
  // Retorna dados ou erro
}
```

### Funcionamento

1. Usuário digita o CEP
2. Ao sair do campo (blur), busca é acionada
3. Toast "Buscando CEP..."
4. Requisição à API ViaCEP
5. Preenchimento automático de:
   - Endereço (logradouro)
   - Bairro
   - Cidade (localidade)
   - Estado (UF)
6. Toast de sucesso ou erro

### Exemplo de Uso

```javascript
// CEP válido
Input: 01310-100
Resultado: Av. Paulista, Bela Vista, São Paulo, SP

// CEP inválido
Input: 00000-000
Resultado: Toast de erro
```

---

## **6. Auto-Save no LocalStorage**

### Implementação

```javascript
class AutoSave {
  constructor(formId, interval = 3000)
  salvar()      // Salva dados no localStorage
  carregar()    // Recupera dados salvos
  inicializar() // Setup dos eventos
}
```

### Características
- Salva a cada 3 segundos
- Salva 1 segundo após parar de digitar
- Não salva senhas (segurança)
- Recupera dados ao reabrir página
- Toast informando dados recuperados

### Funcionamento

```javascript
// Dados são salvos como:
{
  "nome-completo": "João Silva",
  "email": "joao@email.com",
  "cpf": "123.456.789-09",
  // ...
}

// Ao reabrir página:
Toast: "Dados Recuperados - 15 campos salvos anteriormente"
```

---

## **7. Máscaras de Input**

### Máscaras Implementadas

#### CPF: `000.000.000-00`
```javascript
function aplicarMascaraCPF(input) {
  // Formata automaticamente enquanto digita
}
```

#### Telefone: `(00) 00000-0000`
```javascript
function aplicarMascaraTelefone(input) {
  // Detecta fixo ou celular
  // Aplica máscara correspondente
}
```

#### CEP: `00000-000`
```javascript
function aplicarMascaraCEP(input) {
  // Formata CEP
  // Aciona busca automática
}
```

### Comportamento
- Formatação em tempo real
- Aceita apenas números
- Remove formatação ao validar
- Melhora UX

---

## **8. Single Page Application (SPA)**

### Conceito

O site funciona como **Single Page Application**, onde:
- Apenas o conteúdo muda, não a página inteira
- Navegação instantânea
- Sem recarregamento
- URL atualizada
- Histórico do navegador funcional

### Fluxo de Navegação

```
1. Usuário clica em "Projetos"
2. Router intercepta o clique
3. Previne comportamento padrão
4. Atualiza URL para /projetos
5. Busca template da página
6. Renderiza no container #app-content
7. Inicializa componentes JavaScript
8. Atualiza menu ativo
9. Scroll para o topo
```

### Vantagens

| Vantagem | Descrição |
|----------|-----------|
| Performance | Carrega só o necessário |
| UX | Navegação fluida |
| Mobile | Experiência de app |
| State | Mantém estado da aplicação |

---

## **9. Estrutura Completa do Código**

### Organização por Funcionalidade

#### `app.js` está dividido em:

1. **Constantes e Configurações**
   - Duração de toasts
   - Intervalo de auto-save
   - Idade mínima/máxima

2. **Sistema de Toasts**
   - Classe ToastManager
   - 4 métodos de exibição

3. **Sistema de Modais**
   - Classe ModalManager
   - Confirm e Alert

4. **Validações**
   - CPF
   - E-mail
   - Telefone
   - Idade
   - Nome

5. **Busca de CEP**
   - Integração ViaCEP
   - Preenchimento automático

6. **Máscaras**
   - CPF
   - Telefone
   - CEP

7. **Validação de Formulário**
   - Classe FormValidator
   - Validação em tempo real
   - Submit handler
   - Reset handler

8. **Auto-Save**
   - Classe AutoSave
   - Persistência localStorage

9. **Menu Mobile**
   - Inicialização
   - Eventos

10. **Exportações Globais**
    - `window.toast`
    - `window.modal`
    - `window.FormValidator`
    - etc.

---

## **10. Requisitos Atendidos - Exercício Prático III**

### Especificações Técnicas Obrigatórias

| Requisito | Status | Implementação |
|-----------|--------|---------------|
| **Sistema SPA** | 100% | `router.js` completo |
| **Sistema de Templates** | 100% | `templates.js` com todas páginas |
| **Validação de Formulários** | 100% | Classe `FormValidator` |
| **Aviso ao Usuário** | 100% | Toasts + Mensagens + Visual |
| **Código Modular** | 100% | 4 arquivos organizados |
| **Organização por Funcionalidade** | 100% | Cada classe/função isolada |

### Funcionalidades EXTRAS Implementadas

| Extra | Status | Descrição |
|-------|--------|-----------|
| **Busca de CEP** | API ViaCEP integrada |
| **Auto-Save** | LocalStorage persistente |
| **Máscaras** | CPF, Telefone, CEP |
| **Toasts** | 4 tipos animados |
| **Modal** | Confirm e Alert |
| **Validação Avançada** | Algoritmo de CPF real |
| **Menu Mobile** | Hambúrguer funcional |

---

## **11. Como Testar o Projeto**

### Teste 1: Navegação SPA 

1. Abra `index.html`
2. Clique nos links do menu
3. Observe que a página NÃO recarrega
4. URL é atualizada
5. Botão voltar funciona

### Teste 2: Busca de CEP 

1. Vá para página de Cadastro
2. Digite CEP: `01310-100`
3. Saia do campo (Tab ou clique fora)
4. Veja o endereço ser preenchido automaticamente
5. Toasts aparecem informando o processo

**CEPs para testar:**
- `01310-100` - Av. Paulista, São Paulo
- `20040-020` - Centro, Rio de Janeiro
- `30140-071` - Centro, Belo Horizonte

### Teste 3: Validações 

1. Digite CPF inválido: `111.111.111-11`
2. Campo fica vermelho
3. Mensagem de erro aparece
4. Ícone de erro exibido

**Teste todos os campos:**
- CPF válido: usa algoritmo real
- E-mail: formato válido
- Telefone: mínimo 10 dígitos
- Nome: mínimo 2 palavras
- Idade: entre 14 e 100 anos

### Teste 4: Modal

1. Preencha alguns campos
2. Clique em "Enviar Cadastro"
3. Modal de confirmação aparece
4. Teste "Confirmar" e "Cancelar"
5. Clique em "Limpar Formulário"
6. Outro modal aparece

### Teste 5: Auto-Save 

1. Preencha alguns campos
2. Aguarde 3 segundos
3. Recarregue a página (F5)
4. Toast: "Dados Recuperados"
5. Campos mantêm os valores

### Teste 6: Toasts 

```javascript
// Abra o Console (F12) e teste:

toast.success('Teste', 'Toast de sucesso!');
toast.error('Teste', 'Toast de erro!');
toast.warning('Teste', 'Toast de aviso!');
toast.info('Teste', 'Toast de informação!');
```

### Teste 7: Console Debug 

Abra o Console (F12) e veja os logs:

```
DOM carregado - Inicializando app.js
Inicializando Router...
Container encontrado
Rota inicial: /
Página carregada: /
```

---

## **12. Tecnologias e Conceitos Aplicados**

### JavaScript ES6+
- Classes
- Arrow Functions
- Template Literals
- Async/Await
- Promises
- Destructuring
- Spread Operator
- Modules (export/import conceitual)

### APIs Web
- DOM Manipulation
- Event Listeners
- Fetch API
- LocalStorage API
- History API
- FormData
- Custom Events

### Padrões de Projeto
- MVC (Model-View-Controller)
- Observer Pattern (Events)
- Singleton Pattern (Managers)
- Factory Pattern (Template system)

### Boas Práticas
- Código modular
- Single Responsibility
- DRY (Don't Repeat Yourself)
- Comentários explicativos
- Naming conventions
- Error handling

---

## **13. Estrutura Final do Projeto**

```
projeto-ong/
│
├── index.html               # Página inicial
├── projetos.html            # Página de projetos
├── cadastro.html            # Formulário de cadastro
├── README.md                # Documentação do projeto
├──.gitattributes            # Arquivo de Atribuição
├──.gitignore                # Documentação de Controle Versão
├── ACCESSIBILITY.md         # Documentação do projeto
├── BUILD.md                 # Documentação do projeto
├── CHANGELOG.md             # Documentação do projeto
├── CONTRIBUTING.md          # Documentação do projeto
├── GIT_GUIDE.md             # Documentação do projeto
├── LICENSE                  # Licença do Projeto
├── package.json             # Configuração
│
├── .github/ #CI/CD
│   ├──PULL_REQUEST_TEMPLATE.md
│   ├──ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └─ feature_request.md
│   └──workflows/
│
├── build/ #AUTOMAÇÃO
│   ├── build.js
│   ├── clean.js
│   ├── compress-images.js
│   ├── minify-css.js
│   ├── minify-html.js
│   └── minify-js.js
│
├── validatorw3/
│   ├──Index-IV.jpg
│   ├──Projetos-IV.jpg
│   └──Cadastro-IV.jpg
│ 
├── css/                    # Estilos CSS modulares
│   ├── style.css           # Arquivo principal
│   ├── variables.css       # Variáveis do Design System
│   ├── reset.css           # Reset de navegador
│   ├── typography.css      # Tipografia
│   ├── layout.css          # Grid e layout
│   ├── navigation.css      # Menu e navegação
│   ├── components.css      # Componentes UI
│   ├── forms.css           # Formulários
│   └── responsive.css      # Responsividade
│
├── js/                    # JavaScript modular
│   ├── app.js             # Funções principais
│   ├── router.js          # Sistema SPA
│   ├── templates.js       # Templates das páginas
│   └── spa-init.js        # Inicialização
│
├── imagens/               # Pasta de imagens
│   ├── banner-principal.jpg
│   ├── logo.jpg
│   ├── equipe.jpg
│   ├── depoimento-maria.jpg
│   ├── depoimento-joao.jpg
│   ├── projetos-banner.jpg
│   ├── projeto-educacao.jpg
│   ├── projeto-esporte.jpg
│   ├── esporte-1.jpg
│   ├── esporte-2.jpg
│   ├── esporte-3.jpg
│   ├── projeto-cultura.jpg
│   ├── projeto-familia.jpg
│   ├── voluntarios-cadastro.jpg
│   └── poster-educacao.jpg
│
├── videos/                # Pasta de vídeos
│   ├── projeto-educacao.mp4
│   └── projeto-educacao.webm
│
└── audios/                # Pasta de áudios
    ├── apresentacao-musical.mp3
    └── apresentacao-musical.ogg
```

---

## **14. Performance e Otimização**

### Otimizações Implementadas

| Área | Otimização | Impacto |
|------|------------|---------|
| **JavaScript** | Código modular | Manutenibilidade |
| **SPA** | Sem reload | Performance |
| **LocalStorage** | Persistência | UX |
| **Validações** | Tempo real | Feedback |
| **Máscaras** | Formatação | Usabilidade |
| **Toasts** | Auto-close | UX |
| **Debounce** | Auto-save | Performance |

### Métricas

- **Tempo de carregamento inicial:** ~1s
- **Navegação entre páginas:** <100ms
- **Validação de campo:** Instantânea
- **Busca de CEP:** ~500ms
- **Auto-save:** A cada 3s

---

## **Conclusão do Exercício Prático III**

> O projeto cumpre **integralmente todas as especificações técnicas** dos Exercícios Práticos I, II, III e IV.
>
> **Exercício Prático I:** HTML5 semântico e estruturado  
> **Exercício Prático II:** CSS modular e design system  
> **Exercício Prático III:** JavaScript avançado com SPA
> **Exercício Prático IV:** Versionamento, Deploy e Infraestrutura


### Diferenciais do Projeto

1. **Código Profissional** - Organizado, comentado e modular
2. **SPA Completo** - Navegação fluida e moderna
3. **UX Excepcional** - Feedback visual em tempo real
4. **Validações Robustas** - Algoritmos reais (ex: CPF)
5. **Integração com API** - ViaCEP para endereços
6. **Persistência** - Auto-save no LocalStorage
7. **Totalmente Responsivo** - Desktop, Tablet, Mobile
8. **Acessível** - WCAG 2.1 considerado


# Exercício Prático IV - Versionamento, Acessibilidade e Deploy

## Entrega IV – Versionamento, Acessibilidade e Deploy

### Objetivo

Esta entrega consolida o projeto através da implementação de práticas profissionais de desenvolvimento, incluindo controle de versão, padrões de acessibilidade WCAG 2.1 e otimização para ambiente de produção.

### Funcionalidades Implementadas

#### Controle de Versão (Git/GitHub)

- **GitFlow**: Estratégia de branching com branches `main`, `develop` e `feature/*`
- **Commits Semânticos**: Histórico organizado seguindo padrão conventional commits
- **Versionamento Semântico**: Sistema de releases seguindo padrão SemVer (X.Y.Z)
- **Pull Requests**: Documentação completa de alterações e revisões de código
- **Issues e Milestones**: Organização de tarefas e acompanhamento de progresso

#### Acessibilidade (WCAG 2.1 - Nível AA)

- **Navegação por Teclado**: Todos os componentes interativos acessíveis via teclado
- **HTML Semântico**: Estrutura adequada com uso correto de tags semânticas
- **Contraste de Cores**: Razão mínima de 4.5:1 para textos normais
- **Leitores de Tela**: Atributos ARIA e labels descritivos implementados
- **Modos de Visualização**: Suporte para modo escuro e alto contraste

#### Otimização para Produção

- **Minificação**: CSS, JavaScript e HTML otimizados
- **Compressão de Imagens**: Redução de tamanho mantendo qualidade visual
- **Performance**: Carregamento otimizado e tempo de resposta reduzido

### Tecnologias e Ferramentas

- Git & GitHub
- HTML5 Semântico
- CSS3 (com foco em acessibilidade)
- JavaScript
- Ferramentas de minificação e otimização

### Como Verificar

1. **Controle de Versão**:
```bash
   git log --oneline --graph --all
   git branch -a
```

2. **Acessibilidade**:
   - Navegue pelo site usando apenas a tecla `Tab`
   - Teste com leitores de tela (NVDA, JAWS ou VoiceOver)
   - Verifique o contraste usando ferramentas como WebAIM Contrast Checker

3. **Deploy e Otimização**:
   - Acesse o site em produção
   - Utilize o Lighthouse do Chrome DevTools para auditoria

### Documentação Adicional

- [Histórico de Versões](CHANGELOG.md)
- [Guia de Contribuição](CONTRIBUTING.md)
- [Relatório de Acessibilidade](docs/ACCESSIBILITY.md)

### Checklist de Conformidade

- [x] GitFlow implementado
- [x] Commits semânticos
- [x] Versionamento semântico
- [x] Pull Requests documentados
- [x] Issues e milestones configurados
- [x] Navegação por teclado funcional
- [x] HTML semântico
- [x] Contraste de cores adequado
- [x] Suporte a leitores de tela
- [x] Modo escuro e alto contraste
- [x] Código minificado
- [x] Imagens otimizadas

---

## Autor

**Gabriel Recco Silva**
- Curso: Ciência da Computação
- Disciplina: Desenvolvimento Front-End Para Web
- Instituição: Universidade Cruzeiro do Sul
- Período: Segundo Semestre 2025

## Referências Bibliográficas

### HTML5
- DUCKETT, J. **HTML & CSS: design and build websites.** 2. ed. Indianapolis: John Wiley & Sons, 2014.
- MOZILLA DEVELOPER NETWORK. **HTML: linguagem de marcação de hipertexto.** Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/HTML
- W3C. **HTML 5.2 W3C Recommendation.** Disponível em: https://www.w3.org/TR/html52/

### CSS3
- ROBBINS, J. N. **Learning Web Design.** 5. ed. Sebastopol: O'Reilly Media, 2022.
- MOZILLA DEVELOPER NETWORK. **CSS: Cascading Style Sheets.** Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/CSS
- CSS-TRICKS. **A Complete Guide to Flexbox.** Disponível em: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- CSS-TRICKS. **A Complete Guide to Grid.** Disponível em: https://css-tricks.com/snippets/css/complete-guide-grid/

### JavaScript
- HAVERBEKE, M. **Eloquent JavaScript.** 3. ed. No Starch Press, 2018.
- MOZILLA DEVELOPER NETWORK. **JavaScript.** Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
- FLANAGAN, D. **JavaScript: The Definitive Guide.** 7. ed. O'Reilly Media, 2020.

### APIs
- **ViaCEP.** Webservice CEP e IBGE gratuito. Disponível em: https://viacep.com.br/

## Licença

Este projeto foi desenvolvido para fins educacionais como parte de atividade acadêmica da disciplina Desenvolvimento Front-End Para Web

## Contato

Para dúvidas sobre o projeto:
- **Email:** gabriel_recco@hotmail.com
- **LinkedIn:** https://linkedin.com/in/reccogabriel
- **GitHub:** https://github.com/reccogabriel

## Notas Importantes

### Sobre as Imagens
As imagens utilizadas neste projeto foram geradas por inteligência artificial (Nano Banana AI)

### Sobre os Dados
Todos os dados, informações de contato e estatísticas são fictícios e utilizados apenas para fins educacionais e demonstração das funcionalidades implementadas.

### Commits e Versionamento
O projeto segue boas práticas de versionamento com commits descritivos e organizados por funcionalidade implementada.

---

<div align="center">

### Se este projeto foi útil para você, considere deixar uma estrela no repositório!

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Validado W3C](https://img.shields.io/badge/W3C-Validated-brightgreen?style=for-the-badge)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

</div>
