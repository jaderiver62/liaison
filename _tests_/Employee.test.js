const Employee = require('../lib/Employee.js');


test('create an employee object ', () => {

    const employee = new Employee('Sheila Dolores', 'sheila.esther@fauxmail.com', 'R34');

    expect(employee.name).toStrictEqual('Sheila Dolores');
    expect(employee.email).toStrictEqual(expect.any(String));

    expect(employee.id).toStrictEqual('R34');

});

test('gets employee\'s name value', () => {
    const employee = new Employee('Sheila Dolores', 'sheila.esther@fauxmail.com', 'R34');

    expect(employee.getName()).toEqual(expect.stringContaining('Dolores'));


});

test('gets employee\'s ID', () => {
    const employee = new Employee('Sheila Dolores', 'sheila.esther@fauxmail.com', 'R34');
    expect(employee.getId()).toStrictEqual(expect.stringContaining('R34'));

});



test('gets employee\'s Role', () => {
    const employee = new Employee('Sheila Dolores', 'sheila.esther@fauxmail.com', 'R34');
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));

});
