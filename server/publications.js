// this.userId, to get user id

/* projects page */
Meteor.publish("getProjects", function(email) {
  check(email, String);

  var data = [
    Projects.find({ "memberEmail": email }, {
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
/*
Meteor.publish("modalRateRateGame", function(gameId) {
  check(gameId, String);
  
  var data = [
    Games.find({ "_id": gameId }, {
      fields: {
        "name": 1,
      }
    }),
    Reviews.find({ "gameId": gameId, userId: this.userId }, {
      fields: {
        "gameId": 1,
        "userId": 1,
        "rating": 1,
      }
    }),
  ]; 

  if (data) {
    return data;
  }

  return this.ready();
});
*/

