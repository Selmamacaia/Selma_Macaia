// 1️ Imprimindo Números Pares
function imprimePares(n) {
    console.log(`Imprimindo os números pares de 0 até ${n}:`);
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) console.log(i);
  }
}
imprimePares(10);

console.log('\n----------------------------\n');

// 2️ Soma dos Números de um Array
function somaArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

console.log(`A Soma do array [1, 2, 3, 4, 5] é igual a : ${somaArray([1, 2, 3, 4, 5])} `);

console.log('\n----------------------------\n');


// 3️ Identificar Número Primo
function ePrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Teste com mensagens explicativas
function verificaNumeroPrimo(n) {
  const resultado = ePrimo(n);
  console.log(`O número ${n} é ${resultado ? 'verdadeiro' : 'falso'}, ele ${resultado ? 'é' : 'não é'} primo.`);
}

// Teste os números
verificaNumeroPrimo(7);
verificaNumeroPrimo(10);

console.log('\n----------------------------\n');

// 4️ FizzBuzz
function fizzBuzz() {
    console.log(`Substituindo múltiplos de 3 por "Fizz"e múltiplos de 5 por "Buzz""`)
  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}
fizzBuzz();

console.log('\n----------------------------\n');

// 5️ Contador de Vogais
function contaVogais(str) {
  const vogais = str.match(/[aeiouáéíóúãõâêîôû]/gi);
  return vogais ? vogais.length : 0;
}

const frase = "Node.js é incrível";
const totalVogais = contaVogais(frase);
console.log(` A frase "${frase}" tem ${totalVogais} vogais.`);


console.log('\n----------------------------\n');

// 6️ Tabuada de um Número
function tabuada(n) {
    console.log(`Tabuada`)

  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
tabuada(5);

console.log('\n----------------------------\n');

// 7️ Inverter String
function inverteString(str) {
    console.log(`Inversor de string`)

  return str.split('').reverse().join('');
}
console.log(inverteString("hello"));

console.log('\n----------------------------\n');

// 8️ Encontre o Maior Número
function maiorNumero(arr) {
  console.log(` Localizador de número maior no array abaixo:`);
  return Math.max(...arr);
}

const numeros = [3, 10, 6, 2];
console.log(` O maior número no array ${JSON.stringify(numeros)} é: ${maiorNumero(numeros)}`);



console.log('\n----------------------------\n');

// 9️ Palíndromo
function ePalindromo(str) {
  const s = str.toLowerCase().replace(/[\W_]/g, '');
  return s === s.split('').reverse().join('');
}

// Frases de teste
const frase1 = "Ame a ema";
const frase2 = "Olá mundo";

// Verifica e imprime resultados com mensagens
function verificaPalindromo(frase) {
  const resultado = ePalindromo(frase);
  console.log(` A frase "${frase}" é ${resultado ? 'verdadeira' : 'falsa'}, ela ${resultado ? 'é' : 'não é'} um palíndromo.`);
}

verificaPalindromo(frase1);
verificaPalindromo(frase2);


console.log('\n----------------------------\n');

// 10 Média de Notas
function calculaMedia(notas) {
    console.log(`Calculadora de média`)
  const media = notas.reduce((a, b) => a + b, 0) / notas.length;
  const status = media >= 7 ? "Aprovado" : "Reprovado";
  return `${status} - Média: ${media.toFixed(1)}`;
}
console.log(calculaMedia([8, 7, 6]));
console.log(calculaMedia([5, 6, 4]));

console.log('\n---------------------------- Fim do desafio\n');
