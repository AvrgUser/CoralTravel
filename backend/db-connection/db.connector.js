let sql = require('mysql').createConnection({
    host: '109.248.206.65:3306',
    user: 'u174_hDiLTbWKdf',
    password: 'zlAST5kS2Cm.B!n1tLV.HM!G',
    database: 's174_ReiL',
})

function sendQuery(board, column, callback){
    sendQuery(board, column, undefined, callback)
}

function sendQuery(board, column, params, callback){
    let query = `SELECT ${column} FROM ${board}`
    if(params!=undefined){
        query+=' WHERE '
        for(let i=0;i<params.length;i++){
            query += `${params[i].name} = ${params[i].value}`
            if(i<params.length-1) query +=' AND '
        }
    }
    return sql.query(query, callback)
}

module.exports = {
    getCitiesList(){

        return 'Moscow Saint-Petersburg Bryansk'
    },

    getToursList(params){
    },

    getClientsList(callback){
        sendQuery('clients', '*', callback)
    },

    getClientInfo(login, callback){
        this.getClientInfo(login, '*', callback)
    },

    getClientInfo(login, column, callback){
        sendQuery('clients', column, [
            {
                name: 'login',
                value: login
            }
        ],
        callback)
    },
}