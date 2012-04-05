.PHONY: all
all: test

# tests
.PHONY: test hint
test: hint
	node_modules/.bin/nodeunit ./test

hint:
	node_modules/.bin/jshint n7m.js
