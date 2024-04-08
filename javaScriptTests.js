
let atbildes = 0;

function rezultats() {
    let pirmaisjValue = document.querySelector('input[name="pirmaisj"]:checked').value;
    let otraisjValue = document.querySelector('input[name="otraisj"]:checked').value;
    let tresaisjValue = document.querySelector('input[name="tresaisj"]:checked').value;
    let ceturtaisjValue = document.querySelector('input[name="ceturtaisj"]:checked').value;

    if (pirmaisjValue == "ja1") {
        atbildes++;
    } else if (pirmaisjValue == "ne1") {
        atbildes--;
    }

    if (otraisjValue == "ja2") {
        atbildes++;
    } else if (otraisjValue == "ne2") {
        atbildes--;
    }

    if (tresaisjValue == "ja3") {
        atbildes++;
    } else if (tresaisjValue == "ne3") {
        atbildes--;
    }

    if (ceturtaisjValue == "ja4") {
        atbildes++;
    } else if (ceturtaisjValue == "ne4") {
        atbildes--;
    }

    if (atbildes > 0) {
        alert("Tu esi Prokastrinējoš cilvēks un tev patīk visu vienmēr atlikt līdz pēdējam brīdim");
    } else if (atbildes == 0) {
        alert("Tu esi starp šīm abām īpašībam un tev piemīt abu to īpašības");
    } else if (atbildes < 0) {
        alert("Tu esi pirmskastrinējoš cilvēks un tev vienmēr patīk visu darīt laicīgi");
    }
}
