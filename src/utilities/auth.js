import jwt from 'jsonwebtoken';
import config from '../../database/config/config';

const env = process.env.NODE_ENV || 'development';
/**
 * Middleware checking if there's a token before a task is created
 * @param {object} request Request Object
 * @param {Object} response Response Object
 * @param {function} next Next middleware
 * @returns {function | object} Next function on the middleware chain or an error object
 */
const checkAuth = (request, response, next) => {
    const token = request.headers['x-access-token'] || request.params.token;
    
    if (!token) {
        return response.status(401).json({
            success: false,
            message: 'Please sign up with your name'
          });
    }
  
    if (token) {
      jwt.verify(token, config[env].secret, (error, decoded) => {
        if (error) {
            return response.status(401).json({
                success: false,
                message: 'Please sign in with your name'
              });
        }
        request.user_id = decoded.id;
        return next();
      });
    } else {
      return next();
    }
  };
  
  export default checkAuth;