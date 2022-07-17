<img src="https://i.imgur.com/KyBsWFG.jpg" style="zoom:50%;" />

## 題目

用 JS、CSS 製作一個實時的時鐘



## JS 重點

### 控制時間

* `setInterval()`：不斷於間隔固定的時間重複執行
* `setTimeout()`：執行一次就結束

### Date

* `getFullYear()`：年（yyyy）
* `getMonth()`：月（0-11）
* `getDate()`：日（1-31）
* `getDay()`：星期幾（0-6）

### Time

* `getHours()`：時（0-23）

* `getMinutes()`：分（0-59）

* `getSeconds()`：秒（0-59）



## CSS 重點

### `transform-origin`

設定元素變化的原點

### `transform: rotate()`

以原點為中心來旋轉元素

### `transition-timing-function`

以加速度曲線來表示動畫變換的速度



## 時鐘角度

1. 算出比例再＊360°
2. 時針、分針再加上其分、秒

3. 每秒改變的角度再 +90°
4. 時針、分針、秒針隨秒逐漸增加
   * 秒針 360／60＝6°/秒
   * 分針 360／60＝6°/分
   * 時針 360／12＝30°/時
