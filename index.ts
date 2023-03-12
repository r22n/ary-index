

export type ArrayIndex<T> = {
    readonly source: T[];
    readonly length: readonly number[];
    readonly product: readonly number[];
    readonly get: (...index: number[]) => T;
    readonly set: (put: T, ...index: number[]) => number;
};

export function fromary<T>(source: T[], length: number[]): ArrayIndex<T> | undefined {
    if (length.some(x => x <= 0)) {
        return;
    }

    const product: number[] = length.map(() => 1);
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

