// Worker to do syncing off of the main thread
import {
  ReplicatorArgs,
  default as createReplicator,
} from "@vlcn.io/client-core";
import { Init, Msg } from "./messageTypes.js";
import WebSocketWrapper from "./WebSocketWrapper.js";

class Syncer {
  private initialized = false;

  async init(msg: Init) {
    if (this.initialized) {
      throw new Error("Already initialized");
    } else {
      this.initialized = true;
    }
    
    // open the db
    // start the sync
    // create an rxdb instance
    // add internal raw listener to the rxdb instance
  }

  requestSync() {
    // call the replicator via our dbchange notification stand-in object
  }
}

const syncer = new Syncer();
self.onmessage = (e) => {
  const msg = e.data as Msg;

  switch (msg._tag) {
    case "init":
      syncer.init(msg);
      break;
    case "request_sync":
      break;
  }
};
