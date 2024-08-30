require('dotenv').config();
const jwt = require('jsonwebtoken');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

function createAccessToken(user) {
    //exp date
    const expToken = new Date();
    expToken.setHours(expToken.getHours() + 2);

    const payload = {
        token_type: 'access',
        user_id: user._id,
        iat: Date.now(),
        exp: expToken.getTime(),
    };

    return jwt.sign(payload, JWT_SECRET_KEY);    
}

function decode(token) {
    return jwt.decode(token, JWT_SECRET_KEY, true);
}

module.exports = {
    createAccessToken,
    decode,
}

