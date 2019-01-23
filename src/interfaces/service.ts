import { Method, Property, Signal } from '../decorators';
import { DBusType, ObjectPath, SecretsMap } from '../models';
import { DBusInterface as DBUSInterface } from './dbus-interface';

/**
 * org.freedesktop.Secret.Service
 *
 * This should perhaps be converted to a singleton as there is only one service.
 */
export class Service extends DBUSInterface {

    public path: string = '/org/freedesktop/secrets'
    public name: string = 'org.freedesktop.Secret.Service'

    /**
     * OpenSession creates a session with the given algorithm and input for that algorithm.
     *
     * There is a plain algorithm that doesn't provide encryption,
     * which needs to be supported.
     * https://specifications.freedesktop.org/secret-service/ch07s02.html
     *
     * Then there is a Diffie-Helman algorithm:
     * https://specifications.freedesktop.org/secret-service/ch07s03.html
     *
     * I suggest we only implement the plain algorithm in the beginning and then
     * in the end we implement the other algorithm as only the plain one is strongly
     * recommended to be supported.
     */
    @Method(
        [
            {
                name: 'algorithm',
                type: DBusType.STRING,
            }, {
                name: 'input',
                type: DBusType.VARIANT,
            }
        ], [
            {
                name: 'output',
                type: DBusType.STRING,
            }, {
                name: 'result',
                type: DBusType.VARIANT,
            }
        ],
    )
    public OpenSession(
        algorithm: string, input: any,
        callback: (output: string, result: ObjectPath) => any
    ) {
        /* TODO
        let session = new Session(algorithm, input)
        const output = session.output <-- this is a getter
        session.attachService(this.service)
        callback(session.output, session.path)
        */
    }

    @Method(
        [
            {
                name: 'properties',
                type: `{${DBusType.STRING}${DBusType.VARIANT}}`,
            },
            {
                name: 'alias',
                type: DBusType.STRING,
            },
        ], [
            {
                name: 'collection',
                type: DBusType.OBJECT_PATH,
            },
            {
                name: 'prompt',
                type: DBusType.OBJECT_PATH,
            },
        ],
    )
    public CreateCollection(
        properties: object, alias: string,
        callback: (collection: ObjectPath, prompt: ObjectPath) => any) {
        /* TODO
            let collection = new Collection(properties, alias)
            collection.attachService(this.service)
            callback(collection.path, collection.prompt.path)
        */
    }


    @Method(
        [
            {
                name: 'attributes',
                type: `{${DBusType.STRING}${DBusType.STRING}}`,
            },
        ], [
            {
                name: 'unlocked',
                type: `${DBusType.ARRAY}${DBusType.OBJECT_PATH}`,
            },
            {
                name: 'locked',
                type: `${DBusType.ARRAY}${DBusType.OBJECT_PATH}`,
            },
        ],
    )
    public SearchItems(
        attributes: object,
        callback: (unlocked: ObjectPath[], locked: ObjectPath[]) => any) {
        /*
            let
        */
    }


    @Method(
        [
            {
                name: 'objects',
                type: `${DBusType.ARRAY}${DBusType.OBJECT_PATH}`,
            },
        ], [
            {
                name: 'unlocked',
                type: `${DBusType.ARRAY}${DBusType.OBJECT_PATH}`,
            },
            {
                name: 'prompt',
                type: DBusType.OBJECT_PATH,
            },
        ],
    )
    public Unlock(
        objects: ObjectPath[],
        callback: (unlocked: ObjectPath[], prompt: ObjectPath) => any) {
    }


    @Method(
        [
            {
                name: 'objects',
                type: `${DBusType.ARRAY}${DBusType.OBJECT_PATH}`,
            },
        ], [
            {
                name: 'locked',
                type: `${DBusType.ARRAY}${DBusType.OBJECT_PATH}`,
            },
            {
                name: 'prompt',
                type: DBusType.OBJECT_PATH,
            },
        ],
    )
    public Lock(
        objects: ObjectPath[],
        callback: (locked: ObjectPath[], prompt: ObjectPath) => any) {

    }


    @Method(
        [
            {
                name: 'items',
                type: `${DBusType.ARRAY}${DBusType.OBJECT_PATH}`,
            },
        ], [
            {
                name: 'session',
                type: DBusType.OBJECT_PATH,
            },
        ],
    )
    public GetSecrets(
        items: ObjectPath[], session: ObjectPath,
        callback: (secrets: SecretsMap) => any) {

    }

    @Method(
        [
            {
                name: 'name',
                type: DBusType.STRING,
            },
        ], [
            {
                name: 'collection',
                type: DBusType.OBJECT_PATH,
            },
        ],
    )
    public ReadAlias(
        name: string,
        callback: (collection: ObjectPath) => any) {

    }

    @Method(
        [
            {
                name: 'name',
                type: DBusType.STRING,
            },
            {
                name: 'collection',
                type: DBusType.OBJECT_PATH,
            },
        ],
    )
    public SetAlias(
        name: string, collection: string,
        callback: () => any) {

    }

    @Signal()
    public CollectionCreated(collection: ObjectPath) { }

    @Signal()
    public CollectionDeleted(collection: ObjectPath) { }

    @Signal()
    public CollectionChanged(collection: ObjectPath) { }

    @Property(`${DBusType.ARRAY}${DBusType.OBJECT_PATH}`)
    get Collections(): ObjectPath[] {
        return []
    }
}
