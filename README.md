# Team Profile Generator

A command-line application that generates a webpage displaying your team's basic information, including their emails and GitHub profiles.

## User Story

As a manager, I want to generate a webpage that displays my team's basic info so that I have quick access to their emails and GitHub profiles.

## Instructions

1. Create a command-line application that accepts user input using the provided starter code.

2. Create classes for each team member provided and export them. Ensure that all tests for these classes located in the _tests_ directory pass.

3. The first class is an Employee parent class with the following properties and methods:

    - name
    - id
    - email
    - getName()
    - getId()
    - getEmail()
    - getRole()—returns 'Employee'

4. The other three classes will extend Employee:

    - Manager: Inherits from Employee. In addition to Employee's properties and methods, Manager will also have the following:
        - officeNumber
        - getRole()—overridden to return 'Manager'

    - Engineer: Inherits from Employee. In addition to Employee's properties and methods, Engineer will also have the following:
        - github—GitHub username
        - getGithub()
        - getRole()—overridden to return 'Engineer'

    - Intern: Inherits from Employee. In addition to Employee's properties and methods, Intern will also have the following:
        - school
        - getSchool()
        - getRole()—overridden to return 'Intern'

5. Consider adding validation to ensure that user input is in the proper format.

6. Write code in index.js that uses Inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.

7. When the application starts, the user is prompted to enter the team manager's information:

    - Name
    - Employee ID
    - Email address
    - Office number

8. After entering the manager's information, the user is presented with a menu with the option to:

    - Add an engineer
    - Add an intern
    - Finish building the team

9. If the user selects the engineer option, they are prompted to enter the following information and then taken back to the menu:

    - Engineer's Name
    - ID
    - Email
    - GitHub username

10. If the user selects the intern option, they are prompted to enter the following information and then taken back to the menu:

    - Intern’s name
    - ID
    - Email
    - School

11. If the user decides to finish building their team, they exit the application, and the HTML is generated.

12. Call the render function (provided) and pass in an array containing all employee objects.

13. The render function generates and returns a block of HTML including templated div elements for each employee.

14. Create an HTML file using the HTML returned from the render function and write it to a file named team.html in the output folder.

You can use the provided variable outputPath to target this location.

## Technologies Used

- Node.js
- Inquirer.js
- Jest (for testing)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.