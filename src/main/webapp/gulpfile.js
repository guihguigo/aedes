'use strict';

// Basic options
// =========================
var options = {
  mainAngularModule : 'aedes'
};

// Base build modules
// ==========================
// target: 'http://localhost:8080'
options.modulesData = {
  proxy: {
    target: 'http://ec2-52-11-89-206.us-west-2.compute.amazonaws.com:8080'
  }
}

// Init basebuild
// ==========================
require('basebuild-angular')(options);
