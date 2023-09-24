
const agregar = (valor) => document.getElementById('pantalla').value += valor

const borrar = () => document.getElementById('pantalla').value = ''

function igual (){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}