import sequelize from '../database'
import User from '../model/User'
import Project from '../model/Project'
import Page from '../model/Page'
import Option from '../model/Option'
import { STATUS } from './const'

sequelize.sync()
.then(() => User.create({
    UserID : 1,
    OpenID : '213ss123',
    Mobile: '22343324',
    Password: '1',
    Role: 1,
    Status: STATUS.SAVE
}))


// 插入user数据
async function insertuserdata(open_id='12345',mobile='131111133333',password='1',role=1,status=3){
    let auser = await User.create({
        OpenID : open_id,
        Mobile: mobile,
        Password: password,
        Role: role,
        Status: status
    })
    console.log('success')
}

//insertuserdata()