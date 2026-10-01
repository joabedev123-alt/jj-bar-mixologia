# JJ Bar & Barista Academy — Landing Page

Landing page de vendas do Curso Completo de Bartender e Barista, com checkout
direto na Hotmart.

## Stack

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Bootstrap Icons.

## Rodando o projeto

```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # build de produção (pasta dist/)
npm run preview   # pré-visualizar o build de produção
```

## Antes de publicar

1. **Link de checkout** — edite `CHECKOUT_URL` em
   [src/lib/constants.ts](src/lib/constants.ts). Todos os botões da página
   usam essa mesma constante.
2. **Imagens** — adicione os arquivos descritos em
   [public/images/README.md](public/images/README.md). Enquanto não forem
   adicionadas, um placeholder elegante é exibido no lugar.
3. **Vídeo de vendas** — configure `VIDEO_EMBED_URL` em
   [src/components/sections/VideoSales.tsx](src/components/sections/VideoSales.tsx).
4. **Redes sociais** — atualize as URLs em `SOCIAL` dentro de
   [src/lib/constants.ts](src/lib/constants.ts) (atualmente com `#`).
5. **Pixel / GTM / Analytics** — os blocos comentados já estão prontos em
   [index.html](index.html); basta descomentar e inserir os IDs.
6. **Favicon** — [public/favicon.svg](public/favicon.svg) usa o monograma
   "JJ"; substitua pelo arquivo oficial se houver um.

## Estrutura

```
src/
  components/
    layout/     Navbar, TopBar, Footer, CTA fixo mobile
    sections/   Cada seção da página de vendas
    ui/         Botão de CTA, títulos de seção, imagem com fallback, etc.
  lib/
    constants.ts   Conteúdo textual, preços, link de checkout, redes sociais
```
