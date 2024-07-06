prod-up:
	docker-compose -f docker-compose.prod.yaml up -d --build

prod-down:
	docker-compose -f docker-compose.prod.yaml down

build-dev:
	docker-compose -f docker-compose.dev.yaml up -d --build

dev-down:
	docker-compose -f docker-compose.dev.yaml down