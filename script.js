//                                  1
let numero1 = parseInt(prompt("Digite o primeiro numero: "));
let numero2 = parseInt(prompt("Digite o segundo numero: "));
let diferencaN1 = numero1 - numero2;
let diferencaN2 = numero2 - numero1;

if (numero1 > numero2) {
    alert(`O maior número é ${numero1} e a diferença é ${diferencaN1}`)
} else {
    alert(`O maior número é ${numero2} e a diferença é ${diferencaN2}`)
}






//                              2
let numero3 = parseFloat(prompt("Digite o primeior numero: "));
let numero4 = parseFloat(prompt("Digite o segundo numero: "));

if (numero3 > numero4) {
    alert(`O número ${numero3.toFixed(1)} é maior que número ${numero4.toFixed(1)}`);
} else if (numero4 > numero3) {
    alert(`O número ${numero4.toFixed(1)} é maior que número ${numero3.toFixed(1)}`);
} else {
    alert("Números iguais");
}





//                                 3
let salario1 = parseFloat(prompt("Digite o seu salario aqui."));
let prestacao1 = parseFloat(prompt("Digite o valor da prestação aqui."));
let porcentagem1 = (30 * salario1) / 100;

if (prestacao1 > porcentagem1) {
    alert("Empréstimo não concedido");
} else {
    alert("Empréstimo concedido");
}



//                                     4
let numero5 = prompt("Digite um numero");
let agoritimo1 = parseInt(numero5[0]);
let agoritimo2 = parseInt(numero5[1]);
let divisivelPor3 = (agoritimo1 + agoritimo2) % 3;
let numeroPar = parseInt(numero5) % 2;
let numeroImpar = parseInt(numero5) % 2;

if (divisivelPor3 == 0 && agoritimo2 == 0) {
    alert("Valor inválido")
} else if (divisivelPor3 == 0 && agoritimo2 == 5) {
    alert("Valor inválido")
} else if (divisivelPor3 == 0 || numero == 3 || numero == 6 || numero == 9) {
    alert("Valor divisível por 3")
} else if (agoritimo1 == 5 || agoritimo1 == 0 || agoritimo2 == 5 || agoritimo2 == 0) {
    alert("Valor divisível por 5")
} else if (numeroPar == 0) {
    alert("É par")
} else if (numeroImpar == 1) {
    alert("E impar")
}



//                            5
let numero = parseInt(prompt("Digite um numero de 1 até 7"));
if (numero === 1) {
    alert("Domingo");
} else if (numero === 2) {
    alert("Segunda-feira");
} else if (numero === 3) {
    alert("Terça-feira");
} else if (numero === 4) {
    alert("Quarta-feira");
} else if (numero === 5) {
    alert("Quinta-feira");
} else if (numero === 6) {
    alert("Sexta-feira");
} else if (numero === 7) {
    alert("Sabado");
} else {
    alert("ERRO Digite um numero de 1 até 7");
}





//                                    6
let salario = parseFloat(prompt("Digite aqui o seu salario."));
let percentual = parseFloat(prompt("Digite aqui o percentual de reajuste, não podendo ser maior que 5%."));
let porcentagem = (percentual * salario) / 100;
let salarioCorrigido = salario + porcentagem;
if (percentual <= 5.0) {
    alert(`O salário do funcionário corrigido é de: ${salarioCorrigido.toFixed(2)}`);
} else {
    alert("Erro o percentual de reajuste não pode ser maior do que 5% digite novamente ");
}




//                               7
let dolar = parseFloat(prompt("Digite quantos dolares voçê quer converter."));
let cotacao = parseFloat(prompt("Qual o valor da cotação atual."));
let real = dolar * cotacao;
alert(`$${dolar.toFixed(2)} é equivalente a R$${real.toFixed(2)} tendo ${cotacao.toFixed(2)} como cotação.`);




