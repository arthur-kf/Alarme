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

            document.form_relogio.relogio_h.value = relogio_h
            document.form_relogio.relogio_m.value = relogio_m
            document.form_relogio.relogio_s.value = relogio_s
            setTimeout("moveRelogio()", 1000)
        
}
let res = document.getElementById("res")

function defin(){
    
    let hora = Number(document.getElementById("inH").value)
    let minuto = Number(document.getElementById("inM").value)
    let audio = document.getElementById("audio")

    
    // Este "if" veifica se o Horario declarado é valido.
    if(Number(hora) < 1 || Number(hora) > 24 || Number(minuto) < 0 || Number(minuto) > 60){
        alert("Horário Invalido! ")

    }else{
       setInterval(function() {
        let data = new Date()
        let horaSys = data.getHours()
        let minutosSys = data.getMinutes()
        let segundosSys = data.getSeconds()
        
        if (hora == horaSys && minuto == minutosSys && segundosSys == 0) {
            audio.play()  
        }}, 1000)

        res.innerHTML = `Horário Definido para ${hora}:${minuto}`
    }
}  

function desativar(){
    var audio = document.getElementById("audio")
    audio.pause() 
    res.innerHTML = ""
}







/*
                                                                      ////////////////////////
//////////////////////////////////////////////////////////////////////   Correção de Bugs   //////////////////////////////////////////////////////////////////////////////////////



Quando adicionado "0 Horas" ou 0 "Minutos" tem que acrescentar um "0" na frente: 
                                                            Antes da modificação fica assim:            10:0 ou 0:0
                                                            Depois da modificação deve ficar assim:     10:00 ou 00:00


"Lipar" o conteudo dos "inputs de definição de horário" para "Vazio" depois que o alarme for disparado.


Corgir a função "Desativar" que não cancela o horário definido


*/