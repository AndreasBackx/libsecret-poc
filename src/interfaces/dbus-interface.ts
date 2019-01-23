
export abstract class DBusInterface {

    public abstract path: string
    public abstract name: string

    private object: any
    private service: any

    /**
     * Has to be nullable because otherwise it will overwrite the value written by the decorator.
     */
    public methods?: any[]

    public attachService(service: any) {
        this.service = service

        console.log('updateService')

        this.object = service.createObject(this.path)
        var objectInterface = this.object.createInterface(this.name)


        if (this.methods) {
            this.methods.forEach((method: any) => {
                // console.log('method.name:', method.name)
                // console.log('method.opts.in:', method.opts.in)
                // console.log('method.opts.out:', method.opts.out)
                // console.log('method.handler:', method.handler)

                objectInterface.addMethod(method.name, method.opts, method.handler)
            })
        }

        console.log('objectInterface methods')
        console.log(objectInterface.methods)


        objectInterface.update()


        console.log('objectInterface introspection')
        console.log(objectInterface.introspection)
    }

    public detachService() {
        this.service.removeObject(this.object);
    }
}
