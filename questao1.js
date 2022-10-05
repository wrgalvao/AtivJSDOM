var valores = []
var i = 0
while(i < 10)
{
    valores[i] = parseInt(prompt("Digite o valor"))
    i++
}
//estão no intervalor
var contador = 0
var dentroIntervalo = 0
var foraIntervalo = 0
while(contador < valores.length)
{
    if(valores[contador] >= 10 && valores[contador] <= 20)
    {
        dentroIntervalo++
    }
    else if(valores[contador] > 20 && valores[contador] < 10)
    {
        foraIntervalo++
    }
    contador++
}
alert(`Quantidade dentro do intervalor e ${dentroIntervalo}`)
alert(`Quantidade fora do intervalo e ${foraIntervalo}`)

