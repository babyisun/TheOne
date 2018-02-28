
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
     *   Project add rename delete
     */
    router.post('/addproject', Project.add)
    router.post('/renameproject', Project.rename)
    router.post('/deleteproject', Project.delete)
    

    /**
     *   Page add rename delete
     */
    router.post('/addpage', Page.add)
    router.post('/renamepage', Page.rename)
    router.post('/deletepage', Page.delete)

    /**
     *   Option add rename delete
     */

    router.post('/addoption', Option.add)
    // router.post('/renameoption', Option.rename)
    // router.post('/deleteoption', Option.delete)

    app.use(router.routes())
    app.use(router.allowedMethods())
}