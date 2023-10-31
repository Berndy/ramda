import Benchmark from 'benchmark';
import  lensPathNew from './source/lensPath.js';
import  lensPathOld from './source/lensPath_old.js';

Benchmark.options.maxTime = 1;
const suite = new Benchmark.Suite();

const pathAr1 = ['a', 'b', 'c'];

suite
  .add('lenspath old', function() {
    lensPathOld(pathAr1);
  })
  .add('lenspath new', function() {
    lensPathNew(pathAr1);
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .run();
