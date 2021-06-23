const Intern = require('../lib/intern');

test('creates an intern object', () => {
    const intern = new Intern('intern name', 'intern id', 'intern email', 'intern school')
    
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('check if the school function worked', () => {
    const intern = new Intern('intern name', 'intern id', 'intern email', 'intern school')

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('check if the correct role is returned', () => {
    const intern = new Intern('intern name', 'intern id', 'intern email', 'intern school')

    expect(intern.getRole()).toBe('Intern');
});

