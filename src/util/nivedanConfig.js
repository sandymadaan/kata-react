import nivedan from 'nivedan';

nivedan.defaultConfig({
    baseURL: 'http://api.kata.local/api/v1',
    dataOnly: true,
    headers: {
        common: { 'Accept': 'application/json' },
    },
    timeout: 0,
});

export default nivedan;