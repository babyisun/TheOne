import Sequelize from 'sequelize'
import Project from '../model/Project'
import Page from '../model/Page'
import { CODE,STATUS } from '../util/const'


/*!
 *
 page add rename delete
 *
 zzc
 */

 exports.get = async ctx => {

    try {
        let pageId = ctx.request.body.pageId

        let page = await Page.findAll({
            'where' : {
                'PageId' : pageId,
                'Status' : 1
            }
        })

        ctx.body = {'code': CODE.SUCCESS,msg:"成功找到页面",data:page}
    }catch (err) {
        console.log('查询页面出错',err)
    }
 }

exports.add = async ctx => {
    try{
        let projectID = ctx.request.body.projectID
        let name = ctx.request.body.name
    
        let page = new Page({
            ProjectID : projectID,
            Name : name,
            Status : STATUS.SAVE
        })
    
        page.save()
    
        ctx.body = {'code': CODE.SUCCESS,msg:"成功添加页面"}
    }catch (err) {
        console.log('添加页面出错', err)
    }
}

exports.rename = async ctx => {

    try {
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
    }catch (err){
        console.log('更新页面名字出错',err)
    }
}

exports.delete = async ctx => {

    try{
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
    }catch (err) {
        console.loog('删除页面出错',err)
    }
}