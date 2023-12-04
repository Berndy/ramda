import _curry3 from './internal/_curry3.js';
import prop from './prop.js';

/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise. You can test multiple properties with
 * [`R.where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred The predicate function to be applied to the property value
 * @param {String} key The specified object property's key
 * @param {*} obj The object to query
 * @return {Boolean}
 * @see R.where, R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
var propSatisfies = _curry3(function propSatisfies(pred, key, obj) {
  return pred(prop(key, obj));
});
export default propSatisfies;
