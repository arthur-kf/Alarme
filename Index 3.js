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
        let h = document.getElementById("inH")
        let h_v = Number(h.value)

        let m = document.getElementById("inM")
        let m_v = Number(m.value)

        let s = document.getElementById("inS")
        let s_v = Number(s.value)

        let res = document.getElementById("res")
        
        let data2 = new Date()
        let hora2 = data2.getHours()
        let minutos2 = data2.getMinutes()
        let segundos2 = data2.getSeconds()
        
        let hora2_v = Number(hora2.value)
        let minutos2_v = Number(minutos2.value)
        let segundos2_v = Number(segundos2.value)
        
        while(h_v.value == hora2_v.value ){
            
            window.alert("agora ta funcionando")
            h_v += 1
        }
        while(m_v.value == minutos2_v.value ){
            
            window.alert("agora ta funcionando")
            m_v += 1
        }
        while(s_v.value == segundos2_v.value ){
            
            window.alert("agora ta funcionando")
            s_v += 1
        }

}