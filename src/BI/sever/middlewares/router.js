
import Router from 'koa-router'
import fs from 'fs'
import User from '../model/User'
import Project from '../model/Project'
import Page from '../model/Page'
import Option from '../model/Option'
import { CODE } from '../util/const'
import crypto from 'crypto'

export const router = app => {
    const router = new Router()

    router.get('/', async ctx => {
        await ctx.render('index')
    })

    router.post('/login', async ctx => {
        let _username = ctx.request.body.username
        let _password = ctx.request.body.password
        let verifysign = crypto.createHash('md5').update(_password, 'utf8').digest("hex")

        let user = await User.findOne({
            'where' : {
                'UserName' : _username
            }
        })

        if(user !== null){
            console.log('找到了')
            if(verifysign === user.Password){
                console.log('登录成功')
                ctx.body = {'code': CODE.SUCCESS}
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
    })

    app.use(router.routes())
    app.use(router.allowedMethods())
}