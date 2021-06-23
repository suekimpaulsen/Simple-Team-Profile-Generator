const { TestWatcher } = require('@jest/core');
const Manager = require('../lib/employee.js');

test('creates an manager object', () => {
    const manager = new Manager('manager name', 'manager id', 'manager email', 'manager office number')
    
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});

