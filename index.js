var healthCheck = function(req, res, next) {
  if (req.url.match(/^\/health$/)) {
    return res.send({
      status: 'OK',
      pid: process.pid,
      memory: process.memoryUsage(),
      uptime: process.uptime()
    });
  } else {
    return next();
  }
};

module.exports = healthCheck;