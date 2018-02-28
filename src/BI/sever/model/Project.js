import Sequelize from 'sequelize'
import sequelize from '../database'
import User from './User'
import { STATUS } from '../util/const'

/*!
 *
 project 表的建立
 *
 ProjectID UserId Name Status
 * 
 zzc
 */

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

// add Project

// sequelize.sync()
//     .then(() => Project.create({
//         ProjectID: 1,
//         Name: 'zzc',
//         Status: STATUS.SAVE,
//         UserId : 1
//     })) 

module.exports = Project