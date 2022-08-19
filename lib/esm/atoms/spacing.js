export var spacingBaseSizeInRems = 0.5;
/*
 * @deprecated
 */
export var block = function (input) {
    if (typeof input === 'string') {
        return "".concat(parseInt(input) * spacingBaseSizeInRems, "rem");
    }
    return "".concat(input * spacingBaseSizeInRems, "rem");
};
