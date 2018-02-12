
import Sequelize from 'sequelize'

let sequelize = new Sequelize('database', 'username', 'password', {
    host : 'losalhost',
    dialect : 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle : 10000
    }
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// const User = sequelize.define(
//     'user',
//     {
//         'UserID' : {
//             'type' : Sequelize.STRING,
//             'allowNull' : false,
//             'unique' : true
//         },
//         'Mobile' : {
//             'type' : Sequelize.STRING,
//             'allowNull' : false
//         },
//         'Password' : {
//             'type': Sequelize.STRING,
//             'allowNull': false
//         },
//         'Role' : {
//             'type' : Sequelize.STRING,
//             'allowNull': false
//         },
//         'AddTime' : {
//             'type' : Sequelize.STRING
//         },
//         'Status' : {
//             'type' : Sequelize.STRING
//         }
//     }
// )

// sequelize.sync()
//     .then(() => User.create({
//         UserID: '123456',
//         Mobile: '134533452434',
//         Password: '1232143',
//         Role: 'admin',
//         AddTime: '2018.2.11',
//         Status: 'publish'
//     }))