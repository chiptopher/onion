export function resolveColorValue(value, option) {
    if (option === void 0) { option = 'regular'; }
    if (typeof value === 'string') {
        return value;
    }
    else {
        return value[option];
    }
}
