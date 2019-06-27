import passport from 'passport/lib';
import LocalStrategy from 'passport-local/lib';
import getToken from '../../../../auth/generateToken';

const Query = {

  login: async (_, { password, username }, { client: user, req, res }) => {
    req.body = { username, password };
    passport.use(new LocalStrategy(
      {
        username: 'username',
        password: 'password',
      },
      (username, password, done) => {
        user.users.findOne({ username, password }, (err, user) => {
          if (user) return done(null, user, { Message: 'Login Successfully' });

          return done(null, false, { Message: 'Incorrect password' });
        });
      },
    ));

    passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err) return err;

      user.token = getToken({ name: user.username });
      return user;
    })(req, res);

    return {
      username: 'Kimame',
    };
  },
};

export default Query;
