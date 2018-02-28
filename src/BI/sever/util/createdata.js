import sequelize from '../database'
import User from '../model/User'
import Project from '../model/Project'
import Page from '../model/Page'
import Option from '../model/Option'
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
            Name : 'zzc',
            Status: STATUS.SAVE,
            UserID: 1,
        }))
        .then(() => Page.create({
            PageID: 1,
            ProjectID: 1,
            Name: 'zzc',
            Status: STATUS.SAVE
        }))
        .then(() => Option.create({
            OptionID: 1,
            PageID : 1,
            Type : '123',
            Key : '456',
            Value : {"name": "zhang"},
            Status : STATUS.SAVE
        }))
    console.log('success')
}

insertdata()