import { useTheme } from '../../theme';
import { TextStlye } from './text';

export function useFontFamily(
    given: string | undefined,
    style: TextStlye
): string {
    if (given) return given;
    const theme = useTheme();
    const typographyOverrides = theme.components?.typography;
    if (typographyOverrides) {
        const { body, caption, heading, label, largerBody, subheader, title } =
            typographyOverrides;
        switch (style) {
            case 'title':
                if (title?.fontFamily) return title.fontFamily;
                break;
            case 'caption':
                if (caption?.fontFamily) return caption.fontFamily;
                break;
            case 'body':
                if (body?.fontFamily) return body.fontFamily;
                break;
            case 'label':
                if (label?.fontFamily) return label.fontFamily;
                break;
            case 'subheader':
                if (subheader?.fontFamily) return subheader.fontFamily;
                break;
            case 'header':
                if (heading?.fontFamily) return heading.fontFamily;
                break;
            case 'larger-body':
                if (largerBody?.fontFamily) return largerBody.fontFamily;
                break;
        }
    }
    return "'Nunito', sans-serif";
}
