const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },

    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "student.svg"
    },

    gpa: {
        type: Sequelize.DECIMAL,
        validate: {
            min: 0.0,
            max: 4.0
        }
    },

});

module.exports = Student;