import _isInteger from './_isInteger.js';
import _nth from './_nth.js';

export default function _path(pathAr, obj) {
  var val = obj;
  for (var i = 0; i < pathAr.length; i += 1) {
    if (val == null) {
      return undefined;
    }

    const p = pathAr[i];
    val = _isInteger(p) ? _nth(p, val) : val[p];
  }
  return val;
}
