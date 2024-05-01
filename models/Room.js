import sql from "./connection.js";

const Room = function(ruang){
    this.user_id = ruang.user_id,
    this.room_code = ruang.room_code,
    this.is_global = ruang.is_global,
    this.room_name = ruang.room_name
}

Room.create = (newRoom, result) => {
    sql.query ("INSERT INTO rooms SET ? ", newRoom, (err, res) => {
        if(err) {
            result(err, null)
        }
        result(null, {id: res.insertId, newRoom})
    })

}

Room.getAll = (result) => {
    sql.query("SELECT * FROM rooms", (err, res) => {
        if(err) {
            result(err, null)
        }
        result(null, res)
    })
}

Room.findById = (id, result) => {
    sql.query(`SELECT * FROM rooms WHERE id = ${id}`, (err, res)=> {
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


Room.delete = (id, result) =>{
    sql.query(" DELETE FROM rooms WHERE id = ?", id, (err, res) => {
        if(err) {
            result(err, null)
            return
        }

        if(res.affectedRows === 0){
            result({type: 'not_found'}, null)
            return
        }

        result(null, res)

    })
}
export default Room