# random-txt
Randomize strings easily based on RNG (Random Numbers Generator)

Before using this module, you must put this on "node_modules"

Sample Code to get started using random-txt:

```js
const { system } = require('random-txt')
const randomizer = new system.random_txt({
    txtArray: ['hi','hello!'],
    maxNum: 2,
    targetNum: 1
})

/*
txtArray is list of strings
maxNum is the max number to randomize starting from 1
targetNum is the goal in order for the random text to return. if not then replacement string will be returned

maxNum defaults to 10 if none specified
targetNum defaults to 5 if none specified
*/

console.log(randomizer.randomize('goodbye!'))

//parameter 1 is returned if it didn't randomize a string

```
