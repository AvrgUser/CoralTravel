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
    console.log(query)
    return sendQuery(query, callback)
}

function deleteQuery(board, conditions, callback){
    let query = `DELETE FROM \`${board}\` WHERE `
    if(conditions!=''){
        let keys = Object.keys(conditions)
        for(let i=0;i<keys.length;i++){
            query += `${keys[i]} = ${conditions[keys[i]]}`
            if(i<keys.length-1) query +=' AND '
        }
    }else {
        callback(new Error('Wrong conditions: '+conditions))
        return
    }
    console.log(query)
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
    // },

    getClientsList(callback){
        selectionQuery('clients', 'id, login', '', callback)
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

    getUserInfo(id, callback, column='*'){
        selectionQuery('clients', column,
            {
                id: `${id}`
            },
        callback)
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

    updateTour( id, name, city, date, length, service, description, price, comforts, info, callback){
        updateQuery('tours',
        {
            id: `"${id}"`,
        },
        {
            name: `"${name}"`,
            city: `"${city}"`,
            service: `"${service}"`,
            date: `"${date}"`,
            length: `"${length}"`,
            description: `"${description}"`,
            price: `"${price}"`,
            info: `"${info}"`,
            comforts: `"${comforts}"`,
        }, callback)
    },

    appendTourMedia(id, media){
        updateQuery('tours',
        {
            id: `"${id}"`,
        },
        {
            media: `CONCAT(media, ";${media}")`
        })
    },

    reduceTourMedia(id, files){
        if(!files.length) files = [files]
        this.getTourInfo(id, (error, result)=>{
            let media = result[0].media.split(';')
            let leave = ''
            media.forEach((file, i)=>{
                if(!files.includes(file)){
                    leave+=file
                    if(i!=media.length-1)leave+=';'
                }
            })
            updateQuery('tours',
                {
                    id: `"${id}"`,
                },
                {
                    media: `"${leave}"`
                })
        }, 'media')
    },

    addTour(name, city, date, length, service, description, price, info, callback){
        insertQuery('tours',
        {
            name: `"${name}"`,
            city: `"${city}"`,
            service: `"${service}"`,
            date: `"${date}"`,
            length: `"${length}"`,
            description: `"${description}"`,
            price: `"${price}"`,
            info: `"${info}"`
        }, callback)
    },

    deleteTour(id, callback){
        deleteQuery('tours', {
            id: `"${id}"`
        }, callback)
    },
}