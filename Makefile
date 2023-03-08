git-deps = deps/wa-sqlite deps/emsdk
node-deps = ./packages/crsqlite-wasm/node_modules
wasm-file = ./packages/crsqlite-wasm/dist/crsqlite.wasm
tsbuildinfo = ./tsbuild-all/tsconfig.tsbuildinfo

all: $(wasm-file) $(tsbuildinfo)

$(git-deps):
	git submodule update --init --recursive

$(node-deps): $(git-deps)
	pnpm install

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

$(tsbuildinfo): $(wasm-file) FORCE
	cd tsbuild-all && pnpm run build

FORCE:

.PHONY: all
