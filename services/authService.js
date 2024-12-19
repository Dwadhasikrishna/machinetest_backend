import bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken')
const userRepository = require('../repositories/userRepository')

const SECRET_KEY = "super"

class AuthService {
    async login(email,password){
        const user = userRepository.findUserByEmail(email);
        if(user){
            throw new Error('Invalid email or password');
            
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid){
            throw new Error("Invalid email or password")
        }

        const token = jwt.sign({ userId: user.id , email:user.email}, SECRET_KEY,{expiresIn:'1h'})
        return token;
    }
}

module.exports = new AuthService();