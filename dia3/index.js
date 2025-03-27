/// let tipoTexto = "2";
/// let tipoNumber =2;
/// let tipoBoolTexto = "true";
/// let tipobool = true;

//let e const 

/*let meuNome = 'Guilherme Silva'
console.log (meuNome)
meuNome = 'Guilherme Henrique'
console.log(meuNome)

console.log('Cosnt!!!!!')

const a = 'Guilherme Silva'
console.log (a)
meuNome = 'Guilherme Henrique'
console.log(a)

let NumUm = 2
let NumDois =10
console.log(NumUm +  NumDois * NumDois / NumUm);*/

/*let entradaDoUsuario = prompt('insira sua idade');
console.log(entradaDoUsuario - 2025);*/


let nome = prompt('Insira Seu Nome');
let idade = prompt('Insira Sua Idade');
let altura = prompt ('Insira Sua Altura');
let peso = prompt ('Insira Seu Peso');

// Calculando o ano em que a pessoa nasceu e o IMC

let anoNasc = 0 
anoNasc = 2025 - idade

//IMC
let imc = 0
imc = peso / (altura * altura)


//Exibindo as informações no Console
console.log('Olá ' + nome + ', Você tem ' + idade + ' anos,' + 'nasceu em ' + anoNasc + ', tem ' + altura + ' de altura, pesa ' + peso + 'kg seu IMC é ' + imc + ' kg/m2' );