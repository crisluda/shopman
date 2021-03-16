import bcrypt from 'bcryptjs';
const users=[{
    name:"John Duo",
    email:"jd@inc.com",
    password:bcrypt.hashSync('123456',10)
},
{
    name:"Cris Luda",
    email:"cl@inc.com",
    password:bcrypt.hashSync('123456',10),
    isAdmin:true
},
{
    name:"Hyper Cris",
    email:"hc@inc.com",
    password:bcrypt.hashSync('123456',10)
}]
export default users