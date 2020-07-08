import nivedan from 'nivedan';

nivedan.defaultConfig({
    baseURL: 'https://icanhazdadjoke.com/',
    dataOnly: true,
    headers: {
        common: { 'Accept': 'application/json' },
    },
    timeout: 0,
});

export default nivedan;