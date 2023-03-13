# @vlcn.io/sync-client

## 0.8.0-next.0

### Minor Changes

- useQuery perf updates, primary key only table fixes, sync in a background worker

### Patch Changes

- Updated dependencies
  - @vlcn.io/client-core@0.8.0-next.0
  - @vlcn.io/client-server-common@0.5.0-next.0
  - @vlcn.io/crsqlite-wasm@0.9.0-next.0
  - @vlcn.io/rx-tbl@0.8.0-next.0
  - @vlcn.io/xplat-api@0.8.0-next.0

## 0.7.0

### Minor Changes

- 6316ec315: update to support prebuild binaries, include primary key only table fixes

### Patch Changes

- Updated dependencies [6316ec315]
  - @vlcn.io/rx-tbl@0.7.0
  - @vlcn.io/client-core@0.7.0
  - @vlcn.io/client-server-common@0.4.0
  - @vlcn.io/xplat-api@0.7.0

## 0.7.0-next.0

### Minor Changes

- update to support prebuild binaries, include primary key only table fixes

### Patch Changes

- Updated dependencies
  - @vlcn.io/rx-tbl@0.7.0-next.0
  - @vlcn.io/client-core@0.7.0-next.0
  - @vlcn.io/client-server-common@0.4.0-next.0
  - @vlcn.io/xplat-api@0.7.0-next.0

## 0.6.3

### Patch Changes

- 3d09cd595: preview all the hook improvements and multi db open fixes
- 567d8acba: auto-release prepared statements
- 54666261b: fractional indexing inclusion
- fractional indexing, better react hooks, many dbs opened concurrently
- Updated dependencies [3d09cd595]
- Updated dependencies [567d8acba]
- Updated dependencies [54666261b]
- Updated dependencies
  - @vlcn.io/rx-tbl@0.6.2
  - @vlcn.io/client-core@0.6.3
  - @vlcn.io/client-server-common@0.3.3
  - @vlcn.io/xplat-api@0.6.2

## 0.6.3-next.2

### Patch Changes

- preview all the hook improvements and multi db open fixes
- Updated dependencies
  - @vlcn.io/rx-tbl@0.6.2-next.2
  - @vlcn.io/client-core@0.6.3-next.2
  - @vlcn.io/client-server-common@0.3.3-next.2
  - @vlcn.io/xplat-api@0.6.2-next.2

## 0.6.3-next.1

### Patch Changes

- auto-release prepared statements
- Updated dependencies
  - @vlcn.io/rx-tbl@0.6.2-next.1
  - @vlcn.io/client-core@0.6.3-next.1
  - @vlcn.io/client-server-common@0.3.3-next.1
  - @vlcn.io/xplat-api@0.6.2-next.1

## 0.6.3-next.0

### Patch Changes

- fractional indexing inclusion
- Updated dependencies
  - @vlcn.io/rx-tbl@0.6.2-next.0
  - @vlcn.io/client-core@0.6.3-next.0
  - @vlcn.io/client-server-common@0.3.3-next.0
  - @vlcn.io/xplat-api@0.6.2-next.0

## 0.6.2

### Patch Changes

- 519bcfc2a: hooks, fixes to support examples, auto-determine tables queried
- hooks package, used_tables query, web only target for wa-sqlite
- Updated dependencies [519bcfc2a]
- Updated dependencies
  - @vlcn.io/rx-tbl@0.6.1
  - @vlcn.io/client-core@0.6.2
  - @vlcn.io/client-server-common@0.3.2
  - @vlcn.io/xplat-api@0.6.1

## 0.6.2-next.0

### Patch Changes

- hooks, fixes to support examples, auto-determine tables queried
- Updated dependencies
  - @vlcn.io/rx-tbl@0.6.1-next.0
  - @vlcn.io/client-core@0.6.2-next.0
  - @vlcn.io/client-server-common@0.3.2-next.0
  - @vlcn.io/xplat-api@0.6.1-next.0

## 0.6.1

### Patch Changes

- accept auth tokens in server impl, fix error case leading to infinite loop in sync server, unbreak esm.sh
- Updated dependencies
  - @vlcn.io/client-core@0.6.1
  - @vlcn.io/client-server-common@0.3.1

## 0.6.0

### Minor Changes

- seen peers, binary encoding for network layer, retry on disconnect for server, auto-track peers

### Patch Changes

- Updated dependencies
  - @vlcn.io/rx-tbl@0.6.0
  - @vlcn.io/client-core@0.6.0
  - @vlcn.io/client-server-common@0.3.0
  - @vlcn.io/xplat-api@0.6.0

## 0.5.3

### Patch Changes

- deploy table validation fix
- Updated dependencies
  - @vlcn.io/rx-tbl@0.5.3
  - @vlcn.io/client-server-common@0.2.3
  - @vlcn.io/xplat-api@0.5.3

## 0.5.2

### Patch Changes

- cid winner selection bugfix
- Updated dependencies
  - @vlcn.io/rx-tbl@0.5.2
  - @vlcn.io/client-server-common@0.2.2
  - @vlcn.io/xplat-api@0.5.2

## 0.5.1

### Patch Changes

- rebuild all
- Updated dependencies
  - @vlcn.io/rx-tbl@0.5.1
  - @vlcn.io/client-server-common@0.2.1
  - @vlcn.io/xplat-api@0.5.1

## 0.5.0

### Minor Changes

- breaking change -- fix version recording problem that prevented convergence in p2p cases

### Patch Changes

- Updated dependencies
  - @vlcn.io/client-server-common@0.2.0
  - @vlcn.io/rx-tbl@0.5.0
  - @vlcn.io/xplat-api@0.5.0

## 0.4.2

### Patch Changes

- allow messages from the past

## 0.4.1

### Patch Changes

- fix mem leak and cid win value selection bug
- Updated dependencies
  - @vlcn.io/rx-tbl@0.4.1
  - @vlcn.io/client-server-common@0.1.1
  - @vlcn.io/xplat-api@0.4.1

## 0.4.0

### Minor Changes

- fix tie breaking for merge, add example client-server sync

### Patch Changes

- Updated dependencies
  - @vlcn.io/rx-tbl@0.4.0
  - @vlcn.io/client-server-common@0.1.0
  - @vlcn.io/xplat-api@0.4.0
