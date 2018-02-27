import Sequelize from 'sequelize'
import sequelize from '../database'
import User from './User'

var Project = sequelize.define('project', {
    'ProjectID': {
        type: Sequelize.BIGINT(11),
        autoIncrement: true, 
        primaryKey : true, 
        unique : true
    },
    'UserId': { 
        type: Sequelize.BIGINT(11), 
        field: 'UserID',
        unique: true, 
        references: {
          model: 'User',
          key: 'UserID'
        },
    },
    'Name': {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    'Status': {
        type: Sequelize.INTEGER(50)
    }
},
{
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'project',
    charset: 'utf8',
    collate: 'utf8_general_ci'
}
)

// sequelize.sync()
//     .then(() => Project.create({
//         ProjectID: 3,
//         Nmae: '123214343',
//         Status: 3
//     })) 

module.exports = Project