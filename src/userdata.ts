import { TupleType } from "typescript";

export class User{
    private static values : { [name : string]:{value: any, listener:Function|undefined}} = {}
    public static value(name : string, value : any = undefined){
        if(value){
            this.values[name] = {value : value, listener: undefined}
        }
        else {
            this.values[name].listener!()
            return this.values[name].value
        }
    }
    public static listen(name: string, listener : Function){
        if(this.values[name]!=undefined) 
        this.values[name].listener = listener
        else this.values[name] = {value : {}, listener: undefined}
    }
}