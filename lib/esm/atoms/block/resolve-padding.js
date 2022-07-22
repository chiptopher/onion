export function resolvePadding(padding) {
    if (padding) {
        return "".concat(padding, "rem");
    }
    return '0rem';
}
