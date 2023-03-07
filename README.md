# crsqlite-js

JavaScript packages to use `cr-sqlite` in the browser, node, react and other JS frameworks & environments.

# Quickstart

## Browser

```
import initWasm from '@vlcn.io/crsqlite-wasm';

const crsqlite = await initWasm('@vlcn.io/crsqlite-wasm/dist/crsqlite.wasm');
const db = await sqlite.open("db-name");
```

## NodeJS

```
import Database from "better-sqlite3";

const db = new Database(":memory:");
import { extensionPath } from "@vlcn.io/crsqlite";
db.loadExtension(extensionPath);
```

## UI

```
```

## Sync

```
```

# Packages

## Storage

- crsqlite: The cr-sqlite loadable extension for use in NodeJS/Deno/Bun. Can be used with the SQLite bindings you currently use.
- crsqlite-wasm: WASM build of CR-SQLite & SQLite for use in the browser

## Sync

- client-websocket: Websocket client to sync the browser's database to a database hosted on a websocket server.
- server-websocket: Websocket server implementation.
- p2p: A peer to peer networking implementation, based on webrtc

## UI

- react: React hooks for driving UI state from database queries

## Other

- xplat-api: interfaces for components that can exist in NodeJS or the Browser.
- [client-core](./client-core): Networking code that is common across all client implementations
- client-server-common: Networking code that is common to the client and server
- node-tests: 
- sandbox: 
- server-core: Network code that is common across all server implementations
- node-allinone: convenience package for loading and using crsqlite in nodejs
  - Can also be used as a run time loadable extension in `nodejs` with whatever `sqlite` bindings you already use. See the `node-allinone` readme for more details
- tsbuild-all: convenient package for building all other packages