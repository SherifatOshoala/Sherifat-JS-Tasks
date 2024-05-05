// // Some 7 Quick Ones and Something Real
// // 1. Write a function `countProperties(obj)` that takes an object `obj` and returns the count of its enumerable
// properties.

const countProperties = (obj) => {
  return Object.keys(obj).length;
};

let objectSample = {
  Name: "sherifat",
  Complexion: "Dark",
  Height: 5.6,
  Prestidigitation: "you",
};

let objectSample2 = Object.create(objectSample);
console.log(objectSample2);
objectSample2.School = "Unilag";

console.log(countProperties(objectSample2));

// // 2. Implement a function `findLongestKey(obj)` that takes an object `obj` and returns the longest key name present
// in the object.
const findLongestKey2 = (obj) => {
  let count;
  let maxCount = 0;
  let maxKey = "None";
  for (let key in obj) {
    count = key.length;
    if (count > maxCount) {
      maxCount = count;
      maxKey = key;
    }
  }
  return maxKey;
};
console.log(findLongestKey2(objectSample));
// // 3. Create a function `sumObjectValues(obj)` that takes an object `obj` with numeric values and returns the sum of
// all its values using.
let objectSample3 = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
};
const sumObjectValues = (obj) => {
  let values = Object.values(obj);
  let result = values.reduce((accum, currVal) => accum + currVal);
  return result;
};
console.log(sumObjectValues(objectSample3));
// // 4. Write a function `mergeObjects() that takes multiple objects and merges them into a single object, giving
// priority to the properties of the objects specified later in the argument list.
let objectSample4 = {
  School: "Lasu",
};
const mergeObjects = (obj, obj2, obj3, obj4) => {
  return Object.assign({}, obj, obj2, obj3, obj4);
};
console.log(
  mergeObjects(objectSample, objectSample2, objectSample3, objectSample4)
); //this doesn't take any num of objects

const mergeObjects2 = (...obj) => {
  //called rest parameter. to gather multiple arguments into an array
  let mergedObjects = {};

  obj.forEach((object) => {
    Object.assign(mergedObjects, object);
  });
  return mergedObjects;
};

console.log(mergeObjects2(objectSample, objectSample2));
// // 5. Create a function `itsSealed(obj)` that checks whether an object `obj` is sealed using. The function should
// return `true` if the object is sealed (i.e., prevents new properties from being added and marks all existing
//     properties as non-configurable), otherwise `false`.
let objectSample5 = {
  Name: "sherifat",
  Complexion: "Dark",
  Height: 5.6,
  Agodokomeeeee: "you",
};
Object.seal(objectSample5);

const itsSealed = (obj) => {
  return Object.isSealed(obj);
};
console.log(itsSealed(objectSample5));
// // 6. Create a function `createCustomObject(proto, properties)` that takes a prototype object `proto` and an object
// of properties `properties` and returns a new object with the specified prototype and properties.
const createCustomObject = (proto, properties) => {
  let newObject = Object.create(proto);
  Object.assign(newObject, properties);
  return newObject;
};
console.log(createCustomObject(objectSample, objectSample4));

// // 7. Write a function that takes an array of integers [nums] and a target integer, return indices of the two numbers
// such that they add up to target. You may assume that each input would have exactly one solution, and you may not use
// the same element twice

let array = [1, 2, 3, 4, 5];

const sumElementsToTarget = (array, target) => {
  let result = [];
  array.forEach((elem, index) => {
    for (i = index + 1; i < array.length; i++) {
      if (elem + array[i] === target) {
        result.push([index, i]);
      }
    }
  });
  return result.join(" & ");
};

console.log(sumElementsToTarget(array, 9));
