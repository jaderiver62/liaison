const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');


test('create a manager object ', () => {

    const manager = new Manager('Shirelle Monae', 'shirelle.m@fauxmail.com', 'R34', '666-555-7777');

    expect(manager.name).toStrictEqual('Shirelle Monae');
    expect(manager.email).toStrictEqual('shirelle.m@fauxmail.com');

    expect(manager.id).toStrictEqual(expect.any(String));

});

test("get manager's role ", ()=>{
     const manager = new Manager('Shirelle Monae', 'shirelle.m@fauxmail.com', 'R34', '666-555-7777');


expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));

});

test("get manager's office number ",()=>{
    const manager = new Manager('Shirelle Monae', 'shirelle.m@fauxmail.com', 'R34', '666-555-7777');
expect(manager.getOfficeNumber()).toEqual(expect.stringContaining('666-555-7777'));
});