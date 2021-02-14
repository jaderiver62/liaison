const Employee = require('../lib/Employee.js');


test('create an employee object ', () => {

    const employee = new Employee('Sheila O\'Hare', 'sheila.esther@fauxmail.com');

    expect(employee.name).toBe('Sheila Esther');
    expect(employee.email).toBe(expect.any(Number));
    expect(employee.id).toBe(expect.any(String));

});

//lib\_mocks_\Employee.js