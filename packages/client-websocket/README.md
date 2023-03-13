# @vlcn.io/client-websocket

```ts
import startSync from "@vlcn.io/client-websocket";
import { DB, SQLite3 } from "@vlcn.io/wa-crsqlite";
import tblrx from "@vlcn.io/rx-tbl";

const db = await sqlite.open(dbid);
const rx = tblrx(db);

const sync = await startSync(`wss://${window.location.hostname}/sync`, {
  localDb: db, // instance of the local database
  remoteDbId: dbid, // id of the database on the server
  create: { // optional -- to allow the server to auto-create the DB if it does not exist
    schemaName: "name-of-schema",
  },
  rx, // reactivity module to notify sync when the db changed
});
```
