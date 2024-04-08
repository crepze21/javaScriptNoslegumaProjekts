


let atskaite

function datums(){
  
  //Izdzēš veco atskaiti, ja tāda ir bijusi
  if (atskaite){
    clearInterval(atskaite)
    document.getElementById('dienas').innerHTML = '00'
    document.getElementById('stundas').innerHTML = '00'
    document.getElementById('minutes').innerHTML = '00'
    document.getElementById('sekundes').innerHTML = '00'
  }
  
//Beigu termiņš
let termins = new Date(datumsIevade.value+'T'+laiksIevade.value||'08:00'+':00').getTime()
console.log(termins)
console.log(datumsIevade.value+'T'+laiksIevade||'08:00'+':00')

//šis kods katru sekundi atkārtojās
atskaite = setInterval(function() {
  //Dabū tagadējo laiku un datumu
  const tagadejaisLaiks = new Date().getTime()

  //Apreiķina atlikušo laiku
  const distance = termins - tagadejaisLaiks

  //Izreiķina dienas, stundas, minūtes un sekundes līdz beigu termiņam
  const dienas = Math.floor(distance / (1000 * 60 * 60 * 24))
  const stundas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const sekundes = Math.floor((distance % (1000 * 60)) / 1000)

  //Pārbaudai, vai distance ir negatīva
  
  if (distance < 0 || isNaN(distance)){
    clearInterval(atskaite)
    alert(`Lūdzu ievadiet datumu vēlreiz`)
    return null
  }
    //Pievieno nulli prikšā, ja vajag
    const stunda = stundas < 10 ? "0" + stundas : stundas
    const minute = minutes < 10 ? "0" + minutes : minutes
    const sekunde = sekundes < 10 ? "0" + sekundes : sekundes
    const diena = dienas < 10 ? "0" + dienas : dienas

    //Dabū elemntus un parāda atskaiti
    document.getElementById('dienas').innerHTML = diena
    document.getElementById('stundas').innerHTML = stunda
    document.getElementById('minutes').innerHTML = minute
    document.getElementById('sekundes').innerHTML = sekunde

  //Ja beidzās atskaite, tad šis "if" pārtrauc programmu
  if (distance < 0) {
    clearInterval(atskaite)
    return null
   
  }
}, 1000)}