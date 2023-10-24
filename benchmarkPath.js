import Benchmark from 'benchmark';
import { path, path2 } from './source/path.js';
import pathUncurried from './source/internal/_path.js';

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
    path2(pathAr1, obj);
    path2(pathAr2, obj);
    path2(pathAr3, obj);
    path2(pathAr4, obj);
    path2(pathAr5, obj);
  })
  .add('path new     ', function() {
    path(pathAr1, obj);
    path(pathAr2, obj);
    path(pathAr3, obj);
    path(pathAr4, obj);
    path(pathAr5, obj);
  })
  .add('path internal', function() {
    pathUncurried(pathAr1, obj);
    pathUncurried(pathAr2, obj);
    pathUncurried(pathAr3, obj);
    pathUncurried(pathAr4, obj);
    pathUncurried(pathAr5, obj);
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .run();
