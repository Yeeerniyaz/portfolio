# Этап 1: Сборка (Строитель)
FROM node:18-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Этап 2: Запуск (Сервер)
FROM nginx:alpine
# Копируем собранные файлы из первого этапа
COPY --from=builder /app/dist /usr/share/nginx/html
# Открываем порт
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]