
import Option from '../model/Option'
import { CODE } from '../util/const'
import { STATUS,TYPE_ITEM } from '../util/const'

exports.add = async ctx => {
    try {
        let pageId = ctx.request.body.pageId

        let option = new Option({
            PageID : pageId,
            ItemID : 4,
            Type : TYPE_ITEM.PAGE,
            Key : '知道',
            Value : {'name' : 'zhangzhichao'},
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