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
        let keys = Object.keys(params)
        for(let i=0;i<keys.length;i++){
            query += `${keys[i]} = ${params[keys[i]]}`
            if(i<keys.length-1) query +=' AND '
        }
    }
    console.log(query)
    return sendQuery(query, callback)
}

function insertQuery(board, params, callback){
    let query = `INSERT INTO \`${board}\` (`
    let values = 'VALUES ('
    let keys = Object.keys(params)
    for(let i=0;i<keys.length;i++){
        query += `${keys[i]}`
        values += `${params[keys[i]]}`
        if(i<keys.length-1) {
            query +=', '
            values +=', '
        }
    }
    query+=`) ${values})`
    console.log(query, callback)
    return sendQuery(query, callback)
}

function updateQuery(board, conditions, params, callback){
    let query = `UPDATE \`${board}\` SET `
    if(params!=''){
        let keys = Object.keys(params)
        for(let i=0;i<keys.length;i++){
            query += `\`${keys[i]}\` = ${params[keys[i]]}`
            if(i<keys.length-1) query +=', '
        }
    }
    if(conditions!=''){
        query+=' WHERE '
        let keys = Object.keys(conditions)
        for(let i=0;i<keys.length;i++){
            query += `${keys[i]} = ${conditions[keys[i]]}`
            if(i<keys.length-1) query +=' AND '
        }
    }
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
        selectionQuery('clients', column, 
            {
                login: `"${login}"`
            },
        callback)
    },

    addUser(login, password, name, lastname, email, birth, gender, phone, callback){
        insertQuery('clients', {
            login: `"${login}"`,
            password: `"${password}"`,
            name: `"${name}"`,
            lastname: `"${lastname}"`,
            email: `"${email}"`,
            phone: `"${phone}"`,
            birthdate: `"${birth}"`,
            gender: `"${gender}"`,
        }, callback)
    },

    updateUser(login, name, lastname, email, birth, gender, phone, callback){
        updateQuery('clients',
        {
            login: `"${login}"`
        },
        {
            login: `"${login}"`,
            name: `"${name}"`,
            lastname: `"${lastname}"`,
            email: `"${email}"`,
            phone: `"${phone}"`,
            birthdate: `"${birth}"`,
            gender: `"${gender}"`,
        }, callback)
    },

    getTourInfo(id, callback, column='*'){
        selectionQuery('tours', column,
            {
                id: `${id}`
            },
        callback)
    },

    getToursList(callback){
        selectionQuery('tours', 'id', '', callback)
    },

    updateTour( id, name, city, hotel, date, length, service, description, price, info, callback){
        updateQuery('tours',
        {
            id: `"${id}"`,
        },
        {
            name: `"${name}"`,
            city: `"${city}"`,
            hotel: `"${hotel}"`,
            service: `"${service}"`,
            date: `"${date}"`,
            length: `"${length}"`,
            description: `"${description}"`,
            price: `"${price}"`,
            info: `"${info}"`
        }, callback)
    },

    addTour(name, city, hotel, date, length, service, description, price, info, callback){
        insertQuery('tours',
        {
            name: `"${name}"`,
            city: `"${city}"`,
            hotel: `"${hotel}"`,
            service: `"${service}"`,
            date: `"${date}"`,
            length: `"${length}"`,
            description: `"${description}"`,
            price: `"${price}"`,
            info: `"${info}"`
        }, callback)
    },
}