<img src="https://i.imgur.com/qdMubSb.jpg" style="zoom:50%;" />

## 題目

以 JS 使鍵盤按下後播放出對應按鍵的音效


## JS 重點

### 事件監聽 addEventListener

#### 按下鍵盤 keydown

按下哪一鍵：取得 keyCode（[keyCode 查詢](https://keycode.info/)）

#### 轉場 transitionend

於 CSS transition 完成後觸發

* transition 完成前移除 transition 則不會被觸發
* 若 transition 完成前設置 `display: none` 也不會被觸發

### data-*

自訂屬性便於 JS 取得，為全域屬性。

* `element.dataset.keyname`
* `element.dataset[keyname]`

### HTMLmediaElement(audio)

* `audio.currentTime = 0`：回到音訊開頭
* `audio.play()`：播放

### element.classList

代表該元素所擁有之**類別屬性**的即時更新集 ➪ 取得元素 Class

* `.add(String)` 新增

* `.remove(String)` 移除

* `.toggle(String)` 切換

  i.e., if class exists then remove it and return false, if not, then add it and return true.

### forEach

`arr.forEach(function)`

```js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
// "a"
// "b"
// "c"
\\\\\\\\\\\\\
```

### Event

* `event.currentTarget` **當前**事件的物件

* `event.target` **觸發**事件的元素



## CSS 重點

### transition

定義組件在兩個狀態之間切換的**轉場**效果

`transition: prop duratioin timing-func delay;`

### transform

* `translate(x,y)` 位移
* `scale(x,y)` 縮放
* `skew(deg,deg)` 傾斜
* `rotate(deg)` 轉軸
* `matrix(a,b,c,d,e,f)` 變形矩陣

