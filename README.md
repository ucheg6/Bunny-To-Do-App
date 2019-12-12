# Bunny-To-Do-App

Simple To-Do App

# Features

1.  User can view list of users.
2.  User can create a user.
3.  user can update their names.
4.  User can delete users.
5.  User can view the list of tasks for a particular user.
6.  User can create tasks.
7.  User can update tasks.
8.  User can delete tasks.

# API

Heroku => https://bunny-to-do.herokuapp.com/

| METHOD | DESCRIPTION                  | ENDPOINTS                                          |
| ------ | ---------------------------- | -------------------------------------------------- |
| Get    | Get all users                | https://bunny-to-do.herokuapp.com/api/v1/users     |
| Put    | Update Name                  | https://bunny-to-do.herokuapp.com/api/v1/user:id   |
| Delete | Delete a User                | https://bunny-to-do.herokuapp.com/api/v1/user:id   |
| Post   | Create a User                | https://bunny-to-do.herokuapp.com/api/v1/user      |
| View   | View list of task for a user | https://bunny-to-do.herokuapp.com/api/v1/tasks/:id |
| Post   | Create a task                | https://bunny-to-do.herokuapp.com/api/v1/task      |
| Put    | Update a task                | https://bunny-to-do.herokuapp.com/api/v1/tasks/:id |
| Delete | Delete a task                | https://bunny-to-do.herokuapp.com/api/v1/tasks/:id |

# Built With

- NodeJs/Express
- Sequelize
- PostgreSQL

# How to install project

- Run the command on your command line git clone https://github.com/ucheg6/Bunny-To-Do-App.git
- Run npm install to install npm packages for the project
- Set up your dotenv file and store needed variables(look at the sample.env file to know what variables you need)
- Run npm start-dev to start your server
- On Postman navigate to `localhost:5000/api/v1/` and test routes on the router file.

# How to run tests

     Tests are not setup at the moment due to time constraint but i'll add it as soon as possible.
