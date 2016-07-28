import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './templates/main.html';

Template.modal_add_project.events({
	"click .js-add-project"(event) {
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
		let teamName = document.getElementById("team-name").value;

		// team members
		const memberOne = Meteor.user().emails[0].address;

		let memberTwo = document.getElementById("member-two").value;
		let memberThree = document.getElementById("member-three").value;
		let memberFour = document.getElementById("member-four").value;
		let memberFive = document.getElementById("member-five").value;
		let memberSix = document.getElementById("member-six").value;
		let memberSeven = document.getElementById("member-seven").value;
		let memberEight = document.getElementById("member-eight").value;
		let memberNine = document.getElementById("member-nine").value;

		// array of emails and empty strings
		const team = [memberOne, memberTwo, memberThree, memberFour, memberFive, memberSix, memberSeven, memberEight, memberNine];

		const updatedTeam = [];

		// removes empty strings
		for (let i = 0; i < team.length; i++) {
			if (team[i] !== "") {
				updatedTeam.push(team[i]);	
			}
		}

		// removes duplicate emails
		function uniq_fast(a) {
		    var seen = {};
		    var out = [];
		    var len = a.length;
		    var j = 0;
		    for(var i = 0; i < len; i++) {
		         var item = a[i];
		         if(seen[item] !== 1) {
		               seen[item] = 1;
		               out[j++] = item;
		         }
		    }
		    return out;
		}

		var fixedEmails = uniq_fast(updatedTeam);

		for (let i = 0; i < fixedEmails.length; i++) {
			let email = fixedEmails[i];

			Meteor.subscribe("getProjects", email, function() {
				let projectsArray = Projects.find({ memberEmail: email }).fetch();
				if (projectsArray.length > 0) {
					Meteor.call("addProject", projectSelected, teamName, email);					
				}
				else {
					Meteor.call("newProject", projectSelected, teamName, email);
				}
			});
		}

		
		
		$("#team-name").val("");
		$("#member-two").val("");
		$("#member-three").val("");
		$("#member-four").val("");
		$("#member-five").val("");
		$("#member-six").val("");
		$("#member-seven").val("");
		$("#member-eight").val("");
		$("#member-nine").val("");

		$("#modal-add-project").modal("hide");
	},
	/*
	"click .js-rate-game"(event) {
		var rating = $(event.currentTarget).data("userrating");
		var gameId = this.gameId;

		Meteor.subscribe("modalRateRateGame",gameId, function() {
			var getGameName = Games.find({ _id: gameId }).fetch();
			var name = getGameName[0].name;
			var userId = Meteor.user()._id;
			var username = Meteor.user().username;

			// if returning an empty obj
			if (Reviews.find({ gameId: gameId, userId: userId }).fetch().length > 0) {
				var reviewObject = Reviews.find({ gameId: gameId, userId: userId }).fetch();
				var oldRating = reviewObject[0].rating;

				Meteor.call("updateRating", rating, gameId, oldRating);
			}
			else {
				Meteor.call("rateGame", rating, gameId, username, name);
			}
		});	
	}, 
	*/
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

