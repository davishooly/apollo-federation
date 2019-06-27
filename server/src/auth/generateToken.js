import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY;

export default payload => jwt.sign(payload, secretKey, { algorithm: 'HS256', expiresIn: '120h' });
