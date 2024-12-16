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

// javascript object
// var staff = {
//     fullName: 'Alex',
//     job: 'stock management',
//     age: undefined,
//     disability: null,
//     wagePerDay: 20000,
//     numberOfDaysPresent:20,
//     salary: function(){
//         return this.wagePerDay*this.numberOfDaysPresent
//     },
//     marriedStatus: false,
//     phone: 7080007565,
//     hobbies: ['coding','cooking','movies'],
//     address: {
//         number: 2,
//         street: 'alagomeji',
//         city: 'yaba',
//         state: 'lagos',
//         country: 'Nigeria',
//     }
// }
// console.log(staff.salary())
// staff.marriedStatus = true
// staff.hobbies[0] = 'travelling'
// console.log(staff.hobbies[0])

// // functions
// function greeting(){
//     return console.log('merry christmas')
// }
// greeting()

// function add(x,y){
//     var sum = x+y
//     return console.log(sum)
// }
// add(5,2)
// add(6,8)

// function areaOfCircle(r){
//     var area = Math.PI * (r**2)
//     return console.log(area)
// }
// areaOfCircle(2)

// function perimeterOfTriangle(a,b,c){
//     var perimeter = a+b+c
//     return console.log(perimeter)

// }
// perimeterOfTriangle(5,5,10)

// function areaOfTriangle(b,h){
//     var area = 0.5*(b*h)
//     return console.log(area)
// }
// areaOfTriangle(5,2)

// function salute(name){
//     return console.log('hello ' + name)
// }
// salute('alex')

// switch
// var score = 65
// switch(score){
//     case (score <= 40):
//         console.log('your grade is D')
//         break;
    
//     case (score >= 41 && score <= 50):
//         console.log('your grade is C')
//         break;

//     case (score >= 51 && score <= 70 ):
//         console.log('your grade is B')
//         break;

//     default:
//         console.log('your grade is A')
        
// }

var name = 'Alex'
var phone = 7080007565
var disability = null
var marriedStatus = false
var account = undefined

var fullName = 'kitan'
var job = 'stripper'
var salary = 8000
var club = 'club 234'

var sentence = 'my name is '+ fullName + ' i am a ' + job + ' i earn $' + salary +' at ' + club 
console.log(sentence)

let sentence2 = `my name is ${fullName} i am a ${job} i earn $${salary} at ${club}`
console.log(sentence2)

// if (salary<20000){
//     console.log('poor stripper')
// }else{
//     console.log('rich stripper')
// }

salary>20000 ? console.log('poor stripper') : console.log('rich stripper')

function profit(cp,sp){
    var profit = sp-cp
    return console.log(profit)
}
profit(1000,1500)

function percentageProfit(p,cp){
    var percentageProfit = (p/cp)* 100
    return console.log(percentageProfit)
}
percentageProfit(500,1000)

function areaOfTriangle(b,h){
    var area = 0.5*(b*h)
    return console.log(area)
}
areaOfTriangle(10,5)

function areaOfCylinder(r,h){
    var areaOfCylinder = 2*Math.PI*r*(r+h)
    return console.log(areaOfCylinder)
}
areaOfCylinder(5,7)

function greeting(){
    return console.log('hello everybody')
}
greeting()