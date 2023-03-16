

export type ArrayIndex<T> = {
    /**
     * reference to original array object.
     * 
     * refers same array object with 'fromary' methods, therefore this field can be change while other reason.
     * 
     * 'source' should be maintained its length greater equals to 'length'.
     * 
     * if 'source.length' was smaller than 'length', 'get'/'set' are unspecified.
     * 
     * @see length
     * @see fromary
     */
    readonly source: T[];
    /**
     * length of 'source' in multi dimension.
     * 
     * the last dimension represents one-bye-one iterator/position.
     * 
     * so, for example, length are 2x3 shows [ 00, 01, 02, 10, 11, 12 ]
     * 
     * @see source
     */
    readonly length: readonly number[];
    /**
     * size of dimension block.
     * 
     * the last dimension shows one-by-one size.
     * 
     * so, for example, product are 6,3,1 if 'length' were 1,2,3.
     */
    readonly product: readonly number[];
    /**
     * get element by multi dimension index.
     * 
     * if 'index' were out of bound, return value is unspecified.
     */
    readonly get: (...index: number[]) => T;
    /**
     * put element by multi dimension index.
     * 
     * @see get
     */
    readonly set: (put: T, ...index: number[]) => number;
};

/**
 * obtains multi dimension index array.
 * 
 * if the 'source.length' is smaller than 'length', index are unspecified.
 * 
 * the 'source' will be refered by return value.
 * 
 * 'fromary' returns undefined, if length contains 0.
 * 
 * 'length' fields should be positive integer because of 'fromary' does not check it.
 */
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

