# My Personal Blog (Astro)

## Prerequisites

- Node.js 20+
- pnpm
- Docker Desktop (for container run)

## Environment Variables

Create `.env` in project root:

```env
PUBLIC_SUPABASE_URL=https://test.supabase.co
PUBLIC_SUPABASE_ANON_KEY=test
```

You can copy from `.env.example`.

## Run Locally

```bash
pnpm install
pnpm run dev
```

Open: `http://localhost:4321`

## Build Locally

```bash
pnpm run build
pnpm run preview
```

Open: `http://localhost:4321`

## Run with Docker (Compose)

```bash
docker compose up -d --build
```

Open: `http://localhost:8080`

Stop:

```bash
docker compose down
```

## Run with Docker (Manual)

```bash
docker build \
  --build-arg PUBLIC_SUPABASE_URL=$PUBLIC_SUPABASE_URL \
  --build-arg PUBLIC_SUPABASE_ANON_KEY=$PUBLIC_SUPABASE_ANON_KEY \
  -t smn-blog:latest .

docker run -d --name smn-blog -p 8080:80 smn-blog:latest
```

Stop/remove:

```bash
docker stop smn-blog
docker rm smn-blog
```
