if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod')
}

if(process.env.NODE_ENV === './dev'){
    module.exports = require('./dev')
}