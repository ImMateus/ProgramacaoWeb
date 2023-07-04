const User = require('../models/User');

exports.login = (req, res) => {
  const { username, password } = req.body;

  const user = User.findByCredentials(username, password);
  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
};
