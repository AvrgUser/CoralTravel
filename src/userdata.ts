

export class User{
    private static values : { [name : string]:{value: any, listener:Function|undefined}} = {}
    public static value(name : string, value : any = undefined){
        if(value){
            if(this.values[name]){
                this.values[name].value = value
                if(this.values[name].listener)this.values[name].listener!(value)
            }
            else this.values[name] = {value : value, listener: undefined}
            
        }
        else {
            return this.values[name].value
        }
    }
    public static listen(name: string, listener : Function){
        if(this.values[name])
        this.values[name].listener = listener
        else this.values[name] = {value : undefined, listener: listener}
    }
}