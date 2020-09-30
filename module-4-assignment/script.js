// *******************************
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

;(function (window) {
  var names = [
    'Yadav',
    'John',
    'Jena',
    'Jasson',
    'Paul',
    'Frank',
    'Larry',
    'Paula',
    'Laura',
    'Jim',
  ]
  //console.log(names[9]);
  for (var k = 0; k < names.length; k++) {
    var firstLetter = names[k].charAt(0)
    if (firstLetter === 'j' || firstLetter === 'J') {
      byeSpeaker.speak(names[k])
    } else {
      helloSpeaker.speak(names[k])
    }
  }
})(window)
