const agregar =  (valor) => document.getElementById('pantalla').value += valor

const borrar = () => document.getElementById('pantalla').value = ''

function igual (){
    const agregarPantalla = document.getElementById('pantalla').value
    const  convert = eval(agregarPantalla)
    document.getElementById('pantalla').value = convert
}
