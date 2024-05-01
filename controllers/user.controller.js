import User from "../models/User.js"


export const findAll = (req, res) => {
    console.log(req.userId)
    User.getAll((err, data) => {
        
        if(err){
            console.log(err)
            res.status(500).send({msg: "exist some error"})
        }
        res.send(data)
    })
}


export const findOne = (req, res)=>{
    User.findById(req.params.id, (err, data)=>{
        if(err) {
            if(err.type === 'not_found'){
                res.status(404).send({
                    messagge: `not found user with id : ${req.params.id}`
                })
                return
            }else{
                res.status(500).send({msg:"exist some error"})
            }
        }else{
            res.send(data)
        }
          
    })
}


export const update = (req, res) =>{
    const userData = new User(req.body)
    User.update(req.params.id, userData, (err, data) => {
        if(err) {
            if(err.type === 'not_found'){
                res.status(404).send({
                    messagge: `not found question with id : ${req.params.id}`
                })
            } else {
                res.status(500).send({msg:"exist some error"})
            }
        } else {
            res.send(data)
        }
    })
 }


 export const destroy = (req, res) => {
    User.delete(req.params.id, (err, data) =>{
        if(err) {
            if(err.type === 'not_found'){
                res.status(404).send({
                    messagge: `not found question with id : ${req.params.id}`
                })
            } else {
                res.status(500).send({msg:"exist some error"})
            }
        } else {
            res.send({msg: "success delete question"})
        }
    
    })
}