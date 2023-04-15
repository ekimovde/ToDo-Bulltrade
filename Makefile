.PHONY: build start stop down

build:
	docker build -t todo-bulltrade .

start:
	docker-compose up -d && echo Server is running at: http://localhost:8080

stop:
	docker-compose stop

down:
	docker-compose down
