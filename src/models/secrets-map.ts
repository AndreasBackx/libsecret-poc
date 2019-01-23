import { Secret } from ".";

export interface SecretsMap {
    // [key: ObjectPath], but this is not supported.
    // https://github.com/Microsoft/TypeScript/issues/1778
    [key: string]: Secret;
}
