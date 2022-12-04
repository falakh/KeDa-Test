/**
 * 
 * @param {Number[]} counts 
 */
 function sort(counts){
   for (let i = 0; i < counts.length; i++) {
    for (let j = i; j < counts.length; j++) {
        const element = counts[j];
        const temp = counts[i]
        if(element < temp){
            counts[i]= element
            counts[j]=temp
        }
    }
    
   }
   return counts;
}



module.exports =sort