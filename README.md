# BitWarden Libsecrets

This is a proof of concept that shows how I would implement libsecrets' DBUS API [1] into BitWarden. This would allow you to use BitWarden as the sole password manager on your Linux computer. It would remove the need for GNOME keyring and KDE Wallet. At the same time it would allow for native autocompletion in Google Chrome and Firefox without the use of an extension.

This proof of concept does not work. The current issues/questions that I am facing:

- [ ] Find/create a proper Javascript/TypeScript DBUS API.

    Neither dbus-native nor [node-dbus](https://github.com/Shouqun/node-dbus) seem to be actively maintained and they both are not stable enough it seems to be used in production software.

    For how far that I tested I could not get dbus-native to even run because it was saying that [`data` was undefined](https://github.com/sidorares/dbus-native/blob/master/lib/marshall.js#L60). It could just be that I was making a mistake. It is however a very old library and contains no documentation whatsoever.

    Node-dbus does seem to be the weaker one from the two as it lacks some obvious features and is the least actively maintained. It however is currently used as it is the only one that doesn't crash when I tried to add the `Service.OpenSession` method. It however has an [open issue](https://github.com/Shouqun/node-dbus/issues/132) where it does not support returning multiple values from a method. There are also a lot more old issues.

    It is imo the best idea to create our own DBus library.

Still not all of the libsecret DBus interfaces are implemented. Though the purpose of this poc was to inspect how to implement the DBus communication. Adding the actual functionality, should "simply" be plugging it into the BitWarden's desktop project.
