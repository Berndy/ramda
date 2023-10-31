import Benchmark from 'benchmark';
import  { lensPath, lensPath2 } from './source/lensPath.js';

Benchmark.options.maxTime = 1;
const suite = new Benchmark.Suite();

const pathAr1 = ['a', 'b', 'c'];

suite
  .add('lenspath old', function() {
    lensPath(pathAr1);
  })
  .add('lenspath new', function() {
    lensPath2(pathAr1);
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .run();
