
document.getElementById('formulario').addEventListener('submit', function(e){
    e.preventDefault();

    let campoA = parseInt(document.getElementById('campoA').value);
    let campoB = parseInt(document.getElementById('campoB').value);

    if(campoB>campoA){
        document.getElementById('mensagem').textContent= "Tudo certo, faz sentido :)";
        document.getElementById('mensagem').style.color="green";
    } else{
        document.getElementById('mensagem').textContent= "Invalido, você não pode ser mais velho(a) que sua mãe!";
        document.getElementById('mensagem').style.color="red";
    }
})
