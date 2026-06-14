# Vórtice — sitio de propuesta municipal

Presentación scroll basada en `Vortice-Propuesta-Municipal.md`, con estilos de la presentación ejecutiva.

## Desarrollo

Desde la raíz del repo:

```bash
pnpm --dir docs/sales/site install --ignore-workspace   # solo la primera vez
pnpm dev:sales
```

O desde esta carpeta:

```bash
pnpm install --ignore-workspace
pnpm dev
```

Abre http://localhost:5175

## Build estático

```bash
pnpm build
pnpm preview
```

El output queda en `dist/` (rutas relativas, listo para servir como sitio estático).

## Publicar (solo este proyecto, dentro del monorepo)

El sitio vive en `docs/sales/site/` pero se puede desplegar **sin** publicar el resto de Vórtice.

### Opción A — GitHub Pages (recomendada)

1. Sube el repo a GitHub (si aún no tiene remote).
2. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Haz push a `main`. El workflow `.github/workflows/sales-site-pages.yml` compila solo `docs/sales/site` y publica el contenido de `dist/`.
4. La URL será `https://<usuario>.github.io/<repo>/` (o tu dominio custom en Pages).

Solo se redeploya cuando cambian archivos bajo `docs/sales/site/`.

Deploy manual: **Actions → Deploy sales site → Run workflow**.

### Opción B — Vercel

1. Importa el repo en [vercel.com](https://vercel.com).
2. **Root Directory:** `docs/sales/site`
3. Framework: Vite (detecta `vercel.json`).
4. Deploy.

### Opción C — Repo aparte (opcional)

Si prefieres un repositorio solo con la presentación:

```bash
git subtree split --prefix=docs/sales/site -b sales-site-only
mkdir ../vortice-sales-site && cd ../vortice-sales-site
git init && git pull ../vortice sales-site-only
git remote add origin git@github.com:TU_USUARIO/vortice-sales-site.git
git push -u origin main
```

Luego conecta ese repo a Vercel o GitHub Pages (sin subcarpeta).

### Build local (preview antes de publicar)

```bash
pnpm install --ignore-workspace
pnpm build
pnpm preview
```
