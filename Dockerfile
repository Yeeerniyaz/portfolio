# ==========================================
# STAGE 1: Сборка проекта (Build)
# ==========================================
FROM node:20-alpine as build
WORKDIR /app

# Копируем манифесты и ставим зависимости (кэшируется слоем)
COPY package*.json ./
RUN npm ci

# Копируем весь код и собираем продакшен-билд
COPY . .
RUN npm run build

# ==========================================
# STAGE 2: Раздача через Nginx (Production)
# ==========================================
FROM nginx:alpine

# Удаляем дефолтный конфиг Nginx и ставим наш
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем только папку dist из первого этапа
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]