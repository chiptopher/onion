export function isLessThan(px: number) {
    return `@media screen and (max-width: ${px}px)`;
}

export function isGreaterThan(px: number) {
    return `@media screen and (min-width: ${px}px)`;
}
