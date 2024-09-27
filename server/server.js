const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
    origin:["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api", (req,res)=>{
    res.json({coffee:["Robusta","Arabica", "Liberica", "Exceisa"]}) 
});

app.listen(8080, ()=>{
    console.log("server is running on port 8080");
});