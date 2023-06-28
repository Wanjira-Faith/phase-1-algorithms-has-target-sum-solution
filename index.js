function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers ={};

  for(const num of array){
    const complement = target-num;
    if(complement in seenNumbers) return true;
    seenNumbers[num] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  runtime:o(n)
*/

/* 
  Add your pseudocode here
  create an object to keep track of numbers
  iterate through each number in the array
  for the current num,identify a complement that adds to the target(comp=target-num)
  check if any key the object is the complement
  if so return true
  else,add that number to the object
  if I reach the end of the array return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
