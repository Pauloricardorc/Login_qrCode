import { Response, Request } from 'express'
import prismaClient from '../../prisma'
import { hash } from 'bcrypt'

class AuthenticateUser {
  async handle(request: Request, response: Response){
    const {name, password, email, github} = request.body
    console.log(name)

    let user = await prismaClient.user.findFirst({
      where: {
        email,
      }
    })

    if(user){
      return response.send('Email já cadastrado')
    }

    const newPassword = await hash(password, 7)

    try {
      await prismaClient.user.create({
        data:{
          name,
          email,
          password: newPassword,
          github,
        }
      })  
      return response.status(200).json({
        message: 'Cadastrado com sucesso'
      })
    } catch (error) {
      return response.status(400).json({
        message: 'Erro no cadastro no usuario'
      })
    }


  }
}

export { AuthenticateUser }