// // // selection procesisng
// // var age = 17
// // if(age > 17){
// //     console.log("you can vote")
// // }else{
// //     console.log('you cant vote')
// // }

// // variable declaration
// // var fullName
// // var married
// // var numberOfChildren
// // var disability
// // var accountNumber

// // // variable assignment
// // fullName = 'Detumo Alex'
// // married = false
// // numberOfChildren = 2
// // disability = null
// // accountNumber = undefined

// // variable initialization
// var fullName ='Detumo Alex'
// var married = false
// var numberOfChildren = 2
// var disability = null 
// var accountNumber = undefined

// // console.log
// console.log(fullName)
// console.log('numberOfChildren')
// console.log('20+20')
// console.log('hello world')


// // string operators
// var sentence = 'i am going to be a very good software developer'
// console.log(sentence.length)
// console.log(sentence.toUpperCase())
// console.log(sentence.toLowerCase())

// // concatenation
// var favouriteTeam = 'manchester united'
// var favouritePlayer = 'amad'
// var ability = 'very good'
// var sentence2 = 'my favourite player is ' + favouritePlayer + ' he plays for ' + favouriteTeam + ' and he is ' + ability
// console.log(sentence2)

// // arithmetic operators
// var x = 5
// var y = 3
// var z = 7
// console.log(z-x)
// console.log(x+y)
// console.log(y*x)
// console.log(z/x)
// console.log(z%y)
// console.log(x**y)

// // math operators
// console.log(Math.sqrt(144))
// console.log(Math.pow(16,8))
// console.log(Math.round(4.6))
// console.log(Math.round(4.4))
// console.log(Math.floor(4.6))
// console.log(Math.ceil(4.6))

// // assignment operators
// var num1 = 25
// var num2 = 35
// var num3 = 15

// num1 += num3
// console.log(num1)
// num2 -= num3
// num3 -= num2
// console.log(num3)

// comparison operators
// console.log(5==5)
// console.log(5==6)
// console.log(5=='5')


// console.log(5==='5')
// console.log((6**1)==(2*3))
// console.log(5!=6)
// console.log(5!=='5')
// console.log(100>17)
// console.log(18<=18)

function analyzeSentence() {
    let length = 0; // Counter for the number of characters
    let wordCount = 0; // Counter for the number of words
    let vowelCount = 0; // Counter for the number of vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']); // Set of vowels

    let sentence = prompt("Enter a sentence ending with a period ('.'): This is a test."); // Read the sentence from the user

    if (!sentence.endsWith('.')) {
        console.log("Sentence must end with a period ('.').");
        return;
    }

    let prevChar = null;
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (char === '.') {
            // Handle the last word before the period
            if (prevChar && prevChar !== ' ') {
                wordCount++;
            }
            break;
        }

        if (char !== ' ') {
            length++; // Count non-space characters
        }

        if (vowels.has(char)) {
            vowelCount++; // Count vowels
        }

        if (char === ' ' && prevChar && prevChar !== ' ') {
            wordCount++; // Increment word count on space
        }

        prevChar = char; // Update the previous character
    }

    // Output the results
    console.log("Length of the sentence (excluding '.'): " + length);
    console.log("Number of words: " + wordCount);
    console.log("Number of vowels: " + vowelCount);
}

// Example usage
analyzeSentence();
