import React from 'react';
import { Link } from '../../blocks/link';
import { Body } from '../../blocks/typography/body';
export var BreadcrumbItem = function (_a) {
    var children = _a.children;
    return (React.createElement(Body, { tagName: "span" },
        React.createElement(Link, { color: "primary", tagName: "span" }, children)));
};
BreadcrumbItem.displayName = 'Breadcrumb.Item';
