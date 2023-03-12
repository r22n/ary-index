# ary-index
calculate index of array with multi dimensions.

your index will be parsed into the position of single dimension array.

thus, original array can carry, manipulate, clone and serialize easier.

## how to use

```
// declare or reference your array for three-dimensions
const a = fromary([], [3, 3, 3]);

// access to get/set to its position in 1, 2, 2
a.set('item', 1, 2, 2)
a.get(1, 2, 2)

```
