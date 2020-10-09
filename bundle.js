"use strict";

//Alíquotas atuais para desconto de INSS
var aliquota_1_INSS = 0.075;
var aliquota_2_INSS = 0.09;
var aliquota_3_INSS = 0.12;
var aliquota_4_INSS = 0.14; //Alíquotas atuais para desconto de IRRF

var aliquota_1_IRRF = 0.075;
var aliquota_2_IRRF = 0.15;
var aliquota_3_IRRF = 0.225;
var aliquota_4_IRRF = 0.275; //Variáveis auxiliares utilizadas no cálculo para serem exibidas na tabela de resultados

var aliquotaINSSAux = null;
var aliquotaIRRFAux = null;
var descontoINSSAux = null;
var descontoIRRFAux = null;

function calcularSalarioLiquido() {
  document.getElementById("divTabelaResultados").style.display = 'none';
  var salarioBruto = document.getElementById("salarioBruto").value;
  console.log(salarioBruto);

  if (!salarioBruto || salarioBruto < 1045) {
    alert("Informe um salário maior ou igual a R$ 1.045,00.");
    return false;
  }

  var salarioLiquido = calcularSalarioDescontoIRRF(calcularSalarioDescontoINSS(salarioBruto));
  document.getElementById("aliquotaINSS").innerHTML = aliquotaINSSAux;
  document.getElementById("aliquotaIRRF").innerHTML = aliquotaIRRFAux != null ? aliquotaIRRFAux : '---';
  document.getElementById("valorINSS").innerHTML = parseFloat(descontoINSSAux).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  document.getElementById("valorIRRF").innerHTML = parseFloat(descontoIRRFAux).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  document.getElementById("valorSalarioLiquido").innerHTML = parseFloat(salarioLiquido).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  document.getElementById("divTabelaResultados").style.display = 'block';
}

function calcularSalarioDescontoINSS(salarioBruto) {
  var salario = parseFloat(salarioBruto);
  var descontoINSS = 0;

  if (salario <= 1045.00) {
    descontoINSS = salario * aliquota_1_INSS;
    aliquotaINSSAux = aliquota_1_INSS * 100 + '%';
  } else if (salario >= 1045.01 && salario <= 2089.60) {
    descontoINSS = salario * aliquota_2_INSS;
    aliquotaINSSAux = aliquota_2_INSS * 100 + '%';
  } else if (salario >= 2089.61 && salario <= 3134.40) {
    descontoINSS = salario * aliquota_3_INSS;
    aliquotaINSSAux = aliquota_3_INSS * 100 + '%';
  } else if (salario >= 3134.41 && salario <= 6101.06) {
    descontoINSS = salario * aliquota_4_INSS;
    aliquotaINSSAux = aliquota_4_INSS * 100 + '%';
  } else {
    //Desconto para salários superiores a R$ 6.101,06
    descontoINSS = 642.34;
  }

  descontoINSSAux = descontoINSS;
  return salario - descontoINSS;
}

function calcularSalarioDescontoIRRF(salarioINSS) {
  var salario = parseFloat(salarioINSS);
  var descontoIRRF = 0;

  if (salario <= 1903.98) {
    descontoIRRF = 0;
  } else if (salario >= 1903.99 && salario <= 2826.55) {
    descontoIRRF = salario * aliquota_1_IRRF;
    aliquotaIRRFAux = aliquota_1_IRRF * 100 + '%';
  } else if (salario >= 2826.56 && salario <= 3751.05) {
    descontoIRRF = salario * aliquota_2_IRRF;
    aliquotaIRRFAux = aliquota_2_IRRF * 100 + '%';
  } else if (salario >= 3751.06 && salario <= 4664.68) {
    descontoIRRF = salario * aliquota_3_IRRF;
    aliquotaIRRFAux = aliquota_3_IRRF * 100 + '%';
  } else if (salario > 4664.68) {
    descontoINSS = salario * aliquota_4_IRRF;
    aliquotaIRRFAux = aliquota_4_IRRF * 100 + '%';
  }

  descontoIRRFAux = descontoIRRF;
  return salario - descontoIRRF;
}
