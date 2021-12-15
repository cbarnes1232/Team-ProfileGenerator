const employee = require("./employee");

class manager extends employee {
    constructor(officeNumber,name,id,email) {
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = manager;