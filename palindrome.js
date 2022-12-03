/**
 * 
 * @param {string} word 
 */
 function palindrome(word){
    const words = word.split('')
    let reverse = ''
    for (let i = words.length-1; i >= 0; i--) {
        reverse += words[i]
     
    }
    return reverse ===word ;
 }
 
 
 
 module.exports =palindrome