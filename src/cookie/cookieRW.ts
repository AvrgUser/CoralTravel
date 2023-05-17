let cookies : string[][] = []
console.log('cookie: '+document.cookie.replace(' ', ''))
function refresh(){
    if(document.cookie.length>1)
    document.cookie.replace(' ', '').split(';').forEach(element => {
        cookies[cookies.length] = element.split('=')
    });
}
function save(){
    if(cookies.length>0){

    cookies.forEach(element => {
        document.cookie=`${element[0]}=${element[1]};`
    });
}
    console.log(document.cookie)
}
export class Cookie{
    static get(cookie: string){
        refresh()
        let value = ''
        cookies.forEach(element => {
            if(element[0]==cookie) {
                value = element[1]
            }
        });
        return value
    }
    static set(cookie: string, value: string){
        cookies.forEach(element => {
            if(element[0]==cookie) element[1] = value
        });
        save()
    }
    static clear(cookie: string){
        cookies.forEach(element => {
            if(element[0]==cookie) element[1] = ''
        });
        save()
    }
}