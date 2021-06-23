const Engineer = require('../lib/engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('engineer name', 'engineer id', 'engineer email', 'engineer github')
    
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('check if the github function worked', () => {
    const engineer = new Engineer('engineer name', 'engineer id', 'engineer email', 'engineer github')

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('check if the correct role is returned', () => {
    const engineer = new Engineer('engineer name', 'engineer id', 'engineer email', 'engineer github')

    expect(engineer.getRole()).toBe('Engineer');
});
