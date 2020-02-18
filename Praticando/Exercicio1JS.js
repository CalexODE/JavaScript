var nome = prompt("Qual o seu nome?")
var altura_CM = parseFloat(prompt("Sua altura em Centímetros:"))
var peso = parseFloat(prompt("Seu peso:"))

var altura_M = altura_CM/100

var massa = peso/(altura_M * altura_M)

var texto
if(massa < 16){
    texto = "<h2>"+ nome +" possui índice de massa corporal igual a "+massa+", sendo classificado como baixo peso muito grave</h2>"
}
else if(massa >= 16 && massa <= 16.99){
    texto = "<h2>"+ nome +" possui índice de massa corporal igual a "+massa+", sendo classificado como baixo peso grave</h2>"
}
else if(massa >= 17 && massa <= 18.49){
    texto = "<h2>"+ nome +" possui índice de massa corporal igual a "+massa+", sendo classificado como baixo peso</h2>"
}
else if(massa >= 18.50 && massa <= 24.99){
    texto = "<h2>"+ nome +" possui índice de massa corporal igual a "+massa+", sendo classificado como peso normal</h2>"
}
else if(massa >= 25 && massa <= 29.99){
    texto = "<h2>"+ nome +" possui índice de massa corporal igual a "+massa+", sendo classificado como sobrepeso</h2>"
}
else if(massa >= 30 && massa <= 34.99){
    texto = "<h2>"+ nome +" possui índice de massa corporal igual a "+massa+", sendo classificado como obesidade grau I</h2>"
}
else if(massa >= 35 && massa <= 39.99){
    texto = "<h2>"+ nome +" possui índice de massa corporal igual a "+massa+", sendo classificado como obesidade grau II</h2>"
}
else if(massa > 40){
    texto = "<h2>"+ nome +" possui índice de massa corporal igual a "+massa+", sendo classificado como obesidade grau III</h2>"
}
else{
    texto = "<p>Resultado fora dos parâmetros</p>"
}
document.write(texto)