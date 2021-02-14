const Employee = require('../lib/Employee.js');


test('create an employee object ', () => {

    const employee = new Employee('Sheila Dolores', 'sheila.esther@fauxmail.com');

    expect(employee.name).toStrictEqual('Sheila Dolores');
    expect(employee.email).toStrictEqual(expect.any(String));

    expect(employee.id).toStrictEqual(expect.any(Number));

});

test('gets employee\'s name value', () => {
    const employee = new Employee('Sheila Dolores', 'sheila.esther@fauxmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Dolores'));


});

test('gets employee\'s ID', () => {
    const employee = new Employee('Sheila Dolores', 'sheila.esther@fauxmail.com');
    expect(employee.getId()).toStrictEqual(expect.any(Number));

});



test('gets employee\'s Role', () => {
    const employee = new Employee('Sheila Dolores', 'sheila.esther@fauxmail.com');
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));

});

//lib\_mocks_\Employee.js