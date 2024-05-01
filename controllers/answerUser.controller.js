import AnswerUser from "../models/AnswerUser.js"

export const findAll = (req, res) => {
    console.log(req.userId)
    AnswerUser.getAll((err, data) => {
        
        if(err){
            console.log(err)
            res.status(500).send({msg: "exist some error"})
        }
        res.send(data)
    })
}

export const findOne = (req, res)=>{
    const {AnswerUser} = req.body;
    AnswerUser.findById(req.params.id, (err, data)=>{
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


export const checkAnswer = (req, res)=>{
    const {correctAnswer} = req.body;
    // console.log(correctAnswer);
    AnswerUser.findById(req.params.id, (err, data)=>{
        if(err) {
            if(err.type === 'not_found'){
                res.status(404).send({
                    messagge: `not found student with id : ${req.params.id}`
                })
                return
            }else{
                res.status(500).send({msg:"exist some error"})
            }
            console.log(data.correctAnswer);
        }if (correctAnswer === data.correctAnswer) {
            res.json({ correct: true });
        } else {
            res.json({ correct: false });
        }
    })
}
