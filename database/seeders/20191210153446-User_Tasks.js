'use strict';

module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.bulkInsert(
			'User_Tasks',
			[
				{
					description: 'Raise that PR this evening',
					state: 'to_do',
					user_id: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					description: 'Do some dummy stuff',
					state: 'done',
					user_id: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					description: 'Do some dummy stuff',
					user_id: 1,
					state: 'to_do',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],

			{},
		),

	down: (queryInterface, Sequelize) =>
		queryInterface.bulkDelete('User_Tasks', null, {}),
};
