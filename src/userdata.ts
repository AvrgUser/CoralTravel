export class User{
    private static _isAuth:Function
    static get isAuth (){
        return this._isAuth()
    }
    static set isAuth(value){
        if(this._isAuth==undefined) this._isAuth = value
        else this._isAuth(value)
    }
    static username = ""
}