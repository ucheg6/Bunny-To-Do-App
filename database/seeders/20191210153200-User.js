'use strict';

module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.bulkInsert(
			'Users',
			[
				{
					Name: 'Jane Doe',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					Name: 'Jon Doe',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		),

	down: (queryInterface, Sequelize) =>
		queryInterface.bulkDelete('Users', null, {}),
};
