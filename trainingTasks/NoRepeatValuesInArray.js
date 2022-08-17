function filterArr (arr) {
    let newArr = []
    for(let i = 0; i< arr.length; i++) {
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j]){
                count ++
            }
        }
        if(count === 1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(filterArr([1,1,2,3,3,4]))

//O(n^2)

//O(n)
function filterArrBetter (arr) {
    let obj = {}

    for(let i = 0; i< arr.length; i++) {
        const el = arr[i]
        if(!obj[el]) {
            obj[el] = 1
        } else {
            obj[el] += 1
        }
    }
    return Object.keys(obj).filter(el => obj[el] === 1)
}

console.log(filterArrBetter([1,1,2,3,3,4,4,4,5,6,7,8,8]))