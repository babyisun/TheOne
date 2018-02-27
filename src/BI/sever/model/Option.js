import Sequelize from 'sequelize'
import sequelize from '../database'
import Page from './Page'

var Option = sequelize.define('option', {
    'OptionID': {
        type: Sequelize.BIGINT(11),
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

//sequelize.sync({ alter: true })

// sequelize.sync()
//     .then(() => Option.create({
//         // OptionID: 'zzc',
//         // OpenID : 'sadsa',
//         // Mobile: '123214343',
//         // Password: '123',
//         // Role: 1,
//         // Status: 3
//     })) 

module.exports = Option