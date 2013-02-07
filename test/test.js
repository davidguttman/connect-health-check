var assert = require('assert');

var healthCheck = require('../index');

var hit = function() {
  var next, req, res;

  req = {
    url: '/health'
  };

  res = {
    send: function(msg) {
      assert(msg.status === 'OK', 'response should be "OK"');
    }
  };
  
  next = function() {
    assert(false, 'next should not be called');
  };

  healthCheck(req, res, next);
};

var miss = function() {
  var next, req, res;
  
  req = {
    url: '/healthSomething'
  };
  
  res = {
    send: function(msg) {
      assert(false, 'should not send a response');
    }
  };
  
  next = function() {
    assert(true, 'next should be called');
  };
  
  healthCheck(req, res, next);
};

hit();

miss();