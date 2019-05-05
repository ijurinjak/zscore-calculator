function trimToZero(objVal) {
    var retVal = "";
    objVal = objVal.trim();
    if (objVal == "") {
        retVal = "";
    }
    else {
        retVal = objVal;
    }
    return retVal;
}
function calculateZScore() {
    var tekucaImovina = 0;
    var netoDobit = 0;
    var tekuceObveze = 0;
    var kamate = 0;
    var ukupnaImovina = 0;
    var ukupneObveze = 0;
    var zadrzaniDobici = 0;
    var porez = 0;
    var trzisnaVrijednostDionica = 0;
    var netoProdaja = 0;
    try {
        tekucaImovina = parseFloat(trimToZero(document.getElementById("tekucaImovina").value));
        netoDobit = parseFloat(trimToZero(document.getElementById("netoDobit").value));
        tekuceObveze = parseFloat(trimToZero(document.getElementById("tekuceObveze").value));
        kamate = parseFloat(trimToZero(document.getElementById("kamate").value));
        ukupnaImovina = parseFloat(trimToZero(document.getElementById("ukupnaImovina").value));
        ukupneObveze = parseFloat(trimToZero(document.getElementById("ukupneObveze").value));
        zadrzaniDobici = parseFloat(trimToZero(document.getElementById("zadrzaniDobici").value));
        porez = parseFloat(trimToZero(document.getElementById("porez").value));
        trzisnaVrijednostDionica = parseFloat(trimToZero(document.getElementById("trzisnaVrijednostDionica").value));
        netoProdaja = parseFloat(trimToZero(document.getElementById("netoProdaja").value));
    }
    catch (err) {
        alert("parse " + err.message);
    }
    var altmanCons12 = 1.2;
    var altmanCons14 = 1.4;
    var altmanCons33 = 3.3;
    var altmanCons06 = 0.6;
    var altmanCons10 = 1.0;
    var medCalc1 = 0;
    var medCalc2 = 0;
    var medCalc3 = 0;
    var medCalc4 = 0;
    var medCalc5 = 0;
    var mainCalc = 0;
    try {
        medCalc1 = isNaN((tekucaImovina - tekuceObveze) / ukupnaImovina) ? 0 : (tekucaImovina - tekuceObveze) / ukupnaImovina;
        medCalc2 = isNaN(zadrzaniDobici / ukupnaImovina) ? 0 : zadrzaniDobici / ukupnaImovina;
        medCalc3 = isNaN((netoDobit + kamate + porez) / ukupnaImovina) ? 0 : (netoDobit + kamate + porez) / ukupnaImovina;
        medCalc4 = isNaN(trzisnaVrijednostDionica / ukupnaImovina) ? 0 : trzisnaVrijednostDionica / ukupnaImovina;
        medCalc5 = isNaN(netoProdaja / ukupnaImovina) ? 0 : netoProdaja / ukupnaImovina;
        mainCalc = (altmanCons12 * medCalc1) +
            (altmanCons14 * medCalc2) +
            (altmanCons33 * medCalc3) +
            (altmanCons06 * medCalc4) +
            (altmanCons10 * medCalc5);
        setZscoreValue(mainCalc.toFixed(2));
    }
    catch (err) {
        alert("calc " + err.message);
    }
    return true;
    function setZscoreValue(value) {
        var zScoreInput = document.getElementById("zscore");
        zScoreInput.value = value;
    }
}
