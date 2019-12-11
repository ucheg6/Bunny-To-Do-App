import models from '../../database/models';
/**
 * Task Controller Class
 *
 */
class Task {
	/**
	 * Create a new task
	 * @param {object} request Request Object
	 * @param {object} response Response Object
	 * @returns {object} Task Object
	 */
	static async createTasks(request, response) {
		try {
			const newTask = await models.User_Tasks.create({
				description: request.body.description,
				user_id: request.user_id,
			});
			return response.status(201).json({
				success: true,
				message: 'Task created successfully',
				newTask,
			});
		} catch (error) {
			return response.status(400).json({
				success: false,
				message: error.message,
			});
		}
	}
	static async listUserTasks(request, response) {
		try {
			const foundTasks = await models.User_Tasks.findAll({
				where: {
					user_id: request.params.id
				  }
				});
				if (!foundTasks) {
					return response.status(404).json({
						message: 'No tasks exists for this user',
						success: false,
					});
				}
			return response.status(200).json({
				success: true,
				message: 'Tasks successfully retrieved',
				foundTasks,
			});
		} catch (error) {
			return response.status(400).json({
				success: false,
				message: error.message,
			});
		}
	}
	static async updateTask(request, response) {
		const { id } = request.params;
		const { description, state } = request.body;
		try {
			const foundTask = await models.User_Tasks.findOne({
				where: { id },
			  });
			if (!foundTask) {
				return response.status(404).json({
					message: 'Task does not exist',
					success: false,
				});
			}
			const updatedTask = await foundTask.update({
				description, state
			  },
			  {
				where: { id }
			  });;
			return response.status(200).json({
				success: true,
				message: 'Task successfully updated',
				updatedTask
			});
		} catch (error) {
			return response.status(400).json({
				success: false,
				message: error.message,
			});
		}
	}
	static async deleteTask(request, response) {
		const { id } = request.params;
		try {
			const foundTask = await models.User_Tasks.findOne({
				where: { id },
			  });
			if (!foundTask) {
				return response.status(404).json({
					message: 'Task does not exist',
					success: false,
				});
			}
			await foundTask.destroy();
			return response.status(202).json({
				success: true,
				message: 'Task successfully deleted',
			});
		} catch (error) {
			return response.status(400).json({
				success: false,
				message: error.message,
			});
		}
	}
}

export default Task;
