"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromary = void 0;
function fromary(source, length) {
    if (length.some(x => x <= 0)) {
        return;
    }
    const product = length.map(() => 1);
    for (let p = product.length - 2; p >= 0; p--) {
        product[p] = length[p + 1] * product[p + 1];
    }
    return {
        source,
        length: length.concat(),
        product,
        get(...index) {
            return source[index.map((i, p) => product[p] * i).reduce((p, c) => p + c)];
        },
        set(put, ...index) {
            const p = index.map((i, p) => product[p] * i).reduce((p, c) => p + c);
            source[p] = put;
            return p;
        },
    };
}
exports.fromary = fromary;
