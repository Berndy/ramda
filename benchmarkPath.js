import Benchmark from 'benchmark';
import pathOld from './source/path_old.js';
import pathNew from './source/path.js';
import pathInternal from './source/internal/_path.js';
import pathInternalAltNth from './source/internal/_path_alt_nth.js';

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
  .add('path new     ', function() {
    pathNew(pathAr1, obj);
    pathNew(pathAr2, obj);
    pathNew(pathAr3, obj);
    pathNew(pathAr4, obj);
    pathNew(pathAr5, obj);
  })
  .add('path internal', function() {
    pathInternal(pathAr1, obj);
    pathInternal(pathAr2, obj);
    pathInternal(pathAr3, obj);
    pathInternal(pathAr4, obj);
    pathInternal(pathAr5, obj);
  })
  .add('path internal alt nth', function() {
    pathInternalAltNth(pathAr1, obj);
    pathInternalAltNth(pathAr2, obj);
    pathInternalAltNth(pathAr3, obj);
    pathInternalAltNth(pathAr4, obj);
    pathInternalAltNth(pathAr5, obj);
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .run();
