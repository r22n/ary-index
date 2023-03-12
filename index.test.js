const { fromary } = require('.');

describe('test array index', () => {
    it('get/set single dimension', () => {
        const a = fromary([2, 3, 5], [3]);
        expect(a).toBeTruthy();
        expect(a.length).toEqual([3]);
        expect(a.product).toEqual([1]);
        expect(a.source).toEqual([2, 3, 5]);
        expect(a.get(0)).toEqual(2);
        expect(a.get(1)).toEqual(3);
        expect(a.get(2)).toEqual(5);
    });
    it('get/set two dimensions', () => {
        const a = fromary([
            2, 3, 5,
            7, 11, 13,
            17, 19, 23
        ], [3, 3]);
        expect(a).toBeTruthy();
        expect(a.length).toEqual([3, 3]);
        expect(a.product).toEqual([3, 1]);
        expect(a.source).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23]);
        expect(a.get(0, 0)).toEqual(2);
        expect(a.get(0, 2)).toEqual(5);
        expect(a.get(1, 0)).toEqual(7);
        expect(a.get(1, 2)).toEqual(13);
        expect(a.get(2, 0)).toEqual(17);
        expect(a.get(2, 2)).toEqual(23);
    });
    it('get/set four dimensions', () => {
        const a = fromary([
            // 0, 0
            2, 3, 5,
            7, 11, 13,

            // 0, 1
            17, 19, 23,
            29, 31, 37,

            // 1, 0
            41, 43, 47,
            53, 59, 61,

            // 1, 1
            67, 71, 73,
            79, 83, 89,
        ], [2, 2, 2, 3]);
        expect(a).toBeTruthy();
        expect(a.length).toEqual([2, 2, 2, 3]);
        expect(a.product).toEqual([12, 6, 3, 1]);
        expect(a.get(0, 0, 0, 0)).toEqual(2);
        expect(a.get(0, 0, 0, 2)).toEqual(5);
        expect(a.get(1, 1, 0, 2)).toEqual(73);
        expect(a.get(1, 1, 1, 2)).toEqual(89);
    });
    it('minimum length', () => {
        const a = fromary([3], [1, 1, 1, 1, 1, 1]);
        const b = fromary([3], [1]);
        const c = fromary([3], [1, 1]);
        expect(a.get(0, 0, 0, 0, 0, 0)).toEqual(3);
        expect(b.get(0)).toEqual(3);
        expect(c.get(0, 0)).toEqual(3);
    });
});