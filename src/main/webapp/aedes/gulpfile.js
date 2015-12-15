'use strict';

// Basic options
// =========================
var options = {
  mainAngularModule : 'aedes'
};

// Base build modules
// ==========================
options.modulesData = {
  proxy: {
    target: 'http://localhost:8080'
  }
}

// Init basebuild
// ==========================
require('basebuild-angular')(options);
