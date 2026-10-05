# 🤝 Guia de Contribuição e Manutenção — EMEI Vivendo e Aprendendo

Este guia destina-se a desenvolvedores e administradores que realizarão a manutenção, atualização de conteúdos ou substituição de dados provisórios do site da **EMEI Vivendo e Aprendendo**.

---

## 🔄 Checklist de Substituição de Dados Temporários

Como este projeto foi gerado com assets provisórios para homologação de layout, siga o roteiro abaixo antes do lançamento definitivo em produção:

### 1. Imagens e Fotos
- **Onde ficam:** `src/assets/images/` ou `public/images/`.
- **Ação:** Substitua as imagens do Unsplash por fotos oficiais da escola, garantindo autorização do uso de imagem das crianças.
- **Formatos recomendados:** `.webp` ou `.jpg` otimizados (resolução máxima recomendada no banner: 1920x1080px; cards: 800x600px).

### 2. Logomarca
- **Onde fica:** `src/assets/logo.svg`.
- **Ação:** Substituir pelo arquivo vetorizado da logo oficial da escola.

### 3. Texto Institucional e Histórico
- **Onde fica:** `src/sections/About.jsx` (ou arquivo de dados correspondente).
- **Ação:** Atualizar o histórico da EMEI, missão, visão e projeto político-pedagógico.

### 4. Corpo Docente e Colaboradores
- **Onde fica:** `src/data/staff.js` (ou `src/sections/Staff.jsx`).
- **Ação:** Atualizar o array de colaboradores com nomes reais, fotos oficiais e setores corretos.

### 5. Google Maps e Endereço
- **Onde fica:** `src/sections/Location.jsx`.
- **Ação:** Obter o código de incorporação (iframe) do Google Maps com a localização exata da escola e substituir na propriedade `src` da tag `<iframe>`.

---

## 💻 Padrões de Código

- Utilizar **JavaScript (ES6+)** limpo e modularizado.
- Manter componentes em `src/components/` com responsabilidade única.
- Nomear arquivos de componentes em PascalCase (ex: `HeroBanner.jsx`, `StaffCard.jsx`).
- Testar a responsividade em tamanhos de tela mobile (360px+), tablet (768px+) e desktop (1024px+).

---

## 🧪 Verificação de Build

Sempre execute o comando de verificação de build antes de enviar novos commits:

```bash
npm build
```

Certifique-se de que a pasta `dist/` é gerada sem nenhum aviso de erro no console.
