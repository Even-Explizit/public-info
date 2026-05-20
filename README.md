# explizit.no — public presentation

Selvstendig React-site for **explizit.no**: hjem, prosjekter og om (norsk / engelsk).

Repo: [github.com/Even-Explizit/public-info](https://github.com/Even-Explizit/public-info)

## Sider

| Sti | Innhold |
|-----|---------|
| `/` | Hjem + utvalgte prosjekter |
| `/projects` | Alle prosjekter |
| `/about` | Om Explizit AS |

## Docker (én container)

```powershell
docker compose up -d --build
```

Åpne [http://localhost:8080](http://localhost:8080).

Stopp: `docker compose down`

## Utvikling (uten Docker)

```powershell
npm install --legacy-peer-deps
npm start
```

Åpne [http://localhost:3000](http://localhost:3000).

## Produksjonsbuild

```powershell
npm run build
```

Output: `build/`

## Push til GitHub

```powershell
git remote add origin https://github.com/Even-Explizit/public-info.git
git push -u origin main
```

GitHub → **Settings → Pages** → Source: **GitHub Actions** → Custom domain: `explizit.no`.

DNS hos Webhuset: se [DEPLOY.md](./DEPLOY.md).

## Struktur

```
src/
  logo.png       Logo (Header)
  pages/         HomePage, ProjectsPage, AboutPage
  components/    Header
  layouts/       PublicLayout
  data/          projects.js
  context/       UIContext (språk + tema)
public/          CNAME, _redirects
.github/         deploy workflow
```

## Innhold

Rediger `src/data/projects.js` og sidene under `src/pages/`.
