/**
 * Created by chenxi on 15-1-9.
 */
'use strict';

var BaseProxy = require("./base").BaseProxy,
    Profile = require("../models/profile"),
    ProfileProxy = BaseProxy.factory(Profile);

module.exports = new ProfileProxy();
module.exports.ProfileProxy = new ProfileProxy();