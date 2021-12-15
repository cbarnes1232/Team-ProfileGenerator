const employee = require("./employee");

class intern extends employee {
    constructor(school,name,id,email) {
        super(name,id,email);
            this.school = school;
        }
    
    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
    }


module.exports = intern;