const express = require('express')
const app= express()
const port= 3000
app.get('/',(req,res)=> res.send('hello world again  2 you too ok ya?yes or not? not really '))
app.listen(port,()=>console.log('sup'))


