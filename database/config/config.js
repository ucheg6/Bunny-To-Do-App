require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
    PORT: 5000,
    dialect: 'postgres',   
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
    port: 5000, 
    dialect: 'postgres',   
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    port: process.env.PORT,
    },    
};
