import { DBusArgument } from '../models';

// TODO
export function Signal(input: DBusArgument[] = []) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    }
}
