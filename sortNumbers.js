function solution(nums){
    if(nums === [] || nums === null){
      return []
    }

    let result = [];
// FIND MIN VALUE FIRST
    let minValue;
    let minValueIndex;
    for (let i = 0; i < nums.length ; i++){
      let comparatedValue = nums[i];
// check minValue
// if minValue = undefined //  if i = 0
      if (typeof minValue === "undefined" || comparatedValue < minValue){
        minValue = comparatedValue;
        minValueIndex = i;
      }
    }
    console.log(result)

    
}

solution([ 2, 10, 50, 5,1]);