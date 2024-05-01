import jwt from 'jsonwebtoken'
import roleAcces from './roleAcces.js'


const authJwt = (req, res, next)=>{
// get token 
const token = req.headers['authorization']?.replace("Bearer ", "")
// console.log(token)
if(!token){  
    throw new Error("Missing Token")

//    return res.status(401).send({message: 'Missing Token'})
}


// verify (memastikan token valid)
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
        if(err){
            return res.status(403).send({message: 'Invalid Token'})
        }
        if(!roleAcces (decoded.role, req.baseUrl, req.method, req.userId, req.url)){
            return res.status(403).json({message:"Unauthorized Access"})

        }

        next()


    })

}


export default authJwt