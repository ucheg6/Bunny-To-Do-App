import models from '../../database/models';
import generateToken from '../utilities/jwt-generator';
/**
 * Task Controller Class
 *
 */
class User {
	/**
	 * Create a new user
	 * @param {object} request Request Object
	 * @param {object} response Response Object
	 * @returns {object} User Object
	 */
	static async createUser(request, response) {
		const { Name } = request.body;
		try {
			const newUser = await models.User.findOrCreate({
				where: { Name },
			});
			const token = generateToken(newUser.id, newUser.Name);
			return response.status(201).json({
				success: true,
				message: `Hello Welcome to Bunny to-do app`,
				newUser,
				token,
			});
		} catch (error) {
			return response.status(400).json({
				success: false,
				message: error.message,
			});
		}
	}
	static async listUsers(request, response) {
		try {
			const users = await models.User.findAll();
			return response.status(200).json({
				success: true,
				message: 'Users successfully retrieved',
				users,
			});
		} catch (error) {
			return response.status(400).json({
				success: false,
				message: error.message,
			});
		}
	}

	static async deleteUser(request, response) {
		const { id } = request.params;
		try {
			const foundUser = await models.User.findOne({
				where: { id },
			  });
			if (!foundUser) {
				return response.status(404).json({
					message: 'User does not exist',
					success: false,
				});
			}
			await foundUser.destroy();
			return response.status(202).json({
				success: true,
				message: 'User successfully deleted',
			});
		} catch (error) {
			return response.status(400).json({
				success: false,
				message: error.message,
			});
		}
	}
	static async updateUser(request, response) {
		const { id } = request.params;
		const { Name } = request.body;
		try {
			const foundUser = await models.User.findOne({
				where: { id },
			  });
			if (!foundUser) {
				return response.status(404).json({
					message: 'User does not exist',
					success: false,
				});
			}
			const updatedUser = await foundUser.update({
				Name
			  },
			  {
				where: { id }
			  });;
			return response.status(200).json({
				success: true,
				message: 'User successfully updated',
				updatedUser
			});
		} catch (error) {
			return response.status(400).json({
				success: false,
				message: error.message,
			});
		}
	}
}

export default User;
