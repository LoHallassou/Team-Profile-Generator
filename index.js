const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

function manager() {
    inquirer
  .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your name as the manager?: '
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is your employee ID?: '
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your email?: '
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'What is your office numnber?: '
        },
    
    ] )
    .then((info) => {
        const manager = new Manager (info.managerName, info.managerID, info.managerEmail, info.managerOffice)

    })

}

function makeTeam() {
    inquirer
    .prompt([{
        type: "list",
        message: "What kind of employee would you like to employ?: ",
        name: "addEmployee",
        choices: ["Engineer", "Intern", "Done!"]
    }
    ]).then(function (choice) {
        switch (choice.addEmployee) {
            case "Engineer":
                addEngineer();
                break;
              case "Intern":
                addIntern();
                break;
                
            default:
                htmlPage();
        }
    })
}
manager();