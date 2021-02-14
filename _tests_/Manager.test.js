const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');


test('create a manager object ', () => {

    const manager = new Manager('Shirelle Monae', 'shirelle.m@fauxmail.com');

    expect(manager.name).toStrictEqual('smeg');// Shirelle Monae
    expect(manager.email).toStrictEqual('smeg');// shirelle.m@fauxmail.com

    expect(employee.id).toStrictEqual(expect.any(String));// Number

});

test("get manager's role ", ()=>{
 const manager = new Manager('Shirelle Monae', 'shirelle.m@fauxmail.com');

expect(manager.getRole).toStrictEqual('Employee');// Manager

});

test("get manager's office number ",()=>{
     const manager = new Manager('Shirelle Monae', 'shirelle.m@fauxmail.com');

expect(manager.getOfficeNumber).toStrictEqual('smeg');// (expect.any(Number)

})