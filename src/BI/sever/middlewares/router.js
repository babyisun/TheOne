
import Router from 'koa-router'
import User from '../controllers/user'
import Project from '../controllers/project'
import Page  from '../controllers/page'

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

    app.use(router.routes())
    app.use(router.allowedMethods())
}