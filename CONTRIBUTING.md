# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com o projeto **ONG Esperança Solidária**! Este documento orienta como você pode participar e ajudar a melhorar o projeto.

## Índice

1. [Código de Conduta](#código-de-conduta)
2. [Como Posso Contribuir?](#como-posso-contribuir)
3. [Processo de Desenvolvimento](#processo-de-desenvolvimento)
4. [Padrões de Código](#padrões-de-código)
5. [Commits Semânticos](#commits-semânticos)
6. [Pull Requests](#pull-requests)

---

## Código de Conduta

Este projeto segue um Código de Conduta. Ao participar, você concorda em respeitá-lo:

- **Seja respeitoso**: Trate todos com respeito
- **Seja construtivo**: Dê feedback construtivo
- **Seja colaborativo**: Trabalhe em equipe
- **Seja inclusivo**: Acolha todas as pessoas

---

## Como Posso Contribuir?

### Reportar Bugs

Encontrou um bug? Abra uma [issue](../../issues/new) com:

- **Título claro**: Descreva o problema brevemente
- **Descrição detalhada**: O que aconteceu vs. o que deveria acontecer
- **Passos para reproduzir**: Como reproduzir o problema
- **Screenshots**: Se aplicável
- **Ambiente**: Navegador, SO, versão

**Template de Bug Report:**

```markdown
## Descrição do Bug
[Descrição clara do problema]

## Passos para Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

## Comportamento Esperado
[O que deveria acontecer]

## Comportamento Atual
[O que está acontecendo]

## Screenshots
[Se aplicável]

## Ambiente
- Navegador: [ex: Chrome 120]
- OS: [ex: Windows 11]
- Versão do projeto: [ex: 1.0.0]
```

### Sugerir Melhorias

Tem uma ideia? Abra uma [issue](../../issues/new) com:

- **Título claro**: Descreva a melhoria
- **Motivação**: Por que isso seria útil?
- **Solução proposta**: Como implementar?
- **Alternativas**: Outras formas de resolver?

**Template de Feature Request:**

```markdown
## Descrição da Funcionalidade
[Descrição clara da funcionalidade desejada]

## Motivação
[Por que essa funcionalidade é necessária?]

## Solução Proposta
[Como você imagina que isso funcionaria?]

## Alternativas Consideradas
[Outras formas de resolver o problema]

## Contexto Adicional
[Qualquer informação adicional]
```

### Contribuir com Código

1. **Fork** o repositório
2. **Clone** seu fork
3. **Crie** uma branch para sua feature
4. **Implemente** suas mudanças
5. **Teste** suas alterações
6. **Commit** com mensagem semântica
7. **Push** para seu fork
8. **Abra** um Pull Request

---

## Processo de Desenvolvimento

### 1. Configurar Ambiente

```bash
# Fork e clone o repositório
git clone https://github.com/reccogabriel/projeto-ong.git
cd projeto-ong

# Adicionar repositório original como upstream
git remote add upstream https://github.com/reccogabriel/projeto-ong.git

# Verificar remotes
git remote -v
```

### 2. Criar Branch de Feature

Sempre baseie suas features na branch `develop`:

```bash
# Atualizar develop
git checkout develop
git pull upstream develop

# Criar feature branch
git checkout -b feature/nome-da-feature
```

**Convenção de Nomes de Branches:**

- `feature/nome-da-feature` - Nova funcionalidade
- `fix/nome-do-fix` - Correção de bug
- `docs/nome-da-doc` - Atualização de documentação
- `style/nome-do-estilo` - Mudanças de estilo
- `refactor/nome-do-refactor` - Refatoração
- `test/nome-do-teste` - Adição de testes

### 3. Fazer Alterações

```bash
# Fazer alterações nos arquivos...

# Ver status
git status

# Adicionar arquivos alterados
git add arquivo1.js arquivo2.css

# Commit com mensagem semântica
git commit -m "feat: adiciona funcionalidade X"
```

### 4. Manter Branch Atualizada

```bash
# Atualizar develop local
git checkout develop
git pull upstream develop

# Voltar para sua feature
git checkout feature/nome-da-feature

# Rebase com develop (recomendado)
git rebase develop

# Ou merge (alternativa)
git merge develop
```

### 5. Push e Pull Request

```bash
# Push para seu fork
git push origin feature/nome-da-feature

# Abrir Pull Request no GitHub
# (Use a interface web do GitHub)
```

---

## Padrões de Código

### HTML

```html
Bom:
<!-- Semântico, indentado, atributos ordenados -->
<section class="hero" id="hero-section" aria-label="Banner principal">
  <h1>Título Principal</h1>
  <p>Descrição clara e concisa.</p>
</section>

Ruim:
<div class="hero" id="hero-section">
<h1>Título Principal</h1><p>Descrição clara e concisa.</p></div>
```

**Regras:**
- Use HTML5 semântico
- Indente com 2 espaços
- Use atributos ARIA quando necessário
- Sempre feche tags
- Use aspas duplas para atributos

### CSS

```css
Bom:
/* Seletor claro, propriedades organizadas */
.hero-section {
  /* Layout */
  display: flex;
  flex-direction: column;
  
  /* Box model */
  padding: var(--spacing-4);
  margin-bottom: var(--spacing-6);
  
  /* Visual */
  background-color: var(--primary-color);
  border-radius: var(--border-radius-lg);
  
  /* Typography */
  font-size: var(--font-size-lg);
  color: var(--text-white);
}

Ruim:
.hero-section{background-color:#2563eb;padding:32px;color:white;font-size:18px;margin-bottom:48px;}
```

**Regras:**
- Use variáveis CSS quando possível
- Organize propriedades por categoria
- Indente com 2 espaços
- Use nomes de classe descritivos
- Evite IDs para estilização
- Mobile-first approach

### JavaScript

```javascript
Bom:
/**
 * Valida email usando regex
 * @param {string} email - Email para validar
 * @returns {boolean} True se válido
 */
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

Ruim:
function validateEmail(e){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);}
```

**Regras:**
- Use ES6+ (const, let, arrow functions)
- Documente funções com JSDoc
- Indente com 2 espaços
- Use nomes descritivos em português
- Evite variáveis globais
- Use strict equality (===)

---

## Commits Semânticos

Siga o padrão [Conventional Commits](https://www.conventionalcommits.org/):

### Formato

```
<tipo>(<escopo opcional>): <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação (sem mudança de lógica)
- `refactor`: Refatoração
- `perf`: Melhoria de performance
- `test`: Adição/modificação de testes
- `build`: Mudanças no build
- `ci`: Mudanças no CI/CD
- `chore`: Tarefas de manutenção
- `revert`: Reverter commit

### Exemplos

```bash
# Feature simples
git commit -m "feat: adiciona sistema de busca"

# Feature com escopo
git commit -m "feat(formulario): adiciona validação de CPF"

# Fix com descrição
git commit -m "fix: corrige menu mobile que não fechava

O menu não estava fechando ao clicar no overlay.
Adicionado event listener no overlay para fechar menu."

# Breaking change
git commit -m "feat!: altera estrutura de dados

BREAKING CHANGE: campo 'nome' dividido em 'primeiroNome' e 'sobrenome'"

# Com issue
git commit -m "fix: corrige bug no formulário

Closes #42"
```

---

## Pull Requests

### Antes de Abrir

- [ ] Código testado localmente
- [ ] Código segue os padrões do projeto
- [ ] Commits semânticos e organizados
- [ ] Branch atualizada com develop
- [ ] Documentação atualizada (se necessário)
- [ ] Testes passando (se aplicável)

### Template de PR

```markdown
## Descrição
[Descreva suas mudanças]

## Tipo de Mudança
- [ ] Bug fix (correção de bug)
- [ ] Nova funcionalidade
- [ ] Breaking change
- [ ] Documentação

## Como Testar?
1. Clone a branch
2. Abra index.html
3. Navegue para...
4. Verifique que...

## Screenshots
[Se aplicável]

## Checklist
- [ ] Código testado localmente
- [ ] Commits semânticos
- [ ] Documentação atualizada
- [ ] Sem erros no console
- [ ] Responsivo (mobile, tablet, desktop)

## Issues Relacionadas
Closes #[número da issue]
```

### Revisão

Seu PR será revisado considerando:

- **Funcionalidade**: Funciona como esperado?
- **Código**: Segue os padrões?
- **Testes**: Está testado?
- **Documentação**: Está documentado?
- **Performance**: Não degrada a performance?
- **Acessibilidade**: Mantém a acessibilidade?

---

## Dúvidas?

- Email: contato@esperancasolidaria.org.br
- Issues: [Abra uma issue](../../issues/new)
- Documentação: [README.md](README.md)

---

## Agradecimentos

Toda contribuição é valiosa! Obrigado por ajudar a melhorar o projeto! 

---

**Última atualização**: 2025-10-31
