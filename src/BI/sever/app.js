
import Koa from 'koa'
import { resolve } from 'path'
import statics from 'koa-static'
import views from 'koa-views'
//import cors from 'koa2-cors'
import bodyParser from 'koa-bodyparser'
import R from 'ramda'

const port = process.env.PORT || 2333
const host = process.env.HOST || '127.0.0.1'

const r = url => resolve(__dirname,url)
const app = new Koa()
const MIDDLEWARES = ['router']

// 使用中间件
const userMiddlewares = app => {
    return R.map(R.compose(
        R.map(i => i(app)),
        require,
        i => `${r('./middlewares')}/${i}`
    ))
}

async function start (){

    app.use(bodyParser())
    await userMiddlewares(app)(MIDDLEWARES)

    app.listen(port, host)
    console.log('服务已经运行在' + '<' +port+ '>' + '端口')
}

start()