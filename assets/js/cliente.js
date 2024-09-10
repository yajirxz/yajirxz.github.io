function saludar(){
    console.log('Diseño web 1')
    //alert('Diseño web 1')
    console.log(document)
    console.log(document.getElementById('Parrafo1').innerHTML)
    console.log(document.getElementById('Parrafo1').getAttribute('style'));
}

function cambiaParrafo2(){
    //cambiar el texto del parrafo con el boton
    //console.log(document.getElementById('parrafo2').innerHTML='HOLA MUNDO');
    document.getElementById('parrafo2').innerHTML='HOLA MUNDO'

}

function cambiarfondobody(){
    const colores = ['#BFFFFFF', '#33FF57', '#2222FF', '#22FF11', '#FF2222', '#B9B029'];
    const colorArea = colores[Math.floor(Math.random() * 6)];
    console.log(colorArea);
    document.getElementById('cuerpo').style.backgroundColor = colorArea;
}