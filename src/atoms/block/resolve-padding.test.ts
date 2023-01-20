import { Breakpoints } from '../breakpoints';
import { isGreaterThan, isLessThan } from '../media';
import { evaluateValue } from './resolve-padding';

const breakpoints: Breakpoints = {
    desktop: {
        lower: 5,
        upper: 6,
    },
    mobile: {
        lower: 1,
        upper: 2,
    },
    tablet: {
        lower: 3,
        upper: 4,
    },
    wide: { lower: 7, upper: 8 },
};

describe('evaluateValue', () => {
    test('resolves raw number', () => {
        const output = evaluateValue({
            breakpoints: breakpoints,
            direction: 'top',
            type: 'padding',
            value: '0.25',
        });

        expect(output).toEqual(`
padding-top: 0.25rem;
`);
    });

    test('resolved a responsive value', () => {
        const output = evaluateValue({
            breakpoints: breakpoints,
            direction: 'top',
            type: 'padding',
            value: { desktop: '2', mobile: '1', tablet: '0.25', wide: '4' },
        });

        expect(output).toEqual(`
padding-top: 2rem;
${isLessThan(breakpoints.mobile.upper)} {
    padding-top: 1rem;
}
${isLessThan(breakpoints.tablet.upper)} {
    padding-top: 0.25rem;
}
${isGreaterThan(breakpoints.wide.lower)} {
    padding-top: 4rem;
}
`);
    });
});
