import users from '../models/userModel';

class UserRepository {
    findUserByEmail(email){
        return users.find((user)=> user.email === email);
    }
}

module.exports = new UserRepository();