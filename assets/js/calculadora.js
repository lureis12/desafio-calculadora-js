function calculadora () {
    const operacao = Number(prompt('Escolha uma operação: \n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão Real (/) \n 5 - Divisão Inteira (%) \n 6 - Potenciacão (**) '));

    if( !operacao || operacao >= 7) {
        alert('Erro - Digite uma opção válida!');
        calculadora();
    } else { 

        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        if ( !n1 || !n2) {
            alert('Parametros inválidos!');
            calculadora();
        } else {
            function soma () {
                resultado = n1 + n2;
                alert(`O resultado da soma de ${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function subtracao () {
                resultado = n1 - n2;
                alert(`O resultado da subtração de ${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function multiplicao () {
                resultado = n1 * n2;
                alert(`O resultado da soma de ${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function divisaoReal () {
                resultado = n1 / n2;
                alert(`O resultado da divisão de ${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function divisaoInteira () {
                resultado = n1 % n2;
                alert(`O resto da divisao de ${n1} por ${n2} é ${resultado}`);
                novaOperacao();
            }
    
            function potenciacao () {
                resultado = n1 ** n2;
                alert(`O número ${n1} elevado a ${n2}ª é ${resultado}`);
                novaOperacao();
            }
    
            function novaOperacao () {
                let opcao = prompt('Deseja fazer uma nova operação? \n 1 - Sim \n 2 - Não'); 
    
                if (opcao == 1){
                calculadora();
                } else if (opcao == 2) {
                    alert('Até logo!')
                } else {
                    alert('Insira uma opção válida');
                    novaOperacao();
                }

        }

        
        }


        /* if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potenciacao();
        } */

        switch(operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }
    }    
}

calculadora();