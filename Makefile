image := testcafe
image_sentinel := SENTINEL

build_sources := \
	Dockerfile \
	package.json \
	package-lock.json \
	index.html \
	destination.html \
	test.js \
	test.sh

.PHONY: clean
clean:
	rm -rf public/*
	rm -f $(image_sentinel)

.PHONY: test
test: $(image_sentinel)
	docker run --rm \
		--entrypoint=sh \
		$(image) \
		test.sh

$(image_sentinel): $(build_sources)
	docker build -t $(image) .
	@touch $(image_sentinel)
