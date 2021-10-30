
// Decimal para Octal

function Decimal_para_Octal(DEC){
    let OCTAL = []

    for(var i = DEC; i > 8; i = parseInt(i/8)){
        OCTAL.unshift(i%8)
        
    }

    OCTAL.unshift(parseInt(i))

    return parseInt(OCTAL.toString().replace(/[^0-9]/g,''))
}


console.log(Decimal_para_Octal(59))
console.log(Decimal_para_Octal(157))
console.log(Decimal_para_Octal(1000))
