/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var formattedName = HTMLheaderName.replace("%data%", "Joseph Grant Plaster");
 var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Web Developer");

var bio = {
	"name" : "Joseph Grant Plaster",
	"role" : "Front-End Web Developer",
	"contactInfo" : {
		"email" : "grant.plaster@udacity.com",
		"phone" : "336-430-9456"
	},
	"contacts" : {
		"location" : "Sunnyvale"
	},
	"pictureURL" : "images/fry.jpg",
	"welcomeMessage" : "Hello, my name is Grant, and I work on the Front-End team at Udacity",
	"skills" : ["Computer Programming in C and Java", "JavaScript", "People", "Communication", "Leadership"]
}

var work = {};
var newJob = {
	"position" : "Course Manager",
	"employer" : "Udacity",
	"yearsWorked" : "2015 - present",
	"city" : "Mountain View",
	"description" : "Course Manager for Front-End Web Development Nanodegree."
};
work.jobs = [newJob];

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $("#header").append(HTMLemail.replace("%data%", bio.contactInfo.email));
 $("#header").append(HTMLmobile.replace("%data%", bio.contactInfo.phone));
 $("#header").append(HTMLlocation.replace("%data%", work.jobs[0].city));
 $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
 $("#main").append(work["position"]);
 $("#header").prepend(HTMLbioPic.replace("%data%", bio.pictureURL));

 if (bio.skills.length > 0) {
 	$("#header").append(HTMLskillsStart);
 	$("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
 	$("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
 	$("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));
 	$("#skills").append(HTMLskills.replace("%data%", bio.skills[3]));
 	$("#skills").append(HTMLskills.replace("%data%", bio.skills[4]));
 }

function displayWork() {
	for (attribute in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[attribute].employer)
			+ HTMLworkTitle.replace("%data%", work.jobs[attribute].position));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[attribute].yearsWorked));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[attribute].city));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[attribute].description));
	}
}

displayWork();

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
	"dates" : "2015-present",
	"description" : "Started on the Front-End Web Development Nanodegreee my first week at Udacity.",
	"image" : "images/197x148.gif"
};

var newProj2 = {
	"title" : "JavaScript Basics",
	"dates" : "2015-present",
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
		"location" : "San Luis Obispo"
	}],
	"cities" : ["San Luis Obispo"],
	"majors" : ["Computer Science"],
	"minors" : ["None"],
	"gradYears" : [2015]
};
education["yearsAttended"] = ["2011 - 2015"];

$("#education").append(HTMLschoolStart);
$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[0].name));
$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", "Bachelor of Science"));
$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.yearsAttended[0]));
$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.cities[0]));
$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.majors[0]));

$("#map-div").append(googleMap);