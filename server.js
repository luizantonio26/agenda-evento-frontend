const express = require('express')

const app = express()

app
    .listen(process.env.PORT || 3000, (err)=>{
        if(err){
            return console.log(err)
        }else{
            console.log('Tudo ok')
        }
    })