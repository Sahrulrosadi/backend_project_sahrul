import Room from '../models/Room.js';


export const create = (req, res) => {
    const newRoom = new Room ({
        user_id: req.userId,
        room_code: req.body.room_code,
        is_global: req.body.is_global,
        room_name: req.body.room_name
    })
    
    Room.create(newRoom, (err, data) => {
        if(err)  {
            res.status(500).send({msg:"Exist some error"})}
        res.send(data)
    })
};


export const findAll = (req, res) => {
    console.log(req.userId)
    Room.getAll((err, data) => {   
        if(err){
            console.log(err)
            res.status(500).send({msg: "exist some error"})
        }
        res.send(data)
    })
}

export const findOne = (req, res)=>{
    Room.findById(req.params.id, (err, data)=>{
        if(err) {
            if(err.type === 'not_found'){
                res.status(404).send({
                    messagge: `not found student with id : ${req.params.id}`
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

export const destroy = (req, res) => {
    Room.delete(req.params.id, (err, data) =>{
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

