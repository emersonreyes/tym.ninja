// Meteor.userId(), to get user id

Meteor.methods({
	addProject(projectSelected, teamName, team) {
		check(projectSelected, String);
		check(teamName, String);
		check(team, Array);

		if (Meteor.userId()) {
			for (let i = 0; i < team.length; i++) {
				Projects.insert({
					memberEmail: team[i],
					projects: [
						{
							teamName: teamName,
							projectName: projectSelected, 
							createdOn: new Date(),
						},
					],
				});
			}
		}
		else {
			return false;
		}
	},
})