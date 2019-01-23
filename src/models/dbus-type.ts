
/**
 * I want to change this to a class where you can use the Builder pattern or something
 * so you can create array, struct, and dict types.
 */
export enum DBusType {
    BOOLEAN = 'b',
    BYTE = 'y',
    // Integers
    INT16 = 'n',
    UINT16 = 'q',
    INT32 = 'i',
    UINT32 = 'u',
    INT64 = 'x',
    UINT64 = 't',
    DOUBLE = 'd',

    STRING = 's',

    SIGNATURE = 'g',
    OBJECT_PATH = 'o',

    // Array usage:
    // ab: array of booleans
    // a(bs): array of a struct with a boolean and a string
    ARRAY = 'a',
    // Struct usage: ()
    STRUCT = 'r',
    // Dictionary usage: {}
    DICT = 'e',
    VARIANT = 'v',
}
