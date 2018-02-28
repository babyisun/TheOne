
import User from '../model/User'
import Project from '../model/Project'
import Page from '../model/Page'
import Option from '../model/Option'
import { STATUS } from './const'

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

// 插入project数据
async function insertprojectdata(){
    let aproject = await Project.create({
        ProjectID: 1,
        Name : 'zzc',
        Status: 1,
        UserId: 1,
    })
    console.log('success')
}


// 插入page数据
async function insertpagedata(){
    let apage = await Page.create({
        PageID: 1,
        ProjectID: 1,
        Name: 'zzc',
        Status: 0
    })
}

// 插入option数据
async function insertoptiondata(){
    let aoption = await Option.create({
        OptionID: 1,
        PageID : 1,
        Type : '123',
        Key : '456',
        Value : {"name": "zhang"},
        Status : STATUS.SAVE
    })
}

insertuserdata()