import { Method, Property, Signal } from "../decorators";
import { Access, DBusType, ObjectPath, Secret } from "../models";
import { DBusInterface } from "./dbus-interface";

interface ItemAttributes {
    [key: string]: string;
}

interface ItemProperties {
    [key: string]: any;
}

export class Collection extends DBusInterface {
    public path: string
    public name: string

    /**
     * TODO Decide how to create collection objects.
     * Because they should be a wrapper around BitWarden's folders.
     */
    public constructor(path: string, name: string) {
        super()

        this.path = path;
        this.name = name;
    }

    /**
     * TypeScript doesn't support different constructors with totally different arguments.
     * But there needs to be a way to create collections from the folders in BitWarden.
     * @param folder Folder class that is used in BitWarden.
     */
    public static fromFolder(folder: any): Collection {
        return new Collection(folder.path, folder.name);
    }

    @Method([])
    public Delete(
        callback: (prompt: ObjectPath) => any
    ) {
        // TODO Delete the entire collection.
        this.detachService();
    }

    @Method([])
    public SearchItems(
        attributes: ItemAttributes,
        callback: (results: ObjectPath[]) => any
    ) { }

    @Method([])
    public CreateItem(
        properties: ItemProperties,
        secret: Secret,
        replace: boolean,
        callback: (item: ObjectPath, prompt: ObjectPath) => any
    ) { }

    @Signal()
    public ItemCreated() { }

    @Signal()
    public ItemDeleted() { }

    @Signal()
    public ItemChanged() { }

    @Property(`${DBusType.ARRAY}${DBusType.OBJECT_PATH}`)
    get Items(): ObjectPath[] {
        return []
    }

    @Property(DBusType.STRING, Access.READWRITE)
    get Label(): string {
        return ""
    }

    @Property(DBusType.BOOLEAN)
    get Locked(): boolean {
        return true
    }

    @Property(DBusType.UINT64)
    get Created(): number {
        return 0
    }

    @Property(DBusType.UINT64)
    get Modified(): number {
        return 0
    }

}
