import Sequelize from 'sequelize'
import sequelize from '../database'
import Page from './Page'

/*!
 *
 option 表的建立
 *
 OptionID PageID Type Key Value Status
 * 
 zzc
 */

var Option = sequelize.define('option', {
    'OptionID': {
        type: Sequelize.BIGINT(11),
        autoIncrement: true, 
        primaryKey : true, 
        unique : true
    },
    'PageID': {
        type: Sequelize.BIGINT(11),
        field: 'PageID',
        references: {
          model: 'Page',
          key: 'PageID'
        },
    },
    'ItemID': {
        type: Sequelize.BIGINT(11)
    },
    'Type': {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    'Key': {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    'Value': {
        type: Sequelize.JSON,
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
    tableName: 'option',
    charset: 'utf8',
    collate: 'utf8_general_ci'
})


// add option

//sequelize.sync({ alter: true })

// sequelize.sync()
//     .then(() => Option.create({
//         OptionID: 1,
//         PageID : 1,
//         ItemID : 1,
//         Type: 'page',
//         Key: '不知道',
//         Value: {"name": "zhangzhichao"},
//         Status: 1
//     })) 

module.exports = Option