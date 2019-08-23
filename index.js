const express = require('express')
const app= express()
const port= 3000
app.get('/',(req,res)=> res.send('hello world again  2 you too ok ya?yes '))
app.listen(port,()=>console.log('sup'))


