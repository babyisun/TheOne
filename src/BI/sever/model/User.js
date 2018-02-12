import Sequelize from 'sequelize'
import sequelize from '../database'
import bcrypt from 'bcryptjs'

var User = sequelize.define('user', {
    'UserName': {
        'type': Sequelize.STRING,
        'initialAutoIncrement ': true
    },
    'Mobile': {
        'type': Sequelize.STRING,
        'allowNull': false
    },
    'Password': {
        'type': Sequelize.STRING,
        'allowNull': false
    },
    'Role': {
        'type': Sequelize.INTEGER,
        'allowNull': false
    },
    'Status': {
        'type': Sequelize.INTEGER
    }
}, {
    instanceMethods: {
        generateHash(Password) {
            return bcrypt.hash(Password, bcrypt.genSaltSync(8));
        },
        validPassword(Password) {
            return bcrypt.compare(Password, this.password);
        }
    }
})
/*
sequelize.sync()
    .then(() => User.create({
        UserName: '1',
        Mobile: '123214343',
        Password: '2',
        Role: 1,
        Status: 3
    })) */

module.exports = User