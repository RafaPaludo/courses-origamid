/**
 * Arrays podem ter dois tipos de notações, uma delas é com interface Array<Type> e outra é type[];
*/

const numbers = [10, 40, 60, 70]
const values = [60, "Valor", 90, "$$", 500]

function plusTen(nums: number[]) {
    nums.forEach( (num) => console.log(num + 10) )
}

function filterValues(data: Array<number | string>) {
    var result = data.filter( value => typeof value === 'number' )
    console.log(result)
}

plusTen(numbers)
filterValues(values)