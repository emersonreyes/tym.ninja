import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './templates/main.html';

Template.projects_page.events({
	"click #start-project"(event) {
		console.log("HI");
	},
});