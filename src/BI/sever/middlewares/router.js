
import Router from 'koa-router'
import fs from 'fs'
import User from '../model/User'
import Project from '../model/Project'
import Page from '../model/Page'
import Option from '../model/Option'
import { CODE } from '../util/const'
import { STATUS } from '../util/const'
import crypto from 'crypto'

export const router = app => {
    const router = new Router()

    router.get('/', async ctx => {
        await ctx.render('index')
    })

    /**
     *   Login
     */

    router.post('/login', async ctx => {
        // ctx.set('Cache-Control','no-cache')
        // ctx.set('Access-Control-Allow-Origin','*')
        let _username = ctx.request.body.username
        let _password = ctx.request.body.password
        let verifysign = crypto.createHash('md5').update(_password, 'utf8').digest("hex")

        let user = await User.findOne({
            'where' : {
                'UserID' : _username
            }
        })
        
        if(user !== null){
            console.log('找到了')
            if(verifysign === user.Password){
                console.log('登录成功')
                ctx.body = {'code': CODE.SUCCESS,data:_username}
                /* ctx.cookies.set(
                    'username',
                    _username.toString(),
                    {
                        domain: '.cig.com.cn',  
                        path: '/',
                        maxAge: 10 * 60 * 1000,
                        expires: new Date('2018-02-30'),
                        httpOnly: false,
                        overwrite: false
                    }
                ) */
                //console.log(ctx.cookies.get("username"));
            }else{
                console.log('登录失败')
                ctx.body = {'code': CODE.ERROR, msg:"用户名或密码错误"}
            }
        }else{
            console.log('没有这个用户')
            ctx.body = {'code': CODE.ERROR, msg:"没有此用户"}
        }

        //console.log(user.dataValues)

        //console.log('1111',user[0].dataValues)
        //ctx.body = { "code": 'CODE.SUCCESS' }

        console.log('success')
    })

    /**
     *   Project add rename delete
     */

    router.post('/addproject', async ctx => {
        let name = ctx.request.body.name
        let uid  = ctx.request.body.uid
        console.log('11111111111111',ctx.request.body)
        let project = new Project({
            UserId : uid,
            Name : name
        })

        project.save()

        ctx.body = {'code': CODE.SUCCESS,msg:"成功添加项目"}
    })

    router.post('/renameproject', async ctx => {
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
    })

    router.post('/deleteproject', async ctx => {
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
    })

    /**
     *   Page add rename delete
     */

    router.post('/addpage', async ctx => {
        let projectID = ctx.request.body.projectID
        let name = ctx.request.body.name

        let project = new Project({
            ProjectID : projectID,
            Name : name
        })

        project.save()

        ctx.body = {'code': CODE.SUCCESS,msg:"成功添加页面"}
    })

    router.post('/renamepage', async ctx => {
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
    })

    router.post('/deletepage', async ctx => {
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
    })

    app.use(router.routes())
    app.use(router.allowedMethods())
}