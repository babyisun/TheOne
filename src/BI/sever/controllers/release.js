
import RProject from '../model/RProject'
import RPage from '../model/RPage'
import ROption from '../model/ROption'
import Project from '../model/Project'
import Page from '../model/Page'
import Option from '../model/Option'
import { CODE } from '../util/const'

/**
 * 
 *  releae 查询并储存到对应的表
 * 
 *   zzc
 */

exports.release = async ctx => {

    try{

        let userId = ctx.request.body.uid
        let projectId = ctx.request.body.projectId

        let VERSON = +new Date

        let project = await Project.findOne({
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
            UserID : project.UserID,
            ProjectID : project.ProjectID,
            Name : project.Name,
            Version : VERSON
        })
        rproject.save()
        
        for(let i = 0,len = project.pages.length;i < len; i++){
            let rpage = new RPage({
                PageID : project.pages[i].PageID,
                ProjectID : project.pages[i].ProjectID,
                Name : project.pages[i].Name,
                Version : VERSON
            })
            rpage.save()
        }

        for(let i = 0,ilen = project.pages.length;i < ilen; i++){
            for(let j = 0,jlen = project.pages[i].options.length;j < jlen;j++){
                let roption = new ROption({
                    OptionID : project.pages[i].options[j].OptionID,
                    PageID   : project.pages[i].options[j].PageID,
                    ItemID   : project.pages[i].options[j].ItemID,
                    Value    : project.pages[i].options[j].Value,
                    Type     : project.pages[i].options[j].Type,
                    Key      : project.pages[i].options[j].Key,
                    Version : VERSON
                })
                roption.save()
            }
        }
    
        ctx.body = {'code': CODE.SUCCESS,msg:"发布成功",data:project}
        //ctx.body = project
    }catch(err) {
        console.log('发布出错', err)
    }
}