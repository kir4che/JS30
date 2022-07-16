const inventors = [{
  first: 'Albert',
  last: 'Einstein',
  year: 1879,
  passed: 1955
}, {
  first: 'Isaac',
  last: 'Newton',
  year: 1643,
  passed: 1727
}, {
  first: 'Galileo',
  last: 'Galilei',
  year: 1564,
  passed: 1642
}, {
  first: 'Marie',
  last: 'Curie',
  year: 1867,
  passed: 1934
}, {
  first: 'Johannes',
  last: 'Kepler',
  year: 1571,
  passed: 1630
}, {
  first: 'Nicolaus',
  last: 'Copernicus',
  year: 1473,
  passed: 1543
}, {
  first: 'Max',
  last: 'Planck',
  year: 1858,
  passed: 1947
}, {
  first: 'Katherine',
  last: 'Blodgett',
  year: 1898,
  passed: 1979
}, {
  first: 'Ada',
  last: 'Lovelace',
  year: 1815,
  passed: 1852
}, {
  first: 'Sarah E.',
  last: 'Goode',
  year: 1855,
  passed: 1905
}, {
  first: 'Lise',
  last: 'Meitner',
  year: 1878,
  passed: 1968
}, {
  first: 'Hanna',
  last: 'Hammarström',
  year: 1829,
  passed: 1909
}];

const people = ['Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig', 'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving', 'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano', 'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose', 'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'];


// 問題 1：篩選 1500's（1500-1599）出生的 inventors
const ans1 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);

console.log(ans1);

// 問題 2：列出所有 inventors 的名字、姓氏
const ans2 = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

console.log(ans2);

// 問題 3：按出生日期對 inventors 進行排序（從大到小）
const ans3 = inventors.sort((a, b) => a.year - b.year);

console.log(ans3);

// 問題 4：加總所有 inventors 的年齡
const ans4 = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(ans4);

// 問題 5：按離世年齡對 inventors 進行排序（從大到小）
let ans5 = inventors.sort((a, b) => {
  return (a.passed - a.year) - (b.passed - b.year);
});

console.log(ans5);

// 問題 6：列出 wiki 中所有包含 'de' 的路名
// const links = Array.from(document.querySelectorAll('.mw-category a'));
// const ans6 = links
//   .map(link => link.textContent)
//   .filter(streetName => streetName.includes('de'));

// console.log(ans6);

// 問題 7：按 lastName 的字母順序對 people 進行排序
const ans7 = people.sort((a, b) => {
  const [aFirst, aLast] = a.split(', ');
  const [bFirst, bLast] = b.split(', ');
  return aLast > bLast ? 1 : -1;
});

console.log(ans7);

// 問題 8：分別加總 data 中每個種類的數量
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const ans8 = data.reduce((obj, item) => {
  if (!obj[item]) obj[item] = 0;
  obj[item]++;
  return obj;
}, {});

console.log(ans8);