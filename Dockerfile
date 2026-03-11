version: '3'
services:
  portfolio:
    container_name: my-portfolio
    build: .
    restart: always
    ports:
      - "8085:80"
    networks:
      - proxy_network  # Используем логическое имя внутри файла

networks:
  proxy_network:
    external: true
    name: master-stack_default  # Указываем точное имя, которое требует ошибка
