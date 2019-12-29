var config=require("../../databaseConfig");
var mysqlConnection=config.mysqlConnection;
const multer = require('multer');//for multipart data handling
const storage1=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./static/event_organised/");
    },
    filename:function(req,file,cb){
        var name=new Date().toISOString()+file.originalname;
        name=name.split(":");
        newName=name[0];
        for(var i=1;i<name.length;i++){
            newName=newName+name[i];
        }
        cb(null,newName);
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

exports.add_event_organised_photo=event_organised_upload.single("photo");

exports.register=function(req,res){
    //console.log("purvi");
    mysqlConnection.query("insert into NGO_register values("+"'"+req.body.NGO_name+"',"+"'"+req.body.unique_id+"',"+"'"+req.body.category+"',"+
    req.body.phone+",'"+req.body.password+"','"+req.body.latitude+"','"+req.body.longitude+"')",(err,rows,fields)=>{
        if(err){
            res.send({
                "status":400,
                "failed":"NGO not registered",
                "error":err
                  });
        }
        else{
            res.send({
                "status":200,
                "success":"NGO registered sucessfully"
         
            });
        }
    });
};

exports.login=function(req,res){
    console.log(req.body);
    mysqlConnection.query("select * from NGO_register where unique_id='"+req.body.unique_id+"'",(err,results,fields)=>{
        if (err) {
            res.send({
              "status":400,
              "failed":"error ocurred",
              "error":err
            })
          }else{
            res.send({
              "status":200,
              "success":"logged in  sucessfully",
              "NGO_details":results[0],
                });
          }
          });
 };

exports.future_event=function(req,res){
    mysqlConnection.query("select * from NGO_future_event where unique_id="+"'"+req.body.unique_id+"'",(err,results,fields)=>{
        if(err){
            res.send({
                "status":400,
                "error":err
                  });
        }
        else{
            res.send({
                "status":200,
                "success":"events received",
                "events":results
            });
        }
    });
};

exports.subs=function(req,res){
    mysqlConnection.query("select * from NGO_subscribers where unique_id="+"'"+req.body.unique_id+"'",(err,results,fields)=>{
        if(err){
            res.send({
                "status":400,
                "error":err
                  });
        }
        else{
            res.send({
                "status":200,
                "success":"subscribers received",
                "subscribers":results
            });
        }
    });
};

exports.noti=function(req,res){
    mysqlConnection.query("select * from NGO_notifications where unique_id="+"'"+req.body.unique_id+"'",(err,results,fields)=>{
        if(err){
            res.send({
                "status":400,
                "error":err
                  });
        }
        else{
            res.send({
                "status":200,
                "success":"notifications received",
                "notifications":results
            });
        }
    });
};

exports.event_organised_photo=function(req,res){
    mysqlConnection.query("select * from event_organised_photo where unique_id="+"'"+req.body.unique_id+"'",(err,results,fields)=>{
        if(err){
            res.send({
                "status":400,
                "error":err
                  });
        }
        else{
            res.send({
                "status":200,
                "success":"photos received",
                "events":results
            });
        }
    });
};

exports.event_organised=function(req,res){
    mysqlConnection.query("select * from NGO_event_organised where unique_id="+"'"+req.body.unique_id+"'",(err,results,fields)=>{
        if(err){
            res.send({
                "status":400,
                "error":err
                  });
        }
        else{
            res.send({
                "status":200,
                "success":"events received",
                "events":results
            });
        }
    });
};


exports.add_future_event=function(req,res){
    mysqlConnection.query("insert into NGO_future_event value(null,'"+req.body.photo+
    "','"+req.body.latitude+"','"+req.body.longitude+"','"+req.body.description+"','"+
    req.body.unique_id+"','"+req.body.address+"')",(err,results,fields)=>{
        if(err){
            res.send({
                "status":400,
                "error":err
                  });
        }
        else{
            res.send({
                "status":200,
                "success":"event added",
            });
        }
    });
};

exports.add_subs=function(req,res){
    mysqlConnection.query("insert into NGO_subscribers value(null,'"+req.body.name+
    req.body.unique_id+"')",(err,results,fields)=>{
        if(err){
            res.send({
                "status":400,
                "error":err
                  });
        }
        else{
            res.send({
                "status":200,
                "success":"subscriber added",
            });
        }
    });
};

exports.add_noti=function(req,res){
    mysqlConnection.query("insert into NGO_notifications value(null,'"+req.body.text+
    "','"+req.body.is_read+"','"+req.body.unique_id+"')",(err,results,fields)=>{
        if(err){
            res.send({
                "status":400,
                "error":err
                  });
        }
        else{
            res.send({
                "status":200,
                "success":"notifications added"
            });
        }
    });
};

exports.after_upload_event_organized_photo=function(req,res){
        console.log(req.body);
      mysqlConnection.query("insert into event_organised_photo value(null,'"+req.body.event_id+"','"+req.file.path+"')",(err,results,fields)=>{
        if(err){
            res.send({
                "status":400,
                "error":err
                  });
        }
        else{
            res.send({
                "status":200,
                "success":"photo added"
            });
        }
    });
    
}; 

exports.add_event_organised=function(req,res){
    mysqlConnection.query("insert into NGO_future_event value(null,'"+req.body.unique_id+
    "','"+req.body.caption+"')",(err,results,fields)=>{
        if(err){
            res.send({
                "status":400,
                "error":err
                  });
        }
        else{
            res.send({
                "status":200,
                "success":"event added"
            });
        }
    });
};

