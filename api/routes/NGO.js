var config=require("../../databaseConfig");
var mysqlConnection=config.mysqlConnection;
 var multer = require('multer');



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

exports.add_event_organised_photo=function(req,res){
    
        photo=req.body.photo;
      var path=require("path");
      var dir = path.join(__dirname,"../../static/event_organised/");
      var storage = multer.diskStorage({
        destination: function (req, photo, callback) {
          callback(null, 'dir')
        },
        filename: function (req, photo, callback) {
            dir=dir+photo.fieldname + '-' + Date.now()
          callback(null, dir)
        }
      })
       
      var upload = multer({ storage: storage })

      mysqlConnection.query("insert into event_organised_photo value(null,'"+"','"+req.body.event_id+"','"+dir+"')",(err,results,fields)=>{
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

