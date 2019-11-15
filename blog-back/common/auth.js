const passport = require("passport");
const passportJWT = require("passport-jwt");
const { User } = require("../models/user");
const config = require("./jwt_config");

const { ExtractJwt, Strategy } = passportJWT;
const options = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt")
};

module.exports = () => {
  const strategy = new Strategy(options, async (payload, done) => {
    const user = await User.findById(payload.id);
    if (user) {
      return done(null, {
        id: user._id,
        email: user.email,
        name: user.name,
        admin: user.admin
      });
    } else {
      return done(new Error("user not found"), null);
    }
  });

  passport.use(strategy);
  return {
    initialize() {
      return passport.initialize();
    },
    authenticate() {
      return passport.authenticate("jwt", config.jwtSession);
    }
  };
};
