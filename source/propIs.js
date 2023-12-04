import _curry3 from './internal/_curry3.js';
import prop from './prop.js';
import is from './is.js';


/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @typedefn Idx = String | Int | Symbol
 * @sig Type -> Idx -> Object -> Boolean
 * @param {Function} type
 * @param {String|Number} key The specified object property's key.
 * @param {*} obj The object to query.
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */
var propIs = _curry3(function propIs(type, key, obj) {
  return is(type, prop(key, obj));
});
export default propIs;