//                    8
let praga = parseInt(prompt("Digite o tipo de praga."));
let area = parseFloat(prompt("Digite quantos acres tem o terreno. "));
let valor1 = 50 * area;
let valor2 = 100 * area;
let valor3 = 150 * area;
let valor4 = 250 * area;
if (praga == 1) {
    if (area >= 1000) {
        let desconto5 = (5 * valor1) / 100;
        let descontoArea = valor1 - desconto5;
        let valorAtualizado = descontoArea - 750.00;
        let desconto10 = (valorAtualizado * 10) / 100;
        let valorTotal1 = descontoArea - desconto10;
        alert(`O valor ser pago é de: R$${valorTotal1.toFixed(2)}`);
    } else if (valor1 >= 750.00) {
        let valorAtualizado = valor1 - 750.00;
        let desconto10 = (valorAtualizado * 10) / 100;
        let valorTotal2 = valor1 - desconto10;
        alert(`O valor ser pago é de: R$${valorTotal2.toFixed(2)}`);
    } else {
        alert(`O valor ser pago é de: R$${valor1.toFixed(2)}`);
    }
} else if (praga == 2) {
    if (area >= 1000) {
        let desconto5 = (5 * valor2) / 100;
        let descontoArea = valor2 - desconto5;
        let valorAtualizado = descontoArea - 750.00;
        let desconto10 = (valorAtualizado * 10) / 100;
        let valorTotal1 = descontoArea - desconto10;
        alert(`O valor ser pago é de: R$${valorTotal1.toFixed(2)}`);
    } else if (valor2 >= 750.00) {
        let valorAtualizado = valor2 - 750.00;
        let desconto10 = (valorAtualizado * 10) / 100;
        let valorTotal2 = valor2 - desconto10;
        alert(`O valor ser pago é de: R$${valorTotal2.toFixed(2)}`);
    } else {
        alert(`O valor ser pago é de: R$${valor2.toFixed(2)}`);
    }
} else if (praga == 3) {
    if (area >= 1000) {
        let desconto5 = (5 * valor3) / 100;
        let descontoArea = valor3 - desconto5;
        let valorAtualizado = descontoArea - 750.00;
        let desconto10 = (valorAtualizado * 10) / 100;
        let valorTotal1 = descontoArea - desconto10;
        alert(`O valor ser pago é de: R$${valorTotal1.toFixed(2)}`);
    } else if (valor3 >= 750.00) {
        let valorAtualizado = valor3 - 750.00;
        let desconto10 = (valorAtualizado * 10) / 100;
        let valorTotal2 = valor3 - desconto10;
        alert(`O valor ser pago é de: R$${valorTotal2.toFixed(2)}`);
    } else {
        alert(`O valor ser pago é de: R$${valor3.toFixed(2)}`);
    }
} else if (praga == 4) {
    if (area >= 1000) {
        let desconto5 = (5 * valor4) / 100;
        let descontoArea = valor4 - desconto5;
        let valorAtualizado = descontoArea - 750.00;
        let desconto10 = (valorAtualizado * 10) / 100;
        let valorTotal1 = descontoArea - desconto10;
        alert(`O valor ser pago é de: R$${valorTotal1.toFixed(2)}`);
    } else if (valor4 >= 750.00) {
        let valorAtualizado = valor4 - 750.00;
        let desconto10 = (valorAtualizado * 10) / 100;
        let valorTotal2 = valor4 - desconto10;
        alert(`O valor ser pago é de: R$${valorTotal2.toFixed(2)}`);
    } else {
        alert(`O valor ser pago é de: R$${valor4.toFixed(2)}`);
    }
} else {
    alert("Erro digite uma opção valida para escolha de pagra de 1 a 4");
}




//                                    9
let tempo1 = parseFloat(prompt("Digite aqui o tempo gasto."));
let velocidade = parseFloat(prompt("Digite a Velocidade do veiculo."));
let distancia = tempo * velocidade;
let litrosUsados = distancia / 12;
alert(`Seu veículo percorreu ${distancia} km a ${velocidade} km/h em ${tempo1}h de viagem e consumiu ${litrosUsados.toFixed(2)}l de gasolina`);



//                                            10
let valor = parseFloat(prompt("Digite o valor da prestação."));
let taxa = parseFloat(prompt("Digite o valor da taixa"))
let tempo2 = parseFloat(prompt("Digite o tempo de atraso em dias."))
let prestacao = valor * (taxa / 100) * tempo2;
let total = prestacao + valor;
let testeTempo = Number.isInteger(tempo2)

if (testeTempo == false || tempo2 == 0) {
    alert("Valor inválido o tempo de atraso deve ser em dias");
} else {
    alert(`R$${total}`);
}
