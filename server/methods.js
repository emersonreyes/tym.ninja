// Meteor.userId(), to get user id
Meteor.methods({
	addProject(teamInfo) {
		check(teamInfo, Array);

		Projects.insert({
			project: teamInfo[0],
			teamName: teamInfo[1],
			memberOne: Meteor.userId(),
			memberTwo: teamInfo[2],
			memberThree: teamInfo[3],
			memberFour: teamInfo[4],
			memberFive: teamInfo[5],
			memberSix: teamInfo[6],
			memberSeven: teamInfo[7],
			memberEight: teamInfo[8],
			memberNine: teamInfo[9],
		});
	},
})