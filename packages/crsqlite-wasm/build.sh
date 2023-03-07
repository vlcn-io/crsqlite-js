#! /bin/bash

mkdir -p dist

cd ../../../deps/emsdk
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh

cd ../wa-sqlite
make

cp dist/wa-sqlite-async.wasm ../../js/browser/wa-crsqlite/dist/crsqlite.wasm
cp dist/wa-sqlite-async.mjs ../../js/browser/wa-crsqlite/src/crsqlite.mjs

# make debug
# cp debug/wa-sqlite-async.wasm ../../js/browser/wa-crsqlite/dist
# cp debug/wa-sqlite-async.mjs ../../js/browser/wa-crsqlite/src
