const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');


test('create an engineer object ', () => {

    const engineer = new Engineer('Shirelle Monae', 'shirelle.m@fauxmail.com', 'R34', 'smonae45');

    expect(engineer.name).toStrictEqual('Shirelle Monae');
    expect(engineer.email).toStrictEqual('shirelle.m@fauxmail.com');

    expect(engineer.id).toStrictEqual(expect.any(String));

});

test("get engineer's role ", ()=>{
     const engineer = new Engineer('Shirelle Monae', 'shirelle.m@fauxmail.com', 'R34',  'smonae45');


expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));

});

test("get engineer's GitHub username ",()=>{
    const engineer = new Engineer('Shirelle Monae', 'shirelle.m@fauxmail.com', 'R34', 'smonae45');
expect(engineer.getGitHub()).toEqual(expect.stringContaining('smonae45'));
});