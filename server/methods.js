// Meteor.userId(), to get user id

Meteor.methods({
	addProject(projectSelected, teamName, email) {
		check(projectSelected, String);
		check(teamName, String);
		check(email, String);

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

















