//Javascript Primitives//
//Question 1//
var friends = [
                'Moe', 
                'Larry', 
                'Curly',
                'Jane',
                'Emma',
                'Elizabeth',
                'Elinor',
                'Mary',
                'Darcy',
                'Grey',
                'Lydia',
                'Harriet'
              ];
friends[friends.length - 1];

//Question 1.2//
var friends = [
                'Moe', 
                'Larry', 
                'Curly',
                'Jane',
                'Emma',
                'Elizabeth',
                'Elinor',
                'Mary',
                'Darcy',
                'Grey',
                'Lydia',
                'Harriet'
              ];
    friends.push('sakina');
    friends.sort();
//Question 1.23//
//Question 2//
var friends = [
                'Moe', 
                'Larry', 
                'Curly',
                'Jane',
                'Emma',
                'Elizabeth',
                'Elinor',
                'Mary',
                'Darcy',
                'Grey',
                'Lydia',
                'Harriet'
              ];
    friends.sort();

//Question 3//
var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];
     newAges = ages.sort();
     newAges.length;
     newAges[15];

//Question 4// didn't work - there is an extra step becouse it is a string not an aray 
var friends = ['Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet'];
friends.sort();

//Question 5// didn't work - extra step string not aray 
var friends = ['Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet'];
friends.reverse();

//Question 6//
var myFriends = [
                  'Rickon',
                  'Meera',
                  'Hodor',
                  'Jojen',
                  'Osha',
                  'Rickard',
                  'Maester',
                  'Rodrik',
                  'Jory',
                  'Septa',
                  'Jon'
                ];

var yourFriends = [
                    'Bilbo',
                    'Boromir',
                    'Elrond',
                    'Faramir',
                    'Frodo',
                    'Gandalf',
                    'Legolas',
                    'Pippin'
                  ];
    var combinedFriends = myFriends.concat(yourFriends);
    combinedFriends.sort();

//Question 7//
var foods = [
              'Popcorn',
              'Potato chips',
              'Shrimp',
              'Chicken rice',
              'Poutine',
              'Tacos',
              'Toast',
              'French Toast',
              'Crab',
              'Pho',
              'Lasagna',
              'Brownie',
              'Lobster',
              'Donuts',
              'Ice cream',
              'Hamburger',
              'Sushi',
              'Chocolate',
              'Pizza'
            ];
    foods.indexOf('Pho');

//Question 8//
var foods = [
              'Popcorn',
              'Potato chips',
              'Shrimp',
              'Chicken rice',
              'Poutine',
              'Tacos',
              'Toast',
              'French Toast',
              'Crab',
              'Pho',
              'Lasagna',
              'Brownie',
              'Lobster',
              'Donuts',
              'Ice cream',
              'Hamburger',
              'Sushi',
              'Chocolate',
              'Pizza'
            ];
    foods.indexOf('Donuts');
    foods.splice(13,1);

//Question 9//
var foods = [
              'Popcorn',
              'Potato chips',
              'Shrimp',
              'Chicken rice',
              'Poutine',
              'Tacos',
              'Toast',
              'French Toast',
              'Crab',
              'Pho',
              'Lasagna',
              'Brownie',
              'Lobster',
              'Donuts',
              'Ice cream',
              'Hamburger',
              'Sushi',
              'Chocolate',
              'Pizza'
            ];
    foods.splice(4,6);

//Question 10// ?????
var ages = { "Moe" : 18,
  'Larry' : 19,
  'Curly' : 20,
  'Jane' : 20,
  'Emma' : 21,
  'Elizabeth' : 18,
  'Elinor' : 23,
  'Mary' : 25,
  'Darcy' : 24,
  'Grey' : 18,
  'Lydia' : 24,
  'Harriet' : 18}

//Question 1// ??????
var contacts = {"First Name" : "John",
"Last Name" : "Doe",
"Age" : "36",
"Address" : "1234",
"Street" : "Park St."}

