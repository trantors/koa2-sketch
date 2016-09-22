
lint:
	@./node_modules/.bin/eslint -c .eslintrc.json start.js ./server/*.js ./server/**/*.js --fix

.PHONY: build dev prd clean lint