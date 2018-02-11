
import Router from 'koa-router'
import fs from 'fs'

export const router = app => {
    const router = new Router()

    router.get('/', async ctx => {
        await ctx.render('index')
    })

    router.get('/formpost', async ctx => {
        await ctx.render('formpost')
    })

    router.post('/postdate', async ctx => {
        let zzc = ctx.request.body
        let json = JSON.stringify(zzc)
        let date = ctx.query
        console.log(date)
        console.log(json)
        ctx.body = { "code": 201, "msg": date.name, "url": "" }
        
        // let zzc = ctx.request.body,
        //     json = JSON.stringify(zzc);
        // console.log(json);
        // ctx.body = json

        // let _json = { "code": 201, "msg": json.qwe, "url": "" };
        // ctx.response.type = 'json';
        // ctx.body = _json;
        // fs.writeFile('./zzc.json', JSON.stringify(zzc), function (err) {
        //     if (err) {
        //         console.log(err)
        //     } else {
        //         console.log('suuccess')
        //     }
        // })
        //ctx.response.redirect('/getdata')
    })

    router.get('/getdata', async ctx => {
        // let zzc = fs.readFileSync('./zzc.json','utf-8')
        // await ctx.render('getdata',{
        //     zzc : zzc
        // })
        let json = { "code": 201, "msg": "\u4e0d\u5b58\u5728\u7528\u6237\uff01", "url": "" };
        ctx.response.type = 'json';
        ctx.body = json;
    })

    app.use(router.routes())
    app.use(router.allowedMethods())
}