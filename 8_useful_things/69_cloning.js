// clone using object.assign

const obj = {
    key1: 'value1',
    key2: 'value2',
}

// in memory obj2 is not a copy of obj and address of both obj and obj2 is same
// const obj2 = obj;
// obj.key3 = 'value3';

// console.log(obj)
// console.log(obj2)

// clone using spread operator
// const obj3 = {...obj};
// obj.key3 = 'value3';

// console.log(obj)
// console.log(obj3)

// clone using object.assign
const obj2 = Object.assign({}, obj);
obj.key3 = 'value3';

console.log(obj)
console.log(obj2)