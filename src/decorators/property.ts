import { Access, DBusType } from '../models';

// TODO
export function Property(type: DBusType | string, access: Access = Access.READ) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    }
}
