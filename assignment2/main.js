// Ndeye Anta Mbaye
// Aassignment 2
// 5 September 2024

// 1. Variables and Data Types
//Declaration
let name
let age
let isStudent
//Assignment and output
name = 'Lea'
console.log(name + ' - String')
age = 22
console.log(age + ' - Number')
isStudent = true
console.log(isStudent +' - Boolean')
console.log('---')

// 2. Basic Arithmetic Operations
//Declaration
let a = 5
let b = 8
//Operations and output
let addition = a + b
console.log('Addition: '+ addition)
let subtract = a - b
console.log('Substraction: '+ subtract)
let multiply = a * b
console.log('Multiplication: '+ multiply)
let divide = a / b
console.log('Division: '+ divide)
console.log('---')

// 3. Working with Strings
//Declaration
let sentence = "My favorite meal is lasagna"
//Output
console.log('Sentence length: '+ sentence.length)
console.log('First character: '+ sentence.at(0))
console.log('Last character: '+ sentence.at(sentence.length - 1))
console.log('---')

// 4. Math Object
//Variable declaration and math operations
let negativeNumber = -21
let squareRoot = Math.sqrt(negativeNumber)
let numberSquared = Math.pow(negativeNumber, 2)
let absoluteValue = Math.abs(negativeNumber)
//Output
console.log('Square root: '+ squareRoot)
console.log('Number square: '+ numberSquared)
console.log('Absolute value: '+ absoluteValue)
console.log('---')

// 5. Boolean Logic and Comparison Operators
//Declaration
let x = 4
let y = 6
//Compare numbers
console.log('x less than y: '+ (x<y))
console.log('x greater than y: '+ (x>y))
console.log('x equals to y: '+ (x==y))
console.log('---')

// 6. Logical Operators
//Declaration
let boolean1 = true
let boolean2 = false
//Output
console.log('And result: ' + (boolean1&&boolean2))
console.log('Or result: ' + (boolean1||boolean2))
console.log('Not boolean1: ' + !boolean1)
console.log('Not boolean2: ' + !boolean2)
console.log('---')

// 7. Using Template Literals
//Variable and string declaration with template literals
let var1 = 'Lilian'
let var2 = 'Marcus'
let greeting = `Good morning ${var1} and ${var2}!`
//Output
console.log(greeting)