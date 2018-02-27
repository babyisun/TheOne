
import Page from '../model/Page'
import { CODE } from '../util/const'
import { STATUS } from '../util/const'

exports.add = async ctx => {
    let projectID = ctx.request.body.projectID
    let name = ctx.request.body.name

    let project = new Project({
        ProjectID : projectID,
        Name : name
    })

    project.save()

    ctx.body = {'code': CODE.SUCCESS,msg:"成功添加页面"}
}

exports.rename = async ctx => {
    let newname = ctx.request.body.name 
    let pageID = ctx.request.body.pageID

    Page.update({
        Name : newname
    },{
        'where' : {
            'PageID' : pageID
        }
    })
    ctx.body = {'code': CODE.SUCCESS,msg:"成功更新页面名字"}
}

exports.delete = async ctx => {
    let pageID = ctx.request.body.pageID
    // Page.destroy({
    //     'where' : {
    //         'PageID' : pageID
    //     }
    // })

    Page.update({
        Status : STATUS.DELETE
    },{
        'where' : {
            'PageID' : pageID
        }
    })

    ctx.body = {'code': CODE.SUCCESS,msg:"成功删除页面"}
}