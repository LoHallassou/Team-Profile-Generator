const Employee = require("./Employee");

class Engineer extends Employee {
    
    super(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
}