import Benchmark from 'benchmark';
import _nthOld from './source/internal/_nth.js';
import _nthNew from './source/internal/_nth_new.js';

Benchmark.options.maxTime = 1;
const suite = new Benchmark.Suite();

const pathAr1 = ['a', 'b', 'c'];

suite
  .add('nth old 0', function() {
    _nthOld(0, pathAr1);
    _nthOld(0, pathAr1);
    _nthOld(0, pathAr1);
    _nthOld(0, pathAr1);
    _nthOld(0, pathAr1);
    _nthOld(0, pathAr1);
  })
  .add('nth new 0', function() {
    _nthNew(0, pathAr1);
    _nthNew(0, pathAr1);
    _nthNew(0, pathAr1);
    _nthNew(0, pathAr1);
    _nthNew(0, pathAr1);
    _nthNew(0, pathAr1);
  })
  .add('nth old 1', function() {
    _nthOld(1, pathAr1);
    _nthOld(1, pathAr1);
    _nthOld(1, pathAr1);
    _nthOld(1, pathAr1);
    _nthOld(1, pathAr1);
    _nthOld(1, pathAr1);
  })
  .add('nth new 1', function() {
    _nthNew(1, pathAr1);
    _nthNew(1, pathAr1);
    _nthNew(1, pathAr1);
    _nthNew(1, pathAr1);
    _nthNew(1, pathAr1);
    _nthNew(1, pathAr1);
  })
  .add('nth old -1', function() {
    _nthOld(-1, pathAr1);
    _nthOld(-1, pathAr1);
    _nthOld(-1, pathAr1);
    _nthOld(-1, pathAr1);
    _nthOld(-1, pathAr1);
    _nthOld(-1, pathAr1);
  })
  .add('nth new -1', function() {
    _nthNew(-1, pathAr1);
    _nthNew(-1, pathAr1);
    _nthNew(-1, pathAr1);
    _nthNew(-1, pathAr1);
    _nthNew(-1, pathAr1);
    _nthNew(-1, pathAr1);
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .run();
