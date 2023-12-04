import Benchmark from 'benchmark';
import pathOld from './source/path_old.js';
import pathNew from './source/path.js';
import prop from './source/prop.js';
import pathInternal from './source/internal/_path.js';
import pathInternal2 from './source/internal/_path2.js';
import pathInternalAltNth1 from './source/internal/_path_alt_nth1.js';
import pathInternalAltNth2 from './source/internal/_path_alt_nth2.js';
import pathInternalAltNth3 from './source/internal/_path_alt_nth3.js';
import pathInternalAltNth4 from './source/internal/_path_alt_nth4.js';
import pathInternalAltNth5 from './source/internal/_path_alt_nth5.js';

Benchmark.options.maxTime = 1;
const suite = new Benchmark.Suite();

const pathAr1 = ['a', 'b', 'c'];
const pathAr2 = [];
const pathAr3 = ['a', 'e', 'f', 1];
const pathAr4 = ['j', 0];
const pathAr5 = ['j', 1];

const obj = {
  a: {
    b: {
      c: 100,
      d: 200
    },
    e: {
      f: [100, 101, 102],
      g: 'G'
    },
    h: 'H'
  },
  i: 'I',
  j: ['J']
};

suite
  .add('path old     ', function() {
    pathOld(pathAr1, obj);
    pathOld(pathAr2, obj);
    pathOld(pathAr3, obj);
    pathOld(pathAr4, obj);
    pathOld(pathAr5, obj);
  })
  .add('path arr     ', function() {
    pathNew(pathAr1, obj);
    pathNew(pathAr2, obj);
    pathNew(pathAr3, obj);
    pathNew(pathAr4, obj);
    pathNew(pathAr5, obj);
  })
  .add('prop arr    ', function() {
    prop(pathAr1, obj);
    prop(pathAr2, obj);
    prop(pathAr3, obj);
    prop(pathAr4, obj);
    prop(pathAr5, obj);
  })
  .add('path str     ', function() {
    pathNew(['a'], obj);
    pathNew(['i'], obj);
    pathNew(['j'], obj);
    pathNew(['b'], obj);
    pathNew(['c'], obj);
  })
  .add('prop str    ', function() {
    prop('a', obj);
    prop('i', obj);
    prop('j', obj);
    prop('b', obj);
    prop('c', obj);
  })
  .add('path internal', function() {
    pathInternal(pathAr1, obj);
    pathInternal(pathAr2, obj);
    pathInternal(pathAr3, obj);
    pathInternal(pathAr4, obj);
    pathInternal(pathAr5, obj);
  })
  .add('path internal with ternary', function() {
    pathInternal2(pathAr1, obj);
    pathInternal2(pathAr2, obj);
    pathInternal2(pathAr3, obj);
    pathInternal2(pathAr4, obj);
    pathInternal2(pathAr5, obj);
  })
  .add('path internal alt nth1', function() {
    pathInternalAltNth1(pathAr1, obj);
    pathInternalAltNth1(pathAr2, obj);
    pathInternalAltNth1(pathAr3, obj);
    pathInternalAltNth1(pathAr4, obj);
    pathInternalAltNth1(pathAr5, obj);
  })
  .add('path internal alt nth2', function() {
    pathInternalAltNth2(pathAr1, obj);
    pathInternalAltNth2(pathAr2, obj);
    pathInternalAltNth2(pathAr3, obj);
    pathInternalAltNth2(pathAr4, obj);
    pathInternalAltNth2(pathAr5, obj);
  })
  .add('path internal alt nth3', function() {
    pathInternalAltNth3(pathAr1, obj);
    pathInternalAltNth3(pathAr2, obj);
    pathInternalAltNth3(pathAr3, obj);
    pathInternalAltNth3(pathAr4, obj);
    pathInternalAltNth3(pathAr5, obj);
  })
  .add('path internal alt nth4', function() {
    pathInternalAltNth4(pathAr1, obj);
    pathInternalAltNth4(pathAr2, obj);
    pathInternalAltNth4(pathAr3, obj);
    pathInternalAltNth4(pathAr4, obj);
    pathInternalAltNth4(pathAr5, obj);
  })
  .add('path internal alt nth5', function() {
    pathInternalAltNth5(pathAr1, obj);
    pathInternalAltNth5(pathAr2, obj);
    pathInternalAltNth5(pathAr3, obj);
    pathInternalAltNth5(pathAr4, obj);
    pathInternalAltNth5(pathAr5, obj);
  })
  // .add('path internal 1', function() {
  //   pathInternal(pathAr1, obj);
  // })
  // .add('path internal 2', function() {
  //   pathInternal(pathAr2, obj);
  // })
  // .add('path internal 3', function() {
  //   pathInternal(pathAr3, obj);
  // })
  // .add('path internal 4', function() {
  //   pathInternal(pathAr4, obj);
  // })
  // .add('path internal 5', function() {
  //   pathInternal(pathAr5, obj);
  // })
  // .add('path internal alt nth1 1', function() {
  //   pathInternalAltNth1(pathAr1, obj);
  // })
  // .add('path internal alt nth1 2', function() {
  //   pathInternalAltNth1(pathAr2, obj);
  // })
  // .add('path internal alt nth1 3', function() {
  //   pathInternalAltNth1(pathAr3, obj);
  // })
  // .add('path internal alt nth1 4', function() {
  //   pathInternalAltNth1(pathAr4, obj);
  // })
  // .add('path internal alt nth1 5', function() {
  //   pathInternalAltNth1(pathAr5, obj);
  // })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .run();
