import Sequelize from 'sequelize'
import sequelize from '../database'
import Project from './Project'

/*!
 *
 page 表的建立
 *
 OptionID PageID ProjectID Name Status
 * 
 zzc
 */

var Page = sequelize.define('page', {
    'PageID': {
        type: Sequelize.BIGINT(11),
        primaryKey : true,
        autoIncrement: true, 
        unique : true
    },
    'ProjectID': {
        type: Sequelize.BIGINT(11),
        field: 'ProjectID',
        references: {
          model: 'Project',
          key: 'ProjectID'
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
    tableName: 'page',
    charset: 'utf8',
    collate: 'utf8_general_ci'
})

//sequelize.sync({ alter: true })



//add Page

//Project.hasOne(Page)
//Page.belongsTo(Project)

// sequelize.sync()
//     .then(() => Page.create({
//         PageID: 'zzc',
//         ProjectID : 21312,
//         Name: '123214343',
//         Status: 3
//     })) 

module.exports = Page