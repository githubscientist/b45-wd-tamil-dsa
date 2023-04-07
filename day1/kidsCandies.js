/**
 * @param {number} totalCandies
 * @param {number} i <- ith Kid
 * @param {number[]} candies
 * @return {boolean}
 */
 // the function should return true, if the totalCandies is greater than all the other position than i kid's candies
 // else return false
var isGreater = function(totalCandies, i, candies){
    // lets assume that the result is true
    let result = true;

    // check and update my assumption 
    // traverse through the candies array
    for(let index=0; index<candies.length; index++){
        if(index!=i){
            // for the positions other than i
            // check if the totalCandies is less than candies[index]
            if(totalCandies < candies[index]){
                // update my assumption to false
                result = false;
            }
        }
    }

    // return my assumption
    return result;
}


/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // 1. initialize the empty boolean result array <- result
    let result = [];
    
    // 2. loop through the candies array <- i
    for(let i=0; i<candies.length; i++){
        // for every position i,
        // find the totalCandies after adding extraCandies with the currentKid @ i position candy 
        let totalCandies = candies[i] + extraCandies;

        // check whether the totalCandies is greater than all the other kids candies
        if(isGreater(totalCandies, i, candies)){
            // if true => push the result true to the boolean array 'result'
            result.push(true);
        } else{
            // if false => push the result false to the boolean array 'result'
            result.push(false);
        }
    }
    
    // 3. return the 'result' boolean array
    return result;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

/*
    Algorithm:

    // 1. initialize the empty boolean result array <- result
    
    // 2. loop through the candies array <- i
        // for every position i,
        // find the totalCandies after adding extraCandies with the currentKid @ i position candy 

        // check whether the totalCandies is greater than all the other kids candies

        // if true => push the result true to the boolean array 'result'

        // if false => push the result false to the boolean array 'result'
    
    // 3. return the 'result' boolean array
*/