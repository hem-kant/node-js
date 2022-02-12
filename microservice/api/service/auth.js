var request = require('request');

var auth = {
    findUser: function(req, res) {
        if (req.params.uid == "hem" && req.params.pwd == "kant"){   
                res.send("OK");
        }
        else{
            res.send("Not a Valid User!!!!!! :( ")
        }
    }
};

module.exports = auth;