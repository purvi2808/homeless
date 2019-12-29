const multer = require('multer');//for multipart data handling

const storage1=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./static/event_organised/");
    },
    filename:function(req,file,cb){
        cb(null,new Date().toISOString()+file.originalname);
    }
});
 const storage2=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./static/event_organised/");
    },
    filename:function(req,file,cb){
        cb(null,new Date().toISOString()+file.originalname);
    }
}); 
var event_organised_upload=multer({storage:storage1});
var future_event_upload=multer({storage:storage2});
module.exports=event_organised_upload;
module.exports=future_event_upload;