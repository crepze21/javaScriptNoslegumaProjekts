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
        
        
        ievaditaisLaiks = laiks()
        console.log(ievaditaisLaiks)
        
        document.getElementById("stundas").innerHTML = ievaditaisLaiks[0] - stunda
        document.getElementById("minutes").innerHTML = ievaditaisLaiks[1] - minute
        document.getElementById("sekundes").innerHTML = 60 - sekunde

 

        

 
        

        setTimeout(pulkstenis, 1000);

    }
  })

function datums(){
    let ievaditaisDatums
    const neapstradatsDatums = datumsIevade.value
    //diena, mēnesis, gads
    if (isNaN(neapstradatsDatums)){
    const ievaditaisStringDatums = neapstradatsDatums.split(":")
    let pagaiduCipars

    ievaditaisDatums = ievaditaisStringDatums.map(function(numurs){return parseInt(numurs, 10)})
   
   if(ievaditaisDatums[1] == 00 || ievaditaisDatums[1] == 0)
   {
        if(ievaditaisDatums[1] > 60 || ievaditaisDatums[0] > 24){
            alert(`Nepareizi ievadīts laiks, lūdzu meiģiniet vēlreiz`)
            }
        else{
            ievaditaisDatums.pop()
            ievaditaisDatums.push(60)
        }
        
    }   
    else{
        return ievaditaisDatums = [0,0,0]
    }
    
}}



function laiks(){
    let ievaditaisLaiks
    const neapstradatsLaiks = laiksIevade.value
    if (isNaN(neapstradatsLaiks)){
        const ievaditaisStringLaiks = neapstradatsLaiks.split(":")
        return ievaditaisLaiks = ievaditaisStringLaiks.map(function(numurs){return parseInt(numurs, 10)})
    }
    else{
        return ievaditaisLaiks = [0,0]
    }

    
}

function nakamaLapa(){
    window.location.href = "./otraLapa.html";
}
