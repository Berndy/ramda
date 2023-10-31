import _isString from './_isString.js';

export default function _nth(offset, list) {
  if (offset < 0) {
    const idx = list.length + offset;
    return _isString(list) ? list.charAt(idx) : list[idx];
  }

  return _isString(list) ? list.charAt(offset) : list[offset];
}
