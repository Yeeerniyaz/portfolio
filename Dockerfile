# Этап 1: Сборка (используем легкий alpine образ)
FROM node:22-alpine as builder
WORKDIR /app

# Сначала копируем только файлы зависимостей для кэширования слоев
COPY package*.json ./
RUN npm install

# Копируем остальной код и собираем проект
COPY . .
RUN npm run build

# Этап 2: Production (раздаем статику через Nginx)
FROM nginx:stable-alpine

# Копируем собранный проект из первого этапа
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем твой кастомный конфиг для поддержки React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
