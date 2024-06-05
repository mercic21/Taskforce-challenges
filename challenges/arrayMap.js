function hasContiguousSubarraySum(arr, target) {
    // Initialize a hash table to store seen sums and their corresponding indices
    const seen = {};
    
    // Initialize current sum to 0
    let currentSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      // Add current element to current sum
      currentSum += arr[i];
      
      // If current sum is equal to target, a subarray is found
      if (currentSum === target) {
        return true;
      }
      
      // Check if the difference between target and current sum has been seen before
      const needed = currentSum - target;
      if (seen[needed] !== undefined) {
        // If yes, a subarray starting from seen[needed] index sums up to the difference (target)
        return true;
      }
      
      // Update hash table with current sum and its index
      seen[currentSum] = i;
    }
    
    // If no subarray is found after iterating through the entire array, return false
    return false;
  }
  