const total      = document.querySelector("#total");
const consignado = document.querySelector("#consignado");
const resultado  = document.querySelector("#resultado");
const calcular   = document.querySelector("#calcular");


total.addEventListener("change", () => {
    let value = total.value;
    if(value.includes('.')){
        value = value.replace('.','')
    }
    if(value.includes(',')){
        value = value.replace(',','')
    }
    if(isNaN(value)) {
        alert("Ingrese solo numeros")
        return;
    }

    let myNumeral = window.numeral(parseInt(value))

    let currencyString = myNumeral.format('0,0');
    let currencyUpdate = currencyString.replace(',', '.')
    total.value = currencyUpdate;
})
consignado.addEventListener("change", () => {
    let value = consignado.value;
    if(value.includes('.')){
        value = value.replace('.','')
    }
    if(value.includes(',')){
        value = value.replace(',','')
    }
    if(isNaN(value)) {
        alert("Ingrese solo numeros")
        return;
    }

    let myNumeral = window.numeral(parseInt(value))

    let currencyString = myNumeral.format('0,0');
    let currencyUpdate = currencyString.replace(',', '.')
    consignado.value = currencyUpdate;
})



calcular.addEventListener("click", () => {
    var totalD = total.value;
    var consD  = consignado.value;

    if(totalD.includes('.') || consD.includes('.')){
        totalD = totalD.replace('.','')
        consD  = consD.replace('.','')
    }
    if(totalD.includes(',') || consD.includes(',')){
        totalD = totalD.replace(',','')
        consD  = consD.replace(',','')
    }

    if(isNaN(totalD) || isNaN(consD)) {
        alert("Ingrese solo numeros")
        return;
    }

    var totalInt    = parseInt(totalD) || 0;
    var consignaInt = parseInt(consD) || 0;

    var resultadoD = totalInt - consignaInt;

    let resultNumeral = window.numeral(resultadoD);
    let resultFormat  = resultNumeral.format('0,0');

    resultado.innerHTML = `$${resultFormat}`;


})