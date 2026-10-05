# 🏫 EMEI Vivendo e Aprendendo — Website Institucional

[![Build Status](https://img.shields.io/badge/pnpm%20build-passing-brightgreen)](#)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://react.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#)

Este repositório contém o código-fonte da aplicação web completa da **EMEI Vivendo e Aprendendo**. O site foi desenvolvido em **React + Vite** com **JavaScript**, estruturado como uma SPA (Single Page Application) estática, moderna, responsiva e acessível.

---

## 📋 Sumário

- [Visão Geral](#-visão-geral)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades e Seções](#-funcionalidades-e-seções)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Acessibilidade e Usabilidade](#-acessibilidade-e-usabilidade)
- [Guia de Substituição de Conteúdo](#-guia-de-substituição-de-conteúdo)
- [Instalação e Execução](#-instalação-e-execução)
- [Build e Deploy](#-build-e-deploy)
- [Autor](#-autor)
- [Licença](#-licença)

---

## 🎯 Visão Geral

O site foi desenvolvido para atender à comunidade escolar da **EMEI Vivendo e Aprendendo**, oferecendo aos pais, responsáveis e colaboradores um canal claro, intuitivo e organizado sobre a rotina da escola, infraestrutura, corpo docente e diretrizes de matrícula para o **Infantil 4** e **Infantil 5**.

---

## ⚡ Tecnologias Utilizadas

- **[React 18](https://react.dev/)**: Biblioteca para construção de interfaces orientadas a componentes.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida com suporte a Fast Refresh.
- **JavaScript (ES6+)**: Linguagem base sem adição de complexidade de compiladores adicionais.
- **[pnpm](https://pnpm.io/)**: Gerenciador de pacotes rápido e eficiente com gerenciamento por symlinks.
- **CSS3 / Tailwind CSS**: Estilização responsiva com suporte a variáveis de tema e paleta personalizada.

---

## 📍 Funcionalidades e Seções

O site conta com navegação fluida em página única (Single Page) dividida em 6 seções principais:

1. **Início (Hero Banner):**
   - Banner principal com rotação automática e controle manual de imagens.
   - Chamada para ação (CTA) para o período de matrículas.
2. **Sobre:**
   - Apresentação da proposta pedagógica, valores e história da escola.
3. **Matrículas & Turmas:**
   - Tabela e diretrizes de corte etário especificamente organizadas para **Infantil 4** e **Infantil 5**.
   - Horários de funcionamento e divisão dos turnos.
4. **Infraestrutura:**
   - Apresentação dos espaços físicos projetados para segurança e desenvolvimento infantil.
   - Carrossel interativo de fotos dos ambientes escolares.
5. **Colaboradores:**
   - Cards informativos separados por setores (Direção, Corpo Docente, Apoio e Nutrição).
6. **Localização & Contato:**
   - Mapa do Google Maps integrado e área com endereço e canais de atendimento.

---

## 📁 Estrutura do Projeto

```text
emei-vivendo-e-aprendendo/
├── public/                 # Favicon, imagens públicas e manifestos
├── src/
│   ├── assets/             # Logos, ícones e imagens estáticas
│   ├── components/         # Componentes reutilizáveis (Header, Footer, Carousel, Cards)
│   ├── sections/           # Seções da landing page (Hero, About, Infrastructure, etc.)
│   ├── styles/             # Arquivos de CSS global e definição de tokens de cor
│   ├── App.jsx             # Componente principal e orquestrador de seções
│   └── main.jsx            # Ponto de entrada da aplicação React
├── dist/                   # Artefato gerado pelo comando de build
├── index.html              # Template HTML principal configurado em pt-BR
├── package.json            # Dependências e scripts do projeto
└── pnpm-lock.yaml          # Trava de versões das dependências
```

---

## ♿ Acessibilidade e Usabilidade

O projeto foi construído seguindo diretrizes fundamentais de acessibilidade web (WCAG):
- **Navegação por Teclado:** Foco visível e ordem lógica de navegação por `Tab` e `Enter`.
- **Movimento Reduzido:** Suporte à media query `@media (prefers-reduced-motion)` para desativar animações automáticas do banner/carrossel quando solicitado pelo usuário.
- **Internacionalização Base:** Atributo `lang="pt-BR"` e meta tags de viewport e charset adequadamente configurados.

---

## 📌 Guia de Substituição de Conteúdo

> ⚠️ **Atenção:** As imagens e informações atuais são demonstrativas (provenientes do Unsplash e dados genéricos).

Antes do lançamento em produção, realize a substituição dos itens marcados:

- [ ] **Imagens da Escola e Alunos:** Substituir os arquivos temporários do Unsplash no carrossel e na seção de infraestrutura.
- [ ] **Logomarca:** Inserir o vetor/imagem da logo oficial em `src/assets/logo.svg`.
- [ ] **Equipe:** Atualizar fotos, nomes e cargos dos servidores nos cards da seção *Colaboradores*.
- [ ] **Google Maps:** Substituir a URL de busca genérica do iframe pelo embed exato com a chave/endereço real da escola.
- [ ] **Histórico e Contato:** Revisar o texto institucional da aba *Sobre* e dados de e-mail/telefone na seção *Localização*.

---

## 🛠️ Instalação e Execução

### Pré-requisitos
- **Node.js** `>= 18.0.0`
- **pnpm** `>= 8.0.0` (Instale via `npm i -g pnpm` caso não possua)

### Passo a passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/robertdouglasaimon/emei-vivendo-e-aprendendo.git
   cd emei-vivendo-e-aprendendo
   ```

2. **Instalar as dependências:**
   ```bash
   pnpm install
   ```

3. **Iniciar ambiente de desenvolvimento:**
   ```bash
   pnpm dev
   ```
   Acesse a aplicação no navegador em `http://localhost:5173`.

---

## 🚀 Build e Deploy

Para gerar a versão otimizada de produção:

```bash
pnpm build
```

O comando compilará os arquivos estáticos na pasta `/dist`.

### Verificação de Deploy
- **Build Local:** Executado com sucesso via `pnpm build`.
- **Deploy Preview:** Validado com sucesso via `figma make verify-deploy-preview`.

---

## 👨‍💻 Autor

Projeto desenvolvido por **Robert Douglas**.

- **GitHub:** [@robertdouglasaimon](https://github.com/robertdouglasaimon)

---

## 📄 Licença

Este projeto está sob a licença MIT.
