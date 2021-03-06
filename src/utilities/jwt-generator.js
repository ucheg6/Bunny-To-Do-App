import jwt from 'jsonwebtoken';
import config from '../../database/config/config';

const env = process.env.NODE_ENV || 'development';
/**
 * Generates token for user authentiation and authorization
 * @param {id} id User Id
 * @returns {string} User Token
 */
const createToken = (id, name) => {
  const token = jwt.sign(
    { id, name },
    config[env].secret,
    { expiresIn: 604800 },
  );
  return token;
};
export default createToken;