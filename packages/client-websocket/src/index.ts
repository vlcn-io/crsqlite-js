import { Socket, uuidStrToBytes } from "@vlcn.io/client-server-common";
import {
  ReplicatorArgs,
  default as createReplicator,
  Replicator,
} from "@vlcn.io/client-core";
import WebSocketWrapper from "./WebSocketWrapper.js";

export { uuidStrToBytes } from "@vlcn.io/client-server-common";

export default async function startSyncWith(
  uri: string,
  args: ReplicatorArgs
): Promise<Replicator> {
  const replicator = await createReplicator(args);
  const wrapper = new WebSocketWrapper(uri, replicator, args.accessToken);
  wrapper.start();
  return replicator;
}
