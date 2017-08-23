all: runserver

deploy:
	jekyll build

runserver:
	jekyll serve --trace -w -H 0.0.0.0 -P 8081

clean:
	rm -rf _site
