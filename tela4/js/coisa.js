function esconder(){
    if (document.getElementById("dinheiro_conta").innerText == "R$ 12.345,00"){
        document.getElementById("dinheiro_conta").innerText = "R$ ***"
    } 
    else{
        document.getElementById("dinheiro_conta").innerText = "R$ 12.345,00"
    }

}