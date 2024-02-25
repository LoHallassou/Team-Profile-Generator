const Employee = require("./Employee");

class Intern extends Employee {
    
    super(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
}