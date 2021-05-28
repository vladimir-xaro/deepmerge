# @xaro/deepmerge

## Install
```bash
npm install @xaro/deepmerge --save-dev
```

## Usage
```js
import deepmerge from "@xaro/deepmerge";

const objA = {
  a: 'apple',
  b: {
    ba: 'banana',
    bb: 'broccoli'
  },
  c: [ 1, 2 ]
}

const objB = {
  a: 'asparagus',
  b: {
    bb: 'beets',
    bc: 'carrot'
  },
  c: [ 3, 4 ],
  d: 'cherry'
}

deepmerge(objA, objB);

// Result:
objA = {
  a: 'asparagus',
  b: {
    ba: 'banana',
    bb: 'beets',
    bc: 'carrot'
  },
  c: [ 3, 4 ],        << If you need to merge arrays see below
  d: 'cherry'
}


// Or if you need to merge arrays in properties, set mergeArray property to true (only boolean value) in third argument object:
deepmerge(objA, objB, { mergeArray: true });

// Result:
objA = {
  a: 'asparagus',
  b: {
    ba: 'banana',
    bb: 'beets',
    bc: 'carrot'
  },
  c: [ 1, 2, 3, 4 ],  << Here
  d: 'cherry'
}