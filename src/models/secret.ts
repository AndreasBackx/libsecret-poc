import { ObjectPath } from ".";

export type Byte = number;

export interface Secret {
    session: ObjectPath,
    parameters: Byte[],
    value: Byte[],
    contentType: string
}
