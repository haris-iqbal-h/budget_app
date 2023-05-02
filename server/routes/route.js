const routes=require('express').Router()

routes.route('/api/categories')
    .get((req,res)=>{
        res.json("get request from categories")
    })

module.exports =routes