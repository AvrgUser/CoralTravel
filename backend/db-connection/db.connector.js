 //#region 
let sql = require('mysql').createConnection({
    host: '78.46.109.73',
    port: '3311',
    user: 'reil',
    password: 'gK3cI1zV6r',
    database: 'reil',
})

function selectionQuery(board, column, params, callback, autoParseParams = true){
    let query = `SELECT ${column} FROM \`${board}\``
    if(params!=''&&params!=undefined) {if(autoParseParams){
        query+=' WHERE '
        let keys = Object.keys(params)
        for(let i=0;i<keys.length;i++){
            let value = params[keys[i]]
            query += `${keys[i]} = ${(value.includes!=undefined&&value.includes('CONCAT'))?value:`"${value}"`}`
            if(i<keys.length-1) query +=' AND '
        }
    }
    else query+=' WHERE '+params
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
        let value = params[keys[i]]
        values += `${(value&&value.includes!=undefined&&value.includes('CONCAT'))?value:`"${value}"`}`
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
            let value = params[keys[i]]
            query += `\`${keys[i]}\` = ${(value.includes!=undefined&&value.includes('CONCAT'))?value:`"${value}"`}`
            if(i<keys.length-1) query +=', '
        }
    }
    if(conditions!=''){
        query+=' WHERE '
        let keys = Object.keys(conditions)
        for(let i=0;i<keys.length;i++){
            let value = conditions[keys[i]]
            query += `${keys[i]} = ${(value.includes!=undefined&&value.includes('CONCAT'))?value:`"${value}"`}`
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
            query += `${keys[i]} = "${conditions[keys[i]]}"`
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
    getCities(callback){
        sendQuery(`SELECT city FROM tours GROUP BY city`, callback)
    },

    getClientsList(filters, callback){
        let params = ''
        Object.keys(filters).forEach((param, i)=>{
            if(param == 'login') params+=`login LIKE "%${filters[param]}%" `
            if(i<filters.length-1)params+='AND '
        })
        selectionQuery('clients', 'id, login', params, callback, false)
    },

    getClientInfo(login, callback, column='*'){
        selectionQuery('clients', column, 
            {
                login: login
            },
        callback)
    },

    addUser(login, password, name, lastname, email, birth, gender, phone, callback){
        insertQuery('clients', {
            login: login,
            password: password,
            name: name,
            lastname: lastname,
            email: email,
            phone: phone,
            birthdate: birth,
            gender: gender,
        }, callback)
    },

    getUserInfo(id, callback, column='*'){
        selectionQuery('clients', column,
            {
                id:id
            },
        callback)
    },

    updateUser(login, name, lastname, email, birth, gender, phone, callback){
        updateQuery('clients',
        {
            login: login
        },
        {
            login: login,
            name: name,
            lastname: lastname,
            email: email,
            phone: phone,
            birthdate: birth,
            gender: gender,
        }, callback)
    },

    addFavourite(id, tour, callback){
        updateQuery('clients',
        {
            id: id,
        },
        {
            favourites: `CONCAT(favourites, ";${tour}")`
        }, callback)
    },

    removeFavourite(id, tour, callback){
        
        if(!tour.length) tour = [''+tour]
        console.log(tour[0])
        this.getUserInfo(id, (error, result)=>{
            let favourites = result[0].favourites.split(';')
            let leave = ''
            for(let i = 0; i< favourites.length;i++){
                let file = favourites[i]
                if(!tour.includes(file)&&file!=''){
                    leave+=file
                    if(i<favourites.length-1)leave+=';'
                }
            }
            updateQuery('clients',
                {
                    id: id,
                },
                {
                    favourites: leave
                }, callback)
        }, 'favourites')
    },

    getTourInfo(id, callback, column='*'){
        selectionQuery('tours', column,
            {
                id:id
            },
        callback)
    },

    getToursList(filters ,callback){

        let params = ''
        let keys = Object.keys(filters)
        keys.forEach((param, i)=>{
            if(param == 'name') params+=`name LIKE "%${filters[param]}%" `
            else if(param == 'lengthMin') params+=`length >= ${filters[param]} `
            else if(param == 'lengthMax') params+=`length <= ${filters[param]} `
            else if(param == 'priceMin') params+=`price >= ${filters[param]} `
            else if(param == 'priceMax') params+=`price <= ${filters[param]} `
            else params+=`${param} = "${filters[param]}" `
            if(i<keys.length-1)params+='AND '
        })
        selectionQuery('tours', 'id', params, callback, false)
    },

    updateTour( id, name, city, date, length, service, description, price, comforts, info, callback){
        updateQuery('tours',
        {
            id: id,
        },
        {
            name: name,
            city: city,
            service: service,
            date: date,
            length: length,
            description: description,
            price: price,
            info: info,
            comforts: comforts,
        }, callback)
    },

    appendTourMedia(id, media){
        updateQuery('tours',
        {
            id: id,
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
            for(let i = 0; i< media.length;i++){
                let file = media[i]
                if(!files.includes(file)&&file!=''){
                    leave+=file
                    if(i<media.length-1)leave+=';'
                }
            }
            updateQuery('tours',
                {
                    id: id,
                },
                {
                    media: leave
                })
        }, 'media')
    },

    addTour(name, city, country, date, length, service, description, price, info, callback){
        insertQuery('tours',
        {
            name: name,
            city: city,
            service: service,
            date: date,
            length: length,
            description: description,
            price: price,
            info: info,
            country: country
        }, callback)
    },

    deleteTour(id, callback){
        deleteQuery('tours', {
            id: id
        }, callback)
    },

    addComment(author, tour, mark, message, callback){
        insertQuery('feedback',
        {
            author_id: author,
            tour_id: tour,
            mark: mark,
            message: message,
        }, callback)
    },

    getComments(tour, callback){
        sendQuery(`SELECT feedback.id, clients.login, clients.name, clients.lastname, feedback.mark, feedback.message FROM tours JOIN feedback ON tours.id=feedback.tour_id JOIN clients ON clients.id=feedback.author_id WHERE tours.id = ${tour}`, callback)
    }, 

    getOrders(callback){
        selectionQuery('orders', '*', '', callback)
    },

    getCountries(callback){
        sendQuery(`SELECT country FROM tours GROUP BY country`, callback)
    }
}