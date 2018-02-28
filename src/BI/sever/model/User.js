import Sequelize from 'sequelize'
import sequelize from '../database'
import crypto from 'crypto'
import { STATUS } from '../util/const'

const md5 = crypto.createHash('md5')

/*!
 *
 User 表的建立
 *
 UserID OpenID Mobile Password Role Status
 * 
 zzc
 */

var User = sequelize.define('user', {
    'UserID': {
        type: Sequelize.BIGINT(11),
        autoIncrement: true, 
        primaryKey : true, 
        unique : true
    },
    'OpenID': {
        type: Sequelize.STRING(50),
        primaryKey : true, 
    },
    'Mobile': {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    'Password': {
        type: Sequelize.STRING(50),
        allowNull: false,
        set : function(val){
            this.setDataValue('Password',md5.update(val).digest('hex'))
        }
    },
    'Role': {
        type: Sequelize.INTEGER(50),
        allowNull: false
    },
    'Status': {
        'type': Sequelize.INTEGER(50)
    }
},
{
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'user',
    charset: 'utf8',
    collate: 'utf8_general_ci'
})

//sequelize.sync({ alter: true })

//add User

// sequelize.sync()
//     .then(() => User.create({
//         UserID : 1,
//         OpenID : '213ss123',
//         Mobile: '22343324',
//         Password: '1',
//         Role: 1,
//         Status: STATUS.SAVE
//     })) 

// async function insertdata(){
//     let auser = await User.create({
//         UserID : 1,
//         OpenID : 'xxxxxxxxxxx',
//         Mobile: '22343324',
//         Password: '1',
//         Role: 1,
//         Status: 5
//     })
//     console.log(auser)
// }
// insertdata()

module.exports = User