class Employee {

    constructor(name = '', email = '') {

        this.name = name;
        this.email = email;

        this.id = Math.floor(Math.random() * 94 + 95);
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}
module.exports = Employee;