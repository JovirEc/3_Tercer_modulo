ejecutarOperacion = (operar) => {
    let valor1 = recuperarEntero("txtValor1");
    let valor2 = recuperarEntero("txtValor2");
    let resultado;
    resultado = operar(valor1,valor2);
    console.log(resultado);
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

ejecutar = (fn) => {
    console.log("Estoy ejecutando funciones..");
    fn();
}

imprimir = () => {
    console.log("Estoy imprimiendo");
}

saludar = () => {
    alert("Aprendiendo Programación Funcional");
}

testEjecutar = () => {
    ejecutar(imprimir);
    ejecutar(saludar);
    ejecutar(() => {
        alert("Soy una función anónima");
    })

}

