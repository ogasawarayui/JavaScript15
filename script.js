/* Q1 プロパティーとメソッドの違いをまとめて3つほどメソッドを作ってください。
値が関数になっているものがメソッド、呼び出すことができるプロパティ*/
const obj = {
  methodA: function () {
    console.log('Hello');
  },
  methodB: () => {
    console.log('Hello');
  },
  methodC: () => {
    console.log('Hello');
  }
};
obj.methodA();
/* Q2 下記の関数を実行してその結果をコンソールに表示してください。(スコープ内に書く方法はだめです。)*/
function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。"
  return result
};
const re = fruit("トマト", 200);
console.log(re);
/* Q3 下記の関数を経由して2つの関数を実行するような処理を作ってください。*/
function addTax(price, func/*, name*/) {
  const taxPrice = Math.round(price * 1.10);
  func(taxPrice/*, name*/);
}
// トマトの税込み価格をコンソールに表示させる処理
function tomato(taxPrice) {
  console.log("トマトの税込み価格は" + taxPrice + "円")
}
addTax(200, tomato)
// 玉ねぎの税込み価格をコンソールに表示させる処理
function onion(taxPrice) {
  console.log("玉ねぎの税込み価格は" + taxPrice + "円")
}
addTax(250, onion)

/*function resultText(taxPrice, name) {
  console.log(name + "の税込み価格は" + taxPrice + "円")
}
addTax(300, resultText, "玉ねぎ")
addTax(300, resultText, "トマト")*/

