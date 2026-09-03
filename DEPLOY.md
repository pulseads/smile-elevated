# Publicando o site do Dr. Igor Lopardi

Este pacote contém o código-fonte completo do site. Siga as instruções abaixo para publicar em uma plataforma de hospedagem.

## Pré-requisitos

- Node.js 20+ (recomendado 22 LTS)
- npm, yarn, pnpm ou bun
- Conta na plataforma de deploy escolhida

## Instalação local

```bash
npm install
npm run dev
```

O servidor de desenvolvimento inicia em `http://localhost:8080`.

## Build de produção

```bash
npm run build
```

O build gera a pasta `dist/` e os artefatos SSR/Nitro em `dist/server/`.

## Plataformas recomendadas

### Vercel

1. Crie um novo projeto e importe o repositório Git.
2. Framework preset: escolha **Other** ou deixe em branco.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy.

### Netlify

1. Importe o repositório.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy.

### Cloudflare Pages

1. Conecte o repositório.
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Deploy.

> O projeto usa o preset `cloudflare-module` do Nitro por padrão, mas pode ser ajustado no `vite.config.ts`/`app.config.ts` conforme a plataforma.

## Variáveis de ambiente

Este site é estático e não requer variáveis de ambiente obrigatórias. Se futuramente integrar Lovable Cloud/Supabase, as chaves correspondentes devem ser configuradas no painel da plataforma de deploy.

## Estrutura importante

- `src/routes/` — páginas e rotas (TanStack Router)
- `src/components/landing/` — componentes da landing page
- `src/styles.css` — design tokens e estilos globais
- `public/` — favicon e robots.txt
- `src/assets/*.asset.json` — ponteiros para imagens hospedadas no CDN da Lovable

## Nota sobre assets

As imagens do site (`src/assets/*.asset.json`) são ponteiros para o CDN da Lovable (`/__l5e/assets-v1/...`). Se você publicar fora do ecossistema Lovable, essas URLs continuarão funcionando, mas recomenda-se, a longo prazo, migrar as imagens para um CDN próprio ou para a pasta `public/` do projeto.
