const findLongestWord = function (string) {
  const stringArr = string.toLowerCase().split(' ');

  let longestWord = '';
  console.log(stringArr);

  for (let word of stringArr) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
