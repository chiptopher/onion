export function resolveBorderSpacing(value) {
    var topValue = value.all || '0';
    var bottom = value.all || '0';
    var left = value.all || '0';
    var right = value.all || '0';
    if (value.top) {
        topValue = value.top;
    }
    if (value.bottom) {
        bottom = value.bottom;
    }
    if (value.left) {
        left = value.left;
    }
    if (value.right) {
        right = value.right;
    }
    return "".concat(topValue, "rem ").concat(right, "rem ").concat(bottom, "rem ").concat(left, "rem");
}
