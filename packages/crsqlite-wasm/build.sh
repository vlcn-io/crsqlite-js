#! /bin/bash

mkdir -p dist

cd ../../deps/emsdk
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh

cd ../wa-sqlite
make

cp dist/wa-sqlite-async.wasm ../../packages/crsqlite-wasm/dist/crsqlite.wasm
cp dist/wa-sqlite-async.mjs ../../packages/crsqlite-wasm/src/crsqlite.mjs

# make debug
cp debug/wa-sqlite-async.wasm ../../packages/crsqlite-wasm/dist/crsqlite.wasm
cp debug/wa-sqlite-async.mjs ../../packages/crsqlite-wasm/src/crsqlite.mjs