export type DELETE = 9;
export type INSERT = 18;
export type UPDATE = 23;
export type UpdateType = DELETE | INSERT | UPDATE;
export const UPDATE_TYPE: {
  readonly DELETE: DELETE;
  readonly INSERT: INSERT;
  readonly UPDATE: UPDATE;
} = {
  DELETE: 9,
  INSERT: 18,
  UPDATE: 23,
} as const;

export interface DB {
  readonly siteid: string;
  execMany(sql: string[]): void;
  exec(sql: string, bind?: unknown[]): void;
  execO<T extends {}>(sql: string, bind?: unknown[]): T[];
  execA<T extends any[]>(sql: string, bind?: unknown[]): T[];
  close(): void;

  prepare(sql: string): Stmt;
  createFunction(name: string, fn: (...args: any) => unknown, opts?: {}): void;
  savepoint(cb: () => void): void;
  transaction(cb: () => void): void;
  onUpdate(
    cb: (
      type: UpdateType,
      dbName: string,
      tblName: string,
      rowid: bigint
    ) => void
  ): () => void;
}

export type TMutex = {
  runExclusive<T>(cb: () => Promise<T> | T): Promise<T>;
  acquire(): Promise<() => void>;
  release(): void;
};

export interface TXAsync {
  readonly __mutex: TMutex;
  execMany(sql: string[]): Promise<void>;
  exec(sql: string, bind?: unknown[]): Promise<void>;
  execO<T extends {}>(sql: string, bind?: unknown[]): Promise<T[]>;
  execA<T extends any[]>(sql: string, bind?: unknown[]): Promise<T[]>;
  prepare(sql: string): Promise<StmtAsync>;
  tx(cb: (tx: TXAsync) => Promise<void>): Promise<void>;
  imperativeTx(): Promise<[() => void, TXAsync]>;
}

export interface DBAsync extends TXAsync {
  readonly siteid: string;
  readonly filename: string;
  close(): Promise<void>;
  onUpdate(
    cb: (
      type: UpdateType,
      dbName: string,
      tblName: string,
      rowid: bigint
    ) => void
  ): () => void;
  createFunction(name: string, fn: (...args: any) => unknown, opts?: {}): void;
}

export interface Stmt {
  run(...bindArgs: any[]): void;
  get(...bindArgs: any[]): any;
  all(...bindArgs: any[]): any[];
  iterate<T>(...bindArgs: any[]): Iterator<T>;
  raw(isRaw?: boolean): this;
  bind(args: any[]): this;
  finalize(): void;
}

export interface StmtAsync {
  run(tx: TXAsync | null, ...bindArgs: any[]): Promise<void>;
  get(tx: TXAsync | null, ...bindArgs: any[]): Promise<any>;
  all(tx: TXAsync | null, ...bindArgs: any[]): Promise<any[]>;
  iterate<T>(tx: TXAsync | null, ...bindArgs: any[]): AsyncIterator<T>;
  raw(isRaw?: boolean): this;
  bind(args: readonly any[]): this;
  finalize(tx: TXAsync | null): Promise<void>;
}

export const version = 1;
