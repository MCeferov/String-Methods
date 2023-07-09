" use strict "

// Tasks
// 1. Create a function that takes a string as an argument.
// Check if the length of the string is greater than 20. 
// If it is, write 'String has more than 20 characters' else write 'String has less than 20 characters

// 2. Write all countries that ends with 'stan' to the console

// const countries = [
//   "Kazakhstan",
//   "Azerbaijan",
//   "Lativa",
//   "Uzbekistan",
//   "Turkmenistan",
//   "Iran",
// ];

// 3. Create the sentence below. Use string method to write 'Heil Hitler' 5 times
// "Long live motherland, Heil Hitler! Heil Hitler! Heil Hitler";

// 4. Change all Heil Hitlers with the number 88

// 5. Create a function that takes a string as an argument and 
// check if the given value (sentenve) has more than one word in it.
//  If it is, write console that "The sentenece contains more than one word" else write 'This is a one word sentence'

// 6. Create a function that takes a string as an argument and returns how many words it has

// 7. Create a function that takes firstName and lastName as arguments, and returns them in uppercase as one string

// 8. Get phone number from prompt and store it in a variable, and write console like below

// input 077 455 63 64
// desired output +994-77-455-63-64

// 9. Create creditCard variable and write it to the console like the sentence below

// input - "4169737725524635";
// output - '************4635'

// ! ----- 1.task
// function text(MaybeWeCan)  {
//     if (text.length > 20) {
//     console.log("String has more than 20 characters")
// }else {
//     console.log("String has less than 20 characters")
// }
// }
// text()
// !------- 2.task
//  const countries = [
//        "Kazakhstan",
//        "Azerbaijan",
//        "Lativa",
//        "Uzbekistan",
//       "Turkmenistan",
//       "Iran",
//      ]  

//     for (let i = 0; i < countries.length; i++) {   
//         if(countries[i].endsWith("stan")) {
//             console.log(countries[i])
//         }
//     }


// !------- 3.task
// const expression = "Heil Hitler! "

// const sentence = `Long live motherland , ${expression.repeat(5)}`

// console.log(sentence)
// !----- 4.task
//const expression = "Heil Hitler! "

// const sentence = `Long live motherland , ${expression.repeat(5)}`

// console.log(sentence.replaceAll("Heil Hitler! " ," 88"))


// !------- 5.task
// const sentence = "heil of the world"
// function sentenve() {
// if(sentence.length>1) {
//     console.log("The sentenece contains more than one word")
// } else {
//     console.log("This is a one word sentence")
// }
// }
// sentenve()

// !------- 6.task

// function sentenve(name) {
//    const textArray= name.split(" ")
//     console.log(textArray.length)
// }
// sentenve("heil of the world")

// !------- 7.task

// function self(firstName, lastName){
//    console.log(firstName.toUpperCase().concat( " ", lastName.toUpperCase())); 
// }
// self("Miri" , "Cfrv")

// !------- 8.task

// const phoneNumber= "077 455 63 64"

//     phoneNumber.replace("0", "+994-").replaceAll(" " , "-")
// console.log(  phoneNumber.replace("0", "+994-").replaceAll(" " , "-"))

// !------- 9.task
// const cardNumber = "4169737725524635";
// const creditCard = "4635";
// console.log(creditCard.padStart(16, "*"));
// !------- 


// const sentence = "Mirjafar"

// console.log(sentence.charAt(0))

// let newStr = ""

// for (let i = 0; i < sentence.length; i++) {
// if (i % 2 === 0) { 
// newStr += sentence.charAt(i).toUpperCase();
// } else {
//     newStr += sentence.charAt(i).toLowerCase();
// }
// }
// console.log(newStr)

// const name = "mirjafar"

// console.log(name.replace ( name[0], name[0].toUpperCase()))

