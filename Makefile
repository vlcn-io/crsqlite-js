git-deps = deps/wa-sqlite deps/emsdk
$(git-deps):
	git submodule update --init --recursive

node-deps = ./packages/crsqlite-wasm/node_modules
$(node-deps): $(git-deps)
	pnpm install

wasm-file = ./packages/crsqlite-wasm/dist/crsqlite.wasm
$(wasm-file): $(git-deps)
	mkdir -p packages/crsqlite-wasm/dist
	cd deps/emsdk; \
	./emsdk install latest; \
	./emsdk activate latest; \
	source ./emsdk_env.sh; \
	cd ../wa-sqlite; \
	make; \
	cp dist/wa-sqlite-async.wasm ../../packages/crsqlite-wasm/dist/crsqlite.wasm; \
	cp dist/wa-sqlite-async.mjs ../../packages/crsqlite-wasm/src/crsqlite.mjs

tsbuildinfo = ./tsbuild-all/tsconfig.tsbuildinfo
$(tsbuildinfo): $(wasm-file)
	cd tsbuild-all && pnpm run build

all: $(wasm-file) $(tsbuildinfo)

.PHONY: all
