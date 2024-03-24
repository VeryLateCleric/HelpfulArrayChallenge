const arrayA = [1 , 3 , 3 , 6 , 6 , 7 , 9 ];
const arrayB = [ 2 , 3 , 5 , 7 ];

function excludeIfInBoth(firstArray, secondArray) {
    let foundNumbers = []

    for (let num of arrayA) {
        foundNumbers.push(num);
    }
    
    return foundNumbers;
}

module.exports = excludeIfInBoth;