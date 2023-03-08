# crsqlite-js

JavaScript packages to use `cr-sqlite` in the browser, node, react and other JS frameworks & environments. Currently in the process of being moved out of https://github.com/vlcn-io/cr-sqlite/tree/main/js to here.

# Quickstart

## Browser

```ts
import initWasm from '@vlcn.io/crsqlite-wasm';

const crsqlite = await initWasm('@vlcn.io/crsqlite-wasm/dist/crsqlite.wasm');
const db = await sqlite.open("db-name");

...

db.close();
```

## NodeJS

```ts
import Database from "better-sqlite3";

const db = new Database(":memory:");
import { extensionPath } from "@vlcn.io/crsqlite";
db.loadExtension(extensionPath);

...

db.close();
```

## React

```ts
function TodoList() {
  const allTodos: readonly Todo[] = useQuery<Todo>(
    ctx,
    "SELECT * FROM todo ORDER BY id DESC"
  ).data;
  
  return <div>{allTodos.map(t => <Todo item={t} />)}</div>;
}
```

## Sync

```ts
import tblrx from "@vlcn.io/rx-tbl";
import startSync, { uuidStrToBytes } from "@vlcn.io/client-websocket";

const rx = tblrx(db);
const sync = await startSync(`ws://${window.location.hostname}:8080/sync`, {
  localDb: db,
  remoteDbId: uuidStrToBytes(dbid),
  create: {
    schemaName: "todo-mvc",
  },
  rx,
});
```

# Packages

## Storage

- [crsqlite](https://github.com/vlcn-io/cr-sqlite): The cr-sqlite loadable extension for use in NodeJS/Deno/Bun. Can be used with the SQLite bindings you currently use.
- [crsqlite-wasm](./packages/crsqlite-wasm/README.md): WASM build of CR-SQLite & SQLite for use in the browser

## Sync

- [client-websocket](./packages/client-websocket/README.md): Websocket client to sync the browser's database to a database hosted on a websocket server.
- [server-websocket](./packages/server-websocket/README.md): Websocket server implementation.
- p2p: A peer to peer networking implementation, based on webrtc

## UI

- [react](./packages/react): React hooks for driving UI state from database queries

## Other

- [xplat-api](./packages/xplat-api): interfaces for components that can exist in NodeJS or the Browser.
- [client-core](./packages/client-core): Networking code that is common across all client implementations
- [client-server-common](./packages/client-server-common/README.md): Networking code that is common to the client and server
- [server-core](./packages/server-core): Network code that is common across all server implementations
- [node-allinone](./packages/node-allinone): convenience package for loading and using crsqlite in nodejs
  - Can also be used as a run time loadable extension in `nodejs` with whatever `sqlite` bindings you already use. See the `node-allinone` readme for more details
- [tsbuild-all](./tsbuild-all): convenient package for building all other packages

## Integration Tests

- node-tests: 
- xplat-tests:
- browser-tests:
