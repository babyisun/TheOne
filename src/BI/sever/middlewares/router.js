
import Router from 'koa-router'
import User from '../controllers/user'
import Project from '../controllers/project'
import Page  from '../controllers/page'
import Option from '../controllers/option'

/*!
 *
 louter api
 *
 zzc
 */

export const router = app => {
    const router = new Router()
    /**
     *   Login
     */
    router.post('/login', User.login)

    /**
     *   Project get add rename delete
     */
    router.post('/getproject', Project.get)
    router.post('/addproject', Project.add)
    router.post('/renameproject', Project.rename)
    router.post('/deleteproject', Project.delete)
    

    /**
     *   Page get add rename delete
     */
    router.post('/getpage', Page.get)
    router.post('/addpage', Page.add)
    router.post('/renamepage', Page.rename)
    router.post('/deletepage', Page.delete)

    /**
     *   Option get add delete
     */
    router.post('/getoption', Option.get)
    router.post('/addoption', Option.add)
    router.post('/deleteoption', Option.delete)

    app.use(router.routes())
    app.use(router.allowedMethods())
}