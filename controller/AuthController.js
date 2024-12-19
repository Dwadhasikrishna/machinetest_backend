import { login as _login } from '../services/authService'

class AuthController {
    async login(req,res){
        const {email,password} = req.body
        if(!email || !password){
            return res.status(400).json({message :"Email and password are required"})
        }

        try {
            const token = await _login(email,password)
            res.status(200).json({message:"Login Successfull",token})
        } catch (error) {
            res.status(401).json({message: error.message})
        }
    }
}

export default new AuthController()