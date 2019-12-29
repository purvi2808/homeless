
const express=require("express");
const app=express();
const router=express.Router();
const multer = require('multer');

//const bodyParser=require("body-parser");

/* app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); */



//handling CORS error
app.use((req,res,next)=>{
res.header("Accss-Control-Allow-Origin","*"),
res.header("Access-Control-Allow-Header",
"OriginX-Requested-With,Content-Type,Accept,Authorization");
if(req.method==="OPTIONS"){
    res.header("Access-Control-Allow-Methods","PUT","POST","PATCH","DELETE","GET")
    return res.status(200).json({});
}
next();  
});


//routes which should handle request
const NGO=require("./api/routes/NGO");


//for NGO
app.post("/NGO_register",NGO.register);
app.post("/NGO_login",NGO.login);

/*get*/
app.post("/NGO_future_event",NGO.future_event);
app.post("/NGO_subscribers",NGO.subs);
app.post("/NGO_notifications",NGO.noti);
app.post("/event_organised_photo",NGO.event_organised_photo);
app.post("/NGO_event_organised",NGO.event_organised);

/*post*/
app.post("/add_NGO_future_event",NGO.add_future_event);
app.post("/add_NGO_subscribers",NGO.add_subs);
app.post("/add_NGO_notifications",NGO.add_noti);
app.post("/add_event_organised_photo",NGO.add_event_organised_photo,NGO.after_upload_event_organized_photo);
app.post("/add_NGO_event_organised",NGO.add_event_organised);

//module.exports=multer;
module.exports=router;

app.listen(3000,()=>console.log("Express server running at port no : 3000"));



//custom 404 handler
app.use((req,res,next)=>{
    const error=new Error("Not found");
    error.status=404;
    next(error);
}); 

//error handler
app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
   });
});