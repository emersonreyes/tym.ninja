// this.userId, to get user id

/* projects page */
Meteor.publish("getProjects", function(email) {
  check(email, String);

  var data = [
    Projects.find({"memberEmail": email}, {
      fields: {
        "memberEmail": 1,
        "projects": 1,
      }
    })
  ]; 

  if (data) {
    return data;
  }

  return this.ready();
});
/* end */

/* projects page */
Meteor.publish("x", function() {

  var data = [
    Projects.find({}, {
      fields: {
        "memberEmail": 1,
        "projects": 1,
      }
    })
  ]; 

  if (data) {
    return data;
  }

  return this.ready();
});
/* end */

