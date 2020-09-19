// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

//home route
//request is from the client
module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    // submitButtonLabel
    //   formName
    //   formClass
    res.render("index", {
      layout: "main",
      srcScript: "login",
      linkUrl: "/signup",
      linkLabel: "Sign-up",
      formName: "Login Form",
      formClass: "login",
      submitButtonLabel: "Login"
    });
  });
  // Login Route and also an home route
  //request is from the client
  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.render("index", {
      layout: "main",
      srcScript: "login",
      linkUrl: "/signup",
      linkLabel: "Sign-up",
      formName: "Login Form",
      formClass: "login",
      submitButtonLabel: "Login"
    });
  });

  //sign up route
  //request is from the client
  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
    res.render("index", {
      layout: "main",
      srcScript: "signup",
      linkUrl: "/login",
      linkLabel: "Login",
      formName: "Sign-up Form",
      formClass: "signup",
      submitButtonLabel: "Sign up",
      signup: true
    });
  });
  //request is from the client
  //request is from the client
  //isAuthenticated middleware: in this route it means If a user is not logged in tries to access this route, they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.render("membersIndex", {
      layout: "members",
      email: res.email,
      linkUrl: "/logout",
      linkLabel: "Logout",
      formName: "Member Form",
      formClass: "member",
      addButtonLabel: "Add",
      updateButtonLabel: "Update"
    });
  });
  //games route
  //request is from the client
  app.get("/games", isAuthenticated, (req, res) => {
    //pass in the view name as well as the data to be rendered in the form of an object
    console.log("we are in /games!!!!!!!!");
    res.render("gamesIndex", {
      layout: "games",
      email: res.email,
      srcScript: "Add",
      linkUrl: "/logout",
      linkLabel: "Logout",
      formName: "Add Form",
      formClass: "add",
      submitButtonLabel: "submit"
    });
  });

  //pass in the view name as well as the data to be rendered in the form of an object
  app.get("/games-update", isAuthenticated, (req, res) => {
    res.render("gamesIndex", {
      layout: "games",
      email: res.email,
      linkUrl: "/members",
      linkLabel: "Member",
      formName: "Update Form",
      formClass: "update",
      submitButtonLabel: "submit"
    });
  });
};
