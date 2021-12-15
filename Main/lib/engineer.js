const employee = require("./employee");

class engineer extends employee {
    constructor(name,email,github,id) {
        super(id,name,email) ;
            this.github = github;
        }

    getRole() {
        return "engineer";
    }
    getGithub() {
        return this.github;
    }
}

module.exports = engineer;