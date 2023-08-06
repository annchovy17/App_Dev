console.log('----- for loops -----')
console.log('--- Example 1 ---')
for (let counter = 10; counter>=0; counter--){
    console.log(`Currently counting ${counter}`)
}
console.log('--- Example 2 ---')
let initialNum = parseInt(prompt("Enter a number between 0 and 90"))
for (initialNum; initialNum>=0; initialNum--){
    if(initialNum%5===0){
        console.log(`counting = ${initialNum}`)
    }
}
console.log('--- Example 6 ---')
let cars =['Mazda','Tesla','Dodge','BMW','Porshe']
for(let eachCar of cars){
    console.log(eachCar)
}
console.log('--- Example 8 ---')
for(let outerCounter = 1; outerCounter<=5; outerCounter++){
    console.log(`outer counter = ${outerCounter}`)
    for(let innerCounter = 30; innerCounter>=0; innerCounter -=10){
        console.log(`\t\t inner counter = ${innerCounter}`)
    }
}

console.log('--- Example 9 ---')
let i = 10
while(i>=0){
    console.log(`Currently counting ${i}`)
    i--
}

let userNum = parseInt(prompt("Enter a number: "))
let checkUserNum = isNaN(userNum)
while (checkUserNum){
    userNum = parseInt(prompt("You didn't enter a number! Try again!"))
    checkUserNum = isNaN(userNum)
}
console.log(`You entered ${userNum}`)

console.log('--- Example 11 ---')
for (let counter =5; counter>=-10; counter--){
    if (counter ===-3){
        continue
    }
    else{
    console.log(`counting = ${counter}`)
    }
}
console.log('--- Example 12 ---')
for(let y = -10;y<=10; y++){
    if (y%2===0){
        continue
    }
    else{
        console.log(y)
    }
}
/*---------------------------------------
----------------FUNCTIONS----------------
---------------------------------------*/
function printCount(){
    console.log('--- Example 2 ---')
    for(let n = 3; n>0; n -=1){
        console.log(n)
    }
}

function greeting(name){
    console.log('--- Example 3 ---')
    console.log(`Hello ${name}`)
}

function greet(firstName, lastName){
    console.log('--- Example 5 ---')
    console.log(`Hello ${firstName} ${lastName[0].toUpperCase()}`)

}

// when the function doubleNumber is called and the user didn't enter an argument, number as an argument, the program will ask the user to enter a number. The function will fully run when the user enters an argument

function doubleNumber(number){
    console.log('--- Example 9 ---')
    let number2 = number
    let dNumberCheck = isNaN(number2)
    while (dNumberCheck){
        number2 = parseInt(prompt("You must enter a number! Try again."))
        let dNumberCheck = isNaN(number2)
        if (dNumberCheck === false){
            number2 *=2
            return number2
            break
        }
        else {
            continue
        }
    }
    // let dNumber = number*2
    number *= 2
    return number
}


// APP ACTIVITY - responsive web app