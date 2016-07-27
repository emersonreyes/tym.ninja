import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './templates/main.html';

Template.modal_add_project.events({
	"submit .js-add-project"(event) {
		// either true or false
		const projectObject= {
			projectOne: document.getElementById("project1").checked,
			projectTwo: document.getElementById("project2").checked,
			projectThree: document.getElementById("project3").checked,
		};

		let projectSelected;

		// determines which project was selected (returns true)
		for (let project in projectObject) {
			if (projectObject[project] === true) {
				projectSelected = project;
			}
		}

		// team name 
		const teamName = event.target.teamName.value;

		// team members
		const memberOne = Meteor.user().emails[0].address;
		const memberTwo = event.target.memberTwo.value;
		const memberThree = event.target.memberThree.value;
		const memberFour = event.target.memberFour.value;
		const memberFive = event.target.memberFive.value;
		const memberSix = event.target.memberSix.value;
		const memberSeven = event.target.memberSeven.value;
		const memberEight = event.target.memberEight.value;
		const memberNine = event.target.memberNine.value;

		// array of emails and empty strings
		const team = [memberOne, memberTwo, memberThree, memberFour, memberFive, memberSix, memberSeven, memberEight, memberNine];

		const updatedTeam = [];

		for (let i = 0; i < team.length; i++) {
			if (team[i] !== "") {
				updatedTeam.push(team[i]);	
			}
		}

		for (let i = 0; i < updatedTeam.length; i++) {
			let email = updatedTeam[i];

			Meteor.subscribe("getProjects", email, function() {
				let array = Projects.find({ memberEmail: email }).fetch();

				if (!array[0]) {
					Meteor.call("newProject", projectSelected, teamName, email);
				}
				else {
					Meteor.call("addProject", projectSelected, teamName, email);
				}
			});	
		}
	},
});

Template.projects_page.helpers({
	project() {		
		if (Meteor.user()) {
			var email = Meteor.user().emails[0].address;

			Meteor.subscribe("getProjects", email);

			var array = Projects.find().fetch();

			if (array[0]) {
				return array[0].projects;
			}
			else {
				return undefined;
			}
		}
	},	
});

Template.projects_page.events({
	"click #open-modal"(event) {
		if (Meteor.user()) {
			$("#modal-add-project").modal("show");
		}
		else {	
			return false;
		}
	},
});

