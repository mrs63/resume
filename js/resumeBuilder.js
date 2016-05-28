var bio = {"name": "Manvi Sethi","role": "Novartis Intern","contacts": {"email": "manvisethi02@gmail.com","location": "New Jersey"},"picture": "images/Manvi.jpg","skills": ["Java", "Linux", "HTML", "CSS", "Javascript", "PHP", "Microsoft Suite", "Quick Books", "MAC OS 10", "Windows 10"]
	};

var work = {
	"jobs": [
		{
			"employer": "Novartis","title": "Global Decision Support Intern","location": "East Hanover, NJ","datesWorked": "Jan 2016-Present","description": "I handle the international mailbox for the company. I also look after the timecards of contract employees."},
		{
			"employer": "Varsity Tutors","title": "Private and Distant Learning Tutor","location": "New York, NY","datesWorked": "Apr 2015 - Present","description": "I tutor students from kindergarten to college. Some subjects are statewide exams, SAT preparation, and math- up to and including calculus. I also teach business and the sciences."},
		{
			"employer": "Collabera","title": "Technical Recruiter Intern","location": "Morristown, NJ","datesWorked": "Jun 2015 - Aug 2015","description": "I assisted the Lead Recruiter by making initial e-mail contact with potential candidates. Initial contacts also led to phone interviews. I screened over 100 resumes per day."}
	]
};

var education = {
	"schools": [
		{ "name": "New Jersey Institute of Technology","datesAttended": "2015 - Present","location": "Newark, NJ","degree": "Bachelor of Science","major": "Information Technology",},
		{ "name": "Rutgers University","datesAttended": "2012 - 2014","location": "New Brunswick, NJ","degree": "Bachelor of Arts","major": "Neuroscience and Business",}
	]
};

var projects = {
	"projects": [
		{
			"title": "SMT","datesWorked": "Sep 2015 - Dec 2015","description": "Created a multiple choice music-quiz app with different genres in xcode for a class project. We uploaded the application for the Android Market, check it out!","images": ["images/SMT.png", "images/SMT2.png"],"url": "https://play.google.com/store/apps/details?id=com.yangfan&hl=en"},
		{
			"title": "Grades Email","datesWorked": "Jan 2016 - May 2016","description": "A project from my Internet Applications class at NJIT which involved using HTML, PHP, Javascript, and mySQL database. It takes information from the user and it sends an email to a mailinator account with information from the database table.","images": ["images/form.png"],"url": "https://web.njit.edu/~mrs63/download/Assignment%201/MainPage.html"},
		{
			"title": "My Interactive Resume","datesWorked": "May 2016 - May 2016","description": "Created an interactive resume using Javascript for Udacity","images": ["images/resume.png"],"url": "https://github.com/mrs63/resume.git"}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedContactInfo = [];

formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}
for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}

function displayWork() {

	if(work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);
		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
}
displayWork();

projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}
projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}	
	}
}
education.display();

$("#mapDiv").append(googleMap);