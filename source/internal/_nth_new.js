import _isString from './_isString.js';

function _nth(offset, list) {
  if (offset < 0) {
    const idx = list.length + offset;
    return _isString(list) ? list.charAt(idx) : list[idx];
  }

  return _isString(list) ? list.charAt(offset) : list[offset];
}

export default _nth;
