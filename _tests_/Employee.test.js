const Employee = require('../lib/Employee.js');


test('create an employee object ', () => {

    const employee = new Employee('Sheila O\'Hare', 'sheila.esther@fauxmail.com');

    expect(employee.name).toBe('Sheila Esther');
    expect(employee.email).toBe(expect.any(Number));
    expect(employee.id).toBe(expect.any(String));

});

test('gets employee\'s name value', () => {
    const employee = new Employee('Sheila o\'Hare', 'sheila.esther@fauxmail.com');

    expect(employee.getName()).toBe(expect.any(Array));


});

test('gets employee\'s ID', () => {
    const employee = new Employee('Sheila o\'Hare', 'sheila.esther@fauxmail.com');
    expect(employee.getId()).toBe(expect.any(String));

});

test('gets employee\'s ID', () => {
    const employee = new Employee('Sheila o\'Hare', 'sheila.esther@fauxmail.com');
    expect(employee.getEmail()).toBe(expect.any(Number));

});

test('gets employee\'s ID', () => {
    const employee = new Employee('Sheila o\'Hare', 'sheila.esther@fauxmail.com');
    expect(employee.getRole()).toBe(expect.any(Number));

});

//lib\_mocks_\Employee.js