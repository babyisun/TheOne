
import User from '../model/User'
import { CODE } from '../util/const'
import { STATUS } from '../util/const'
import crypto from 'crypto'

exports.login = async ctx => {
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
}