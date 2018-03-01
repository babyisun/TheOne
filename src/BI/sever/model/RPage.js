import Sequelize from 'sequelize'
import sequelize from '../database'
import RProject from './RProject'

/*!
 *
 rpage 表的建立
 *
 PageID ProjectID Name Version
 * 
 zzc
 */

var Page = sequelize.define('rpage', {
    'PageID': {
        type: Sequelize.BIGINT(11),
    },
    'ProjectID': {
        type: Sequelize.BIGINT(11),
        field: 'ProjectID',
        // references: {
        //   model: 'RProject',
        //   key: 'ProjectID'
        // },
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
    tableName: 'rpage',
    charset: 'utf8',
    collate: 'utf8_general_ci'
})


//sequelize.sync({ alter: true })



//add Page

//RProject.hasMany(Page,{foreignKey: 'ProjectID', through: null })
//Page.belongsTo(Project)



module.exports = Page