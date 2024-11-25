let name = 'Renato'
name = '10'
console.log(' Name is: ' + name)

let ageMoreThan18
let age = 18


//conditional operators
if (age < 18) {
    ageMoreThan18 = true
}
else if (age = 18){
    ageMoreThan18= false
    console.log('Passou por igual a 18...')
}   
else{
    ageMoreThan18 = false
}

console.log('Age is more than 18: ' + ageMoreThan18)

ageMoreThan18 = (age > 18) ? true : false

let i = 0
while (i < 5) {
    console.log('i is now: ' + i)
    i++
}

for (i-0; i<5; i++){
    console.log('i is now: ' + i)
}

function product (a,b){
    console.log('passou pela função')
    return a * b
}

let result = product(5, 4)
console.log(result)