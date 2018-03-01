
import RProject from '../model/RProject'
import RPage from '../model/RPage'
import ROption from '../model/ROption'
import { CODE } from '../util/const'

exports.rproject = async ctx => {
    //let projectId = ctx.request.body.projectId
    
    try{
        let rproject = await RProject.findOne({
            // where : {
            //     'ProjectID' : projectId
            // },
            order: [
                ["Version", "DESC"]
            ],
            include: [{
                association: RProject.hasMany(RPage,{foreignKey: 'ProjectID', through: null }),
                include: [{
                    association: RPage.hasMany(ROption,{foreignKey: 'PageID', through: null })
                }]
            }]
        })
        ctx.body = rproject
        console.log('success')
    }catch (err) {
        console.log('发布项目出错', err)
    }
}