import Sequelize from 'sequelize'
import RProject from '../model/RProject'
import RPage from '../model/RPage'
import ROption from '../model/ROption'
import { CODE } from '../util/const'

/**
 * 
 *  rproject 查询最新的更新
 * 
 *   zzc
 */

exports.rproject = async ctx => {
    let projectId = ctx.request.body.projectId
    
    try{

        let rproject = await RProject.findOne({
            order: [
                ["id", "DESC"]
            ], 
            where : {
                'ProjectID' : projectId,
            }
        })

        let rpage = await RPage.findAll({
            where : {
                    'ProjectID' : projectId,
                    'Version' : rproject.Version
                }
        })

        let roption = await ROption.findAll({
            where : {
                'Version' : rproject.Version
            }
        })

        rproject.dataValues.rpages = rpage
        
        for(let i in rpage){
            rpage[i].dataValues.roptions=[]
            for(let j in roption){
                if(rpage[i].dataValues.PageID === roption[j].PageID){
                    rpage[i].dataValues.roptions.push(roption[j])
                }
            }
        }

        ctx.body = rproject
    }catch (err) {
        console.log('发布项目出错', err)
    }
}