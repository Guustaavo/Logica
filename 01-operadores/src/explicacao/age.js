import leia from 'readline-sync';

var idade, meses, dias;

idade = leia.questionInt("TYPE YOUR AGE: ");
meses = idade * 12;
dias = idade * 365;

console.log("VOCÊ TEM " + idade + " ANOS DE IDADE, " + meses + " MESES DE VIDA E " + dias + " DIAS DE VIDA.");