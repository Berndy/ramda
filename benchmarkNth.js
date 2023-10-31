import Benchmark from 'benchmark';
import _nthOld from './source/internal/_nth.js';
import _nthNew from './source/internal/_nth_new.js';

Benchmark.options.maxTime = 1;
const suite = new Benchmark.Suite();

const array = ['a', 'b', 'c'];
const string = 'abc';

suite
  .add('nth old 0', function() {
    _nthOld(0, array);
    _nthOld(0, array);
    _nthOld(0, array);
    _nthOld(0, array);
    _nthOld(0, array);
  })
  .add('nth new 0', function() {
    _nthNew(0, array);
    _nthNew(0, array);
    _nthNew(0, array);
    _nthNew(0, array);
    _nthNew(0, array);
  })
  .add('nth old 1', function() {
    _nthOld(1, array);
    _nthOld(1, array);
    _nthOld(1, array);
    _nthOld(1, array);
    _nthOld(1, array);
  })
  .add('nth new 1', function() {
    _nthNew(1, array);
    _nthNew(1, array);
    _nthNew(1, array);
    _nthNew(1, array);
    _nthNew(1, array);
  })
  .add('nth old -1', function() {
    _nthOld(-1, array);
    _nthOld(-1, array);
    _nthOld(-1, array);
    _nthOld(-1, array);
    _nthOld(-1, array);
  })
  .add('nth new -1', function() {
    _nthNew(-1, array);
    _nthNew(-1, array);
    _nthNew(-1, array);
    _nthNew(-1, array);
    _nthNew(-1, array);
  })
  .add('nth old string 0', function() {
    _nthOld(0, string);
    _nthOld(0, string);
    _nthOld(0, string);
    _nthOld(0, string);
    _nthOld(0, string);
  })
  .add('nth new string 0', function() {
    _nthNew(0, string);
    _nthNew(0, string);
    _nthNew(0, string);
    _nthNew(0, string);
    _nthNew(0, string);
  })
  .add('nth old string 1', function() {
    _nthOld(1, string);
    _nthOld(1, string);
    _nthOld(1, string);
    _nthOld(1, string);
    _nthOld(1, string);
  })
  .add('nth new string 1', function() {
    _nthNew(1, string);
    _nthNew(1, string);
    _nthNew(1, string);
    _nthNew(1, string);
    _nthNew(1, string);
  })
  .add('nth old string -1', function() {
    _nthOld(-1, string);
    _nthOld(-1, string);
    _nthOld(-1, string);
    _nthOld(-1, string);
    _nthOld(-1, string);
  })
  .add('nth new string -1', function() {
    _nthNew(-1, string);
    _nthNew(-1, string);
    _nthNew(-1, string);
    _nthNew(-1, string);
    _nthNew(-1, string);
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .run();
