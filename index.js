const cnpj = "59.541.264/0001-03"

const formatCnpj = function (cnpj) {
    return cnpj.substring(0, cnpj.length - 2).replace(/([.\-/])/g, "").split("").reverse().join("")
}

const dv = `${calcDv1(formatCnpj(cnpj))}${calcDv2(formatCnpj(cnpj))}`

if(dv !== cnpj.substring(cnpj.length - 2)){
    console.log("Invalid inscription")
} else{
    console.log("Valid inscription")
}

function calcDv1(cnpj) {
    let mutipliers = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5]

    let sum = 0

    let mutipliersCount = 0

    cnpj.split("").forEach(char => {
        sum += char * mutipliers[mutipliersCount]
        mutipliersCount++
    });

    let rest = sum % 11

    return 11 - rest == 10 ? 0 : 11 - rest

}

function calcDv2(cnpj) {
    let mutipliers = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6]

    let sum = 0

    let mutipliersCount = 0

    cnpj.padStart(13, "0").split("").forEach(char => {
        sum += parseInt(char) * mutipliers[mutipliersCount]
        mutipliersCount++
    });

    let rest = sum % 11

    return 11 - rest == 10 ? 0 : 11 - rest

}