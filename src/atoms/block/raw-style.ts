import { BlockProps, BorderProps } from './types';

type RawProps = BorderProps & Pick<BlockProps, 'width'>;

export function resolveRawStyle({
    style,
    ...rest
}: Pick<BlockProps, 'style'> & RawProps) {
    let final = {
        ...style,
    };
    if (rest.border) {
        final = { ...final, border: rest.border };
    }
    if (rest.borderTop) {
        final = { ...final, borderTop: rest.borderTop };
    }
    if (rest.borderBottom) {
        final = { ...final, borderBottom: rest.borderBottom };
    }
    if (rest.borderLeft) {
        final = { ...final, borderLeft: rest.borderLeft };
    }
    if (rest.borderRight) {
        final = { ...final, borderRight: rest.borderRight };
    }

    return final;
}
