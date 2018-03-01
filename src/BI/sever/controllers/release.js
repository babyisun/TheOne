
import RProject from '../model/RProject'
import RPage from '../model/RPage'
import ROption from '../model/ROption'
import Project from '../model/Project'
import Page from '../model/Page'
import Option from '../model/Option'
import { CODE } from '../util/const'

/**
 * 
 *   project releae
 * 
 *   zzc
 */


exports.rproject = async ctx => {

    try{

        let userId = ctx.request.body.uid
        let projectId = ctx.request.body.projectId

        let VERSON = +new Date

        let project = await Project.findAll({
            'where' : {
                'UserID' : userId,
                'ProjectID' : projectId,
                'Status' : 1
            },
            include: [{
                model: Page,
                include : Option
            }]
        })


        let rproject = new RProject({
            UserID : project[0].UserID,
            ProjectID : project[0].ProjectID,
            Name : project[0].Name,
            Version : VERSON
        })

        rproject.save()
        for(let i = 0,len = project[0].pages.length;i < len; i++){
            let rpage = new RPage({
                PageID : project[0].pages[i].PageID,
                ProjectID : project[0].pages[i].ProjectID,
                Name : project[0].pages[i].Name,
                Version : VERSON
            })
            rpage.save()
        }

        for(let i = 0,ilen = project[0].pages.length;i < ilen; i++){
            for(let j = 0,jlen = project[0].pages[i].options.length;j < jlen;j++){
                let roption = new ROption({
                    OptionID : project[0].pages[i].options[j].OptionID,
                    PageID   : project[0].pages[i].options[j].PageID,
                    ItemID   : project[0].pages[i].options[j].ItemID,
                    Value    : project[0].pages[i].options[j].Value,
                    Type     : project[0].pages[i].options[j].Type,
                    Key      : project[0].pages[i].options[j].Key,
                    Version : VERSON
                })
                roption.save()
            }
        }
    
        ctx.body = {'code': CODE.SUCCESS,msg:"发布成功"}
        //ctx.body = project
    }catch(err) {
        console.log('发布项目出错', err)
    }
}