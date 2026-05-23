# Crimson Blink Games — Site oficial

Site **100% estático** do estúdio **Crimson Blink Games**, pronto para Google Play Console e validação AdMob (Vercel, Netlify ou qualquer host de arquivos estáticos).

## URLs após o deploy

| URL | Conteúdo |
|-----|----------|
| `/` | Página inicial |
| `/game/` | Illuminati Control Game |
| `/privacy/` | Política de Privacidade |
| `/app-ads.txt` | Arquivo AdMob (texto puro, sem React) |

## AdMob — app-ads.txt (crítico)

Arquivo em `public/app-ads.txt`, servido na raiz do domínio:

```
https://SEU_DOMINIO/app-ads.txt
```

Conteúdo exato:

```
google.com, pub-8869218377283595, DIRECT, f08c47fec0942fa0
```

## Desenvolvimento local

```bash
npm run dev
```

Abre `http://localhost:3000` com os arquivos em `public/`.

## Build de produção

```bash
npm run build
npm run preview
```

Copia `public/` → `dist/` (pasta publicada na Vercel/Netlify).

## Deploy

### Vercel

- Build command: `npm run build`
- Output directory: `dist`
- Ou publique diretamente a pasta `public/` (sem build)

### Netlify

Configurado em `netlify.toml` (`publish = "dist"`).

## Google Play

- **Site do desenvolvedor:** URL do deploy
- **Política de privacidade:** `https://SEU_DOMINIO/privacy/`
- **Google Play:** edite o link em `public/game/index.html` com o ID real do pacote

## Estrutura

```
public/
  app-ads.txt      ← AdMob (não alterar o conteúdo)
  index.html
  game/index.html
  privacy/index.html
  css/site.css
  favicon.svg
```

## Contato

avieirasouza7@gmail.com
