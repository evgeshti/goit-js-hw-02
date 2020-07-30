const formatString = function (string) {
  const shortString = string.length > 40 ? string.slice(0, 40) + '...' : string;
  return shortString;
};

// ПРЕДЫДУЩЕЕ решение

// if (string.length <= 40) {
//   return string;
// }
// if (string.length > 40) {
//   const shortString = string.slice(0, 40) + '...';
//   return shortString;
// }

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
