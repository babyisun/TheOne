import sequelize from '../database'
import User from '../model/User'
import Project from '../model/Project'
import Page from '../model/Page'
import Option from '../model/Option'
import RProject from '../model/RProject'
import RPage from '../model/RPage'
import ROption from '../model/ROption'
import { STATUS } from './const'

// 插入数据
function insertdata(){
    sequelize.sync()
        .then(() => User.create({
            OpenID : '12345',
            Mobile: '131111133333',
            Password: '1',
            Role: 1,
            Status: STATUS.SAVE
        }))
        .then(() => Project.create({
            Name : '运营项目',
            Status: STATUS.SAVE,
            UserID: 1,
        }))
        .then(() => Page.create({
            ProjectID: 1,
            Name: '收入',
            Status: STATUS.SAVE
        })).then(() => Page.create({
            ProjectID: 1,
            Name: '支出',
            Status: STATUS.SAVE
        }))
        .then(() => Option.create({
            PageID : 1,
            ItemID : 1,
            Type : '123',
            Key : 'PAGE',
            Value : {"url": "abc.com/api"},
            Status : STATUS.SAVE
        }))
    console.log('success')
}

insertdata()
