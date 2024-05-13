ejecutarSumar = () => {
    let valor1 = recuperarEntero("txtValor1");
    let valor2 = recuperarEntero("txtValor2");
    let resultadoSuma;
    console.log("Valor 1 >>>"+valor1+"Valor 2 >>>"+valor2);
    resultadoSuma = sumar(valor1,valor2);
    console.log(resultadoSuma);
}

ejecutarResta = () => {
    let valor1 = recuperarFloat("txtValor1");
    let valor2 = recuperarFloat("txtValor2");
    let resultadoResta = restar(valor1,valor2);
    
    console.log("El resultado de la resta es: "+resultadoResta);
}

sumar = (sum1,sum2) => {
    let resultado;
    resultado = sum1 + sum2;
    return resultado;
}

restar = (num1,num2) => {
    let resultado;
    resultado = num1 - num2;
    return resultado;
}

