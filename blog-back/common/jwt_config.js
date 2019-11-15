module.exports = {
  jwtSecret: process.env.TOKEN_KEY || "mulcamfaker",
  jwtSession: {
    session: false
  }
};
