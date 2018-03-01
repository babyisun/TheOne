import Sequelize from 'sequelize'
import sequelize from '../database'
import RPage from './RPage'

/*!
 *
 roption 表的建立
 *
 OptionID PageID ItemID Type Key Value Version
 * 
 zzc
 */

var Option = sequelize.define('roption', {
    'OptionID': {
        type: Sequelize.BIGINT(11)
    },
    'PageID': {
        type: Sequelize.BIGINT(11),
        field: 'PageID',
        // references: {
        //   model: 'RPage',
        //   key: 'PageID'
        // },
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
    'Version': {
        type: Sequelize.STRING(50),
    }
},
{
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'roption',
    charset: 'utf8',
    collate: 'utf8_general_ci'
})

//Option.hasMany(RPage,{foreignKey: 'PageID', through: null })


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