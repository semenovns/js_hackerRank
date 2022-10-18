const Singleton = require('../src/singleton.js');
test("Check whether only one instance of the class can be instantiated", ()=>
{
    let pirate1 = Singleton();
    let pirate2 = Singleton();
    expect(pirate1).toBe(pirate2);
});
