import bcrypt from 'bcrypt';

const users = [
   { 
    id:1,
    email:"test@example.com",
    password:bcrypt.hashSync('password123',10)
}
];