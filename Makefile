STATES_TYPES_BIN = node_modules/asyncmachine/tools/states-to-types.js
MOCHA = node_modules/.bin/mocha

compile:
	node_modules/.bin/tsc --pretty --noEmit

compile-watch:
	node_modules/.bin/tsc --pretty --watch --noEmit

build:
	node_modules/.bin/tsc 

build-watch:
	node_modules/.bin/tsc --watch

dist:
	webpack

dist-watch:
	webpack --watch

dist-opt:
	webpack --optimize-minimize

format:
	prettier --single-quote --no-semi --write src/**.ts
	prettier --single-quote --no-semi --write src/**/*.ts
	prettier --single-quote --no-semi --write src/**/*.tsx

state-types:
	node $(STATES_TYPES_BIN) src/ui/states.js -s
	prettier --single-quote --no-semi --write src/ui/states.js

test:
	$(MOCHA) test/no-ui/

.PHONY: test break build dist
