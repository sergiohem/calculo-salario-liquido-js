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
  var salarioBruto = parseFloat(document.getElementById("salarioBruto").value.replace('.', '').replace(',', '.'));

  if (!salarioBruto || salarioBruto < 1045) {
    alert("Informe um salário maior ou igual a R$ 1.045,00.");
    return false;
  } //Resetando aliquotas auxiliares para novo cálculo


  aliquotaINSSAux = null;
  aliquotaIRRFAux = null;
  descontoINSSAux = null;
  descontoIRRFAux = null;
  var salarioLiquido = calcularSalarioDescontoIRRF(calcularSalarioDescontoINSS(salarioBruto));
  document.getElementById("aliquotaINSS").innerHTML = aliquotaINSSAux != null ? aliquotaINSSAux : '---';
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
    console.log('teste');
    descontoINSS = salario * aliquota_1_INSS;
    aliquotaINSSAux = parseFloat((aliquota_1_INSS * 100).toFixed(1)) + '%';
  } else if (salario >= 1045.01 && salario <= 2089.60) {
    descontoINSS = salario * aliquota_2_INSS;
    aliquotaINSSAux = parseFloat((aliquota_2_INSS * 100).toFixed(1)) + '%';
  } else if (salario >= 2089.61 && salario <= 3134.40) {
    descontoINSS = salario * aliquota_3_INSS;
    aliquotaINSSAux = parseFloat((aliquota_3_INSS * 100).toFixed(1)) + '%';
  } else if (salario >= 3134.41 && salario <= 6101.06) {
    descontoINSS = salario * aliquota_4_INSS;
    aliquotaINSSAux = parseFloat((aliquota_4_INSS * 100).toFixed(1)) + '%';
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
    aliquotaIRRFAux = parseFloat((aliquota_1_IRRF * 100).toFixed(1)) + '%';
  } else if (salario >= 2826.56 && salario <= 3751.05) {
    descontoIRRF = salario * aliquota_2_IRRF;
    aliquotaIRRFAux = parseFloat((aliquota_2_IRRF * 100).toFixed(1)) + '%';
  } else if (salario >= 3751.06 && salario <= 4664.68) {
    descontoIRRF = salario * aliquota_3_IRRF;
    aliquotaIRRFAux = parseFloat((aliquota_3_IRRF * 100).toFixed(1)) + '%';
  } else if (salario > 4664.68) {
    descontoIRRF = salario * aliquota_4_IRRF;
    aliquotaIRRFAux = parseFloat((aliquota_4_IRRF * 100).toFixed(1)) + '%';
  }

  descontoIRRFAux = descontoIRRF;
  return salario - descontoIRRF;
} //Função extraída do link: https://pt.stackoverflow.com/a/360910


function formatarMoeda(i) {
  var v = i.value.replace(/\D/g, '');
  v = (v / 100).toFixed(2) + '';
  v = v.replace(".", ",");
  v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
  v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
  i.value = v;
}
