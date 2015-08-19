//challenge 1
var customers =  ["Justin", "Ilias", "Nathan", "Camilo", "Vikash", "Adam", "Brianna", "Sarah", "Ali", "Jessie", "Cameron"]
var waitTime = 2;
customers.forEach(function callBack (element, index) {
	// in the loop

	console.log(element + ": " + waitTime + "minutes");
	waitTime = waitTime + 2;
	// in the loop
});
	//mine
var customers =  ["Justin", "Ilias", "Nathan", "Camilo", "Vikash", "Adam", "Brianna", "Sarah", "Ali", "Jessie", "Cameron"]
customers.forEach(function callBack (element, index) {
	console.log(element + ": " + (index+1)*2 + "minutes")
});

//challange 2
var prices = [3.00,4.00,10.00,2.25,3.01];
prices.map(function (element) {
	return (element - 0.01);
});

//2.1

//2.2
var prices = [3.00,4.00,10.00,2.25,3.01];
prices.map(function (element) {
	return (element * 1.05);
});

//challange 3
var birthDates = [1, 1, 2, 4, 7, 4, 12, 30,];
birthDates.filter(function(n) {
	var isEven = n%2 === 0;
	return isEven;
});
evenBirthdates = [2, 4, 4, 12, 30];

//challange 4

var earnings = [20, 25, 60, 20, 85, 20];
earnings.unshift(500)
earnings.reduce(function(current, next) {	
	return current + next;
});

//4.2

var earnings = [20, 25, 60, 20, 85, 20];
var count = {20};
earnings.forEach(function(n) {
	count[n] = count[n] + 1;
});



