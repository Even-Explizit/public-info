# Stage 1: Build static site (/, /projects, /about)
FROM node:18-slim AS builder
WORKDIR /app

ARG PUBLIC_URL=https://explizit.no
ENV PUBLIC_URL=$PUBLIC_URL
ENV CI=true

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
# CRA 5: ensure ajv v8 is hoisted for webpack/schema-utils
RUN npm install ajv@8.12.0 ajv-keywords@5.1.0 --legacy-peer-deps
RUN npm run build

# Stage 2: Serve with nginx (single container)
FROM nginx:alpine
RUN apk update && apk upgrade --no-cache && apk add --no-cache curl

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD curl -f http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
