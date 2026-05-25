# Crimson Blink Games — URLs para Play Console e AdMob

Guia salvo para quando você for trocar o site oficial na Google Play.

**Última atualização:** maio de 2026

---

## Site no ar hoje

### Netlify (novo — usar na Play quando decidir trocar)

| Uso | URL |
|-----|-----|
| **Site (produção)** | https://visionary-lamington-97d4d1.netlify.app |
| Página do jogo | https://visionary-lamington-97d4d1.netlify.app/game/ |
| Política de privacidade | https://visionary-lamington-97d4d1.netlify.app/privacy/ |
| **app-ads.txt (AdMob)** | https://visionary-lamington-97d4d1.netlify.app/app-ads.txt |

**Não use** URLs com código no meio (preview), ex.:
`https://6a14477c5acd30be8a00c92e--visionary-lamington-97d4d1.netlify.app/...`

### Vercel (atual — Play pode estar usando esta)

| Uso | URL |
|-----|-----|
| Site | https://black-eye-games.vercel.app |
| Jogo | https://black-eye-games.vercel.app/game/ |
| Privacidade | https://black-eye-games.vercel.app/privacy/ |
| app-ads.txt | https://black-eye-games.vercel.app/app-ads.txt |

---

## app-ads.txt (conteúdo exato)

```
google.com, pub-8869218377283595, DIRECT, f08c47fec0942fa0
```

Publisher ID AdMob: `pub-8869218377283595`

---

## Google Play Console — o que colocar (Netlify)

1. App **Illuminati Control Game**
2. **Presença na loja** → detalhes / ficha da loja
3. **Site do desenvolvedor:**
   ```
   https://visionary-lamington-97d4d1.netlify.app
   ```
4. **Política de privacidade:**
   ```
   https://visionary-lamington-97d4d1.netlify.app/privacy/
   ```
5. Salvar / enviar alteração

---

## AdMob — depois de mudar na Play

1. Abrir o app no AdMob
2. Verificar **app-ads.txt** de novo
3. Aguardar **24 a 72 horas**
4. URL que o Google verifica (mesma da Play):
   ```
   https://visionary-lamington-97d4d1.netlify.app/app-ads.txt
   ```

---

## Renomear URL Netlify (opcional — Crimson Blink)

Netlify → projeto → **Site configuration** → **Domain management** → **Change site name**

Sugestão: `crimson-blink-games` → URL vira `https://crimson-blink-games.netlify.app`

Se renomear, use a **nova** URL em todos os campos acima (Play + AdMob).

---

## Repositório e deploy

| Item | Valor |
|------|--------|
| GitHub | https://github.com/avieirasouza7-alt/black-eye-games |
| Build | `npm run build` |
| Pasta publicada | `dist` |
| Netlify team | Crimson Blink Games |

---

## Contato no site

- E-mail: avieirasouza7@gmail.com
- Telefone: (83) 9 8784-0545
- Play (pacote): com.blackeyegames.illuminaticontrol

---

## Checklist no dia da mudança

- [ ] Abrir `https://visionary-lamington-97d4d1.netlify.app/app-ads.txt` (só uma linha)
- [ ] Abrir `/privacy/` e `/game/`
- [ ] Atualizar Play Console (site + privacidade)
- [ ] Verificar de novo no AdMob
- [ ] Esperar 24–72 h
- [ ] Vercel pode ficar ligada (backup); não é obrigatório desligar

---

Quando for mudar na Play, peça no chat: *“vamos usar a Netlify na Play”* — este arquivo está no projeto.
