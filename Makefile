SHELL := /bin/bash
.ONESHELL:

.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


docker:
	source env.sh && docker-compose up

prodapi:
	source env.sh && npm run start

devapi:
	source env.sh && npm run dev	

db.connect: ## connect to postgres
	source env.sh && docker-compose exec postgres psql -U ${DBUSER} --db ${DBNAME}

migration.create:
	source env.sh && npm run db:generate db/migration/$(NAME)

migration.upgrade:
	source env.sh && npm run db:upgrade

migration.downgrade:
	source env.sh && npm run db:downgrade