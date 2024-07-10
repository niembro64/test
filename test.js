function solution(n) {
  const nString = '' + n;

  console.log(nString)

  let nStringArray = nString.split('');

  console.log(nStringArray)

  let sum = 0;
  for (let i = 0; i < nStringArray.length; i++) {
    sum += JSON.parse(nStringArray[i]);
  }

  return sum;
}

console.log(solution(123)); // 6
