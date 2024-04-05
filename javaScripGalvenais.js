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
        
        const stunda = stundas < 10 ? "0" + stundas : stundas;
        const minute = minutes < 10 ? "0" + minutes : minutes;
        const sekunde = sekundes < 10 ? "0" + sekundes : sekundes;
        
        const
        
        //let istaisLaiks = `${stunda}:${minute}:${sekunde}`
        document.getElementById("stundas").innerHTML = stunda;
        document.getElementById("minutes").innerHTML = minute;
        document.getElementById("sekundes").innerHTML = sekunde;

        setTimeout(pulkstenis, 1000);
    }
  })

function datums(){
    
}
function laiks(){
    
}
function nakamaLapa(){
    window.location.href = "./otraLapa.html";
}
