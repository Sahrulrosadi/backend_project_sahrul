import express  from "express"
import dotenv from 'dotenv'
import quizRoute from "./routes/quiz.route.js"
import answerRoute from "./routes/answerUser.route.js"
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"
import loggingMiddleware from "./middlewares/loggingMiddleware.js"
import errorHandler from "./middlewares/errorHandler.js"
import roomRouter from "./routes/room.route.js"


const app = express()
dotenv.config()

app.use(express.json()) // untuk mengirim respon json
app.use(express.urlencoded({extended: true})) // unutk mengirim data melalui reques body
app.use(loggingMiddleware) 
app.get('/', (req, res) => res.json({msg:'hello quiz'}))
app.use('/quiz', quizRoute)
app.use('/answer', answerRoute)
app.use('/auth', authRoute)
app.use('/user', userRoute)
app.use('/room', roomRouter)
app.use(errorHandler)

//app.use

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`) 
})
// connection.getConnection((err)=>{
//     if(err){
//         console.log('Error Connecting to database : ', err)
//     } else {
//         console.log('Connection to database success');
//     }
// })
