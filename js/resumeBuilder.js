var bio = {
    "name": "Irina Liapustina",
    "role": "QA analyst",
    "contacts":{
        "mobile": "551-441-9444",
        "email": "irina@gmail.com",
        "github": "irina198031",
        "twitter": "@irina",
        "location": ["Jersey city, NJ"]
    },
    "welcomeMessage": "Hello, I am Irina. Welcome to my resume",
    "skills": [
    "HTML", "CSS", "JavaScript", "jQuery", "Python"
    ],
    "bioPic": ["images/pict.jpg"]

}


var formattedName=HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);
var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var contacts = bio["contacts"];
var formattedMobile = HTMLmobile.replace("%data%",contacts["mobile"]);
var formattedEmail = HTMLemail.replace("%data%",contacts["email"]);
var formattedGithub = HTMLgithub.replace("%data%",contacts["github"]);
var formattedTwitter= HTMLtwitter.replace("%data%",contacts["twitter"]);
var formattedLocation = HTMLlocation.replace("%data%",contacts["location"]);
var contactList=formattedMobile+formattedEmail+formattedGithub+formattedTwitter+formattedLocation;

$("#topContacts").append(contactList);
$("#footerContacts").append(contactList);

var formattedImage = HTMLbioPic.replace("%data%",bio["bioPic"]);
var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio["welcomeMessage"]);
$("#header").append(formattedImage + formattedMessage);

if (bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace("%data%", bio.skills [0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills [1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills [2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills [3]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills [4]);
$("#skills").append(formattedSkill);
};

var work={
    "jobs": [
        {
            "employer": "Ve Interactive Ltd",
            "title": "QA Analyst",
            "location": ["London, UK"],
            "dates": "2014 March - August 2014",
            "description": "Tested E-commerce application, filed and analyzed issues for defect resolution, conducted UAT and cross-browser compatibility tesiting"

        },
        {
            "employer": "LASTH Inc.",
            "title": "QA consultant",
            "location": ["Los Altos, CA"],
            "dates": "2012 May - February 2014",
            "description": "Tested Enterprise-class Unified IP phone system, that combines integrated voice, data, and conferencing services into one efficient appliance"

        }
    ]
}

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer=HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle=formattedEmployer+formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation=HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDates=HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription=HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }

}

displayWork();

var projects={
    "projects": [
        {
            "title": "Project 1",
            "dates": "2014",
            "description": "Executed test cases for testing product functionality in different languages, debugged the defects with web Developer Tools",
            "images":["images/ve.png"]

        }
    ]
}

function displayProjects(){
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle=HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates=HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription=HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length>0) {
            for (image in projects.projects[project].images) {
                var formattedImage=HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);

            }
        }
    }
};

displayProjects();

var education = {
    "schools": [
        {
            "name": "Univercity of economics and management",
            "location": ["Novosibirsk, Russia"],
            "degree": "Masters",
            "majors": "Accounting",
            "dates": "2001",

        },
        {
            "name": "Computer school",
            "location": ["Mountain View, CA"],
            "degree": "Formal training",
            "majors": "Software Testing",
            "dates": "2012",

        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": 2014,
            "url": "https://www.udacity.com/course/nd001"

        }
    ]
}

function displayEducation(){
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedName);


        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);

    }


    for(courses in education.onlineCourses) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title);
        $(".education-entry:last").append(formattedTitle);

        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school);
        $(".education-entry:last").append(formattedSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[courses].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url);
        $(".education-entry:last").append(formattedURL);

    }
}

displayEducation();

$("#mapDiv").append(googleMap);