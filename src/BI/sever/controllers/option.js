
import Option from '../model/Option'
import { CODE } from '../util/const'
import { STATUS,TYPE_ITEM } from '../util/const'

exports.get = async ctx => {
    try {
        let pageId = ctx.request.body.pageId

        let option = await Option.findAll({
            'where' : {
                'PageId' : pageId,
                'Status' : 1
            }
        })

        ctx.body = {'code': CODE.SUCCESS,msg:"成功找到配置"}
        ctx.body = option
    }catch(err){
        console.log('查找配置出错',err)
    }
}

exports.add = async ctx => {
    try {
        let pageId = ctx.request.body.pageId
        let value  = ctx.request.body.value
        let key    = ctx.request.body.value

        let option = new Option({
            PageID : pageId,
            ItemID : 4,
            Type : TYPE_ITEM.PAGE,
            Key : key,
            Value : value,
            Status : STATUS.SAVE
        })

        option.save()

        ctx.body = {'code': CODE.SUCCESS,msg:"成功添加配置"}
    }catch (err) {
        console.log('添加配置出错',err)
    }
}

exports.delete = async ctx => {
    try {
        let optionId = ctx.request.body.optionId
    
        Project.update({
            Status : STATUS.DELETE
        },{
            'where' : {
                'OptionId' : optionId
            }
        })
    
        ctx.body = {'code': CODE.SUCCESS,msg:"成功删除"}
    }catch (err) {
        console.log('删除配置出错',err)
    }
}