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

		// team name and team members
		const teamName = event.target.teamName.value;
		const memberTwo = event.target.memberTwo.value;
		const memberThree = event.target.memberThree.value;
		const memberFour = event.target.memberFour.value;
		const memberFive = event.target.memberFive.value;
		const memberSix = event.target.memberSix.value;
		const memberSeven = event.target.memberSeven.value;
		const memberEight = event.target.memberEight.value;
		const memberNine = event.target.memberNine.value;

		const teamInfo = [projectSelected, teamName, memberTwo, memberThree, memberFour, memberFive, memberSix, memberSeven, memberEight, memberNine]

		if (Meteor.user()) {
			Meteor.call("addProject", teamInfo);
		}
		else {
			return false;
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

