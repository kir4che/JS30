## 題目

以 CSS flexbox 製作出圖片牆



## CSS 重點

### flex

flex item 皆依照 width 或 height（視主軸 main axis）決定尺寸

* **`flex: initial`**（初始值）

  等同於 `flex: 1 0 auto`

  <img src="https://image.zhangxinxu.com/image/blog/202005/6-39_flex-initial.png" style="zoom:95%;" />

  * container 有剩餘空間，其仍無法延伸。
  * 當空間不足時，元素可收縮。

* **`flex: 1`** 👍🏻

  等同於 `flex:1 1 0`

* **`flex: 0`**（少用）

  等同於 `flex:0 1 0`

  * flex item 可收縮、不可延伸

* **`flex: auto`**

  等同於 `flex: 1 1 auto`

  * flex item 可延伸、收縮

* **`flex: none`** 👍🏻

  等同於 `flex: 0 0 auto`

  * flex item 不可延伸、收縮

**💡若所有 flex items 設定 `flex: auto` 或 `flex: none`，則在其尺寸決定後，剩餘空間會被平分給 `flex: auto` 的 flex items。**



參考資料

* [Flex 空間計算規則](https://www.casper.tw/css/2020/03/08/flex-size/)
* [flex 5](https://ithelp.ithome.com.tw/articles/10227461)
