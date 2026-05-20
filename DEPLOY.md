# Deploy til explizit.no

## Docker (VPS / lokal)

Én container med nginx + statisk build:

```powershell
docker compose up -d --build
```

På VPS: pek reverse proxy (eller port 80) til containeren. Sett `PUBLIC_URL=https://explizit.no` ved build:

```powershell
docker compose build --build-arg PUBLIC_URL=https://explizit.no
```

---

## GitHub Pages + Webhuset DNS

1. Push dette repoet til GitHub (`main`).
2. **Settings → Pages** → Source: **GitHub Actions** → Custom domain: `explizit.no`.
3. Webhuset Kundesenter → DNS for `explizit.no`:

| Type | Host | Verdi |
|------|------|--------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `even-explizit.github.io` |

4. Behold MX-poster hvis du bruker e-post hos Webhuset.
5. Slå på **Enforce HTTPS** når DNS er verifisert.

Ved push til `main` deployer workflowen automatisk (ca. 1–3 min).

## Cloudflare Pages (privat repo)

- Build command: `npm ci && npm run build`
- Output: `build`
- Custom domain: `explizit.no`
