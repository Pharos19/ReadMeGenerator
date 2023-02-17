var fileGenerator = require("./fileGenerator");
var fs = require("fs");
var inquirer = require('inquirer');

// Questions to ask the user //
let Questions = [
    {
        type: "input",
        message: "What is the title of your respository?",
        name: "title"
    },{
        type: "input",
        message: "Please give your logo information.",
        name: "logo"
    },{
        
    }
]