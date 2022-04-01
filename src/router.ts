import Router from 'express'
import { AuthenticateUser } from './controllers/LoginControllers'

const router = Router()

const Authlogin = new AuthenticateUser()

router.post('/login', Authlogin.handle)

export {router}