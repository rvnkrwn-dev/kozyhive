
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Kost
 * 
 */
export type Kost = $Result.DefaultSelection<Prisma.$KostPayload>
/**
 * Model FacilitiesRoom
 * 
 */
export type FacilitiesRoom = $Result.DefaultSelection<Prisma.$FacilitiesRoomPayload>
/**
 * Model FacilitiesToilet
 * 
 */
export type FacilitiesToilet = $Result.DefaultSelection<Prisma.$FacilitiesToiletPayload>
/**
 * Model Wishlist
 * 
 */
export type Wishlist = $Result.DefaultSelection<Prisma.$WishlistPayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>
/**
 * Model Ulasan
 * 
 */
export type Ulasan = $Result.DefaultSelection<Prisma.$UlasanPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  OWNER: 'OWNER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UserStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const Action: {
  Masuk: 'Masuk',
  Keluar: 'Keluar',
  Tambah: 'Tambah',
  Perbarui: 'Perbarui',
  Hapus: 'Hapus',
  Reset: 'Reset'
};

export type Action = (typeof Action)[keyof typeof Action]


export const Kost_type: {
  PUTRA: 'PUTRA',
  PUTRI: 'PUTRI',
  CAMPUR: 'CAMPUR'
};

export type Kost_type = (typeof Kost_type)[keyof typeof Kost_type]


export const Kamar_mandi: {
  NULL: 'NULL',
  DALAM: 'DALAM',
  LUAR: 'LUAR'
};

export type Kamar_mandi = (typeof Kamar_mandi)[keyof typeof Kamar_mandi]


export const Kloset_type: {
  NULL: 'NULL',
  DUDUK: 'DUDUK',
  JONGKOK: 'JONGKOK'
};

export type Kloset_type = (typeof Kloset_type)[keyof typeof Kloset_type]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type Action = $Enums.Action

export const Action: typeof $Enums.Action

export type Kost_type = $Enums.Kost_type

export const Kost_type: typeof $Enums.Kost_type

export type Kamar_mandi = $Enums.Kamar_mandi

export const Kamar_mandi: typeof $Enums.Kamar_mandi

export type Kloset_type = $Enums.Kloset_type

