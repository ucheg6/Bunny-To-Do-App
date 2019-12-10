require('dotenv').config();

module.exports = {
	development: {
		dialect: 'postgres',
		PORT: 5000,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE_DEV,
		secret: process.env.JWT_SECRET
	},
	test: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE_DEV,
		PORT: 5000,
		dialect: 'postgres',
		secret: process.env.JWT_SECRET
	},
	production: {
		use_env_variable: 'DATABASE_URL',
		PORT: process.env.PORT,
		secret: process.env.JWT_SECRET
	},
};
