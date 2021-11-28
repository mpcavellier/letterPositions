const letterPositions = function(str) {
    const results = {};
        //nested function to return an array of all indices of a char within string
        function getIndices(char, str){
        var currentCharArray = [];
        i = -1;
            //while loop to push index to currentCharArray
            while((i = str.indexOf(char, i+1)) >= 0) { //While we haven't reached the end of the string yet and there is a current index still
            //push index to currentCharArray
            currentCharArray.push(i);
            }
        //return an array of all indices of current char within the string
        return currentCharArray;
        }
    //for every char within the string
    for(const char of str){
        //Javascript objects cannot have duplicate keys so no dupe keys/chars are made in the object
        //for every char create a key of char : and value of an array of all char's indices within a string
        results[char] = getIndices(char, str);
        }
    //return results object to main function
    return results;
  };

console.log(letterPositions("LHL"));
