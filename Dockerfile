version: '3'
services:
  portfolio:
    container_name: my-portfolio
    build: .
    restart: always
    # Порт 8085, как мы обсуждали раньше, чтобы не конфликтовать
    ports:
      - "8085:80"
    networks:
      - portfolio_net

networks:
  portfolio_net:
    external: true
    # Указываем имя, которое Portainer/Docker реально создал для твоего стека
    name: master-stack_default
