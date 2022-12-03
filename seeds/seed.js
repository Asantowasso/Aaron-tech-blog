const sequelize = require('../config/connection');
const { User, Project, Comment } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    await Project.bulkCreate(projectData);

    await Comment.bulkCreate(commentData);
  } catch (err) {
    console.log(err);
  }

 process.exit(0);
};

seedDatabase();





  

 