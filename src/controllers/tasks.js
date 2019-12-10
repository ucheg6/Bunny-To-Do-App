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
			});
			return response.status(201).json({
				success: true,
				message: 'Task created successfully',
				newTask,
			});
		} catch (error) {
      return response.status(400).json({
        success: false,
        message: error.message
      });
    }
	}
}

export default Task;