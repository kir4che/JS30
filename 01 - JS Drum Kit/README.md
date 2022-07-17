<img src="https://i.imgur.com/qdMubSb.jpg" style="zoom:50%;" />

## 題目

以 JS 使鍵盤按下後播放出對應按鍵的音效



## 重點

### 事件監聽 addEventListener

* **偵測按下鍵盤事件**
  * `window.addEventListener("keydown", (e) => {...});`
  * 按下哪一鍵－取得 keyCode（[keyCode 查詢](https://keycode.info/)）

* **播放聲音**
  * `audio.currentTime = 0`：回到音訊開頭
  * `audio.play()`：播放

### data-*

自訂屬性便於 JS 取得，為全域屬性。

* `element.dataset.keyname`
* `element.dataset[keyname]`

### transitionend

發生於 CSS transition 完成後

* **transition 轉場**

  `transition: prop duratioin timing-func delay;`

* **transitionEvent（唯讀）**

  `event.propertyName`

### 類別屬性

`element.classList`

* `.add()`：新增
* `.remove()`：移除
* `.toggle()`：切換

### Target

* `event.currentTarget`：當前事件對象

* `event.target`：觸發事件的元素

### transform

* `translate(x,y)`：位移
* `scale(x,y)`：縮放
* `skew(deg,deg)`：傾斜
* `rotate(deg)`：轉軸
* `matrix(a,b,c,d,e,f)`：變形矩陣
