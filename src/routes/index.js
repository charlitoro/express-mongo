const router = require('express').Router();
const SignUp = require('../models/signUp');
const faker  = require('faker');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/sign-up', (req, res, next) => {
  res.render('registry/sign-up');
});

router.post('/sign-up', (req, res, next) => {
  const signUp = new SignUp();
  signUp.avatar = faker.image.avatar();
  signUp.username = req.body.username;
  signUp.name = req.body.name;
  signUp.email = req.body.email;
  signUp.birthday = new Date(req.body.birthday);
  signUp.password = req.body.password;
  
  signUp.save((err) => {
    if (err) { throw err; }
    res.redirect('/sign-up');
  });
});

router.get('/registered', (req, res, next) => {
  SignUp
    .find({}) // finding all documents
    .exec((err,registered) => {
      SignUp.count((err, count) => {
        if (err) return next(err);
        res.render('registry/registered', {
          registered
        });
      });
    });
});

module.exports = router;
