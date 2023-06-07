/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
    },
};
