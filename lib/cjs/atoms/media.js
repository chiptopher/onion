"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLessThan = void 0;
function isLessThan(px) {
    return "@media screen and (max-width: ".concat(px, "px)");
}
exports.isLessThan = isLessThan;
