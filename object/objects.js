const obj = {
  name: "Seshu Yaswanth Reddy",
  user: "Admin",
  isAdmin: true,
};

// to access
console.log("---------------------------------------");
console.log("Access");

console.log("Name: ", obj.name);
console.log("User: ", obj.user);
console.log("isAdmin: ", obj.isAdmin);

// Bracket Notation
console.log("---------------------------------------");

console.log("Bracket Notation");
console.log(obj["name"]);

// Add or update Properties
console.log("---------------------------------------");

// updating the existing
obj.user = "Requestor";
// Adding New
obj.age = 21;
console.log(obj);
// delete existing
// delete obj.age;
console.log(obj);

// Check if Property Exists
// using "IN" operator
console.log("---------------------------------------");

console.log("name" in obj);
console.log("age" in obj);

console.log(obj.hasOwnProperty("city"));
console.log(obj.hasOwnProperty("age"));

console.log("---------------------------------------");
// Enumaration in objects
// returns an array of keys
console.log(Object.keys(obj));
// returns an array of values
console.log(Object.values(obj));
// returns an array of object
console.log(Object.entries(obj));

// Advance Methods
// using object.defineProperty()

console.log("---------------------------------------");

// defining property
Object.defineProperty(obj, "salary", {
  value: 50000,
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(Object.keys(obj));

console.log(obj.salary);

console.log("---------------------------------------");

// defining properties
Object.defineProperties(obj, {
  city: {
    value: "Kadapa",
    writable: true,
  },
  hobby: {
    value: "coding",
    writable: true,
  },
});

console.log("city: ", obj.city, " hobby: ", obj.hobby);

// get property descriptors

console.log("---------------------------------------");

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

console.log("---------------------------------------");

console.log(Object.getOwnPropertyDescriptors(obj));

// prevention
Object.preventExtensions(obj);
// obj.prop = "user"; will throw error in strict mode but fails here silently

// cant add, delete, or modify
Object.freeze(obj);

// cant add or delete but can modify existing
Object.seal(obj);

// iterating

for (let key in obj) {
  console.log(key);
  console.log(obj[key]);
}

console.log("map");

Object.keys(obj).map((key) => {
  console.log(key);
});

console.log("forEach");

Object.keys(obj).forEach((key) => {
  console.log(key);
});
