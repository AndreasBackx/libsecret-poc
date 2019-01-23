import DBus from 'dbus';
import { Service } from './interfaces';

const serviceName = 'org.freedesktop.secrets';
var service = DBus.registerService('session', serviceName);

console.log(DBus.Define(String, 'test'));

// TODO Add the serviceInterface to some state.
var serviceInterface = new Service();
serviceInterface.attachService(service);

/* TODO
Convert all of the folders from BitWarden to Collection objects:

let folders = getAllFoldersOrSomething()
folders.forEach((folder: Folder) => {
    let collection = new Collection(folder);
    collection.attachService(service);

    Add the collection to some state here as well to keep track of it.
})
*/
