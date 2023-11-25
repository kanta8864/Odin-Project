const removeFromArray = function(array, ...elements) {
    /*
    let result = []
    let index = 0;
    for(let i = 0; i < array.length; i++) {
        if(!elements.includes(array[i])) {
            result[index] = array[i]
            index++
        }
    }
    return result
    */

    // another appraoch
   for(let element of elements) {
    const index = array.indexOf(element)
    if(index != -1) {
        array.splice(index, 1)
        console.log(array)
    }
   }
   return array
};

// Do not edit below this line
module.exports = removeFromArray;
