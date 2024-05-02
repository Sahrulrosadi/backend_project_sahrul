import sql from "./connection.js";

const AnswerUser = function(jawaban){
    this.correctAnswer = jawaban.correctAnswer
}

AnswerUser.getAll = (result) => {
    sql.query("SELECT id, correctAnswer FROM questions", (err, res) => {
        if(err) {
            result(err, null)
        }
        result(null, res)
    })
}
AnswerUser.findById = (id, result) => {
    sql.query(`SELECT correctAnswer FROM questions WHERE id = ${id}`, (err, res)=> {
        if(err) {
            result(err, null)
            return
        }

        // jika data ditemukan
        if(res.length) {
            result(null, res[0])
            return
        }
        // jika kosong
        result({type: 'not_found'}, null)
    } )
}


export default AnswerUser