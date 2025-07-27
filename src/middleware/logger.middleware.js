
const loggerMiddleWare = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  console.log("Body:", req.body);
  next();
};

module.exports = loggerMiddleWare;
