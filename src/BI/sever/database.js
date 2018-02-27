import Sequelize from 'sequelize'
import config from './config'

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    //port: config.port,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize

// sequelize.sync()     .then(() => User.create({         UserID: '123456',
//    Mobile: '134533452434',         Password: '1232143',         Role:
// 'admin',         AddTime: '2018.2.11',         Status: 'publish'     }))