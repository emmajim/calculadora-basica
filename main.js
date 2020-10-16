// alert('Bienvenido')//modal salida
// var numeroLeido=parseInt(prompt('Lea primer numero'))//modal de entrada
// var numeroLeido2=parseInt(prompt('Lea segundo numero'))//modal de entrada
// var numero3=numeroLeido2+numeroLeido
// var numero4=numeroLeido-numeroLeido2
// alert('la suma de los numeros es: '+numero3)
// alert('la resta de los numeros es: '+numero4)
// alert('la multiplicacion de los numeros es: '+numeroLeido*numeroLeido2)
// alert('la division de los numeros es: '+numeroLeido/numeroLeido2)


document.getElementById('btnejecutar')
        .addEventListener('click',ejecutar)

function ejecutar() {
    var numeroLeido1=parseInt(document.getElementById('Txtnumero1').value)
    var numeroLeido2=parseInt(document.getElementById('Txtnumero2').value)
    var numero3=numeroLeido2+numeroLeido1
    var numero4=numeroLeido1-numeroLeido2
    var numero5=numeroLeido1*numeroLeido2
    var numero6=numeroLeido1/numeroLeido2
    
    console.log('la suma es  ',numero3)
    console.log('la resta es ',numero4)
    console.log('la multiplicacion es',numero5)
    console.log('la division es',numero6)
}

