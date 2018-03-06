import Sequelize from 'sequelize'
import sequelize from '../database'
import User from './User'
import { STATUS } from '../util/const'

/*!
 *
 project 表的建立
 *
 ProjectID UserId Name Version
 * 
 zzc
 */

var Project = sequelize.define('rproject', {
    'ProjectID': {
        type: Sequelize.BIGINT(11)
    },
    'UserID': { 
        type: Sequelize.BIGINT(11), 
        field: 'UserID',
        references: {
          model: 'User',
          key: 'UserID'
        },
    },
    'Name': {
        type: Sequelize.STRING(50),
    },
    'Version': {
        type: Sequelize.STRING(50),
    }
},
{
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'rproject',
    charset: 'utf8',
    collate: 'utf8_general_ci'
}
)

module.exports = Project