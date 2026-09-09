# Link na Bio — Mockup / Template white-label

Template de página "link na bio" (estilo linktree) para reutilizar com clientes.
HTML + CSS + JS estáticos, coluna mobile centralizada, deploy no GitHub Pages.

Cliente: **Navegar Beach** (moda praia).

## Como usar para um novo cliente

1. Duplique a pasta do projeto (ex: `nome-do-cliente-lp/`).
2. Em `styles.css`, ajuste **apenas** o bloco `PALETA DO CLIENTE` no `:root`
   para casar com a marca do cliente:
   - `--bg-page` / `--bg` — fundo
   - `--card` / `--card-2` / `--card-dark` — cards
   - `--text` / `--text-dim` / `--text-mute` — textos
   - `--accent` / `--accent-2` — cor de marca (borda da foto, ícone do CTA,
     topo do card de podcast)
   - `--wa` / `--wa-2` — verde do card de WhatsApp (normalmente fixo)
3. Troque textos, links e as 12 imagens (ver tabela abaixo).

## Estrutura

```text
leticia-vaz-lp/
├── index.html   # Estrutura da página
├── styles.css   # Tema escuro / layout mobile
├── script.js    # Arraste dos carrosséis no desktop
└── .github/workflows/deploy.yml  # Deploy GitHub Pages
```

## Placeholders de imagem

Cada área de imagem está marcada com um bloco tracejado numerado `IMAGEM N`.
Substitua o `<div class="... img-ph" data-img="N">...</div>` por uma `<img>`.

| Nº | Onde aparece | Conteúdo esperado |
|----|--------------|-------------------|
| 1  | Topo / perfil | Foto de perfil da Letícia Vaz |
| 2  | Carrossel "Como posso te ajudar hoje" — card 1 | Capa "10 Estratégias de Marketing" |
| 3  | Carrossel "Como posso te ajudar hoje" — card 2 | Capa "TikTok: Estratégia e Vendas" |
| 4  | Carrossel "Como posso te ajudar hoje" — card 3 | Capa "Planejamento Estratégico de Negócio" |
| 5  | Link card "Meu livro" | Miniatura do livro/disco |
| 6  | Link card "LinkCommerce" | Logo LinkCommerce |
| 7  | Card Spotify | Capa do episódio do podcast LV TALKS |
| 8  | Feed Instagram — post 1 | Foto de post do Instagram |
| 9  | Feed Instagram — post 2 | Foto de post do Instagram |
| 10 | Carrossel "Meus produtos" — card 1 | Capa "10 Estratégias de Marketing" |
| 11 | Carrossel "Meus produtos" — card 2 | Capa "TikTok: Estratégia e Vendas" |
| 12 | Carrossel "Meus produtos" — card 3 | Capa "Planejamento Estratégico de Negócio" |

## Links a preencher

Todos os `href="#"` são provisórios: redes sociais, botões "VER DETALHES",
CTA do quiz, livro na Amazon, LinkCommerce, episódio do Spotify e os dois WhatsApp.

## Rodar localmente

```bash
npx serve .
```
