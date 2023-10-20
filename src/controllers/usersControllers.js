const knex = require('../database/migrations/knex/index')
const {hash, compare} = require('bcryptjs')
const AppError = require('../utils/AppError')


class UsersControllers {

    async createUser(request, response){
        const {
            name,
            email,
            biography,
        } = request.body
        let {password} = request.body
        
        const emailExists = await knex('users')
        .where({email})
        console.log(emailExists.email)
        if(!emailExists.email) throw new AppError('email ja cadastrado')

        const hashedPassword = await hash(password, 8)
        password = hashedPassword
        const user_id = await knex("users").insert({
            name,
            email ,
            password,
            biography
        })

        response.json(user_id)
    }
}
module.exports = UsersControllers