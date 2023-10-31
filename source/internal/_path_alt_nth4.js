import _isInteger from './_isInteger.js';
import _isString from './_isString.js';

function _nth(p, val) {
  var idx = p < 0 ? val.length + p : p;
  return _isString(val) ? val.charAt(idx) : val[idx];
}

export default function _path(pathAr, obj) {
  var val = obj;
  for (var i = 0; i < pathAr.length; i += 1) {
    if (val == null) {
      return undefined;
    }

    const p = pathAr[i];
    if (_isInteger(p)) {
      val = _nth(p, val);
      // var idx = p < 0 ? val.length + p : p;
      // val = _isString(val) ? val.charAt(idx) : val[idx];
    } else {
      val = val[p];
    }
  }
  return val;
}
