// Routing
Router.configure({
	layoutTemplate: "applicationsLayout",
});

Router.onBeforeAction(function () {
  // all properties available in the route function
  // are also available here such as this.params

  if (!Meteor.userId()) {
    // if the user is not logged in, render the welcome template
    this.render("navbar_welcome", { to: "navbar" });
	this.render("welcome", { to: "main" });
	this.render("footer", { to: "footer" });
    
	
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.render("navbar_home", { to: "navbar" });
	this.render("projects_page", { to: "main" });
	this.render("footer", { to: "footer" });
  }
});

// home
Router.route("/", function () {
	this.render("navbar_welcome", { to: "navbar" });
	this.render("welcome", { to: "main" });
	this.render("footer", { to: "footer" });
});


// projects page
Router.route("/projects-page", function () {
	this.render("navbar_home", { to: "navbar" });
	this.render("projects_page", { to: "main" });
	this.render("footer", { to: "footer" });
});









