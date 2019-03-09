const User = require('./user.model');
 
exports.read = function (req, res) {
    User.find({}, (err, data)=>res.send(data));
};

exports.test = function(req, res) {
  res.send("GREETING EARTHLING...");
}

exports.create = function(req, res) {
   
    console.log(req.body);
    console.log("GETTING THE POST");
    var user = new User(req.body);
    console.log(user);
    
    user.save(function (err){
        if(err){console.log(err); return res.send({status: "error", error: err});}
        console.log("SUccessme hu");
	return res.send({status: "success"});
    });
};
 
exports.update = function(req, res) {
    var query = {_id: req.body._id};
    User.findOneAndUpdate(query, req.body, function(err) {
        console.log(arguments);
        if(err) {
            console.log(err);
            return res.send({status: "error", error: err});
        }
        return res.send({status: "success"});
    } );
}
 
exports.delete = function(req, res){
    var query = {_id: req.params.id}
    User.findByIdAndDelete(query,(err) => {
        if(err){
            console.log(err);
            return res.send({status: "error", error: err});
        }
        return res.send({status: "success"});
    });
}
 
exports.readOne = function(req, res){
    User.findById(req.params.id, (err, doc) => {
        res.send(doc);
    });
}
