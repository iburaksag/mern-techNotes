const allowedOrigins = require('./allowedOrigins')
//If the request comes from allowedOrigins, the access is given by using cors
//Cors package needs at least origin and credentials options should be given.
const corsOptions = {
    origin: (origin, callback) => {
        if(allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true) 
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
}

module.exports = corsOptions