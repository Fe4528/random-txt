exports.random_txt = class Settings {
    constructor(table) {
        this.txtArray = table.txtArray
        this.maxNum = table.maxNum ?? 10
        this.targetNum = table.targetNum ?? 5
    }
    randomize(replacement) {
        if (!Array.isArray(this.txtArray)) {
            throw new Error('type "txtArray" is not an array')
        }
        if (this.targetNum < this.maxNum) {
            throw new Error('type "targetNum" should be lower than "maxNum"')
        }
        let rand_num = Math.round(Math.random()*this.maxNum)
        let rand_txt = Math.round(Math.random()*this.txtArray.length + 1 / 2)
        let target = this.targetNum

        if (rand_num == target) {
            //choose a random string
            return this.txtArray[rand_txt]
        } else {
            //return replacement string if no random text was selected
            return replacement
        }
    }
}

/*
Samples:

txtArray = ["hey", "whats up?"]
- array of strings to randomize

maxNum = 100
- maximum number to randomize from 1

targetNum = 50
- target number. if the randomized number is 50 then select a string in "txtArray"
*/
