//Função principal do relógio em tempo real//
function moveRelogio(){
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    
    str_segundos = new String(segundos)
    if(str_segundos < 10){
        segundos = "0" + segundos
    }
    str_minutos = new String(minutos)
    if(str_minutos < 10 ){
        minutos = "0" + minutos
    }
    str_hora = new String(hora)
    if(str_hora < 10){
        hora = "0" + hora
    }    
    relogio_h = `${hora}`
    relogio_m = `${minutos}`
    relogio_s = `${segundos}`

    document.getElementById("relogio_h").innerHTML = relogio_h
    document.getElementById("relogio_m").innerHTML = relogio_m
    document.getElementById("relogio_s").innerHTML = relogio_s
    setTimeout("moveRelogio()", 1000)
        
}
let res = document.getElementById("res")

function defin(){
    
    let hora = Number(document.getElementById("inH").value)
    let minuto = Number(document.getElementById("inM").value)
    const audioAtivar = document.getElementById("ativar")

    
    // Este "if" veifica se o Horario declarado é valido.
    if(hora < 1 || hora > 24 || minuto < 0 || minuto > 60){
        alert("Horário Invalido! ")
        res.innerHTML = ""

    }
    else {
        setInterval(() => {
            let data = new Date()
            let horaSys = data.getHours()
            let minutosSys = data.getMinutes()
            let segundosSys = data.getSeconds()
            
            if (hora == horaSys && minuto == minutosSys && segundosSys == 0) {
                audioAtivar.play()  
            }
        }, 1000)
        
        if(minuto < 10){
            res.innerHTML = `Horário Definido para ${hora}:0${minuto}`
        }else{
            res.innerHTML = `Horário Definido para ${hora}:${minuto}`
        }
    }
}  

function desativar(){
    const audioAtivar = document.getElementById("ativar")
    const audioDesativar =  document.getElementById("desativar")
    
    audioAtivar.pause() 
    audioDesativar.play()
    
    res.innerHTML = ""
}







/*

Correção de Bugs



Quando adicionado "0 Horas" ou 0 "Minutos" tem que acrescentar um "0" na frente: 
Antes da modificação fica assim:            10:0 ou 0:0
Depois da modificação deve ficar assim:     10:00 ou 00:00


"Lipar" o conteudo dos "inputs de definição de horário" para "Vazio" depois que o alarme for disparado.


Corgir a função "Desativar" que não cancela o horário definido


*/