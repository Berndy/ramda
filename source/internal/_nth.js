import _isString from './_isString.js';

export function _nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
}



export function _nth2(offset, list) {
  if (offset < 0) {
    const idx = list.length + offset;
    return _isString(list) ? list.charAt(idx) : list[idx];
  }

  return _isString(list) ? list.charAt(offset) : list[offset];
}

export default _nth;
