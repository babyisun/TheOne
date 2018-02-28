
import Project from '../model/Project'
import { CODE } from '../util/const'
import { STATUS } from '../util/const'

/*!
 *
 project add rename delete
 *
 zzc
 */

exports.add = async ctx => {

    try{
        let name = ctx.request.body.name
        let uid  = ctx.request.body.uid

        let project = new Project({
            UserId : uid,
            Name : name,
            Status : STATUS.SAVE
        })
    
        project.save()
    
        ctx.body = {'code': CODE.SUCCESS,msg:"成功添加项目"}
    }catch (err) {
        console.log('添加项目出错', err)
    }
}

exports.rename = async ctx => {

    try {
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
    }catch (err) {
        console.log('更新项目名字出错', err)
    }
}

exports.delete = async ctx => {

    try {
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
    }catch (err) {
        console.log('删除项目出错',err)
    }
}