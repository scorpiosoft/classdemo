// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer");

// Created a series of questions
inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Your Name?"
  },
  {
    type: "checkbox",
    name: "checkbox",
    message: "What did you bring me?",
    choices: ["water", "pie", "cake", "cookies"]
  },
  {
    type: "list",
    name: "list",
    message: "What is your purpose?",
    choices: ["to enter", "to pass", "to win"]
  },
  {
    type: "confirm",
    name: "confirm",
    message: "Are You Ready?"
  },
  {
    type: "password",
    name: "sesame",
    message: "What's the magic password."
  }
]).then(function(user)
{
  if (user.sesame === "sesame")
    for (key in user) { if (key !== "sesame") console.log(user[key]); }
  else
    console.log("You lose, I'm gonna eat you now!");
});
