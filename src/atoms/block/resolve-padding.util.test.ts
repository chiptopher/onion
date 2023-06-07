import { resolvePadding } from './resolve-padding.util';
describe('resolvePadding', () => {
    test('Resolves padding classes', () => {
        const result = resolvePadding({
            paddingBottom: '0.5',
            paddingLeft: '0.75',
            paddingRight: '0.75',
            paddingTop: '0.5',
        });
        expect(result).toEqual({
            'padding-bottom--size-0_5': true,
            'padding-left--size-0_75': true,
            'padding-right--size-0_75': true,
            'padding-top--size-0_5': true,
        });
    });
});
