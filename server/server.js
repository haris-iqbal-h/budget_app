const express=require('express')
const app=express()

const cors=require('cors')

const port=5000

//middlewares
app.use(cors())
app.use(express.json())


//routes
app.use(require('./routes/route'))


app.use()
app.listen(port,()=>{
    console.log('Server is running on port '+port)
})