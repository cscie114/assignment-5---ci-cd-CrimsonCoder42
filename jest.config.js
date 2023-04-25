module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
    },
    moduleNameMapper: {
        '^gatsby(.*)$': '<rootDir>/__mocks__/gatsby$1', // Add this line
        '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file-mock.js',
    },
    testPathIgnorePatterns: ['node_modules', '/\\.cache/', '<rootDir>.*/public'],
    transformIgnorePatterns: [
        'node_modules/(?!(gatsby|gatsby-script|gatsby-link|@babel/runtime)/)',
    ],
    globals: {
        __PATH_PREFIX__: '',
    },
    testEnvironmentOptions: {
        url: 'http://localhost',
    },
    setupFiles: ['<rootDir>/loadershim.js'],
    testEnvironment: 'jsdom',
};
