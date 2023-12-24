/* Q1 プロパティーとメソッドの違いをまとめて3つほどメソッドを作ってください。
値が関数になっているものがメソッド
呼び出すことができるプロパティ
オブジェクトのプロパティが関数である場合*/
/* Q2 下記の関数を実行してその結果をコンソールに表示してください。(スコープ内に書く方法はだめです。)*/
```
function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。"
  return result
};
```
function tomato(price, func) {
  const name = "トマト";
  func(name, price);
}
const price = function price(name, price) {
  console.log(name + " の値段は" + price + "円です。");
}
tomato(100, price);
func(name, price); = price(name, price);
/* Q3 下記の関数を経由して2つの関数を実行するような処理を作ってください。*/
```
function addTax(price, func) {
  // priceは値段
  // funcは実行する関数名
  // 税込み価格を計算して四捨五入して整数にしている(スコープ内でしか参照できません。)
  const taxPrice = Math.round(price * 1.10);
}

// トマトの税込み価格をコンソールに表示させる処理

// 玉ねぎの税込み価格をコンソールに表示させる処理
```



