// this.userId, to get user id

/*
Meteor.publish("adminAddGames", function() {
  var data = [
    Games.find({}, {
      fields: {
        "name": 1,
        "createdOn": 1,
        "releaseDate": 1,
      }
    })
  ]; 

  if (data) {
    return data;
  }

  return this.ready();
});
*/


/* projects page */
Meteor.publish("getProjects", function(email) {
  check(email, String);

  var data = [
    Projects.find({ "memberEmail": email }, {
      fields: {
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

