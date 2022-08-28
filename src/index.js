/**
 * テンプレート文字列
 */
// const name = "a";
// const age = 22;
// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

/**
 * アロー関数
 */
// const func1 = (str) => {
//   return str;
// };
// // 省略版
// const func2 = (str) => str;
// console.log(func1("1です"));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "a",
//   age: 22
// };
// const { name, age } = myProfile;
// const message = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello("名前");

/**
 * スプレッド構文
 */
// 展開
// const arr1 = [1, 2];
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// // ... → 順番に処理してくれる
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * map,filter
 */
// map
const nameArr = ["田中", "山田", "佐藤"];
// const array = nameArr.map((name) => {
//   return name;
// })
// console.log(array);
// // 一行で
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// filter
// const numArr = [1, 2, 3, 4, 5];
// const filter = numArr.filter((num) => {
//   return num <= 2;
// })
// console.log(filter);

// const newName = nameArr.map((name) => {
//   if (name === "佐藤") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newName);

/**
 * 三項演算子
 */
// const val = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val);
// const num = 1500;
// const formatNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力';
// console.log(formatNum);

// const num = 100;
// const hoge = num || '金額未設定';
// console.log(hoge);
