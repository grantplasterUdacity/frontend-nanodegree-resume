/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var formattedName = HTMLheaderName.replace("%data%", "Joseph Grant Plaster");
 var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Web Developer");

var bio = {
	"name" : "Joseph Grant Plaster",
	"role" : "Front-End Web Developer",
	"contacts" : {
		"mobile" : "336-430-9456",
		"email" : "grant.plaster@udacity.com",
		"github" : "http://www.github.com/grantplasterUdacity",
		"twitter": "http://www.twitter.com/Master_Plaster4",
		"location": "Sunnyvale"
	},
	"welcomeMessage" : "Hello, my name is Grant, and I work on the Front-End team at Udacity",
	"skills" : ["Computer Programming in C and Java", "JavaScript", "People", "Communication", "Leadership"],
	"biopic" : "images/fry.jpg",
	display : function () {
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
		$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[3]));
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[4]));
		}
	}
}

bio.display();

var work = {};
var newJob = {
	"employer" : "Udacity",
	"title" : "Course Manager",
	"location" : "Mountain View",
	"dates" : "2015 - present",
	"description" : "Course Manager for Front-End Web Development Nanodegree."
};
work.jobs = [newJob];

work.display = function displayWork() {
	for (attribute in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[attribute].employer)
			+ HTMLworkTitle.replace("%data%", work.jobs[attribute].title));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[attribute].dates));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[attribute].location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[attribute].description));
	}
}

work.display();

function inName(string) {
	var words = string.split(" ");
	var secondHalf = words[1].toUpperCase();
	var firstHalf = words[0][0].toUpperCase() + words[0].slice(1);

	var finalString = firstHalf + " " + secondHalf;
	return finalString;
}

var projects = {};
var newProj1 = {
	"title" : "Front-End Nanodegre",
	"dates" : "2015 - present",
	"description" : "Started on the Front-End Web Development Nanodegreee my first week at Udacity.",
	"image" : "images/197x148.gif"
};

var newProj2 = {
	"title" : "JavaScript Basics",
	"dates" : "2015 - present",
	"description" : "Completed the JavaScript Basics to make progress in the Nanodegree.",
	"image" : "images/197x148.gif"
};

projects.projectSubmissions = [newProj1, newProj2];

projects.display = function() {
	for (proj in projects.projectSubmissions) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projectSubmissions[proj].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projectSubmissions[proj].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projectSubmissions[proj].description));
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projectSubmissions[proj].image));
	}
}

projects.display();

var education = {
	"schools" : [{
		"name" : "Cal Poly",
		"location" : "San Luis Obispo",
		"degree" : "Bachelor of Science",
		"majors" : ["Computer Science"],
		"dates" : "06/13/2015",
		"url" : "http://www.calpoly.edu"
	}],
	"onlineCourses" : [],
	display : function () {
		for (var index in education.schools) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", this.schools[index].name));
			$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[index].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[index].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[index].location));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[index].majors));
		}
	}
};

education.display();

$("#map-div").append(googleMap);