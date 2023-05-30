//#region 
let sql = require('mysql').createConnection({
    host: '78.46.109.73',
    port: '3311',
    user: 'reil',
    password: 'gK3cI1zV6r',
    database: 'reil',
})

function selectionQuery(board, column, params, callback){
    let query = `SELECT ${column} FROM \`${board}\``
    if(params!=''){
        query+=' WHERE '
        for(let i=0;i<params.length;i++){
            query += `${params[i].name} = ${params[i].value}`
            if(i<params.length-1) query +=' AND '
        }
    }
    console.log(query)
    return sendQuery(query, callback)
}

function insertQuery(board, params, callback){
    let query = `INSERT INTO \`${board}\` (`
    let values = 'VALUES ('
    for(let i=0;i<params.length;i++){
        query += `${params[i].name}`
        values += `${params[i].value}`
        if(i<params.length-1) {
            query +=', '
            values +=', '
        }
    }
    query+=`) ${values})`
    console.log(query, callback)
    return sendQuery(query, callback)
}

function sendQuery(query, callback){
    try{
        sql.query(query, callback)
    }
    catch(e){
        callback(e)
    }
}

//#endregion
module.exports = {
    getCitiesList(){

        return 'Moscow Saint-Petersburg Bryansk'
    },

    // getToursList(params){
    // },

    getClientsList(callback){
        selectionQuery('clients', '*', '', callback)
    },

    getClientInfo(login, callback, column='*'){
        selectionQuery('clients', column, [
            {
                name: 'login',
                value: `"${login}"`
            },
        ],
        callback)
    },

    addUser(login, password, name, lastname, phone, callback){
        insertQuery('clients', [{
            name: 'login',
            value: `"${login}"`
        },
        {
            name: 'password',
            value: `"${password}"`
        },
        {
            name: 'name',
            value: `"${name}"`
        },
        {
            name: 'lastname',
            value: `"${lastname}"`
        },
        {
            name: 'phone',
            value: `"${phone}"`
        },
        ], callback)
    },
}