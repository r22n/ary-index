# ary-index
calculate index of array with multi dimensions.

care your index will be parse into the position of single dimension array.

thus, original array can carry, manipualte, clone and serialize easier.

## how to use

```
// declare or reference your array for three-dimensions
const a = formary([], [3, 3, 3]);

// access to get/set to its position in 1, 2, 2
a.set('item', 1, 2, 2)
a.get(1, 2, 2)

```
