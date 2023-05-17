let sql = require('mysql').createConnection({
    host: '194.190.152.244',
    port: '3308',
    user: 'root2',
    password: 'mtMDk5COMlwfuCvRsHX0pMYFZr87P8e3RT8BPt7Vws8e3KMpBIy83zepSFzXzN3E',
    database: 'coral_data',
    
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
    return sql.query(query, callback)
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
    return sql.query(query, callback)
}

module.exports = {
    getCitiesList(){

        return 'Moscow Saint-Petersburg Bryansk'
    },

    getToursList(params){
    },

    getClientsList(callback){
        selectionQuery('clients', '*', '', callback)
    },

    getClientInfo(login, callback, column='*'){
        selectionQuery('clients', column, [
            {
                name: 'name',
                value: `"${login}"`
            }
        ],
        callback)
    },

    addUser(login, password, callback){
        insertQuery('clients', [{
            name: 'name',
            value: `"${login}"`
        },
        {
            name: 'password',
            value: `"${password}"`
        }
        ], callback)
    },
}