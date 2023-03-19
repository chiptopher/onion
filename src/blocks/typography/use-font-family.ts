import { useTheme } from '../../theme';
import { TextStlye } from './text';

type StyleMapping = {
    [K in TextStlye]: string;
};

const styleMapping: StyleMapping = {
    body: 'body',
    caption: 'caption',
    header: 'heading',
    label: 'label',
    'larger-body': 'largerBody',
    subheader: 'subheader',
    title: 'title',
};

export function useFontFamily(
    given: string | undefined,
    style: TextStlye
): string {
    const theme = useTheme();
    const typographyOverrides = theme.components?.typography;
    const fontFamily =
        given ||
        (typographyOverrides &&
            typographyOverrides[styleMapping[style]]?.fontFamily) ||
        "'Nunito', sans-serif";

    return fontFamily;
}
