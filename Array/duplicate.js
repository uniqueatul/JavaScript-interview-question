var containsDuplicate = function(nums) {
    const map = new Map();
    for (const num of nums) {
        if (map.has(num)) {
            return true;
        }
        map.set(num, true);
    }   
    return false;
}; 

