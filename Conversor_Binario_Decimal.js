let A = 47
let B = []


for(var i = A; i != 0; i = parseInt(i/2)){
    B.unshift(i % 2)
    //console.log(B)
}

console.log(B.toString().replace(/[^0-9]/g, ''))
