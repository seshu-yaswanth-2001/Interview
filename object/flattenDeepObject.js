/*
 * Write a function flattenObject that takes a deeply nested JavaScript object and returns a new object where nested keys are
 * represented in "DOT NOTATION"
 *
 * INPUT:- A nested object with keys and values of any depth
 *
 * OUTPUT:- A new object where each key is a dot-separated path to the corresponding value
 *
 * Example:
 * INPUT:- { a: {b: 1} }
 * OUTPUT:- { "a.b": 1 }
 *
 * INPUT:- { x: 1, y: {z: {k : 5} } }
 * OUTPUT:- { "x": 1, "y.z.k": 5}
 */

function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullkey = parentKey ? `${parentKey}.${key}` : key;
      const value = obj[key];
      if (
        value !== null &&
        typeof value === "object" &&
        !Array.isArray(value)
      ) {
        flattenObject(value, fullkey, result);
      } else {
        result[fullkey] = value;
      }
    }
  }
  console.log(result);
}

const obj1 = { a: { b: 1 }, c: { d: { e: { f: 2 } } } };

flattenObject(obj1);
