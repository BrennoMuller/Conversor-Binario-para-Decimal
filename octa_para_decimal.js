// Octal para Decimal

// octal         =        2         3         3
// valor posição =       8^2       8^1       8^0
// calculo       =     2*(8^2) + 3*(8^1) + 3*(8^0)

function Octal_para_Decimal(OCTAL){
    var res = 0
    //number
    OCTAL = parseInt(OCTAL)
    // string
    for(var i = 0; i < OCTAL.toString().length; i++){ 
        res = res + (parseInt(OCTAL.toString()[i]) * Math.pow(8, OCTAL.toString().length-(i+1)))
        //console.log(`${OCTAL.toLocaleString()[i]} * 8 ^ ${OCTAL.length-(i+1)} = ${res}`) ## exibir processo
    }

    return parseInt(res)
}

console.log(Octal_para_Decimal('0723')) //DEVE SER STRING
