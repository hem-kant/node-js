'use strict';

var controller = require('./controller');

module.exports = function(app) {
    app.route('/about/v1')
        .get(controller.about);

    app.route('/auth/v1/:uid/:pwd')
        .get(controller.get_auth);

        app.route('/graphql/v1')
        .get(controller.graphql);


    app.route('/distance/:zipcode1/:zipcode2')
        .get(controller.get_distance);
};