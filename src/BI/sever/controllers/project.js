
import Project from '../model/Project'
import { CODE } from '../util/const'
import { STATUS } from '../util/const'

exports.add = async ctx => {
    let name = ctx.request.body.name
    let uid  = ctx.request.body.uid
    console.log('11111111111111',ctx.request.body)
    let project = new Project({
        UserId : uid,
        Name : name
    })

    project.save()

    ctx.body = {'code': CODE.SUCCESS,msg:"成功添加项目"}
}

exports.rename = async ctx => {
    let newname = ctx.request.body.name 
    let projectID = ctx.request.body.projectID

    Project.update({
        Name : newname
    },{
        'where' : {
            'ProjectID' : projectID
        }
    })
    ctx.body = {'code': CODE.SUCCESS,msg:"名字更新成功"}
}

exports.delete = async ctx => {
    let projectID = ctx.request.body.projectID
    // Project.destroy({
    //     'where' : {
    //         'ProjectID' : projectID
    //     }
    // })

    Project.update({
        Status : STATUS.DELETE
    },{
        'where' : {
            'ProjectID' : projectID
        }
    })

    ctx.body = {'code': CODE.SUCCESS,msg:"成功删除"}
}