//Question 2// something is wrong with last two lines 
var contacts = {
FirstName : ['Moe', 'Larry', 'Curly', 'Jane', 'Emma', 'Elizabeth', 'Elinor', 'Mary', 'Darcy', 'Grey', 'Lydia', 'Harriet'],
LastName : ['Doe', 'Doe', 'Doe', 'Doe', 'Doe', 'Doe', 'Doe', 'Doe', 'Doe', 'Doe', 'Doe', 'Doe'],
Age : ['31', '36', '36', '32', '34', '36', '35', '31', '31', '32', '34', '30', '32'],
Address : ['1234 Park st.', '1234 Spark st.', '1239 Park st.', '1239 Spark st.', '1235 Spark st.', '1234 Park st.', '1230 Park st.', '1231 Park st.'
'1224 Park st.', '1214 Park st.', '1294 Park st.', '1324 Park st.']
};

//intro Control flow//
//For-Loop//
// 1 //
var loopVal;
var endVal = 6;
for (loopVal = 0; loopVal < endVal; loopVal++)
console.log(loopVal);

// 2 //
var loopVal;
var endVal = -1;
for (loopVal = 5; loopVal > endVal; loopVal--)
console.log(loopVal);

// 3 // i didn't write this still trying to understand it 
function verse(bottles) {
  return howMany(bottles) + takeOneDown(bottles);
}

function sing(start, end) {
  end = end || 0;
  var verses = [];

  for (var i = start; i >= end; i--) {
    verses.push(verse(i));
  }

  return verses.join("\n");
}

function howMany(bottles) {
  pluralized = pluralize(bottles);

  return pluralized + "of beer on the wall, " +
    pluralized.toLowerCase() + "of beer.\n";
}

function takeOneDown(bottles) {
  if (bottles === 0) {
    return goToTheStore();
  } else {
    return drinkUp(bottles);
  }
}

function goToTheStore() {
  return "Go to the store and buy some more, " +
    pluralize(99) + "of beer on the wall.\n";
}

function drinkUp(bottles) {
  pluralized = pluralize(bottles - 1);
  article = takeWhat(bottles);

  return "Take" + article + "down and pass it around, " +
    pluralized.toLowerCase() + "of beer on the wall.\n";
}

function pluralize(bottles) {
  if (bottles > 1) {
    return bottles + " bottles ";
  } else if (bottles === 1) {
    return bottles + " bottle ";
  } else {
    return "No more bottles ";
  }
}

function takeWhat(bottles) {
  if (bottles === 1) {
    return " it ";
  } else {
    return " one ";
  }
}

module.exports = {
  verse: verse,
  sing: sing
};
// 4 //
var shopping = ['"bread"', '"oranges"', '"milk"', '"eggs"'];
for (var index = 0; index < shopping.length; index = index + 1) {
  console.log(shopping[index]);
}

// 4.1 //
var shopping = ['"1. bread"', '"2. oranges"', '"3. milk"', '"4. eggs"'];
for (var index = 0; index < shopping.length; index = index + 1) {
  console.log(shopping[index]);
}

//while loop//
// 1 //
var whatQuest = prompt("What is your Quest?");
    while (typeof(whatQuest) == "undefined") {
 prompt("PLease enter a Quest.");
}
console.log(whatQuest);

// 2 // i dont know how to set it for just being a number value 
var howOld = prompt("How old are you?");
    while (typeof(howOld) == "undefined") {
 prompt("PLease enter a age.");
}
console.log(howOld);

// 3 //
function getInput() {
    console.log("How old are you?");
    return prompt();
}
    while (typeof(howOld) == "undefined") {
 prompt("PLease enter a age.");
}
{
var winner;
    if(guess > howOld) {
        player = "too high";
    } 
    else if (guess < howOld) {
        player = "too low";
    } 
    else (guess = howOld) {
        player = "winner, Game is done";
    }
    return winner;
}
console.log(howOld);

