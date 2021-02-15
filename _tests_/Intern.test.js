const Employee = require('../lib/Employee.js');
const Intern = require('../lib/Intern.js');


test('create an intern object ', () => {

    const intern = new Intern('Shirelle Monae', 'shirelle.m@fauxmail.com', 'R34', 'City College');

    expect(intern.name).toStrictEqual('Shirelle Monae');
    expect(intern.email).toStrictEqual('shirelle.m@fauxmail.com');

    expect(intern.id).toStrictEqual(expect.any(String));

});

test("get intern's role ", () => {
    const intern = new Intern('Shirelle Monae', 'shirelle.m@fauxmail.com', 'R34', 'City College');


    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));

});

test("get intern's school ", () => {
    const intern = new Intern('Shirelle Monae', 'shirelle.m@fauxmail.com', 'R34', 'City College');
    expect(intern.getSchool()).toEqual(expect.stringContaining('City College'));
});