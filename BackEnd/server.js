require('dotenv').config()
const app = require("./src/app");

//humara server 3000 port mai hoga or call back function tb kaam krega jb server start hoga
app.listen(3000,()=>{
  console.log("Server is running on https://localhost:3000")
})
