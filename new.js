const express = require('express')
const app = express()
function uzzu(req,res)
{
  res.send("<h1>hellow world</h1>");
}
app.get('/',uzzu)
app.listen(80,()=>console.log("server started"))