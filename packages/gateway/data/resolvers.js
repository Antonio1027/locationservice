const mockLocations = [
    {
        latitude: '12.564645656',
        longitude: '34.654645654',
        emai: 'REOUR8989DF890'
    },
    {
        latitude: '15.564645656',
        longitude: '23.654645654',
        emai: 'REOURHFRT89DF890'
    },
    {
        latitude: '11.564645656',
        longitude: '74.654645654',
        emai: 'REOUR8989DFGGFG'
    }
];

module.exports = {
    Query: {
        locations: () => mockLocations,
        location: (_, args) => mockLocations[0]
    },
    Mutation: {
        location: (_, args) => {
            mockLocations[0] = args;
            return args;
        }
    }
};