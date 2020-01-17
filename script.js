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

//Função para definir o horario do despertador//
function defin(){
    
    let hora = Number(document.getElementById("inH").value)
    let minuto = Number(document.getElementById("inM").value)
    // let segundos = Number(document.getElementById("inS").value)

    setInterval(function() {
        let data = new Date()
        let horaSys = data.getHours()
        let minutosSys = data.getMinutes()
        let segundosSys = data.getSeconds()
        
        if (hora == horaSys && minuto == minutosSys && segundosSys == 0) {
            alert("Alarme Disparado!")
        }
    }, 1000)
}