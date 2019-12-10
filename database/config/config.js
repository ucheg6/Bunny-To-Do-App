require('dotenv').config();

module.exports = {
	development: {
		dialect: 'postgres',
		PORT: 5000,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE_DEV,
	},
	test: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE_DEV,
		PORT: 5000,
		dialect: 'postgres',
	},
	production: {
		use_env_variable: 'DATABASE_URL',
		PORT: process.env.PORT,
	},
};
