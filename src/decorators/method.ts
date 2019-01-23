import { DBusArgument } from '../models';

export function Method(input: DBusArgument[], output: DBusArgument[] = []) {
    console.log('input:', input);

    input.forEach((value: DBusArgument) => {
        console.log(value);
    })

    console.log('output:', output);
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // console.log('target:', target);
        // console.log('target.constructor.name:', target.constructor.name);
        // console.log('propertyKey:', propertyKey);
        // console.log('descriptor:', descriptor);
        // console.log('target.methods:', target.methods);

        if (!target.methods) {
            target.methods = [];
        }

        target.methods.push(
            {
                name: propertyKey,
                opts: {
                    in: input,
                    out: output,
                },
                handler: descriptor.value,
            }
        );
    }
}
