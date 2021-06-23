const Employee = require('../lib/employee')

test('creates an employee object', () => {
    const employee = new Employee('employee name', 'employee id', 'employee email')
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test('check if the getName function worked', () => {
    const employee = new Employee('employee name', 'employee id', 'employee email')

    expect(employee.getName()).toEqual(employee.name);
});

test('check if the getId function worked', () => {
    const employee = new Employee('employee name', 'employee id', 'employee email')

    expect(employee.getId()).toEqual(employee.id);
});
test('check if the getEmail function worked', () => {
    const employee = new Employee('employee name', 'employee id', 'employee email')

    expect(employee.getEmail()).toEqual(employee.email);
});

test('check if the correct role is returned', () => {
    const employee = new Employee('employee name', 'employee id', 'employee email')

    expect(employee.getRole()).toBe('Employee');
});

