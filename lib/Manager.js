const Employee = require('./Employee.js');

class Manager extends Employee {

    constructor(name, email, officeNumber = '') {
        super(name, email, id);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    get officeNumber() {
        return officeNumber;
    }
}
module.exports = Manager;