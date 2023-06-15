function solution(nums){
    if(nums === [] || nums === null){
      return []
    }
    let tableLength = nums.length;
    let result = [];
// FIND MIN VALUE FIRST
    for(let j = 0; j < tableLength; j++) {
      let minValue;
      let minValueIndex;
      for (let i = 0; i < nums.length ; i++) {
        let comparatedValue = nums[i];
  // check minValue
  // if minValue = undefined //  if i = 0
        if (typeof minValue === "undefined" || comparatedValue < minValue){
          minValue = comparatedValue;
          minValueIndex = i;
        }
      }
      result.push(nums[minValueIndex])
      nums.splice(minValueIndex, 1);
  // console.log(nums);  
    }
  // console.log("result :", result);
}
solution([2, 10, 50, 5, 1]);