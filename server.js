const express = require('express');
const app = express();
const queryRoutes = require("./routes/queryRouter");
app.use("/api/query", queryRoutes)
app.get("/", (req,res)=>{
    res.send("Hello");
})
app.use(express.json());
require("dotenv").config();
const port = process.env.port;
app.listen(port, () => console.log(`Server work! ${port}`));
//const procedureRoutes = require("./routes/procedureRouter");
//const functionRoutes = require("./routes/functionRouter");
//app.use("/api/procedure", procedureRoutes);
//app.use("/api/function", functionRoutes);
