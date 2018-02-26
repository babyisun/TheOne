import Sequelize from 'sequelize'
import sequelize from '../database'
import crypto from 'crypto'

const md5 = crypto.createHash('md5')

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

sequelize.sync()
    .then(() => User.create({
        OpenID : '213ss123',
        Mobile: '22343324',
        Password: '12213123ss',
        Role: 1,
        Status: 5
    })) 

module.exports = User