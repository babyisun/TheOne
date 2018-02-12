
import Router from 'koa-router'
import fs from 'fs'
import User from '../model/User'

export const router = app => {
    const router = new Router()

    router.get('/', async ctx => {
        await ctx.render('index')
    })

    router.post('/login', async ctx => {
        let _username = ctx.request.body.username
        console.log(_username)

        let user = await User.findOne({
            'where' : {
                'UserName' : _username
            }
        })

        if(user !== null){
            console.log('找到了')
        }else{
            console.log('没有这个用户')
        }

        console.log(user.dataValues)

        //console.log('1111',user[0].dataValues)
        //ctx.body = { "code": 'CODE.SUCCESS' }
    })

    app.use(router.routes())
    app.use(router.allowedMethods())
}