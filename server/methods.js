// Meteor.userId(), to get user id

Meteor.methods({
	addProject(projectSelected, teamName, email) {
		check(projectSelected, String);
		check(teamName, String);
		check(email, String);

		if (Meteor.userId()) {
			Projects.update(
				{ memberEmail: email },
				{ $push:
					{ projects:
						{
							teamName: teamName,
							projectName: projectSelected, 
							createdOn: new Date(),
						}
					}
				}
			);
		}
		else {
			return false;
		}
	},
	newProject(projectSelected, teamName, email) {
		check(projectSelected, String);
		check(teamName, String);
		check(email, String);

		if (Meteor.userId()) {
			Projects.insert({
				memberEmail: email,
				projects: [
					{
						teamName: teamName,
						projectName: projectSelected, 
						createdOn: new Date(),
					},
				],
			});
		}
		else {
			return false;
		}
	},
})

/*
rateGame(rating, gameId, username, name) {
		check(rating, Number);
		check(gameId, String);
		check(username, String);
		check(name, String);

		if (Meteor.userId()) {
			Reviews.insert({
				gameId: gameId,
				userId: Meteor.userId(),
				username: username,
				rating: rating,
				name: name,
				createdOn: new Date(),
			});

			// += count and rating to top collection
			Top.update(
				{gameId: gameId}, 
				{$inc: { count: 1, rating: rating }}
			);
		}
		else {
			return false;
		}
	},
	updateRating(rating, gameId, oldRating) {
		check(rating, Number);
		check(gameId, String);
		check(oldRating, Number);

		if (Meteor.userId()) {
			Reviews.update(
		   		{	
		   			gameId: gameId,
		   			userId: Meteor.userId(),
		   		},
		   		{	// second $set will update the "id"
		   			$set: {
		   				rating: rating,
		   				createdOn: new Date(),
		   			}
		   		}
	   		);
			// -= old rating 
	   		Top.update(
				{gameId: gameId}, 
				{$inc: { rating: -oldRating }}
			);
	   		// += new rating
			Top.update(
				{gameId: gameId}, 
				{$inc: { rating: rating }}
			);
		}
		else {
			return false;
		}
	},
*/

















