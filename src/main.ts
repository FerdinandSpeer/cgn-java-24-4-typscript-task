//Step 1: Declare a variable named 'age' of type 'number' and assign a value to it.
const age: number = 35

//Step 2: Write a 'for' loop that outputs the numbers from 1 to 'age'.
for (let i = 0; i < age; i++) {
    console.log(i)
}

// Step 3: Use an 'if-else' statement to check if 'age' is greater than 18.
// Display appropriate messages depending on whether the condition is met or not.
if (age >= 18){
    console.log("You are older then 18!")
} else{
    console.log("You are younger Then 18!")
}

// Step 4: Declare a variable named 'score' of type 'number' and assign it the value 0.
const score:number = 0

// Step 5: Use an 'if' statement to check if 'score' has a value.
// Display 'Score is available.' if 'score' has a value other than 0.
if (score !== null){
    console.log("Score is available")
} else {
    console.log("Score has no Value")
}

// Step 6: Use an 'if-else' statement to check if 'score' is evaluated as a 'truthy' value.
// Display 'Score is evaluated as truthy.' if 'score' is considered 'truthy'.
if(score === null){
    console.log("Score is truthy")
} else {
    console.log("Score is falsy")
}

// Step 7: Declare a variable named 'username' of type 'string' and assign it the value '' (empty string).
const username:string = ""

// Step 8: Use an 'if' statement to check if 'username' has a value.
// Display 'Username is available.' if 'username' has a value.
if (username !== null){
    console.log("Username is available")
}

// Step 9: Use an 'if-else' statement to check if 'username' is evaluated as a 'falsy' value.
// Display 'Username is evaluated as falsy.' if 'username' is considered 'falsy'.
if (username === null){
    console.log("Username is null")
} else {
    console.log("Username is falsy")
}

// Step 10: Declare a variable named 'isAdmin' of type 'boolean' and assign it the value 'false'.
const isAdmin:boolean = false

// Step 11: Use an 'if-else' statement to check if 'isAdmin' is evaluated as a 'truthy' value.
// Display 'isAdmin is evaluated as truthy.' if 'isAdmin' is considered 'truthy'.
if (isAdmin !== null){
    console.log("isAdmin is truthy")
} else {
    console.log("Admin is falsy")
}

// Step 12: Use an 'if' statement to check if 'isAdmin' is 'false'.
// Display 'isAdmin is false.' if 'isAdmin' has the value 'false'.
if (isAdmin === false){
    console.log("isAdmin is false")
}