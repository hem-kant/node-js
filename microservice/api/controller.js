'use strict';

var properties = require('../package.json')
var distance = require('./service/distance');
var auth = require('./service/auth');
var graphql = require('./service/graphql');

var controllers = {
    about: function(req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version,
            description:properties.description,
            author:properties.author
        }
        res.json(aboutInfo);
    },

    get_auth: function(req, res) {
        auth.findUser(req, res, function(err, dist) {
             
        });
         
    },

    graphql: function(req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version,
            description:properties.description
        }
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
        res.json(aboutInfo);
         
    },

    get_distance: function(req, res) {
            distance.find(req, res, function(err, dist) {
                if (err)
                    res.send(err);
                res.json(dist);
            });
        },
};

module.exports = controllers;