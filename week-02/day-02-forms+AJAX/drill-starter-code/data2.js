
	// var courseName = data["course"];
	// console.log(courseName);
	// $("h2").append("<h2>" + courseName + "</h2>")

	// var studentId = data.students[0].id;
	// console.log(studentId);

	// var studentsFirstName = data.students[0].first_name;
	// console.log(studentsFirstName);

	// var studentsLastName = data.students[0].last_name;
	// console.log(studentsLastName);
	 
	// var studentsUsername = data.students[0].github_username;
	// console.log(studentsUsername);

	// var studentGithub = data.students.map (function (element) {
	// 	return element.github_username;
		
	// });
	// console.log(studentGithub);

	// var allInfo = 

	// data.students.length;

	function buildGithubLink(student) {
		var gitUser = student["github_username"];
		var firstName = student["first_name"];
		var lastName = student["last_name"];
		var fullName = firstName + " " + lastName

		var gitLink = '<a href="https://github.com/' + gitUser + '>' + fullName + '</a><br>';

		return gitLink;
	};
	function renderGithubLinks(students) {
		students.forEach(function (student) {
			console.log(buildGithubLink(student));
			var anchor = buildGithubLink(student);
			$("body").append(anchor);
		});

	};
	
	renderGithubLinks(data.students);


//"a""p""p""l""e"

//apple

// var string = ("apple");
// var placeHolder = {};

// function countLetter(string) {

// 	var newString = string.split("");

// 		newString.forEach(function (count) {
// 			console.log(count);
// 			if (count !== " ") {
// 				var letter = placeHolder[count];
				
// 			} else if (count === undefined ) {
// 				placeHolder[count] = 1;
				
// 			} else {
// 				placeholder[count] = letter + 1;
// 			}
// 		});


// };


// countLetter("apple")

var carnation = {
	color: "purple",
	petals: 30,
	smellsPretty: true,
}
var num = carnation.petals
for(i=num; i<0; i--) {
	if (i %2) {
		console.log("loves me");
	} else {
		console.log("loves me not");
	}
}















