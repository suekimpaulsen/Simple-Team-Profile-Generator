const { TestWatcher } = require('@jest/core');
const Manager = require('../lib/manager');

test('creates an manager object', () => {
    const manager = new Manager('manager name', 'manager id', 'manager email', 'manager office number')
    
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});

test('check if the office number function worked', () => {
    const manager = new Manager('manager name', 'manager id', 'manager email', 'manager office number')

    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
});

test('check if the correct role is returned', () => {
    const manager = new Manager('manager name', 'manager id', 'manager email', 'manager office number')

    expect(manager.getRole()).toBe('Manager');
});

