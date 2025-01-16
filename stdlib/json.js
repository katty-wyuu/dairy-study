// 复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。

// 原始类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和null（不能使用NaN, Infinity, -Infinity和undefined）。

// 字符串必须使用双引号表示，不能使用单引号。

// 对象的键名必须放在双引号里面。

// 数组或对象最后一个成员的后面，不能加逗号。

// 字符串
const foo = "foo";
console.log(JSON.stringify(foo));
console.log(JSON.stringify(foo) === '"foo"'); // 用于判断是否是字符串

// 正则表达式、对象、数组
var obj = {
  a: undefined,
  b: function () {},
};
console.log(JSON.stringify(/foo/)); // "{}"
console.log(JSON.stringify(obj)); // "{}"
var arr = [undefined, function () {}];
console.log(JSON.stringify(arr)); // "[null,null]"

// JSON.stringify方法会忽略对象的不可枚举属性。
var obj = {};
Object.defineProperties(obj, {
  "foo": {
    value: 1,
    enumerable: true,
  },
  "bar": {
    value: 2,
    enumerable: false,
  },
  "foobar": {
    value: function () {}, // /undefined
    enumerable: true,
  },
});
console.log(JSON.stringify(obj)); // "{"foo":1}"

// JSON.stringify()方法还可以接受一个数组，作为第二个参数，指定参数对象的哪些属性需要转成字符串。
// 只对对象的属性有效，对数组无效。
var obj = {
  "prop1": "value1",
  "prop2": "value2",
  "prop3": "value3",
};

var selectedProperties = ["prop1", "prop2"];

JSON.stringify(obj, selectedProperties);

// 函数作为第二参数
var obj = { a: { b: 1 } };

function f(key, value) {
  console.log("[" + key + "]:" + value);
  return value;
}

JSON.stringify(obj, f);

// JSON.stringify()方法还可以接受第三个参数，用于增加返回的JSON字符串的可读性。如果是数字，表示每个属性前面添加的空格（最多不超过10个）；如果是字符串（不超过10个字符），则该字符串会添加在每行前面, '\t'在每个属性前面添加一个制表符，然后分行显示.
const thirdPar = JSON.stringify({ p1: 1, p2: 2 }, null, 2);
console.log(thirdPar);

const user = {
  firstName: "wang",
  lastName: "yu",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
    };
  },
};
console.log(JSON.stringify(user));
var obj = {
    reg: /foo/
  };
  
  // 不设置 toJSON 方法时
  JSON.stringify(obj) // "{"reg":{}}"
  
  // 设置 toJSON 方法时
  RegExp.prototype.toJSON = RegExp.prototype.toString;
 const setToJson = JSON.stringify(/foo/) // ""/foo/""
 console.log(JSON.parse(setToJson));

 // 实现对象的深拷贝
 JSON.parse(JSON.stringify(obj));