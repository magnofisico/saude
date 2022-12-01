// JSON CONTATOS
const Contatos =[
{Email:"magno@gmail.com", Senha:"1234", Coment:"O mais velho"},
{Email:"augusto@gmail.com", Senha:"5678", Coment:"o de menos velho"},
{Email:"erik@gmail.com", Senha:"91011", Coment:"O mais novo"}];

// CONTATO EXISTE?
function testar(){
	var email = document.getElementById("Email").value;
	var senha = document.getElementById("Senha").value;
	for (let i = 0; i < 3; i++){    
		if (Contatos[i].Email === email && Contatos[i].Senha === senha){
			window.alert("ok " + email);
			document.getElementById("comentario").innerHTML = Contatos[1].Coment;
		}
    }
}

function linkindex(){

//document.write("<a href=\"index.html"> </a>");
	
}  

function enviar() {
    var op1 = +document.querySelector('input[name="opcao1"]:checked').value;
    var op2 = +document.querySelector('input[name="opcao2"]:checked').value;
    var op3 = +document.querySelector('input[name="opcao3"]:checked').value;
    var op4 = +document.querySelector('input[name="opcao4"]:checked').value;
    var op5 = +document.querySelector('input[name="opcao5"]:checked').value;
    var op6 = +document.querySelector('input[name="opcao6"]:checked').value;
    var op7 = +document.querySelector('input[name="opcao7"]:checked').value;
    var op8 = +document.querySelector('input[name="opcao8"]:checked').value;
    var op9 = +document.querySelector('input[name="opcao9"]:checked').value;
    var soma1 = op1 + op2 + op3;
    var soma2 = op4 + op5;
    var soma3 = op6 + op7;
    var soma4 = op8 + op9;

    // teste de tratamanto dos dados com IF
	
	// regra de 3 para calculo da saude 9 esta para 1% como 42 esta para 100% 
	var totalsau = soma1 + soma2 + soma3 + soma4;
	var saida = ((totalsau - 9)/33)*100;
	var arredondado = parseFloat(saida.toFixed(2));
	
	document.getElementById("valorsaude").innerHTML = "Seu Nínel de saúde esta em: " + arredondado + " %";
    if (soma1 >= 3 && soma1 <= 6) document.getElementById("aqui1").innerHTML = 'Se anima, Coloque mais atividade física na sua vida!';
    if (soma1 >= 7 && soma1 <= 9) document.getElementById("aqui1").innerHTML = 'Você pode melhorar com mais atividade física!';
    if (soma1 >= 10 && soma1 <= 12) document.getElementById("aqui1").innerHTML = 'Você esta indo bem nas suas atividades física!';

    if (soma2 >= 2 && soma2 <= 4) document.getElementById("aqui2").innerHTML = 'Você esta se alimentando mal, melhore sua alimentação!';
    if (soma2 >= 5 && soma2 <= 7) document.getElementById("aqui2").innerHTML = 'Você pode melhorar sua alimentação!';
    if (soma2 >= 8 && soma2 <= 10) document.getElementById("aqui2").innerHTML = 'Você esta se alimentando bem, que bom!';

    if (soma3 >= 2 && soma3 <= 4) document.getElementById("aqui3").innerHTML = 'Você esta se alimentando mal, melhore sua alimentação!';
    if (soma3 >= 5 && soma3 <= 7) document.getElementById("aqui3").innerHTML = 'Você pode melhorar sua alimentação!';
    if (soma3 >= 8 && soma3 <= 10) document.getElementById("aqui3").innerHTML = 'Você esta se alimentando bem, que bom!';

    if (soma4 >= 2 && soma4 <= 4) document.getElementById("aqui4").innerHTML = 'Pare de fumar e beber alcool, estes habitos lhe fazem mal!';
    if (soma4 >= 5 && soma4 <= 7) document.getElementById("aqui4").innerHTML = 'Modere com o que só de faz mal, o alcool e o fumo!';
    if (soma4 >= 8 && soma4 <= 10) document.getElementById("aqui4").innerHTML = 'Se você não bebe nem fuma, você esta indo muito bem!';

    // o sinal de mais de +  muda de string para NUMERO.. NAO SIGNIFICA SOMA
}





	 
