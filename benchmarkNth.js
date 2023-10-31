import Benchmark from 'benchmark';
import {_nth, _nth2} from './source/internal/_nth.js';

Benchmark.options.maxTime = 1;
const suite = new Benchmark.Suite();

const pathAr1 = ['a', 'b', 'c'];

suite
  .add('nth old 0', function() {
    _nth(pathAr1, 0);
  })
  .add('nth new 0', function() {
    _nth2(pathAr1, 0);
  })
  .add('nth old 1', function() {
    _nth(pathAr1, 1);
  })
  .add('nth new 1', function() {
    _nth2(pathAr1, 1);
  })
  .add('nth old -1', function() {
    _nth(pathAr1, -1);
  })
  .add('nth new -1', function() {
    _nth2(pathAr1, -1);
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .run();
