build: ; npm install; mkdir -p bin; browserify -d demo.js -o bin/main.js

clean: ; rm -rf ./bin/*

watch: ; watchify -d demo.js -o bin/main.js;
