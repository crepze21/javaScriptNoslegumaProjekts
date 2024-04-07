window.addEventListener("load", () => {
    pulkstenis()
    function pulkstenis(){
        const today = new Date()
        

        
        const stundas = today.getHours()
        const minutes = today.getMinutes()
        const sekundes = today.getSeconds()
        const gadi = today.getFullYear()
        const menesi = today.getMonth()
        const dienas = today.getDay()
        
        //Pievieno nuli priekšā, ja vajag
        const stunda = stundas < 10 ? "0" + stundas : stundas;
        const minute = minutes < 10 ? "0" + minutes : minutes;
        const sekunde = sekundes < 10 ? "0" + sekundes : sekundes;

        //izreiķina, vai ir pilnais Februāris vai nepilnais
        if (gadi % 4 == 0){
            februarisParaNepara = 29
        }
        else(
            februarisParaNepara = 28
        )
        
        //Janvāris, Februāris, Marts, Aprīlis, Maijs, Jūnijs, Jūlijs, Augusts, Septembris, Oktobris, Novembris, Decembris
        const menesuDienuSkaits = [31,februarisParaNepara,31,30,31,30,31,31,30,31,30,31]
        
        
        
        document.getElementById("stundas").innerHTML = stunda;
        document.getElementById("minutes").innerHTML = minute;
        document.getElementById("sekundes").innerHTML = sekunde;



 
        

        setTimeout(pulkstenis, 1000);
    }
  })

function datums(){
    let ievaditaisDatums
    const neapstradatsDatums = datumsIevade.value
    //diena, mēnesis, gads
    const ievaditaisStringDatums = neapstradatsDatums.split(":")

    return  ievaditaisDatums = ievaditaisStringDatums.map(function(numurs){return parseInt(numurs, 10)})
    
    
}



function laiks(){
    let ievaditaisLaiks
    const neapstradatsLaiks = laiksIevade.value

    const ievaditaisStringLaiks = neapstradatsLaiks.split(":")
    return ievaditaisLaiks = ievaditaisStringLaiks.map(function(numurs){return parseInt(numurs, 10)})
}

function nakamaLapa(){
    window.location.href = "./otraLapa.html";
}
