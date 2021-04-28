function findNumber(str) {
  var arr = [];
  for (var i = 0; i < 10; i++) {
    if (Number(str.replace("*", i)) % 3 == 0) {
      arr.push(str.replace("*", i))
    }
  }
  return arr;
}
