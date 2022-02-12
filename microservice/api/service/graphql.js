var request = require('request');

var graphql = {
    findUser: function(req, res) {
        if (req.params.uid == "hem" && req.params.pwd == "kant"){   
                res.send("OK");
                const request = require('request')

request.post('https://flaviocopes.com/todos', {
  json: {
    todo: 'Buy the milk'
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(`statusCode: ${res.statusCode}`)
  console.log(body)
})
        }
        else{
            res.send("Not a Valid User!!!!!! :( ")
        }
    }
};

module.exports = graphql;