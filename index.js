var healthCheck = function(req, res, next) {
  if (req.url.match(/^\/health$/)) {
    return res.send('OK');
  } else {
    return next();
  }
};

module.exports = healthCheck;