export const Kloset_type: typeof $Enums.Kloset_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kost`: Exposes CRUD operations for the **Kost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kosts
    * const kosts = await prisma.kost.findMany()
    * ```
    */
  get kost(): Prisma.KostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facilitiesRoom`: Exposes CRUD operations for the **FacilitiesRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacilitiesRooms
    * const facilitiesRooms = await prisma.facilitiesRoom.findMany()
    * ```
    */
  get facilitiesRoom(): Prisma.FacilitiesRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facilitiesToilet`: Exposes CRUD operations for the **FacilitiesToilet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacilitiesToilets
    * const facilitiesToilets = await prisma.facilitiesToilet.findMany()
    * ```
    */
  get facilitiesToilet(): Prisma.FacilitiesToiletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wishlist`: Exposes CRUD operations for the **Wishlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wishlists
    * const wishlists = await prisma.wishlist.findMany()
    * ```
    */
  get wishlist(): Prisma.WishlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ulasan`: Exposes CRUD operations for the **Ulasan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ulasans
    * const ulasans = await prisma.ulasan.findMany()
    * ```
    */
  get ulasan(): Prisma.UlasanDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    RefreshToken: 'RefreshToken',
    Log: 'Log',
    Address: 'Address',
    Kost: 'Kost',
    FacilitiesRoom: 'FacilitiesRoom',
    FacilitiesToilet: 'FacilitiesToilet',
    Wishlist: 'Wishlist',
    Photo: 'Photo',
    Ulasan: 'Ulasan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "refreshToken" | "log" | "address" | "kost" | "facilitiesRoom" | "facilitiesToilet" | "wishlist" | "photo" | "ulasan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Kost: {
        payload: Prisma.$KostPayload<ExtArgs>
        fields: Prisma.KostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KostPayload>
          }
          findFirst: {
            args: Prisma.KostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KostPayload>
          }
          findMany: {
            args: Prisma.KostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KostPayload>[]
          }
          create: {
            args: Prisma.KostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KostPayload>
          }
          createMany: {
            args: Prisma.KostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KostPayload>
          }
          update: {
            args: Prisma.KostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KostPayload>
          }
          deleteMany: {
            args: Prisma.KostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KostPayload>
          }
          aggregate: {
            args: Prisma.KostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKost>
          }
          groupBy: {
            args: Prisma.KostGroupByArgs<ExtArgs>
            result: $Utils.Optional<KostGroupByOutputType>[]
          }
          count: {
            args: Prisma.KostCountArgs<ExtArgs>
            result: $Utils.Optional<KostCountAggregateOutputType> | number
          }
        }
      }
      FacilitiesRoom: {
        payload: Prisma.$FacilitiesRoomPayload<ExtArgs>
        fields: Prisma.FacilitiesRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacilitiesRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilitiesRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacilitiesRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilitiesRoomPayload>
          }
          findFirst: {
            args: Prisma.FacilitiesRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilitiesRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacilitiesRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilitiesRoomPayload>
          }
          findMany: {
            args: Prisma.FacilitiesRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilitiesRoomPayload>[]
          }
          create: {
            args: Prisma.FacilitiesRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilitiesRoomPayload>
          }
          createMany: {
            args: Prisma.FacilitiesRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FacilitiesRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilitiesRoomPayload>
          }
          update: {
            args: Prisma.FacilitiesRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilitiesRoomPayload>
          }
          deleteMany: {
            args: Prisma.FacilitiesRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacilitiesRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FacilitiesRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilitiesRoomPayload>
          }
          aggregate: {
            args: Prisma.FacilitiesRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacilitiesRoom>
          }
          groupBy: {
            args: Prisma.FacilitiesRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacilitiesRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacilitiesRoomCountArgs<ExtArgs>
            result: $Utils.Optional<FacilitiesRoomCountAggregateOutputType> | number
          }
        }
      }
      FacilitiesToilet: {
        payload: Prisma.$FacilitiesToiletPayload<ExtArgs>
        fields: Prisma.FacilitiesToiletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacilitiesToiletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilitiesToiletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacilitiesToiletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilitiesToiletPayload>
          }
          findFirst: {
            args: Prisma.FacilitiesToiletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilitiesToiletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacilitiesToiletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilitiesToiletPayload>
          }
          findMany: {
            args: Prisma.FacilitiesToiletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilitiesToiletPayload>[]
          }
          create: {
            args: Prisma.FacilitiesToiletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilitiesToiletPayload>
          }
          createMany: {
            args: Prisma.FacilitiesToiletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FacilitiesToiletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilitiesToiletPayload>
          }
          update: {
            args: Prisma.FacilitiesToiletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilitiesToiletPayload>
          }
          deleteMany: {
            args: Prisma.FacilitiesToiletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacilitiesToiletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FacilitiesToiletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilitiesToiletPayload>
          }
          aggregate: {
            args: Prisma.FacilitiesToiletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacilitiesToilet>
          }
          groupBy: {
            args: Prisma.FacilitiesToiletGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacilitiesToiletGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacilitiesToiletCountArgs<ExtArgs>
            result: $Utils.Optional<FacilitiesToiletCountAggregateOutputType> | number
          }
        }
      }
      Wishlist: {
        payload: Prisma.$WishlistPayload<ExtArgs>
        fields: Prisma.WishlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WishlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WishlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          findFirst: {
            args: Prisma.WishlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WishlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          findMany: {
            args: Prisma.WishlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>[]
          }
          create: {
            args: Prisma.WishlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          createMany: {
            args: Prisma.WishlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WishlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          update: {
            args: Prisma.WishlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          deleteMany: {
            args: Prisma.WishlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WishlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WishlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          aggregate: {
            args: Prisma.WishlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWishlist>
          }
          groupBy: {
            args: Prisma.WishlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WishlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.WishlistCountArgs<ExtArgs>
            result: $Utils.Optional<WishlistCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
      Ulasan: {
        payload: Prisma.$UlasanPayload<ExtArgs>
        fields: Prisma.UlasanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UlasanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UlasanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>
          }
          findFirst: {
            args: Prisma.UlasanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UlasanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>
          }
          findMany: {
            args: Prisma.UlasanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>[]
          }
          create: {
            args: Prisma.UlasanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>
          }
          createMany: {
            args: Prisma.UlasanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UlasanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>
          }
          update: {
            args: Prisma.UlasanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>
          }
          deleteMany: {
            args: Prisma.UlasanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UlasanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UlasanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>
          }
          aggregate: {
            args: Prisma.UlasanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUlasan>
          }
          groupBy: {
            args: Prisma.UlasanGroupByArgs<ExtArgs>
            result: $Utils.Optional<UlasanGroupByOutputType>[]
          }
          count: {
            args: Prisma.UlasanCountArgs<ExtArgs>
            result: $Utils.Optional<UlasanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    refreshToken?: RefreshTokenOmit
    log?: LogOmit
    address?: AddressOmit
    kost?: KostOmit
    facilitiesRoom?: FacilitiesRoomOmit
    facilitiesToilet?: FacilitiesToiletOmit
    wishlist?: WishlistOmit
    photo?: PhotoOmit
    ulasan?: UlasanOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    refresh_token: number
    log: number
    kost: number
    whishlist: number
    ulasan: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refresh_token?: boolean | UserCountOutputTypeCountRefresh_tokenArgs
    log?: boolean | UserCountOutputTypeCountLogArgs
    kost?: boolean | UserCountOutputTypeCountKostArgs
    whishlist?: boolean | UserCountOutputTypeCountWhishlistArgs
    ulasan?: boolean | UserCountOutputTypeCountUlasanArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefresh_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountKostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWhishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUlasanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UlasanWhereInput
  }


  /**
   * Count Type KostCountOutputType
   */

  export type KostCountOutputType = {
    address: number
    facilitiesRoom: number
    facilitiesToilet: number
    photos: number
    wishlists: number
    ulasan: number
  }

  export type KostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | KostCountOutputTypeCountAddressArgs
    facilitiesRoom?: boolean | KostCountOutputTypeCountFacilitiesRoomArgs
    facilitiesToilet?: boolean | KostCountOutputTypeCountFacilitiesToiletArgs
    photos?: boolean | KostCountOutputTypeCountPhotosArgs
    wishlists?: boolean | KostCountOutputTypeCountWishlistsArgs
    ulasan?: boolean | KostCountOutputTypeCountUlasanArgs
  }

  // Custom InputTypes
  /**
   * KostCountOutputType without action
   */
  export type KostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KostCountOutputType
     */
    select?: KostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KostCountOutputType without action
   */
  export type KostCountOutputTypeCountAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * KostCountOutputType without action
   */
  export type KostCountOutputTypeCountFacilitiesRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilitiesRoomWhereInput
  }

  /**
   * KostCountOutputType without action
   */
  export type KostCountOutputTypeCountFacilitiesToiletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilitiesToiletWhereInput
  }

  /**
   * KostCountOutputType without action
   */
  export type KostCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }

  /**
   * KostCountOutputType without action
   */
  export type KostCountOutputTypeCountWishlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistWhereInput
  }

  /**
   * KostCountOutputType without action
   */
  export type KostCountOutputTypeCountUlasanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UlasanWhereInput
  }


  /**
   * Count Type PhotoCountOutputType
   */

  export type PhotoCountOutputType = {
    ulasan: number
  }

  export type PhotoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ulasan?: boolean | PhotoCountOutputTypeCountUlasanArgs
  }

  // Custom InputTypes
  /**
   * PhotoCountOutputType without action
   */
  export type PhotoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCountOutputType
     */
    select?: PhotoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhotoCountOutputType without action
   */
  export type PhotoCountOutputTypeCountUlasanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UlasanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    full_name: string | null
    email: string | null
    password: string | null
    image_url: string | null
    role: $Enums.Role | null
    user_status: $Enums.UserStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    full_name: string | null
    email: string | null
    password: string | null
    image_url: string | null
    role: $Enums.Role | null
    user_status: $Enums.UserStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    full_name: number
    email: number
    password: number
    image_url: number
    role: number
    user_status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    full_name?: true
    email?: true
    password?: true
    image_url?: true
    role?: true
    user_status?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    full_name?: true
    email?: true
    password?: true
    image_url?: true
    role?: true
    user_status?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    full_name?: true
    email?: true
    password?: true
    image_url?: true
    role?: true
    user_status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    full_name: string
    email: string
    password: string
    image_url: string | null
    role: $Enums.Role
    user_status: $Enums.UserStatus
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    image_url?: boolean
    role?: boolean
    user_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    refresh_token?: boolean | User$refresh_tokenArgs<ExtArgs>
    log?: boolean | User$logArgs<ExtArgs>
    kost?: boolean | User$kostArgs<ExtArgs>
    whishlist?: boolean | User$whishlistArgs<ExtArgs>
    ulasan?: boolean | User$ulasanArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    image_url?: boolean
    role?: boolean
    user_status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "full_name" | "email" | "password" | "image_url" | "role" | "user_status" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refresh_token?: boolean | User$refresh_tokenArgs<ExtArgs>
    log?: boolean | User$logArgs<ExtArgs>
    kost?: boolean | User$kostArgs<ExtArgs>
    whishlist?: boolean | User$whishlistArgs<ExtArgs>
    ulasan?: boolean | User$ulasanArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      refresh_token: Prisma.$RefreshTokenPayload<ExtArgs>[]
      log: Prisma.$LogPayload<ExtArgs>[]
      kost: Prisma.$KostPayload<ExtArgs>[]
      whishlist: Prisma.$WishlistPayload<ExtArgs>[]
      ulasan: Prisma.$UlasanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      full_name: string
      email: string
      password: string
      image_url: string | null
      role: $Enums.Role
      user_status: $Enums.UserStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refresh_token<T extends User$refresh_tokenArgs<ExtArgs> = {}>(args?: Subset<T, User$refresh_tokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    log<T extends User$logArgs<ExtArgs> = {}>(args?: Subset<T, User$logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kost<T extends User$kostArgs<ExtArgs> = {}>(args?: Subset<T, User$kostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    whishlist<T extends User$whishlistArgs<ExtArgs> = {}>(args?: Subset<T, User$whishlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ulasan<T extends User$ulasanArgs<ExtArgs> = {}>(args?: Subset<T, User$ulasanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly image_url: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly user_status: FieldRef<"User", 'UserStatus'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.refresh_token
   */
  export type User$refresh_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.log
   */
  export type User$logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * User.kost
   */
  export type User$kostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kost
     */
    select?: KostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kost
     */
    omit?: KostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KostInclude<ExtArgs> | null
    where?: KostWhereInput
    orderBy?: KostOrderByWithRelationInput | KostOrderByWithRelationInput[]
    cursor?: KostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KostScalarFieldEnum | KostScalarFieldEnum[]
  }

  /**
   * User.whishlist
   */
  export type User$whishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    where?: WishlistWhereInput
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    cursor?: WishlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * User.ulasan
   */
  export type User$ulasanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ulasan
     */
    omit?: UlasanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    where?: UlasanWhereInput
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    cursor?: UlasanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UlasanScalarFieldEnum | UlasanScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type RefreshTokenSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    refresh_token: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    refresh_token: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    user_id: number
    refresh_token: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RefreshTokenAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type RefreshTokenSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type RefreshTokenMinAggregateInputType = {
    id?: true
    user_id?: true
    refresh_token?: true
    created_at?: true
    updated_at?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    user_id?: true
    refresh_token?: true
    created_at?: true
    updated_at?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    user_id?: true
    refresh_token?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _avg?: RefreshTokenAvgAggregateInputType
    _sum?: RefreshTokenSumAggregateInputType
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: number
    user_id: number
    refresh_token: string
    created_at: Date
    updated_at: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    refresh_token?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>



  export type RefreshTokenSelectScalar = {
    id?: boolean
    user_id?: boolean
    refresh_token?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "refresh_token" | "created_at" | "updated_at", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      refresh_token: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'Int'>
    readonly user_id: FieldRef<"RefreshToken", 'Int'>
    readonly refresh_token: FieldRef<"RefreshToken", 'String'>
    readonly created_at: FieldRef<"RefreshToken", 'DateTime'>
    readonly updated_at: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type LogSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type LogMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    action: string | null
    description: string | null
    created_at: Date | null
  }

  export type LogMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    action: string | null
    description: string | null
    created_at: Date | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    user_id: number
    action: number
    description: number
    created_at: number
    _all: number
  }


  export type LogAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type LogSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type LogMinAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    description?: true
    created_at?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    description?: true
    created_at?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _avg?: LogAvgAggregateInputType
    _sum?: LogSumAggregateInputType
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: number
    user_id: number
    action: string
    description: string
    created_at: Date
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    description?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>



  export type LogSelectScalar = {
    id?: boolean
    user_id?: boolean
    action?: boolean
    description?: boolean
    created_at?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "action" | "description" | "created_at", ExtArgs["result"]["log"]>
  export type LogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      action: string
      description: string
      created_at: Date
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Log model
   */
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'Int'>
    readonly user_id: FieldRef<"Log", 'Int'>
    readonly action: FieldRef<"Log", 'String'>
    readonly description: FieldRef<"Log", 'String'>
    readonly created_at: FieldRef<"Log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    kost_id: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    kost_id: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    street_name: string | null
    street_number: string | null
    village_name: string | null
    city: string | null
    state: string | null
    zip: string | null
    longitude: string | null
    latitude: string | null
    kost_id: number | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    street_name: string | null
    street_number: string | null
    village_name: string | null
    city: string | null
    state: string | null
    zip: string | null
    longitude: string | null
    latitude: string | null
    kost_id: number | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    street_name: number
    street_number: number
    village_name: number
    city: number
    state: number
    zip: number
    longitude: number
    latitude: number
    kost_id: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    kost_id?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    kost_id?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    street_name?: true
    street_number?: true
    village_name?: true
    city?: true
    state?: true
    zip?: true
    longitude?: true
    latitude?: true
    kost_id?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    street_name?: true
    street_number?: true
    village_name?: true
    city?: true
    state?: true
    zip?: true
    longitude?: true
    latitude?: true
    kost_id?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    street_name?: true
    street_number?: true
    village_name?: true
    city?: true
    state?: true
    zip?: true
    longitude?: true
    latitude?: true
    kost_id?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    street_name: string
    street_number: string
    village_name: string
    city: string
    state: string
    zip: string
    longitude: string
    latitude: string
    kost_id: number
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street_name?: boolean
    street_number?: boolean
    village_name?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    longitude?: boolean
    latitude?: boolean
    kost_id?: boolean
    kost?: boolean | KostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>



  export type AddressSelectScalar = {
    id?: boolean
    street_name?: boolean
    street_number?: boolean
    village_name?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    longitude?: boolean
    latitude?: boolean
    kost_id?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "street_name" | "street_number" | "village_name" | "city" | "state" | "zip" | "longitude" | "latitude" | "kost_id", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kost?: boolean | KostDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      kost: Prisma.$KostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      street_name: string
      street_number: string
      village_name: string
      city: string
      state: string
      zip: string
      longitude: string
      latitude: string
      kost_id: number
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kost<T extends KostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KostDefaultArgs<ExtArgs>>): Prisma__KostClient<$Result.GetResult<Prisma.$KostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly street_name: FieldRef<"Address", 'String'>
    readonly street_number: FieldRef<"Address", 'String'>
    readonly village_name: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly zip: FieldRef<"Address", 'String'>
    readonly longitude: FieldRef<"Address", 'String'>
    readonly latitude: FieldRef<"Address", 'String'>
    readonly kost_id: FieldRef<"Address", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Kost
   */

  export type AggregateKost = {
    _count: KostCountAggregateOutputType | null
    _avg: KostAvgAggregateOutputType | null
    _sum: KostSumAggregateOutputType | null
    _min: KostMinAggregateOutputType | null
    _max: KostMaxAggregateOutputType | null
  }

  export type KostAvgAggregateOutputType = {
    id: number | null
    price: number | null
    ratings: number | null
    address_id: number | null
    facilitiesRoom_id: number | null
    facilitiesToilet_id: number | null
    owner_id: number | null
  }

  export type KostSumAggregateOutputType = {
    id: number | null
    price: number | null
    ratings: number | null
    address_id: number | null
    facilitiesRoom_id: number | null
    facilitiesToilet_id: number | null
    owner_id: number | null
  }

  export type KostMinAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
    price: number | null
    type: $Enums.Kost_type | null
    ratings: number | null
    pengaturan_khusus: string | null
    address_id: number | null
    facilitiesRoom_id: number | null
    facilitiesToilet_id: number | null
    owner_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type KostMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
    price: number | null
    type: $Enums.Kost_type | null
    ratings: number | null
    pengaturan_khusus: string | null
    address_id: number | null
    facilitiesRoom_id: number | null
    facilitiesToilet_id: number | null
    owner_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type KostCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    price: number
    type: number
    ratings: number
    pengaturan_khusus: number
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    owner_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type KostAvgAggregateInputType = {
    id?: true
    price?: true
    ratings?: true
    address_id?: true
    facilitiesRoom_id?: true
    facilitiesToilet_id?: true
    owner_id?: true
  }

  export type KostSumAggregateInputType = {
    id?: true
    price?: true
    ratings?: true
    address_id?: true
    facilitiesRoom_id?: true
    facilitiesToilet_id?: true
    owner_id?: true
  }

  export type KostMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    price?: true
    type?: true
    ratings?: true
    pengaturan_khusus?: true
    address_id?: true
    facilitiesRoom_id?: true
    facilitiesToilet_id?: true
    owner_id?: true
    created_at?: true
    updated_at?: true
  }

  export type KostMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    price?: true
    type?: true
    ratings?: true
    pengaturan_khusus?: true
    address_id?: true
    facilitiesRoom_id?: true
    facilitiesToilet_id?: true
    owner_id?: true
    created_at?: true
    updated_at?: true
  }

  export type KostCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    price?: true
    type?: true
    ratings?: true
    pengaturan_khusus?: true
    address_id?: true
    facilitiesRoom_id?: true
    facilitiesToilet_id?: true
    owner_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type KostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kost to aggregate.
     */
    where?: KostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kosts to fetch.
     */
    orderBy?: KostOrderByWithRelationInput | KostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kosts
    **/
    _count?: true | KostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KostMaxAggregateInputType
  }

  export type GetKostAggregateType<T extends KostAggregateArgs> = {
        [P in keyof T & keyof AggregateKost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKost[P]>
      : GetScalarType<T[P], AggregateKost[P]>
  }




  export type KostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KostWhereInput
    orderBy?: KostOrderByWithAggregationInput | KostOrderByWithAggregationInput[]
    by: KostScalarFieldEnum[] | KostScalarFieldEnum
    having?: KostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KostCountAggregateInputType | true
    _avg?: KostAvgAggregateInputType
    _sum?: KostSumAggregateInputType
    _min?: KostMinAggregateInputType
    _max?: KostMaxAggregateInputType
  }

  export type KostGroupByOutputType = {
    id: number
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    owner_id: number
    created_at: Date
    updated_at: Date
    _count: KostCountAggregateOutputType | null
    _avg: KostAvgAggregateOutputType | null
    _sum: KostSumAggregateOutputType | null
    _min: KostMinAggregateOutputType | null
    _max: KostMaxAggregateOutputType | null
  }

  type GetKostGroupByPayload<T extends KostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KostGroupByOutputType[P]>
            : GetScalarType<T[P], KostGroupByOutputType[P]>
        }
      >
    >


  export type KostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    price?: boolean
    type?: boolean
    ratings?: boolean
    pengaturan_khusus?: boolean
    address_id?: boolean
    facilitiesRoom_id?: boolean
    facilitiesToilet_id?: boolean
    owner_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    address?: boolean | Kost$addressArgs<ExtArgs>
    facilitiesRoom?: boolean | Kost$facilitiesRoomArgs<ExtArgs>
    facilitiesToilet?: boolean | Kost$facilitiesToiletArgs<ExtArgs>
    photos?: boolean | Kost$photosArgs<ExtArgs>
    wishlists?: boolean | Kost$wishlistsArgs<ExtArgs>
    ulasan?: boolean | Kost$ulasanArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | KostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kost"]>



  export type KostSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    price?: boolean
    type?: boolean
    ratings?: boolean
    pengaturan_khusus?: boolean
    address_id?: boolean
    facilitiesRoom_id?: boolean
    facilitiesToilet_id?: boolean
    owner_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type KostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "price" | "type" | "ratings" | "pengaturan_khusus" | "address_id" | "facilitiesRoom_id" | "facilitiesToilet_id" | "owner_id" | "created_at" | "updated_at", ExtArgs["result"]["kost"]>
  export type KostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Kost$addressArgs<ExtArgs>
    facilitiesRoom?: boolean | Kost$facilitiesRoomArgs<ExtArgs>
    facilitiesToilet?: boolean | Kost$facilitiesToiletArgs<ExtArgs>
    photos?: boolean | Kost$photosArgs<ExtArgs>
    wishlists?: boolean | Kost$wishlistsArgs<ExtArgs>
    ulasan?: boolean | Kost$ulasanArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | KostCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $KostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kost"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs>[]
      facilitiesRoom: Prisma.$FacilitiesRoomPayload<ExtArgs>[]
      facilitiesToilet: Prisma.$FacilitiesToiletPayload<ExtArgs>[]
      photos: Prisma.$PhotoPayload<ExtArgs>[]
      wishlists: Prisma.$WishlistPayload<ExtArgs>[]
      ulasan: Prisma.$UlasanPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      title: string
      price: number
      type: $Enums.Kost_type
      ratings: number
      pengaturan_khusus: string | null
      address_id: number
      facilitiesRoom_id: number
      facilitiesToilet_id: number
      owner_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["kost"]>
    composites: {}
  }

  type KostGetPayload<S extends boolean | null | undefined | KostDefaultArgs> = $Result.GetResult<Prisma.$KostPayload, S>

  type KostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KostCountAggregateInputType | true
    }

  export interface KostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kost'], meta: { name: 'Kost' } }
    /**
     * Find zero or one Kost that matches the filter.
     * @param {KostFindUniqueArgs} args - Arguments to find a Kost
     * @example
     * // Get one Kost
     * const kost = await prisma.kost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KostFindUniqueArgs>(args: SelectSubset<T, KostFindUniqueArgs<ExtArgs>>): Prisma__KostClient<$Result.GetResult<Prisma.$KostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KostFindUniqueOrThrowArgs} args - Arguments to find a Kost
     * @example
     * // Get one Kost
     * const kost = await prisma.kost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KostFindUniqueOrThrowArgs>(args: SelectSubset<T, KostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KostClient<$Result.GetResult<Prisma.$KostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KostFindFirstArgs} args - Arguments to find a Kost
     * @example
     * // Get one Kost
     * const kost = await prisma.kost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KostFindFirstArgs>(args?: SelectSubset<T, KostFindFirstArgs<ExtArgs>>): Prisma__KostClient<$Result.GetResult<Prisma.$KostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KostFindFirstOrThrowArgs} args - Arguments to find a Kost
     * @example
     * // Get one Kost
     * const kost = await prisma.kost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KostFindFirstOrThrowArgs>(args?: SelectSubset<T, KostFindFirstOrThrowArgs<ExtArgs>>): Prisma__KostClient<$Result.GetResult<Prisma.$KostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kosts
     * const kosts = await prisma.kost.findMany()
     * 
     * // Get first 10 Kosts
     * const kosts = await prisma.kost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kostWithIdOnly = await prisma.kost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KostFindManyArgs>(args?: SelectSubset<T, KostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kost.
     * @param {KostCreateArgs} args - Arguments to create a Kost.
     * @example
     * // Create one Kost
     * const Kost = await prisma.kost.create({
     *   data: {
     *     // ... data to create a Kost
     *   }
     * })
     * 
     */
    create<T extends KostCreateArgs>(args: SelectSubset<T, KostCreateArgs<ExtArgs>>): Prisma__KostClient<$Result.GetResult<Prisma.$KostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kosts.
     * @param {KostCreateManyArgs} args - Arguments to create many Kosts.
     * @example
     * // Create many Kosts
     * const kost = await prisma.kost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KostCreateManyArgs>(args?: SelectSubset<T, KostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kost.
     * @param {KostDeleteArgs} args - Arguments to delete one Kost.
     * @example
     * // Delete one Kost
     * const Kost = await prisma.kost.delete({
     *   where: {
     *     // ... filter to delete one Kost
     *   }
     * })
     * 
     */
    delete<T extends KostDeleteArgs>(args: SelectSubset<T, KostDeleteArgs<ExtArgs>>): Prisma__KostClient<$Result.GetResult<Prisma.$KostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kost.
     * @param {KostUpdateArgs} args - Arguments to update one Kost.
     * @example
     * // Update one Kost
     * const kost = await prisma.kost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KostUpdateArgs>(args: SelectSubset<T, KostUpdateArgs<ExtArgs>>): Prisma__KostClient<$Result.GetResult<Prisma.$KostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kosts.
     * @param {KostDeleteManyArgs} args - Arguments to filter Kosts to delete.
     * @example
     * // Delete a few Kosts
     * const { count } = await prisma.kost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KostDeleteManyArgs>(args?: SelectSubset<T, KostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kosts
     * const kost = await prisma.kost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KostUpdateManyArgs>(args: SelectSubset<T, KostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kost.
     * @param {KostUpsertArgs} args - Arguments to update or create a Kost.
     * @example
     * // Update or create a Kost
     * const kost = await prisma.kost.upsert({
     *   create: {
     *     // ... data to create a Kost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kost we want to update
     *   }
     * })
     */
    upsert<T extends KostUpsertArgs>(args: SelectSubset<T, KostUpsertArgs<ExtArgs>>): Prisma__KostClient<$Result.GetResult<Prisma.$KostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KostCountArgs} args - Arguments to filter Kosts to count.
     * @example
     * // Count the number of Kosts
     * const count = await prisma.kost.count({
     *   where: {
     *     // ... the filter for the Kosts we want to count
     *   }
     * })
    **/
    count<T extends KostCountArgs>(
      args?: Subset<T, KostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KostAggregateArgs>(args: Subset<T, KostAggregateArgs>): Prisma.PrismaPromise<GetKostAggregateType<T>>

    /**
     * Group by Kost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KostGroupByArgs['orderBy'] }
        : { orderBy?: KostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kost model
   */
  readonly fields: KostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends Kost$addressArgs<ExtArgs> = {}>(args?: Subset<T, Kost$addressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    facilitiesRoom<T extends Kost$facilitiesRoomArgs<ExtArgs> = {}>(args?: Subset<T, Kost$facilitiesRoomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilitiesRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    facilitiesToilet<T extends Kost$facilitiesToiletArgs<ExtArgs> = {}>(args?: Subset<T, Kost$facilitiesToiletArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilitiesToiletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photos<T extends Kost$photosArgs<ExtArgs> = {}>(args?: Subset<T, Kost$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wishlists<T extends Kost$wishlistsArgs<ExtArgs> = {}>(args?: Subset<T, Kost$wishlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ulasan<T extends Kost$ulasanArgs<ExtArgs> = {}>(args?: Subset<T, Kost$ulasanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kost model
   */
  interface KostFieldRefs {
    readonly id: FieldRef<"Kost", 'Int'>
    readonly slug: FieldRef<"Kost", 'String'>
    readonly title: FieldRef<"Kost", 'String'>
    readonly price: FieldRef<"Kost", 'Float'>
    readonly type: FieldRef<"Kost", 'Kost_type'>
    readonly ratings: FieldRef<"Kost", 'Float'>
    readonly pengaturan_khusus: FieldRef<"Kost", 'String'>
    readonly address_id: FieldRef<"Kost", 'Int'>
    readonly facilitiesRoom_id: FieldRef<"Kost", 'Int'>
    readonly facilitiesToilet_id: FieldRef<"Kost", 'Int'>
    readonly owner_id: FieldRef<"Kost", 'Int'>
    readonly created_at: FieldRef<"Kost", 'DateTime'>
    readonly updated_at: FieldRef<"Kost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kost findUnique
   */
  export type KostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kost
     */
    select?: KostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kost
     */
    omit?: KostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KostInclude<ExtArgs> | null
    /**
     * Filter, which Kost to fetch.
     */
    where: KostWhereUniqueInput
  }

  /**
   * Kost findUniqueOrThrow
   */
  export type KostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kost
     */
    select?: KostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kost
     */
    omit?: KostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KostInclude<ExtArgs> | null
    /**
     * Filter, which Kost to fetch.
     */
    where: KostWhereUniqueInput
  }

  /**
   * Kost findFirst
   */
  export type KostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kost
     */
    select?: KostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kost
     */
    omit?: KostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KostInclude<ExtArgs> | null
    /**
     * Filter, which Kost to fetch.
     */
    where?: KostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kosts to fetch.
     */
    orderBy?: KostOrderByWithRelationInput | KostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kosts.
     */
    cursor?: KostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kosts.
     */
    distinct?: KostScalarFieldEnum | KostScalarFieldEnum[]
  }

  /**
   * Kost findFirstOrThrow
   */
  export type KostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kost
     */
    select?: KostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kost
     */
    omit?: KostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KostInclude<ExtArgs> | null
    /**
     * Filter, which Kost to fetch.
     */
    where?: KostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kosts to fetch.
     */
    orderBy?: KostOrderByWithRelationInput | KostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kosts.
     */
    cursor?: KostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kosts.
     */
    distinct?: KostScalarFieldEnum | KostScalarFieldEnum[]
  }

  /**
   * Kost findMany
   */
  export type KostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kost
     */
    select?: KostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kost
     */
    omit?: KostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KostInclude<ExtArgs> | null
    /**
     * Filter, which Kosts to fetch.
     */
    where?: KostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kosts to fetch.
     */
    orderBy?: KostOrderByWithRelationInput | KostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kosts.
     */
    cursor?: KostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kosts.
     */
    skip?: number
    distinct?: KostScalarFieldEnum | KostScalarFieldEnum[]
  }

  /**
   * Kost create
   */
  export type KostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kost
     */
    select?: KostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kost
     */
    omit?: KostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KostInclude<ExtArgs> | null
    /**
     * The data needed to create a Kost.
     */
    data: XOR<KostCreateInput, KostUncheckedCreateInput>
  }

  /**
   * Kost createMany
   */
  export type KostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kosts.
     */
    data: KostCreateManyInput | KostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kost update
   */
  export type KostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kost
     */
    select?: KostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kost
     */
    omit?: KostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KostInclude<ExtArgs> | null
    /**
     * The data needed to update a Kost.
     */
    data: XOR<KostUpdateInput, KostUncheckedUpdateInput>
    /**
     * Choose, which Kost to update.
     */
    where: KostWhereUniqueInput
  }

  /**
   * Kost updateMany
   */
  export type KostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kosts.
     */
    data: XOR<KostUpdateManyMutationInput, KostUncheckedUpdateManyInput>
    /**
     * Filter which Kosts to update
     */
    where?: KostWhereInput
    /**
     * Limit how many Kosts to update.
     */
    limit?: number
  }

  /**
   * Kost upsert
   */
  export type KostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kost
     */
    select?: KostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kost
     */
    omit?: KostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KostInclude<ExtArgs> | null
    /**
     * The filter to search for the Kost to update in case it exists.
     */
    where: KostWhereUniqueInput
    /**
     * In case the Kost found by the `where` argument doesn't exist, create a new Kost with this data.
     */
    create: XOR<KostCreateInput, KostUncheckedCreateInput>
    /**
     * In case the Kost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KostUpdateInput, KostUncheckedUpdateInput>
  }

  /**
   * Kost delete
   */
  export type KostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kost
     */
    select?: KostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kost
     */
    omit?: KostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KostInclude<ExtArgs> | null
    /**
     * Filter which Kost to delete.
     */
    where: KostWhereUniqueInput
  }

  /**
   * Kost deleteMany
   */
  export type KostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kosts to delete
     */
    where?: KostWhereInput
    /**
     * Limit how many Kosts to delete.
     */
    limit?: number
  }

  /**
   * Kost.address
   */
  export type Kost$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Kost.facilitiesRoom
   */
  export type Kost$facilitiesRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesRoom
     */
    select?: FacilitiesRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesRoom
     */
    omit?: FacilitiesRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesRoomInclude<ExtArgs> | null
    where?: FacilitiesRoomWhereInput
    orderBy?: FacilitiesRoomOrderByWithRelationInput | FacilitiesRoomOrderByWithRelationInput[]
    cursor?: FacilitiesRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacilitiesRoomScalarFieldEnum | FacilitiesRoomScalarFieldEnum[]
  }

  /**
   * Kost.facilitiesToilet
   */
  export type Kost$facilitiesToiletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesToilet
     */
    select?: FacilitiesToiletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesToilet
     */
    omit?: FacilitiesToiletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesToiletInclude<ExtArgs> | null
    where?: FacilitiesToiletWhereInput
    orderBy?: FacilitiesToiletOrderByWithRelationInput | FacilitiesToiletOrderByWithRelationInput[]
    cursor?: FacilitiesToiletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacilitiesToiletScalarFieldEnum | FacilitiesToiletScalarFieldEnum[]
  }

  /**
   * Kost.photos
   */
  export type Kost$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Kost.wishlists
   */
  export type Kost$wishlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    where?: WishlistWhereInput
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    cursor?: WishlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * Kost.ulasan
   */
  export type Kost$ulasanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ulasan
     */
    omit?: UlasanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    where?: UlasanWhereInput
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    cursor?: UlasanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UlasanScalarFieldEnum | UlasanScalarFieldEnum[]
  }

  /**
   * Kost without action
   */
  export type KostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kost
     */
    select?: KostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kost
     */
    omit?: KostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KostInclude<ExtArgs> | null
  }


  /**
   * Model FacilitiesRoom
   */

  export type AggregateFacilitiesRoom = {
    _count: FacilitiesRoomCountAggregateOutputType | null
    _avg: FacilitiesRoomAvgAggregateOutputType | null
    _sum: FacilitiesRoomSumAggregateOutputType | null
    _min: FacilitiesRoomMinAggregateOutputType | null
    _max: FacilitiesRoomMaxAggregateOutputType | null
  }

  export type FacilitiesRoomAvgAggregateOutputType = {
    id: number | null
    kost_id: number | null
  }

  export type FacilitiesRoomSumAggregateOutputType = {
    id: number | null
    kost_id: number | null
  }

  export type FacilitiesRoomMinAggregateOutputType = {
    id: number | null
    ac: boolean | null
    meja: boolean | null
    lemari: boolean | null
    kursi: boolean | null
    wifi: boolean | null
    kost_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FacilitiesRoomMaxAggregateOutputType = {
    id: number | null
    ac: boolean | null
    meja: boolean | null
    lemari: boolean | null
    kursi: boolean | null
    wifi: boolean | null
    kost_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FacilitiesRoomCountAggregateOutputType = {
    id: number
    ac: number
    meja: number
    lemari: number
    kursi: number
    wifi: number
    kost_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FacilitiesRoomAvgAggregateInputType = {
    id?: true
    kost_id?: true
  }

  export type FacilitiesRoomSumAggregateInputType = {
    id?: true
    kost_id?: true
  }

  export type FacilitiesRoomMinAggregateInputType = {
    id?: true
    ac?: true
    meja?: true
    lemari?: true
    kursi?: true
    wifi?: true
    kost_id?: true
    created_at?: true
    updated_at?: true
  }

  export type FacilitiesRoomMaxAggregateInputType = {
    id?: true
    ac?: true
    meja?: true
    lemari?: true
    kursi?: true
    wifi?: true
    kost_id?: true
    created_at?: true
    updated_at?: true
  }

  export type FacilitiesRoomCountAggregateInputType = {
    id?: true
    ac?: true
    meja?: true
    lemari?: true
    kursi?: true
    wifi?: true
    kost_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FacilitiesRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacilitiesRoom to aggregate.
     */
    where?: FacilitiesRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilitiesRooms to fetch.
     */
    orderBy?: FacilitiesRoomOrderByWithRelationInput | FacilitiesRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilitiesRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilitiesRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilitiesRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacilitiesRooms
    **/
    _count?: true | FacilitiesRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacilitiesRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacilitiesRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilitiesRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilitiesRoomMaxAggregateInputType
  }

  export type GetFacilitiesRoomAggregateType<T extends FacilitiesRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateFacilitiesRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacilitiesRoom[P]>
      : GetScalarType<T[P], AggregateFacilitiesRoom[P]>
  }




  export type FacilitiesRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilitiesRoomWhereInput
    orderBy?: FacilitiesRoomOrderByWithAggregationInput | FacilitiesRoomOrderByWithAggregationInput[]
    by: FacilitiesRoomScalarFieldEnum[] | FacilitiesRoomScalarFieldEnum
    having?: FacilitiesRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilitiesRoomCountAggregateInputType | true
    _avg?: FacilitiesRoomAvgAggregateInputType
    _sum?: FacilitiesRoomSumAggregateInputType
    _min?: FacilitiesRoomMinAggregateInputType
    _max?: FacilitiesRoomMaxAggregateInputType
  }

  export type FacilitiesRoomGroupByOutputType = {
    id: number
    ac: boolean
    meja: boolean
    lemari: boolean
    kursi: boolean
    wifi: boolean
    kost_id: number
    created_at: Date
    updated_at: Date
    _count: FacilitiesRoomCountAggregateOutputType | null
    _avg: FacilitiesRoomAvgAggregateOutputType | null
    _sum: FacilitiesRoomSumAggregateOutputType | null
    _min: FacilitiesRoomMinAggregateOutputType | null
    _max: FacilitiesRoomMaxAggregateOutputType | null
  }

  type GetFacilitiesRoomGroupByPayload<T extends FacilitiesRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilitiesRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilitiesRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilitiesRoomGroupByOutputType[P]>
            : GetScalarType<T[P], FacilitiesRoomGroupByOutputType[P]>
        }
      >
    >


  export type FacilitiesRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ac?: boolean
    meja?: boolean
    lemari?: boolean
    kursi?: boolean
    wifi?: boolean
    kost_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    kost?: boolean | KostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facilitiesRoom"]>



  export type FacilitiesRoomSelectScalar = {
    id?: boolean
    ac?: boolean
    meja?: boolean
    lemari?: boolean
    kursi?: boolean
    wifi?: boolean
    kost_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FacilitiesRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ac" | "meja" | "lemari" | "kursi" | "wifi" | "kost_id" | "created_at" | "updated_at", ExtArgs["result"]["facilitiesRoom"]>
  export type FacilitiesRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kost?: boolean | KostDefaultArgs<ExtArgs>
  }

  export type $FacilitiesRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacilitiesRoom"
    objects: {
      kost: Prisma.$KostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ac: boolean
      meja: boolean
      lemari: boolean
      kursi: boolean
      wifi: boolean
      kost_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["facilitiesRoom"]>
    composites: {}
  }

  type FacilitiesRoomGetPayload<S extends boolean | null | undefined | FacilitiesRoomDefaultArgs> = $Result.GetResult<Prisma.$FacilitiesRoomPayload, S>

  type FacilitiesRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacilitiesRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacilitiesRoomCountAggregateInputType | true
    }

  export interface FacilitiesRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacilitiesRoom'], meta: { name: 'FacilitiesRoom' } }
    /**
     * Find zero or one FacilitiesRoom that matches the filter.
     * @param {FacilitiesRoomFindUniqueArgs} args - Arguments to find a FacilitiesRoom
     * @example
     * // Get one FacilitiesRoom
     * const facilitiesRoom = await prisma.facilitiesRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacilitiesRoomFindUniqueArgs>(args: SelectSubset<T, FacilitiesRoomFindUniqueArgs<ExtArgs>>): Prisma__FacilitiesRoomClient<$Result.GetResult<Prisma.$FacilitiesRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacilitiesRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacilitiesRoomFindUniqueOrThrowArgs} args - Arguments to find a FacilitiesRoom
     * @example
     * // Get one FacilitiesRoom
     * const facilitiesRoom = await prisma.facilitiesRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacilitiesRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, FacilitiesRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacilitiesRoomClient<$Result.GetResult<Prisma.$FacilitiesRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacilitiesRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilitiesRoomFindFirstArgs} args - Arguments to find a FacilitiesRoom
     * @example
     * // Get one FacilitiesRoom
     * const facilitiesRoom = await prisma.facilitiesRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacilitiesRoomFindFirstArgs>(args?: SelectSubset<T, FacilitiesRoomFindFirstArgs<ExtArgs>>): Prisma__FacilitiesRoomClient<$Result.GetResult<Prisma.$FacilitiesRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacilitiesRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilitiesRoomFindFirstOrThrowArgs} args - Arguments to find a FacilitiesRoom
     * @example
     * // Get one FacilitiesRoom
     * const facilitiesRoom = await prisma.facilitiesRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacilitiesRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, FacilitiesRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacilitiesRoomClient<$Result.GetResult<Prisma.$FacilitiesRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacilitiesRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilitiesRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacilitiesRooms
     * const facilitiesRooms = await prisma.facilitiesRoom.findMany()
     * 
     * // Get first 10 FacilitiesRooms
     * const facilitiesRooms = await prisma.facilitiesRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilitiesRoomWithIdOnly = await prisma.facilitiesRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacilitiesRoomFindManyArgs>(args?: SelectSubset<T, FacilitiesRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilitiesRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacilitiesRoom.
     * @param {FacilitiesRoomCreateArgs} args - Arguments to create a FacilitiesRoom.
     * @example
     * // Create one FacilitiesRoom
     * const FacilitiesRoom = await prisma.facilitiesRoom.create({
     *   data: {
     *     // ... data to create a FacilitiesRoom
     *   }
     * })
     * 
     */
    create<T extends FacilitiesRoomCreateArgs>(args: SelectSubset<T, FacilitiesRoomCreateArgs<ExtArgs>>): Prisma__FacilitiesRoomClient<$Result.GetResult<Prisma.$FacilitiesRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacilitiesRooms.
     * @param {FacilitiesRoomCreateManyArgs} args - Arguments to create many FacilitiesRooms.
     * @example
     * // Create many FacilitiesRooms
     * const facilitiesRoom = await prisma.facilitiesRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacilitiesRoomCreateManyArgs>(args?: SelectSubset<T, FacilitiesRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FacilitiesRoom.
     * @param {FacilitiesRoomDeleteArgs} args - Arguments to delete one FacilitiesRoom.
     * @example
     * // Delete one FacilitiesRoom
     * const FacilitiesRoom = await prisma.facilitiesRoom.delete({
     *   where: {
     *     // ... filter to delete one FacilitiesRoom
     *   }
     * })
     * 
     */
    delete<T extends FacilitiesRoomDeleteArgs>(args: SelectSubset<T, FacilitiesRoomDeleteArgs<ExtArgs>>): Prisma__FacilitiesRoomClient<$Result.GetResult<Prisma.$FacilitiesRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacilitiesRoom.
     * @param {FacilitiesRoomUpdateArgs} args - Arguments to update one FacilitiesRoom.
     * @example
     * // Update one FacilitiesRoom
     * const facilitiesRoom = await prisma.facilitiesRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacilitiesRoomUpdateArgs>(args: SelectSubset<T, FacilitiesRoomUpdateArgs<ExtArgs>>): Prisma__FacilitiesRoomClient<$Result.GetResult<Prisma.$FacilitiesRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacilitiesRooms.
     * @param {FacilitiesRoomDeleteManyArgs} args - Arguments to filter FacilitiesRooms to delete.
     * @example
     * // Delete a few FacilitiesRooms
     * const { count } = await prisma.facilitiesRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacilitiesRoomDeleteManyArgs>(args?: SelectSubset<T, FacilitiesRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacilitiesRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilitiesRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacilitiesRooms
     * const facilitiesRoom = await prisma.facilitiesRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacilitiesRoomUpdateManyArgs>(args: SelectSubset<T, FacilitiesRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FacilitiesRoom.
     * @param {FacilitiesRoomUpsertArgs} args - Arguments to update or create a FacilitiesRoom.
     * @example
     * // Update or create a FacilitiesRoom
     * const facilitiesRoom = await prisma.facilitiesRoom.upsert({
     *   create: {
     *     // ... data to create a FacilitiesRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacilitiesRoom we want to update
     *   }
     * })
     */
    upsert<T extends FacilitiesRoomUpsertArgs>(args: SelectSubset<T, FacilitiesRoomUpsertArgs<ExtArgs>>): Prisma__FacilitiesRoomClient<$Result.GetResult<Prisma.$FacilitiesRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacilitiesRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilitiesRoomCountArgs} args - Arguments to filter FacilitiesRooms to count.
     * @example
     * // Count the number of FacilitiesRooms
     * const count = await prisma.facilitiesRoom.count({
     *   where: {
     *     // ... the filter for the FacilitiesRooms we want to count
     *   }
     * })
    **/
    count<T extends FacilitiesRoomCountArgs>(
      args?: Subset<T, FacilitiesRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilitiesRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacilitiesRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilitiesRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacilitiesRoomAggregateArgs>(args: Subset<T, FacilitiesRoomAggregateArgs>): Prisma.PrismaPromise<GetFacilitiesRoomAggregateType<T>>

    /**
     * Group by FacilitiesRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilitiesRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacilitiesRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilitiesRoomGroupByArgs['orderBy'] }
        : { orderBy?: FacilitiesRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacilitiesRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilitiesRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacilitiesRoom model
   */
  readonly fields: FacilitiesRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacilitiesRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacilitiesRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kost<T extends KostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KostDefaultArgs<ExtArgs>>): Prisma__KostClient<$Result.GetResult<Prisma.$KostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FacilitiesRoom model
   */
  interface FacilitiesRoomFieldRefs {
    readonly id: FieldRef<"FacilitiesRoom", 'Int'>
    readonly ac: FieldRef<"FacilitiesRoom", 'Boolean'>
    readonly meja: FieldRef<"FacilitiesRoom", 'Boolean'>
    readonly lemari: FieldRef<"FacilitiesRoom", 'Boolean'>
    readonly kursi: FieldRef<"FacilitiesRoom", 'Boolean'>
    readonly wifi: FieldRef<"FacilitiesRoom", 'Boolean'>
    readonly kost_id: FieldRef<"FacilitiesRoom", 'Int'>
    readonly created_at: FieldRef<"FacilitiesRoom", 'DateTime'>
    readonly updated_at: FieldRef<"FacilitiesRoom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FacilitiesRoom findUnique
   */
  export type FacilitiesRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesRoom
     */
    select?: FacilitiesRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesRoom
     */
    omit?: FacilitiesRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesRoomInclude<ExtArgs> | null
    /**
     * Filter, which FacilitiesRoom to fetch.
     */
    where: FacilitiesRoomWhereUniqueInput
  }

  /**
   * FacilitiesRoom findUniqueOrThrow
   */
  export type FacilitiesRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesRoom
     */
    select?: FacilitiesRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesRoom
     */
    omit?: FacilitiesRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesRoomInclude<ExtArgs> | null
    /**
     * Filter, which FacilitiesRoom to fetch.
     */
    where: FacilitiesRoomWhereUniqueInput
  }

  /**
   * FacilitiesRoom findFirst
   */
  export type FacilitiesRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesRoom
     */
    select?: FacilitiesRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesRoom
     */
    omit?: FacilitiesRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesRoomInclude<ExtArgs> | null
    /**
     * Filter, which FacilitiesRoom to fetch.
     */
    where?: FacilitiesRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilitiesRooms to fetch.
     */
    orderBy?: FacilitiesRoomOrderByWithRelationInput | FacilitiesRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacilitiesRooms.
     */
    cursor?: FacilitiesRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilitiesRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilitiesRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilitiesRooms.
     */
    distinct?: FacilitiesRoomScalarFieldEnum | FacilitiesRoomScalarFieldEnum[]
  }

  /**
   * FacilitiesRoom findFirstOrThrow
   */
  export type FacilitiesRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesRoom
     */
    select?: FacilitiesRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesRoom
     */
    omit?: FacilitiesRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesRoomInclude<ExtArgs> | null
    /**
     * Filter, which FacilitiesRoom to fetch.
     */
    where?: FacilitiesRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilitiesRooms to fetch.
     */
    orderBy?: FacilitiesRoomOrderByWithRelationInput | FacilitiesRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacilitiesRooms.
     */
    cursor?: FacilitiesRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilitiesRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilitiesRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilitiesRooms.
     */
    distinct?: FacilitiesRoomScalarFieldEnum | FacilitiesRoomScalarFieldEnum[]
  }

  /**
   * FacilitiesRoom findMany
   */
  export type FacilitiesRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesRoom
     */
    select?: FacilitiesRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesRoom
     */
    omit?: FacilitiesRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesRoomInclude<ExtArgs> | null
    /**
     * Filter, which FacilitiesRooms to fetch.
     */
    where?: FacilitiesRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilitiesRooms to fetch.
     */
    orderBy?: FacilitiesRoomOrderByWithRelationInput | FacilitiesRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacilitiesRooms.
     */
    cursor?: FacilitiesRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilitiesRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilitiesRooms.
     */
    skip?: number
    distinct?: FacilitiesRoomScalarFieldEnum | FacilitiesRoomScalarFieldEnum[]
  }

  /**
   * FacilitiesRoom create
   */
  export type FacilitiesRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesRoom
     */
    select?: FacilitiesRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesRoom
     */
    omit?: FacilitiesRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a FacilitiesRoom.
     */
    data: XOR<FacilitiesRoomCreateInput, FacilitiesRoomUncheckedCreateInput>
  }

  /**
   * FacilitiesRoom createMany
   */
  export type FacilitiesRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacilitiesRooms.
     */
    data: FacilitiesRoomCreateManyInput | FacilitiesRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacilitiesRoom update
   */
  export type FacilitiesRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesRoom
     */
    select?: FacilitiesRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesRoom
     */
    omit?: FacilitiesRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a FacilitiesRoom.
     */
    data: XOR<FacilitiesRoomUpdateInput, FacilitiesRoomUncheckedUpdateInput>
    /**
     * Choose, which FacilitiesRoom to update.
     */
    where: FacilitiesRoomWhereUniqueInput
  }

  /**
   * FacilitiesRoom updateMany
   */
  export type FacilitiesRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacilitiesRooms.
     */
    data: XOR<FacilitiesRoomUpdateManyMutationInput, FacilitiesRoomUncheckedUpdateManyInput>
    /**
     * Filter which FacilitiesRooms to update
     */
    where?: FacilitiesRoomWhereInput
    /**
     * Limit how many FacilitiesRooms to update.
     */
    limit?: number
  }

  /**
   * FacilitiesRoom upsert
   */
  export type FacilitiesRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesRoom
     */
    select?: FacilitiesRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesRoom
     */
    omit?: FacilitiesRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the FacilitiesRoom to update in case it exists.
     */
    where: FacilitiesRoomWhereUniqueInput
    /**
     * In case the FacilitiesRoom found by the `where` argument doesn't exist, create a new FacilitiesRoom with this data.
     */
    create: XOR<FacilitiesRoomCreateInput, FacilitiesRoomUncheckedCreateInput>
    /**
     * In case the FacilitiesRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilitiesRoomUpdateInput, FacilitiesRoomUncheckedUpdateInput>
  }

  /**
   * FacilitiesRoom delete
   */
  export type FacilitiesRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesRoom
     */
    select?: FacilitiesRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesRoom
     */
    omit?: FacilitiesRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesRoomInclude<ExtArgs> | null
    /**
     * Filter which FacilitiesRoom to delete.
     */
    where: FacilitiesRoomWhereUniqueInput
  }

  /**
   * FacilitiesRoom deleteMany
   */
  export type FacilitiesRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacilitiesRooms to delete
     */
    where?: FacilitiesRoomWhereInput
    /**
     * Limit how many FacilitiesRooms to delete.
     */
    limit?: number
  }

  /**
   * FacilitiesRoom without action
   */
  export type FacilitiesRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesRoom
     */
    select?: FacilitiesRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesRoom
     */
    omit?: FacilitiesRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesRoomInclude<ExtArgs> | null
  }


  /**
   * Model FacilitiesToilet
   */

  export type AggregateFacilitiesToilet = {
    _count: FacilitiesToiletCountAggregateOutputType | null
    _avg: FacilitiesToiletAvgAggregateOutputType | null
    _sum: FacilitiesToiletSumAggregateOutputType | null
    _min: FacilitiesToiletMinAggregateOutputType | null
    _max: FacilitiesToiletMaxAggregateOutputType | null
  }

  export type FacilitiesToiletAvgAggregateOutputType = {
    id: number | null
    kost_id: number | null
  }

  export type FacilitiesToiletSumAggregateOutputType = {
    id: number | null
    kost_id: number | null
  }

  export type FacilitiesToiletMinAggregateOutputType = {
    id: number | null
    kamar_mandi: $Enums.Kamar_mandi | null
    shower: boolean | null
    kloset: $Enums.Kloset_type | null
    air_panas: boolean | null
    kost_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FacilitiesToiletMaxAggregateOutputType = {
    id: number | null
    kamar_mandi: $Enums.Kamar_mandi | null
    shower: boolean | null
    kloset: $Enums.Kloset_type | null
    air_panas: boolean | null
    kost_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FacilitiesToiletCountAggregateOutputType = {
    id: number
    kamar_mandi: number
    shower: number
    kloset: number
    air_panas: number
    kost_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FacilitiesToiletAvgAggregateInputType = {
    id?: true
    kost_id?: true
  }

  export type FacilitiesToiletSumAggregateInputType = {
    id?: true
    kost_id?: true
  }

  export type FacilitiesToiletMinAggregateInputType = {
    id?: true
    kamar_mandi?: true
    shower?: true
    kloset?: true
    air_panas?: true
    kost_id?: true
    created_at?: true
    updated_at?: true
  }

  export type FacilitiesToiletMaxAggregateInputType = {
    id?: true
    kamar_mandi?: true
    shower?: true
    kloset?: true
    air_panas?: true
    kost_id?: true
    created_at?: true
    updated_at?: true
  }

  export type FacilitiesToiletCountAggregateInputType = {
    id?: true
    kamar_mandi?: true
    shower?: true
    kloset?: true
    air_panas?: true
    kost_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FacilitiesToiletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacilitiesToilet to aggregate.
     */
    where?: FacilitiesToiletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilitiesToilets to fetch.
     */
    orderBy?: FacilitiesToiletOrderByWithRelationInput | FacilitiesToiletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilitiesToiletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilitiesToilets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilitiesToilets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacilitiesToilets
    **/
    _count?: true | FacilitiesToiletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacilitiesToiletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacilitiesToiletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilitiesToiletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilitiesToiletMaxAggregateInputType
  }

  export type GetFacilitiesToiletAggregateType<T extends FacilitiesToiletAggregateArgs> = {
        [P in keyof T & keyof AggregateFacilitiesToilet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacilitiesToilet[P]>
      : GetScalarType<T[P], AggregateFacilitiesToilet[P]>
  }




  export type FacilitiesToiletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilitiesToiletWhereInput
    orderBy?: FacilitiesToiletOrderByWithAggregationInput | FacilitiesToiletOrderByWithAggregationInput[]
    by: FacilitiesToiletScalarFieldEnum[] | FacilitiesToiletScalarFieldEnum
    having?: FacilitiesToiletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilitiesToiletCountAggregateInputType | true
    _avg?: FacilitiesToiletAvgAggregateInputType
    _sum?: FacilitiesToiletSumAggregateInputType
    _min?: FacilitiesToiletMinAggregateInputType
    _max?: FacilitiesToiletMaxAggregateInputType
  }

  export type FacilitiesToiletGroupByOutputType = {
    id: number
    kamar_mandi: $Enums.Kamar_mandi
    shower: boolean
    kloset: $Enums.Kloset_type
    air_panas: boolean
    kost_id: number
    created_at: Date
    updated_at: Date
    _count: FacilitiesToiletCountAggregateOutputType | null
    _avg: FacilitiesToiletAvgAggregateOutputType | null
    _sum: FacilitiesToiletSumAggregateOutputType | null
    _min: FacilitiesToiletMinAggregateOutputType | null
    _max: FacilitiesToiletMaxAggregateOutputType | null
  }

  type GetFacilitiesToiletGroupByPayload<T extends FacilitiesToiletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilitiesToiletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilitiesToiletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilitiesToiletGroupByOutputType[P]>
            : GetScalarType<T[P], FacilitiesToiletGroupByOutputType[P]>
        }
      >
    >


  export type FacilitiesToiletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kamar_mandi?: boolean
    shower?: boolean
    kloset?: boolean
    air_panas?: boolean
    kost_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    kost?: boolean | KostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facilitiesToilet"]>



  export type FacilitiesToiletSelectScalar = {
    id?: boolean
    kamar_mandi?: boolean
    shower?: boolean
    kloset?: boolean
    air_panas?: boolean
    kost_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FacilitiesToiletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kamar_mandi" | "shower" | "kloset" | "air_panas" | "kost_id" | "created_at" | "updated_at", ExtArgs["result"]["facilitiesToilet"]>
  export type FacilitiesToiletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kost?: boolean | KostDefaultArgs<ExtArgs>
  }

  export type $FacilitiesToiletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacilitiesToilet"
    objects: {
      kost: Prisma.$KostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kamar_mandi: $Enums.Kamar_mandi
      shower: boolean
      kloset: $Enums.Kloset_type
      air_panas: boolean
      kost_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["facilitiesToilet"]>
    composites: {}
  }

  type FacilitiesToiletGetPayload<S extends boolean | null | undefined | FacilitiesToiletDefaultArgs> = $Result.GetResult<Prisma.$FacilitiesToiletPayload, S>

  type FacilitiesToiletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacilitiesToiletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacilitiesToiletCountAggregateInputType | true
    }

  export interface FacilitiesToiletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacilitiesToilet'], meta: { name: 'FacilitiesToilet' } }
    /**
     * Find zero or one FacilitiesToilet that matches the filter.
     * @param {FacilitiesToiletFindUniqueArgs} args - Arguments to find a FacilitiesToilet
     * @example
     * // Get one FacilitiesToilet
     * const facilitiesToilet = await prisma.facilitiesToilet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacilitiesToiletFindUniqueArgs>(args: SelectSubset<T, FacilitiesToiletFindUniqueArgs<ExtArgs>>): Prisma__FacilitiesToiletClient<$Result.GetResult<Prisma.$FacilitiesToiletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacilitiesToilet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacilitiesToiletFindUniqueOrThrowArgs} args - Arguments to find a FacilitiesToilet
     * @example
     * // Get one FacilitiesToilet
     * const facilitiesToilet = await prisma.facilitiesToilet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacilitiesToiletFindUniqueOrThrowArgs>(args: SelectSubset<T, FacilitiesToiletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacilitiesToiletClient<$Result.GetResult<Prisma.$FacilitiesToiletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacilitiesToilet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilitiesToiletFindFirstArgs} args - Arguments to find a FacilitiesToilet
     * @example
     * // Get one FacilitiesToilet
     * const facilitiesToilet = await prisma.facilitiesToilet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacilitiesToiletFindFirstArgs>(args?: SelectSubset<T, FacilitiesToiletFindFirstArgs<ExtArgs>>): Prisma__FacilitiesToiletClient<$Result.GetResult<Prisma.$FacilitiesToiletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacilitiesToilet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilitiesToiletFindFirstOrThrowArgs} args - Arguments to find a FacilitiesToilet
     * @example
     * // Get one FacilitiesToilet
     * const facilitiesToilet = await prisma.facilitiesToilet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacilitiesToiletFindFirstOrThrowArgs>(args?: SelectSubset<T, FacilitiesToiletFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacilitiesToiletClient<$Result.GetResult<Prisma.$FacilitiesToiletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacilitiesToilets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilitiesToiletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacilitiesToilets
     * const facilitiesToilets = await prisma.facilitiesToilet.findMany()
     * 
     * // Get first 10 FacilitiesToilets
     * const facilitiesToilets = await prisma.facilitiesToilet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilitiesToiletWithIdOnly = await prisma.facilitiesToilet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacilitiesToiletFindManyArgs>(args?: SelectSubset<T, FacilitiesToiletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilitiesToiletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacilitiesToilet.
     * @param {FacilitiesToiletCreateArgs} args - Arguments to create a FacilitiesToilet.
     * @example
     * // Create one FacilitiesToilet
     * const FacilitiesToilet = await prisma.facilitiesToilet.create({
     *   data: {
     *     // ... data to create a FacilitiesToilet
     *   }
     * })
     * 
     */
    create<T extends FacilitiesToiletCreateArgs>(args: SelectSubset<T, FacilitiesToiletCreateArgs<ExtArgs>>): Prisma__FacilitiesToiletClient<$Result.GetResult<Prisma.$FacilitiesToiletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacilitiesToilets.
     * @param {FacilitiesToiletCreateManyArgs} args - Arguments to create many FacilitiesToilets.
     * @example
     * // Create many FacilitiesToilets
     * const facilitiesToilet = await prisma.facilitiesToilet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacilitiesToiletCreateManyArgs>(args?: SelectSubset<T, FacilitiesToiletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FacilitiesToilet.
     * @param {FacilitiesToiletDeleteArgs} args - Arguments to delete one FacilitiesToilet.
     * @example
     * // Delete one FacilitiesToilet
     * const FacilitiesToilet = await prisma.facilitiesToilet.delete({
     *   where: {
     *     // ... filter to delete one FacilitiesToilet
     *   }
     * })
     * 
     */
    delete<T extends FacilitiesToiletDeleteArgs>(args: SelectSubset<T, FacilitiesToiletDeleteArgs<ExtArgs>>): Prisma__FacilitiesToiletClient<$Result.GetResult<Prisma.$FacilitiesToiletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacilitiesToilet.
     * @param {FacilitiesToiletUpdateArgs} args - Arguments to update one FacilitiesToilet.
     * @example
     * // Update one FacilitiesToilet
     * const facilitiesToilet = await prisma.facilitiesToilet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacilitiesToiletUpdateArgs>(args: SelectSubset<T, FacilitiesToiletUpdateArgs<ExtArgs>>): Prisma__FacilitiesToiletClient<$Result.GetResult<Prisma.$FacilitiesToiletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacilitiesToilets.
     * @param {FacilitiesToiletDeleteManyArgs} args - Arguments to filter FacilitiesToilets to delete.
     * @example
     * // Delete a few FacilitiesToilets
     * const { count } = await prisma.facilitiesToilet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacilitiesToiletDeleteManyArgs>(args?: SelectSubset<T, FacilitiesToiletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacilitiesToilets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilitiesToiletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacilitiesToilets
     * const facilitiesToilet = await prisma.facilitiesToilet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacilitiesToiletUpdateManyArgs>(args: SelectSubset<T, FacilitiesToiletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FacilitiesToilet.
     * @param {FacilitiesToiletUpsertArgs} args - Arguments to update or create a FacilitiesToilet.
     * @example
     * // Update or create a FacilitiesToilet
     * const facilitiesToilet = await prisma.facilitiesToilet.upsert({
     *   create: {
     *     // ... data to create a FacilitiesToilet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacilitiesToilet we want to update
     *   }
     * })
     */
    upsert<T extends FacilitiesToiletUpsertArgs>(args: SelectSubset<T, FacilitiesToiletUpsertArgs<ExtArgs>>): Prisma__FacilitiesToiletClient<$Result.GetResult<Prisma.$FacilitiesToiletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacilitiesToilets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilitiesToiletCountArgs} args - Arguments to filter FacilitiesToilets to count.
     * @example
     * // Count the number of FacilitiesToilets
     * const count = await prisma.facilitiesToilet.count({
     *   where: {
     *     // ... the filter for the FacilitiesToilets we want to count
     *   }
     * })
    **/
    count<T extends FacilitiesToiletCountArgs>(
      args?: Subset<T, FacilitiesToiletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilitiesToiletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacilitiesToilet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilitiesToiletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacilitiesToiletAggregateArgs>(args: Subset<T, FacilitiesToiletAggregateArgs>): Prisma.PrismaPromise<GetFacilitiesToiletAggregateType<T>>

    /**
     * Group by FacilitiesToilet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilitiesToiletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacilitiesToiletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilitiesToiletGroupByArgs['orderBy'] }
        : { orderBy?: FacilitiesToiletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacilitiesToiletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilitiesToiletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacilitiesToilet model
   */
  readonly fields: FacilitiesToiletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacilitiesToilet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacilitiesToiletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kost<T extends KostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KostDefaultArgs<ExtArgs>>): Prisma__KostClient<$Result.GetResult<Prisma.$KostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FacilitiesToilet model
   */
  interface FacilitiesToiletFieldRefs {
    readonly id: FieldRef<"FacilitiesToilet", 'Int'>
    readonly kamar_mandi: FieldRef<"FacilitiesToilet", 'Kamar_mandi'>
    readonly shower: FieldRef<"FacilitiesToilet", 'Boolean'>
    readonly kloset: FieldRef<"FacilitiesToilet", 'Kloset_type'>
    readonly air_panas: FieldRef<"FacilitiesToilet", 'Boolean'>
    readonly kost_id: FieldRef<"FacilitiesToilet", 'Int'>
    readonly created_at: FieldRef<"FacilitiesToilet", 'DateTime'>
    readonly updated_at: FieldRef<"FacilitiesToilet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FacilitiesToilet findUnique
   */
  export type FacilitiesToiletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesToilet
     */
    select?: FacilitiesToiletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesToilet
     */
    omit?: FacilitiesToiletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesToiletInclude<ExtArgs> | null
    /**
     * Filter, which FacilitiesToilet to fetch.
     */
    where: FacilitiesToiletWhereUniqueInput
  }

  /**
   * FacilitiesToilet findUniqueOrThrow
   */
  export type FacilitiesToiletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesToilet
     */
    select?: FacilitiesToiletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesToilet
     */
    omit?: FacilitiesToiletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesToiletInclude<ExtArgs> | null
    /**
     * Filter, which FacilitiesToilet to fetch.
     */
    where: FacilitiesToiletWhereUniqueInput
  }

  /**
   * FacilitiesToilet findFirst
   */
  export type FacilitiesToiletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesToilet
     */
    select?: FacilitiesToiletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesToilet
     */
    omit?: FacilitiesToiletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesToiletInclude<ExtArgs> | null
    /**
     * Filter, which FacilitiesToilet to fetch.
     */
    where?: FacilitiesToiletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilitiesToilets to fetch.
     */
    orderBy?: FacilitiesToiletOrderByWithRelationInput | FacilitiesToiletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacilitiesToilets.
     */
    cursor?: FacilitiesToiletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilitiesToilets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilitiesToilets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilitiesToilets.
     */
    distinct?: FacilitiesToiletScalarFieldEnum | FacilitiesToiletScalarFieldEnum[]
  }

  /**
   * FacilitiesToilet findFirstOrThrow
   */
  export type FacilitiesToiletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesToilet
     */
    select?: FacilitiesToiletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesToilet
     */
    omit?: FacilitiesToiletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesToiletInclude<ExtArgs> | null
    /**
     * Filter, which FacilitiesToilet to fetch.
     */
    where?: FacilitiesToiletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilitiesToilets to fetch.
     */
    orderBy?: FacilitiesToiletOrderByWithRelationInput | FacilitiesToiletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacilitiesToilets.
     */
    cursor?: FacilitiesToiletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilitiesToilets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilitiesToilets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilitiesToilets.
     */
    distinct?: FacilitiesToiletScalarFieldEnum | FacilitiesToiletScalarFieldEnum[]
  }

  /**
   * FacilitiesToilet findMany
   */
  export type FacilitiesToiletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesToilet
     */
    select?: FacilitiesToiletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesToilet
     */
    omit?: FacilitiesToiletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesToiletInclude<ExtArgs> | null
    /**
     * Filter, which FacilitiesToilets to fetch.
     */
    where?: FacilitiesToiletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilitiesToilets to fetch.
     */
    orderBy?: FacilitiesToiletOrderByWithRelationInput | FacilitiesToiletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacilitiesToilets.
     */
    cursor?: FacilitiesToiletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilitiesToilets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilitiesToilets.
     */
    skip?: number
    distinct?: FacilitiesToiletScalarFieldEnum | FacilitiesToiletScalarFieldEnum[]
  }

  /**
   * FacilitiesToilet create
   */
  export type FacilitiesToiletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesToilet
     */
    select?: FacilitiesToiletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesToilet
     */
    omit?: FacilitiesToiletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesToiletInclude<ExtArgs> | null
    /**
     * The data needed to create a FacilitiesToilet.
     */
    data: XOR<FacilitiesToiletCreateInput, FacilitiesToiletUncheckedCreateInput>
  }

  /**
   * FacilitiesToilet createMany
   */
  export type FacilitiesToiletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacilitiesToilets.
     */
    data: FacilitiesToiletCreateManyInput | FacilitiesToiletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacilitiesToilet update
   */
  export type FacilitiesToiletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesToilet
     */
    select?: FacilitiesToiletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesToilet
     */
    omit?: FacilitiesToiletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesToiletInclude<ExtArgs> | null
    /**
     * The data needed to update a FacilitiesToilet.
     */
    data: XOR<FacilitiesToiletUpdateInput, FacilitiesToiletUncheckedUpdateInput>
    /**
     * Choose, which FacilitiesToilet to update.
     */
    where: FacilitiesToiletWhereUniqueInput
  }

  /**
   * FacilitiesToilet updateMany
   */
  export type FacilitiesToiletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacilitiesToilets.
     */
    data: XOR<FacilitiesToiletUpdateManyMutationInput, FacilitiesToiletUncheckedUpdateManyInput>
    /**
     * Filter which FacilitiesToilets to update
     */
    where?: FacilitiesToiletWhereInput
    /**
     * Limit how many FacilitiesToilets to update.
     */
    limit?: number
  }

  /**
   * FacilitiesToilet upsert
   */
  export type FacilitiesToiletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesToilet
     */
    select?: FacilitiesToiletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesToilet
     */
    omit?: FacilitiesToiletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesToiletInclude<ExtArgs> | null
    /**
     * The filter to search for the FacilitiesToilet to update in case it exists.
     */
    where: FacilitiesToiletWhereUniqueInput
    /**
     * In case the FacilitiesToilet found by the `where` argument doesn't exist, create a new FacilitiesToilet with this data.
     */
    create: XOR<FacilitiesToiletCreateInput, FacilitiesToiletUncheckedCreateInput>
    /**
     * In case the FacilitiesToilet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilitiesToiletUpdateInput, FacilitiesToiletUncheckedUpdateInput>
  }

  /**
   * FacilitiesToilet delete
   */
  export type FacilitiesToiletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesToilet
     */
    select?: FacilitiesToiletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesToilet
     */
    omit?: FacilitiesToiletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesToiletInclude<ExtArgs> | null
    /**
     * Filter which FacilitiesToilet to delete.
     */
    where: FacilitiesToiletWhereUniqueInput
  }

  /**
   * FacilitiesToilet deleteMany
   */
  export type FacilitiesToiletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacilitiesToilets to delete
     */
    where?: FacilitiesToiletWhereInput
    /**
     * Limit how many FacilitiesToilets to delete.
     */
    limit?: number
  }

  /**
   * FacilitiesToilet without action
   */
  export type FacilitiesToiletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilitiesToilet
     */
    select?: FacilitiesToiletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilitiesToilet
     */
    omit?: FacilitiesToiletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilitiesToiletInclude<ExtArgs> | null
  }


  /**
   * Model Wishlist
   */

  export type AggregateWishlist = {
    _count: WishlistCountAggregateOutputType | null
    _avg: WishlistAvgAggregateOutputType | null
    _sum: WishlistSumAggregateOutputType | null
    _min: WishlistMinAggregateOutputType | null
    _max: WishlistMaxAggregateOutputType | null
  }

  export type WishlistAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    kost_id: number | null
  }

  export type WishlistSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    kost_id: number | null
  }

  export type WishlistMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    kost_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WishlistMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    kost_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WishlistCountAggregateOutputType = {
    id: number
    user_id: number
    kost_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WishlistAvgAggregateInputType = {
    id?: true
    user_id?: true
    kost_id?: true
  }

  export type WishlistSumAggregateInputType = {
    id?: true
    user_id?: true
    kost_id?: true
  }

  export type WishlistMinAggregateInputType = {
    id?: true
    user_id?: true
    kost_id?: true
    created_at?: true
    updated_at?: true
  }

  export type WishlistMaxAggregateInputType = {
    id?: true
    user_id?: true
    kost_id?: true
    created_at?: true
    updated_at?: true
  }

  export type WishlistCountAggregateInputType = {
    id?: true
    user_id?: true
    kost_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WishlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wishlist to aggregate.
     */
    where?: WishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wishlists
    **/
    _count?: true | WishlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WishlistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WishlistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WishlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WishlistMaxAggregateInputType
  }

  export type GetWishlistAggregateType<T extends WishlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWishlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWishlist[P]>
      : GetScalarType<T[P], AggregateWishlist[P]>
  }




  export type WishlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistWhereInput
    orderBy?: WishlistOrderByWithAggregationInput | WishlistOrderByWithAggregationInput[]
    by: WishlistScalarFieldEnum[] | WishlistScalarFieldEnum
    having?: WishlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WishlistCountAggregateInputType | true
    _avg?: WishlistAvgAggregateInputType
    _sum?: WishlistSumAggregateInputType
    _min?: WishlistMinAggregateInputType
    _max?: WishlistMaxAggregateInputType
  }

  export type WishlistGroupByOutputType = {
    id: number
    user_id: number
    kost_id: number
    created_at: Date
    updated_at: Date
    _count: WishlistCountAggregateOutputType | null
    _avg: WishlistAvgAggregateOutputType | null
    _sum: WishlistSumAggregateOutputType | null
    _min: WishlistMinAggregateOutputType | null
    _max: WishlistMaxAggregateOutputType | null
  }

  type GetWishlistGroupByPayload<T extends WishlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WishlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WishlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WishlistGroupByOutputType[P]>
            : GetScalarType<T[P], WishlistGroupByOutputType[P]>
        }
      >
    >


  export type WishlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    kost_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kost?: boolean | KostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlist"]>



  export type WishlistSelectScalar = {
    id?: boolean
    user_id?: boolean
    kost_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type WishlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "kost_id" | "created_at" | "updated_at", ExtArgs["result"]["wishlist"]>
  export type WishlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    kost?: boolean | KostDefaultArgs<ExtArgs>
  }

  export type $WishlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wishlist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      kost: Prisma.$KostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      kost_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["wishlist"]>
    composites: {}
  }

  type WishlistGetPayload<S extends boolean | null | undefined | WishlistDefaultArgs> = $Result.GetResult<Prisma.$WishlistPayload, S>

  type WishlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WishlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WishlistCountAggregateInputType | true
    }

  export interface WishlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wishlist'], meta: { name: 'Wishlist' } }
    /**
     * Find zero or one Wishlist that matches the filter.
     * @param {WishlistFindUniqueArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WishlistFindUniqueArgs>(args: SelectSubset<T, WishlistFindUniqueArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wishlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WishlistFindUniqueOrThrowArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WishlistFindUniqueOrThrowArgs>(args: SelectSubset<T, WishlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wishlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistFindFirstArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WishlistFindFirstArgs>(args?: SelectSubset<T, WishlistFindFirstArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wishlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistFindFirstOrThrowArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WishlistFindFirstOrThrowArgs>(args?: SelectSubset<T, WishlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wishlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wishlists
     * const wishlists = await prisma.wishlist.findMany()
     * 
     * // Get first 10 Wishlists
     * const wishlists = await prisma.wishlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wishlistWithIdOnly = await prisma.wishlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WishlistFindManyArgs>(args?: SelectSubset<T, WishlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wishlist.
     * @param {WishlistCreateArgs} args - Arguments to create a Wishlist.
     * @example
     * // Create one Wishlist
     * const Wishlist = await prisma.wishlist.create({
     *   data: {
     *     // ... data to create a Wishlist
     *   }
     * })
     * 
     */
    create<T extends WishlistCreateArgs>(args: SelectSubset<T, WishlistCreateArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wishlists.
     * @param {WishlistCreateManyArgs} args - Arguments to create many Wishlists.
     * @example
     * // Create many Wishlists
     * const wishlist = await prisma.wishlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WishlistCreateManyArgs>(args?: SelectSubset<T, WishlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Wishlist.
     * @param {WishlistDeleteArgs} args - Arguments to delete one Wishlist.
     * @example
     * // Delete one Wishlist
     * const Wishlist = await prisma.wishlist.delete({
     *   where: {
     *     // ... filter to delete one Wishlist
     *   }
     * })
     * 
     */
    delete<T extends WishlistDeleteArgs>(args: SelectSubset<T, WishlistDeleteArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wishlist.
     * @param {WishlistUpdateArgs} args - Arguments to update one Wishlist.
     * @example
     * // Update one Wishlist
     * const wishlist = await prisma.wishlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WishlistUpdateArgs>(args: SelectSubset<T, WishlistUpdateArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wishlists.
     * @param {WishlistDeleteManyArgs} args - Arguments to filter Wishlists to delete.
     * @example
     * // Delete a few Wishlists
     * const { count } = await prisma.wishlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WishlistDeleteManyArgs>(args?: SelectSubset<T, WishlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wishlists
     * const wishlist = await prisma.wishlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WishlistUpdateManyArgs>(args: SelectSubset<T, WishlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wishlist.
     * @param {WishlistUpsertArgs} args - Arguments to update or create a Wishlist.
     * @example
     * // Update or create a Wishlist
     * const wishlist = await prisma.wishlist.upsert({
     *   create: {
     *     // ... data to create a Wishlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wishlist we want to update
     *   }
     * })
     */
    upsert<T extends WishlistUpsertArgs>(args: SelectSubset<T, WishlistUpsertArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistCountArgs} args - Arguments to filter Wishlists to count.
     * @example
     * // Count the number of Wishlists
     * const count = await prisma.wishlist.count({
     *   where: {
     *     // ... the filter for the Wishlists we want to count
     *   }
     * })
    **/
    count<T extends WishlistCountArgs>(
      args?: Subset<T, WishlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WishlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wishlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WishlistAggregateArgs>(args: Subset<T, WishlistAggregateArgs>): Prisma.PrismaPromise<GetWishlistAggregateType<T>>

    /**
     * Group by Wishlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WishlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WishlistGroupByArgs['orderBy'] }
        : { orderBy?: WishlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WishlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wishlist model
   */
  readonly fields: WishlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wishlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WishlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kost<T extends KostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KostDefaultArgs<ExtArgs>>): Prisma__KostClient<$Result.GetResult<Prisma.$KostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Wishlist model
   */
  interface WishlistFieldRefs {
    readonly id: FieldRef<"Wishlist", 'Int'>
    readonly user_id: FieldRef<"Wishlist", 'Int'>
    readonly kost_id: FieldRef<"Wishlist", 'Int'>
    readonly created_at: FieldRef<"Wishlist", 'DateTime'>
    readonly updated_at: FieldRef<"Wishlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wishlist findUnique
   */
  export type WishlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlist to fetch.
     */
    where: WishlistWhereUniqueInput
  }

  /**
   * Wishlist findUniqueOrThrow
   */
  export type WishlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlist to fetch.
     */
    where: WishlistWhereUniqueInput
  }

  /**
   * Wishlist findFirst
   */
  export type WishlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlist to fetch.
     */
    where?: WishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wishlists.
     */
    cursor?: WishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wishlists.
     */
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * Wishlist findFirstOrThrow
   */
  export type WishlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlist to fetch.
     */
    where?: WishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wishlists.
     */
    cursor?: WishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wishlists.
     */
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * Wishlist findMany
   */
  export type WishlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlists to fetch.
     */
    where?: WishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wishlists.
     */
    cursor?: WishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * Wishlist create
   */
  export type WishlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * The data needed to create a Wishlist.
     */
    data: XOR<WishlistCreateInput, WishlistUncheckedCreateInput>
  }

  /**
   * Wishlist createMany
   */
  export type WishlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wishlists.
     */
    data: WishlistCreateManyInput | WishlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wishlist update
   */
  export type WishlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * The data needed to update a Wishlist.
     */
    data: XOR<WishlistUpdateInput, WishlistUncheckedUpdateInput>
    /**
     * Choose, which Wishlist to update.
     */
    where: WishlistWhereUniqueInput
  }

  /**
   * Wishlist updateMany
   */
  export type WishlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wishlists.
     */
    data: XOR<WishlistUpdateManyMutationInput, WishlistUncheckedUpdateManyInput>
    /**
     * Filter which Wishlists to update
     */
    where?: WishlistWhereInput
    /**
     * Limit how many Wishlists to update.
     */
    limit?: number
  }

  /**
   * Wishlist upsert
   */
  export type WishlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * The filter to search for the Wishlist to update in case it exists.
     */
    where: WishlistWhereUniqueInput
    /**
     * In case the Wishlist found by the `where` argument doesn't exist, create a new Wishlist with this data.
     */
    create: XOR<WishlistCreateInput, WishlistUncheckedCreateInput>
    /**
     * In case the Wishlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WishlistUpdateInput, WishlistUncheckedUpdateInput>
  }

  /**
   * Wishlist delete
   */
  export type WishlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter which Wishlist to delete.
     */
    where: WishlistWhereUniqueInput
  }

  /**
   * Wishlist deleteMany
   */
  export type WishlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wishlists to delete
     */
    where?: WishlistWhereInput
    /**
     * Limit how many Wishlists to delete.
     */
    limit?: number
  }

  /**
   * Wishlist without action
   */
  export type WishlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
  }


  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoAvgAggregateOutputType = {
    id: number | null
    kost_id: number | null
    ulasan_id: number | null
  }

  export type PhotoSumAggregateOutputType = {
    id: number | null
    kost_id: number | null
    ulasan_id: number | null
  }

  export type PhotoMinAggregateOutputType = {
    id: number | null
    image_url: string | null
    description: string | null
    kost_id: number | null
    ulasan_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: number | null
    image_url: string | null
    description: string | null
    kost_id: number | null
    ulasan_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    image_url: number
    description: number
    kost_id: number
    ulasan_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PhotoAvgAggregateInputType = {
    id?: true
    kost_id?: true
    ulasan_id?: true
  }

  export type PhotoSumAggregateInputType = {
    id?: true
    kost_id?: true
    ulasan_id?: true
  }

  export type PhotoMinAggregateInputType = {
    id?: true
    image_url?: true
    description?: true
    kost_id?: true
    ulasan_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    image_url?: true
    description?: true
    kost_id?: true
    ulasan_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    image_url?: true
    description?: true
    kost_id?: true
    ulasan_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _avg?: PhotoAvgAggregateInputType
    _sum?: PhotoSumAggregateInputType
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: number
    image_url: string
    description: string | null
    kost_id: number | null
    ulasan_id: number | null
    created_at: Date
    updated_at: Date
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_url?: boolean
    description?: boolean
    kost_id?: boolean
    ulasan_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    kost?: boolean | Photo$kostArgs<ExtArgs>
    ulasan?: boolean | Photo$ulasanArgs<ExtArgs>
    _count?: boolean | PhotoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>



  export type PhotoSelectScalar = {
    id?: boolean
    image_url?: boolean
    description?: boolean
    kost_id?: boolean
    ulasan_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image_url" | "description" | "kost_id" | "ulasan_id" | "created_at" | "updated_at", ExtArgs["result"]["photo"]>
  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kost?: boolean | Photo$kostArgs<ExtArgs>
    ulasan?: boolean | Photo$ulasanArgs<ExtArgs>
    _count?: boolean | PhotoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      kost: Prisma.$KostPayload<ExtArgs> | null
      ulasan: Prisma.$UlasanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image_url: string
      description: string | null
      kost_id: number | null
      ulasan_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }

  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFindUniqueArgs>(args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFindFirstArgs>(args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoFindManyArgs>(args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
     */
    create<T extends PhotoCreateArgs>(args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCreateManyArgs>(args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
     */
    delete<T extends PhotoDeleteArgs>(args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoUpdateArgs>(args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDeleteManyArgs>(args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoUpdateManyArgs>(args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUpsertArgs>(args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kost<T extends Photo$kostArgs<ExtArgs> = {}>(args?: Subset<T, Photo$kostArgs<ExtArgs>>): Prisma__KostClient<$Result.GetResult<Prisma.$KostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ulasan<T extends Photo$ulasanArgs<ExtArgs> = {}>(args?: Subset<T, Photo$ulasanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Photo model
   */
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'Int'>
    readonly image_url: FieldRef<"Photo", 'String'>
    readonly description: FieldRef<"Photo", 'String'>
    readonly kost_id: FieldRef<"Photo", 'Int'>
    readonly ulasan_id: FieldRef<"Photo", 'Int'>
    readonly created_at: FieldRef<"Photo", 'DateTime'>
    readonly updated_at: FieldRef<"Photo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }

  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
  }

  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }

  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to delete.
     */
    limit?: number
  }

  /**
   * Photo.kost
   */
  export type Photo$kostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kost
     */
    select?: KostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kost
     */
    omit?: KostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KostInclude<ExtArgs> | null
    where?: KostWhereInput
  }

  /**
   * Photo.ulasan
   */
  export type Photo$ulasanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ulasan
     */
    omit?: UlasanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    where?: UlasanWhereInput
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    cursor?: UlasanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UlasanScalarFieldEnum | UlasanScalarFieldEnum[]
  }

  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
  }


  /**
   * Model Ulasan
   */

  export type AggregateUlasan = {
    _count: UlasanCountAggregateOutputType | null
    _avg: UlasanAvgAggregateOutputType | null
    _sum: UlasanSumAggregateOutputType | null
    _min: UlasanMinAggregateOutputType | null
    _max: UlasanMaxAggregateOutputType | null
  }

  export type UlasanAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    rate: number | null
    photos_id: number | null
    kost_id: number | null
  }

  export type UlasanSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    rate: number | null
    photos_id: number | null
    kost_id: number | null
  }

  export type UlasanMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    rate: number | null
    comments: string | null
    photos_id: number | null
    kost_id: number | null
  }

  export type UlasanMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    rate: number | null
    comments: string | null
    photos_id: number | null
    kost_id: number | null
  }

  export type UlasanCountAggregateOutputType = {
    id: number
    user_id: number
    rate: number
    comments: number
    photos_id: number
    kost_id: number
    _all: number
  }


  export type UlasanAvgAggregateInputType = {
    id?: true
    user_id?: true
    rate?: true
    photos_id?: true
    kost_id?: true
  }

  export type UlasanSumAggregateInputType = {
    id?: true
    user_id?: true
    rate?: true
    photos_id?: true
    kost_id?: true
  }

  export type UlasanMinAggregateInputType = {
    id?: true
    user_id?: true
    rate?: true
    comments?: true
    photos_id?: true
    kost_id?: true
  }

  export type UlasanMaxAggregateInputType = {
    id?: true
    user_id?: true
    rate?: true
    comments?: true
    photos_id?: true
    kost_id?: true
  }

  export type UlasanCountAggregateInputType = {
    id?: true
    user_id?: true
    rate?: true
    comments?: true
    photos_id?: true
    kost_id?: true
    _all?: true
  }

  export type UlasanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ulasan to aggregate.
     */
    where?: UlasanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ulasans to fetch.
     */
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UlasanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ulasans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ulasans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ulasans
    **/
    _count?: true | UlasanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UlasanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UlasanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UlasanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UlasanMaxAggregateInputType
  }

  export type GetUlasanAggregateType<T extends UlasanAggregateArgs> = {
        [P in keyof T & keyof AggregateUlasan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUlasan[P]>
      : GetScalarType<T[P], AggregateUlasan[P]>
  }




  export type UlasanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UlasanWhereInput
    orderBy?: UlasanOrderByWithAggregationInput | UlasanOrderByWithAggregationInput[]
    by: UlasanScalarFieldEnum[] | UlasanScalarFieldEnum
    having?: UlasanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UlasanCountAggregateInputType | true
    _avg?: UlasanAvgAggregateInputType
    _sum?: UlasanSumAggregateInputType
    _min?: UlasanMinAggregateInputType
    _max?: UlasanMaxAggregateInputType
  }

  export type UlasanGroupByOutputType = {
    id: number
    user_id: number
    rate: number
    comments: string
    photos_id: number
    kost_id: number | null
    _count: UlasanCountAggregateOutputType | null
    _avg: UlasanAvgAggregateOutputType | null
    _sum: UlasanSumAggregateOutputType | null
    _min: UlasanMinAggregateOutputType | null
    _max: UlasanMaxAggregateOutputType | null
  }

  type GetUlasanGroupByPayload<T extends UlasanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UlasanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UlasanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UlasanGroupByOutputType[P]>
            : GetScalarType<T[P], UlasanGroupByOutputType[P]>
        }
      >
    >


  export type UlasanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    rate?: boolean
    comments?: boolean
    photos_id?: boolean
    kost_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    photos?: boolean | Ulasan$photosArgs<ExtArgs>
    Kost?: boolean | Ulasan$KostArgs<ExtArgs>
  }, ExtArgs["result"]["ulasan"]>



  export type UlasanSelectScalar = {
    id?: boolean
    user_id?: boolean
    rate?: boolean
    comments?: boolean
    photos_id?: boolean
    kost_id?: boolean
  }

  export type UlasanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "rate" | "comments" | "photos_id" | "kost_id", ExtArgs["result"]["ulasan"]>
  export type UlasanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    photos?: boolean | Ulasan$photosArgs<ExtArgs>
    Kost?: boolean | Ulasan$KostArgs<ExtArgs>
  }

  export type $UlasanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ulasan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      photos: Prisma.$PhotoPayload<ExtArgs> | null
      Kost: Prisma.$KostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      rate: number
      comments: string
      photos_id: number
      kost_id: number | null
    }, ExtArgs["result"]["ulasan"]>
    composites: {}
  }

  type UlasanGetPayload<S extends boolean | null | undefined | UlasanDefaultArgs> = $Result.GetResult<Prisma.$UlasanPayload, S>

  type UlasanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UlasanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UlasanCountAggregateInputType | true
    }

  export interface UlasanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ulasan'], meta: { name: 'Ulasan' } }
    /**
     * Find zero or one Ulasan that matches the filter.
     * @param {UlasanFindUniqueArgs} args - Arguments to find a Ulasan
     * @example
     * // Get one Ulasan
     * const ulasan = await prisma.ulasan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UlasanFindUniqueArgs>(args: SelectSubset<T, UlasanFindUniqueArgs<ExtArgs>>): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ulasan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UlasanFindUniqueOrThrowArgs} args - Arguments to find a Ulasan
     * @example
     * // Get one Ulasan
     * const ulasan = await prisma.ulasan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UlasanFindUniqueOrThrowArgs>(args: SelectSubset<T, UlasanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ulasan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanFindFirstArgs} args - Arguments to find a Ulasan
     * @example
     * // Get one Ulasan
     * const ulasan = await prisma.ulasan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UlasanFindFirstArgs>(args?: SelectSubset<T, UlasanFindFirstArgs<ExtArgs>>): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ulasan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanFindFirstOrThrowArgs} args - Arguments to find a Ulasan
     * @example
     * // Get one Ulasan
     * const ulasan = await prisma.ulasan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UlasanFindFirstOrThrowArgs>(args?: SelectSubset<T, UlasanFindFirstOrThrowArgs<ExtArgs>>): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ulasans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ulasans
     * const ulasans = await prisma.ulasan.findMany()
     * 
     * // Get first 10 Ulasans
     * const ulasans = await prisma.ulasan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ulasanWithIdOnly = await prisma.ulasan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UlasanFindManyArgs>(args?: SelectSubset<T, UlasanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ulasan.
     * @param {UlasanCreateArgs} args - Arguments to create a Ulasan.
     * @example
     * // Create one Ulasan
     * const Ulasan = await prisma.ulasan.create({
     *   data: {
     *     // ... data to create a Ulasan
     *   }
     * })
     * 
     */
    create<T extends UlasanCreateArgs>(args: SelectSubset<T, UlasanCreateArgs<ExtArgs>>): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ulasans.
     * @param {UlasanCreateManyArgs} args - Arguments to create many Ulasans.
     * @example
     * // Create many Ulasans
     * const ulasan = await prisma.ulasan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UlasanCreateManyArgs>(args?: SelectSubset<T, UlasanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ulasan.
     * @param {UlasanDeleteArgs} args - Arguments to delete one Ulasan.
     * @example
     * // Delete one Ulasan
     * const Ulasan = await prisma.ulasan.delete({
     *   where: {
     *     // ... filter to delete one Ulasan
     *   }
     * })
     * 
     */
    delete<T extends UlasanDeleteArgs>(args: SelectSubset<T, UlasanDeleteArgs<ExtArgs>>): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ulasan.
     * @param {UlasanUpdateArgs} args - Arguments to update one Ulasan.
     * @example
     * // Update one Ulasan
     * const ulasan = await prisma.ulasan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UlasanUpdateArgs>(args: SelectSubset<T, UlasanUpdateArgs<ExtArgs>>): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ulasans.
     * @param {UlasanDeleteManyArgs} args - Arguments to filter Ulasans to delete.
     * @example
     * // Delete a few Ulasans
     * const { count } = await prisma.ulasan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UlasanDeleteManyArgs>(args?: SelectSubset<T, UlasanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ulasans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ulasans
     * const ulasan = await prisma.ulasan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UlasanUpdateManyArgs>(args: SelectSubset<T, UlasanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ulasan.
     * @param {UlasanUpsertArgs} args - Arguments to update or create a Ulasan.
     * @example
     * // Update or create a Ulasan
     * const ulasan = await prisma.ulasan.upsert({
     *   create: {
     *     // ... data to create a Ulasan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ulasan we want to update
     *   }
     * })
     */
    upsert<T extends UlasanUpsertArgs>(args: SelectSubset<T, UlasanUpsertArgs<ExtArgs>>): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ulasans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanCountArgs} args - Arguments to filter Ulasans to count.
     * @example
     * // Count the number of Ulasans
     * const count = await prisma.ulasan.count({
     *   where: {
     *     // ... the filter for the Ulasans we want to count
     *   }
     * })
    **/
    count<T extends UlasanCountArgs>(
      args?: Subset<T, UlasanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UlasanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ulasan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UlasanAggregateArgs>(args: Subset<T, UlasanAggregateArgs>): Prisma.PrismaPromise<GetUlasanAggregateType<T>>

    /**
     * Group by Ulasan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UlasanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UlasanGroupByArgs['orderBy'] }
        : { orderBy?: UlasanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UlasanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUlasanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ulasan model
   */
  readonly fields: UlasanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ulasan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UlasanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    photos<T extends Ulasan$photosArgs<ExtArgs> = {}>(args?: Subset<T, Ulasan$photosArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Kost<T extends Ulasan$KostArgs<ExtArgs> = {}>(args?: Subset<T, Ulasan$KostArgs<ExtArgs>>): Prisma__KostClient<$Result.GetResult<Prisma.$KostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ulasan model
   */
  interface UlasanFieldRefs {
    readonly id: FieldRef<"Ulasan", 'Int'>
    readonly user_id: FieldRef<"Ulasan", 'Int'>
    readonly rate: FieldRef<"Ulasan", 'Int'>
    readonly comments: FieldRef<"Ulasan", 'String'>
    readonly photos_id: FieldRef<"Ulasan", 'Int'>
    readonly kost_id: FieldRef<"Ulasan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ulasan findUnique
   */
  export type UlasanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ulasan
     */
    omit?: UlasanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * Filter, which Ulasan to fetch.
     */
    where: UlasanWhereUniqueInput
  }

  /**
   * Ulasan findUniqueOrThrow
   */
  export type UlasanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ulasan
     */
    omit?: UlasanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * Filter, which Ulasan to fetch.
     */
    where: UlasanWhereUniqueInput
  }

  /**
   * Ulasan findFirst
   */
  export type UlasanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ulasan
     */
    omit?: UlasanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * Filter, which Ulasan to fetch.
     */
    where?: UlasanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ulasans to fetch.
     */
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ulasans.
     */
    cursor?: UlasanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ulasans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ulasans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ulasans.
     */
    distinct?: UlasanScalarFieldEnum | UlasanScalarFieldEnum[]
  }

  /**
   * Ulasan findFirstOrThrow
   */
  export type UlasanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ulasan
     */
    omit?: UlasanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * Filter, which Ulasan to fetch.
     */
    where?: UlasanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ulasans to fetch.
     */
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ulasans.
     */
    cursor?: UlasanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ulasans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ulasans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ulasans.
     */
    distinct?: UlasanScalarFieldEnum | UlasanScalarFieldEnum[]
  }

  /**
   * Ulasan findMany
   */
  export type UlasanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ulasan
     */
    omit?: UlasanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * Filter, which Ulasans to fetch.
     */
    where?: UlasanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ulasans to fetch.
     */
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ulasans.
     */
    cursor?: UlasanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ulasans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ulasans.
     */
    skip?: number
    distinct?: UlasanScalarFieldEnum | UlasanScalarFieldEnum[]
  }

  /**
   * Ulasan create
   */
  export type UlasanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ulasan
     */
    omit?: UlasanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * The data needed to create a Ulasan.
     */
    data: XOR<UlasanCreateInput, UlasanUncheckedCreateInput>
  }

  /**
   * Ulasan createMany
   */
  export type UlasanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ulasans.
     */
    data: UlasanCreateManyInput | UlasanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ulasan update
   */
  export type UlasanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ulasan
     */
    omit?: UlasanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * The data needed to update a Ulasan.
     */
    data: XOR<UlasanUpdateInput, UlasanUncheckedUpdateInput>
    /**
     * Choose, which Ulasan to update.
     */
    where: UlasanWhereUniqueInput
  }

  /**
   * Ulasan updateMany
   */
  export type UlasanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ulasans.
     */
    data: XOR<UlasanUpdateManyMutationInput, UlasanUncheckedUpdateManyInput>
    /**
     * Filter which Ulasans to update
     */
    where?: UlasanWhereInput
    /**
     * Limit how many Ulasans to update.
     */
    limit?: number
  }

  /**
   * Ulasan upsert
   */
  export type UlasanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ulasan
     */
    omit?: UlasanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * The filter to search for the Ulasan to update in case it exists.
     */
    where: UlasanWhereUniqueInput
    /**
     * In case the Ulasan found by the `where` argument doesn't exist, create a new Ulasan with this data.
     */
    create: XOR<UlasanCreateInput, UlasanUncheckedCreateInput>
    /**
     * In case the Ulasan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UlasanUpdateInput, UlasanUncheckedUpdateInput>
  }

  /**
   * Ulasan delete
   */
  export type UlasanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ulasan
     */
    omit?: UlasanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * Filter which Ulasan to delete.
     */
    where: UlasanWhereUniqueInput
  }

  /**
   * Ulasan deleteMany
   */
  export type UlasanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ulasans to delete
     */
    where?: UlasanWhereInput
    /**
     * Limit how many Ulasans to delete.
     */
    limit?: number
  }

  /**
   * Ulasan.photos
   */
  export type Ulasan$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
  }

  /**
   * Ulasan.Kost
   */
  export type Ulasan$KostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kost
     */
    select?: KostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kost
     */
    omit?: KostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KostInclude<ExtArgs> | null
    where?: KostWhereInput
  }

  /**
   * Ulasan without action
   */
  export type UlasanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ulasan
     */
    omit?: UlasanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    full_name: 'full_name',
    email: 'email',
    password: 'password',
    image_url: 'image_url',
    role: 'role',
    user_status: 'user_status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    refresh_token: 'refresh_token',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    action: 'action',
    description: 'description',
    created_at: 'created_at'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    street_name: 'street_name',
    street_number: 'street_number',
    village_name: 'village_name',
    city: 'city',
    state: 'state',
    zip: 'zip',
    longitude: 'longitude',
    latitude: 'latitude',
    kost_id: 'kost_id'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const KostScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    price: 'price',
    type: 'type',
    ratings: 'ratings',
    pengaturan_khusus: 'pengaturan_khusus',
    address_id: 'address_id',
    facilitiesRoom_id: 'facilitiesRoom_id',
    facilitiesToilet_id: 'facilitiesToilet_id',
    owner_id: 'owner_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type KostScalarFieldEnum = (typeof KostScalarFieldEnum)[keyof typeof KostScalarFieldEnum]


  export const FacilitiesRoomScalarFieldEnum: {
    id: 'id',
    ac: 'ac',
    meja: 'meja',
    lemari: 'lemari',
    kursi: 'kursi',
    wifi: 'wifi',
    kost_id: 'kost_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FacilitiesRoomScalarFieldEnum = (typeof FacilitiesRoomScalarFieldEnum)[keyof typeof FacilitiesRoomScalarFieldEnum]


  export const FacilitiesToiletScalarFieldEnum: {
    id: 'id',
    kamar_mandi: 'kamar_mandi',
    shower: 'shower',
    kloset: 'kloset',
    air_panas: 'air_panas',
    kost_id: 'kost_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FacilitiesToiletScalarFieldEnum = (typeof FacilitiesToiletScalarFieldEnum)[keyof typeof FacilitiesToiletScalarFieldEnum]


  export const WishlistScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    kost_id: 'kost_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WishlistScalarFieldEnum = (typeof WishlistScalarFieldEnum)[keyof typeof WishlistScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    image_url: 'image_url',
    description: 'description',
    kost_id: 'kost_id',
    ulasan_id: 'ulasan_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const UlasanScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    rate: 'rate',
    comments: 'comments',
    photos_id: 'photos_id',
    kost_id: 'kost_id'
  };

  export type UlasanScalarFieldEnum = (typeof UlasanScalarFieldEnum)[keyof typeof UlasanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    full_name: 'full_name',
    email: 'email',
    password: 'password',
    image_url: 'image_url'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const RefreshTokenOrderByRelevanceFieldEnum: {
    refresh_token: 'refresh_token'
  };

  export type RefreshTokenOrderByRelevanceFieldEnum = (typeof RefreshTokenOrderByRelevanceFieldEnum)[keyof typeof RefreshTokenOrderByRelevanceFieldEnum]


  export const LogOrderByRelevanceFieldEnum: {
    action: 'action',
    description: 'description'
  };

  export type LogOrderByRelevanceFieldEnum = (typeof LogOrderByRelevanceFieldEnum)[keyof typeof LogOrderByRelevanceFieldEnum]


  export const AddressOrderByRelevanceFieldEnum: {
    street_name: 'street_name',
    street_number: 'street_number',
    village_name: 'village_name',
    city: 'city',
    state: 'state',
    zip: 'zip',
    longitude: 'longitude',
    latitude: 'latitude'
  };

  export type AddressOrderByRelevanceFieldEnum = (typeof AddressOrderByRelevanceFieldEnum)[keyof typeof AddressOrderByRelevanceFieldEnum]


  export const KostOrderByRelevanceFieldEnum: {
    slug: 'slug',
    title: 'title',
    pengaturan_khusus: 'pengaturan_khusus'
  };

  export type KostOrderByRelevanceFieldEnum = (typeof KostOrderByRelevanceFieldEnum)[keyof typeof KostOrderByRelevanceFieldEnum]


  export const PhotoOrderByRelevanceFieldEnum: {
    image_url: 'image_url',
    description: 'description'
  };

  export type PhotoOrderByRelevanceFieldEnum = (typeof PhotoOrderByRelevanceFieldEnum)[keyof typeof PhotoOrderByRelevanceFieldEnum]


  export const UlasanOrderByRelevanceFieldEnum: {
    comments: 'comments'
  };

  export type UlasanOrderByRelevanceFieldEnum = (typeof UlasanOrderByRelevanceFieldEnum)[keyof typeof UlasanOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Kost_type'
   */
  export type EnumKost_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Kost_type'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Kamar_mandi'
   */
  export type EnumKamar_mandiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Kamar_mandi'>
    


  /**
   * Reference to a field of type 'Kloset_type'
   */
  export type EnumKloset_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Kloset_type'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    full_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image_url?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    user_status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    refresh_token?: RefreshTokenListRelationFilter
    log?: LogListRelationFilter
    kost?: KostListRelationFilter
    whishlist?: WishlistListRelationFilter
    ulasan?: UlasanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image_url?: SortOrderInput | SortOrder
    role?: SortOrder
    user_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    refresh_token?: RefreshTokenOrderByRelationAggregateInput
    log?: LogOrderByRelationAggregateInput
    kost?: KostOrderByRelationAggregateInput
    whishlist?: WishlistOrderByRelationAggregateInput
    ulasan?: UlasanOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    full_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image_url?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    user_status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    refresh_token?: RefreshTokenListRelationFilter
    log?: LogListRelationFilter
    kost?: KostListRelationFilter
    whishlist?: WishlistListRelationFilter
    ulasan?: UlasanListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image_url?: SortOrderInput | SortOrder
    role?: SortOrder
    user_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    full_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    image_url?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    user_status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    user_id?: IntFilter<"RefreshToken"> | number
    refresh_token?: StringFilter<"RefreshToken"> | string
    created_at?: DateTimeFilter<"RefreshToken"> | Date | string
    updated_at?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: RefreshTokenOrderByRelevanceInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    user_id?: IntFilter<"RefreshToken"> | number
    refresh_token?: StringFilter<"RefreshToken"> | string
    created_at?: DateTimeFilter<"RefreshToken"> | Date | string
    updated_at?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _avg?: RefreshTokenAvgOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
    _sum?: RefreshTokenSumOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RefreshToken"> | number
    user_id?: IntWithAggregatesFilter<"RefreshToken"> | number
    refresh_token?: StringWithAggregatesFilter<"RefreshToken"> | string
    created_at?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: IntFilter<"Log"> | number
    user_id?: IntFilter<"Log"> | number
    action?: StringFilter<"Log"> | string
    description?: StringFilter<"Log"> | string
    created_at?: DateTimeFilter<"Log"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: LogOrderByRelevanceInput
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    user_id?: IntFilter<"Log"> | number
    action?: StringFilter<"Log"> | string
    description?: StringFilter<"Log"> | string
    created_at?: DateTimeFilter<"Log"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _avg?: LogAvgOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
    _sum?: LogSumOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Log"> | number
    user_id?: IntWithAggregatesFilter<"Log"> | number
    action?: StringWithAggregatesFilter<"Log"> | string
    description?: StringWithAggregatesFilter<"Log"> | string
    created_at?: DateTimeWithAggregatesFilter<"Log"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    street_name?: StringFilter<"Address"> | string
    street_number?: StringFilter<"Address"> | string
    village_name?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    zip?: StringFilter<"Address"> | string
    longitude?: StringFilter<"Address"> | string
    latitude?: StringFilter<"Address"> | string
    kost_id?: IntFilter<"Address"> | number
    kost?: XOR<KostScalarRelationFilter, KostWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    street_name?: SortOrder
    street_number?: SortOrder
    village_name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    kost_id?: SortOrder
    kost?: KostOrderByWithRelationInput
    _relevance?: AddressOrderByRelevanceInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    street_name?: StringFilter<"Address"> | string
    street_number?: StringFilter<"Address"> | string
    village_name?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    zip?: StringFilter<"Address"> | string
    longitude?: StringFilter<"Address"> | string
    latitude?: StringFilter<"Address"> | string
    kost_id?: IntFilter<"Address"> | number
    kost?: XOR<KostScalarRelationFilter, KostWhereInput>
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    street_name?: SortOrder
    street_number?: SortOrder
    village_name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    kost_id?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    street_name?: StringWithAggregatesFilter<"Address"> | string
    street_number?: StringWithAggregatesFilter<"Address"> | string
    village_name?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    state?: StringWithAggregatesFilter<"Address"> | string
    zip?: StringWithAggregatesFilter<"Address"> | string
    longitude?: StringWithAggregatesFilter<"Address"> | string
    latitude?: StringWithAggregatesFilter<"Address"> | string
    kost_id?: IntWithAggregatesFilter<"Address"> | number
  }

  export type KostWhereInput = {
    AND?: KostWhereInput | KostWhereInput[]
    OR?: KostWhereInput[]
    NOT?: KostWhereInput | KostWhereInput[]
    id?: IntFilter<"Kost"> | number
    slug?: StringFilter<"Kost"> | string
    title?: StringFilter<"Kost"> | string
    price?: FloatFilter<"Kost"> | number
    type?: EnumKost_typeFilter<"Kost"> | $Enums.Kost_type
    ratings?: FloatFilter<"Kost"> | number
    pengaturan_khusus?: StringNullableFilter<"Kost"> | string | null
    address_id?: IntFilter<"Kost"> | number
    facilitiesRoom_id?: IntFilter<"Kost"> | number
    facilitiesToilet_id?: IntFilter<"Kost"> | number
    owner_id?: IntFilter<"Kost"> | number
    created_at?: DateTimeFilter<"Kost"> | Date | string
    updated_at?: DateTimeFilter<"Kost"> | Date | string
    address?: AddressListRelationFilter
    facilitiesRoom?: FacilitiesRoomListRelationFilter
    facilitiesToilet?: FacilitiesToiletListRelationFilter
    photos?: PhotoListRelationFilter
    wishlists?: WishlistListRelationFilter
    ulasan?: UlasanListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type KostOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    price?: SortOrder
    type?: SortOrder
    ratings?: SortOrder
    pengaturan_khusus?: SortOrderInput | SortOrder
    address_id?: SortOrder
    facilitiesRoom_id?: SortOrder
    facilitiesToilet_id?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    address?: AddressOrderByRelationAggregateInput
    facilitiesRoom?: FacilitiesRoomOrderByRelationAggregateInput
    facilitiesToilet?: FacilitiesToiletOrderByRelationAggregateInput
    photos?: PhotoOrderByRelationAggregateInput
    wishlists?: WishlistOrderByRelationAggregateInput
    ulasan?: UlasanOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
    _relevance?: KostOrderByRelevanceInput
  }

  export type KostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    address_id?: number
    facilitiesRoom_id?: number
    facilitiesToilet_id?: number
    AND?: KostWhereInput | KostWhereInput[]
    OR?: KostWhereInput[]
    NOT?: KostWhereInput | KostWhereInput[]
    title?: StringFilter<"Kost"> | string
    price?: FloatFilter<"Kost"> | number
    type?: EnumKost_typeFilter<"Kost"> | $Enums.Kost_type
    ratings?: FloatFilter<"Kost"> | number
    pengaturan_khusus?: StringNullableFilter<"Kost"> | string | null
    owner_id?: IntFilter<"Kost"> | number
    created_at?: DateTimeFilter<"Kost"> | Date | string
    updated_at?: DateTimeFilter<"Kost"> | Date | string
    address?: AddressListRelationFilter
    facilitiesRoom?: FacilitiesRoomListRelationFilter
    facilitiesToilet?: FacilitiesToiletListRelationFilter
    photos?: PhotoListRelationFilter
    wishlists?: WishlistListRelationFilter
    ulasan?: UlasanListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "slug" | "address_id" | "facilitiesRoom_id" | "facilitiesToilet_id">

  export type KostOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    price?: SortOrder
    type?: SortOrder
    ratings?: SortOrder
    pengaturan_khusus?: SortOrderInput | SortOrder
    address_id?: SortOrder
    facilitiesRoom_id?: SortOrder
    facilitiesToilet_id?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: KostCountOrderByAggregateInput
    _avg?: KostAvgOrderByAggregateInput
    _max?: KostMaxOrderByAggregateInput
    _min?: KostMinOrderByAggregateInput
    _sum?: KostSumOrderByAggregateInput
  }

  export type KostScalarWhereWithAggregatesInput = {
    AND?: KostScalarWhereWithAggregatesInput | KostScalarWhereWithAggregatesInput[]
    OR?: KostScalarWhereWithAggregatesInput[]
    NOT?: KostScalarWhereWithAggregatesInput | KostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kost"> | number
    slug?: StringWithAggregatesFilter<"Kost"> | string
    title?: StringWithAggregatesFilter<"Kost"> | string
    price?: FloatWithAggregatesFilter<"Kost"> | number
    type?: EnumKost_typeWithAggregatesFilter<"Kost"> | $Enums.Kost_type
    ratings?: FloatWithAggregatesFilter<"Kost"> | number
    pengaturan_khusus?: StringNullableWithAggregatesFilter<"Kost"> | string | null
    address_id?: IntWithAggregatesFilter<"Kost"> | number
    facilitiesRoom_id?: IntWithAggregatesFilter<"Kost"> | number
    facilitiesToilet_id?: IntWithAggregatesFilter<"Kost"> | number
    owner_id?: IntWithAggregatesFilter<"Kost"> | number
    created_at?: DateTimeWithAggregatesFilter<"Kost"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Kost"> | Date | string
  }

  export type FacilitiesRoomWhereInput = {
    AND?: FacilitiesRoomWhereInput | FacilitiesRoomWhereInput[]
    OR?: FacilitiesRoomWhereInput[]
    NOT?: FacilitiesRoomWhereInput | FacilitiesRoomWhereInput[]
    id?: IntFilter<"FacilitiesRoom"> | number
    ac?: BoolFilter<"FacilitiesRoom"> | boolean
    meja?: BoolFilter<"FacilitiesRoom"> | boolean
    lemari?: BoolFilter<"FacilitiesRoom"> | boolean
    kursi?: BoolFilter<"FacilitiesRoom"> | boolean
    wifi?: BoolFilter<"FacilitiesRoom"> | boolean
    kost_id?: IntFilter<"FacilitiesRoom"> | number
    created_at?: DateTimeFilter<"FacilitiesRoom"> | Date | string
    updated_at?: DateTimeFilter<"FacilitiesRoom"> | Date | string
    kost?: XOR<KostScalarRelationFilter, KostWhereInput>
  }

  export type FacilitiesRoomOrderByWithRelationInput = {
    id?: SortOrder
    ac?: SortOrder
    meja?: SortOrder
    lemari?: SortOrder
    kursi?: SortOrder
    wifi?: SortOrder
    kost_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    kost?: KostOrderByWithRelationInput
  }

  export type FacilitiesRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FacilitiesRoomWhereInput | FacilitiesRoomWhereInput[]
    OR?: FacilitiesRoomWhereInput[]
    NOT?: FacilitiesRoomWhereInput | FacilitiesRoomWhereInput[]
    ac?: BoolFilter<"FacilitiesRoom"> | boolean
    meja?: BoolFilter<"FacilitiesRoom"> | boolean
    lemari?: BoolFilter<"FacilitiesRoom"> | boolean
    kursi?: BoolFilter<"FacilitiesRoom"> | boolean
    wifi?: BoolFilter<"FacilitiesRoom"> | boolean
    kost_id?: IntFilter<"FacilitiesRoom"> | number
    created_at?: DateTimeFilter<"FacilitiesRoom"> | Date | string
    updated_at?: DateTimeFilter<"FacilitiesRoom"> | Date | string
    kost?: XOR<KostScalarRelationFilter, KostWhereInput>
  }, "id">

  export type FacilitiesRoomOrderByWithAggregationInput = {
    id?: SortOrder
    ac?: SortOrder
    meja?: SortOrder
    lemari?: SortOrder
    kursi?: SortOrder
    wifi?: SortOrder
    kost_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FacilitiesRoomCountOrderByAggregateInput
    _avg?: FacilitiesRoomAvgOrderByAggregateInput
    _max?: FacilitiesRoomMaxOrderByAggregateInput
    _min?: FacilitiesRoomMinOrderByAggregateInput
    _sum?: FacilitiesRoomSumOrderByAggregateInput
  }

  export type FacilitiesRoomScalarWhereWithAggregatesInput = {
    AND?: FacilitiesRoomScalarWhereWithAggregatesInput | FacilitiesRoomScalarWhereWithAggregatesInput[]
    OR?: FacilitiesRoomScalarWhereWithAggregatesInput[]
    NOT?: FacilitiesRoomScalarWhereWithAggregatesInput | FacilitiesRoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FacilitiesRoom"> | number
    ac?: BoolWithAggregatesFilter<"FacilitiesRoom"> | boolean
    meja?: BoolWithAggregatesFilter<"FacilitiesRoom"> | boolean
    lemari?: BoolWithAggregatesFilter<"FacilitiesRoom"> | boolean
    kursi?: BoolWithAggregatesFilter<"FacilitiesRoom"> | boolean
    wifi?: BoolWithAggregatesFilter<"FacilitiesRoom"> | boolean
    kost_id?: IntWithAggregatesFilter<"FacilitiesRoom"> | number
    created_at?: DateTimeWithAggregatesFilter<"FacilitiesRoom"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"FacilitiesRoom"> | Date | string
  }

  export type FacilitiesToiletWhereInput = {
    AND?: FacilitiesToiletWhereInput | FacilitiesToiletWhereInput[]
    OR?: FacilitiesToiletWhereInput[]
    NOT?: FacilitiesToiletWhereInput | FacilitiesToiletWhereInput[]
    id?: IntFilter<"FacilitiesToilet"> | number
    kamar_mandi?: EnumKamar_mandiFilter<"FacilitiesToilet"> | $Enums.Kamar_mandi
    shower?: BoolFilter<"FacilitiesToilet"> | boolean
    kloset?: EnumKloset_typeFilter<"FacilitiesToilet"> | $Enums.Kloset_type
    air_panas?: BoolFilter<"FacilitiesToilet"> | boolean
    kost_id?: IntFilter<"FacilitiesToilet"> | number
    created_at?: DateTimeFilter<"FacilitiesToilet"> | Date | string
    updated_at?: DateTimeFilter<"FacilitiesToilet"> | Date | string
    kost?: XOR<KostScalarRelationFilter, KostWhereInput>
  }

  export type FacilitiesToiletOrderByWithRelationInput = {
    id?: SortOrder
    kamar_mandi?: SortOrder
    shower?: SortOrder
    kloset?: SortOrder
    air_panas?: SortOrder
    kost_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    kost?: KostOrderByWithRelationInput
  }

  export type FacilitiesToiletWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kost_id?: number
    AND?: FacilitiesToiletWhereInput | FacilitiesToiletWhereInput[]
    OR?: FacilitiesToiletWhereInput[]
    NOT?: FacilitiesToiletWhereInput | FacilitiesToiletWhereInput[]
    kamar_mandi?: EnumKamar_mandiFilter<"FacilitiesToilet"> | $Enums.Kamar_mandi
    shower?: BoolFilter<"FacilitiesToilet"> | boolean
    kloset?: EnumKloset_typeFilter<"FacilitiesToilet"> | $Enums.Kloset_type
    air_panas?: BoolFilter<"FacilitiesToilet"> | boolean
    created_at?: DateTimeFilter<"FacilitiesToilet"> | Date | string
    updated_at?: DateTimeFilter<"FacilitiesToilet"> | Date | string
    kost?: XOR<KostScalarRelationFilter, KostWhereInput>
  }, "id" | "kost_id">

  export type FacilitiesToiletOrderByWithAggregationInput = {
    id?: SortOrder
    kamar_mandi?: SortOrder
    shower?: SortOrder
    kloset?: SortOrder
    air_panas?: SortOrder
    kost_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FacilitiesToiletCountOrderByAggregateInput
    _avg?: FacilitiesToiletAvgOrderByAggregateInput
    _max?: FacilitiesToiletMaxOrderByAggregateInput
    _min?: FacilitiesToiletMinOrderByAggregateInput
    _sum?: FacilitiesToiletSumOrderByAggregateInput
  }

  export type FacilitiesToiletScalarWhereWithAggregatesInput = {
    AND?: FacilitiesToiletScalarWhereWithAggregatesInput | FacilitiesToiletScalarWhereWithAggregatesInput[]
    OR?: FacilitiesToiletScalarWhereWithAggregatesInput[]
    NOT?: FacilitiesToiletScalarWhereWithAggregatesInput | FacilitiesToiletScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FacilitiesToilet"> | number
    kamar_mandi?: EnumKamar_mandiWithAggregatesFilter<"FacilitiesToilet"> | $Enums.Kamar_mandi
    shower?: BoolWithAggregatesFilter<"FacilitiesToilet"> | boolean
    kloset?: EnumKloset_typeWithAggregatesFilter<"FacilitiesToilet"> | $Enums.Kloset_type
    air_panas?: BoolWithAggregatesFilter<"FacilitiesToilet"> | boolean
    kost_id?: IntWithAggregatesFilter<"FacilitiesToilet"> | number
    created_at?: DateTimeWithAggregatesFilter<"FacilitiesToilet"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"FacilitiesToilet"> | Date | string
  }

  export type WishlistWhereInput = {
    AND?: WishlistWhereInput | WishlistWhereInput[]
    OR?: WishlistWhereInput[]
    NOT?: WishlistWhereInput | WishlistWhereInput[]
    id?: IntFilter<"Wishlist"> | number
    user_id?: IntFilter<"Wishlist"> | number
    kost_id?: IntFilter<"Wishlist"> | number
    created_at?: DateTimeFilter<"Wishlist"> | Date | string
    updated_at?: DateTimeFilter<"Wishlist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    kost?: XOR<KostScalarRelationFilter, KostWhereInput>
  }

  export type WishlistOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    kost_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    kost?: KostOrderByWithRelationInput
  }

  export type WishlistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WishlistWhereInput | WishlistWhereInput[]
    OR?: WishlistWhereInput[]
    NOT?: WishlistWhereInput | WishlistWhereInput[]
    user_id?: IntFilter<"Wishlist"> | number
    kost_id?: IntFilter<"Wishlist"> | number
    created_at?: DateTimeFilter<"Wishlist"> | Date | string
    updated_at?: DateTimeFilter<"Wishlist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    kost?: XOR<KostScalarRelationFilter, KostWhereInput>
  }, "id">

  export type WishlistOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    kost_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: WishlistCountOrderByAggregateInput
    _avg?: WishlistAvgOrderByAggregateInput
    _max?: WishlistMaxOrderByAggregateInput
    _min?: WishlistMinOrderByAggregateInput
    _sum?: WishlistSumOrderByAggregateInput
  }

  export type WishlistScalarWhereWithAggregatesInput = {
    AND?: WishlistScalarWhereWithAggregatesInput | WishlistScalarWhereWithAggregatesInput[]
    OR?: WishlistScalarWhereWithAggregatesInput[]
    NOT?: WishlistScalarWhereWithAggregatesInput | WishlistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Wishlist"> | number
    user_id?: IntWithAggregatesFilter<"Wishlist"> | number
    kost_id?: IntWithAggregatesFilter<"Wishlist"> | number
    created_at?: DateTimeWithAggregatesFilter<"Wishlist"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Wishlist"> | Date | string
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: IntFilter<"Photo"> | number
    image_url?: StringFilter<"Photo"> | string
    description?: StringNullableFilter<"Photo"> | string | null
    kost_id?: IntNullableFilter<"Photo"> | number | null
    ulasan_id?: IntNullableFilter<"Photo"> | number | null
    created_at?: DateTimeFilter<"Photo"> | Date | string
    updated_at?: DateTimeFilter<"Photo"> | Date | string
    kost?: XOR<KostNullableScalarRelationFilter, KostWhereInput> | null
    ulasan?: UlasanListRelationFilter
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    image_url?: SortOrder
    description?: SortOrderInput | SortOrder
    kost_id?: SortOrderInput | SortOrder
    ulasan_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    kost?: KostOrderByWithRelationInput
    ulasan?: UlasanOrderByRelationAggregateInput
    _relevance?: PhotoOrderByRelevanceInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    image_url?: StringFilter<"Photo"> | string
    description?: StringNullableFilter<"Photo"> | string | null
    kost_id?: IntNullableFilter<"Photo"> | number | null
    ulasan_id?: IntNullableFilter<"Photo"> | number | null
    created_at?: DateTimeFilter<"Photo"> | Date | string
    updated_at?: DateTimeFilter<"Photo"> | Date | string
    kost?: XOR<KostNullableScalarRelationFilter, KostWhereInput> | null
    ulasan?: UlasanListRelationFilter
  }, "id">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    image_url?: SortOrder
    description?: SortOrderInput | SortOrder
    kost_id?: SortOrderInput | SortOrder
    ulasan_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _avg?: PhotoAvgOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
    _sum?: PhotoSumOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Photo"> | number
    image_url?: StringWithAggregatesFilter<"Photo"> | string
    description?: StringNullableWithAggregatesFilter<"Photo"> | string | null
    kost_id?: IntNullableWithAggregatesFilter<"Photo"> | number | null
    ulasan_id?: IntNullableWithAggregatesFilter<"Photo"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Photo"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Photo"> | Date | string
  }

  export type UlasanWhereInput = {
    AND?: UlasanWhereInput | UlasanWhereInput[]
    OR?: UlasanWhereInput[]
    NOT?: UlasanWhereInput | UlasanWhereInput[]
    id?: IntFilter<"Ulasan"> | number
    user_id?: IntFilter<"Ulasan"> | number
    rate?: IntFilter<"Ulasan"> | number
    comments?: StringFilter<"Ulasan"> | string
    photos_id?: IntFilter<"Ulasan"> | number
    kost_id?: IntNullableFilter<"Ulasan"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    photos?: XOR<PhotoNullableScalarRelationFilter, PhotoWhereInput> | null
    Kost?: XOR<KostNullableScalarRelationFilter, KostWhereInput> | null
  }

  export type UlasanOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    rate?: SortOrder
    comments?: SortOrder
    photos_id?: SortOrder
    kost_id?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    photos?: PhotoOrderByWithRelationInput
    Kost?: KostOrderByWithRelationInput
    _relevance?: UlasanOrderByRelevanceInput
  }

  export type UlasanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UlasanWhereInput | UlasanWhereInput[]
    OR?: UlasanWhereInput[]
    NOT?: UlasanWhereInput | UlasanWhereInput[]
    user_id?: IntFilter<"Ulasan"> | number
    rate?: IntFilter<"Ulasan"> | number
    comments?: StringFilter<"Ulasan"> | string
    photos_id?: IntFilter<"Ulasan"> | number
    kost_id?: IntNullableFilter<"Ulasan"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    photos?: XOR<PhotoNullableScalarRelationFilter, PhotoWhereInput> | null
    Kost?: XOR<KostNullableScalarRelationFilter, KostWhereInput> | null
  }, "id">

  export type UlasanOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    rate?: SortOrder
    comments?: SortOrder
    photos_id?: SortOrder
    kost_id?: SortOrderInput | SortOrder
    _count?: UlasanCountOrderByAggregateInput
    _avg?: UlasanAvgOrderByAggregateInput
    _max?: UlasanMaxOrderByAggregateInput
    _min?: UlasanMinOrderByAggregateInput
    _sum?: UlasanSumOrderByAggregateInput
  }

  export type UlasanScalarWhereWithAggregatesInput = {
    AND?: UlasanScalarWhereWithAggregatesInput | UlasanScalarWhereWithAggregatesInput[]
    OR?: UlasanScalarWhereWithAggregatesInput[]
    NOT?: UlasanScalarWhereWithAggregatesInput | UlasanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ulasan"> | number
    user_id?: IntWithAggregatesFilter<"Ulasan"> | number
    rate?: IntWithAggregatesFilter<"Ulasan"> | number
    comments?: StringWithAggregatesFilter<"Ulasan"> | string
    photos_id?: IntWithAggregatesFilter<"Ulasan"> | number
    kost_id?: IntNullableWithAggregatesFilter<"Ulasan"> | number | null
  }

  export type UserCreateInput = {
    username: string
    full_name: string
    email: string
    password: string
    image_url?: string | null
    role: $Enums.Role
    user_status: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    refresh_token?: RefreshTokenCreateNestedManyWithoutUserInput
    log?: LogCreateNestedManyWithoutUserInput
    kost?: KostCreateNestedManyWithoutOwnerInput
    whishlist?: WishlistCreateNestedManyWithoutUserInput
    ulasan?: UlasanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    full_name: string
    email: string
    password: string
    image_url?: string | null
    role: $Enums.Role
    user_status: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    refresh_token?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    log?: LogUncheckedCreateNestedManyWithoutUserInput
    kost?: KostUncheckedCreateNestedManyWithoutOwnerInput
    whishlist?: WishlistUncheckedCreateNestedManyWithoutUserInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_token?: RefreshTokenUpdateManyWithoutUserNestedInput
    log?: LogUpdateManyWithoutUserNestedInput
    kost?: KostUpdateManyWithoutOwnerNestedInput
    whishlist?: WishlistUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_token?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    log?: LogUncheckedUpdateManyWithoutUserNestedInput
    kost?: KostUncheckedUpdateManyWithoutOwnerNestedInput
    whishlist?: WishlistUncheckedUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    full_name: string
    email: string
    password: string
    image_url?: string | null
    role: $Enums.Role
    user_status: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    refresh_token: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutRefresh_tokenInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: number
    user_id: number
    refresh_token: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefresh_tokenNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: number
    user_id: number
    refresh_token: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateInput = {
    action: string
    description: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutLogInput
  }

  export type LogUncheckedCreateInput = {
    id?: number
    user_id: number
    action: string
    description: string
    created_at?: Date | string
  }

  export type LogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLogNestedInput
  }

  export type LogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateManyInput = {
    id?: number
    user_id: number
    action: string
    description: string
    created_at?: Date | string
  }

  export type LogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    street_name: string
    street_number: string
    village_name: string
    city: string
    state: string
    zip: string
    longitude: string
    latitude: string
    kost: KostCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    street_name: string
    street_number: string
    village_name: string
    city: string
    state: string
    zip: string
    longitude: string
    latitude: string
    kost_id: number
  }

  export type AddressUpdateInput = {
    street_name?: StringFieldUpdateOperationsInput | string
    street_number?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    kost?: KostUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    street_name?: StringFieldUpdateOperationsInput | string
    street_number?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    kost_id?: IntFieldUpdateOperationsInput | number
  }

  export type AddressCreateManyInput = {
    id?: number
    street_name: string
    street_number: string
    village_name: string
    city: string
    state: string
    zip: string
    longitude: string
    latitude: string
    kost_id: number
  }

  export type AddressUpdateManyMutationInput = {
    street_name?: StringFieldUpdateOperationsInput | string
    street_number?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    street_name?: StringFieldUpdateOperationsInput | string
    street_number?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    kost_id?: IntFieldUpdateOperationsInput | number
  }

  export type KostCreateInput = {
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus?: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressCreateNestedManyWithoutKostInput
    facilitiesRoom?: FacilitiesRoomCreateNestedManyWithoutKostInput
    facilitiesToilet?: FacilitiesToiletCreateNestedManyWithoutKostInput
    photos?: PhotoCreateNestedManyWithoutKostInput
    wishlists?: WishlistCreateNestedManyWithoutKostInput
    ulasan?: UlasanCreateNestedManyWithoutKostInput
    owner: UserCreateNestedOneWithoutKostInput
  }

  export type KostUncheckedCreateInput = {
    id?: number
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus?: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    owner_id: number
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressUncheckedCreateNestedManyWithoutKostInput
    facilitiesRoom?: FacilitiesRoomUncheckedCreateNestedManyWithoutKostInput
    facilitiesToilet?: FacilitiesToiletUncheckedCreateNestedManyWithoutKostInput
    photos?: PhotoUncheckedCreateNestedManyWithoutKostInput
    wishlists?: WishlistUncheckedCreateNestedManyWithoutKostInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutKostInput
  }

  export type KostUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateManyWithoutKostNestedInput
    facilitiesRoom?: FacilitiesRoomUpdateManyWithoutKostNestedInput
    facilitiesToilet?: FacilitiesToiletUpdateManyWithoutKostNestedInput
    photos?: PhotoUpdateManyWithoutKostNestedInput
    wishlists?: WishlistUpdateManyWithoutKostNestedInput
    ulasan?: UlasanUpdateManyWithoutKostNestedInput
    owner?: UserUpdateOneRequiredWithoutKostNestedInput
  }

  export type KostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateManyWithoutKostNestedInput
    facilitiesRoom?: FacilitiesRoomUncheckedUpdateManyWithoutKostNestedInput
    facilitiesToilet?: FacilitiesToiletUncheckedUpdateManyWithoutKostNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutKostNestedInput
    wishlists?: WishlistUncheckedUpdateManyWithoutKostNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutKostNestedInput
  }

  export type KostCreateManyInput = {
    id?: number
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus?: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    owner_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type KostUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilitiesRoomCreateInput = {
    ac: boolean
    meja: boolean
    lemari: boolean
    kursi: boolean
    wifi: boolean
    created_at?: Date | string
    updated_at?: Date | string
    kost: KostCreateNestedOneWithoutFacilitiesRoomInput
  }

  export type FacilitiesRoomUncheckedCreateInput = {
    id?: number
    ac: boolean
    meja: boolean
    lemari: boolean
    kursi: boolean
    wifi: boolean
    kost_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FacilitiesRoomUpdateInput = {
    ac?: BoolFieldUpdateOperationsInput | boolean
    meja?: BoolFieldUpdateOperationsInput | boolean
    lemari?: BoolFieldUpdateOperationsInput | boolean
    kursi?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    kost?: KostUpdateOneRequiredWithoutFacilitiesRoomNestedInput
  }

  export type FacilitiesRoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ac?: BoolFieldUpdateOperationsInput | boolean
    meja?: BoolFieldUpdateOperationsInput | boolean
    lemari?: BoolFieldUpdateOperationsInput | boolean
    kursi?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    kost_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilitiesRoomCreateManyInput = {
    id?: number
    ac: boolean
    meja: boolean
    lemari: boolean
    kursi: boolean
    wifi: boolean
    kost_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FacilitiesRoomUpdateManyMutationInput = {
    ac?: BoolFieldUpdateOperationsInput | boolean
    meja?: BoolFieldUpdateOperationsInput | boolean
    lemari?: BoolFieldUpdateOperationsInput | boolean
    kursi?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilitiesRoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ac?: BoolFieldUpdateOperationsInput | boolean
    meja?: BoolFieldUpdateOperationsInput | boolean
    lemari?: BoolFieldUpdateOperationsInput | boolean
    kursi?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    kost_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilitiesToiletCreateInput = {
    kamar_mandi: $Enums.Kamar_mandi
    shower: boolean
    kloset: $Enums.Kloset_type
    air_panas: boolean
    created_at?: Date | string
    updated_at?: Date | string
    kost: KostCreateNestedOneWithoutFacilitiesToiletInput
  }

  export type FacilitiesToiletUncheckedCreateInput = {
    id?: number
    kamar_mandi: $Enums.Kamar_mandi
    shower: boolean
    kloset: $Enums.Kloset_type
    air_panas: boolean
    kost_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FacilitiesToiletUpdateInput = {
    kamar_mandi?: EnumKamar_mandiFieldUpdateOperationsInput | $Enums.Kamar_mandi
    shower?: BoolFieldUpdateOperationsInput | boolean
    kloset?: EnumKloset_typeFieldUpdateOperationsInput | $Enums.Kloset_type
    air_panas?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    kost?: KostUpdateOneRequiredWithoutFacilitiesToiletNestedInput
  }

  export type FacilitiesToiletUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kamar_mandi?: EnumKamar_mandiFieldUpdateOperationsInput | $Enums.Kamar_mandi
    shower?: BoolFieldUpdateOperationsInput | boolean
    kloset?: EnumKloset_typeFieldUpdateOperationsInput | $Enums.Kloset_type
    air_panas?: BoolFieldUpdateOperationsInput | boolean
    kost_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilitiesToiletCreateManyInput = {
    id?: number
    kamar_mandi: $Enums.Kamar_mandi
    shower: boolean
    kloset: $Enums.Kloset_type
    air_panas: boolean
    kost_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FacilitiesToiletUpdateManyMutationInput = {
    kamar_mandi?: EnumKamar_mandiFieldUpdateOperationsInput | $Enums.Kamar_mandi
    shower?: BoolFieldUpdateOperationsInput | boolean
    kloset?: EnumKloset_typeFieldUpdateOperationsInput | $Enums.Kloset_type
    air_panas?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilitiesToiletUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kamar_mandi?: EnumKamar_mandiFieldUpdateOperationsInput | $Enums.Kamar_mandi
    shower?: BoolFieldUpdateOperationsInput | boolean
    kloset?: EnumKloset_typeFieldUpdateOperationsInput | $Enums.Kloset_type
    air_panas?: BoolFieldUpdateOperationsInput | boolean
    kost_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutWhishlistInput
    kost: KostCreateNestedOneWithoutWishlistsInput
  }

  export type WishlistUncheckedCreateInput = {
    id?: number
    user_id: number
    kost_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WishlistUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWhishlistNestedInput
    kost?: KostUpdateOneRequiredWithoutWishlistsNestedInput
  }

  export type WishlistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    kost_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistCreateManyInput = {
    id?: number
    user_id: number
    kost_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WishlistUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    kost_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCreateInput = {
    image_url: string
    description?: string | null
    ulasan_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    kost?: KostCreateNestedOneWithoutPhotosInput
    ulasan?: UlasanCreateNestedManyWithoutPhotosInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: number
    image_url: string
    description?: string | null
    kost_id?: number | null
    ulasan_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    ulasan?: UlasanUncheckedCreateNestedManyWithoutPhotosInput
  }

  export type PhotoUpdateInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ulasan_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    kost?: KostUpdateOneWithoutPhotosNestedInput
    ulasan?: UlasanUpdateManyWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kost_id?: NullableIntFieldUpdateOperationsInput | number | null
    ulasan_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ulasan?: UlasanUncheckedUpdateManyWithoutPhotosNestedInput
  }

  export type PhotoCreateManyInput = {
    id?: number
    image_url: string
    description?: string | null
    kost_id?: number | null
    ulasan_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PhotoUpdateManyMutationInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ulasan_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kost_id?: NullableIntFieldUpdateOperationsInput | number | null
    ulasan_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UlasanCreateInput = {
    rate: number
    comments: string
    user: UserCreateNestedOneWithoutUlasanInput
    photos?: PhotoCreateNestedOneWithoutUlasanInput
    Kost?: KostCreateNestedOneWithoutUlasanInput
  }

  export type UlasanUncheckedCreateInput = {
    id?: number
    user_id: number
    rate: number
    comments: string
    photos_id: number
    kost_id?: number | null
  }

  export type UlasanUpdateInput = {
    rate?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUlasanNestedInput
    photos?: PhotoUpdateOneWithoutUlasanNestedInput
    Kost?: KostUpdateOneWithoutUlasanNestedInput
  }

  export type UlasanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    photos_id?: IntFieldUpdateOperationsInput | number
    kost_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UlasanCreateManyInput = {
    id?: number
    user_id: number
    rate: number
    comments: string
    photos_id: number
    kost_id?: number | null
  }

  export type UlasanUpdateManyMutationInput = {
    rate?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
  }

  export type UlasanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    photos_id?: IntFieldUpdateOperationsInput | number
    kost_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type LogListRelationFilter = {
    every?: LogWhereInput
    some?: LogWhereInput
    none?: LogWhereInput
  }

  export type KostListRelationFilter = {
    every?: KostWhereInput
    some?: KostWhereInput
    none?: KostWhereInput
  }

  export type WishlistListRelationFilter = {
    every?: WishlistWhereInput
    some?: WishlistWhereInput
    none?: WishlistWhereInput
  }

  export type UlasanListRelationFilter = {
    every?: UlasanWhereInput
    some?: UlasanWhereInput
    none?: UlasanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WishlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UlasanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image_url?: SortOrder
    role?: SortOrder
    user_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image_url?: SortOrder
    role?: SortOrder
    user_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image_url?: SortOrder
    role?: SortOrder
    user_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenOrderByRelevanceInput = {
    fields: RefreshTokenOrderByRelevanceFieldEnum | RefreshTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RefreshTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RefreshTokenSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type LogOrderByRelevanceInput = {
    fields: LogOrderByRelevanceFieldEnum | LogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type LogAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type LogSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type KostScalarRelationFilter = {
    is?: KostWhereInput
    isNot?: KostWhereInput
  }

  export type AddressOrderByRelevanceInput = {
    fields: AddressOrderByRelevanceFieldEnum | AddressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    street_name?: SortOrder
    street_number?: SortOrder
    village_name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    kost_id?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    kost_id?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    street_name?: SortOrder
    street_number?: SortOrder
    village_name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    kost_id?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    street_name?: SortOrder
    street_number?: SortOrder
    village_name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    kost_id?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    kost_id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumKost_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.Kost_type | EnumKost_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Kost_type[]
    notIn?: $Enums.Kost_type[]
    not?: NestedEnumKost_typeFilter<$PrismaModel> | $Enums.Kost_type
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type FacilitiesRoomListRelationFilter = {
    every?: FacilitiesRoomWhereInput
    some?: FacilitiesRoomWhereInput
    none?: FacilitiesRoomWhereInput
  }

  export type FacilitiesToiletListRelationFilter = {
    every?: FacilitiesToiletWhereInput
    some?: FacilitiesToiletWhereInput
    none?: FacilitiesToiletWhereInput
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacilitiesRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacilitiesToiletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KostOrderByRelevanceInput = {
    fields: KostOrderByRelevanceFieldEnum | KostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KostCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    price?: SortOrder
    type?: SortOrder
    ratings?: SortOrder
    pengaturan_khusus?: SortOrder
    address_id?: SortOrder
    facilitiesRoom_id?: SortOrder
    facilitiesToilet_id?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type KostAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    ratings?: SortOrder
    address_id?: SortOrder
    facilitiesRoom_id?: SortOrder
    facilitiesToilet_id?: SortOrder
    owner_id?: SortOrder
  }

  export type KostMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    price?: SortOrder
    type?: SortOrder
    ratings?: SortOrder
    pengaturan_khusus?: SortOrder
    address_id?: SortOrder
    facilitiesRoom_id?: SortOrder
    facilitiesToilet_id?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type KostMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    price?: SortOrder
    type?: SortOrder
    ratings?: SortOrder
    pengaturan_khusus?: SortOrder
    address_id?: SortOrder
    facilitiesRoom_id?: SortOrder
    facilitiesToilet_id?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type KostSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    ratings?: SortOrder
    address_id?: SortOrder
    facilitiesRoom_id?: SortOrder
    facilitiesToilet_id?: SortOrder
    owner_id?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumKost_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Kost_type | EnumKost_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Kost_type[]
    notIn?: $Enums.Kost_type[]
    not?: NestedEnumKost_typeWithAggregatesFilter<$PrismaModel> | $Enums.Kost_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKost_typeFilter<$PrismaModel>
    _max?: NestedEnumKost_typeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FacilitiesRoomCountOrderByAggregateInput = {
    id?: SortOrder
    ac?: SortOrder
    meja?: SortOrder
    lemari?: SortOrder
    kursi?: SortOrder
    wifi?: SortOrder
    kost_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FacilitiesRoomAvgOrderByAggregateInput = {
    id?: SortOrder
    kost_id?: SortOrder
  }

  export type FacilitiesRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    ac?: SortOrder
    meja?: SortOrder
    lemari?: SortOrder
    kursi?: SortOrder
    wifi?: SortOrder
    kost_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FacilitiesRoomMinOrderByAggregateInput = {
    id?: SortOrder
    ac?: SortOrder
    meja?: SortOrder
    lemari?: SortOrder
    kursi?: SortOrder
    wifi?: SortOrder
    kost_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FacilitiesRoomSumOrderByAggregateInput = {
    id?: SortOrder
    kost_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumKamar_mandiFilter<$PrismaModel = never> = {
    equals?: $Enums.Kamar_mandi | EnumKamar_mandiFieldRefInput<$PrismaModel>
    in?: $Enums.Kamar_mandi[]
    notIn?: $Enums.Kamar_mandi[]
    not?: NestedEnumKamar_mandiFilter<$PrismaModel> | $Enums.Kamar_mandi
  }

  export type EnumKloset_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.Kloset_type | EnumKloset_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Kloset_type[]
    notIn?: $Enums.Kloset_type[]
    not?: NestedEnumKloset_typeFilter<$PrismaModel> | $Enums.Kloset_type
  }

  export type FacilitiesToiletCountOrderByAggregateInput = {
    id?: SortOrder
    kamar_mandi?: SortOrder
    shower?: SortOrder
    kloset?: SortOrder
    air_panas?: SortOrder
    kost_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FacilitiesToiletAvgOrderByAggregateInput = {
    id?: SortOrder
    kost_id?: SortOrder
  }

  export type FacilitiesToiletMaxOrderByAggregateInput = {
    id?: SortOrder
    kamar_mandi?: SortOrder
    shower?: SortOrder
    kloset?: SortOrder
    air_panas?: SortOrder
    kost_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FacilitiesToiletMinOrderByAggregateInput = {
    id?: SortOrder
    kamar_mandi?: SortOrder
    shower?: SortOrder
    kloset?: SortOrder
    air_panas?: SortOrder
    kost_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FacilitiesToiletSumOrderByAggregateInput = {
    id?: SortOrder
    kost_id?: SortOrder
  }

  export type EnumKamar_mandiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Kamar_mandi | EnumKamar_mandiFieldRefInput<$PrismaModel>
    in?: $Enums.Kamar_mandi[]
    notIn?: $Enums.Kamar_mandi[]
    not?: NestedEnumKamar_mandiWithAggregatesFilter<$PrismaModel> | $Enums.Kamar_mandi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKamar_mandiFilter<$PrismaModel>
    _max?: NestedEnumKamar_mandiFilter<$PrismaModel>
  }

  export type EnumKloset_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Kloset_type | EnumKloset_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Kloset_type[]
    notIn?: $Enums.Kloset_type[]
    not?: NestedEnumKloset_typeWithAggregatesFilter<$PrismaModel> | $Enums.Kloset_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKloset_typeFilter<$PrismaModel>
    _max?: NestedEnumKloset_typeFilter<$PrismaModel>
  }

  export type WishlistCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    kost_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WishlistAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    kost_id?: SortOrder
  }

  export type WishlistMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    kost_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WishlistMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    kost_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WishlistSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    kost_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type KostNullableScalarRelationFilter = {
    is?: KostWhereInput | null
    isNot?: KostWhereInput | null
  }

  export type PhotoOrderByRelevanceInput = {
    fields: PhotoOrderByRelevanceFieldEnum | PhotoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    kost_id?: SortOrder
    ulasan_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PhotoAvgOrderByAggregateInput = {
    id?: SortOrder
    kost_id?: SortOrder
    ulasan_id?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    kost_id?: SortOrder
    ulasan_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    kost_id?: SortOrder
    ulasan_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PhotoSumOrderByAggregateInput = {
    id?: SortOrder
    kost_id?: SortOrder
    ulasan_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PhotoNullableScalarRelationFilter = {
    is?: PhotoWhereInput | null
    isNot?: PhotoWhereInput | null
  }

  export type UlasanOrderByRelevanceInput = {
    fields: UlasanOrderByRelevanceFieldEnum | UlasanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UlasanCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rate?: SortOrder
    comments?: SortOrder
    photos_id?: SortOrder
    kost_id?: SortOrder
  }

  export type UlasanAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rate?: SortOrder
    photos_id?: SortOrder
    kost_id?: SortOrder
  }

  export type UlasanMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rate?: SortOrder
    comments?: SortOrder
    photos_id?: SortOrder
    kost_id?: SortOrder
  }

  export type UlasanMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rate?: SortOrder
    comments?: SortOrder
    photos_id?: SortOrder
    kost_id?: SortOrder
  }

  export type UlasanSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rate?: SortOrder
    photos_id?: SortOrder
    kost_id?: SortOrder
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type LogCreateNestedManyWithoutUserInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type KostCreateNestedManyWithoutOwnerInput = {
    create?: XOR<KostCreateWithoutOwnerInput, KostUncheckedCreateWithoutOwnerInput> | KostCreateWithoutOwnerInput[] | KostUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: KostCreateOrConnectWithoutOwnerInput | KostCreateOrConnectWithoutOwnerInput[]
    createMany?: KostCreateManyOwnerInputEnvelope
    connect?: KostWhereUniqueInput | KostWhereUniqueInput[]
  }

  export type WishlistCreateNestedManyWithoutUserInput = {
    create?: XOR<WishlistCreateWithoutUserInput, WishlistUncheckedCreateWithoutUserInput> | WishlistCreateWithoutUserInput[] | WishlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutUserInput | WishlistCreateOrConnectWithoutUserInput[]
    createMany?: WishlistCreateManyUserInputEnvelope
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
  }

  export type UlasanCreateNestedManyWithoutUserInput = {
    create?: XOR<UlasanCreateWithoutUserInput, UlasanUncheckedCreateWithoutUserInput> | UlasanCreateWithoutUserInput[] | UlasanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutUserInput | UlasanCreateOrConnectWithoutUserInput[]
    createMany?: UlasanCreateManyUserInputEnvelope
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type KostUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<KostCreateWithoutOwnerInput, KostUncheckedCreateWithoutOwnerInput> | KostCreateWithoutOwnerInput[] | KostUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: KostCreateOrConnectWithoutOwnerInput | KostCreateOrConnectWithoutOwnerInput[]
    createMany?: KostCreateManyOwnerInputEnvelope
    connect?: KostWhereUniqueInput | KostWhereUniqueInput[]
  }

  export type WishlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WishlistCreateWithoutUserInput, WishlistUncheckedCreateWithoutUserInput> | WishlistCreateWithoutUserInput[] | WishlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutUserInput | WishlistCreateOrConnectWithoutUserInput[]
    createMany?: WishlistCreateManyUserInputEnvelope
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
  }

  export type UlasanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UlasanCreateWithoutUserInput, UlasanUncheckedCreateWithoutUserInput> | UlasanCreateWithoutUserInput[] | UlasanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutUserInput | UlasanCreateOrConnectWithoutUserInput[]
    createMany?: UlasanCreateManyUserInputEnvelope
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type LogUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutUserInput | LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutUserInput | LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutUserInput | LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type KostUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<KostCreateWithoutOwnerInput, KostUncheckedCreateWithoutOwnerInput> | KostCreateWithoutOwnerInput[] | KostUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: KostCreateOrConnectWithoutOwnerInput | KostCreateOrConnectWithoutOwnerInput[]
    upsert?: KostUpsertWithWhereUniqueWithoutOwnerInput | KostUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: KostCreateManyOwnerInputEnvelope
    set?: KostWhereUniqueInput | KostWhereUniqueInput[]
    disconnect?: KostWhereUniqueInput | KostWhereUniqueInput[]
    delete?: KostWhereUniqueInput | KostWhereUniqueInput[]
    connect?: KostWhereUniqueInput | KostWhereUniqueInput[]
    update?: KostUpdateWithWhereUniqueWithoutOwnerInput | KostUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: KostUpdateManyWithWhereWithoutOwnerInput | KostUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: KostScalarWhereInput | KostScalarWhereInput[]
  }

  export type WishlistUpdateManyWithoutUserNestedInput = {
    create?: XOR<WishlistCreateWithoutUserInput, WishlistUncheckedCreateWithoutUserInput> | WishlistCreateWithoutUserInput[] | WishlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutUserInput | WishlistCreateOrConnectWithoutUserInput[]
    upsert?: WishlistUpsertWithWhereUniqueWithoutUserInput | WishlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WishlistCreateManyUserInputEnvelope
    set?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    disconnect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    delete?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    update?: WishlistUpdateWithWhereUniqueWithoutUserInput | WishlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WishlistUpdateManyWithWhereWithoutUserInput | WishlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
  }

  export type UlasanUpdateManyWithoutUserNestedInput = {
    create?: XOR<UlasanCreateWithoutUserInput, UlasanUncheckedCreateWithoutUserInput> | UlasanCreateWithoutUserInput[] | UlasanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutUserInput | UlasanCreateOrConnectWithoutUserInput[]
    upsert?: UlasanUpsertWithWhereUniqueWithoutUserInput | UlasanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UlasanCreateManyUserInputEnvelope
    set?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    disconnect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    delete?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    update?: UlasanUpdateWithWhereUniqueWithoutUserInput | UlasanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UlasanUpdateManyWithWhereWithoutUserInput | UlasanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type LogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutUserInput | LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutUserInput | LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutUserInput | LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type KostUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<KostCreateWithoutOwnerInput, KostUncheckedCreateWithoutOwnerInput> | KostCreateWithoutOwnerInput[] | KostUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: KostCreateOrConnectWithoutOwnerInput | KostCreateOrConnectWithoutOwnerInput[]
    upsert?: KostUpsertWithWhereUniqueWithoutOwnerInput | KostUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: KostCreateManyOwnerInputEnvelope
    set?: KostWhereUniqueInput | KostWhereUniqueInput[]
    disconnect?: KostWhereUniqueInput | KostWhereUniqueInput[]
    delete?: KostWhereUniqueInput | KostWhereUniqueInput[]
    connect?: KostWhereUniqueInput | KostWhereUniqueInput[]
    update?: KostUpdateWithWhereUniqueWithoutOwnerInput | KostUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: KostUpdateManyWithWhereWithoutOwnerInput | KostUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: KostScalarWhereInput | KostScalarWhereInput[]
  }

  export type WishlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WishlistCreateWithoutUserInput, WishlistUncheckedCreateWithoutUserInput> | WishlistCreateWithoutUserInput[] | WishlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutUserInput | WishlistCreateOrConnectWithoutUserInput[]
    upsert?: WishlistUpsertWithWhereUniqueWithoutUserInput | WishlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WishlistCreateManyUserInputEnvelope
    set?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    disconnect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    delete?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    update?: WishlistUpdateWithWhereUniqueWithoutUserInput | WishlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WishlistUpdateManyWithWhereWithoutUserInput | WishlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
  }

  export type UlasanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UlasanCreateWithoutUserInput, UlasanUncheckedCreateWithoutUserInput> | UlasanCreateWithoutUserInput[] | UlasanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutUserInput | UlasanCreateOrConnectWithoutUserInput[]
    upsert?: UlasanUpsertWithWhereUniqueWithoutUserInput | UlasanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UlasanCreateManyUserInputEnvelope
    set?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    disconnect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    delete?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    update?: UlasanUpdateWithWhereUniqueWithoutUserInput | UlasanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UlasanUpdateManyWithWhereWithoutUserInput | UlasanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefresh_tokenInput = {
    create?: XOR<UserCreateWithoutRefresh_tokenInput, UserUncheckedCreateWithoutRefresh_tokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefresh_tokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefresh_tokenNestedInput = {
    create?: XOR<UserCreateWithoutRefresh_tokenInput, UserUncheckedCreateWithoutRefresh_tokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefresh_tokenInput
    upsert?: UserUpsertWithoutRefresh_tokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefresh_tokenInput, UserUpdateWithoutRefresh_tokenInput>, UserUncheckedUpdateWithoutRefresh_tokenInput>
  }

  export type UserCreateNestedOneWithoutLogInput = {
    create?: XOR<UserCreateWithoutLogInput, UserUncheckedCreateWithoutLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLogNestedInput = {
    create?: XOR<UserCreateWithoutLogInput, UserUncheckedCreateWithoutLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogInput
    upsert?: UserUpsertWithoutLogInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLogInput, UserUpdateWithoutLogInput>, UserUncheckedUpdateWithoutLogInput>
  }

  export type KostCreateNestedOneWithoutAddressInput = {
    create?: XOR<KostCreateWithoutAddressInput, KostUncheckedCreateWithoutAddressInput>
    connectOrCreate?: KostCreateOrConnectWithoutAddressInput
    connect?: KostWhereUniqueInput
  }

  export type KostUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<KostCreateWithoutAddressInput, KostUncheckedCreateWithoutAddressInput>
    connectOrCreate?: KostCreateOrConnectWithoutAddressInput
    upsert?: KostUpsertWithoutAddressInput
    connect?: KostWhereUniqueInput
    update?: XOR<XOR<KostUpdateToOneWithWhereWithoutAddressInput, KostUpdateWithoutAddressInput>, KostUncheckedUpdateWithoutAddressInput>
  }

  export type AddressCreateNestedManyWithoutKostInput = {
    create?: XOR<AddressCreateWithoutKostInput, AddressUncheckedCreateWithoutKostInput> | AddressCreateWithoutKostInput[] | AddressUncheckedCreateWithoutKostInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutKostInput | AddressCreateOrConnectWithoutKostInput[]
    createMany?: AddressCreateManyKostInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type FacilitiesRoomCreateNestedManyWithoutKostInput = {
    create?: XOR<FacilitiesRoomCreateWithoutKostInput, FacilitiesRoomUncheckedCreateWithoutKostInput> | FacilitiesRoomCreateWithoutKostInput[] | FacilitiesRoomUncheckedCreateWithoutKostInput[]
    connectOrCreate?: FacilitiesRoomCreateOrConnectWithoutKostInput | FacilitiesRoomCreateOrConnectWithoutKostInput[]
    createMany?: FacilitiesRoomCreateManyKostInputEnvelope
    connect?: FacilitiesRoomWhereUniqueInput | FacilitiesRoomWhereUniqueInput[]
  }

  export type FacilitiesToiletCreateNestedManyWithoutKostInput = {
    create?: XOR<FacilitiesToiletCreateWithoutKostInput, FacilitiesToiletUncheckedCreateWithoutKostInput> | FacilitiesToiletCreateWithoutKostInput[] | FacilitiesToiletUncheckedCreateWithoutKostInput[]
    connectOrCreate?: FacilitiesToiletCreateOrConnectWithoutKostInput | FacilitiesToiletCreateOrConnectWithoutKostInput[]
    createMany?: FacilitiesToiletCreateManyKostInputEnvelope
    connect?: FacilitiesToiletWhereUniqueInput | FacilitiesToiletWhereUniqueInput[]
  }

  export type PhotoCreateNestedManyWithoutKostInput = {
    create?: XOR<PhotoCreateWithoutKostInput, PhotoUncheckedCreateWithoutKostInput> | PhotoCreateWithoutKostInput[] | PhotoUncheckedCreateWithoutKostInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutKostInput | PhotoCreateOrConnectWithoutKostInput[]
    createMany?: PhotoCreateManyKostInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type WishlistCreateNestedManyWithoutKostInput = {
    create?: XOR<WishlistCreateWithoutKostInput, WishlistUncheckedCreateWithoutKostInput> | WishlistCreateWithoutKostInput[] | WishlistUncheckedCreateWithoutKostInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutKostInput | WishlistCreateOrConnectWithoutKostInput[]
    createMany?: WishlistCreateManyKostInputEnvelope
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
  }

  export type UlasanCreateNestedManyWithoutKostInput = {
    create?: XOR<UlasanCreateWithoutKostInput, UlasanUncheckedCreateWithoutKostInput> | UlasanCreateWithoutKostInput[] | UlasanUncheckedCreateWithoutKostInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutKostInput | UlasanCreateOrConnectWithoutKostInput[]
    createMany?: UlasanCreateManyKostInputEnvelope
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutKostInput = {
    create?: XOR<UserCreateWithoutKostInput, UserUncheckedCreateWithoutKostInput>
    connectOrCreate?: UserCreateOrConnectWithoutKostInput
    connect?: UserWhereUniqueInput
  }

  export type AddressUncheckedCreateNestedManyWithoutKostInput = {
    create?: XOR<AddressCreateWithoutKostInput, AddressUncheckedCreateWithoutKostInput> | AddressCreateWithoutKostInput[] | AddressUncheckedCreateWithoutKostInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutKostInput | AddressCreateOrConnectWithoutKostInput[]
    createMany?: AddressCreateManyKostInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type FacilitiesRoomUncheckedCreateNestedManyWithoutKostInput = {
    create?: XOR<FacilitiesRoomCreateWithoutKostInput, FacilitiesRoomUncheckedCreateWithoutKostInput> | FacilitiesRoomCreateWithoutKostInput[] | FacilitiesRoomUncheckedCreateWithoutKostInput[]
    connectOrCreate?: FacilitiesRoomCreateOrConnectWithoutKostInput | FacilitiesRoomCreateOrConnectWithoutKostInput[]
    createMany?: FacilitiesRoomCreateManyKostInputEnvelope
    connect?: FacilitiesRoomWhereUniqueInput | FacilitiesRoomWhereUniqueInput[]
  }

  export type FacilitiesToiletUncheckedCreateNestedManyWithoutKostInput = {
    create?: XOR<FacilitiesToiletCreateWithoutKostInput, FacilitiesToiletUncheckedCreateWithoutKostInput> | FacilitiesToiletCreateWithoutKostInput[] | FacilitiesToiletUncheckedCreateWithoutKostInput[]
    connectOrCreate?: FacilitiesToiletCreateOrConnectWithoutKostInput | FacilitiesToiletCreateOrConnectWithoutKostInput[]
    createMany?: FacilitiesToiletCreateManyKostInputEnvelope
    connect?: FacilitiesToiletWhereUniqueInput | FacilitiesToiletWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutKostInput = {
    create?: XOR<PhotoCreateWithoutKostInput, PhotoUncheckedCreateWithoutKostInput> | PhotoCreateWithoutKostInput[] | PhotoUncheckedCreateWithoutKostInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutKostInput | PhotoCreateOrConnectWithoutKostInput[]
    createMany?: PhotoCreateManyKostInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type WishlistUncheckedCreateNestedManyWithoutKostInput = {
    create?: XOR<WishlistCreateWithoutKostInput, WishlistUncheckedCreateWithoutKostInput> | WishlistCreateWithoutKostInput[] | WishlistUncheckedCreateWithoutKostInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutKostInput | WishlistCreateOrConnectWithoutKostInput[]
    createMany?: WishlistCreateManyKostInputEnvelope
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
  }

  export type UlasanUncheckedCreateNestedManyWithoutKostInput = {
    create?: XOR<UlasanCreateWithoutKostInput, UlasanUncheckedCreateWithoutKostInput> | UlasanCreateWithoutKostInput[] | UlasanUncheckedCreateWithoutKostInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutKostInput | UlasanCreateOrConnectWithoutKostInput[]
    createMany?: UlasanCreateManyKostInputEnvelope
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumKost_typeFieldUpdateOperationsInput = {
    set?: $Enums.Kost_type
  }

  export type AddressUpdateManyWithoutKostNestedInput = {
    create?: XOR<AddressCreateWithoutKostInput, AddressUncheckedCreateWithoutKostInput> | AddressCreateWithoutKostInput[] | AddressUncheckedCreateWithoutKostInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutKostInput | AddressCreateOrConnectWithoutKostInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutKostInput | AddressUpsertWithWhereUniqueWithoutKostInput[]
    createMany?: AddressCreateManyKostInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutKostInput | AddressUpdateWithWhereUniqueWithoutKostInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutKostInput | AddressUpdateManyWithWhereWithoutKostInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type FacilitiesRoomUpdateManyWithoutKostNestedInput = {
    create?: XOR<FacilitiesRoomCreateWithoutKostInput, FacilitiesRoomUncheckedCreateWithoutKostInput> | FacilitiesRoomCreateWithoutKostInput[] | FacilitiesRoomUncheckedCreateWithoutKostInput[]
    connectOrCreate?: FacilitiesRoomCreateOrConnectWithoutKostInput | FacilitiesRoomCreateOrConnectWithoutKostInput[]
    upsert?: FacilitiesRoomUpsertWithWhereUniqueWithoutKostInput | FacilitiesRoomUpsertWithWhereUniqueWithoutKostInput[]
    createMany?: FacilitiesRoomCreateManyKostInputEnvelope
    set?: FacilitiesRoomWhereUniqueInput | FacilitiesRoomWhereUniqueInput[]
    disconnect?: FacilitiesRoomWhereUniqueInput | FacilitiesRoomWhereUniqueInput[]
    delete?: FacilitiesRoomWhereUniqueInput | FacilitiesRoomWhereUniqueInput[]
    connect?: FacilitiesRoomWhereUniqueInput | FacilitiesRoomWhereUniqueInput[]
    update?: FacilitiesRoomUpdateWithWhereUniqueWithoutKostInput | FacilitiesRoomUpdateWithWhereUniqueWithoutKostInput[]
    updateMany?: FacilitiesRoomUpdateManyWithWhereWithoutKostInput | FacilitiesRoomUpdateManyWithWhereWithoutKostInput[]
    deleteMany?: FacilitiesRoomScalarWhereInput | FacilitiesRoomScalarWhereInput[]
  }

  export type FacilitiesToiletUpdateManyWithoutKostNestedInput = {
    create?: XOR<FacilitiesToiletCreateWithoutKostInput, FacilitiesToiletUncheckedCreateWithoutKostInput> | FacilitiesToiletCreateWithoutKostInput[] | FacilitiesToiletUncheckedCreateWithoutKostInput[]
    connectOrCreate?: FacilitiesToiletCreateOrConnectWithoutKostInput | FacilitiesToiletCreateOrConnectWithoutKostInput[]
    upsert?: FacilitiesToiletUpsertWithWhereUniqueWithoutKostInput | FacilitiesToiletUpsertWithWhereUniqueWithoutKostInput[]
    createMany?: FacilitiesToiletCreateManyKostInputEnvelope
    set?: FacilitiesToiletWhereUniqueInput | FacilitiesToiletWhereUniqueInput[]
    disconnect?: FacilitiesToiletWhereUniqueInput | FacilitiesToiletWhereUniqueInput[]
    delete?: FacilitiesToiletWhereUniqueInput | FacilitiesToiletWhereUniqueInput[]
    connect?: FacilitiesToiletWhereUniqueInput | FacilitiesToiletWhereUniqueInput[]
    update?: FacilitiesToiletUpdateWithWhereUniqueWithoutKostInput | FacilitiesToiletUpdateWithWhereUniqueWithoutKostInput[]
    updateMany?: FacilitiesToiletUpdateManyWithWhereWithoutKostInput | FacilitiesToiletUpdateManyWithWhereWithoutKostInput[]
    deleteMany?: FacilitiesToiletScalarWhereInput | FacilitiesToiletScalarWhereInput[]
  }

  export type PhotoUpdateManyWithoutKostNestedInput = {
    create?: XOR<PhotoCreateWithoutKostInput, PhotoUncheckedCreateWithoutKostInput> | PhotoCreateWithoutKostInput[] | PhotoUncheckedCreateWithoutKostInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutKostInput | PhotoCreateOrConnectWithoutKostInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutKostInput | PhotoUpsertWithWhereUniqueWithoutKostInput[]
    createMany?: PhotoCreateManyKostInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutKostInput | PhotoUpdateWithWhereUniqueWithoutKostInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutKostInput | PhotoUpdateManyWithWhereWithoutKostInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type WishlistUpdateManyWithoutKostNestedInput = {
    create?: XOR<WishlistCreateWithoutKostInput, WishlistUncheckedCreateWithoutKostInput> | WishlistCreateWithoutKostInput[] | WishlistUncheckedCreateWithoutKostInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutKostInput | WishlistCreateOrConnectWithoutKostInput[]
    upsert?: WishlistUpsertWithWhereUniqueWithoutKostInput | WishlistUpsertWithWhereUniqueWithoutKostInput[]
    createMany?: WishlistCreateManyKostInputEnvelope
    set?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    disconnect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    delete?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    update?: WishlistUpdateWithWhereUniqueWithoutKostInput | WishlistUpdateWithWhereUniqueWithoutKostInput[]
    updateMany?: WishlistUpdateManyWithWhereWithoutKostInput | WishlistUpdateManyWithWhereWithoutKostInput[]
    deleteMany?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
  }

  export type UlasanUpdateManyWithoutKostNestedInput = {
    create?: XOR<UlasanCreateWithoutKostInput, UlasanUncheckedCreateWithoutKostInput> | UlasanCreateWithoutKostInput[] | UlasanUncheckedCreateWithoutKostInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutKostInput | UlasanCreateOrConnectWithoutKostInput[]
    upsert?: UlasanUpsertWithWhereUniqueWithoutKostInput | UlasanUpsertWithWhereUniqueWithoutKostInput[]
    createMany?: UlasanCreateManyKostInputEnvelope
    set?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    disconnect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    delete?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    update?: UlasanUpdateWithWhereUniqueWithoutKostInput | UlasanUpdateWithWhereUniqueWithoutKostInput[]
    updateMany?: UlasanUpdateManyWithWhereWithoutKostInput | UlasanUpdateManyWithWhereWithoutKostInput[]
    deleteMany?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutKostNestedInput = {
    create?: XOR<UserCreateWithoutKostInput, UserUncheckedCreateWithoutKostInput>
    connectOrCreate?: UserCreateOrConnectWithoutKostInput
    upsert?: UserUpsertWithoutKostInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutKostInput, UserUpdateWithoutKostInput>, UserUncheckedUpdateWithoutKostInput>
  }

  export type AddressUncheckedUpdateManyWithoutKostNestedInput = {
    create?: XOR<AddressCreateWithoutKostInput, AddressUncheckedCreateWithoutKostInput> | AddressCreateWithoutKostInput[] | AddressUncheckedCreateWithoutKostInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutKostInput | AddressCreateOrConnectWithoutKostInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutKostInput | AddressUpsertWithWhereUniqueWithoutKostInput[]
    createMany?: AddressCreateManyKostInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutKostInput | AddressUpdateWithWhereUniqueWithoutKostInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutKostInput | AddressUpdateManyWithWhereWithoutKostInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type FacilitiesRoomUncheckedUpdateManyWithoutKostNestedInput = {
    create?: XOR<FacilitiesRoomCreateWithoutKostInput, FacilitiesRoomUncheckedCreateWithoutKostInput> | FacilitiesRoomCreateWithoutKostInput[] | FacilitiesRoomUncheckedCreateWithoutKostInput[]
    connectOrCreate?: FacilitiesRoomCreateOrConnectWithoutKostInput | FacilitiesRoomCreateOrConnectWithoutKostInput[]
    upsert?: FacilitiesRoomUpsertWithWhereUniqueWithoutKostInput | FacilitiesRoomUpsertWithWhereUniqueWithoutKostInput[]
    createMany?: FacilitiesRoomCreateManyKostInputEnvelope
    set?: FacilitiesRoomWhereUniqueInput | FacilitiesRoomWhereUniqueInput[]
    disconnect?: FacilitiesRoomWhereUniqueInput | FacilitiesRoomWhereUniqueInput[]
    delete?: FacilitiesRoomWhereUniqueInput | FacilitiesRoomWhereUniqueInput[]
    connect?: FacilitiesRoomWhereUniqueInput | FacilitiesRoomWhereUniqueInput[]
    update?: FacilitiesRoomUpdateWithWhereUniqueWithoutKostInput | FacilitiesRoomUpdateWithWhereUniqueWithoutKostInput[]
    updateMany?: FacilitiesRoomUpdateManyWithWhereWithoutKostInput | FacilitiesRoomUpdateManyWithWhereWithoutKostInput[]
    deleteMany?: FacilitiesRoomScalarWhereInput | FacilitiesRoomScalarWhereInput[]
  }

  export type FacilitiesToiletUncheckedUpdateManyWithoutKostNestedInput = {
    create?: XOR<FacilitiesToiletCreateWithoutKostInput, FacilitiesToiletUncheckedCreateWithoutKostInput> | FacilitiesToiletCreateWithoutKostInput[] | FacilitiesToiletUncheckedCreateWithoutKostInput[]
    connectOrCreate?: FacilitiesToiletCreateOrConnectWithoutKostInput | FacilitiesToiletCreateOrConnectWithoutKostInput[]
    upsert?: FacilitiesToiletUpsertWithWhereUniqueWithoutKostInput | FacilitiesToiletUpsertWithWhereUniqueWithoutKostInput[]
    createMany?: FacilitiesToiletCreateManyKostInputEnvelope
    set?: FacilitiesToiletWhereUniqueInput | FacilitiesToiletWhereUniqueInput[]
    disconnect?: FacilitiesToiletWhereUniqueInput | FacilitiesToiletWhereUniqueInput[]
    delete?: FacilitiesToiletWhereUniqueInput | FacilitiesToiletWhereUniqueInput[]
    connect?: FacilitiesToiletWhereUniqueInput | FacilitiesToiletWhereUniqueInput[]
    update?: FacilitiesToiletUpdateWithWhereUniqueWithoutKostInput | FacilitiesToiletUpdateWithWhereUniqueWithoutKostInput[]
    updateMany?: FacilitiesToiletUpdateManyWithWhereWithoutKostInput | FacilitiesToiletUpdateManyWithWhereWithoutKostInput[]
    deleteMany?: FacilitiesToiletScalarWhereInput | FacilitiesToiletScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutKostNestedInput = {
    create?: XOR<PhotoCreateWithoutKostInput, PhotoUncheckedCreateWithoutKostInput> | PhotoCreateWithoutKostInput[] | PhotoUncheckedCreateWithoutKostInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutKostInput | PhotoCreateOrConnectWithoutKostInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutKostInput | PhotoUpsertWithWhereUniqueWithoutKostInput[]
    createMany?: PhotoCreateManyKostInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutKostInput | PhotoUpdateWithWhereUniqueWithoutKostInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutKostInput | PhotoUpdateManyWithWhereWithoutKostInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type WishlistUncheckedUpdateManyWithoutKostNestedInput = {
    create?: XOR<WishlistCreateWithoutKostInput, WishlistUncheckedCreateWithoutKostInput> | WishlistCreateWithoutKostInput[] | WishlistUncheckedCreateWithoutKostInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutKostInput | WishlistCreateOrConnectWithoutKostInput[]
    upsert?: WishlistUpsertWithWhereUniqueWithoutKostInput | WishlistUpsertWithWhereUniqueWithoutKostInput[]
    createMany?: WishlistCreateManyKostInputEnvelope
    set?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    disconnect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    delete?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    update?: WishlistUpdateWithWhereUniqueWithoutKostInput | WishlistUpdateWithWhereUniqueWithoutKostInput[]
    updateMany?: WishlistUpdateManyWithWhereWithoutKostInput | WishlistUpdateManyWithWhereWithoutKostInput[]
    deleteMany?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
  }

  export type UlasanUncheckedUpdateManyWithoutKostNestedInput = {
    create?: XOR<UlasanCreateWithoutKostInput, UlasanUncheckedCreateWithoutKostInput> | UlasanCreateWithoutKostInput[] | UlasanUncheckedCreateWithoutKostInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutKostInput | UlasanCreateOrConnectWithoutKostInput[]
    upsert?: UlasanUpsertWithWhereUniqueWithoutKostInput | UlasanUpsertWithWhereUniqueWithoutKostInput[]
    createMany?: UlasanCreateManyKostInputEnvelope
    set?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    disconnect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    delete?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    update?: UlasanUpdateWithWhereUniqueWithoutKostInput | UlasanUpdateWithWhereUniqueWithoutKostInput[]
    updateMany?: UlasanUpdateManyWithWhereWithoutKostInput | UlasanUpdateManyWithWhereWithoutKostInput[]
    deleteMany?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
  }

  export type KostCreateNestedOneWithoutFacilitiesRoomInput = {
    create?: XOR<KostCreateWithoutFacilitiesRoomInput, KostUncheckedCreateWithoutFacilitiesRoomInput>
    connectOrCreate?: KostCreateOrConnectWithoutFacilitiesRoomInput
    connect?: KostWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type KostUpdateOneRequiredWithoutFacilitiesRoomNestedInput = {
    create?: XOR<KostCreateWithoutFacilitiesRoomInput, KostUncheckedCreateWithoutFacilitiesRoomInput>
    connectOrCreate?: KostCreateOrConnectWithoutFacilitiesRoomInput
    upsert?: KostUpsertWithoutFacilitiesRoomInput
    connect?: KostWhereUniqueInput
    update?: XOR<XOR<KostUpdateToOneWithWhereWithoutFacilitiesRoomInput, KostUpdateWithoutFacilitiesRoomInput>, KostUncheckedUpdateWithoutFacilitiesRoomInput>
  }

  export type KostCreateNestedOneWithoutFacilitiesToiletInput = {
    create?: XOR<KostCreateWithoutFacilitiesToiletInput, KostUncheckedCreateWithoutFacilitiesToiletInput>
    connectOrCreate?: KostCreateOrConnectWithoutFacilitiesToiletInput
    connect?: KostWhereUniqueInput
  }

  export type EnumKamar_mandiFieldUpdateOperationsInput = {
    set?: $Enums.Kamar_mandi
  }

  export type EnumKloset_typeFieldUpdateOperationsInput = {
    set?: $Enums.Kloset_type
  }

  export type KostUpdateOneRequiredWithoutFacilitiesToiletNestedInput = {
    create?: XOR<KostCreateWithoutFacilitiesToiletInput, KostUncheckedCreateWithoutFacilitiesToiletInput>
    connectOrCreate?: KostCreateOrConnectWithoutFacilitiesToiletInput
    upsert?: KostUpsertWithoutFacilitiesToiletInput
    connect?: KostWhereUniqueInput
    update?: XOR<XOR<KostUpdateToOneWithWhereWithoutFacilitiesToiletInput, KostUpdateWithoutFacilitiesToiletInput>, KostUncheckedUpdateWithoutFacilitiesToiletInput>
  }

  export type UserCreateNestedOneWithoutWhishlistInput = {
    create?: XOR<UserCreateWithoutWhishlistInput, UserUncheckedCreateWithoutWhishlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWhishlistInput
    connect?: UserWhereUniqueInput
  }

  export type KostCreateNestedOneWithoutWishlistsInput = {
    create?: XOR<KostCreateWithoutWishlistsInput, KostUncheckedCreateWithoutWishlistsInput>
    connectOrCreate?: KostCreateOrConnectWithoutWishlistsInput
    connect?: KostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWhishlistNestedInput = {
    create?: XOR<UserCreateWithoutWhishlistInput, UserUncheckedCreateWithoutWhishlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWhishlistInput
    upsert?: UserUpsertWithoutWhishlistInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWhishlistInput, UserUpdateWithoutWhishlistInput>, UserUncheckedUpdateWithoutWhishlistInput>
  }

  export type KostUpdateOneRequiredWithoutWishlistsNestedInput = {
    create?: XOR<KostCreateWithoutWishlistsInput, KostUncheckedCreateWithoutWishlistsInput>
    connectOrCreate?: KostCreateOrConnectWithoutWishlistsInput
    upsert?: KostUpsertWithoutWishlistsInput
    connect?: KostWhereUniqueInput
    update?: XOR<XOR<KostUpdateToOneWithWhereWithoutWishlistsInput, KostUpdateWithoutWishlistsInput>, KostUncheckedUpdateWithoutWishlistsInput>
  }

  export type KostCreateNestedOneWithoutPhotosInput = {
    create?: XOR<KostCreateWithoutPhotosInput, KostUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: KostCreateOrConnectWithoutPhotosInput
    connect?: KostWhereUniqueInput
  }

  export type UlasanCreateNestedManyWithoutPhotosInput = {
    create?: XOR<UlasanCreateWithoutPhotosInput, UlasanUncheckedCreateWithoutPhotosInput> | UlasanCreateWithoutPhotosInput[] | UlasanUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutPhotosInput | UlasanCreateOrConnectWithoutPhotosInput[]
    createMany?: UlasanCreateManyPhotosInputEnvelope
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
  }

  export type UlasanUncheckedCreateNestedManyWithoutPhotosInput = {
    create?: XOR<UlasanCreateWithoutPhotosInput, UlasanUncheckedCreateWithoutPhotosInput> | UlasanCreateWithoutPhotosInput[] | UlasanUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutPhotosInput | UlasanCreateOrConnectWithoutPhotosInput[]
    createMany?: UlasanCreateManyPhotosInputEnvelope
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KostUpdateOneWithoutPhotosNestedInput = {
    create?: XOR<KostCreateWithoutPhotosInput, KostUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: KostCreateOrConnectWithoutPhotosInput
    upsert?: KostUpsertWithoutPhotosInput
    disconnect?: KostWhereInput | boolean
    delete?: KostWhereInput | boolean
    connect?: KostWhereUniqueInput
    update?: XOR<XOR<KostUpdateToOneWithWhereWithoutPhotosInput, KostUpdateWithoutPhotosInput>, KostUncheckedUpdateWithoutPhotosInput>
  }

  export type UlasanUpdateManyWithoutPhotosNestedInput = {
    create?: XOR<UlasanCreateWithoutPhotosInput, UlasanUncheckedCreateWithoutPhotosInput> | UlasanCreateWithoutPhotosInput[] | UlasanUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutPhotosInput | UlasanCreateOrConnectWithoutPhotosInput[]
    upsert?: UlasanUpsertWithWhereUniqueWithoutPhotosInput | UlasanUpsertWithWhereUniqueWithoutPhotosInput[]
    createMany?: UlasanCreateManyPhotosInputEnvelope
    set?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    disconnect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    delete?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    update?: UlasanUpdateWithWhereUniqueWithoutPhotosInput | UlasanUpdateWithWhereUniqueWithoutPhotosInput[]
    updateMany?: UlasanUpdateManyWithWhereWithoutPhotosInput | UlasanUpdateManyWithWhereWithoutPhotosInput[]
    deleteMany?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
  }

  export type UlasanUncheckedUpdateManyWithoutPhotosNestedInput = {
    create?: XOR<UlasanCreateWithoutPhotosInput, UlasanUncheckedCreateWithoutPhotosInput> | UlasanCreateWithoutPhotosInput[] | UlasanUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutPhotosInput | UlasanCreateOrConnectWithoutPhotosInput[]
    upsert?: UlasanUpsertWithWhereUniqueWithoutPhotosInput | UlasanUpsertWithWhereUniqueWithoutPhotosInput[]
    createMany?: UlasanCreateManyPhotosInputEnvelope
    set?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    disconnect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    delete?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    update?: UlasanUpdateWithWhereUniqueWithoutPhotosInput | UlasanUpdateWithWhereUniqueWithoutPhotosInput[]
    updateMany?: UlasanUpdateManyWithWhereWithoutPhotosInput | UlasanUpdateManyWithWhereWithoutPhotosInput[]
    deleteMany?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUlasanInput = {
    create?: XOR<UserCreateWithoutUlasanInput, UserUncheckedCreateWithoutUlasanInput>
    connectOrCreate?: UserCreateOrConnectWithoutUlasanInput
    connect?: UserWhereUniqueInput
  }

  export type PhotoCreateNestedOneWithoutUlasanInput = {
    create?: XOR<PhotoCreateWithoutUlasanInput, PhotoUncheckedCreateWithoutUlasanInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutUlasanInput
    connect?: PhotoWhereUniqueInput
  }

  export type KostCreateNestedOneWithoutUlasanInput = {
    create?: XOR<KostCreateWithoutUlasanInput, KostUncheckedCreateWithoutUlasanInput>
    connectOrCreate?: KostCreateOrConnectWithoutUlasanInput
    connect?: KostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUlasanNestedInput = {
    create?: XOR<UserCreateWithoutUlasanInput, UserUncheckedCreateWithoutUlasanInput>
    connectOrCreate?: UserCreateOrConnectWithoutUlasanInput
    upsert?: UserUpsertWithoutUlasanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUlasanInput, UserUpdateWithoutUlasanInput>, UserUncheckedUpdateWithoutUlasanInput>
  }

  export type PhotoUpdateOneWithoutUlasanNestedInput = {
    create?: XOR<PhotoCreateWithoutUlasanInput, PhotoUncheckedCreateWithoutUlasanInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutUlasanInput
    upsert?: PhotoUpsertWithoutUlasanInput
    disconnect?: PhotoWhereInput | boolean
    delete?: PhotoWhereInput | boolean
    connect?: PhotoWhereUniqueInput
    update?: XOR<XOR<PhotoUpdateToOneWithWhereWithoutUlasanInput, PhotoUpdateWithoutUlasanInput>, PhotoUncheckedUpdateWithoutUlasanInput>
  }

  export type KostUpdateOneWithoutUlasanNestedInput = {
    create?: XOR<KostCreateWithoutUlasanInput, KostUncheckedCreateWithoutUlasanInput>
    connectOrCreate?: KostCreateOrConnectWithoutUlasanInput
    upsert?: KostUpsertWithoutUlasanInput
    disconnect?: KostWhereInput | boolean
    delete?: KostWhereInput | boolean
    connect?: KostWhereUniqueInput
    update?: XOR<XOR<KostUpdateToOneWithWhereWithoutUlasanInput, KostUpdateWithoutUlasanInput>, KostUncheckedUpdateWithoutUlasanInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumKost_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.Kost_type | EnumKost_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Kost_type[]
    notIn?: $Enums.Kost_type[]
    not?: NestedEnumKost_typeFilter<$PrismaModel> | $Enums.Kost_type
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumKost_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Kost_type | EnumKost_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Kost_type[]
    notIn?: $Enums.Kost_type[]
    not?: NestedEnumKost_typeWithAggregatesFilter<$PrismaModel> | $Enums.Kost_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKost_typeFilter<$PrismaModel>
    _max?: NestedEnumKost_typeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumKamar_mandiFilter<$PrismaModel = never> = {
    equals?: $Enums.Kamar_mandi | EnumKamar_mandiFieldRefInput<$PrismaModel>
    in?: $Enums.Kamar_mandi[]
    notIn?: $Enums.Kamar_mandi[]
    not?: NestedEnumKamar_mandiFilter<$PrismaModel> | $Enums.Kamar_mandi
  }

  export type NestedEnumKloset_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.Kloset_type | EnumKloset_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Kloset_type[]
    notIn?: $Enums.Kloset_type[]
    not?: NestedEnumKloset_typeFilter<$PrismaModel> | $Enums.Kloset_type
  }

  export type NestedEnumKamar_mandiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Kamar_mandi | EnumKamar_mandiFieldRefInput<$PrismaModel>
    in?: $Enums.Kamar_mandi[]
    notIn?: $Enums.Kamar_mandi[]
    not?: NestedEnumKamar_mandiWithAggregatesFilter<$PrismaModel> | $Enums.Kamar_mandi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKamar_mandiFilter<$PrismaModel>
    _max?: NestedEnumKamar_mandiFilter<$PrismaModel>
  }

  export type NestedEnumKloset_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Kloset_type | EnumKloset_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Kloset_type[]
    notIn?: $Enums.Kloset_type[]
    not?: NestedEnumKloset_typeWithAggregatesFilter<$PrismaModel> | $Enums.Kloset_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKloset_typeFilter<$PrismaModel>
    _max?: NestedEnumKloset_typeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RefreshTokenCreateWithoutUserInput = {
    refresh_token: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: number
    refresh_token: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LogCreateWithoutUserInput = {
    action: string
    description: string
    created_at?: Date | string
  }

  export type LogUncheckedCreateWithoutUserInput = {
    id?: number
    action: string
    description: string
    created_at?: Date | string
  }

  export type LogCreateOrConnectWithoutUserInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput>
  }

  export type LogCreateManyUserInputEnvelope = {
    data: LogCreateManyUserInput | LogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type KostCreateWithoutOwnerInput = {
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus?: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressCreateNestedManyWithoutKostInput
    facilitiesRoom?: FacilitiesRoomCreateNestedManyWithoutKostInput
    facilitiesToilet?: FacilitiesToiletCreateNestedManyWithoutKostInput
    photos?: PhotoCreateNestedManyWithoutKostInput
    wishlists?: WishlistCreateNestedManyWithoutKostInput
    ulasan?: UlasanCreateNestedManyWithoutKostInput
  }

  export type KostUncheckedCreateWithoutOwnerInput = {
    id?: number
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus?: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressUncheckedCreateNestedManyWithoutKostInput
    facilitiesRoom?: FacilitiesRoomUncheckedCreateNestedManyWithoutKostInput
    facilitiesToilet?: FacilitiesToiletUncheckedCreateNestedManyWithoutKostInput
    photos?: PhotoUncheckedCreateNestedManyWithoutKostInput
    wishlists?: WishlistUncheckedCreateNestedManyWithoutKostInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutKostInput
  }

  export type KostCreateOrConnectWithoutOwnerInput = {
    where: KostWhereUniqueInput
    create: XOR<KostCreateWithoutOwnerInput, KostUncheckedCreateWithoutOwnerInput>
  }

  export type KostCreateManyOwnerInputEnvelope = {
    data: KostCreateManyOwnerInput | KostCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type WishlistCreateWithoutUserInput = {
    created_at?: Date | string
    updated_at?: Date | string
    kost: KostCreateNestedOneWithoutWishlistsInput
  }

  export type WishlistUncheckedCreateWithoutUserInput = {
    id?: number
    kost_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WishlistCreateOrConnectWithoutUserInput = {
    where: WishlistWhereUniqueInput
    create: XOR<WishlistCreateWithoutUserInput, WishlistUncheckedCreateWithoutUserInput>
  }

  export type WishlistCreateManyUserInputEnvelope = {
    data: WishlistCreateManyUserInput | WishlistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UlasanCreateWithoutUserInput = {
    rate: number
    comments: string
    photos?: PhotoCreateNestedOneWithoutUlasanInput
    Kost?: KostCreateNestedOneWithoutUlasanInput
  }

  export type UlasanUncheckedCreateWithoutUserInput = {
    id?: number
    rate: number
    comments: string
    photos_id: number
    kost_id?: number | null
  }

  export type UlasanCreateOrConnectWithoutUserInput = {
    where: UlasanWhereUniqueInput
    create: XOR<UlasanCreateWithoutUserInput, UlasanUncheckedCreateWithoutUserInput>
  }

  export type UlasanCreateManyUserInputEnvelope = {
    data: UlasanCreateManyUserInput | UlasanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    user_id?: IntFilter<"RefreshToken"> | number
    refresh_token?: StringFilter<"RefreshToken"> | string
    created_at?: DateTimeFilter<"RefreshToken"> | Date | string
    updated_at?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type LogUpsertWithWhereUniqueWithoutUserInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutUserInput, LogUncheckedUpdateWithoutUserInput>
    create: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput>
  }

  export type LogUpdateWithWhereUniqueWithoutUserInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutUserInput, LogUncheckedUpdateWithoutUserInput>
  }

  export type LogUpdateManyWithWhereWithoutUserInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutUserInput>
  }

  export type LogScalarWhereInput = {
    AND?: LogScalarWhereInput | LogScalarWhereInput[]
    OR?: LogScalarWhereInput[]
    NOT?: LogScalarWhereInput | LogScalarWhereInput[]
    id?: IntFilter<"Log"> | number
    user_id?: IntFilter<"Log"> | number
    action?: StringFilter<"Log"> | string
    description?: StringFilter<"Log"> | string
    created_at?: DateTimeFilter<"Log"> | Date | string
  }

  export type KostUpsertWithWhereUniqueWithoutOwnerInput = {
    where: KostWhereUniqueInput
    update: XOR<KostUpdateWithoutOwnerInput, KostUncheckedUpdateWithoutOwnerInput>
    create: XOR<KostCreateWithoutOwnerInput, KostUncheckedCreateWithoutOwnerInput>
  }

  export type KostUpdateWithWhereUniqueWithoutOwnerInput = {
    where: KostWhereUniqueInput
    data: XOR<KostUpdateWithoutOwnerInput, KostUncheckedUpdateWithoutOwnerInput>
  }

  export type KostUpdateManyWithWhereWithoutOwnerInput = {
    where: KostScalarWhereInput
    data: XOR<KostUpdateManyMutationInput, KostUncheckedUpdateManyWithoutOwnerInput>
  }

  export type KostScalarWhereInput = {
    AND?: KostScalarWhereInput | KostScalarWhereInput[]
    OR?: KostScalarWhereInput[]
    NOT?: KostScalarWhereInput | KostScalarWhereInput[]
    id?: IntFilter<"Kost"> | number
    slug?: StringFilter<"Kost"> | string
    title?: StringFilter<"Kost"> | string
    price?: FloatFilter<"Kost"> | number
    type?: EnumKost_typeFilter<"Kost"> | $Enums.Kost_type
    ratings?: FloatFilter<"Kost"> | number
    pengaturan_khusus?: StringNullableFilter<"Kost"> | string | null
    address_id?: IntFilter<"Kost"> | number
    facilitiesRoom_id?: IntFilter<"Kost"> | number
    facilitiesToilet_id?: IntFilter<"Kost"> | number
    owner_id?: IntFilter<"Kost"> | number
    created_at?: DateTimeFilter<"Kost"> | Date | string
    updated_at?: DateTimeFilter<"Kost"> | Date | string
  }

  export type WishlistUpsertWithWhereUniqueWithoutUserInput = {
    where: WishlistWhereUniqueInput
    update: XOR<WishlistUpdateWithoutUserInput, WishlistUncheckedUpdateWithoutUserInput>
    create: XOR<WishlistCreateWithoutUserInput, WishlistUncheckedCreateWithoutUserInput>
  }

  export type WishlistUpdateWithWhereUniqueWithoutUserInput = {
    where: WishlistWhereUniqueInput
    data: XOR<WishlistUpdateWithoutUserInput, WishlistUncheckedUpdateWithoutUserInput>
  }

  export type WishlistUpdateManyWithWhereWithoutUserInput = {
    where: WishlistScalarWhereInput
    data: XOR<WishlistUpdateManyMutationInput, WishlistUncheckedUpdateManyWithoutUserInput>
  }

  export type WishlistScalarWhereInput = {
    AND?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
    OR?: WishlistScalarWhereInput[]
    NOT?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
    id?: IntFilter<"Wishlist"> | number
    user_id?: IntFilter<"Wishlist"> | number
    kost_id?: IntFilter<"Wishlist"> | number
    created_at?: DateTimeFilter<"Wishlist"> | Date | string
    updated_at?: DateTimeFilter<"Wishlist"> | Date | string
  }

  export type UlasanUpsertWithWhereUniqueWithoutUserInput = {
    where: UlasanWhereUniqueInput
    update: XOR<UlasanUpdateWithoutUserInput, UlasanUncheckedUpdateWithoutUserInput>
    create: XOR<UlasanCreateWithoutUserInput, UlasanUncheckedCreateWithoutUserInput>
  }

  export type UlasanUpdateWithWhereUniqueWithoutUserInput = {
    where: UlasanWhereUniqueInput
    data: XOR<UlasanUpdateWithoutUserInput, UlasanUncheckedUpdateWithoutUserInput>
  }

  export type UlasanUpdateManyWithWhereWithoutUserInput = {
    where: UlasanScalarWhereInput
    data: XOR<UlasanUpdateManyMutationInput, UlasanUncheckedUpdateManyWithoutUserInput>
  }

  export type UlasanScalarWhereInput = {
    AND?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
    OR?: UlasanScalarWhereInput[]
    NOT?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
    id?: IntFilter<"Ulasan"> | number
    user_id?: IntFilter<"Ulasan"> | number
    rate?: IntFilter<"Ulasan"> | number
    comments?: StringFilter<"Ulasan"> | string
    photos_id?: IntFilter<"Ulasan"> | number
    kost_id?: IntNullableFilter<"Ulasan"> | number | null
  }

  export type UserCreateWithoutRefresh_tokenInput = {
    username: string
    full_name: string
    email: string
    password: string
    image_url?: string | null
    role: $Enums.Role
    user_status: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    log?: LogCreateNestedManyWithoutUserInput
    kost?: KostCreateNestedManyWithoutOwnerInput
    whishlist?: WishlistCreateNestedManyWithoutUserInput
    ulasan?: UlasanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefresh_tokenInput = {
    id?: number
    username: string
    full_name: string
    email: string
    password: string
    image_url?: string | null
    role: $Enums.Role
    user_status: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    log?: LogUncheckedCreateNestedManyWithoutUserInput
    kost?: KostUncheckedCreateNestedManyWithoutOwnerInput
    whishlist?: WishlistUncheckedCreateNestedManyWithoutUserInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefresh_tokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefresh_tokenInput, UserUncheckedCreateWithoutRefresh_tokenInput>
  }

  export type UserUpsertWithoutRefresh_tokenInput = {
    update: XOR<UserUpdateWithoutRefresh_tokenInput, UserUncheckedUpdateWithoutRefresh_tokenInput>
    create: XOR<UserCreateWithoutRefresh_tokenInput, UserUncheckedCreateWithoutRefresh_tokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefresh_tokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefresh_tokenInput, UserUncheckedUpdateWithoutRefresh_tokenInput>
  }

  export type UserUpdateWithoutRefresh_tokenInput = {
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: LogUpdateManyWithoutUserNestedInput
    kost?: KostUpdateManyWithoutOwnerNestedInput
    whishlist?: WishlistUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefresh_tokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: LogUncheckedUpdateManyWithoutUserNestedInput
    kost?: KostUncheckedUpdateManyWithoutOwnerNestedInput
    whishlist?: WishlistUncheckedUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLogInput = {
    username: string
    full_name: string
    email: string
    password: string
    image_url?: string | null
    role: $Enums.Role
    user_status: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    refresh_token?: RefreshTokenCreateNestedManyWithoutUserInput
    kost?: KostCreateNestedManyWithoutOwnerInput
    whishlist?: WishlistCreateNestedManyWithoutUserInput
    ulasan?: UlasanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLogInput = {
    id?: number
    username: string
    full_name: string
    email: string
    password: string
    image_url?: string | null
    role: $Enums.Role
    user_status: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    refresh_token?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    kost?: KostUncheckedCreateNestedManyWithoutOwnerInput
    whishlist?: WishlistUncheckedCreateNestedManyWithoutUserInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLogInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLogInput, UserUncheckedCreateWithoutLogInput>
  }

  export type UserUpsertWithoutLogInput = {
    update: XOR<UserUpdateWithoutLogInput, UserUncheckedUpdateWithoutLogInput>
    create: XOR<UserCreateWithoutLogInput, UserUncheckedCreateWithoutLogInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLogInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLogInput, UserUncheckedUpdateWithoutLogInput>
  }

  export type UserUpdateWithoutLogInput = {
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_token?: RefreshTokenUpdateManyWithoutUserNestedInput
    kost?: KostUpdateManyWithoutOwnerNestedInput
    whishlist?: WishlistUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_token?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    kost?: KostUncheckedUpdateManyWithoutOwnerNestedInput
    whishlist?: WishlistUncheckedUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type KostCreateWithoutAddressInput = {
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus?: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    created_at?: Date | string
    updated_at?: Date | string
    facilitiesRoom?: FacilitiesRoomCreateNestedManyWithoutKostInput
    facilitiesToilet?: FacilitiesToiletCreateNestedManyWithoutKostInput
    photos?: PhotoCreateNestedManyWithoutKostInput
    wishlists?: WishlistCreateNestedManyWithoutKostInput
    ulasan?: UlasanCreateNestedManyWithoutKostInput
    owner: UserCreateNestedOneWithoutKostInput
  }

  export type KostUncheckedCreateWithoutAddressInput = {
    id?: number
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus?: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    owner_id: number
    created_at?: Date | string
    updated_at?: Date | string
    facilitiesRoom?: FacilitiesRoomUncheckedCreateNestedManyWithoutKostInput
    facilitiesToilet?: FacilitiesToiletUncheckedCreateNestedManyWithoutKostInput
    photos?: PhotoUncheckedCreateNestedManyWithoutKostInput
    wishlists?: WishlistUncheckedCreateNestedManyWithoutKostInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutKostInput
  }

  export type KostCreateOrConnectWithoutAddressInput = {
    where: KostWhereUniqueInput
    create: XOR<KostCreateWithoutAddressInput, KostUncheckedCreateWithoutAddressInput>
  }

  export type KostUpsertWithoutAddressInput = {
    update: XOR<KostUpdateWithoutAddressInput, KostUncheckedUpdateWithoutAddressInput>
    create: XOR<KostCreateWithoutAddressInput, KostUncheckedCreateWithoutAddressInput>
    where?: KostWhereInput
  }

  export type KostUpdateToOneWithWhereWithoutAddressInput = {
    where?: KostWhereInput
    data: XOR<KostUpdateWithoutAddressInput, KostUncheckedUpdateWithoutAddressInput>
  }

  export type KostUpdateWithoutAddressInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    facilitiesRoom?: FacilitiesRoomUpdateManyWithoutKostNestedInput
    facilitiesToilet?: FacilitiesToiletUpdateManyWithoutKostNestedInput
    photos?: PhotoUpdateManyWithoutKostNestedInput
    wishlists?: WishlistUpdateManyWithoutKostNestedInput
    ulasan?: UlasanUpdateManyWithoutKostNestedInput
    owner?: UserUpdateOneRequiredWithoutKostNestedInput
  }

  export type KostUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    facilitiesRoom?: FacilitiesRoomUncheckedUpdateManyWithoutKostNestedInput
    facilitiesToilet?: FacilitiesToiletUncheckedUpdateManyWithoutKostNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutKostNestedInput
    wishlists?: WishlistUncheckedUpdateManyWithoutKostNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutKostNestedInput
  }

  export type AddressCreateWithoutKostInput = {
    street_name: string
    street_number: string
    village_name: string
    city: string
    state: string
    zip: string
    longitude: string
    latitude: string
  }

  export type AddressUncheckedCreateWithoutKostInput = {
    id?: number
    street_name: string
    street_number: string
    village_name: string
    city: string
    state: string
    zip: string
    longitude: string
    latitude: string
  }

  export type AddressCreateOrConnectWithoutKostInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutKostInput, AddressUncheckedCreateWithoutKostInput>
  }

  export type AddressCreateManyKostInputEnvelope = {
    data: AddressCreateManyKostInput | AddressCreateManyKostInput[]
    skipDuplicates?: boolean
  }

  export type FacilitiesRoomCreateWithoutKostInput = {
    ac: boolean
    meja: boolean
    lemari: boolean
    kursi: boolean
    wifi: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FacilitiesRoomUncheckedCreateWithoutKostInput = {
    id?: number
    ac: boolean
    meja: boolean
    lemari: boolean
    kursi: boolean
    wifi: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FacilitiesRoomCreateOrConnectWithoutKostInput = {
    where: FacilitiesRoomWhereUniqueInput
    create: XOR<FacilitiesRoomCreateWithoutKostInput, FacilitiesRoomUncheckedCreateWithoutKostInput>
  }

  export type FacilitiesRoomCreateManyKostInputEnvelope = {
    data: FacilitiesRoomCreateManyKostInput | FacilitiesRoomCreateManyKostInput[]
    skipDuplicates?: boolean
  }

  export type FacilitiesToiletCreateWithoutKostInput = {
    kamar_mandi: $Enums.Kamar_mandi
    shower: boolean
    kloset: $Enums.Kloset_type
    air_panas: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FacilitiesToiletUncheckedCreateWithoutKostInput = {
    id?: number
    kamar_mandi: $Enums.Kamar_mandi
    shower: boolean
    kloset: $Enums.Kloset_type
    air_panas: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FacilitiesToiletCreateOrConnectWithoutKostInput = {
    where: FacilitiesToiletWhereUniqueInput
    create: XOR<FacilitiesToiletCreateWithoutKostInput, FacilitiesToiletUncheckedCreateWithoutKostInput>
  }

  export type FacilitiesToiletCreateManyKostInputEnvelope = {
    data: FacilitiesToiletCreateManyKostInput | FacilitiesToiletCreateManyKostInput[]
    skipDuplicates?: boolean
  }

  export type PhotoCreateWithoutKostInput = {
    image_url: string
    description?: string | null
    ulasan_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    ulasan?: UlasanCreateNestedManyWithoutPhotosInput
  }

  export type PhotoUncheckedCreateWithoutKostInput = {
    id?: number
    image_url: string
    description?: string | null
    ulasan_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    ulasan?: UlasanUncheckedCreateNestedManyWithoutPhotosInput
  }

  export type PhotoCreateOrConnectWithoutKostInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutKostInput, PhotoUncheckedCreateWithoutKostInput>
  }

  export type PhotoCreateManyKostInputEnvelope = {
    data: PhotoCreateManyKostInput | PhotoCreateManyKostInput[]
    skipDuplicates?: boolean
  }

  export type WishlistCreateWithoutKostInput = {
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutWhishlistInput
  }

  export type WishlistUncheckedCreateWithoutKostInput = {
    id?: number
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WishlistCreateOrConnectWithoutKostInput = {
    where: WishlistWhereUniqueInput
    create: XOR<WishlistCreateWithoutKostInput, WishlistUncheckedCreateWithoutKostInput>
  }

  export type WishlistCreateManyKostInputEnvelope = {
    data: WishlistCreateManyKostInput | WishlistCreateManyKostInput[]
    skipDuplicates?: boolean
  }

  export type UlasanCreateWithoutKostInput = {
    rate: number
    comments: string
    user: UserCreateNestedOneWithoutUlasanInput
    photos?: PhotoCreateNestedOneWithoutUlasanInput
  }

  export type UlasanUncheckedCreateWithoutKostInput = {
    id?: number
    user_id: number
    rate: number
    comments: string
    photos_id: number
  }

  export type UlasanCreateOrConnectWithoutKostInput = {
    where: UlasanWhereUniqueInput
    create: XOR<UlasanCreateWithoutKostInput, UlasanUncheckedCreateWithoutKostInput>
  }

  export type UlasanCreateManyKostInputEnvelope = {
    data: UlasanCreateManyKostInput | UlasanCreateManyKostInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutKostInput = {
    username: string
    full_name: string
    email: string
    password: string
    image_url?: string | null
    role: $Enums.Role
    user_status: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    refresh_token?: RefreshTokenCreateNestedManyWithoutUserInput
    log?: LogCreateNestedManyWithoutUserInput
    whishlist?: WishlistCreateNestedManyWithoutUserInput
    ulasan?: UlasanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutKostInput = {
    id?: number
    username: string
    full_name: string
    email: string
    password: string
    image_url?: string | null
    role: $Enums.Role
    user_status: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    refresh_token?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    log?: LogUncheckedCreateNestedManyWithoutUserInput
    whishlist?: WishlistUncheckedCreateNestedManyWithoutUserInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutKostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKostInput, UserUncheckedCreateWithoutKostInput>
  }

  export type AddressUpsertWithWhereUniqueWithoutKostInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutKostInput, AddressUncheckedUpdateWithoutKostInput>
    create: XOR<AddressCreateWithoutKostInput, AddressUncheckedCreateWithoutKostInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutKostInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutKostInput, AddressUncheckedUpdateWithoutKostInput>
  }

  export type AddressUpdateManyWithWhereWithoutKostInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutKostInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: IntFilter<"Address"> | number
    street_name?: StringFilter<"Address"> | string
    street_number?: StringFilter<"Address"> | string
    village_name?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    zip?: StringFilter<"Address"> | string
    longitude?: StringFilter<"Address"> | string
    latitude?: StringFilter<"Address"> | string
    kost_id?: IntFilter<"Address"> | number
  }

  export type FacilitiesRoomUpsertWithWhereUniqueWithoutKostInput = {
    where: FacilitiesRoomWhereUniqueInput
    update: XOR<FacilitiesRoomUpdateWithoutKostInput, FacilitiesRoomUncheckedUpdateWithoutKostInput>
    create: XOR<FacilitiesRoomCreateWithoutKostInput, FacilitiesRoomUncheckedCreateWithoutKostInput>
  }

  export type FacilitiesRoomUpdateWithWhereUniqueWithoutKostInput = {
    where: FacilitiesRoomWhereUniqueInput
    data: XOR<FacilitiesRoomUpdateWithoutKostInput, FacilitiesRoomUncheckedUpdateWithoutKostInput>
  }

  export type FacilitiesRoomUpdateManyWithWhereWithoutKostInput = {
    where: FacilitiesRoomScalarWhereInput
    data: XOR<FacilitiesRoomUpdateManyMutationInput, FacilitiesRoomUncheckedUpdateManyWithoutKostInput>
  }

  export type FacilitiesRoomScalarWhereInput = {
    AND?: FacilitiesRoomScalarWhereInput | FacilitiesRoomScalarWhereInput[]
    OR?: FacilitiesRoomScalarWhereInput[]
    NOT?: FacilitiesRoomScalarWhereInput | FacilitiesRoomScalarWhereInput[]
    id?: IntFilter<"FacilitiesRoom"> | number
    ac?: BoolFilter<"FacilitiesRoom"> | boolean
    meja?: BoolFilter<"FacilitiesRoom"> | boolean
    lemari?: BoolFilter<"FacilitiesRoom"> | boolean
    kursi?: BoolFilter<"FacilitiesRoom"> | boolean
    wifi?: BoolFilter<"FacilitiesRoom"> | boolean
    kost_id?: IntFilter<"FacilitiesRoom"> | number
    created_at?: DateTimeFilter<"FacilitiesRoom"> | Date | string
    updated_at?: DateTimeFilter<"FacilitiesRoom"> | Date | string
  }

  export type FacilitiesToiletUpsertWithWhereUniqueWithoutKostInput = {
    where: FacilitiesToiletWhereUniqueInput
    update: XOR<FacilitiesToiletUpdateWithoutKostInput, FacilitiesToiletUncheckedUpdateWithoutKostInput>
    create: XOR<FacilitiesToiletCreateWithoutKostInput, FacilitiesToiletUncheckedCreateWithoutKostInput>
  }

  export type FacilitiesToiletUpdateWithWhereUniqueWithoutKostInput = {
    where: FacilitiesToiletWhereUniqueInput
    data: XOR<FacilitiesToiletUpdateWithoutKostInput, FacilitiesToiletUncheckedUpdateWithoutKostInput>
  }

  export type FacilitiesToiletUpdateManyWithWhereWithoutKostInput = {
    where: FacilitiesToiletScalarWhereInput
    data: XOR<FacilitiesToiletUpdateManyMutationInput, FacilitiesToiletUncheckedUpdateManyWithoutKostInput>
  }

  export type FacilitiesToiletScalarWhereInput = {
    AND?: FacilitiesToiletScalarWhereInput | FacilitiesToiletScalarWhereInput[]
    OR?: FacilitiesToiletScalarWhereInput[]
    NOT?: FacilitiesToiletScalarWhereInput | FacilitiesToiletScalarWhereInput[]
    id?: IntFilter<"FacilitiesToilet"> | number
    kamar_mandi?: EnumKamar_mandiFilter<"FacilitiesToilet"> | $Enums.Kamar_mandi
    shower?: BoolFilter<"FacilitiesToilet"> | boolean
    kloset?: EnumKloset_typeFilter<"FacilitiesToilet"> | $Enums.Kloset_type
    air_panas?: BoolFilter<"FacilitiesToilet"> | boolean
    kost_id?: IntFilter<"FacilitiesToilet"> | number
    created_at?: DateTimeFilter<"FacilitiesToilet"> | Date | string
    updated_at?: DateTimeFilter<"FacilitiesToilet"> | Date | string
  }

  export type PhotoUpsertWithWhereUniqueWithoutKostInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutKostInput, PhotoUncheckedUpdateWithoutKostInput>
    create: XOR<PhotoCreateWithoutKostInput, PhotoUncheckedCreateWithoutKostInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutKostInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutKostInput, PhotoUncheckedUpdateWithoutKostInput>
  }

  export type PhotoUpdateManyWithWhereWithoutKostInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutKostInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: IntFilter<"Photo"> | number
    image_url?: StringFilter<"Photo"> | string
    description?: StringNullableFilter<"Photo"> | string | null
    kost_id?: IntNullableFilter<"Photo"> | number | null
    ulasan_id?: IntNullableFilter<"Photo"> | number | null
    created_at?: DateTimeFilter<"Photo"> | Date | string
    updated_at?: DateTimeFilter<"Photo"> | Date | string
  }

  export type WishlistUpsertWithWhereUniqueWithoutKostInput = {
    where: WishlistWhereUniqueInput
    update: XOR<WishlistUpdateWithoutKostInput, WishlistUncheckedUpdateWithoutKostInput>
    create: XOR<WishlistCreateWithoutKostInput, WishlistUncheckedCreateWithoutKostInput>
  }

  export type WishlistUpdateWithWhereUniqueWithoutKostInput = {
    where: WishlistWhereUniqueInput
    data: XOR<WishlistUpdateWithoutKostInput, WishlistUncheckedUpdateWithoutKostInput>
  }

  export type WishlistUpdateManyWithWhereWithoutKostInput = {
    where: WishlistScalarWhereInput
    data: XOR<WishlistUpdateManyMutationInput, WishlistUncheckedUpdateManyWithoutKostInput>
  }

  export type UlasanUpsertWithWhereUniqueWithoutKostInput = {
    where: UlasanWhereUniqueInput
    update: XOR<UlasanUpdateWithoutKostInput, UlasanUncheckedUpdateWithoutKostInput>
    create: XOR<UlasanCreateWithoutKostInput, UlasanUncheckedCreateWithoutKostInput>
  }

  export type UlasanUpdateWithWhereUniqueWithoutKostInput = {
    where: UlasanWhereUniqueInput
    data: XOR<UlasanUpdateWithoutKostInput, UlasanUncheckedUpdateWithoutKostInput>
  }

  export type UlasanUpdateManyWithWhereWithoutKostInput = {
    where: UlasanScalarWhereInput
    data: XOR<UlasanUpdateManyMutationInput, UlasanUncheckedUpdateManyWithoutKostInput>
  }

  export type UserUpsertWithoutKostInput = {
    update: XOR<UserUpdateWithoutKostInput, UserUncheckedUpdateWithoutKostInput>
    create: XOR<UserCreateWithoutKostInput, UserUncheckedCreateWithoutKostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutKostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutKostInput, UserUncheckedUpdateWithoutKostInput>
  }

  export type UserUpdateWithoutKostInput = {
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_token?: RefreshTokenUpdateManyWithoutUserNestedInput
    log?: LogUpdateManyWithoutUserNestedInput
    whishlist?: WishlistUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutKostInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_token?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    log?: LogUncheckedUpdateManyWithoutUserNestedInput
    whishlist?: WishlistUncheckedUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type KostCreateWithoutFacilitiesRoomInput = {
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus?: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressCreateNestedManyWithoutKostInput
    facilitiesToilet?: FacilitiesToiletCreateNestedManyWithoutKostInput
    photos?: PhotoCreateNestedManyWithoutKostInput
    wishlists?: WishlistCreateNestedManyWithoutKostInput
    ulasan?: UlasanCreateNestedManyWithoutKostInput
    owner: UserCreateNestedOneWithoutKostInput
  }

  export type KostUncheckedCreateWithoutFacilitiesRoomInput = {
    id?: number
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus?: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    owner_id: number
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressUncheckedCreateNestedManyWithoutKostInput
    facilitiesToilet?: FacilitiesToiletUncheckedCreateNestedManyWithoutKostInput
    photos?: PhotoUncheckedCreateNestedManyWithoutKostInput
    wishlists?: WishlistUncheckedCreateNestedManyWithoutKostInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutKostInput
  }

  export type KostCreateOrConnectWithoutFacilitiesRoomInput = {
    where: KostWhereUniqueInput
    create: XOR<KostCreateWithoutFacilitiesRoomInput, KostUncheckedCreateWithoutFacilitiesRoomInput>
  }

  export type KostUpsertWithoutFacilitiesRoomInput = {
    update: XOR<KostUpdateWithoutFacilitiesRoomInput, KostUncheckedUpdateWithoutFacilitiesRoomInput>
    create: XOR<KostCreateWithoutFacilitiesRoomInput, KostUncheckedCreateWithoutFacilitiesRoomInput>
    where?: KostWhereInput
  }

  export type KostUpdateToOneWithWhereWithoutFacilitiesRoomInput = {
    where?: KostWhereInput
    data: XOR<KostUpdateWithoutFacilitiesRoomInput, KostUncheckedUpdateWithoutFacilitiesRoomInput>
  }

  export type KostUpdateWithoutFacilitiesRoomInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateManyWithoutKostNestedInput
    facilitiesToilet?: FacilitiesToiletUpdateManyWithoutKostNestedInput
    photos?: PhotoUpdateManyWithoutKostNestedInput
    wishlists?: WishlistUpdateManyWithoutKostNestedInput
    ulasan?: UlasanUpdateManyWithoutKostNestedInput
    owner?: UserUpdateOneRequiredWithoutKostNestedInput
  }

  export type KostUncheckedUpdateWithoutFacilitiesRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateManyWithoutKostNestedInput
    facilitiesToilet?: FacilitiesToiletUncheckedUpdateManyWithoutKostNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutKostNestedInput
    wishlists?: WishlistUncheckedUpdateManyWithoutKostNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutKostNestedInput
  }

  export type KostCreateWithoutFacilitiesToiletInput = {
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus?: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressCreateNestedManyWithoutKostInput
    facilitiesRoom?: FacilitiesRoomCreateNestedManyWithoutKostInput
    photos?: PhotoCreateNestedManyWithoutKostInput
    wishlists?: WishlistCreateNestedManyWithoutKostInput
    ulasan?: UlasanCreateNestedManyWithoutKostInput
    owner: UserCreateNestedOneWithoutKostInput
  }

  export type KostUncheckedCreateWithoutFacilitiesToiletInput = {
    id?: number
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus?: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    owner_id: number
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressUncheckedCreateNestedManyWithoutKostInput
    facilitiesRoom?: FacilitiesRoomUncheckedCreateNestedManyWithoutKostInput
    photos?: PhotoUncheckedCreateNestedManyWithoutKostInput
    wishlists?: WishlistUncheckedCreateNestedManyWithoutKostInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutKostInput
  }

  export type KostCreateOrConnectWithoutFacilitiesToiletInput = {
    where: KostWhereUniqueInput
    create: XOR<KostCreateWithoutFacilitiesToiletInput, KostUncheckedCreateWithoutFacilitiesToiletInput>
  }

  export type KostUpsertWithoutFacilitiesToiletInput = {
    update: XOR<KostUpdateWithoutFacilitiesToiletInput, KostUncheckedUpdateWithoutFacilitiesToiletInput>
    create: XOR<KostCreateWithoutFacilitiesToiletInput, KostUncheckedCreateWithoutFacilitiesToiletInput>
    where?: KostWhereInput
  }

  export type KostUpdateToOneWithWhereWithoutFacilitiesToiletInput = {
    where?: KostWhereInput
    data: XOR<KostUpdateWithoutFacilitiesToiletInput, KostUncheckedUpdateWithoutFacilitiesToiletInput>
  }

  export type KostUpdateWithoutFacilitiesToiletInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateManyWithoutKostNestedInput
    facilitiesRoom?: FacilitiesRoomUpdateManyWithoutKostNestedInput
    photos?: PhotoUpdateManyWithoutKostNestedInput
    wishlists?: WishlistUpdateManyWithoutKostNestedInput
    ulasan?: UlasanUpdateManyWithoutKostNestedInput
    owner?: UserUpdateOneRequiredWithoutKostNestedInput
  }

  export type KostUncheckedUpdateWithoutFacilitiesToiletInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateManyWithoutKostNestedInput
    facilitiesRoom?: FacilitiesRoomUncheckedUpdateManyWithoutKostNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutKostNestedInput
    wishlists?: WishlistUncheckedUpdateManyWithoutKostNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutKostNestedInput
  }

  export type UserCreateWithoutWhishlistInput = {
    username: string
    full_name: string
    email: string
    password: string
    image_url?: string | null
    role: $Enums.Role
    user_status: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    refresh_token?: RefreshTokenCreateNestedManyWithoutUserInput
    log?: LogCreateNestedManyWithoutUserInput
    kost?: KostCreateNestedManyWithoutOwnerInput
    ulasan?: UlasanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWhishlistInput = {
    id?: number
    username: string
    full_name: string
    email: string
    password: string
    image_url?: string | null
    role: $Enums.Role
    user_status: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    refresh_token?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    log?: LogUncheckedCreateNestedManyWithoutUserInput
    kost?: KostUncheckedCreateNestedManyWithoutOwnerInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWhishlistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWhishlistInput, UserUncheckedCreateWithoutWhishlistInput>
  }

  export type KostCreateWithoutWishlistsInput = {
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus?: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressCreateNestedManyWithoutKostInput
    facilitiesRoom?: FacilitiesRoomCreateNestedManyWithoutKostInput
    facilitiesToilet?: FacilitiesToiletCreateNestedManyWithoutKostInput
    photos?: PhotoCreateNestedManyWithoutKostInput
    ulasan?: UlasanCreateNestedManyWithoutKostInput
    owner: UserCreateNestedOneWithoutKostInput
  }

  export type KostUncheckedCreateWithoutWishlistsInput = {
    id?: number
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus?: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    owner_id: number
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressUncheckedCreateNestedManyWithoutKostInput
    facilitiesRoom?: FacilitiesRoomUncheckedCreateNestedManyWithoutKostInput
    facilitiesToilet?: FacilitiesToiletUncheckedCreateNestedManyWithoutKostInput
    photos?: PhotoUncheckedCreateNestedManyWithoutKostInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutKostInput
  }

  export type KostCreateOrConnectWithoutWishlistsInput = {
    where: KostWhereUniqueInput
    create: XOR<KostCreateWithoutWishlistsInput, KostUncheckedCreateWithoutWishlistsInput>
  }

  export type UserUpsertWithoutWhishlistInput = {
    update: XOR<UserUpdateWithoutWhishlistInput, UserUncheckedUpdateWithoutWhishlistInput>
    create: XOR<UserCreateWithoutWhishlistInput, UserUncheckedCreateWithoutWhishlistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWhishlistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWhishlistInput, UserUncheckedUpdateWithoutWhishlistInput>
  }

  export type UserUpdateWithoutWhishlistInput = {
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_token?: RefreshTokenUpdateManyWithoutUserNestedInput
    log?: LogUpdateManyWithoutUserNestedInput
    kost?: KostUpdateManyWithoutOwnerNestedInput
    ulasan?: UlasanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWhishlistInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_token?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    log?: LogUncheckedUpdateManyWithoutUserNestedInput
    kost?: KostUncheckedUpdateManyWithoutOwnerNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type KostUpsertWithoutWishlistsInput = {
    update: XOR<KostUpdateWithoutWishlistsInput, KostUncheckedUpdateWithoutWishlistsInput>
    create: XOR<KostCreateWithoutWishlistsInput, KostUncheckedCreateWithoutWishlistsInput>
    where?: KostWhereInput
  }

  export type KostUpdateToOneWithWhereWithoutWishlistsInput = {
    where?: KostWhereInput
    data: XOR<KostUpdateWithoutWishlistsInput, KostUncheckedUpdateWithoutWishlistsInput>
  }

  export type KostUpdateWithoutWishlistsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateManyWithoutKostNestedInput
    facilitiesRoom?: FacilitiesRoomUpdateManyWithoutKostNestedInput
    facilitiesToilet?: FacilitiesToiletUpdateManyWithoutKostNestedInput
    photos?: PhotoUpdateManyWithoutKostNestedInput
    ulasan?: UlasanUpdateManyWithoutKostNestedInput
    owner?: UserUpdateOneRequiredWithoutKostNestedInput
  }

  export type KostUncheckedUpdateWithoutWishlistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateManyWithoutKostNestedInput
    facilitiesRoom?: FacilitiesRoomUncheckedUpdateManyWithoutKostNestedInput
    facilitiesToilet?: FacilitiesToiletUncheckedUpdateManyWithoutKostNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutKostNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutKostNestedInput
  }

  export type KostCreateWithoutPhotosInput = {
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus?: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressCreateNestedManyWithoutKostInput
    facilitiesRoom?: FacilitiesRoomCreateNestedManyWithoutKostInput
    facilitiesToilet?: FacilitiesToiletCreateNestedManyWithoutKostInput
    wishlists?: WishlistCreateNestedManyWithoutKostInput
    ulasan?: UlasanCreateNestedManyWithoutKostInput
    owner: UserCreateNestedOneWithoutKostInput
  }

  export type KostUncheckedCreateWithoutPhotosInput = {
    id?: number
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus?: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    owner_id: number
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressUncheckedCreateNestedManyWithoutKostInput
    facilitiesRoom?: FacilitiesRoomUncheckedCreateNestedManyWithoutKostInput
    facilitiesToilet?: FacilitiesToiletUncheckedCreateNestedManyWithoutKostInput
    wishlists?: WishlistUncheckedCreateNestedManyWithoutKostInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutKostInput
  }

  export type KostCreateOrConnectWithoutPhotosInput = {
    where: KostWhereUniqueInput
    create: XOR<KostCreateWithoutPhotosInput, KostUncheckedCreateWithoutPhotosInput>
  }

  export type UlasanCreateWithoutPhotosInput = {
    rate: number
    comments: string
    user: UserCreateNestedOneWithoutUlasanInput
    Kost?: KostCreateNestedOneWithoutUlasanInput
  }

  export type UlasanUncheckedCreateWithoutPhotosInput = {
    id?: number
    user_id: number
    rate: number
    comments: string
    kost_id?: number | null
  }

  export type UlasanCreateOrConnectWithoutPhotosInput = {
    where: UlasanWhereUniqueInput
    create: XOR<UlasanCreateWithoutPhotosInput, UlasanUncheckedCreateWithoutPhotosInput>
  }

  export type UlasanCreateManyPhotosInputEnvelope = {
    data: UlasanCreateManyPhotosInput | UlasanCreateManyPhotosInput[]
    skipDuplicates?: boolean
  }

  export type KostUpsertWithoutPhotosInput = {
    update: XOR<KostUpdateWithoutPhotosInput, KostUncheckedUpdateWithoutPhotosInput>
    create: XOR<KostCreateWithoutPhotosInput, KostUncheckedCreateWithoutPhotosInput>
    where?: KostWhereInput
  }

  export type KostUpdateToOneWithWhereWithoutPhotosInput = {
    where?: KostWhereInput
    data: XOR<KostUpdateWithoutPhotosInput, KostUncheckedUpdateWithoutPhotosInput>
  }

  export type KostUpdateWithoutPhotosInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateManyWithoutKostNestedInput
    facilitiesRoom?: FacilitiesRoomUpdateManyWithoutKostNestedInput
    facilitiesToilet?: FacilitiesToiletUpdateManyWithoutKostNestedInput
    wishlists?: WishlistUpdateManyWithoutKostNestedInput
    ulasan?: UlasanUpdateManyWithoutKostNestedInput
    owner?: UserUpdateOneRequiredWithoutKostNestedInput
  }

  export type KostUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateManyWithoutKostNestedInput
    facilitiesRoom?: FacilitiesRoomUncheckedUpdateManyWithoutKostNestedInput
    facilitiesToilet?: FacilitiesToiletUncheckedUpdateManyWithoutKostNestedInput
    wishlists?: WishlistUncheckedUpdateManyWithoutKostNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutKostNestedInput
  }

  export type UlasanUpsertWithWhereUniqueWithoutPhotosInput = {
    where: UlasanWhereUniqueInput
    update: XOR<UlasanUpdateWithoutPhotosInput, UlasanUncheckedUpdateWithoutPhotosInput>
    create: XOR<UlasanCreateWithoutPhotosInput, UlasanUncheckedCreateWithoutPhotosInput>
  }

  export type UlasanUpdateWithWhereUniqueWithoutPhotosInput = {
    where: UlasanWhereUniqueInput
    data: XOR<UlasanUpdateWithoutPhotosInput, UlasanUncheckedUpdateWithoutPhotosInput>
  }

  export type UlasanUpdateManyWithWhereWithoutPhotosInput = {
    where: UlasanScalarWhereInput
    data: XOR<UlasanUpdateManyMutationInput, UlasanUncheckedUpdateManyWithoutPhotosInput>
  }

  export type UserCreateWithoutUlasanInput = {
    username: string
    full_name: string
    email: string
    password: string
    image_url?: string | null
    role: $Enums.Role
    user_status: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    refresh_token?: RefreshTokenCreateNestedManyWithoutUserInput
    log?: LogCreateNestedManyWithoutUserInput
    kost?: KostCreateNestedManyWithoutOwnerInput
    whishlist?: WishlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUlasanInput = {
    id?: number
    username: string
    full_name: string
    email: string
    password: string
    image_url?: string | null
    role: $Enums.Role
    user_status: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    refresh_token?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    log?: LogUncheckedCreateNestedManyWithoutUserInput
    kost?: KostUncheckedCreateNestedManyWithoutOwnerInput
    whishlist?: WishlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUlasanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUlasanInput, UserUncheckedCreateWithoutUlasanInput>
  }

  export type PhotoCreateWithoutUlasanInput = {
    image_url: string
    description?: string | null
    ulasan_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    kost?: KostCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateWithoutUlasanInput = {
    id?: number
    image_url: string
    description?: string | null
    kost_id?: number | null
    ulasan_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PhotoCreateOrConnectWithoutUlasanInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutUlasanInput, PhotoUncheckedCreateWithoutUlasanInput>
  }

  export type KostCreateWithoutUlasanInput = {
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus?: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressCreateNestedManyWithoutKostInput
    facilitiesRoom?: FacilitiesRoomCreateNestedManyWithoutKostInput
    facilitiesToilet?: FacilitiesToiletCreateNestedManyWithoutKostInput
    photos?: PhotoCreateNestedManyWithoutKostInput
    wishlists?: WishlistCreateNestedManyWithoutKostInput
    owner: UserCreateNestedOneWithoutKostInput
  }

  export type KostUncheckedCreateWithoutUlasanInput = {
    id?: number
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus?: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    owner_id: number
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressUncheckedCreateNestedManyWithoutKostInput
    facilitiesRoom?: FacilitiesRoomUncheckedCreateNestedManyWithoutKostInput
    facilitiesToilet?: FacilitiesToiletUncheckedCreateNestedManyWithoutKostInput
    photos?: PhotoUncheckedCreateNestedManyWithoutKostInput
    wishlists?: WishlistUncheckedCreateNestedManyWithoutKostInput
  }

  export type KostCreateOrConnectWithoutUlasanInput = {
    where: KostWhereUniqueInput
    create: XOR<KostCreateWithoutUlasanInput, KostUncheckedCreateWithoutUlasanInput>
  }

  export type UserUpsertWithoutUlasanInput = {
    update: XOR<UserUpdateWithoutUlasanInput, UserUncheckedUpdateWithoutUlasanInput>
    create: XOR<UserCreateWithoutUlasanInput, UserUncheckedCreateWithoutUlasanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUlasanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUlasanInput, UserUncheckedUpdateWithoutUlasanInput>
  }

  export type UserUpdateWithoutUlasanInput = {
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_token?: RefreshTokenUpdateManyWithoutUserNestedInput
    log?: LogUpdateManyWithoutUserNestedInput
    kost?: KostUpdateManyWithoutOwnerNestedInput
    whishlist?: WishlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUlasanInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user_status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_token?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    log?: LogUncheckedUpdateManyWithoutUserNestedInput
    kost?: KostUncheckedUpdateManyWithoutOwnerNestedInput
    whishlist?: WishlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PhotoUpsertWithoutUlasanInput = {
    update: XOR<PhotoUpdateWithoutUlasanInput, PhotoUncheckedUpdateWithoutUlasanInput>
    create: XOR<PhotoCreateWithoutUlasanInput, PhotoUncheckedCreateWithoutUlasanInput>
    where?: PhotoWhereInput
  }

  export type PhotoUpdateToOneWithWhereWithoutUlasanInput = {
    where?: PhotoWhereInput
    data: XOR<PhotoUpdateWithoutUlasanInput, PhotoUncheckedUpdateWithoutUlasanInput>
  }

  export type PhotoUpdateWithoutUlasanInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ulasan_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    kost?: KostUpdateOneWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateWithoutUlasanInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kost_id?: NullableIntFieldUpdateOperationsInput | number | null
    ulasan_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KostUpsertWithoutUlasanInput = {
    update: XOR<KostUpdateWithoutUlasanInput, KostUncheckedUpdateWithoutUlasanInput>
    create: XOR<KostCreateWithoutUlasanInput, KostUncheckedCreateWithoutUlasanInput>
    where?: KostWhereInput
  }

  export type KostUpdateToOneWithWhereWithoutUlasanInput = {
    where?: KostWhereInput
    data: XOR<KostUpdateWithoutUlasanInput, KostUncheckedUpdateWithoutUlasanInput>
  }

  export type KostUpdateWithoutUlasanInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateManyWithoutKostNestedInput
    facilitiesRoom?: FacilitiesRoomUpdateManyWithoutKostNestedInput
    facilitiesToilet?: FacilitiesToiletUpdateManyWithoutKostNestedInput
    photos?: PhotoUpdateManyWithoutKostNestedInput
    wishlists?: WishlistUpdateManyWithoutKostNestedInput
    owner?: UserUpdateOneRequiredWithoutKostNestedInput
  }

  export type KostUncheckedUpdateWithoutUlasanInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateManyWithoutKostNestedInput
    facilitiesRoom?: FacilitiesRoomUncheckedUpdateManyWithoutKostNestedInput
    facilitiesToilet?: FacilitiesToiletUncheckedUpdateManyWithoutKostNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutKostNestedInput
    wishlists?: WishlistUncheckedUpdateManyWithoutKostNestedInput
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: number
    refresh_token: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LogCreateManyUserInput = {
    id?: number
    action: string
    description: string
    created_at?: Date | string
  }

  export type KostCreateManyOwnerInput = {
    id?: number
    slug: string
    title: string
    price: number
    type: $Enums.Kost_type
    ratings: number
    pengaturan_khusus?: string | null
    address_id: number
    facilitiesRoom_id: number
    facilitiesToilet_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WishlistCreateManyUserInput = {
    id?: number
    kost_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UlasanCreateManyUserInput = {
    id?: number
    rate: number
    comments: string
    photos_id: number
    kost_id?: number | null
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KostUpdateWithoutOwnerInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateManyWithoutKostNestedInput
    facilitiesRoom?: FacilitiesRoomUpdateManyWithoutKostNestedInput
    facilitiesToilet?: FacilitiesToiletUpdateManyWithoutKostNestedInput
    photos?: PhotoUpdateManyWithoutKostNestedInput
    wishlists?: WishlistUpdateManyWithoutKostNestedInput
    ulasan?: UlasanUpdateManyWithoutKostNestedInput
  }

  export type KostUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateManyWithoutKostNestedInput
    facilitiesRoom?: FacilitiesRoomUncheckedUpdateManyWithoutKostNestedInput
    facilitiesToilet?: FacilitiesToiletUncheckedUpdateManyWithoutKostNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutKostNestedInput
    wishlists?: WishlistUncheckedUpdateManyWithoutKostNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutKostNestedInput
  }

  export type KostUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumKost_typeFieldUpdateOperationsInput | $Enums.Kost_type
    ratings?: FloatFieldUpdateOperationsInput | number
    pengaturan_khusus?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: IntFieldUpdateOperationsInput | number
    facilitiesRoom_id?: IntFieldUpdateOperationsInput | number
    facilitiesToilet_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    kost?: KostUpdateOneRequiredWithoutWishlistsNestedInput
  }

  export type WishlistUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    kost_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    kost_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UlasanUpdateWithoutUserInput = {
    rate?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    photos?: PhotoUpdateOneWithoutUlasanNestedInput
    Kost?: KostUpdateOneWithoutUlasanNestedInput
  }

  export type UlasanUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    photos_id?: IntFieldUpdateOperationsInput | number
    kost_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UlasanUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    photos_id?: IntFieldUpdateOperationsInput | number
    kost_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AddressCreateManyKostInput = {
    id?: number
    street_name: string
    street_number: string
    village_name: string
    city: string
    state: string
    zip: string
    longitude: string
    latitude: string
  }

  export type FacilitiesRoomCreateManyKostInput = {
    id?: number
    ac: boolean
    meja: boolean
    lemari: boolean
    kursi: boolean
    wifi: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FacilitiesToiletCreateManyKostInput = {
    id?: number
    kamar_mandi: $Enums.Kamar_mandi
    shower: boolean
    kloset: $Enums.Kloset_type
    air_panas: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PhotoCreateManyKostInput = {
    id?: number
    image_url: string
    description?: string | null
    ulasan_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WishlistCreateManyKostInput = {
    id?: number
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UlasanCreateManyKostInput = {
    id?: number
    user_id: number
    rate: number
    comments: string
    photos_id: number
  }

  export type AddressUpdateWithoutKostInput = {
    street_name?: StringFieldUpdateOperationsInput | string
    street_number?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateWithoutKostInput = {
    id?: IntFieldUpdateOperationsInput | number
    street_name?: StringFieldUpdateOperationsInput | string
    street_number?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyWithoutKostInput = {
    id?: IntFieldUpdateOperationsInput | number
    street_name?: StringFieldUpdateOperationsInput | string
    street_number?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
  }

  export type FacilitiesRoomUpdateWithoutKostInput = {
    ac?: BoolFieldUpdateOperationsInput | boolean
    meja?: BoolFieldUpdateOperationsInput | boolean
    lemari?: BoolFieldUpdateOperationsInput | boolean
    kursi?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilitiesRoomUncheckedUpdateWithoutKostInput = {
    id?: IntFieldUpdateOperationsInput | number
    ac?: BoolFieldUpdateOperationsInput | boolean
    meja?: BoolFieldUpdateOperationsInput | boolean
    lemari?: BoolFieldUpdateOperationsInput | boolean
    kursi?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilitiesRoomUncheckedUpdateManyWithoutKostInput = {
    id?: IntFieldUpdateOperationsInput | number
    ac?: BoolFieldUpdateOperationsInput | boolean
    meja?: BoolFieldUpdateOperationsInput | boolean
    lemari?: BoolFieldUpdateOperationsInput | boolean
    kursi?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilitiesToiletUpdateWithoutKostInput = {
    kamar_mandi?: EnumKamar_mandiFieldUpdateOperationsInput | $Enums.Kamar_mandi
    shower?: BoolFieldUpdateOperationsInput | boolean
    kloset?: EnumKloset_typeFieldUpdateOperationsInput | $Enums.Kloset_type
    air_panas?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilitiesToiletUncheckedUpdateWithoutKostInput = {
    id?: IntFieldUpdateOperationsInput | number
    kamar_mandi?: EnumKamar_mandiFieldUpdateOperationsInput | $Enums.Kamar_mandi
    shower?: BoolFieldUpdateOperationsInput | boolean
    kloset?: EnumKloset_typeFieldUpdateOperationsInput | $Enums.Kloset_type
    air_panas?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilitiesToiletUncheckedUpdateManyWithoutKostInput = {
    id?: IntFieldUpdateOperationsInput | number
    kamar_mandi?: EnumKamar_mandiFieldUpdateOperationsInput | $Enums.Kamar_mandi
    shower?: BoolFieldUpdateOperationsInput | boolean
    kloset?: EnumKloset_typeFieldUpdateOperationsInput | $Enums.Kloset_type
    air_panas?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUpdateWithoutKostInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ulasan_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ulasan?: UlasanUpdateManyWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateWithoutKostInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ulasan_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ulasan?: UlasanUncheckedUpdateManyWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateManyWithoutKostInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ulasan_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistUpdateWithoutKostInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWhishlistNestedInput
  }

  export type WishlistUncheckedUpdateWithoutKostInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistUncheckedUpdateManyWithoutKostInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UlasanUpdateWithoutKostInput = {
    rate?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUlasanNestedInput
    photos?: PhotoUpdateOneWithoutUlasanNestedInput
  }

  export type UlasanUncheckedUpdateWithoutKostInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    photos_id?: IntFieldUpdateOperationsInput | number
  }

  export type UlasanUncheckedUpdateManyWithoutKostInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    photos_id?: IntFieldUpdateOperationsInput | number
  }

  export type UlasanCreateManyPhotosInput = {
    id?: number
    user_id: number
    rate: number
    comments: string
    kost_id?: number | null
  }

  export type UlasanUpdateWithoutPhotosInput = {
    rate?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUlasanNestedInput
    Kost?: KostUpdateOneWithoutUlasanNestedInput
  }

  export type UlasanUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    kost_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UlasanUncheckedUpdateManyWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    kost_id?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}