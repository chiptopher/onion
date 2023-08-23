import React from 'react';

import styles from './index.module.css';

import classNames from 'classnames';

import { resolveColor } from './color.util';
import { resolveCursor } from './cursor.util';
import { resolveListStyleType } from './list-style-type.util';
import { resolveRawStyle } from './raw-style';
import { resolveMargin, resolvePadding } from './resolve-padding.util';
import { resolveTextAlgin } from './text-align.util';
import { resolveTextDecoration } from './text-decoration.util';
import { BlockProps } from './types';
import { mapSpacingToClassNameString } from './util';

export const Block = React.forwardRef(
    (
        {
            tagName = 'div',
            className,
            color,
            colorTint,
            borderRadius,
            disabled,
            padding,
            paddingTop,
            paddingBottom,
            paddingRight,
            paddingLeft,
            margin,
            marginTop,
            marginBottom,
            marginRight,
            marginLeft,
            colorHover,
            colorTintHover,
            alignItems,
            textColor,
            textColorTint,
            justifyContent,
            display,
            flexDirection,
            fontWeight,
            cursor,
            gap,
            textDecoration,
            listStyleType,
            textAlign,
            verticalAlign,
            border,
            borderTop,
            borderLeft,
            borderRight,
            borderBottom,
            style,
            children,
            type,
            ...rest
        }: BlockProps,
        ref: any
    ) => {
        const cn = classNames(styles['onion-block'], className, {
            [styles['border-radius']]: borderRadius,
            [styles['display--flex']]: display === 'flex',
            [styles['display--none']]: display === 'none',
            [styles['justify-content--flex-start']]:
                justifyContent === 'flex-start',
            [styles['justify-content--flex-end']]:
                justifyContent === 'flex-end',
            [styles['justify-content--center']]: justifyContent === 'center',
            [styles['justify-content--space-between']]:
                justifyContent === 'space-between',
            [styles['align-items--flex-start']]: alignItems === 'flex-start',
            [styles['align-items--flex-end']]: alignItems === 'flex-end',
            [styles['align-items--center']]: alignItems === 'center',
            [styles['align-items--space-between']]:
                alignItems === 'space-between',
            [styles['flex-direction--row']]: flexDirection === 'row',
            [styles['flex-direction--column']]: flexDirection === 'column',
            [styles['flex-direction--row-reverse']]:
                flexDirection === 'row-reverse',
            [styles['flex-direction--column-reverse']]:
                flexDirection === 'column-reverse',
            [styles[`background-color--${color}--${colorTint || 'regular'}`]]:
                color,
            [styles['font-weight--normal']]: fontWeight === 'normal',
            [styles['font-weight--bold']]: fontWeight === 'bold',
            [styles[`gap--${mapSpacingToClassNameString(gap || 'auto')}`]]:
                gap !== undefined,
            [styles['vertical-align--top']]: verticalAlign === 'top',
            ...resolveCursor({ cursor }),
            ...resolveTextDecoration({ textDecoration }),
            ...resolveListStyleType({ listStyleType }),
            ...resolveTextAlgin({ textAlign }),
            ...resolveColor({
                color,
                colorHover,
                colorTint,
                colorTintHover,
                textColor,
                textColorTint,
            }),
            ...resolvePadding({
                padding,
                paddingBottom,
                paddingLeft,
                paddingRight,
                paddingTop,
            }),
            ...resolveMargin({
                margin,
                marginBottom,
                marginLeft,
                marginRight,
                marginTop,
            }),
        });
        const finalProps = {
            ...rest,
            children,
            className: cn,
            disabled: disabled,
            ref,
            style: resolveRawStyle({
                border,
                borderBottom,
                borderLeft,
                borderRight,
                borderTop,
                style,
            }),
        };
        switch (tagName) {
            case 'p':
                return <p {...finalProps} />;
            case 'h1':
                return <h1 {...finalProps} />;
            case 'h2':
                return <h2 {...finalProps} />;
            case 'h3':
                return <h3 {...finalProps} />;
            case 'h4':
                return <h4 {...finalProps} />;
            case 'h5':
                return <h5 {...finalProps} />;
            case 'h6':
                return <h6 {...finalProps} />;
            case 'label':
                return <label {...finalProps} />;
            case 'span':
                return <span {...finalProps} />;
            case 'div':
                return <div {...finalProps} />;
            case 'header':
                return <header {...finalProps} />;
            case 'a':
                return <a {...finalProps} />;
            case 'tr':
                return <tr {...finalProps} />;
            case 'th':
                return <th {...finalProps} />;
            case 'td':
                return <td {...finalProps} />;
            case 'thead':
                return <thead {...finalProps} />;
            case 'tbody':
                return <tbody {...finalProps} />;
            case 'button':
                return <button {...finalProps} type={type} />;
            case 'ol':
                return <ol {...finalProps} />;
            case 'ul':
                return <ul {...finalProps} />;
            case 'nav':
                return <nav {...finalProps} />;
            case 'li':
                return <li {...finalProps} />;
            case 'table':
                return <table {...finalProps} />;
            case 'summary':
                return <summary {...finalProps} />;
            case 'details':
                return <details {...finalProps} />;
            case 'pre':
                return <pre {...finalProps} />;
            case 'code':
                return <code {...finalProps} />;
        }
    }
);

Block.displayName = 'Block';
