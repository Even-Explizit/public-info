# Deploy explizit.no — steg for steg

## Velg én produksjonsløsning

Du kan **ikke** ha både GitHub Pages og Docker-container på **samme domene** (`explizit.no`) samtidig. Velg én:

| Løsning | Kostnad | Webhuset | Når |
|---------|---------|----------|-----|
| **GitHub Pages** (anbefalt) | Gratis hosting | Kun DNS | Standard for `/`, `/projects`, `/about` |
| **Docker på VPS** | VPS koster | Server hos Webhuset | Kun hvis du har VPS og vil kjøre egen nginx |

**Anbefaling i dag:** GitHub Pages for live site + Docker lokalt for testing.

---

## 1. Deploy med GitHub Pages (gratis)

Koden ligger allerede i [github.com/Even-Explizit/public-info](https://github.com/Even-Explizit/public-info).  
Ved hver push til `main` bygger og publiserer GitHub Actions automatisk (`.github/workflows/deploy.yml`).

### Steg A — Aktiver Pages på GitHub

1. Gå til repoet → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. **Custom domain:** skriv `explizit.no` → **Save**
4. Vent til GitHub viser at domenet er verifisert (kan ta opptil 24 t etter DNS)

### Steg B — Første deploy (hvis ikke kjørt)

1. Gå til **Actions** → workflow **Deploy explizit.no**
2. Klikk **Run workflow** → branch `main` → **Run**
3. Vent til grønn hake (ca. 2–4 min)
4. Sjekk at `build/` er publisert under **Settings → Pages**

### Steg C — DNS hos Webhuset (kopier denne listen)

Webhuset Kundesenter → **DNS-oppføringer** for `explizit.no`.

#### SLETT disse (peker til gammelt webhotell `46.226.10.72`)

| Type | Oppføring | Handling |
|------|-----------|----------|
| A | `*.explizit.no` | **Slett** (wildcard blokkerer GitHub) |
| A | `explizit.no` → 46.226.10.72 | **Slett** |
| A | `www.explizit.no` → 46.226.10.72 | **Slett** |

`ftp.explizit.no` → 46.226.10.72: **behold** hvis du fortsatt bruker FTP hos Webhuset.

#### BEHOLD uendret (e-post)

| Type | Oppføring |
|------|-----------|
| CNAME | `autoconfig.explizit.no` → mailconfig.webhuset.no |
| CNAME | `autodiscover.explizit.no` → mailconfig.webhuset.no |
| MX | `explizit.no` → se-mx01 / se-mx02.webhuset.no |
| TXT | `explizit.no` → SPF |
| NS | (vanligvis ikke endre) |

#### LEGG TIL (GitHub Pages)

| Type | Oppføring / Host | Verdi |
|------|------------------|--------|
| A | `explizit.no` (eller `@`) | `185.199.108.153` |
| A | `explizit.no` | `185.199.109.153` |
| A | `explizit.no` | `185.199.110.153` |
| A | `explizit.no` | `185.199.111.153` |
| CNAME | `www.explizit.no` | `even-explizit.github.io` |

**Merk:** CNAME for `www` må peke til `even-explizit.github.io` — **ikke** `public-info` eller IP-adresse.

#### Etter endring — test (PowerShell)

```powershell
Resolve-DnsName explizit.no -Type A
Resolve-DnsName www.explizit.no -Type CNAME
```

Forventet: A → `185.199.108.x` (ikke `46.226.10.72`). CNAME www → `even-explizit.github.io`.

### Steg D — HTTPS

Når DNS er grønn i GitHub Pages → slå på **Enforce HTTPS**.

### De 3 sidene

React Router håndterer:

- `https://explizit.no/`
- `https://explizit.no/projects`
- `https://explizit.no/about`

`scripts/post-build.js` lager `404.html` slik at direkte lenker fungerer på GitHub Pages.

### Privat repo

GitHub Pages fra Actions på **privat** repo krever GitHub-plan som støtter det (Pro/Team for org). Har du ikke det, bruk **Cloudflare Pages** (også gratis) med samme build-kommando som i workflow.

---

## 2. Docker — kun lokal test eller VPS

Docker er **ikke** nødvendig for gratis produksjon med GitHub Pages.

### Lokalt (test før push)

```powershell
cd "c:\Users\even-\Desktop\Public-info"
docker compose up -d --build
```

Åpne [http://localhost:8080](http://localhost:8080) — samme 3 sider.

### Produksjon på Webhuset VPS (betalt)

Kun hvis du har VPS med Docker:

```powershell
docker compose build --build-arg PUBLIC_URL=https://explizit.no
docker compose up -d
```

Pek domenet (reverse proxy / port 80) til containeren. Da bruker du **ikke** GitHub Pages for `explizit.no`.

---

## 3. Oppdatere siden senere

```powershell
git add .
git commit -m "Beskriv endringen"
git push origin main
```

Actions deployer automatisk. Ingen manuell upload til Webhuset.

---

## Feilsøking

| Problem | Løsning |
|---------|---------|
| 404 på `/projects` eller `/about` | Sjekk at workflow kjørte og `post-build.js` er med |
| Domene ikke verifisert | Vent på DNS (opptil 24t), sjekk A-records |
| Actions feiler | **Actions** → åpne feilet run → les logg (ofte `npm ci`) |
| Feil GitHub-konto ved push | Logg inn med bruker som har tilgang til `Even-Explizit` |
