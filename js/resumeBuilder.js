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

var education = {
	"schools" : ["Cal Poly"],
	"cities" : ["San Luis Obispo"],
	"majors" : ["Computer Science"],
	"minors" : ["None"],
	"gradYears" : [2015]
};
education["name"] = "Cal Poly";
education["yearsAttended"] = 4;
education["city"] = "San Luis Obispo";

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $("#main").append(bio);
 $("#main").append(work["position"]);
 $("#main").append(education.name);

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

	$("#header").prepend(HTMLbioPic.replace("%data%", bio.pictureURL));
}

displayWork();

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});