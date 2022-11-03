var twoSum = function(nums, target) {
    
    let storage = {};
    for(let i = 0; i < nums.length; i++) {
        
        let complement = target - nums[i];
        
        if(storage[complement] !== undefined) {
            return [storage[complement], i]
        }
        
        storage[nums[i]] = i;
    }    
};
