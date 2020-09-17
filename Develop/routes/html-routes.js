// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    // res.sendFile(path.join(__dirname, "../public/login.html"));

    // submitButtonLabel 
    //   formName
    //   formClass
    res.render('index', {
      layout: 'main', 
      linkUrl: '/signup',
      linkLabel: 'Sign-up',
      formName: 'Login Form', 
      formClass: 'login', 
      submitButtonLabel: 'Login'});
  });
//request is from the client
  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
    res.render('index', {
      layout: 'main',
      linkUrl: '/login',
      linkLabel: 'Login', 
      formName: 'Sign-up Form', 
      formClass: 'signup', 
      submitButtonLabel: 'Sign up',
      signup: true
    });
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};
