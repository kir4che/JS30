## 題目

1. 篩選 1500's（1500-1599）出生的 inventors

   ```javascript
   const ans1 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
   ```

2. 列出所有 inventors 的名字、姓氏

   ```js
   const ans2 = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
   ```

3. 按出生日期對 inventors 進行排序（從大到小）

   ```js
   const ans3 = inventors.sort((a, b) => a.year - b.year);
   ```

4. 加總所有 inventors 的年齡

   ```js
   const ans4 = inventors.reduce((total, inventor) => {
     return total + (inventor.passed - inventor.year);
   }, 0);
   ```

5. 按離世年齡對 inventors 進行排序（從大到小）

   ```js
   let ans5 = inventors.sort((a, b) => {
     return (a.passed - a.year) - (b.passed - b.year);
   });
   ```

6. 列出 [wiki](https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris) 中所有包含 'de' 的路名

   ```js
   
   ```

7. 按 lastName 的字母順序對 people 進行排序

   ```js
   
   ```

8. 分別加總 data 中每個種類的數量

   ```js
   
   ```


## Array 重點

* **`filter()`**：搜尋陣列中符合條件的元素，並回傳一新陣列。

  `arr.filter(function(element[, index, array])`

  * 不會改變原陣列

* **`map()`**：透過函式內所回傳的值組合成一陣列

  `arr.map(function(value, index[, array])`

  * 不會改變原陣列
  * 若不回傳則是 undefined
  * 回傳數量＝原始陣列的長度

  **💡與 forEach() 相似，差在其會改變原陣列，且不回傳任何東西。** 

* **`sort()`**：將陣列的所有元素進行排序

  `arr.sort([function])`

  * 會改變並回傳原陣列
  * 依每一字元 Unicode 編碼位置來排序

* **`reduce()`**：將陣列中每一元素與回傳值作運算，將陣列化為單一值，常用於累加或比較。

  `arr.reduce(function[accumulator, currentValue, currentIndex, arr, initialValue])`

  * 若無提供 initialValue，則以原陣列的第一個元素將作為初始。

  **💡若無提供 initialValue 且陣列為空則拋出 TypeError**

* **`from()`**：從類陣列 array-like 或可迭代 iterable 物件建立一新陣列物件

  ```js
  console.log(Array.from('foo')); // Array ["f", "o", "o"]
  ```

* **`includes()`**：判斷陣列是否包含一指定的值

  `arr.includes(valueToFind[, fromIndex])`
