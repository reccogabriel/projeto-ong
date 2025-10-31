# 🌳 Guia Completo: Git/GitHub com GitFlow

Este guia contém todos os comandos e procedimentos para implementar controle de versão com GitFlow e versionamento semântico.

## Índice

1. [Inicialização do Repositório](#1-inicialização-do-repositório)
2. [Estrutura GitFlow](#2-estrutura-gitflow)
3. [Commits Semânticos](#3-commits-semânticos)
4. [Versionamento Semântico](#4-versionamento-semântico)
5. [Workflow Completo](#5-workflow-completo)
6. [Comandos Úteis](#6-comandos-úteis)

---

## 1. Inicialização do Repositório

### Passo 1.1: Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Nome do repositório: `projeto-ong`
3. Descrição: `Website institucional da ONG Esperança Solidária`
4. Visibilidade: **Público** ou **Privado**
5. NÃO inicialize com README
6. Clique em **Create repository**

### Passo 1.2: Configurar Git Local

```bash
# Navegar até a pasta do projeto
cd projeto-ong

# Inicializar repositório Git
git init

# Configurar nome e email (se ainda não configurado)
git config user.name "Seu Nome"
git config user.email "seu.email@exemplo.com"

# Verificar configuração
git config --list
```

### Passo 1.3: Primeiro Commit (Commit Inicial)

```bash
# Adicionar todos os arquivos
git add .

# Criar commit inicial
git commit -m "chore: setup inicial do projeto

- Estrutura de pastas criada
- Arquivos HTML, CSS e JS adicionados
- README.md e .gitignore configurados
- Design System implementado
- Sistema SPA funcional"

# Renomear branch para main (se necessário)
git branch -M main
```

### Passo 1.4: Conectar ao GitHub

```bash
# Adicionar remote
git remote add origin https://github.com/reccogabriel/projeto-ong.git

# Verificar remote
git remote -v

# Push inicial
git push -u origin main
```

✅ **Checkpoint**: Seu repositório agora está no GitHub!

---

## 2. Estrutura GitFlow

### 2.1: Criar Branch Develop

```bash
# Criar branch develop a partir da main
git checkout -b develop

# Push da branch develop para o GitHub
git push -u origin develop
```

### 2.2: Estrutura de Branches

```
main (produção)
  └── develop (desenvolvimento)
        ├── feature/nome-da-feature
        ├── feature/outra-feature
        └── release/v1.0.0
```

### 2.3: Branches por Tipo

#### Feature Branches (Novas Funcionalidades)
```bash
# Criar feature branch
git checkout develop
git checkout -b feature/validacao-formulario

# Trabalhar na feature...

# Commit das mudanças
git add .
git commit -m "feat: adiciona validação de formulário em tempo real"

# Push para o GitHub
git push -u origin feature/validacao-formulario

# Finalizar feature (merge em develop)
git checkout develop
git merge --no-ff feature/validacao-formulario
git push origin develop

# Deletar branch local e remota
git branch -d feature/validacao-formulario
git push origin --delete feature/validacao-formulario
```

#### Release Branches (Preparação de Versão)
```bash
# Criar release branch
git checkout develop
git checkout -b release/v1.0.0

# Ajustes finais, testes, documentação...
git add .
git commit -m "chore: prepara release v1.0.0"

# Merge em main
git checkout main
git merge --no-ff release/v1.0.0
git tag -a v1.0.0 -m "Release v1.0.0 - Primeira versão estável"
git push origin main --tags

# Merge em develop
git checkout develop
git merge --no-ff release/v1.0.0
git push origin develop

# Deletar branch release
git branch -d release/v1.0.0
git push origin --delete release/v1.0.0
```

#### Hotfix Branches (Correções Urgentes)
```bash
# Criar hotfix branch
git checkout main
git checkout -b hotfix/corrige-bug-critico

# Corrigir bug...
git add .
git commit -m "fix: corrige bug crítico no formulário"

# Merge em main
git checkout main
git merge --no-ff hotfix/corrige-bug-critico
git tag -a v1.0.1 -m "Hotfix v1.0.1 - Correção de bug crítico"
git push origin main --tags

# Merge em develop
git checkout develop
git merge --no-ff hotfix/corrige-bug-critico
git push origin develop

# Deletar branch hotfix
git branch -d hotfix/corrige-bug-critico
git push origin --delete hotfix/corrige-bug-critico
```

---

## 3. Commits Semânticos

### 3.1: Formato Padrão

```
<tipo>(<escopo opcional>): <descrição curta>

<descrição longa opcional>

<rodapé opcional>
```

### 3.2: Tipos de Commit

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| `feat` | Nova funcionalidade | `feat: adiciona sistema de toast` |
| `fix` | Correção de bug | `fix: corrige validação de email` |
| `docs` | Documentação | `docs: atualiza README com instruções` |
| `style` | Formatação | `style: formata código CSS` |
| `refactor` | Refatoração | `refactor: reorganiza estrutura de pastas` |
| `perf` | Performance | `perf: otimiza carregamento de imagens` |
| `test` | Testes | `test: adiciona testes unitários` |
| `build` | Build | `build: atualiza dependências` |
| `ci` | CI/CD | `ci: adiciona GitHub Actions` |
| `chore` | Manutenção | `chore: atualiza .gitignore` |
| `revert` | Reverter | `revert: reverte commit abc123` |

### 3.3: Exemplos Práticos

```bash
# Feature simples
git commit -m "feat: adiciona botão de voltar ao topo"

# Feature com descrição
git commit -m "feat: implementa auto-save no formulário

- Salva dados a cada 30 segundos
- Recupera dados ao recarregar página
- Adiciona indicador visual de salvamento"

# Fix com issue
git commit -m "fix: corrige menu mobile que não fechava

Closes #42"

# Breaking change (mudança incompatível)
git commit -m "feat!: altera estrutura da API

BREAKING CHANGE: endpoint /api/users renomeado para /api/usuarios"
```

### 3.4: Boas Práticas

**Fazer:**
- Use verbos no imperativo: "adiciona", "corrige", "atualiza"
- Primeira letra minúscula após o tipo
- Sem ponto final na descrição curta
- Commits atômicos (uma mudança por commit)

**Evitar:**
- Commits muito grandes
- Mensagens genéricas: "fix", "update", "changes"
- Misturar diferentes tipos de mudanças

---

## 4. Versionamento Semântico

### 4.1: Formato (SemVer)

```
MAJOR.MINOR.PATCH

Exemplo: 1.2.3
```

### 4.2: Quando Incrementar

| Versão | Quando Incrementar | Exemplo |
|--------|-------------------|---------|
| **MAJOR** | Mudanças incompatíveis (breaking changes) | 1.0.0 → 2.0.0 |
| **MINOR** | Novas funcionalidades compatíveis | 1.0.0 → 1.1.0 |
| **PATCH** | Correções de bugs | 1.0.0 → 1.0.1 |

### 4.3: Versões Especiais

- **Alpha**: `1.0.0-alpha.1` (desenvolvimento inicial)
- **Beta**: `1.0.0-beta.1` (testes)
- **RC**: `1.0.0-rc.1` (release candidate)

### 4.4: Criar Tags

```bash
# Tag simples
git tag v1.0.0

# Tag anotada (recomendado)
git tag -a v1.0.0 -m "Release v1.0.0 - Versão inicial"

# Tag com descrição detalhada
git tag -a v1.1.0 -m "Release v1.1.0 - Novas funcionalidades

Adicionado:
- Sistema de notificações
- Auto-save no formulário
- Menu mobile aprimorado"

# Push de tags
git push origin v1.0.0        # Tag específica
git push origin --tags         # Todas as tags
```

### 4.5: Listar e Gerenciar Tags

```bash
# Listar tags
git tag

# Listar tags com padrão
git tag -l "v1.*"

# Ver detalhes da tag
git show v1.0.0

# Deletar tag local
git tag -d v1.0.0

# Deletar tag remota
git push origin --delete v1.0.0

# Fazer checkout de uma tag
git checkout v1.0.0
```

---

## 5. Workflow Completo

### 5.1: Desenvolvimento de Nova Feature

```bash
# 1. Atualizar develop
git checkout develop
git pull origin develop

# 2. Criar feature branch
git checkout -b feature/sistema-busca

# 3. Desenvolver...
# (fazer alterações nos arquivos)

# 4. Commits atômicos
git add js/search.js
git commit -m "feat: adiciona lógica de busca"

git add css/components.css
git commit -m "style: adiciona estilos do campo de busca"

git add index.html
git commit -m "feat: integra sistema de busca na home"

# 5. Push da feature
git push -u origin feature/sistema-busca

# 6. Finalizar no develop
git checkout develop
git merge --no-ff feature/sistema-busca
git push origin develop

# 7. Limpar
git branch -d feature/sistema-busca
git push origin --delete feature/sistema-busca
```

### 5.2: Criar Release

```bash
# 1. Criar release branch
git checkout develop
git checkout -b release/v1.1.0

# 2. Atualizar versão nos arquivos
# (package.json, README.md, etc.)

# 3. Commit de preparação
git add .
git commit -m "chore: prepara release v1.1.0"

# 4. Merge em main
git checkout main
git merge --no-ff release/v1.1.0

# 5. Criar tag
git tag -a v1.1.0 -m "Release v1.1.0

Adicionado:
- Sistema de busca
- Filtros avançados

Corrigido:
- Bug no formulário
- Responsividade em tablets"

# 6. Push main com tags
git push origin main --tags

# 7. Merge em develop
git checkout develop
git merge --no-ff release/v1.1.0
git push origin develop

# 8. Limpar
git branch -d release/v1.1.0
```

### 5.3: Hotfix Urgente

```bash
# 1. Criar hotfix da main
git checkout main
git checkout -b hotfix/seguranca-xss

# 2. Corrigir bug
# (fazer alterações)

# 3. Commit da correção
git add .
git commit -m "fix: corrige vulnerabilidade XSS no formulário"

# 4. Merge em main
git checkout main
git merge --no-ff hotfix/seguranca-xss
git tag -a v1.0.1 -m "Hotfix v1.0.1 - Correção de segurança"
git push origin main --tags

# 5. Merge em develop
git checkout develop
git merge --no-ff hotfix/seguranca-xss
git push origin develop

# 6. Limpar
git branch -d hotfix/seguranca-xss
```

---

## 6. Comandos Úteis

### 6.1: Visualização

```bash
# Log bonito
git log --oneline --graph --all --decorate

# Log com detalhes
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit

# Ver diferenças
git diff                    # Mudanças não staged
git diff --staged          # Mudanças staged
git diff branch1 branch2   # Diferença entre branches

# Ver status
git status
git status -s              # Formato curto
```

### 6.2: Desfazer Mudanças

```bash
# Desfazer mudanças em arquivo
git checkout -- arquivo.js

# Desfazer staged
git reset HEAD arquivo.js

# Desfazer último commit (mantém alterações)
git reset --soft HEAD~1

# Desfazer último commit (descarta alterações)
git reset --hard HEAD~1

# Reverter commit (cria novo commit)
git revert abc123
```

### 6.3: Stash (Guardar Temporariamente)

```bash
# Guardar mudanças
git stash

# Guardar com mensagem
git stash save "trabalho em progresso na feature X"

# Listar stashes
git stash list

# Aplicar último stash
git stash pop

# Aplicar stash específico
git stash apply stash@{0}

# Deletar stash
git stash drop stash@{0}
```

### 6.4: Limpeza

```bash
# Ver branches
git branch -a              # Todas
git branch -r              # Remotas

# Deletar branch local
git branch -d nome-branch

# Deletar branch remota
git push origin --delete nome-branch

# Limpar branches deletadas no remoto
git fetch --prune

# Limpar tudo (cuidado!)
git clean -fd
```

---

## Recursos Adicionais

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [GitFlow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Git Documentation](https://git-scm.com/doc)

---

## Checklist de Implementação

- [ ] Repositório criado no GitHub
- [ ] Primeiro commit realizado
- [ ] Branch develop criada
- [ ] .gitignore configurado
- [ ] README.md atualizado
- [ ] Primeira tag v1.0.0 criada
- [ ] GitFlow implementado
- [ ] Padrão de commits semânticos adotado
- [ ] Documentação completa

---

**Última atualização**: 2025-10-31
