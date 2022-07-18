<img src="https://i.imgur.com/nJDQYVv.jpg" style="zoom: 50%;" />

## 題目

用 JS、CSS 製作可調整照片內距、模糊及邊框色彩的濾鏡

## JS 重點

### dataset

讀取自訂資料 data-*

### `style.setProperty()`

＝`style.cssPropertyName`

設定物件的 CSS 屬性


### Event

* change：滑鼠移動時不會呼叫方法，放開後才執行。

* mousemove：滑鼠移動時觸發

> change 滑動時不會呼叫方法，放開滑鼠後才會執行、要持續的話必須要加上 `mousemove`


## CSS 重點

### 根目錄選取器 :root

選擇 root 根目錄，等同於 `<html>`，常用於搭配 CSS 變數。

```css
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
```

### filter

調整影像、背景或邊框的濾鏡

* **`blur()`** 高斯模糊
