/**
 * 
 * @param {Number} count 
 */
 function printText(count){
    if(count %15 == 0){
        return('fish bash')
    }
    if(count %5 == 0 ){
        return('bash')
    }
    if(count % 3 == 0){
        return('fish')
    }
    return count
}


/**
 * 
 * @param {Number} count 
 */
 function printLoop(count){
   for (let index = 1; index <= count; index++) {
    console.log(printText(index))    
   }
}
module.exports =printLoop